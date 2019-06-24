/**
 * Handles In-app message filtering
 */
import VarCache from './VarCache'

/** private
 * return true if message pass one trigger/verb condition
 * if no trigger, return false as in android
 * @param {object} params
 * // @param {object} message
 * // @param {object?} message.whenTriggers
 * @return {function({object}):{boolean}}
 */
const filterByTriggers = (params={}) => (message) => {
  const messageTriggers = message.whenTriggers && message.whenTriggers.children
  if(!params.triggers || !messageTriggers) {
    return false
  }

  let filteredByTriggers = messageTriggers.filter((messageTrigger) => (
    params.triggers.includes(messageTrigger.subject))
  )

  if (!filteredByTriggers.length) {
    return false
  }
  const verbFilter = filterByVerbs(params)
  if(!verbFilter) {
    return false
  }
  filteredByTriggers = filteredByTriggers.filter(verbFilter)

  return filteredByTriggers.length
}

/** private
 * return true if trigger pass verb/noun/objects condition
 * @param {object} params
 * // @param {object} trigger
 * // @param {string} trigger.verb
 * @return {function({object}):{boolean}}
 */
const filterByVerbs = (params) => (messageTrigger) => {
  if(params.verb === '' && messageTrigger.verb === '') {
    return true
  }
  if(params.verb !== messageTrigger.verb){
    return false
  }
  const evaluator = triggerVerbEvaluators[messageTrigger.verb]
  if(!evaluator){
    return false
  }
  return evaluator(messageTrigger, params.noun, params.objects)
}

/** private
 * return true if message pass all limits
 * @param {number} now
 * // @param {Object} message
 * @return {function({object}):{boolean}}
 */
const filterByLimits = (now) => (message) => {
  const limits = message.whenLimits && message.whenLimits.children
  if(!limits || limits.length < 1) {
    return true
  }
  return limits.every((limit) => {
      const verbEvaluator = limitVerbEvaluators[limit.verb]
      if (!verbEvaluator) {
        return false
      }
      return verbEvaluator(message.id, limit.noun, limit.objects[0], now)
    }
  )
}

/** private
 * return the amount of occurence of messageView since 'since'
 * @param {number} since
 * // @param {Object} messageView
 * // @param {Object} messageView.t
 * @return {function({number}, {object}): {number}}
 */
const countMessageViewsByLimit = (since) => (iterator, messageView) => {
  if(messageView.t > since) {
    iterator+=1
  }
  return iterator
}
/** private
 * return true if no limits are defined or if now is in the range
 * @param {number} now
 * // @param {object} limitTime
 * // @param {object?} limitTime.startTime
 * // @param {object?} limitTime.endTime
 * @return {function( {object}):{Boolean}}
 */
const filterByLimitTimes = (now) => (limitTime) => {
  return (!limitTime.startTime || limitTime.startTime < now) &&
    (!limitTime.endTime || limitTime.endTime > now )
}

/** private
 * provide evaluators for filterByVerbs
 */
const triggerVerbEvaluators = {
  triggers: (messageTrigger, noun) => {
    return noun === messageTrigger.noun
  },
  triggersWithParameter: (messageTrigger, noun, params = {}) => {
    return noun === messageTrigger.noun &&
      params.paramName === messageTrigger.objects[0] &&
      params.paramValue === messageTrigger.objects[1]
  },
  changesTo: (messageTrigger, noun, params = {}) => {
    return noun === messageTrigger.noun && params.to === messageTrigger.objects[0]
  },
  changesFromTo: (messageTrigger, noun, params = {}) => {
    return noun === messageTrigger.noun &&
      params.from === messageTrigger.objects[0] &&
      params.to === messageTrigger.objects[1]
  }
}

/** private
 * provide evaluators for filterByLimit
 */
const limitVerbEvaluators = {
  limitUser: (messageId, maxView) => {
    return VarCache.getMessageView(messageId).length < maxView
  },
  limitMonth: (messageId, maxView, amount, now) => {
    const since = now - amount * 30 * 24 * 60 * 60 * 1000
    return VarCache.getMessageView(messageId)
      .reduce( countMessageViewsByLimit(since), 0) < maxView
  },
  limitWeek: (messageId, maxView, amount, now) => {
    const since = now - amount * 7 * 24 * 60 * 60 * 1000
    return VarCache.getMessageView(messageId)
      .reduce( countMessageViewsByLimit(since), 0) < maxView
  },
  limitDay: (messageId, maxView, amount, now) => {
    const since = now - amount * 24 * 60 * 60 * 1000
    return VarCache.getMessageView(messageId)
      .reduce( countMessageViewsByLimit(since), 0) < maxView
  },
  limitHour: (messageId, maxView, amount, now) => {
    const since = now - amount * 60 * 60 * 1000
    return VarCache.getMessageView(messageId)
      .reduce( countMessageViewsByLimit(since), 0) < maxView
  },
  limitMinute: (messageId, maxView, amount, now) => {
    const since = now - amount * 60 * 1000
    return VarCache.getMessageView(messageId)
      .reduce( countMessageViewsByLimit(since), 0) < maxView
  },
  limitSecond: (messageId, maxView, amount, now) => {
    const since = now - amount * 1000
    return VarCache.getMessageView(messageId)
      .reduce( countMessageViewsByLimit(since), 0) < maxView
  },
  limitSession: (messageId, maxView) => {
    return VarCache.getMessageView(messageId, true).length < maxView
  },
}
/**
 * Provide filtering logic for messages
 */
export default class ActionManager {

  /** public
   * return an array of filtered message ordered by priority
   * @param {array} messages
   * @param {string | string[] | ?} triggers
   * @param {string?} verb
   * @param {string?} noun
   * @param {object?} params
   * @param {string?} params.from
   * @param {string?} params.to
   * @param {string?} params.paramValue
   * @param {string?} params.paramName
   * @return {array}
   */
  static filterMessages(messages, triggers='', verb, noun, params) {
    if(!Array.isArray(triggers)) {
      triggers = [triggers]
    }
    const now = Date.now()
    return messages.filter(filterByTriggers(
        {
          triggers: triggers,
          verb: verb,
          noun: noun,
          objects: params
        }
      ))
      .filter(filterByLimits(now))
      .filter(filterByLimitTimes(now))
      .sort((a, b) => a.priority - b.priority)
  }

  /** public
   * return an array of messages filter by id and and limit
   * @params {string} messageId
   * @params {message[]} messages
   */
  static filterMessagesById(messages, messageId){
    const now = Date.now()
    return messages.filter((message) => messageId === message.id)
      .filter(filterByLimits(now))
      .filter(filterByLimitTimes(now))
  }
}
