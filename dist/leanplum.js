(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Leanplum"] = factory();
	else
		root["Leanplum"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(21);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*
 *
 *  Copyright 2017 Leanplum Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
var _default = {
  METHODS: {
    START: 'start',
    STOP: 'stop',
    ADVANCE: 'advance',
    TRACK: 'track',
    PAUSE_SESSION: 'pauseSession',
    RESUME_SESSION: 'resumeSession',
    PAUSE_STATE: 'pauseState',
    RESUME_STATE: 'resumeState',
    DOWNLOAD_FILE: 'downloadFile',
    MULTI: 'multi',
    SET_VARS: 'setVars',
    GET_VARS: 'getVars',
    SET_USER_ATTRIBUTES: 'setUserAttributes',
    SET_DEVICE_ATTRIBUTES: 'setDeviceAttributes',
    UPLOAD_FILE: 'uploadFile',
    REGISTER_DEVICE: 'registerDevice'
  },
  SDK_VERSION: '2.0.3-iflix',
  CLIENT: 'js',
  PARAMS: {
    ACTION: 'action',
    APP_ID: 'appId',
    CLIENT: 'client',
    CLIENT_KEY: 'clientKey',
    DEVICE_ID: 'deviceId',
    SDK_VERSION: 'sdkVersion',
    USER_ID: 'userId',
    NEW_USER_ID: 'newUserId',
    DEV_MODE: 'devMode',
    VERSION_NAME: 'versionName',
    SYSTEM_NAME: 'systemName',
    SYSTEM_VERSION: 'systemVersion',
    BROWSER_NAME: 'browserName',
    BROWSER_VERSION: 'browserVersion',
    DEVICE_NAME: 'deviceName',
    DEVICE_MODEL: 'deviceModel',
    USER_ATTRIBUTES: 'userAttributes',
    LOCALE: 'locale',
    COUNTRY: 'country',
    REGION: 'region',
    CITY: 'city',
    LOCATION: 'location',
    STATE: 'state',
    INFO: 'info',
    EVENT: 'event',
    VALUE: 'value',
    FILENAME: 'filename',
    TIME: 'time',
    DATA: 'data',
    VARS: 'vars',
    FILE: 'file',
    SIZE: 'size',
    VARIATION: 'variation',
    HASH: 'hash',
    EMAIL: 'email',
    VARIABLES: 'vars',
    PARAMS: 'params',
    INCLUDE_DEFAULTS: 'includeDefaults',
    INCLUDE_VARIANT_DEBUG_INFO: 'includeVariantDebugInfo',
    WEB_PUSH_SUBSCRIPTION: 'webPushSubscription',
    MESSAGE_ID: 'messageId'
  },
  KEYS: {
    IS_REGISTERED: 'isRegistered',
    LATEST_VERSION: 'latestVersion',
    VARS: 'vars',
    VARIANTS: 'variants',
    VARIANT_DEBUG_INFO: 'variantDebugInfo',
    ACTION_METADATA: 'actionMetadata',
    TOKEN: 'token',
    MESSAGES: 'messages'
  },
  DEFAULT_KEYS: {
    COUNT: '__leanplum_unsynced',
    ITEM: '__leanplum_unsynced_',
    VARIABLES: '__leanplum_variables',
    VARIANTS: '__leanplum_variants',
    VARIANT_DEBUG_INFO: '__leanplum_variant_debug_info',
    ACTION_METADATA: '__leanplum_action_metadata',
    TOKEN: '__leanplum_token',
    DEVICE_ID: '__leanplum_device_id',
    USER_ID: '__leanplum_user_id',
    PUSH_SUBSCRIPTION: '__leanplum_push_subscription',
    MESSAGE_VIEW: '__leanplum_messages_view'
  },
  VALUES: {
    DETECT: '(detect)'
  }
};
exports["default"] = _default;
module.exports = exports.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(53),
    getValue = __webpack_require__(66);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Constants = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Leanplum ArgsBuilder, use to construct request payload.
 */
var ArgsBuilder =
/*#__PURE__*/
function () {
  /**
   * Create a new empty request argument.
   */
  function ArgsBuilder() {
    _classCallCheck(this, ArgsBuilder);

    this.argString = '';
    this.argValues = {};
  }
  /**
   * Add given key, value to the payload.
   * @param {string} key The key for the value.
   * @param {string|boolean} value The value for given key.
   * @return {ArgsBuilder} Returns an object of ArgsBuilder.
   */


  _createClass(ArgsBuilder, [{
    key: "add",
    value: function add(key, value) {
      if (typeof value === 'undefined') {
        return this;
      }

      if (this.argString) {
        this.argString += '&';
      }

      var encodedUriComponent = encodeURIComponent(value);
      this.argString += "".concat(key, "=").concat(encodedUriComponent);
      this.argValues[key] = value;
      return this;
    }
    /**
     * Cache the given body.
     * @param  {String} [body] A given body.
     * @return {ArgsBuilder|String} Returns ArgsBuilder if body given, else the
     *                              body.
     */

  }, {
    key: "body",
    value: function body(_body) {
      if (_body) {
        this._body = _body;
        return this;
      }

      return this._body;
    }
    /**
     * Convenience method to attach given appId and appKey to request.
     * @param  {String} appId The appId to attach.
     * @param  {String} clientKey The appKey to attach.
     * @return {ArgsBuilder} Returns an object of ArgsBuilder.
     */

  }, {
    key: "attachApiKeys",
    value: function attachApiKeys(appId, clientKey) {
      return this.add(_Constants["default"].PARAMS.APP_ID, appId).add(_Constants["default"].PARAMS.CLIENT, _Constants["default"].CLIENT).add(_Constants["default"].PARAMS.CLIENT_KEY, clientKey);
    }
    /**
     * Return the arguments.
     * @return {String} Arguments string.
     */

  }, {
    key: "build",
    value: function build() {
      return this.argString;
    }
    /**
     * Return the argument values.
     * @return {Object} The argument values.
     */

  }, {
    key: "buildDict",
    value: function buildDict() {
      return this.argValues;
    }
  }]);

  return ArgsBuilder;
}();

exports["default"] = ArgsBuilder;
module.exports = exports.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Constants = _interopRequireDefault(__webpack_require__(1));

var _ArgsBuilder = _interopRequireDefault(__webpack_require__(3));

var _InternalState = _interopRequireDefault(__webpack_require__(12));

var _Network = _interopRequireDefault(__webpack_require__(18));

var _LocalStorageManager = _interopRequireDefault(__webpack_require__(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var lastRequestTime = undefined;
var cooldownTimeout = null;

var LeanplumRequest =
/*#__PURE__*/
function () {
  function LeanplumRequest() {
    _classCallCheck(this, LeanplumRequest);
  }

  _createClass(LeanplumRequest, null, [{
    key: "request",

    /**
     *
     * @param action
     * @param params
     * @param options
     * @param options.success
     * @param options.error
     * @param options.response
     * @param options.queued
     * @param options.sendNow
     * @private
     */
    value: function request(action, params, options) {
      options = options || {};
      params = params || new _ArgsBuilder["default"](); // Get or create device ID and user ID.

      if (!LeanplumRequest.deviceId) {
        LeanplumRequest.deviceId = _LocalStorageManager["default"].getFromLocalStorage(_Constants["default"].DEFAULT_KEYS.DEVICE_ID);
      }

      if (!LeanplumRequest.deviceId) {
        var id = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' + '0123456789';

        for (var i = 0; i < 16; i++) {
          id += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        LeanplumRequest.deviceId = id;

        _LocalStorageManager["default"].saveToLocalStorage(_Constants["default"].DEFAULT_KEYS.DEVICE_ID, id);
      }

      if (!LeanplumRequest.userId) {
        LeanplumRequest.userId = _LocalStorageManager["default"].getFromLocalStorage(_Constants["default"].DEFAULT_KEYS.USER_ID);

        if (!LeanplumRequest.userId) {
          LeanplumRequest.userId = LeanplumRequest.deviceId;
        }
      }

      _LocalStorageManager["default"].saveToLocalStorage(_Constants["default"].DEFAULT_KEYS.USER_ID, LeanplumRequest.userId);

      var argsBuilder = params.attachApiKeys(LeanplumRequest.appId, LeanplumRequest.clientKey).add(_Constants["default"].PARAMS.SDK_VERSION, _Constants["default"].SDK_VERSION).add(_Constants["default"].PARAMS.DEVICE_ID, LeanplumRequest.deviceId).add(_Constants["default"].PARAMS.USER_ID, LeanplumRequest.userId).add(_Constants["default"].PARAMS.ACTION, action).add(_Constants["default"].PARAMS.VERSION_NAME, LeanplumRequest.versionName).add(_Constants["default"].PARAMS.DEV_MODE, _InternalState["default"].devMode).add(_Constants["default"].PARAMS.TIME, (new Date().getTime() / 1000).toString());
      var success = options.success || options.response;
      var error = options.error || options.response;

      if (!LeanplumRequest.appId || !LeanplumRequest.clientKey) {
        var err = 'Leanplum App ID and client key are not set. Make sure you ' + 'are calling setAppIdForDevelopmentMode or setAppIdForProductionMode ' + 'before issuing API calls.';
        console.error(err);
        if (error) error(err);
        return;
      }

      if (params.body()) {
        _Network["default"].ajax('POST', "".concat(LeanplumRequest.apiPath, "?").concat(argsBuilder.build()), params.body(), success, error, options.queued);

        return;
      }

      var sendNow = _InternalState["default"].devMode || options.sendNow || !LeanplumRequest.batchEnabled;

      var sendUnsentRequests = function sendUnsentRequests() {
        var requestsToSend = LeanplumRequest.popUnsentRequests();

        if (requestsToSend.length > 0) {
          var requestData = JSON.stringify({
            'data': requestsToSend
          });
          var multiRequestArgs = new _ArgsBuilder["default"]().attachApiKeys(LeanplumRequest.appId, LeanplumRequest.clientKey).add(_Constants["default"].PARAMS.SDK_VERSION, _Constants["default"].SDK_VERSION).add(_Constants["default"].PARAMS.ACTION, _Constants["default"].METHODS.MULTI).add(_Constants["default"].PARAMS.TIME, (new Date().getTime() / 1000).toString().toString()).build();

          _Network["default"].ajax('POST', "".concat(LeanplumRequest.apiPath, "?").concat(multiRequestArgs), requestData, success, error, options.queued);
        }
      }; // Deal with cooldown.


      if (!sendNow && LeanplumRequest.batchCooldown) {
        var now = new Date().getTime() / 1000;

        if (!lastRequestTime || now - lastRequestTime >= LeanplumRequest.batchCooldown) {
          sendNow = true;
          lastRequestTime = now;
        } else if (!cooldownTimeout) {
          cooldownTimeout = setTimeout(function () {
            cooldownTimeout = null;
            lastRequestTime = new Date().getTime() / 1000;
            sendUnsentRequests();
          }, (LeanplumRequest.batchCooldown - (now - lastRequestTime)) * 1000);
        }
      }

      LeanplumRequest.saveRequestForLater(argsBuilder.buildDict());

      if (sendNow) {
        sendUnsentRequests();
      }
    }
  }, {
    key: "generateRequestUrl",
    value: function generateRequestUrl(action, queryParams) {
      queryParams = queryParams || new _ArgsBuilder["default"](); // Get or create device ID and user ID.

      if (!LeanplumRequest.deviceId) {
        LeanplumRequest.deviceId = _LocalStorageManager["default"].getFromLocalStorage(_Constants["default"].DEFAULT_KEYS.DEVICE_ID);
      }

      if (!LeanplumRequest.deviceId) {
        var id = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' + '0123456789';

        for (var i = 0; i < 16; i++) {
          id += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        LeanplumRequest.deviceId = id;

        _LocalStorageManager["default"].saveToLocalStorage(_Constants["default"].DEFAULT_KEYS.DEVICE_ID, id);
      }

      if (!LeanplumRequest.userId) {
        LeanplumRequest.userId = _LocalStorageManager["default"].getFromLocalStorage(_Constants["default"].DEFAULT_KEYS.USER_ID);

        if (!LeanplumRequest.userId) {
          LeanplumRequest.userId = LeanplumRequest.deviceId;
        }
      }

      _LocalStorageManager["default"].saveToLocalStorage(_Constants["default"].DEFAULT_KEYS.USER_ID, LeanplumRequest.userId);

      var argsBuilder = queryParams.attachApiKeys(LeanplumRequest.appId, LeanplumRequest.clientKey).add(_Constants["default"].PARAMS.SDK_VERSION, _Constants["default"].SDK_VERSION).add(_Constants["default"].PARAMS.DEVICE_ID, LeanplumRequest.deviceId).add(_Constants["default"].PARAMS.USER_ID, LeanplumRequest.userId).add(_Constants["default"].PARAMS.ACTION, action).add(_Constants["default"].PARAMS.VERSION_NAME, LeanplumRequest.versionName).add(_Constants["default"].PARAMS.DEV_MODE, _InternalState["default"].devMode).add(_Constants["default"].PARAMS.TIME, (new Date().getTime() / 1000).toString());

      if (!LeanplumRequest.appId || !LeanplumRequest.clientKey) {
        var err = 'Leanplum App ID and client key are not set. Make sure you ' + 'are calling setAppIdForDevelopmentMode or setAppIdForProductionMode ' + 'before issuing API calls.';
        console.error(err);
        throw new Error(err);
      }

      return "".concat(LeanplumRequest.apiPath, "?").concat(argsBuilder.build());
    }
    /**
     * Sets the network timeout.
     * @param {number} seconds The timeout in seconds.
     */

  }, {
    key: "setNetworkTimeout",
    value: function setNetworkTimeout(seconds) {
      _Network["default"].setNetworkTimeout(seconds);
    }
  }, {
    key: "saveRequestForLater",
    value: function saveRequestForLater(args) {
      var count = _LocalStorageManager["default"].getFromLocalStorage(_Constants["default"].DEFAULT_KEYS.COUNT) || 0;
      var itemKey = _Constants["default"].DEFAULT_KEYS.ITEM + count;

      _LocalStorageManager["default"].saveToLocalStorage(itemKey, JSON.stringify(args));

      count++;

      _LocalStorageManager["default"].saveToLocalStorage(_Constants["default"].DEFAULT_KEYS.COUNT, count);
    }
  }, {
    key: "popUnsentRequests",
    value: function popUnsentRequests() {
      var requestData = [];
      var count = _LocalStorageManager["default"].getFromLocalStorage(_Constants["default"].DEFAULT_KEYS.COUNT) || 0;

      _LocalStorageManager["default"].removeFromLocalStorage(_Constants["default"].DEFAULT_KEYS.COUNT);

      for (var i = 0; i < count; i++) {
        var itemKey = _Constants["default"].DEFAULT_KEYS.ITEM + i;

        try {
          var requestArgs = JSON.parse(_LocalStorageManager["default"].getFromLocalStorage(itemKey));
          requestData.push(requestArgs);
        } catch (ignored) {// eslint-disable-next-line no-empty
        }

        _LocalStorageManager["default"].removeFromLocalStorage(itemKey);
      }

      return requestData;
    } // //////////////// Response parsing //////////////////

  }, {
    key: "numResponses",
    value: function numResponses(response) {
      if (!response || !response.response) {
        return 0;
      }

      return response.response.length;
    }
  }, {
    key: "getResponseAt",
    value: function getResponseAt(response, index) {
      if (!response || !response.response) {
        return null;
      }

      return response.response[index];
    }
  }, {
    key: "getLastResponse",
    value: function getLastResponse(response) {
      var count = LeanplumRequest.numResponses(response);

      if (count > 0) {
        return LeanplumRequest.getResponseAt(response, count - 1);
      } else {
        return null;
      }
    }
  }, {
    key: "isResponseSuccess",
    value: function isResponseSuccess(response) {
      if (!response) {
        return false;
      }

      return !!response.success;
    }
  }, {
    key: "getResponseError",
    value: function getResponseError(response) {
      if (!response) {
        return null;
      }

      var error = response.error;

      if (!error) {
        return null;
      }

      return error.message;
    }
  }]);

  return LeanplumRequest;
}();

exports["default"] = LeanplumRequest;

_defineProperty(LeanplumRequest, "apiPath", 'https://www.leanplum.com/api');

_defineProperty(LeanplumRequest, "batchEnabled", true);

_defineProperty(LeanplumRequest, "batchCooldown", 5);

module.exports = exports.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *
 *  Copyright 2017 Leanplum Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
var localStorageEnabled;
var alternateLocalStorage = {};

var LocalStorageManager =
/*#__PURE__*/
function () {
  function LocalStorageManager() {
    _classCallCheck(this, LocalStorageManager);
  }

  _createClass(LocalStorageManager, null, [{
    key: "getFromLocalStorage",
    value: function getFromLocalStorage(key) {
      if (localStorageEnabled === false) {
        return alternateLocalStorage[key];
      }

      return localStorage[key];
    }
  }, {
    key: "saveToLocalStorage",
    value: function saveToLocalStorage(key, value) {
      if (localStorageEnabled === false) {
        alternateLocalStorage[key] = value;
        return;
      }

      try {
        localStorage[key] = value;
      } catch (e) {
        localStorageEnabled = false;
        alternateLocalStorage[key] = value;
      }
    }
  }, {
    key: "removeFromLocalStorage",
    value: function removeFromLocalStorage(key) {
      if (localStorageEnabled === false) {
        delete alternateLocalStorage[key];
        return;
      }

      try {
        localStorage.removeItem(key);
      } catch (e) {
        localStorageEnabled = false;
        delete alternateLocalStorage[key];
      }
    }
  }]);

  return LocalStorageManager;
}();

exports["default"] = LocalStorageManager;
module.exports = exports.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(76),
    listCacheDelete = __webpack_require__(77),
    listCacheGet = __webpack_require__(78),
    listCacheHas = __webpack_require__(79),
    listCacheSet = __webpack_require__(80);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(23);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(15),
    getRawTag = __webpack_require__(63),
    objectToString = __webpack_require__(89);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(73);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 *
 *  Copyright 2017 Leanplum Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
var InternalState =
/*#__PURE__*/
function () {
  function InternalState() {
    _classCallCheck(this, InternalState);
  }

  _createClass(InternalState, null, [{
    key: "addStartResponseHandler",
    value: function addStartResponseHandler(handler) {
      InternalState.startHandlers.push(handler);

      if (InternalState.hasStarted) {
        handler(InternalState.startSuccessful);
      }
    }
  }, {
    key: "removeStartResponseHandler",
    value: function removeStartResponseHandler(handler) {
      var idx = InternalState.startHandlers.indexOf(handler);

      if (idx >= 0) {
        InternalState.startHandlers.splice(idx, 1);
      }
    }
  }, {
    key: "triggerStartHandlers",
    value: function triggerStartHandlers() {
      for (var i = 0; i < InternalState.startHandlers.length; i++) {
        InternalState.startHandlers[i](InternalState.startSuccessful);
      }
    }
  }, {
    key: "addVariablesChangedHandler",
    value: function addVariablesChangedHandler(handler) {
      InternalState.variablesChangedHandlers.push(handler);

      if (InternalState.hasReceivedDiffs) {
        handler();
      }
    }
  }, {
    key: "removeVariablesChangedHandler",
    value: function removeVariablesChangedHandler(handler) {
      var idx = InternalState.variablesChangedHandlers.indexOf(handler);

      if (idx >= 0) {
        InternalState.variablesChangedHandlers.splice(idx, 1);
      }
    }
  }, {
    key: "triggerVariablesChangedHandlers",
    value: function triggerVariablesChangedHandlers() {
      for (var i = 0; i < InternalState.variablesChangedHandlers.length; i++) {
        InternalState.variablesChangedHandlers[i]();
      }
    }
  }, {
    key: "setVariantDebugInfoEnabled",
    value: function setVariantDebugInfoEnabled(variantDebugInfoEnabled) {
      InternalState.variantDebugInfoEnabled = variantDebugInfoEnabled;
    }
  }]);

  return InternalState;
}();

exports["default"] = InternalState;

_defineProperty(InternalState, "devMode", false);

_defineProperty(InternalState, "variablesChangedHandlers", []);

_defineProperty(InternalState, "hasReceivedDiffs", false);

_defineProperty(InternalState, "startHandlers", []);

_defineProperty(InternalState, "hasStarted", false);

_defineProperty(InternalState, "startSuccessful", false);

_defineProperty(InternalState, "variantDebugInfoEnabled", false);

module.exports = exports.default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Constants = _interopRequireDefault(__webpack_require__(1));

var _InternalState = _interopRequireDefault(__webpack_require__(12));

var _ArgsBuilder = _interopRequireDefault(__webpack_require__(3));

var _LocalStorageManager = _interopRequireDefault(__webpack_require__(5));

var _LeanplumRequest = _interopRequireDefault(__webpack_require__(4));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VarCache =
/*#__PURE__*/
function () {
  function VarCache() {
    _classCallCheck(this, VarCache);
  }

  _createClass(VarCache, null, [{
    key: "applyDiffs",
    value: function applyDiffs(diffs, variants, actionMetadata) {
      VarCache.diffs = diffs;
      VarCache.variants = variants;
      VarCache.actionMetadata = actionMetadata;
      _InternalState["default"].hasReceivedDiffs = true;
      VarCache.merged = VarCache.mergeHelper(VarCache.variables, diffs);
      VarCache.saveDiffs();

      if (VarCache.onUpdate) {
        VarCache.onUpdate();
      }
    }
  }, {
    key: "loadDiffs",
    value: function loadDiffs() {
      try {
        VarCache.applyDiffs(JSON.parse(_LocalStorageManager["default"].getFromLocalStorage(_Constants["default"].DEFAULT_KEYS.VARIABLES) || null), JSON.parse(_LocalStorageManager["default"].getFromLocalStorage(_Constants["default"].DEFAULT_KEYS.VARIANTS) || null), JSON.parse(_LocalStorageManager["default"].getFromLocalStorage(_Constants["default"].DEFAULT_KEYS.ACTION_METADATA) || null));
        VarCache.token = _LocalStorageManager["default"].getFromLocalStorage(_Constants["default"].DEFAULT_KEYS.TOKEN);
        VarCache.variantDebugInfo = _LocalStorageManager["default"].getFromLocalStorage(_Constants["default"].DEFAULT_KEYS.VARIANT_DEBUG_INFO);
      } catch (e) {
        console.log("Leanplum: Invalid diffs: ".concat(e));
      }
    }
  }, {
    key: "saveDiffs",
    value: function saveDiffs() {
      _LocalStorageManager["default"].saveToLocalStorage(_Constants["default"].DEFAULT_KEYS.VARIABLES, JSON.stringify(VarCache.diffs || {}));

      _LocalStorageManager["default"].saveToLocalStorage(_Constants["default"].DEFAULT_KEYS.VARIANTS, JSON.stringify(VarCache.variants || []));

      _LocalStorageManager["default"].saveToLocalStorage(_Constants["default"].DEFAULT_KEYS.ACTION_METADATA, JSON.stringify(VarCache.actionMetadata || {}));

      _LocalStorageManager["default"].saveToLocalStorage(_Constants["default"].DEFAULT_KEYS.VARIANT_DEBUG_INFO, JSON.stringify(VarCache.variantDebugInfo || {}));

      _LocalStorageManager["default"].saveToLocalStorage(_Constants["default"].DEFAULT_KEYS.TOKEN, VarCache.token);
    }
    /**
     * record view message in local storage and  in memory (aka session)
     * @param messageId
     */

  }, {
    key: "addMessageView",
    value: function addMessageView(messageId) {
      var messageView = VarCache.getMessagesView()[messageId];

      if (messageView === undefined) {
        VarCache.messagesView[messageId] = [];
      }

      var messageViewPerSession = VarCache.messagesViewPerSession[messageId] || [];
      var now = Date.now();
      messageViewPerSession.push({
        t: now
      });
      VarCache.messagesView[messageId].push({
        t: now
      });

      _LocalStorageManager["default"].saveToLocalStorage(_Constants["default"].DEFAULT_KEYS.MESSAGE_VIEW, JSON.stringify(VarCache.messagesView || {}));
    }
    /**
     * get an object containing all the messageViews with messageId as key, per session or from start
     * @param session {Boolean | undefined}
     * @returns {Object}
     */

  }, {
    key: "getMessagesView",
    value: function getMessagesView(session) {
      if (session) {
        return VarCache.messagesViewPerSession;
      }

      if (VarCache.messagesView === undefined) {
        VarCache.messagesView = JSON.parse(_LocalStorageManager["default"].getFromLocalStorage(_Constants["default"].DEFAULT_KEYS.MESSAGE_VIEW) || '{}');
      }

      return VarCache.messagesView;
    }
    /**
     * get all view for a given message either form the start or per session
     * @param {string} messageId
     * @param {boolean | undefined} session
     * @returns {*|Array}
     */

  }, {
    key: "getMessageView",
    value: function getMessageView(messageId, session) {
      return VarCache.getMessagesView(session)[messageId] || [];
    }
  }, {
    key: "setVariables",
    value: function setVariables(variables) {
      VarCache.variables = variables;
    }
  }, {
    key: "getVariables",
    value: function getVariables() {
      return VarCache.merged !== undefined ? VarCache.merged : VarCache.variables;
    }
  }, {
    key: "getVariantDebugInfo",
    value: function getVariantDebugInfo() {
      return VarCache.variantDebugInfo;
    }
  }, {
    key: "sendVariables",
    value: function sendVariables() {
      var body = {};
      body[_Constants["default"].PARAMS.VARIABLES] = VarCache.variables;

      _LeanplumRequest["default"].request(_Constants["default"].METHODS.SET_VARS, new _ArgsBuilder["default"]().body(JSON.stringify(body)), {
        sendNow: true
      });
    }
  }, {
    key: "getMessages",
    value: function getMessages() {
      return VarCache.messages;
    }
    /**
     * Transform message { messageId:{message}, } to [{message}] and store
     * @param {Object} messages
     */

  }, {
    key: "setMessages",
    value: function setMessages(messages) {
      VarCache.messages = Object.entries(messages).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            id = _ref2[0],
            message = _ref2[1];

        return _objectSpread({
          id: id
        }, message);
      });
    }
  }, {
    key: "mergeHelper",
    value: function mergeHelper(vars, diff) {
      if (typeof diff === 'number' || typeof diff === 'boolean' || typeof diff === 'string') {
        return diff;
      }

      if (diff === null || diff === undefined) {
        return vars;
      }

      var objIterator = function objIterator(obj) {
        return function (f) {
          if (obj instanceof Array) {
            for (var i = 0; i < obj.length; i++) {
              f(obj[i]);
            }
          } else {
            for (var attr in obj) {
              // This seems to be best practice: https://github.com/eslint/eslint/issues/7071
              // eslint-disable-next-line prefer-reflect
              if ({}.hasOwnProperty.call(obj, attr)) {
                f(attr);
              }
            }
          }
        };
      };

      var varsIterator = objIterator(vars);
      var diffIterator = objIterator(diff); // Infer that the diffs is an array if the vars value doesn't exist to tell us the type.

      var isArray = false;

      if (vars === null) {
        if (!(diff instanceof Array)) {
          isArray = null;

          for (var attribute in diff) {
            if (!diff.hasOwnProperty(attribute)) {
              continue;
            }

            if (isArray === null) {
              isArray = true;
            }

            if (!(typeof attribute === 'string')) {
              isArray = false;
              break;
            }

            if (attribute.length < 3 || attribute.charAt(0) !== '[' || attribute.charAt(attribute.length - 1) !== ']') {
              isArray = false;
              break;
            }

            var varSubscript = attribute.substring(1, attribute.length - 1);

            if (!parseInt(varSubscript).toString() === varSubscript) {
              isArray = false;
              break;
            }
          }
        }
      } // Merge arrays.


      if (vars instanceof Array || isArray) {
        var _merged = [];
        varsIterator(function (attr) {
          _merged.push(attr);
        });
        diffIterator(function (varSubscript) {
          var subscript = parseInt(varSubscript.substring(1, varSubscript.length - 1));
          var diffValue = diff[varSubscript];

          while (subscript >= _merged.length) {
            _merged.push(null);
          }

          _merged[subscript] = VarCache.mergeHelper(_merged[subscript], diffValue);
        });
        return _merged;
      } // Merge dictionaries.


      var merged = {};
      varsIterator(function (attr) {
        if (diff[attr] === null || diff[attr] === undefined) {
          merged[attr] = vars[attr];
        }
      });
      diffIterator(function (attr) {
        merged[attr] = VarCache.mergeHelper(vars !== null ? vars[attr] : null, diff[attr]);
      });
      return merged;
    }
  }, {
    key: "clearUserContent",
    value: function clearUserContent() {
      VarCache.diffs = undefined;
      VarCache.variables = null;
      VarCache.variants = [];
      VarCache.variantDebugInfo = {};
      VarCache.merged = undefined;
    }
  }]);

  return VarCache;
}();

exports["default"] = VarCache;

_defineProperty(VarCache, "diffs", undefined);

_defineProperty(VarCache, "variables", null);

_defineProperty(VarCache, "variants", []);

_defineProperty(VarCache, "variantDebugInfo", {});

_defineProperty(VarCache, "merged", undefined);

_defineProperty(VarCache, "onUpdate", undefined);

_defineProperty(VarCache, "token", '');

_defineProperty(VarCache, "actionMetadata", {});

_defineProperty(VarCache, "messagesView", undefined);

_defineProperty(VarCache, "messagesViewPerSession", []);

_defineProperty(VarCache, "messages", void 0);

module.exports = exports.default;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function () {
  var topics = {};
  return {
    subscribe: function subscribe(topic, listener) {
      if (!topics.hasOwnProperty.call(topics, topic)) topics[topic] = [];
      var index = topics[topic].push(listener) - 1;
      return {
        remove: function remove() {
          delete topics[topic][index];
        }
      };
    },
    publish: function publish(topic, info) {
      if (!topics.hasOwnProperty.call(topics, topic)) return;
      topics[topic].forEach(function (item) {
        item(info != undefined ? info : {});
      });
    }
  };
}();

exports["default"] = _default;
module.exports = exports.default;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Ajax functions from:
 *
 * Parse JavaScript SDK
 * Version: 1.1.5
 * Built: Mon Oct 01 2012 17:57:13
 * http://parse.com
 *
 * Copyright 2012 Parse, Inc.
 * The Parse JavaScript SDK is freely distributable under the MIT license.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
var requestQueue = [];
var networkTimeoutSeconds = 10;

var Network =
/*#__PURE__*/
function () {
  function Network() {
    _classCallCheck(this, Network);
  }

  _createClass(Network, null, [{
    key: "setNetworkTimeout",

    /**
     * Sets the network timeout.
     * @param {number} seconds The timeout in seconds.
     */
    value: function setNetworkTimeout(seconds) {
      networkTimeoutSeconds = seconds;
    }
    /**
     * Make an ajax request.
     * @param {string} method The http method.
     * @param {string} url The url to open.
     * @param {String|ArrayBuffer|Blob|Document|FormData} data The data to be sent in body.
     * @param {function} success A callback function to be called on success.
     * @param {function} error A callback function to be called on error.
     * @param {boolean} queued Whether the request should be queued or immediately sent.
     * @param {boolean} [plainText] Whether the response should be returned as plain text or json.
     * @return {*}
     */

  }, {
    key: "ajax",
    value: function ajax(method, url, data, success, error, queued, plainText) {
      if (queued) {
        if (Network.runningRequest) {
          // eslint-disable-next-line prefer-rest-params
          return Network.enqueueRequest(arguments);
        }

        Network.runningRequest = true;
      }
      /** @namespace XDomainRequest **/

      /** @namespace location **/


      if (typeof XDomainRequest !== 'undefined') {
        if (location.protocol === 'http:' && url.indexOf('https:') === 0) {
          url = "http:".concat(url.substring(6));
        } // eslint-disable-next-line prefer-rest-params


        return Reflect.apply(Network.ajaxIE8, null, arguments);
      }

      var handled = false;
      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (handled) {
            return;
          }

          handled = true;
          var response;
          var ranCallback = false;

          if (plainText) {
            response = xhr.responseText;
          } else {
            try {
              response = JSON.parse(xhr.responseText);
            } catch (e) {
              setTimeout(function () {
                if (error) {
                  error(null, xhr);
                }
              }, 0);
              ranCallback = true;
            }
          }

          if (!ranCallback) {
            if (xhr.status >= 200 && xhr.status < 300) {
              setTimeout(function () {
                if (success) {
                  success(response, xhr);
                }
              }, 0);
            } else {
              setTimeout(function () {
                if (error) {
                  error(response, xhr);
                }
              }, 0);
            }
          }

          if (queued) {
            Network.runningRequest = false;
            Network.dequeueRequest();
          }
        }
      };

      xhr.open(method, url, true);
      xhr.setRequestHeader('Content-Type', 'text/plain'); // Avoid pre-flight.

      xhr.send(data);
      setTimeout(function () {
        if (!handled) {
          xhr.abort();
        }
      }, networkTimeoutSeconds * 1000);
    }
    /**
     * Make an ajax request for IE8.
     * @param {string} method The http method.
     * @param {string} url The url to open.
     * @param {String|ArrayBuffer|Blob|Document|FormData} data The data to be sent in body.
     * @param {function} success A callback function to be called on success.
     * @param {function} error A callback function to be called on error.
     * @param {boolean} queued Whether the request should be queued or immediately sent.
     * @param {boolean} plainText Whether the response should be returned as plain text or json.
     */

  }, {
    key: "ajaxIE8",
    value: function ajaxIE8(method, url, data, success, error, queued, plainText) {
      var xdr = new XDomainRequest();

      xdr.onload = function () {
        var response;
        var ranCallback = false;

        if (plainText) {
          response = xdr.responseText;
        } else {
          try {
            response = JSON.parse(xdr.responseText);
          } catch (e) {
            setTimeout(function () {
              if (error) {
                error(null, xdr);
              }
            }, 0);
            ranCallback = true;
          }
        }

        if (!ranCallback) {
          setTimeout(function () {
            if (success) {
              success(response, xdr);
            }
          }, 0);
        }

        if (queued) {
          Network.runningRequest = false;
          Network.dequeueRequest();
        }
      };

      xdr.onerror = xdr.ontimeout = function () {
        setTimeout(function () {
          if (error) {
            error(null, xdr);
          }
        }, 0);

        if (queued) {
          Network.runningRequest = false;
          Network.dequeueRequest();
        }
      };

      xdr.onprogress = function () {};

      xdr.open(method, url);
      xdr.timeout = networkTimeoutSeconds * 1000;
      xdr.send(data);
    }
    /**
     * Adds the request to the request queue.
     * @param {Arguments} requestArguments The request arguments from the initial method call.
     * @private
     */

  }, {
    key: "enqueueRequest",
    value: function enqueueRequest(requestArguments) {
      requestQueue.push(requestArguments);
    }
    /**
     * Removes the request from the request queue.
     * @private
     */

  }, {
    key: "dequeueRequest",
    value: function dequeueRequest() {
      var args = requestQueue.shift();

      if (args) {
        Reflect.apply(Network.ajax, null, args);
      }
    }
  }]);

  return Network;
}();

exports["default"] = Network;
module.exports = exports.default;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(81),
    mapCacheDelete = __webpack_require__(82),
    mapCacheGet = __webpack_require__(83),
    mapCacheHas = __webpack_require__(84),
    mapCacheSet = __webpack_require__(85);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(41),
    arraySome = __webpack_require__(48),
    cacheHas = __webpack_require__(58);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(104)))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(0),
    stubFalse = __webpack_require__(103);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)(module)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(51);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    isObject = __webpack_require__(28);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(54),
    baseUnary = __webpack_require__(57),
    nodeUtil = __webpack_require__(88);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _VarCache = _interopRequireDefault(__webpack_require__(13));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** private
 * return true if message pass one trigger/verb condition
 * if no trigger, return false as in android
 * @param {object} params
 * // @param {object} message
 * // @param {object?} message.whenTriggers
 * @return {function({object}):{boolean}}
 */
var filterByTriggers = function filterByTriggers() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (message) {
    var triggers = message.whenTriggers && message.whenTriggers.children;

    if (!params.triggers || !triggers) {
      return false;
    }

    var filteredByTriggers = triggers.filter(function (trigger) {
      return params.triggers.includes(trigger.subject);
    });

    if (!filteredByTriggers.length) {
      return false;
    }

    var verbFilter = filterByVerbs(params);

    if (!verbFilter) {
      return false;
    }

    filteredByTriggers = filteredByTriggers.filter(verbFilter);
    return filteredByTriggers.length;
  };
};
/** private
 * return true if trigger pass verb/noun/objects condition
 * @param {object} params
 * // @param {object} trigger
 * // @param {string} trigger.verb
 * @return {function({object}):{boolean}}
 */


var filterByVerbs = function filterByVerbs(params) {
  return function (trigger) {
    if (trigger.verb === '') {
      return true;
    }

    var evaluator = triggerVerbEvaluators[trigger.verb];
    return evaluator(trigger, params.noun, params.objects);
  };
};
/** private
 * return true if message pass all limits
 * @param {number} now
 * // @param {Object} message
 * @return {function({object}):{boolean}}
 */


var filterByLimits = function filterByLimits(now) {
  return function (message) {
    var limits = message.whenLimits && message.whenLimits.children;

    if (!limits || limits.length < 1) {
      return true;
    }

    return limits.every(function (limit) {
      var verbEvaluator = limitVerbEvaluators[limit.verb];

      if (!verbEvaluator) {
        return false;
      }

      return verbEvaluator(message.id, limit.noun, limit.objects[0], now);
    });
  };
};
/** private
 * return the amount of occurence of messageView since 'since'
 * @param {number} since
 * // @param {Object} messageView
 * // @param {Object} messageView.t
 * @return {function({number}, {object}): {number}}
 */


var countMessageViewsByLimit = function countMessageViewsByLimit(since) {
  return function (iterator, messageView) {
    if (messageView.t > since) {
      iterator += 1;
    }

    return iterator;
  };
};
/** private
 * return true if no limits are defined or if now is in the range
 * @param {number} now
 * // @param {object} limitTime
 * // @param {object?} limitTime.startTime
 * // @param {object?} limitTime.endTime
 * @return {function( {object}):{Boolean}}
 */


var filterByLimitTimes = function filterByLimitTimes(now) {
  return function (limitTime) {
    return (!limitTime.startTime || limitTime.startTime < now) && (!limitTime.endTime || limitTime.endTime > now);
  };
};
/** private
 * provide evaluators for filterByVerbs
 */


var triggerVerbEvaluators = {
  triggers: function triggers(trigger, noun) {
    return noun === trigger.noun;
  },
  triggersWithParameter: function triggersWithParameter(trigger, noun) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return noun === trigger.noun && params.paramValue === trigger.objects[params.paramName];
  },
  changesTo: function changesTo(trigger, noun) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return noun === trigger.noun && params.to === trigger.objects[0];
  },
  changesFromTo: function changesFromTo(trigger, noun) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return noun === trigger.noun && params.from === trigger.objects[0] && params.to === trigger.objects[1];
  }
  /** private
   * provide evaluators for filterByLimit
   */

};
var limitVerbEvaluators = {
  limitUser: function limitUser(messageId, maxView) {
    return _VarCache["default"].getMessageView(messageId).length < maxView;
  },
  limitMonth: function limitMonth(messageId, maxView, amount, now) {
    var since = now - amount * 30 * 24 * 60 * 60 * 1000;
    return _VarCache["default"].getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
  },
  limitWeek: function limitWeek(messageId, maxView, amount, now) {
    var since = now - amount * 7 * 24 * 60 * 60 * 1000;
    return _VarCache["default"].getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
  },
  limitDay: function limitDay(messageId, maxView, amount, now) {
    var since = now - amount * 24 * 60 * 60 * 1000;
    return _VarCache["default"].getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
  },
  limitHour: function limitHour(messageId, maxView, amount, now) {
    var since = now - amount * 60 * 60 * 1000;
    return _VarCache["default"].getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
  },
  limitMinute: function limitMinute(messageId, maxView, amount, now) {
    var since = now - amount * 60 * 1000;
    return _VarCache["default"].getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
  },
  limitSecond: function limitSecond(messageId, maxView, amount, now) {
    var since = now - amount * 1000;
    return _VarCache["default"].getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
  },
  limitSession: function limitSession(messageId, maxView) {
    return _VarCache["default"].getMessageView(messageId, true).length < maxView;
  }
  /**
   * Provide filtering logic for messages
   */

};

var ActionManager =
/*#__PURE__*/
function () {
  function ActionManager() {
    _classCallCheck(this, ActionManager);
  }

  _createClass(ActionManager, null, [{
    key: "filterMessages",

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
    value: function filterMessages(messages) {
      var triggers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var verb = arguments.length > 2 ? arguments[2] : undefined;
      var noun = arguments.length > 3 ? arguments[3] : undefined;
      var params = arguments.length > 4 ? arguments[4] : undefined;

      if (!Array.isArray(triggers)) {
        triggers = [triggers];
      }

      var now = Date.now();
      return messages.filter(filterByTriggers({
        triggers: triggers,
        verb: verb,
        noun: noun,
        objects: params
      })).filter(filterByLimits(now)).filter(filterByLimitTimes(now)).sort(function (a, b) {
        return a.priority - b.priority;
      });
    }
  }]);

  return ActionManager;
}();

exports["default"] = ActionManager;
module.exports = exports.default;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *
 *  Copyright 2017 Leanplum Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
var dataBrowser = [{
  string: navigator.userAgent,
  subString: 'Chrome',
  identity: 'Chrome'
}, {
  string: navigator.userAgent,
  subString: 'OmniWeb',
  versionSearch: 'OmniWeb/',
  identity: 'OmniWeb'
}, {
  string: navigator.vendor,
  subString: 'Apple',
  identity: 'Safari',
  versionSearch: 'Version'
}, {
  prop: window.opera,
  identity: 'Opera',
  versionSearch: 'Version'
}, {
  string: navigator.vendor,
  subString: 'iCab',
  identity: 'iCab'
}, {
  string: navigator.vendor,
  subString: 'KDE',
  identity: 'Konqueror'
}, {
  string: navigator.userAgent,
  subString: 'Firefox',
  identity: 'Firefox'
}, {
  string: navigator.vendor,
  subString: 'Camino',
  identity: 'Camino'
}, {
  // for newer Netscape (6+)
  string: navigator.userAgent,
  subString: 'Netscape',
  identity: 'Netscape'
}, {
  string: navigator.userAgent,
  subString: 'MSIE',
  identity: 'Explorer',
  versionSearch: 'MSIE'
}, {
  string: navigator.userAgent,
  subString: 'Gecko',
  identity: 'Mozilla',
  versionSearch: 'rv'
}, {
  // for older Netscape (4-)
  string: navigator.userAgent,
  subString: 'Mozilla',
  identity: 'Netscape',
  versionSearch: 'Mozilla'
}];
var dataOS = [{
  string: navigator.platform,
  subString: 'Win',
  identity: 'Windows'
}, {
  string: navigator.platform,
  subString: 'Mac',
  identity: 'Mac OS'
}, {
  string: navigator.userAgent,
  subString: 'iPhone',
  identity: 'iOS'
}, {
  string: navigator.platform,
  subString: 'Linux',
  identity: 'Linux'
}]; // Browser detection. Source: http://www.quirksmode.org/js/detect.html

/**
 * Helper class to detect which browser client is using.
 */

var BrowserDetector =
/*#__PURE__*/
function () {
  /**
   * Initializes the object with current browser settings.
   */
  function BrowserDetector() {
    _classCallCheck(this, BrowserDetector);

    this.browser = this._searchString(dataBrowser) || 'Unknown Browser';
    this.version = this._searchVersion(navigator.userAgent) || this._searchVersion(navigator.appVersion) || 'Unknown Version';
    this.OS = this._searchString(dataOS) || 'Unknown OS';
  }
  /**
   * Matches the client's system to the predefined system list.
   * @param {object} data The data object to scan.
   * @return {string} The found identity string.
   */


  _createClass(BrowserDetector, [{
    key: "_searchString",
    value: function _searchString(data) {
      for (var i = 0; i < data.length; i++) {
        var dataString = data[i].string;
        var dataProp = data[i].prop;
        this.versionSearchString = data[i].versionSearch || data[i].identity;

        if (dataString) {
          if (dataString.indexOf(data[i].subString) !== -1) {
            return data[i].identity;
          }
        } else if (dataProp) {
          return data[i].identity;
        }
      }
    }
    /**
     * Finds the current version of the given system.
     * @param {object} dataString The data object to scan.
     * @return {number} The found number.
     * @private
     */

  }, {
    key: "_searchVersion",
    value: function _searchVersion(dataString) {
      if (!dataString) {
        return -1;
      }

      var index = dataString.indexOf(this.versionSearchString);

      if (index === -1) {
        return -1;
      }

      return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    }
  }]);

  return BrowserDetector;
}();

exports["default"] = BrowserDetector;
module.exports = exports.default;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Constants = _interopRequireDefault(__webpack_require__(1));

var _ArgsBuilder = _interopRequireDefault(__webpack_require__(3));

var _SocketIoClient = _interopRequireDefault(__webpack_require__(36));

var _VarCache = _interopRequireDefault(__webpack_require__(13));

var _LeanplumRequest = _interopRequireDefault(__webpack_require__(4));

var _isEqual = _interopRequireDefault(__webpack_require__(25));

var _Events = _interopRequireDefault(__webpack_require__(17));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LeanplumSocket =
/*#__PURE__*/
function () {
  function LeanplumSocket() {
    _classCallCheck(this, LeanplumSocket);
  }

  _createClass(LeanplumSocket, null, [{
    key: "connect",
    value: function connect() {
      if (!WebSocket) {
        console.log('Your browser doesn\'t support WebSockets.');
        return;
      }

      var client = new _SocketIoClient["default"]();
      var authSent = false;

      client.onopen = function () {
        if (!authSent) {
          console.log('Leanplum: Connected to development server.');
          var args = {};
          args[_Constants["default"].PARAMS.APP_ID] = _LeanplumRequest["default"].appId;
          args[_Constants["default"].PARAMS.DEVICE_ID] = _LeanplumRequest["default"].deviceId;
          client.send('auth', args);
          authSent = true;
        }
      };

      client.onerror = function (event) {
        console.log('Leanplum: Socket error', event);
      };
      /**
       *
       * @param event
       * @param args
       * @param args[].email
       */


      client.onmessage = function (event, args) {
        if (event === 'updateVars') {
          _LeanplumRequest["default"].request(_Constants["default"].METHODS.GET_VARS, new _ArgsBuilder["default"]().add(_Constants["default"].PARAMS.INCLUDE_DEFAULTS, false), {
            queued: false,
            sendNow: true,
            response: function response(_response) {
              var getVarsResponse = _LeanplumRequest["default"].getLastResponse(_response);

              var values = getVarsResponse[_Constants["default"].KEYS.VARS];
              var variants = getVarsResponse[_Constants["default"].KEYS.VARIANTS];
              var actionMetadata = getVarsResponse[_Constants["default"].KEYS.ACTION_METADATA];

              if (!(0, _isEqual["default"])(values, _VarCache["default"].diffs)) {
                _VarCache["default"].applyDiffs(values, variants, actionMetadata);
              }
            }
          });
        } else if (event === 'getVariables') {
          _VarCache["default"].sendVariables();

          client.send('getContentResponse', {
            'updated': true
          });
        } else if (event === 'getActions') {
          // Unsupported in JavaScript SDK.
          client.send('getContentResponse', {
            'updated': false
          });
        } else if (event === 'registerDevice') {
          // eslint-disable-next-line no-alert
          alert("Your device has been registered to ".concat(args[0].email, "."));
        } else if (event === 'trigger') {
          _Events["default"].publish('websocket/trigger', {
            args: args
          });
        }
      };

      client.onclose = function () {
        console.log('Leanplum: Disconnected to development server.');
        authSent = false;
      };

      client.connect(LeanplumSocket.socketHost);
      setInterval(function () {
        if (!client.connected && !client.connecting) {
          client.connect(LeanplumSocket.socketHost);
        }
      }, 5000);
    }
  }]);

  return LeanplumSocket;
}();

exports["default"] = LeanplumSocket;

_defineProperty(LeanplumSocket, "socketHost", 'dev.leanplum.com');

module.exports = exports.default;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Constants = _interopRequireDefault(__webpack_require__(1));

var _ArgsBuilder = _interopRequireDefault(__webpack_require__(3));

var _isEqual = _interopRequireDefault(__webpack_require__(25));

var _LocalStorageManager = _interopRequireDefault(__webpack_require__(5));

var _LeanplumRequest = _interopRequireDefault(__webpack_require__(4));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var APPLICATION_SERVER_PUBLIC_KEY = 'BInWPpWntfR39rgXSP04pqdmEdDGa50z6zqbMvxyxJCwzXIuSpSh8C888-CfJ82WELl7Xe8cjA' + 'nfCt-3vK0Ci68';
var isSubscribed = false;
var serviceWorkerRegistration = null;
/**
 * Push Manager handles the registration and subscription for web push.
 */

var PushManager =
/*#__PURE__*/
function () {
  function PushManager() {
    _classCallCheck(this, PushManager);
  }

  _createClass(PushManager, null, [{
    key: "isWebPushSupported",

    /**
     * Whether or not web push is supported in the browser.
     * @return {Boolean} True if supported, else false.
     */
    value: function isWebPushSupported() {
      return navigator && navigator.serviceWorker && 'serviceWorker' in navigator && 'PushManager' in window;
    }
    /**
     * Whether or not the browser is subscribed to web push notifications.
     * @return {Promise} True if subscribed, else false.
     */

  }, {
    key: "isWebPushSubscribed",
    value: function isWebPushSubscribed() {
      if (!PushManager.isWebPushSupported()) {
        return new Promise(function (resolve) {
          resolve(false);
        });
      }

      return PushManager.getServiceWorkerRegistration().then(function (registration) {
        return new Promise(function (resolve) {
          if (!registration) {
            resolve(false);
          } else {
            /** @namespace registration.pushManager The push manager object of the browser. **/

            /** @namespace registration.pushManager.getSubscription **/
            registration.pushManager.getSubscription().then(function (subscription) {
              isSubscribed = subscription !== null;

              if (isSubscribed) {
                PushManager.updateNewSubscriptionOnServer(subscription);
              }

              resolve(isSubscribed);
            });
          }
        });
      });
    }
    /**
     * Register for WebPush.
     * @param  {String}   serviceWorkerUrl The url that serves the service worker
     *                                     on your domain.
     * @param  {Function} callback         The callback to be called with result.
     * @return {object} nothing
     */

  }, {
    key: "register",
    value: function register(serviceWorkerUrl, callback) {
      if (!PushManager.isWebPushSupported()) {
        console.log('Leanplum: Push messaging is not supported.');
        return callback(false);
      }

      navigator.serviceWorker.register(serviceWorkerUrl ? serviceWorkerUrl : '/sw.min.js', null).then(function (registration) {
        serviceWorkerRegistration = registration;
        var serviceWorker;

        if (registration.installing) {
          serviceWorker = registration.installing;
        } else if (registration.waiting) {
          serviceWorker = registration.waiting;
        } else if (registration.active) {
          serviceWorker = registration.active;
        }

        if (!serviceWorker) {
          return;
        }

        var subscribe = function subscribe() {
          // Set the initial subscription value
          serviceWorkerRegistration.pushManager.getSubscription().then(function (subscription) {
            isSubscribed = !(subscription === null);

            if (isSubscribed) {
              PushManager.updateNewSubscriptionOnServer(subscription);
            }

            if (callback) {
              return callback(isSubscribed);
            }
          });
        };

        if (serviceWorker.state === 'activated') {
          return subscribe();
        }

        serviceWorker.addEventListener('statechange', function (event) {
          if (event.target.state !== 'activated') {
            return;
          }

          subscribe();
        });
      })["catch"](function (error) {
        console.log('Leanplum: Service Worker Error: ', error);
      });
    }
    /**
     * Subscribe the user(browser) to push.
     * @return {Promise} Resolves if subscription successful, otherwise rejects.
     */

  }, {
    key: "subscribeUser",
    value: function subscribeUser() {
      var applicationServerKey = PushManager.urlB64ToUint8Array(APPLICATION_SERVER_PUBLIC_KEY);
      return new Promise(function (resolve, reject) {
        /** @namespace serviceWorkerRegistration.pushManager.subscribe Subscribe to push. **/
        return serviceWorkerRegistration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: applicationServerKey
        }).then(function (subscription) {
          if (subscription) {
            PushManager.updateNewSubscriptionOnServer(subscription);
            isSubscribed = true;
            return resolve(isSubscribed);
          }

          isSubscribed = false;
          return reject();
        })["catch"](function (err) {
          return reject("Leanplum: Failed to subscribe the user: ".concat(err));
        });
      });
    }
    /**
     * Unsubscribe the user(browser) from push.
     * @return {Promise} Resolves if unsubscribed, otherwise rejects.
     */

  }, {
    key: "unsubscribeUser",
    value: function unsubscribeUser() {
      return new Promise(function (resolve, reject) {
        PushManager.isWebPushSubscribed().then(function (subscribed) {
          if (!subscribed) {
            return resolve();
          }

          serviceWorkerRegistration.pushManager.getSubscription().then(function (subscription) {
            if (subscription) {
              /** @namespace serviceWorkerRegistration.pushManager.unsubscribe Unsubscribe to
               *  push. **/
              return subscription.unsubscribe();
            }

            return reject();
          })["catch"](function (error) {
            reject("Leanplum: Error unsubscribing: ".concat(error));
          }).then(function (success) {
            if (success) {
              isSubscribed = false;
              return resolve();
            }

            return reject();
          });
        }, function (error) {
          return reject();
        });
      });
    }
    /**
     * Retrieves the service worker registration object from browser.
     * @return {object} Returns the registration or null.
     */

  }, {
    key: "getServiceWorkerRegistration",
    value: function getServiceWorkerRegistration() {
      return new Promise(function (resolve) {
        if (serviceWorkerRegistration) {
          resolve(serviceWorkerRegistration);
        } else {
          /** @namespace navigator.serviceWorker.getRegistration Retrieves the  push registration
           * from the browser. **/
          navigator.serviceWorker.getRegistration().then(function (registration) {
            serviceWorkerRegistration = registration;
            resolve(registration);
          });
        }
      });
    }
    /**
     * Encodes a base64 url string to an uint8 arrary.
     * @param  {string} base64String [description]
     * @return {Uint8Array}              [description]
     */

  }, {
    key: "urlB64ToUint8Array",
    value: function urlB64ToUint8Array(base64String) {
      var padding = '='.repeat((4 - base64String.length % 4) % 4);
      var base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
      var rawData = window.atob(base64);
      var outputArray = new Uint8Array(rawData.length);

      for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }

      return outputArray;
    }
    /**
     * [prepareSubscription description]
     * @param  {object} subscription The raw subscription from browser.
     * @param  {function} subscription.getKey The subscription key.
     * @param  {string} subscription.endpoint The subscription key.
     * @return {object} The subscription object to be sent to server.
     */

  }, {
    key: "prepareSubscription",
    value: function prepareSubscription(subscription) {
      var key = subscription.getKey ? subscription.getKey('p256dh') : '';
      var auth = subscription.getKey ? subscription.getKey('auth') : ''; // noinspection ES6ModulesDependencies

      var keyAscii = btoa(Reflect.apply(String.fromCharCode, null, new Uint8Array(key))); // noinspection ES6ModulesDependencies

      var authAscii = btoa(Reflect.apply(String.fromCharCode, null, new Uint8Array(auth)));
      return {
        endpoint: subscription.endpoint,
        key: keyAscii,
        auth: authAscii
      };
    }
    /**
     * Send a new subscription object to the Leanplum server.
     * @param {object} subscription The subscription.
     */

  }, {
    key: "updateNewSubscriptionOnServer",
    value: function updateNewSubscriptionOnServer(subscription) {
      if (subscription) {
        var preparedSubscription = PushManager.prepareSubscription(subscription);
        var preparedSubscriptionString = JSON.stringify(preparedSubscription);

        var existingSubscriptionString = _LocalStorageManager["default"].getFromLocalStorage(_Constants["default"].DEFAULT_KEYS.PUSH_SUBSCRIPTION);

        if (!(0, _isEqual["default"])(existingSubscriptionString, preparedSubscriptionString)) {
          _LocalStorageManager["default"].saveToLocalStorage(_Constants["default"].DEFAULT_KEYS.PUSH_SUBSCRIPTION, preparedSubscriptionString);

          PushManager.setSubscription(preparedSubscriptionString);
        }
      }
    }
    /**
     * Send the subscription to the Leanplum server.
     * @param {String/Object} subscription The subscription string.
     */

  }, {
    key: "setSubscription",
    value: function setSubscription(subscription) {
      if (!subscription) {
        return;
      }

      _LeanplumRequest["default"].request(_Constants["default"].METHODS.SET_DEVICE_ATTRIBUTES, new _ArgsBuilder["default"]().add(_Constants["default"].PARAMS.WEB_PUSH_SUBSCRIPTION, subscription), {
        queued: false,
        sendNow: true
      });
    }
  }]);

  return PushManager;
}();

exports["default"] = PushManager;
module.exports = exports.default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Constants = _interopRequireDefault(__webpack_require__(1));

var _InternalState = _interopRequireDefault(__webpack_require__(12));

var _ArgsBuilder = _interopRequireDefault(__webpack_require__(3));

var _BrowserDetector = _interopRequireDefault(__webpack_require__(32));

var _PushManager = _interopRequireDefault(__webpack_require__(34));

var _ActionManager = _interopRequireDefault(__webpack_require__(31));

var _LocalStorageManager = _interopRequireDefault(__webpack_require__(5));

var _VarCache = _interopRequireDefault(__webpack_require__(13));

var _LeanplumRequest = _interopRequireDefault(__webpack_require__(4));

var _LeanplumSocket = _interopRequireDefault(__webpack_require__(33));

var _Events = _interopRequireDefault(__webpack_require__(17));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _browserDetector = new _BrowserDetector["default"]();
/**
 * @preserve Leanplum Javascript SDK.
 * Copyright 2016, Leanplum, Inc. All rights reserved.
 *
 * You may not distribute this source code without prior written permission
 * from Leanplum.
 */


var Leanplum =
/*#__PURE__*/
function () {
  function Leanplum() {
    _classCallCheck(this, Leanplum);
  }

  _createClass(Leanplum, null, [{
    key: "setApiPath",
    value: function setApiPath(apiPath) {
      if (!_LeanplumRequest["default"].apiPath) {
        return;
      }

      _LeanplumRequest["default"].apiPath = apiPath;
    }
  }, {
    key: "setEmail",
    value: function setEmail(email) {
      Leanplum._email = email;
    }
    /**
     * Sets the network timeout.
     * @param {number} seconds The timeout in seconds.
     */

  }, {
    key: "setNetworkTimeout",
    value: function setNetworkTimeout(seconds) {
      _LeanplumRequest["default"].setNetworkTimeout(seconds);
    }
  }, {
    key: "setVariantDebugInfoEnabled",
    value: function setVariantDebugInfoEnabled(variantDebugInfoEnabled) {
      _InternalState["default"].setVariantDebugInfoEnabled(variantDebugInfoEnabled);
    }
  }, {
    key: "getVariantDebugInfo",
    value: function getVariantDebugInfo() {
      return _VarCache["default"].getVariantDebugInfo();
    }
  }, {
    key: "setAppIdForDevelopmentMode",
    value: function setAppIdForDevelopmentMode(appId, accessKey) {
      _LeanplumRequest["default"].appId = appId;
      _LeanplumRequest["default"].clientKey = accessKey;
      _InternalState["default"].devMode = true;
    }
  }, {
    key: "setAppIdForProductionMode",
    value: function setAppIdForProductionMode(appId, accessKey) {
      _LeanplumRequest["default"].appId = appId;
      _LeanplumRequest["default"].clientKey = accessKey;
      _InternalState["default"].devMode = false;
    }
  }, {
    key: "setSocketHost",
    value: function setSocketHost(host) {
      _LeanplumSocket["default"].socketHost = host;
    }
  }, {
    key: "setDeviceId",
    value: function setDeviceId(deviceId) {
      _LeanplumRequest["default"].deviceId = deviceId;
    }
  }, {
    key: "setAppVersion",
    value: function setAppVersion(versionName) {
      _LeanplumRequest["default"].versionName = versionName;
    }
  }, {
    key: "setDeviceName",
    value: function setDeviceName(deviceName) {
      Leanplum._deviceName = deviceName;
    }
  }, {
    key: "setDeviceModel",
    value: function setDeviceModel(deviceModel) {
      Leanplum._deviceModel = deviceModel;
    }
  }, {
    key: "setSystemName",
    value: function setSystemName(systemName) {
      Leanplum._systemName = systemName;
    }
  }, {
    key: "setSystemVersion",
    value: function setSystemVersion(systemVersion) {
      Leanplum._systemVersion = systemVersion;
    }
  }, {
    key: "setVariables",
    value: function setVariables(variables) {
      _VarCache["default"].setVariables(variables);
    }
  }, {
    key: "setRequestBatching",
    value: function setRequestBatching(batchEnabled, cooldownSeconds) {
      _LeanplumRequest["default"].batchEnabled = batchEnabled;
      _LeanplumRequest["default"].batchCooldown = cooldownSeconds;
    }
  }, {
    key: "getVariables",
    value: function getVariables() {
      return _VarCache["default"].getVariables();
    }
  }, {
    key: "getVariable",
    value: function getVariable() {
      var current = Leanplum.getVariables();

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      for (var i = 0; i < args.length; i++) {
        current = current[args[i]];
      }

      return current;
    }
  }, {
    key: "getVariants",
    value: function getVariants() {
      return _VarCache["default"].variants || [];
    }
  }, {
    key: "getMessages",
    value: function getMessages() {
      return Varcache.getMessages() || [];
    }
  }, {
    key: "addStartResponseHandler",
    value: function addStartResponseHandler(handler) {
      _InternalState["default"].addStartResponseHandler(handler);
    }
  }, {
    key: "addVariablesChangedHandler",
    value: function addVariablesChangedHandler(handler) {
      _InternalState["default"].addVariablesChangedHandler(handler);
    }
  }, {
    key: "removeStartResponseHandler",
    value: function removeStartResponseHandler(handler) {
      _InternalState["default"].removeStartResponseHandler(handler);
    }
  }, {
    key: "removeVariablesChangedHandler",
    value: function removeVariablesChangedHandler(handler) {
      _InternalState["default"].removeVariablesChangedHandler(handler);
    }
  }, {
    key: "forceContentUpdate",
    value: function forceContentUpdate(callback) {
      _LeanplumRequest["default"].request(_Constants["default"].METHODS.GET_VARS, new _ArgsBuilder["default"]().add(_Constants["default"].PARAMS.INCLUDE_DEFAULTS, false).add(_Constants["default"].PARAMS.INCLUDE_VARIANT_DEBUG_INFO, _InternalState["default"].variantDebugInfoEnabled), {
        queued: false,
        sendNow: true,
        response: function response(_response) {
          var getVarsResponse = _LeanplumRequest["default"].getLastResponse(_response);

          var isSuccess = _LeanplumRequest["default"].isResponseSuccess(getVarsResponse);

          if (isSuccess) {
            _VarCache["default"].applyDiffs(getVarsResponse[_Constants["default"].KEYS.VARS], getVarsResponse[_Constants["default"].KEYS.VARIANTS], getVarsResponse[_Constants["default"].KEYS.ACTION_METADATA]);

            _VarCache["default"].variantDebugInfo = getVarsResponse[_Constants["default"].KEYS.VARIANT_DEBUG_INFO];
          }

          if (callback) {
            callback(isSuccess);
          }
        }
      });
    }
  }, {
    key: "start",
    value: function start(userId, userAttributes, callback) {
      // Overloads.
      if (typeof userId === 'function') {
        callback = userId;
        userAttributes = {};
        userId = null;
      } else if (_typeof(userId) === 'object' && userId !== null && userId !== undefined) {
        callback = userAttributes;
        userAttributes = userId;
        userId = null;
      } else if (typeof userAttributes === 'function') {
        callback = userAttributes;
        userAttributes = {};
      }

      _LeanplumRequest["default"].userId = userId;

      if (callback) {
        Leanplum.addStartResponseHandler(callback);
      }

      _VarCache["default"].onUpdate = function () {
        _InternalState["default"].triggerVariablesChangedHandlers();
      };

      var args = new _ArgsBuilder["default"]().add(_Constants["default"].PARAMS.USER_ATTRIBUTES, JSON.stringify(userAttributes)).add(_Constants["default"].PARAMS.COUNTRY, _Constants["default"].VALUES.DETECT).add(_Constants["default"].PARAMS.REGION, _Constants["default"].VALUES.DETECT).add(_Constants["default"].PARAMS.CITY, _Constants["default"].VALUES.DETECT).add(_Constants["default"].PARAMS.LOCATION, _Constants["default"].VALUES.DETECT).add(_Constants["default"].PARAMS.SYSTEM_NAME, Leanplum._systemName || _browserDetector.OS).add(_Constants["default"].PARAMS.SYSTEM_VERSION, (Leanplum._systemVersion || '').toString()).add(_Constants["default"].PARAMS.BROWSER_NAME, _browserDetector.browser).add(_Constants["default"].PARAMS.BROWSER_VERSION, _browserDetector.version.toString()).add(_Constants["default"].PARAMS.LOCALE, _Constants["default"].VALUES.DETECT).add(_Constants["default"].PARAMS.DEVICE_NAME, Leanplum._deviceName || "".concat(_browserDetector.browser, " ").concat(_browserDetector.version)).add(_Constants["default"].PARAMS.DEVICE_MODEL, Leanplum._deviceModel || 'Web Browser').add(_Constants["default"].PARAMS.INCLUDE_DEFAULTS, false).add(_Constants["default"].PARAMS.INCLUDE_VARIANT_DEBUG_INFO, _InternalState["default"].variantDebugInfoEnabled); // Issue request.
      // noinspection Annotator

      _LeanplumRequest["default"].request(_Constants["default"].METHODS.START, args, {
        queued: true,
        sendNow: true,
        response: function response(_response2) {
          _InternalState["default"].hasStarted = true;

          var startResponse = _LeanplumRequest["default"].getLastResponse(_response2);

          if (_LeanplumRequest["default"].isResponseSuccess(startResponse)) {
            _InternalState["default"].startSuccessful = true;

            if (_InternalState["default"].devMode) {
              var latestVersion = startResponse[_Constants["default"].KEYS.LATEST_VERSION];

              if (latestVersion) {
                console.log("A newer version of Leanplum, ".concat(latestVersion, ", is available. Go to") + 'leanplum.com to download it.');
              }

              _LeanplumSocket["default"].connect();
            }

            _VarCache["default"].applyDiffs(startResponse[_Constants["default"].KEYS.VARS], startResponse[_Constants["default"].KEYS.VARIANTS], startResponse[_Constants["default"].KEYS.ACTION_METADATA]);

            _VarCache["default"].variantDebugInfo = startResponse[_Constants["default"].KEYS.VARIANT_DEBUG_INFO];
            _VarCache["default"].token = startResponse[_Constants["default"].KEYS.TOKEN];

            _VarCache["default"].setMessages(startResponse[_Constants["default"].KEYS.MESSAGES]);

            _Events["default"].publish('messages', {
              messages: Leanplum.getFilteredResults(_VarCache["default"].getMessages(), ['start', 'resume']),
              calledBy: 'start'
            });
          } else {
            _InternalState["default"].startSuccessful = false;

            _VarCache["default"].loadDiffs();
          }

          _InternalState["default"].triggerStartHandlers();
        }
      });
    }
    /**
     * return an array of filtered message
     * @param {Array} messages - the message response stored in Varcache
     * @param {String | String[] | ?} triggers - the trigger(s) we want to check against
     * @param {String?} verb - additional parameter
     * @param  {String?} noun - additional parameter
     * @param  {Object?} params - necessary for some event
     * @param  {number?} params.from - necessary for some event
     * @param  {number?} params.to - necessary for some event
     * @param  {string?} params.paramValue - necessary for some event
     * @param  {string?} params.Name - necessary for some event
     * @return {Array}
     */

  }, {
    key: "getFilteredResults",
    value: function getFilteredResults(messages) {
      var triggers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var verb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var noun = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      if (!messages) {
        return [];
      }

      return _ActionManager["default"].filterMessages(messages, triggers, verb, noun, params);
    }
  }, {
    key: "startFromCache",
    value: function startFromCache(userId, userAttributes, callback) {
      // Overloads.
      if (typeof userId === 'function') {
        callback = userId; // noinspection JSUnusedAssignment

        userAttributes = {};
        userId = null;
      } else if (_typeof(userId) === 'object' && userId !== null && userId !== undefined) {
        callback = userAttributes; // noinspection JSUnusedAssignment

        userAttributes = userId;
        userId = null;
      } else if (typeof userAttributes === 'function') {
        callback = userAttributes; // noinspection JSUnusedAssignment

        userAttributes = {};
      }

      _LeanplumRequest["default"].userId = userId;

      if (callback) {
        Leanplum.addStartResponseHandler(callback);
      }

      _InternalState["default"].hasStarted = true;
      _InternalState["default"].startSuccessful = true;

      if (_InternalState["default"].devMode) {
        _LeanplumSocket["default"].connect();
      }

      _VarCache["default"].loadDiffs();

      _InternalState["default"].triggerStartHandlers();
    }
  }, {
    key: "stop",
    value: function stop() {
      // noinspection Annotator
      _LeanplumRequest["default"].request(_Constants["default"].METHODS.STOP, undefined, {
        sendNow: true,
        queued: true
      });
    }
  }, {
    key: "pauseSession",
    value: function pauseSession() {
      // noinspection Annotator
      _LeanplumRequest["default"].request(_Constants["default"].METHODS.PAUSE_SESSION, undefined, {
        sendNow: true,
        queued: true
      });
    }
  }, {
    key: "resumeSession",
    value: function resumeSession() {
      // noinspection Annotator
      _LeanplumRequest["default"].request(_Constants["default"].METHODS.RESUME_SESSION, undefined, {
        sendNow: true,
        queued: true
      });
    }
  }, {
    key: "pauseState",
    value: function pauseState() {
      // noinspection Annotator
      _LeanplumRequest["default"].request(_Constants["default"].METHODS.PAUSE_STATE, undefined, {
        queued: true
      });
    }
  }, {
    key: "resumeState",
    value: function resumeState() {
      // noinspection Annotator
      _LeanplumRequest["default"].request(_Constants["default"].METHODS.RESUME_STATE, undefined, {
        queued: true
      });
    }
  }, {
    key: "setUserId",
    value: function setUserId(userId) {
      Leanplum.setUserAttributes(userId);
    }
  }, {
    key: "setUserAttributes",
    value: function setUserAttributes(userId, userAttributes) {
      if (userAttributes === undefined) {
        if (_typeof(userId) === 'object') {
          userAttributes = userId;
          userId = undefined;
        } else if (typeof userId !== 'string') {
          console.log('Leanplum: setUserAttributes expects a string or an ' + 'object');
          return;
        }
      } // noinspection Annotator


      _LeanplumRequest["default"].request(_Constants["default"].METHODS.SET_USER_ATTRIBUTES, new _ArgsBuilder["default"]().add(_Constants["default"].PARAMS.USER_ATTRIBUTES, userAttributes ? JSON.stringify(userAttributes) : undefined).add(_Constants["default"].PARAMS.NEW_USER_ID, userId), {
        queued: true
      });

      if (userId) {
        _LeanplumRequest["default"].userId = userId;

        _LocalStorageManager["default"].saveToLocalStorage(_Constants["default"].DEFAULT_KEYS.USER_ID, _LeanplumRequest["default"].userId);
      }
    }
  }, {
    key: "getFileUrl",
    value: function getFileUrl(fileName) {
      // noinspection Annotator
      return _LeanplumRequest["default"].generateRequestUrl(_Constants["default"].METHODS.DOWNLOAD_FILE, new _ArgsBuilder["default"]().add(_Constants["default"].PARAMS.FILENAME, fileName));
    } // TODO: need probably to add the params (aka exit, accept, cancel)
    //  to build valid filter value: '.c23423938 exit'
    //  either VarCache getMessageById or pass message or pass message params

    /**
     * It allow tracking messages by passing an extra 'messageId' param to the track method
     * @param {string} event
     * @param {string} messageId
     */

  }, {
    key: "trackMessage",
    value: function trackMessage(event, messageId) {
      Leanplum.track(event, undefined, undefined, undefined, messageId);
    }
    /**
     *
     * @param event
     * @param value
     * @param info
     * @param params
     * @param messageId - messageId is an optional parameter for tracking message. Leave it undefined for notification
     */

  }, {
    key: "track",
    value: function track(event, value, info, params, messageId) {
      // Overloads.
      // object && !null && !undefined -> params
      // string -> info, params
      // *, object && !null && !undefined -> value, params
      if (_typeof(value) === 'object' && value !== null && value !== undefined) {
        params = value;
        info = undefined;
        value = undefined;
      } else if (typeof value === 'string') {
        params = info;
        info = value;
        value = undefined;
      } else if (_typeof(info) === 'object' && info !== null && info !== undefined) {
        params = info;
        info = undefined;
      }

      _Events["default"].publish('messages', {
        messages: Leanplum.getFilteredResults(_VarCache["default"].getMessages(), 'event', 'triggers', messageId ? messageId : event)
      });

      var argsBuilder = new _ArgsBuilder["default"]().add(_Constants["default"].PARAMS.EVENT, event).add(_Constants["default"].PARAMS.VALUE, value || 0.0).add(_Constants["default"].PARAMS.INFO, info).add(_Constants["default"].PARAMS.PARAMS, JSON.stringify(params)); // noinspection Annotator

      if (messageId) {
        argsBuilder.add(_Constants["default"].PARAMS.MESSAGE_ID, messageId);
      }

      _LeanplumRequest["default"].request(_Constants["default"].METHODS.TRACK, argsBuilder, {
        queued: true
      });
    }
  }, {
    key: "advanceTo",
    value: function advanceTo(state, info, params) {
      // Overloads.
      // string|null|undefined, * -> info, params
      // object && !null && !undefined -> params
      if (_typeof(info) === 'object' && info !== null && info !== undefined) {
        params = info;
        info = undefined;
      }

      _Events["default"].publish('messages', {
        messages: Leanplum.getFilteredResults(_VarCache["default"].getMessages(), 'state', 'triggers', state)
      });

      _LeanplumRequest["default"].request(_Constants["default"].METHODS.ADVANCE, new _ArgsBuilder["default"]().add(_Constants["default"].PARAMS.STATE, state).add(_Constants["default"].PARAMS.INFO, info).add(_Constants["default"].PARAMS.PARAMS, JSON.stringify(params)), {
        queued: true
      });
    }
    /**
     * Determines if web push is supported in the browser.
     * @return {Boolean} True if supported, else false.
     */

  }, {
    key: "isWebPushSupported",
    value: function isWebPushSupported() {
      return _PushManager["default"].isWebPushSupported();
    }
    /**
     * Determines if web push is subscribed.
     * @return {Promise} Resolves if true, rejects if false.
     */

  }, {
    key: "isWebPushSubscribed",
    value: function isWebPushSubscribed() {
      return _PushManager["default"].isWebPushSubscribed();
    }
    /**
     * Register the browser for web push.
     * @param  {string}   serviceWorkerUrl The url on your server that hosts the
     *                                     /sw.min.js service worker js file.
     * @return {Promise}                   Resolves if registration successful,
     *                                     otherwise fails.
     */

  }, {
    key: "registerForWebPush",
    value: function registerForWebPush(serviceWorkerUrl) {
      return new Promise(function (resolve, reject) {
        if (_PushManager["default"].isWebPushSupported()) {
          return _PushManager["default"].register(serviceWorkerUrl, function (isSubscribed) {
            if (isSubscribed) {
              return resolve(true);
            }

            return _PushManager["default"].subscribeUser();
          });
        } else {
          return reject('Leanplum: WebPush is not supported.');
        }
      });
    }
    /**
     * Unregisters the browser form web push.
     * @return {Promise}            Resolves on success, otherwise rejects.
     */

  }, {
    key: "unregisterFromWebPush",
    value: function unregisterFromWebPush() {
      return _PushManager["default"].unsubscribeUser();
    }
    /**
     * Clears cached values for messages, variables and test assignments.
     * Use sparingly as if the app is updated, you'll have to deal with potentially
     * inconsistent state or user experience.
     */

  }, {
    key: "clearUserContent",
    value: function clearUserContent() {
      _VarCache["default"].clearUserContent();
    }
    /**
     * Get pub/sub events manager.
     *
     * @Return { publish: (topic, args) => {}, subscribe: (topic, callback) => {} }
     */

  }, {
    key: "getEvents",
    value: function getEvents() {
      return _Events["default"];
    }
  }]);

  return Leanplum;
}();

exports["default"] = Leanplum;
module.exports = exports.default;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Network = _interopRequireDefault(__webpack_require__(18));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Socket.io 1.0 client class.
 */
var SocketIoClient =
/*#__PURE__*/
function () {
  /**
   * Initializes a new SocketIoClient, not connected by default.
   */
  function SocketIoClient() {
    _classCallCheck(this, SocketIoClient);

    this.connected = false;
    this.connecting = false;
  }
  /**
   * Connects to the given socketHost.
   * @param  {string} socketHost The host to connect to.
   */


  _createClass(SocketIoClient, [{
    key: "connect",
    value: function connect(socketHost) {
      // eslint-disable-next-line consistent-this
      var self = this;
      self.connecting = true;

      _Network["default"].ajax('POST', "https://".concat(socketHost, "/socket.io/1"), '', function (line) {
        var parts = line.split(':');
        var session = parts[0];
        var heartbeat = parseInt(parts[1]) / 2 * 1000;
        self.socket = new WebSocket("wss://".concat(socketHost, "/socket.io/1/websocket/").concat(session));
        var heartbeatInterval = null;

        self.socket.onopen = function () {
          self.connected = true;
          self.connecting = false;

          if (self.onopen) {
            self.onopen();
          }

          heartbeatInterval = setInterval(function () {
            self.socket.send('2:::');
          }, heartbeat);
        };

        self.socket.onclose = function () {
          self.connected = false;
          clearInterval(heartbeatInterval);

          if (self.onclose) {
            self.onclose();
          }
        };

        self.socket.onmessage = function (event) {
          var messageParts = event.data.split(':');
          var code = parseInt(messageParts[0]);

          if (code === 2) {
            self.socket.send('2::');
          } else if (code === 5) {
            var messageId = messageParts[1];
            var data = JSON.parse(messageParts.slice(3).join(':'));
            var messageEvent = data.name;
            var args = data.args;

            if (messageId) {
              self.socket.send("6:::".concat(messageId));
            }

            if (self.onmessage) {
              self.onmessage(messageEvent, args);
            }
          } else if (code === 7) {
            console.log("Socket error: ".concat(event.data));
          }
        };

        self.socket.onerror = function (event) {
          self.socket.close();

          if (self.onerror) {
            self.onerror(event);
          }
        };
      }, null, false, true // null, queued, plainText
      );
    }
    /**
     * Sends given event with arguments to the server.
     * @param  {string} name Name of the event.
     * @param  {*} args Arguments to send.
     */

  }, {
    key: "send",
    value: function send(name, args) {
      if (!this.connected) {
        console.log('Leanplum: Socket is not connected.');
        return;
      }

      var argsJson = JSON.stringify({
        name: name,
        args: args
      });
      this.socket.send("5:::".concat(argsJson));
    }
  }]);

  return SocketIoClient;
}();

exports["default"] = SocketIoClient;
module.exports = exports.default;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(67),
    hashDelete = __webpack_require__(68),
    hashGet = __webpack_require__(69),
    hashHas = __webpack_require__(70),
    hashSet = __webpack_require__(71);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(19),
    setCacheAdd = __webpack_require__(91),
    setCacheHas = __webpack_require__(92);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(6),
    stackClear = __webpack_require__(94),
    stackDelete = __webpack_require__(95),
    stackGet = __webpack_require__(96),
    stackHas = __webpack_require__(97),
    stackSet = __webpack_require__(98);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(56),
    isArguments = __webpack_require__(99),
    isArray = __webpack_require__(16),
    isBuffer = __webpack_require__(24),
    isIndex = __webpack_require__(72),
    isTypedArray = __webpack_require__(29);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(47),
    isArray = __webpack_require__(16);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    isObjectLike = __webpack_require__(11);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(52),
    isObjectLike = __webpack_require__(11);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(42),
    equalArrays = __webpack_require__(20),
    equalByTag = __webpack_require__(60),
    equalObjects = __webpack_require__(61),
    getTag = __webpack_require__(65),
    isArray = __webpack_require__(16),
    isBuffer = __webpack_require__(24),
    isTypedArray = __webpack_require__(29);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(26),
    isMasked = __webpack_require__(74),
    isObject = __webpack_require__(28),
    toSource = __webpack_require__(22);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    isLength = __webpack_require__(27),
    isObjectLike = __webpack_require__(11);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(75),
    nativeKeys = __webpack_require__(87);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(15),
    Uint8Array = __webpack_require__(43),
    eq = __webpack_require__(23),
    equalArrays = __webpack_require__(20),
    mapToArray = __webpack_require__(86),
    setToArray = __webpack_require__(93);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(62);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(49),
    getSymbols = __webpack_require__(64),
    keys = __webpack_require__(101);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(15);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(45),
    stubArray = __webpack_require__(102);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(37),
    Map = __webpack_require__(14),
    Promise = __webpack_require__(39),
    Set = __webpack_require__(40),
    WeakMap = __webpack_require__(44),
    baseGetTag = __webpack_require__(8),
    toSource = __webpack_require__(22);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(10);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(10);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(10);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(10);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(59);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(7);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(7);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(7);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(7);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(38),
    ListCache = __webpack_require__(6),
    Map = __webpack_require__(14);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(9);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(9);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(9);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(9);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(90);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(21);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)(module)))

/***/ }),
/* 89 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 90 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 91 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(6);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 95 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 96 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(6),
    Map = __webpack_require__(14),
    MapCache = __webpack_require__(19);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(50),
    isObjectLike = __webpack_require__(11);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(26),
    isLength = __webpack_require__(27);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(46),
    baseKeys = __webpack_require__(55),
    isArrayLike = __webpack_require__(100);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3ZWM1ZGM4Yzk3ZTExMmZiMzE5NSIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FyZ3NCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9MZWFucGx1bVJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvY2FsU3RvcmFnZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL3NyYy9JbnRlcm5hbFN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9WYXJDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9OZXR3b3JrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQWN0aW9uTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQnJvd3NlckRldGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9MZWFucGx1bVNvY2tldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHVzaE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xlYW5wbHVtLmpzIiwid2VicGFjazovLy8uL3NyYy9Tb2NrZXRJb0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N0YWNrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheVNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxCeVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOlsiTUVUSE9EUyIsIlNUQVJUIiwiU1RPUCIsIkFEVkFOQ0UiLCJUUkFDSyIsIlBBVVNFX1NFU1NJT04iLCJSRVNVTUVfU0VTU0lPTiIsIlBBVVNFX1NUQVRFIiwiUkVTVU1FX1NUQVRFIiwiRE9XTkxPQURfRklMRSIsIk1VTFRJIiwiU0VUX1ZBUlMiLCJHRVRfVkFSUyIsIlNFVF9VU0VSX0FUVFJJQlVURVMiLCJTRVRfREVWSUNFX0FUVFJJQlVURVMiLCJVUExPQURfRklMRSIsIlJFR0lTVEVSX0RFVklDRSIsIlNES19WRVJTSU9OIiwiQ0xJRU5UIiwiUEFSQU1TIiwiQUNUSU9OIiwiQVBQX0lEIiwiQ0xJRU5UX0tFWSIsIkRFVklDRV9JRCIsIlVTRVJfSUQiLCJORVdfVVNFUl9JRCIsIkRFVl9NT0RFIiwiVkVSU0lPTl9OQU1FIiwiU1lTVEVNX05BTUUiLCJTWVNURU1fVkVSU0lPTiIsIkJST1dTRVJfTkFNRSIsIkJST1dTRVJfVkVSU0lPTiIsIkRFVklDRV9OQU1FIiwiREVWSUNFX01PREVMIiwiVVNFUl9BVFRSSUJVVEVTIiwiTE9DQUxFIiwiQ09VTlRSWSIsIlJFR0lPTiIsIkNJVFkiLCJMT0NBVElPTiIsIlNUQVRFIiwiSU5GTyIsIkVWRU5UIiwiVkFMVUUiLCJGSUxFTkFNRSIsIlRJTUUiLCJEQVRBIiwiVkFSUyIsIkZJTEUiLCJTSVpFIiwiVkFSSUFUSU9OIiwiSEFTSCIsIkVNQUlMIiwiVkFSSUFCTEVTIiwiSU5DTFVERV9ERUZBVUxUUyIsIklOQ0xVREVfVkFSSUFOVF9ERUJVR19JTkZPIiwiV0VCX1BVU0hfU1VCU0NSSVBUSU9OIiwiTUVTU0FHRV9JRCIsIktFWVMiLCJJU19SRUdJU1RFUkVEIiwiTEFURVNUX1ZFUlNJT04iLCJWQVJJQU5UUyIsIlZBUklBTlRfREVCVUdfSU5GTyIsIkFDVElPTl9NRVRBREFUQSIsIlRPS0VOIiwiTUVTU0FHRVMiLCJERUZBVUxUX0tFWVMiLCJDT1VOVCIsIklURU0iLCJQVVNIX1NVQlNDUklQVElPTiIsIk1FU1NBR0VfVklFVyIsIlZBTFVFUyIsIkRFVEVDVCIsIkFyZ3NCdWlsZGVyIiwiYXJnU3RyaW5nIiwiYXJnVmFsdWVzIiwia2V5IiwidmFsdWUiLCJlbmNvZGVkVXJpQ29tcG9uZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYm9keSIsIl9ib2R5IiwiYXBwSWQiLCJjbGllbnRLZXkiLCJhZGQiLCJDb25zdGFudHMiLCJsYXN0UmVxdWVzdFRpbWUiLCJ1bmRlZmluZWQiLCJjb29sZG93blRpbWVvdXQiLCJMZWFucGx1bVJlcXVlc3QiLCJhY3Rpb24iLCJwYXJhbXMiLCJvcHRpb25zIiwiZGV2aWNlSWQiLCJMb2NhbFN0b3JhZ2VNYW5hZ2VyIiwiZ2V0RnJvbUxvY2FsU3RvcmFnZSIsImlkIiwicG9zc2libGUiLCJpIiwiY2hhckF0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwic2F2ZVRvTG9jYWxTdG9yYWdlIiwidXNlcklkIiwiYXJnc0J1aWxkZXIiLCJhdHRhY2hBcGlLZXlzIiwidmVyc2lvbk5hbWUiLCJJbnRlcm5hbFN0YXRlIiwiZGV2TW9kZSIsIkRhdGUiLCJnZXRUaW1lIiwidG9TdHJpbmciLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJlcnJvciIsImVyciIsImNvbnNvbGUiLCJOZXR3b3JrIiwiYWpheCIsImFwaVBhdGgiLCJidWlsZCIsInF1ZXVlZCIsInNlbmROb3ciLCJiYXRjaEVuYWJsZWQiLCJzZW5kVW5zZW50UmVxdWVzdHMiLCJyZXF1ZXN0c1RvU2VuZCIsInBvcFVuc2VudFJlcXVlc3RzIiwicmVxdWVzdERhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwibXVsdGlSZXF1ZXN0QXJncyIsImJhdGNoQ29vbGRvd24iLCJub3ciLCJzZXRUaW1lb3V0Iiwic2F2ZVJlcXVlc3RGb3JMYXRlciIsImJ1aWxkRGljdCIsInF1ZXJ5UGFyYW1zIiwiRXJyb3IiLCJzZWNvbmRzIiwic2V0TmV0d29ya1RpbWVvdXQiLCJhcmdzIiwiY291bnQiLCJpdGVtS2V5IiwicmVtb3ZlRnJvbUxvY2FsU3RvcmFnZSIsInJlcXVlc3RBcmdzIiwicGFyc2UiLCJwdXNoIiwiaWdub3JlZCIsImluZGV4IiwibnVtUmVzcG9uc2VzIiwiZ2V0UmVzcG9uc2VBdCIsIm1lc3NhZ2UiLCJsb2NhbFN0b3JhZ2VFbmFibGVkIiwiYWx0ZXJuYXRlTG9jYWxTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZSIsInJlbW92ZUl0ZW0iLCJoYW5kbGVyIiwic3RhcnRIYW5kbGVycyIsImhhc1N0YXJ0ZWQiLCJzdGFydFN1Y2Nlc3NmdWwiLCJpZHgiLCJpbmRleE9mIiwic3BsaWNlIiwidmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzIiwiaGFzUmVjZWl2ZWREaWZmcyIsInZhcmlhbnREZWJ1Z0luZm9FbmFibGVkIiwiVmFyQ2FjaGUiLCJkaWZmcyIsInZhcmlhbnRzIiwiYWN0aW9uTWV0YWRhdGEiLCJtZXJnZWQiLCJtZXJnZUhlbHBlciIsInZhcmlhYmxlcyIsInNhdmVEaWZmcyIsIm9uVXBkYXRlIiwiYXBwbHlEaWZmcyIsInRva2VuIiwidmFyaWFudERlYnVnSW5mbyIsImxvZyIsIm1lc3NhZ2VJZCIsIm1lc3NhZ2VWaWV3IiwiZ2V0TWVzc2FnZXNWaWV3IiwibWVzc2FnZXNWaWV3IiwibWVzc2FnZVZpZXdQZXJTZXNzaW9uIiwibWVzc2FnZXNWaWV3UGVyU2Vzc2lvbiIsInQiLCJzZXNzaW9uIiwicmVxdWVzdCIsIm1lc3NhZ2VzIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsInZhcnMiLCJkaWZmIiwib2JqSXRlcmF0b3IiLCJvYmoiLCJmIiwiQXJyYXkiLCJhdHRyIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwidmFyc0l0ZXJhdG9yIiwiZGlmZkl0ZXJhdG9yIiwiaXNBcnJheSIsImF0dHJpYnV0ZSIsInZhclN1YnNjcmlwdCIsInN1YnN0cmluZyIsInBhcnNlSW50Iiwic3Vic2NyaXB0IiwiZGlmZlZhbHVlIiwidG9waWNzIiwic3Vic2NyaWJlIiwidG9waWMiLCJsaXN0ZW5lciIsInJlbW92ZSIsInB1Ymxpc2giLCJpbmZvIiwiZm9yRWFjaCIsIml0ZW0iLCJyZXF1ZXN0UXVldWUiLCJuZXR3b3JrVGltZW91dFNlY29uZHMiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwicGxhaW5UZXh0IiwicnVubmluZ1JlcXVlc3QiLCJlbnF1ZXVlUmVxdWVzdCIsImFyZ3VtZW50cyIsIlhEb21haW5SZXF1ZXN0IiwibG9jYXRpb24iLCJwcm90b2NvbCIsIlJlZmxlY3QiLCJhcHBseSIsImFqYXhJRTgiLCJoYW5kbGVkIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwicmFuQ2FsbGJhY2siLCJyZXNwb25zZVRleHQiLCJzdGF0dXMiLCJkZXF1ZXVlUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsImFib3J0IiwieGRyIiwib25sb2FkIiwib25lcnJvciIsIm9udGltZW91dCIsIm9ucHJvZ3Jlc3MiLCJ0aW1lb3V0IiwicmVxdWVzdEFyZ3VtZW50cyIsInNoaWZ0IiwiZmlsdGVyQnlUcmlnZ2VycyIsInRyaWdnZXJzIiwid2hlblRyaWdnZXJzIiwiY2hpbGRyZW4iLCJmaWx0ZXJlZEJ5VHJpZ2dlcnMiLCJmaWx0ZXIiLCJ0cmlnZ2VyIiwiaW5jbHVkZXMiLCJzdWJqZWN0IiwidmVyYkZpbHRlciIsImZpbHRlckJ5VmVyYnMiLCJ2ZXJiIiwiZXZhbHVhdG9yIiwidHJpZ2dlclZlcmJFdmFsdWF0b3JzIiwibm91biIsIm9iamVjdHMiLCJmaWx0ZXJCeUxpbWl0cyIsImxpbWl0cyIsIndoZW5MaW1pdHMiLCJldmVyeSIsImxpbWl0IiwidmVyYkV2YWx1YXRvciIsImxpbWl0VmVyYkV2YWx1YXRvcnMiLCJjb3VudE1lc3NhZ2VWaWV3c0J5TGltaXQiLCJzaW5jZSIsIml0ZXJhdG9yIiwiZmlsdGVyQnlMaW1pdFRpbWVzIiwibGltaXRUaW1lIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInRyaWdnZXJzV2l0aFBhcmFtZXRlciIsInBhcmFtVmFsdWUiLCJwYXJhbU5hbWUiLCJjaGFuZ2VzVG8iLCJ0byIsImNoYW5nZXNGcm9tVG8iLCJmcm9tIiwibGltaXRVc2VyIiwibWF4VmlldyIsImdldE1lc3NhZ2VWaWV3IiwibGltaXRNb250aCIsImFtb3VudCIsInJlZHVjZSIsImxpbWl0V2VlayIsImxpbWl0RGF5IiwibGltaXRIb3VyIiwibGltaXRNaW51dGUiLCJsaW1pdFNlY29uZCIsImxpbWl0U2Vzc2lvbiIsIkFjdGlvbk1hbmFnZXIiLCJzb3J0IiwiYSIsImIiLCJwcmlvcml0eSIsImRhdGFCcm93c2VyIiwic3RyaW5nIiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwic3ViU3RyaW5nIiwiaWRlbnRpdHkiLCJ2ZXJzaW9uU2VhcmNoIiwidmVuZG9yIiwicHJvcCIsIndpbmRvdyIsIm9wZXJhIiwiZGF0YU9TIiwicGxhdGZvcm0iLCJCcm93c2VyRGV0ZWN0b3IiLCJicm93c2VyIiwiX3NlYXJjaFN0cmluZyIsInZlcnNpb24iLCJfc2VhcmNoVmVyc2lvbiIsImFwcFZlcnNpb24iLCJPUyIsImRhdGFTdHJpbmciLCJkYXRhUHJvcCIsInZlcnNpb25TZWFyY2hTdHJpbmciLCJwYXJzZUZsb2F0IiwiTGVhbnBsdW1Tb2NrZXQiLCJXZWJTb2NrZXQiLCJjbGllbnQiLCJTb2NrZXRJb0NsaWVudCIsImF1dGhTZW50Iiwib25vcGVuIiwiZXZlbnQiLCJvbm1lc3NhZ2UiLCJnZXRWYXJzUmVzcG9uc2UiLCJnZXRMYXN0UmVzcG9uc2UiLCJ2YWx1ZXMiLCJzZW5kVmFyaWFibGVzIiwiYWxlcnQiLCJlbWFpbCIsImV2ZW50cyIsIm9uY2xvc2UiLCJjb25uZWN0Iiwic29ja2V0SG9zdCIsInNldEludGVydmFsIiwiY29ubmVjdGVkIiwiY29ubmVjdGluZyIsIkFQUExJQ0FUSU9OX1NFUlZFUl9QVUJMSUNfS0VZIiwiaXNTdWJzY3JpYmVkIiwic2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiIsIlB1c2hNYW5hZ2VyIiwic2VydmljZVdvcmtlciIsImlzV2ViUHVzaFN1cHBvcnRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZ2V0U2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiIsInRoZW4iLCJyZWdpc3RyYXRpb24iLCJwdXNoTWFuYWdlciIsImdldFN1YnNjcmlwdGlvbiIsInN1YnNjcmlwdGlvbiIsInVwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyIiwic2VydmljZVdvcmtlclVybCIsImNhbGxiYWNrIiwicmVnaXN0ZXIiLCJpbnN0YWxsaW5nIiwid2FpdGluZyIsImFjdGl2ZSIsInN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsImFwcGxpY2F0aW9uU2VydmVyS2V5IiwidXJsQjY0VG9VaW50OEFycmF5IiwicmVqZWN0IiwidXNlclZpc2libGVPbmx5IiwiaXNXZWJQdXNoU3Vic2NyaWJlZCIsInN1YnNjcmliZWQiLCJ1bnN1YnNjcmliZSIsImdldFJlZ2lzdHJhdGlvbiIsImJhc2U2NFN0cmluZyIsInBhZGRpbmciLCJyZXBlYXQiLCJiYXNlNjQiLCJyZXBsYWNlIiwicmF3RGF0YSIsImF0b2IiLCJvdXRwdXRBcnJheSIsIlVpbnQ4QXJyYXkiLCJjaGFyQ29kZUF0IiwiZ2V0S2V5IiwiYXV0aCIsImtleUFzY2lpIiwiYnRvYSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImF1dGhBc2NpaSIsImVuZHBvaW50IiwicHJlcGFyZWRTdWJzY3JpcHRpb24iLCJwcmVwYXJlU3Vic2NyaXB0aW9uIiwicHJlcGFyZWRTdWJzY3JpcHRpb25TdHJpbmciLCJleGlzdGluZ1N1YnNjcmlwdGlvblN0cmluZyIsInNldFN1YnNjcmlwdGlvbiIsIl9icm93c2VyRGV0ZWN0b3IiLCJMZWFucGx1bSIsIl9lbWFpbCIsInNldFZhcmlhbnREZWJ1Z0luZm9FbmFibGVkIiwiZ2V0VmFyaWFudERlYnVnSW5mbyIsImFjY2Vzc0tleSIsImhvc3QiLCJkZXZpY2VOYW1lIiwiX2RldmljZU5hbWUiLCJkZXZpY2VNb2RlbCIsIl9kZXZpY2VNb2RlbCIsInN5c3RlbU5hbWUiLCJfc3lzdGVtTmFtZSIsInN5c3RlbVZlcnNpb24iLCJfc3lzdGVtVmVyc2lvbiIsInNldFZhcmlhYmxlcyIsImNvb2xkb3duU2Vjb25kcyIsImdldFZhcmlhYmxlcyIsImN1cnJlbnQiLCJWYXJjYWNoZSIsImdldE1lc3NhZ2VzIiwiYWRkU3RhcnRSZXNwb25zZUhhbmRsZXIiLCJhZGRWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlciIsInJlbW92ZVN0YXJ0UmVzcG9uc2VIYW5kbGVyIiwicmVtb3ZlVmFyaWFibGVzQ2hhbmdlZEhhbmRsZXIiLCJpc1N1Y2Nlc3MiLCJpc1Jlc3BvbnNlU3VjY2VzcyIsInVzZXJBdHRyaWJ1dGVzIiwidHJpZ2dlclZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycyIsInN0YXJ0UmVzcG9uc2UiLCJsYXRlc3RWZXJzaW9uIiwic2V0TWVzc2FnZXMiLCJnZXRGaWx0ZXJlZFJlc3VsdHMiLCJjYWxsZWRCeSIsImxvYWREaWZmcyIsInRyaWdnZXJTdGFydEhhbmRsZXJzIiwiZmlsdGVyTWVzc2FnZXMiLCJzZXRVc2VyQXR0cmlidXRlcyIsImZpbGVOYW1lIiwiZ2VuZXJhdGVSZXF1ZXN0VXJsIiwidHJhY2siLCJzdWJzY3JpYmVVc2VyIiwidW5zdWJzY3JpYmVVc2VyIiwiY2xlYXJVc2VyQ29udGVudCIsInNlbGYiLCJSZXF1ZXN0IiwibGluZSIsInBhcnRzIiwic3BsaXQiLCJoZWFydGJlYXQiLCJzb2NrZXQiLCJoZWFydGJlYXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJtZXNzYWdlUGFydHMiLCJjb2RlIiwic2xpY2UiLCJqb2luIiwibWVzc2FnZUV2ZW50IiwibmFtZSIsImNsb3NlIiwiYXJnc0pzb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNSQTs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFpQmU7QUFDYkEsU0FBTyxFQUFFO0FBQ1BDLFNBQUssRUFBRSxPQURBO0FBRVBDLFFBQUksRUFBRSxNQUZDO0FBR1BDLFdBQU8sRUFBRSxTQUhGO0FBSVBD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QUFDbkI7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2pCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QyIsImZpbGUiOiJsZWFucGx1bS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkxlYW5wbHVtXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkxlYW5wbHVtXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdlYzVkYzhjOTdlMTEyZmIzMTk1IiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fcm9vdC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBNRVRIT0RTOiB7XG4gICAgU1RBUlQ6ICdzdGFydCcsXG4gICAgU1RPUDogJ3N0b3AnLFxuICAgIEFEVkFOQ0U6ICdhZHZhbmNlJyxcbiAgICBUUkFDSzogJ3RyYWNrJyxcbiAgICBQQVVTRV9TRVNTSU9OOiAncGF1c2VTZXNzaW9uJyxcbiAgICBSRVNVTUVfU0VTU0lPTjogJ3Jlc3VtZVNlc3Npb24nLFxuICAgIFBBVVNFX1NUQVRFOiAncGF1c2VTdGF0ZScsXG4gICAgUkVTVU1FX1NUQVRFOiAncmVzdW1lU3RhdGUnLFxuICAgIERPV05MT0FEX0ZJTEU6ICdkb3dubG9hZEZpbGUnLFxuICAgIE1VTFRJOiAnbXVsdGknLFxuICAgIFNFVF9WQVJTOiAnc2V0VmFycycsXG4gICAgR0VUX1ZBUlM6ICdnZXRWYXJzJyxcbiAgICBTRVRfVVNFUl9BVFRSSUJVVEVTOiAnc2V0VXNlckF0dHJpYnV0ZXMnLFxuICAgIFNFVF9ERVZJQ0VfQVRUUklCVVRFUzogJ3NldERldmljZUF0dHJpYnV0ZXMnLFxuICAgIFVQTE9BRF9GSUxFOiAndXBsb2FkRmlsZScsXG4gICAgUkVHSVNURVJfREVWSUNFOiAncmVnaXN0ZXJEZXZpY2UnXG4gIH0sXG5cbiAgU0RLX1ZFUlNJT046ICcyLjAuMy1pZmxpeCcsXG5cbiAgQ0xJRU5UOiAnanMnLFxuXG4gIFBBUkFNUzoge1xuICAgIEFDVElPTjogJ2FjdGlvbicsXG4gICAgQVBQX0lEOiAnYXBwSWQnLFxuICAgIENMSUVOVDogJ2NsaWVudCcsXG4gICAgQ0xJRU5UX0tFWTogJ2NsaWVudEtleScsXG4gICAgREVWSUNFX0lEOiAnZGV2aWNlSWQnLFxuICAgIFNES19WRVJTSU9OOiAnc2RrVmVyc2lvbicsXG4gICAgVVNFUl9JRDogJ3VzZXJJZCcsXG4gICAgTkVXX1VTRVJfSUQ6ICduZXdVc2VySWQnLFxuICAgIERFVl9NT0RFOiAnZGV2TW9kZScsXG4gICAgVkVSU0lPTl9OQU1FOiAndmVyc2lvbk5hbWUnLFxuICAgIFNZU1RFTV9OQU1FOiAnc3lzdGVtTmFtZScsXG4gICAgU1lTVEVNX1ZFUlNJT046ICdzeXN0ZW1WZXJzaW9uJyxcbiAgICBCUk9XU0VSX05BTUU6ICdicm93c2VyTmFtZScsXG4gICAgQlJPV1NFUl9WRVJTSU9OOiAnYnJvd3NlclZlcnNpb24nLFxuICAgIERFVklDRV9OQU1FOiAnZGV2aWNlTmFtZScsXG4gICAgREVWSUNFX01PREVMOiAnZGV2aWNlTW9kZWwnLFxuICAgIFVTRVJfQVRUUklCVVRFUzogJ3VzZXJBdHRyaWJ1dGVzJyxcbiAgICBMT0NBTEU6ICdsb2NhbGUnLFxuICAgIENPVU5UUlk6ICdjb3VudHJ5JyxcbiAgICBSRUdJT046ICdyZWdpb24nLFxuICAgIENJVFk6ICdjaXR5JyxcbiAgICBMT0NBVElPTjogJ2xvY2F0aW9uJyxcbiAgICBTVEFURTogJ3N0YXRlJyxcbiAgICBJTkZPOiAnaW5mbycsXG4gICAgRVZFTlQ6ICdldmVudCcsXG4gICAgVkFMVUU6ICd2YWx1ZScsXG4gICAgRklMRU5BTUU6ICdmaWxlbmFtZScsXG4gICAgVElNRTogJ3RpbWUnLFxuICAgIERBVEE6ICdkYXRhJyxcbiAgICBWQVJTOiAndmFycycsXG4gICAgRklMRTogJ2ZpbGUnLFxuICAgIFNJWkU6ICdzaXplJyxcbiAgICBWQVJJQVRJT046ICd2YXJpYXRpb24nLFxuICAgIEhBU0g6ICdoYXNoJyxcbiAgICBFTUFJTDogJ2VtYWlsJyxcbiAgICBWQVJJQUJMRVM6ICd2YXJzJyxcbiAgICBQQVJBTVM6ICdwYXJhbXMnLFxuICAgIElOQ0xVREVfREVGQVVMVFM6ICdpbmNsdWRlRGVmYXVsdHMnLFxuICAgIElOQ0xVREVfVkFSSUFOVF9ERUJVR19JTkZPOiAnaW5jbHVkZVZhcmlhbnREZWJ1Z0luZm8nLFxuICAgIFdFQl9QVVNIX1NVQlNDUklQVElPTjogJ3dlYlB1c2hTdWJzY3JpcHRpb24nLFxuICAgIE1FU1NBR0VfSUQ6ICdtZXNzYWdlSWQnXG4gIH0sXG5cbiAgS0VZUzoge1xuICAgIElTX1JFR0lTVEVSRUQ6ICdpc1JlZ2lzdGVyZWQnLFxuICAgIExBVEVTVF9WRVJTSU9OOiAnbGF0ZXN0VmVyc2lvbicsXG4gICAgVkFSUzogJ3ZhcnMnLFxuICAgIFZBUklBTlRTOiAndmFyaWFudHMnLFxuICAgIFZBUklBTlRfREVCVUdfSU5GTzogJ3ZhcmlhbnREZWJ1Z0luZm8nLFxuICAgIEFDVElPTl9NRVRBREFUQTogJ2FjdGlvbk1ldGFkYXRhJyxcbiAgICBUT0tFTjogJ3Rva2VuJyxcbiAgICBNRVNTQUdFUzogJ21lc3NhZ2VzJ1xuICB9LFxuXG4gIERFRkFVTFRfS0VZUzoge1xuICAgIENPVU5UOiAnX19sZWFucGx1bV91bnN5bmNlZCcsXG4gICAgSVRFTTogJ19fbGVhbnBsdW1fdW5zeW5jZWRfJyxcbiAgICBWQVJJQUJMRVM6ICdfX2xlYW5wbHVtX3ZhcmlhYmxlcycsXG4gICAgVkFSSUFOVFM6ICdfX2xlYW5wbHVtX3ZhcmlhbnRzJyxcbiAgICBWQVJJQU5UX0RFQlVHX0lORk86ICdfX2xlYW5wbHVtX3ZhcmlhbnRfZGVidWdfaW5mbycsXG4gICAgQUNUSU9OX01FVEFEQVRBOiAnX19sZWFucGx1bV9hY3Rpb25fbWV0YWRhdGEnLFxuICAgIFRPS0VOOiAnX19sZWFucGx1bV90b2tlbicsXG4gICAgREVWSUNFX0lEOiAnX19sZWFucGx1bV9kZXZpY2VfaWQnLFxuICAgIFVTRVJfSUQ6ICdfX2xlYW5wbHVtX3VzZXJfaWQnLFxuICAgIFBVU0hfU1VCU0NSSVBUSU9OOiAnX19sZWFucGx1bV9wdXNoX3N1YnNjcmlwdGlvbicsXG4gICAgTUVTU0FHRV9WSUVXOiAnX19sZWFucGx1bV9tZXNzYWdlc192aWV3JyxcbiAgfSxcblxuICBWQUxVRVM6IHtcbiAgICBERVRFQ1Q6ICcoZGV0ZWN0KSdcbiAgfSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db25zdGFudHMuanMiLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vQ29uc3RhbnRzJ1xuXG4vKipcbiAqIExlYW5wbHVtIEFyZ3NCdWlsZGVyLCB1c2UgdG8gY29uc3RydWN0IHJlcXVlc3QgcGF5bG9hZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJnc0J1aWxkZXIge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGVtcHR5IHJlcXVlc3QgYXJndW1lbnQuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFyZ1N0cmluZyA9ICcnXG4gICAgdGhpcy5hcmdWYWx1ZXMgPSB7fVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBnaXZlbiBrZXksIHZhbHVlIHRvIHRoZSBwYXlsb2FkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgZm9yIHRoZSB2YWx1ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd8Ym9vbGVhbn0gdmFsdWUgVGhlIHZhbHVlIGZvciBnaXZlbiBrZXkuXG4gICAqIEByZXR1cm4ge0FyZ3NCdWlsZGVyfSBSZXR1cm5zIGFuIG9iamVjdCBvZiBBcmdzQnVpbGRlci5cbiAgICovXG4gIGFkZChrZXksIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGlmICh0aGlzLmFyZ1N0cmluZykge1xuICAgICAgdGhpcy5hcmdTdHJpbmcgKz0gJyYnXG4gICAgfVxuICAgIGxldCBlbmNvZGVkVXJpQ29tcG9uZW50ID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKVxuICAgIHRoaXMuYXJnU3RyaW5nICs9IGAke2tleX09JHtlbmNvZGVkVXJpQ29tcG9uZW50fWBcbiAgICB0aGlzLmFyZ1ZhbHVlc1trZXldID0gdmFsdWVcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLyoqXG4gICAqIENhY2hlIHRoZSBnaXZlbiBib2R5LlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IFtib2R5XSBBIGdpdmVuIGJvZHkuXG4gICAqIEByZXR1cm4ge0FyZ3NCdWlsZGVyfFN0cmluZ30gUmV0dXJucyBBcmdzQnVpbGRlciBpZiBib2R5IGdpdmVuLCBlbHNlIHRoZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkuXG4gICAqL1xuICBib2R5KGJvZHkpIHtcbiAgICBpZiAoYm9keSkge1xuICAgICAgdGhpcy5fYm9keSA9IGJvZHlcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9ib2R5XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIGF0dGFjaCBnaXZlbiBhcHBJZCBhbmQgYXBwS2V5IHRvIHJlcXVlc3QuXG4gICAqIEBwYXJhbSAge1N0cmluZ30gYXBwSWQgVGhlIGFwcElkIHRvIGF0dGFjaC5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBjbGllbnRLZXkgVGhlIGFwcEtleSB0byBhdHRhY2guXG4gICAqIEByZXR1cm4ge0FyZ3NCdWlsZGVyfSBSZXR1cm5zIGFuIG9iamVjdCBvZiBBcmdzQnVpbGRlci5cbiAgICovXG4gIGF0dGFjaEFwaUtleXMoYXBwSWQsIGNsaWVudEtleSkge1xuICAgIHJldHVybiB0aGlzLmFkZChDb25zdGFudHMuUEFSQU1TLkFQUF9JRCwgYXBwSWQpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5DTElFTlQsIENvbnN0YW50cy5DTElFTlQpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5DTElFTlRfS0VZLCBjbGllbnRLZXkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBhcmd1bWVudHMuXG4gICAqIEByZXR1cm4ge1N0cmluZ30gQXJndW1lbnRzIHN0cmluZy5cbiAgICovXG4gIGJ1aWxkKCkge1xuICAgIHJldHVybiB0aGlzLmFyZ1N0cmluZ1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgYXJndW1lbnQgdmFsdWVzLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBhcmd1bWVudCB2YWx1ZXMuXG4gICAqL1xuICBidWlsZERpY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJnVmFsdWVzXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BcmdzQnVpbGRlci5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vQ29uc3RhbnRzJ1xuaW1wb3J0IEFyZ3NCdWlsZGVyIGZyb20gJy4vQXJnc0J1aWxkZXInXG5pbXBvcnQgSW50ZXJuYWxTdGF0ZSBmcm9tICcuL0ludGVybmFsU3RhdGUnXG5pbXBvcnQgTmV0d29yayBmcm9tICcuL05ldHdvcmsnXG5pbXBvcnQgTG9jYWxTdG9yYWdlTWFuYWdlciBmcm9tICcuL0xvY2FsU3RvcmFnZU1hbmFnZXInXG5cbmxldCBsYXN0UmVxdWVzdFRpbWUgPSB1bmRlZmluZWRcbmxldCBjb29sZG93blRpbWVvdXQgPSBudWxsXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlYW5wbHVtUmVxdWVzdCB7XG5cbiAgc3RhdGljIGFwaVBhdGggPSAnaHR0cHM6Ly93d3cubGVhbnBsdW0uY29tL2FwaSdcbiAgc3RhdGljIGJhdGNoRW5hYmxlZCA9IHRydWVcbiAgc3RhdGljIGJhdGNoQ29vbGRvd24gPSA1XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBhY3Rpb25cbiAgICogQHBhcmFtIHBhcmFtc1xuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBAcGFyYW0gb3B0aW9ucy5zdWNjZXNzXG4gICAqIEBwYXJhbSBvcHRpb25zLmVycm9yXG4gICAqIEBwYXJhbSBvcHRpb25zLnJlc3BvbnNlXG4gICAqIEBwYXJhbSBvcHRpb25zLnF1ZXVlZFxuICAgKiBAcGFyYW0gb3B0aW9ucy5zZW5kTm93XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdGF0aWMgcmVxdWVzdChhY3Rpb24sIHBhcmFtcywgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IG5ldyBBcmdzQnVpbGRlcigpXG5cbiAgICAvLyBHZXQgb3IgY3JlYXRlIGRldmljZSBJRCBhbmQgdXNlciBJRC5cbiAgICBpZiAoIUxlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZCkge1xuICAgICAgTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkID1cbiAgICAgICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5ERVZJQ0VfSUQpXG4gICAgfVxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkKSB7XG4gICAgICBsZXQgaWQgPSAnJ1xuICAgICAgbGV0IHBvc3NpYmxlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonICtcbiAgICAgICAgICAnMDEyMzQ1Njc4OSdcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgICBpZCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSlcbiAgICAgIH1cbiAgICAgIExlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZCA9IGlkXG4gICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkRFVklDRV9JRCwgaWQpXG4gICAgfVxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCkge1xuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCA9IExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlVTRVJfSUQpXG4gICAgICBpZiAoIUxlYW5wbHVtUmVxdWVzdC51c2VySWQpIHtcbiAgICAgICAgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCA9IExlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZFxuICAgICAgfVxuICAgIH1cbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlVTRVJfSUQsIExlYW5wbHVtUmVxdWVzdC51c2VySWQpXG5cbiAgICBsZXQgYXJnc0J1aWxkZXIgPSBwYXJhbXNcbiAgICAgICAgLmF0dGFjaEFwaUtleXMoTGVhbnBsdW1SZXF1ZXN0LmFwcElkLCBMZWFucGx1bVJlcXVlc3QuY2xpZW50S2V5KVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuU0RLX1ZFUlNJT04sIENvbnN0YW50cy5TREtfVkVSU0lPTilcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkRFVklDRV9JRCwgTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVVNFUl9JRCwgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkFDVElPTiwgYWN0aW9uKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVkVSU0lPTl9OQU1FLCBMZWFucGx1bVJlcXVlc3QudmVyc2lvbk5hbWUpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5ERVZfTU9ERSwgSW50ZXJuYWxTdGF0ZS5kZXZNb2RlKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVElNRSwgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkudG9TdHJpbmcoKSlcbiAgICBsZXQgc3VjY2VzcyA9IG9wdGlvbnMuc3VjY2VzcyB8fCBvcHRpb25zLnJlc3BvbnNlXG4gICAgbGV0IGVycm9yID0gb3B0aW9ucy5lcnJvciB8fCBvcHRpb25zLnJlc3BvbnNlXG5cbiAgICBpZiAoIUxlYW5wbHVtUmVxdWVzdC5hcHBJZCB8fCAhTGVhbnBsdW1SZXF1ZXN0LmNsaWVudEtleSkge1xuICAgICAgbGV0IGVyciA9ICdMZWFucGx1bSBBcHAgSUQgYW5kIGNsaWVudCBrZXkgYXJlIG5vdCBzZXQuIE1ha2Ugc3VyZSB5b3UgJyArXG4gICAgICAgICAgJ2FyZSBjYWxsaW5nIHNldEFwcElkRm9yRGV2ZWxvcG1lbnRNb2RlIG9yIHNldEFwcElkRm9yUHJvZHVjdGlvbk1vZGUgJyArXG4gICAgICAgICAgJ2JlZm9yZSBpc3N1aW5nIEFQSSBjYWxscy4nXG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgIGlmIChlcnJvcikgZXJyb3IoZXJyKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5ib2R5KCkpIHtcbiAgICAgIE5ldHdvcmsuYWpheCgnUE9TVCcsIGAke0xlYW5wbHVtUmVxdWVzdC5hcGlQYXRofT8ke2FyZ3NCdWlsZGVyLmJ1aWxkKCl9YCxcbiAgICAgICAgICBwYXJhbXMuYm9keSgpLCBzdWNjZXNzLCBlcnJvciwgb3B0aW9ucy5xdWV1ZWQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgc2VuZE5vdyA9IEludGVybmFsU3RhdGUuZGV2TW9kZSB8fCBvcHRpb25zLnNlbmROb3cgfHwgIUxlYW5wbHVtUmVxdWVzdC5iYXRjaEVuYWJsZWRcblxuICAgIGxldCBzZW5kVW5zZW50UmVxdWVzdHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxldCByZXF1ZXN0c1RvU2VuZCA9IExlYW5wbHVtUmVxdWVzdC5wb3BVbnNlbnRSZXF1ZXN0cygpXG4gICAgICBpZiAocmVxdWVzdHNUb1NlbmQubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgcmVxdWVzdERhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgJ2RhdGEnOiByZXF1ZXN0c1RvU2VuZFxuICAgICAgICB9KVxuICAgICAgICBsZXQgbXVsdGlSZXF1ZXN0QXJncyA9IG5ldyBBcmdzQnVpbGRlcigpXG4gICAgICAgICAgICAuYXR0YWNoQXBpS2V5cyhMZWFucGx1bVJlcXVlc3QuYXBwSWQsIExlYW5wbHVtUmVxdWVzdC5jbGllbnRLZXkpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuU0RLX1ZFUlNJT04sIENvbnN0YW50cy5TREtfVkVSU0lPTilcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5BQ1RJT04sIENvbnN0YW50cy5NRVRIT0RTLk1VTFRJKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlRJTUUsIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApLnRvU3RyaW5nKCkudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIE5ldHdvcmsuYWpheCgnUE9TVCcsIGAke0xlYW5wbHVtUmVxdWVzdC5hcGlQYXRofT8ke211bHRpUmVxdWVzdEFyZ3N9YCwgcmVxdWVzdERhdGEsIHN1Y2Nlc3MsIGVycm9yLFxuICAgICAgICAgICAgb3B0aW9ucy5xdWV1ZWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGVhbCB3aXRoIGNvb2xkb3duLlxuICAgIGlmICghc2VuZE5vdyAmJiBMZWFucGx1bVJlcXVlc3QuYmF0Y2hDb29sZG93bikge1xuICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMFxuICAgICAgaWYgKCFsYXN0UmVxdWVzdFRpbWUgfHxcbiAgICAgICAgICBub3cgLSBsYXN0UmVxdWVzdFRpbWUgPj0gTGVhbnBsdW1SZXF1ZXN0LmJhdGNoQ29vbGRvd24pIHtcbiAgICAgICAgc2VuZE5vdyA9IHRydWVcbiAgICAgICAgbGFzdFJlcXVlc3RUaW1lID0gbm93XG4gICAgICB9IGVsc2UgaWYgKCFjb29sZG93blRpbWVvdXQpIHtcbiAgICAgICAgY29vbGRvd25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb29sZG93blRpbWVvdXQgPSBudWxsXG4gICAgICAgICAgbGFzdFJlcXVlc3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwXG4gICAgICAgICAgc2VuZFVuc2VudFJlcXVlc3RzKClcbiAgICAgICAgfSwgKExlYW5wbHVtUmVxdWVzdC5iYXRjaENvb2xkb3duIC0gKG5vdyAtIGxhc3RSZXF1ZXN0VGltZSkpICogMTAwMClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMZWFucGx1bVJlcXVlc3Quc2F2ZVJlcXVlc3RGb3JMYXRlcihhcmdzQnVpbGRlci5idWlsZERpY3QoKSlcbiAgICBpZiAoc2VuZE5vdykge1xuICAgICAgc2VuZFVuc2VudFJlcXVlc3RzKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2VuZXJhdGVSZXF1ZXN0VXJsKGFjdGlvbiwgcXVlcnlQYXJhbXMpIHtcbiAgICBxdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zIHx8IG5ldyBBcmdzQnVpbGRlcigpXG5cbiAgICAvLyBHZXQgb3IgY3JlYXRlIGRldmljZSBJRCBhbmQgdXNlciBJRC5cbiAgICBpZiAoIUxlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZCkge1xuICAgICAgTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkID1cbiAgICAgICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5ERVZJQ0VfSUQpXG4gICAgfVxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkKSB7XG4gICAgICBsZXQgaWQgPSAnJ1xuICAgICAgbGV0IHBvc3NpYmxlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonICtcbiAgICAgICAgICAnMDEyMzQ1Njc4OSdcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgICBpZCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSlcbiAgICAgIH1cbiAgICAgIExlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZCA9IGlkXG4gICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkRFVklDRV9JRCwgaWQpXG4gICAgfVxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCkge1xuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCA9IExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlVTRVJfSUQpXG4gICAgICBpZiAoIUxlYW5wbHVtUmVxdWVzdC51c2VySWQpIHtcbiAgICAgICAgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCA9IExlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZFxuICAgICAgfVxuICAgIH1cbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlVTRVJfSUQsIExlYW5wbHVtUmVxdWVzdC51c2VySWQpXG5cbiAgICBsZXQgYXJnc0J1aWxkZXIgPSBxdWVyeVBhcmFtc1xuICAgICAgICAuYXR0YWNoQXBpS2V5cyhMZWFucGx1bVJlcXVlc3QuYXBwSWQsIExlYW5wbHVtUmVxdWVzdC5jbGllbnRLZXkpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5TREtfVkVSU0lPTiwgQ29uc3RhbnRzLlNES19WRVJTSU9OKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuREVWSUNFX0lELCBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5VU0VSX0lELCBMZWFucGx1bVJlcXVlc3QudXNlcklkKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQUNUSU9OLCBhY3Rpb24pXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5WRVJTSU9OX05BTUUsIExlYW5wbHVtUmVxdWVzdC52ZXJzaW9uTmFtZSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkRFVl9NT0RFLCBJbnRlcm5hbFN0YXRlLmRldk1vZGUpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5USU1FLCAobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKS50b1N0cmluZygpKVxuXG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QuYXBwSWQgfHwgIUxlYW5wbHVtUmVxdWVzdC5jbGllbnRLZXkpIHtcbiAgICAgIGxldCBlcnIgPSAnTGVhbnBsdW0gQXBwIElEIGFuZCBjbGllbnQga2V5IGFyZSBub3Qgc2V0LiBNYWtlIHN1cmUgeW91ICcgK1xuICAgICAgICAgICdhcmUgY2FsbGluZyBzZXRBcHBJZEZvckRldmVsb3BtZW50TW9kZSBvciBzZXRBcHBJZEZvclByb2R1Y3Rpb25Nb2RlICcgK1xuICAgICAgICAgICdiZWZvcmUgaXNzdWluZyBBUEkgY2FsbHMuJ1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKVxuICAgIH1cblxuICAgIHJldHVybiBgJHtMZWFucGx1bVJlcXVlc3QuYXBpUGF0aH0/JHthcmdzQnVpbGRlci5idWlsZCgpfWBcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBuZXR3b3JrIHRpbWVvdXQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWNvbmRzIFRoZSB0aW1lb3V0IGluIHNlY29uZHMuXG4gICAqL1xuICBzdGF0aWMgc2V0TmV0d29ya1RpbWVvdXQoc2Vjb25kcykge1xuICAgIE5ldHdvcmsuc2V0TmV0d29ya1RpbWVvdXQoc2Vjb25kcylcbiAgfVxuXG4gIHN0YXRpYyBzYXZlUmVxdWVzdEZvckxhdGVyKGFyZ3MpIHtcbiAgICBsZXQgY291bnQgPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5DT1VOVCkgfHwgMFxuICAgIGxldCBpdGVtS2V5ID0gQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5JVEVNICsgY291bnRcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShpdGVtS2V5LCBKU09OLnN0cmluZ2lmeShhcmdzKSlcbiAgICBjb3VudCsrXG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5DT1VOVCwgY291bnQpXG4gIH1cblxuICBzdGF0aWMgcG9wVW5zZW50UmVxdWVzdHMoKSB7XG4gICAgbGV0IHJlcXVlc3REYXRhID0gW11cbiAgICBsZXQgY291bnQgPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5DT1VOVCkgfHwgMFxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIucmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkNPVU5UKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgbGV0IGl0ZW1LZXkgPSBDb25zdGFudHMuREVGQVVMVF9LRVlTLklURU0gKyBpXG4gICAgICB0cnkge1xuICAgICAgICBsZXQgcmVxdWVzdEFyZ3MgPSBKU09OLnBhcnNlKExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShpdGVtS2V5KSlcbiAgICAgICAgcmVxdWVzdERhdGEucHVzaChyZXF1ZXN0QXJncylcbiAgICAgIH0gY2F0Y2ggKGlnbm9yZWQpIHsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgICB9XG4gICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnJlbW92ZUZyb21Mb2NhbFN0b3JhZ2UoaXRlbUtleSlcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3REYXRhXG4gIH1cblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vIFJlc3BvbnNlIHBhcnNpbmcgLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgc3RhdGljIG51bVJlc3BvbnNlcyhyZXNwb25zZSkge1xuICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLnJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UucmVzcG9uc2UubGVuZ3RoXG4gIH1cblxuICBzdGF0aWMgZ2V0UmVzcG9uc2VBdChyZXNwb25zZSwgaW5kZXgpIHtcbiAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5yZXNwb25zZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLnJlc3BvbnNlW2luZGV4XVxuICB9XG5cbiAgc3RhdGljIGdldExhc3RSZXNwb25zZShyZXNwb25zZSkge1xuICAgIGxldCBjb3VudCA9IExlYW5wbHVtUmVxdWVzdC5udW1SZXNwb25zZXMocmVzcG9uc2UpXG4gICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgcmV0dXJuIExlYW5wbHVtUmVxdWVzdC5nZXRSZXNwb25zZUF0KHJlc3BvbnNlLCBjb3VudCAtIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGlzUmVzcG9uc2VTdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiAhIXJlc3BvbnNlLnN1Y2Nlc3NcbiAgfVxuXG4gIHN0YXRpYyBnZXRSZXNwb25zZUVycm9yKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgbGV0IGVycm9yID0gcmVzcG9uc2UuZXJyb3JcbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gZXJyb3IubWVzc2FnZVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGVhbnBsdW1SZXF1ZXN0LmpzIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cblxubGV0IGxvY2FsU3RvcmFnZUVuYWJsZWRcbmxldCBhbHRlcm5hdGVMb2NhbFN0b3JhZ2UgPSB7fVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhbFN0b3JhZ2VNYW5hZ2VyIHtcbiAgc3RhdGljIGdldEZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZUVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gYWx0ZXJuYXRlTG9jYWxTdG9yYWdlW2tleV1cbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZVtrZXldXG4gIH1cblxuICBzdGF0aWMgc2F2ZVRvTG9jYWxTdG9yYWdlKGtleSwgdmFsdWUpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGFsdGVybmF0ZUxvY2FsU3RvcmFnZVtrZXldID0gdmFsdWVcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZUVuYWJsZWQgPSBmYWxzZVxuICAgICAgYWx0ZXJuYXRlTG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVGcm9tTG9jYWxTdG9yYWdlKGtleSkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2VFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgZGVsZXRlIGFsdGVybmF0ZUxvY2FsU3RvcmFnZVtrZXldXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VFbmFibGVkID0gZmFsc2VcbiAgICAgIGRlbGV0ZSBhbHRlcm5hdGVMb2NhbFN0b3JhZ2Vba2V5XVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xvY2FsU3RvcmFnZU1hbmFnZXIuanMiLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTGlzdENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldE1hcERhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVybmFsU3RhdGUge1xuICBzdGF0aWMgZGV2TW9kZSA9IGZhbHNlXG5cbiAgc3RhdGljIHZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycyA9IFtdXG4gIHN0YXRpYyBoYXNSZWNlaXZlZERpZmZzID0gZmFsc2VcblxuICBzdGF0aWMgc3RhcnRIYW5kbGVycyA9IFtdXG4gIHN0YXRpYyBoYXNTdGFydGVkID0gZmFsc2VcbiAgc3RhdGljIHN0YXJ0U3VjY2Vzc2Z1bCA9IGZhbHNlXG4gIHN0YXRpYyB2YXJpYW50RGVidWdJbmZvRW5hYmxlZCA9IGZhbHNlXG5cbiAgc3RhdGljIGFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBJbnRlcm5hbFN0YXRlLnN0YXJ0SGFuZGxlcnMucHVzaChoYW5kbGVyKVxuICAgIGlmIChJbnRlcm5hbFN0YXRlLmhhc1N0YXJ0ZWQpIHtcbiAgICAgIGhhbmRsZXIoSW50ZXJuYWxTdGF0ZS5zdGFydFN1Y2Nlc3NmdWwpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJlbW92ZVN0YXJ0UmVzcG9uc2VIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBsZXQgaWR4ID0gSW50ZXJuYWxTdGF0ZS5zdGFydEhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcilcbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgIEludGVybmFsU3RhdGUuc3RhcnRIYW5kbGVycy5zcGxpY2UoaWR4LCAxKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB0cmlnZ2VyU3RhcnRIYW5kbGVycygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEludGVybmFsU3RhdGUuc3RhcnRIYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgSW50ZXJuYWxTdGF0ZS5zdGFydEhhbmRsZXJzW2ldKEludGVybmFsU3RhdGUuc3RhcnRTdWNjZXNzZnVsKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhZGRWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgSW50ZXJuYWxTdGF0ZS52YXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMucHVzaChoYW5kbGVyKVxuICAgIGlmIChJbnRlcm5hbFN0YXRlLmhhc1JlY2VpdmVkRGlmZnMpIHtcbiAgICAgIGhhbmRsZXIoKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgbGV0IGlkeCA9IEludGVybmFsU3RhdGUudmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcilcbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgIEludGVybmFsU3RhdGUudmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzLnNwbGljZShpZHgsIDEpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHRyaWdnZXJWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBJbnRlcm5hbFN0YXRlLnZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBJbnRlcm5hbFN0YXRlLnZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyc1tpXSgpXG4gICAgICB9XG4gIH1cblxuICAgIHN0YXRpYyBzZXRWYXJpYW50RGVidWdJbmZvRW5hYmxlZCh2YXJpYW50RGVidWdJbmZvRW5hYmxlZCkge1xuICAgIEludGVybmFsU3RhdGUudmFyaWFudERlYnVnSW5mb0VuYWJsZWQgPSB2YXJpYW50RGVidWdJbmZvRW5hYmxlZFxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbnRlcm5hbFN0YXRlLmpzIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cblxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL0NvbnN0YW50cydcbmltcG9ydCBJbnRlcm5hbFN0YXRlIGZyb20gJy4vSW50ZXJuYWxTdGF0ZSdcbmltcG9ydCBBcmdzQnVpbGRlciBmcm9tICcuL0FyZ3NCdWlsZGVyJ1xuaW1wb3J0IExvY2FsU3RvcmFnZU1hbmFnZXIgZnJvbSAnLi9Mb2NhbFN0b3JhZ2VNYW5hZ2VyJ1xuaW1wb3J0IExlYW5wbHVtUmVxdWVzdCBmcm9tICcuL0xlYW5wbHVtUmVxdWVzdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFyQ2FjaGUge1xuICBzdGF0aWMgZGlmZnMgPSB1bmRlZmluZWRcbiAgc3RhdGljIHZhcmlhYmxlcyA9IG51bGxcbiAgc3RhdGljIHZhcmlhbnRzID0gW11cbiAgc3RhdGljIHZhcmlhbnREZWJ1Z0luZm8gPSB7fVxuICBzdGF0aWMgbWVyZ2VkID0gdW5kZWZpbmVkXG4gIHN0YXRpYyBvblVwZGF0ZSA9IHVuZGVmaW5lZFxuICBzdGF0aWMgdG9rZW4gPSAnJ1xuICBzdGF0aWMgYWN0aW9uTWV0YWRhdGEgPSB7fVxuICBzdGF0aWMgbWVzc2FnZXNWaWV3ID0gdW5kZWZpbmVkXG4gIHN0YXRpYyBtZXNzYWdlc1ZpZXdQZXJTZXNzaW9uID0gW11cbiAgc3RhdGljIG1lc3NhZ2VzXG5cbiAgc3RhdGljIGFwcGx5RGlmZnMoZGlmZnMsIHZhcmlhbnRzLCBhY3Rpb25NZXRhZGF0YSkge1xuICAgIFZhckNhY2hlLmRpZmZzID0gZGlmZnNcbiAgICBWYXJDYWNoZS52YXJpYW50cyA9IHZhcmlhbnRzXG4gICAgVmFyQ2FjaGUuYWN0aW9uTWV0YWRhdGEgPSBhY3Rpb25NZXRhZGF0YVxuICAgIEludGVybmFsU3RhdGUuaGFzUmVjZWl2ZWREaWZmcyA9IHRydWVcbiAgICBWYXJDYWNoZS5tZXJnZWQgPSBWYXJDYWNoZS5tZXJnZUhlbHBlcihWYXJDYWNoZS52YXJpYWJsZXMsIGRpZmZzKVxuICAgIFZhckNhY2hlLnNhdmVEaWZmcygpXG4gICAgaWYgKFZhckNhY2hlLm9uVXBkYXRlKSB7XG4gICAgICBWYXJDYWNoZS5vblVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGxvYWREaWZmcygpIHtcbiAgICB0cnkge1xuICAgICAgVmFyQ2FjaGUuYXBwbHlEaWZmcyhcbiAgICAgICAgICBKU09OLnBhcnNlKExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShcbiAgICAgICAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQUJMRVMpIHx8IG51bGwpLFxuICAgICAgICAgIEpTT04ucGFyc2UoTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKFxuICAgICAgICAgICAgICBDb25zdGFudHMuREVGQVVMVF9LRVlTLlZBUklBTlRTKSB8fCBudWxsKSxcbiAgICAgICAgICBKU09OLnBhcnNlKExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShcbiAgICAgICAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5BQ1RJT05fTUVUQURBVEEpIHx8IG51bGwpKVxuICAgICAgVmFyQ2FjaGUudG9rZW4gPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5UT0tFTilcbiAgICAgIFZhckNhY2hlLnZhcmlhbnREZWJ1Z0luZm8gPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQU5UX0RFQlVHX0lORk8pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coYExlYW5wbHVtOiBJbnZhbGlkIGRpZmZzOiAke2V9YClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgc2F2ZURpZmZzKCkge1xuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKFxuICAgICAgICBDb25zdGFudHMuREVGQVVMVF9LRVlTLlZBUklBQkxFUywgSlNPTi5zdHJpbmdpZnkoVmFyQ2FjaGUuZGlmZnMgfHwge30pKVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKFxuICAgICAgICBDb25zdGFudHMuREVGQVVMVF9LRVlTLlZBUklBTlRTLCBKU09OLnN0cmluZ2lmeShWYXJDYWNoZS52YXJpYW50cyB8fCBbXSlcbiAgICApXG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5BQ1RJT05fTUVUQURBVEEsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KFZhckNhY2hlLmFjdGlvbk1ldGFkYXRhIHx8IHt9KSlcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlZBUklBTlRfREVCVUdfSU5GTyxcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoVmFyQ2FjaGUudmFyaWFudERlYnVnSW5mbyB8fCB7fSkpXG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5UT0tFTiwgVmFyQ2FjaGUudG9rZW4pXG4gIH1cblxuICAvKipcbiAgICogcmVjb3JkIHZpZXcgbWVzc2FnZSBpbiBsb2NhbCBzdG9yYWdlIGFuZCAgaW4gbWVtb3J5IChha2Egc2Vzc2lvbilcbiAgICogQHBhcmFtIG1lc3NhZ2VJZFxuICAgKi9cbiAgc3RhdGljIGFkZE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZCl7XG4gICAgY29uc3QgbWVzc2FnZVZpZXcgPSBWYXJDYWNoZS5nZXRNZXNzYWdlc1ZpZXcoKVttZXNzYWdlSWRdXG4gICAgaWYgKG1lc3NhZ2VWaWV3ID09PSB1bmRlZmluZWQpe1xuICAgICAgVmFyQ2FjaGUubWVzc2FnZXNWaWV3W21lc3NhZ2VJZF0gPSBbXVxuICAgIH1cbiAgICBjb25zdCBtZXNzYWdlVmlld1BlclNlc3Npb24gPVZhckNhY2hlLm1lc3NhZ2VzVmlld1BlclNlc3Npb25bbWVzc2FnZUlkXSB8fCBbXVxuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIG1lc3NhZ2VWaWV3UGVyU2Vzc2lvbi5wdXNoKHt0Om5vd30pXG4gICAgVmFyQ2FjaGUubWVzc2FnZXNWaWV3W21lc3NhZ2VJZF0ucHVzaCh7dDpub3d9KVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuTUVTU0FHRV9WSUVXLEpTT04uc3RyaW5naWZ5KFxuICAgICAgVmFyQ2FjaGUubWVzc2FnZXNWaWV3IHx8IHt9KSlcbiAgfVxuXG5cblxuICAvKipcbiAgICogZ2V0IGFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgbWVzc2FnZVZpZXdzIHdpdGggbWVzc2FnZUlkIGFzIGtleSwgcGVyIHNlc3Npb24gb3IgZnJvbSBzdGFydFxuICAgKiBAcGFyYW0gc2Vzc2lvbiB7Qm9vbGVhbiB8IHVuZGVmaW5lZH1cbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXRNZXNzYWdlc1ZpZXcoc2Vzc2lvbil7XG4gICAgaWYoc2Vzc2lvbil7XG4gICAgICByZXR1cm4gVmFyQ2FjaGUubWVzc2FnZXNWaWV3UGVyU2Vzc2lvblxuICAgIH1cbiAgICBpZihWYXJDYWNoZS5tZXNzYWdlc1ZpZXcgPT09IHVuZGVmaW5lZCl7XG4gICAgICBWYXJDYWNoZS5tZXNzYWdlc1ZpZXcgPSBKU09OLnBhcnNlKFxuICAgICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5NRVNTQUdFX1ZJRVcpIHx8ICd7fScpXG4gICAgfVxuICAgIHJldHVybiBWYXJDYWNoZS5tZXNzYWdlc1ZpZXdcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgYWxsIHZpZXcgZm9yIGEgZ2l2ZW4gbWVzc2FnZSBlaXRoZXIgZm9ybSB0aGUgc3RhcnQgb3IgcGVyIHNlc3Npb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VJZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW4gfCB1bmRlZmluZWR9IHNlc3Npb25cbiAgICogQHJldHVybnMgeyp8QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgZ2V0TWVzc2FnZVZpZXcobWVzc2FnZUlkLCBzZXNzaW9uKXtcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0TWVzc2FnZXNWaWV3KHNlc3Npb24pW21lc3NhZ2VJZF0gfHwgW11cbiAgfVxuICBzdGF0aWMgc2V0VmFyaWFibGVzKHZhcmlhYmxlcykge1xuICAgIFZhckNhY2hlLnZhcmlhYmxlcyA9IHZhcmlhYmxlc1xuICB9XG5cbiAgc3RhdGljIGdldFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gVmFyQ2FjaGUubWVyZ2VkICE9PSB1bmRlZmluZWQgPyBWYXJDYWNoZS5tZXJnZWQgOiBWYXJDYWNoZS52YXJpYWJsZXNcbiAgfVxuXG4gIHN0YXRpYyBnZXRWYXJpYW50RGVidWdJbmZvKCkge1xuICAgIHJldHVybiBWYXJDYWNoZS52YXJpYW50RGVidWdJbmZvXG4gIH1cblxuICBzdGF0aWMgc2VuZFZhcmlhYmxlcygpIHtcbiAgICBsZXQgYm9keSA9IHt9XG4gICAgYm9keVtDb25zdGFudHMuUEFSQU1TLlZBUklBQkxFU10gPSBWYXJDYWNoZS52YXJpYWJsZXNcbiAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5TRVRfVkFSUyxcbiAgICAgICAgbmV3IEFyZ3NCdWlsZGVyKCkuYm9keShKU09OLnN0cmluZ2lmeShib2R5KSksIHtcbiAgICAgICAgICBzZW5kTm93OiB0cnVlXG4gICAgICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZ2V0TWVzc2FnZXMoKSB7XG4gICAgcmV0dXJuIFZhckNhY2hlLm1lc3NhZ2VzXG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIG1lc3NhZ2UgeyBtZXNzYWdlSWQ6e21lc3NhZ2V9LCB9IHRvIFt7bWVzc2FnZX1dIGFuZCBzdG9yZVxuICAgKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZXNcbiAgICovXG4gIHN0YXRpYyBzZXRNZXNzYWdlcyhtZXNzYWdlcykge1xuICAgIFZhckNhY2hlLm1lc3NhZ2VzID0gT2JqZWN0LmVudHJpZXMobWVzc2FnZXMpXG4gICAgICAgIC5tYXAoKFtpZCwgbWVzc2FnZV0pID0+ICh7aWQsIC4uLm1lc3NhZ2V9KSlcbiAgfVxuXG4gICAgc3RhdGljIG1lcmdlSGVscGVyKHZhcnMsIGRpZmYpIHtcbiAgICBpZiAodHlwZW9mIGRpZmYgPT09ICdudW1iZXInIHx8IHR5cGVvZiBkaWZmID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIGRpZmYgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZGlmZlxuICAgIH1cbiAgICBpZiAoZGlmZiA9PT0gbnVsbCB8fCBkaWZmID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB2YXJzXG4gICAgfVxuXG4gICAgbGV0IG9iakl0ZXJhdG9yID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZikge1xuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZihvYmpbaV0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAobGV0IGF0dHIgaW4gb2JqKSB7XG4gICAgICAgICAgICAvLyBUaGlzIHNlZW1zIHRvIGJlIGJlc3QgcHJhY3RpY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9lc2xpbnQvZXNsaW50L2lzc3Vlcy83MDcxXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlZmxlY3RcbiAgICAgICAgICAgIGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgYXR0cikpIHtcbiAgICAgICAgICAgICAgZihhdHRyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgdmFyc0l0ZXJhdG9yID0gb2JqSXRlcmF0b3IodmFycylcbiAgICBsZXQgZGlmZkl0ZXJhdG9yID0gb2JqSXRlcmF0b3IoZGlmZilcblxuICAgIC8vIEluZmVyIHRoYXQgdGhlIGRpZmZzIGlzIGFuIGFycmF5IGlmIHRoZSB2YXJzIHZhbHVlIGRvZXNuJ3QgZXhpc3QgdG8gdGVsbCB1cyB0aGUgdHlwZS5cbiAgICBsZXQgaXNBcnJheSA9IGZhbHNlXG4gICAgaWYgKHZhcnMgPT09IG51bGwpIHtcbiAgICAgIGlmICghKGRpZmYgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgaXNBcnJheSA9IG51bGxcbiAgICAgICAgZm9yIChsZXQgYXR0cmlidXRlIGluIGRpZmYpIHtcbiAgICAgICAgICBpZiAoIWRpZmYuaGFzT3duUHJvcGVydHkoYXR0cmlidXRlKSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzQXJyYXkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGlzQXJyYXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghKHR5cGVvZiBhdHRyaWJ1dGUgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICAgICAgaXNBcnJheSA9IGZhbHNlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYXR0cmlidXRlLmxlbmd0aCA8IDMgfHwgYXR0cmlidXRlLmNoYXJBdCgwKSAhPT0gJ1snIHx8XG4gICAgICAgICAgICAgIGF0dHJpYnV0ZS5jaGFyQXQoYXR0cmlidXRlLmxlbmd0aCAtIDEpICE9PSAnXScpIHtcbiAgICAgICAgICAgIGlzQXJyYXkgPSBmYWxzZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHZhclN1YnNjcmlwdCA9IGF0dHJpYnV0ZS5zdWJzdHJpbmcoMSwgYXR0cmlidXRlLmxlbmd0aCAtIDEpXG4gICAgICAgICAgaWYgKCFwYXJzZUludCh2YXJTdWJzY3JpcHQpLnRvU3RyaW5nKCkgPT09IHZhclN1YnNjcmlwdCkge1xuICAgICAgICAgICAgaXNBcnJheSA9IGZhbHNlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1lcmdlIGFycmF5cy5cbiAgICBpZiAodmFycyBpbnN0YW5jZW9mIEFycmF5IHx8IGlzQXJyYXkpIHtcbiAgICAgIGxldCBtZXJnZWQgPSBbXVxuICAgICAgdmFyc0l0ZXJhdG9yKGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgICAgbWVyZ2VkLnB1c2goYXR0cilcbiAgICAgIH0pXG4gICAgICBkaWZmSXRlcmF0b3IoZnVuY3Rpb24odmFyU3Vic2NyaXB0KSB7XG4gICAgICAgIGxldCBzdWJzY3JpcHQgPVxuICAgICAgICAgICAgcGFyc2VJbnQodmFyU3Vic2NyaXB0LnN1YnN0cmluZygxLCB2YXJTdWJzY3JpcHQubGVuZ3RoIC0gMSkpXG4gICAgICAgIGxldCBkaWZmVmFsdWUgPSBkaWZmW3ZhclN1YnNjcmlwdF1cbiAgICAgICAgd2hpbGUgKHN1YnNjcmlwdCA+PSBtZXJnZWQubGVuZ3RoKSB7XG4gICAgICAgICAgbWVyZ2VkLnB1c2gobnVsbClcbiAgICAgICAgfVxuICAgICAgICBtZXJnZWRbc3Vic2NyaXB0XSA9IFZhckNhY2hlLm1lcmdlSGVscGVyKG1lcmdlZFtzdWJzY3JpcHRdLCBkaWZmVmFsdWUpXG4gICAgICB9KVxuICAgICAgcmV0dXJuIG1lcmdlZFxuICAgIH1cblxuICAgIC8vIE1lcmdlIGRpY3Rpb25hcmllcy5cbiAgICBsZXQgbWVyZ2VkID0ge31cbiAgICB2YXJzSXRlcmF0b3IoZnVuY3Rpb24oYXR0cikge1xuICAgICAgaWYgKGRpZmZbYXR0cl0gPT09IG51bGwgfHwgZGlmZlthdHRyXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1lcmdlZFthdHRyXSA9IHZhcnNbYXR0cl1cbiAgICAgIH1cbiAgICB9KVxuICAgIGRpZmZJdGVyYXRvcihmdW5jdGlvbihhdHRyKSB7XG4gICAgICBtZXJnZWRbYXR0cl0gPSBWYXJDYWNoZS5tZXJnZUhlbHBlcih2YXJzICE9PSBudWxsID8gdmFyc1thdHRyXSA6IG51bGwsXG4gICAgICAgICAgZGlmZlthdHRyXSlcbiAgICB9KVxuICAgIHJldHVybiBtZXJnZWRcbiAgfVxuXG4gIHN0YXRpYyBjbGVhclVzZXJDb250ZW50KCkge1xuICAgIFZhckNhY2hlLmRpZmZzID0gdW5kZWZpbmVkXG4gICAgVmFyQ2FjaGUudmFyaWFibGVzID0gbnVsbFxuICAgIFZhckNhY2hlLnZhcmlhbnRzID0gW11cbiAgICBWYXJDYWNoZS52YXJpYW50RGVidWdJbmZvID0ge31cbiAgICBWYXJDYWNoZS5tZXJnZWQgPSB1bmRlZmluZWRcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVmFyQ2FjaGUuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oKXtcbiAgdmFyIHRvcGljcyA9IHt9XG5cbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uKHRvcGljLCBsaXN0ZW5lcikge1xuICAgICAgaWYoIXRvcGljcy5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRvcGljcywgdG9waWMpKSB0b3BpY3NbdG9waWNdID0gW11cblxuICAgICAgdmFyIGluZGV4ID0gdG9waWNzW3RvcGljXS5wdXNoKGxpc3RlbmVyKSAtIDFcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkZWxldGUgdG9waWNzW3RvcGljXVtpbmRleF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcHVibGlzaDogZnVuY3Rpb24odG9waWMsIGluZm8pIHtcbiAgICAgIGlmKCF0b3BpY3MuaGFzT3duUHJvcGVydHkuY2FsbCh0b3BpY3MsIHRvcGljKSkgcmV0dXJuXG5cbiAgICAgIHRvcGljc1t0b3BpY10uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGl0ZW0oaW5mbyAhPSB1bmRlZmluZWQgPyBpbmZvIDoge30pXG4gICAgICB9KVxuICAgIH1cbiAgfVxufSkoKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0V2ZW50cy5qcyIsIi8qKlxuICogQWpheCBmdW5jdGlvbnMgZnJvbTpcbiAqXG4gKiBQYXJzZSBKYXZhU2NyaXB0IFNES1xuICogVmVyc2lvbjogMS4xLjVcbiAqIEJ1aWx0OiBNb24gT2N0IDAxIDIwMTIgMTc6NTc6MTNcbiAqIGh0dHA6Ly9wYXJzZS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAxMiBQYXJzZSwgSW5jLlxuICogVGhlIFBhcnNlIEphdmFTY3JpcHQgU0RLIGlzIGZyZWVseSBkaXN0cmlidXRhYmxlIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5sZXQgcmVxdWVzdFF1ZXVlID0gW11cbmxldCBuZXR3b3JrVGltZW91dFNlY29uZHMgPSAxMFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXR3b3JrIHtcbiAgLyoqXG4gICAqIFNldHMgdGhlIG5ldHdvcmsgdGltZW91dC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgVGhlIHRpbWVvdXQgaW4gc2Vjb25kcy5cbiAgICovXG4gIHN0YXRpYyBzZXROZXR3b3JrVGltZW91dChzZWNvbmRzKSB7XG4gICAgbmV0d29ya1RpbWVvdXRTZWNvbmRzID0gc2Vjb25kc1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYW4gYWpheCByZXF1ZXN0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIFRoZSBodHRwIG1ldGhvZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIG9wZW4uXG4gICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5QnVmZmVyfEJsb2J8RG9jdW1lbnR8Rm9ybURhdGF9IGRhdGEgVGhlIGRhdGEgdG8gYmUgc2VudCBpbiBib2R5LlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdWNjZXNzIEEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIHN1Y2Nlc3MuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGVycm9yIEEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGVycm9yLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHF1ZXVlZCBXaGV0aGVyIHRoZSByZXF1ZXN0IHNob3VsZCBiZSBxdWV1ZWQgb3IgaW1tZWRpYXRlbHkgc2VudC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbcGxhaW5UZXh0XSBXaGV0aGVyIHRoZSByZXNwb25zZSBzaG91bGQgYmUgcmV0dXJuZWQgYXMgcGxhaW4gdGV4dCBvciBqc29uLlxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgc3RhdGljIGFqYXgobWV0aG9kLCB1cmwsIGRhdGEsIHN1Y2Nlc3MsIGVycm9yLCBxdWV1ZWQsIHBsYWluVGV4dCkge1xuICAgIGlmIChxdWV1ZWQpIHtcbiAgICAgIGlmIChOZXR3b3JrLnJ1bm5pbmdSZXF1ZXN0KSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICAgICAgcmV0dXJuIE5ldHdvcmsuZW5xdWV1ZVJlcXVlc3QoYXJndW1lbnRzKVxuICAgICAgfVxuICAgICAgTmV0d29yay5ydW5uaW5nUmVxdWVzdCA9IHRydWVcbiAgICB9XG5cbiAgICAvKiogQG5hbWVzcGFjZSBYRG9tYWluUmVxdWVzdCAqKi9cbiAgICAvKiogQG5hbWVzcGFjZSBsb2NhdGlvbiAqKi9cbiAgICBpZiAodHlwZW9mIFhEb21haW5SZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKGxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cDonICYmIHVybC5pbmRleE9mKCdodHRwczonKSA9PT0gMCkge1xuICAgICAgICB1cmwgPSBgaHR0cDoke3VybC5zdWJzdHJpbmcoNil9YFxuICAgICAgfVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgcmV0dXJuIFJlZmxlY3QuYXBwbHkoTmV0d29yay5hamF4SUU4LCBudWxsLCBhcmd1bWVudHMpXG4gICAgfVxuXG4gICAgbGV0IGhhbmRsZWQgPSBmYWxzZVxuXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlZCA9IHRydWVcblxuICAgICAgICBsZXQgcmVzcG9uc2VcbiAgICAgICAgbGV0IHJhbkNhbGxiYWNrID0gZmFsc2VcbiAgICAgICAgaWYgKHBsYWluVGV4dCkge1xuICAgICAgICAgIHJlc3BvbnNlID0geGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dClcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBlcnJvcihudWxsLCB4aHIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDApXG4gICAgICAgICAgICByYW5DYWxsYmFjayA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJhbkNhbGxiYWNrKSB7XG4gICAgICAgICAgaWYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXNwb25zZSwgeGhyKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBlcnJvcihyZXNwb25zZSwgeGhyKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChxdWV1ZWQpIHtcbiAgICAgICAgICBOZXR3b3JrLnJ1bm5pbmdSZXF1ZXN0ID0gZmFsc2VcbiAgICAgICAgICBOZXR3b3JrLmRlcXVldWVSZXF1ZXN0KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSlcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvcGxhaW4nKSAvLyBBdm9pZCBwcmUtZmxpZ2h0LlxuICAgIHhoci5zZW5kKGRhdGEpXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGlmICghaGFuZGxlZCkge1xuICAgICAgICB4aHIuYWJvcnQoKVxuICAgICAgfVxuICAgIH0sIG5ldHdvcmtUaW1lb3V0U2Vjb25kcyAqIDEwMDApXG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhbiBhamF4IHJlcXVlc3QgZm9yIElFOC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCBUaGUgaHR0cCBtZXRob2QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBvcGVuLlxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheUJ1ZmZlcnxCbG9ifERvY3VtZW50fEZvcm1EYXRhfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHNlbnQgaW4gYm9keS5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gc3VjY2VzcyBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBzdWNjZXNzLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBlcnJvciBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBlcnJvci5cbiAgICogQHBhcmFtIHtib29sZWFufSBxdWV1ZWQgV2hldGhlciB0aGUgcmVxdWVzdCBzaG91bGQgYmUgcXVldWVkIG9yIGltbWVkaWF0ZWx5IHNlbnQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGxhaW5UZXh0IFdoZXRoZXIgdGhlIHJlc3BvbnNlIHNob3VsZCBiZSByZXR1cm5lZCBhcyBwbGFpbiB0ZXh0IG9yIGpzb24uXG4gICAqL1xuICBzdGF0aWMgYWpheElFOChtZXRob2QsIHVybCwgZGF0YSwgc3VjY2VzcywgZXJyb3IsIHF1ZXVlZCwgcGxhaW5UZXh0KSB7XG4gICAgbGV0IHhkciA9IG5ldyBYRG9tYWluUmVxdWVzdCgpXG4gICAgeGRyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHJlc3BvbnNlXG4gICAgICBsZXQgcmFuQ2FsbGJhY2sgPSBmYWxzZVxuICAgICAgaWYgKHBsYWluVGV4dCkge1xuICAgICAgICByZXNwb25zZSA9IHhkci5yZXNwb25zZVRleHRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhkci5yZXNwb25zZVRleHQpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGVycm9yKG51bGwsIHhkcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAwKVxuICAgICAgICAgIHJhbkNhbGxiYWNrID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXJhbkNhbGxiYWNrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzcG9uc2UsIHhkcilcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDApXG4gICAgICB9XG4gICAgICBpZiAocXVldWVkKSB7XG4gICAgICAgIE5ldHdvcmsucnVubmluZ1JlcXVlc3QgPSBmYWxzZVxuICAgICAgICBOZXR3b3JrLmRlcXVldWVSZXF1ZXN0KClcbiAgICAgIH1cbiAgICB9XG4gICAgeGRyLm9uZXJyb3IgPSB4ZHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBlcnJvcihudWxsLCB4ZHIpXG4gICAgICAgIH1cbiAgICAgIH0sIDApXG4gICAgICBpZiAocXVldWVkKSB7XG4gICAgICAgIE5ldHdvcmsucnVubmluZ1JlcXVlc3QgPSBmYWxzZVxuICAgICAgICBOZXR3b3JrLmRlcXVldWVSZXF1ZXN0KClcbiAgICAgIH1cbiAgICB9XG4gICAgeGRyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcbiAgICB9XG4gICAgeGRyLm9wZW4obWV0aG9kLCB1cmwpXG4gICAgeGRyLnRpbWVvdXQgPSBuZXR3b3JrVGltZW91dFNlY29uZHMgKiAxMDAwXG4gICAgeGRyLnNlbmQoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSByZXF1ZXN0IHRvIHRoZSByZXF1ZXN0IHF1ZXVlLlxuICAgKiBAcGFyYW0ge0FyZ3VtZW50c30gcmVxdWVzdEFyZ3VtZW50cyBUaGUgcmVxdWVzdCBhcmd1bWVudHMgZnJvbSB0aGUgaW5pdGlhbCBtZXRob2QgY2FsbC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXRpYyBlbnF1ZXVlUmVxdWVzdChyZXF1ZXN0QXJndW1lbnRzKSB7XG4gICAgcmVxdWVzdFF1ZXVlLnB1c2gocmVxdWVzdEFyZ3VtZW50cylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSByZXF1ZXN0IGZyb20gdGhlIHJlcXVlc3QgcXVldWUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdGF0aWMgZGVxdWV1ZVJlcXVlc3QoKSB7XG4gICAgbGV0IGFyZ3MgPSByZXF1ZXN0UXVldWUuc2hpZnQoKVxuICAgIGlmIChhcmdzKSB7XG4gICAgICBSZWZsZWN0LmFwcGx5KE5ldHdvcmsuYWpheCwgbnVsbCwgYXJncylcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9OZXR3b3JrLmpzIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX01hcENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5U29tZSA9IHJlcXVpcmUoJy4vX2FycmF5U29tZScpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgYXJyYXlzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlciBUaGUgb3RoZXIgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYGFycmF5YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcnJheXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxBcnJheXMoYXJyYXksIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBhcnJMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBvdGhMZW5ndGggPSBvdGhlci5sZW5ndGg7XG5cbiAgaWYgKGFyckxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIShpc1BhcnRpYWwgJiYgb3RoTGVuZ3RoID4gYXJyTGVuZ3RoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KGFycmF5KTtcbiAgaWYgKHN0YWNrZWQgJiYgc3RhY2suZ2V0KG90aGVyKSkge1xuICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICB9XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgIHNlZW4gPSAoYml0bWFzayAmIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpID8gbmV3IFNldENhY2hlIDogdW5kZWZpbmVkO1xuXG4gIHN0YWNrLnNldChhcnJheSwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIGFycmF5KTtcblxuICAvLyBJZ25vcmUgbm9uLWluZGV4IHByb3BlcnRpZXMuXG4gIHdoaWxlICgrK2luZGV4IDwgYXJyTGVuZ3RoKSB7XG4gICAgdmFyIGFyclZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2luZGV4XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBhcnJWYWx1ZSwgaW5kZXgsIG90aGVyLCBhcnJheSwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihhcnJWYWx1ZSwgb3RoVmFsdWUsIGluZGV4LCBhcnJheSwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgaWYgKGNvbXBhcmVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChjb21wYXJlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKHNlZW4pIHtcbiAgICAgIGlmICghYXJyYXlTb21lKG90aGVyLCBmdW5jdGlvbihvdGhWYWx1ZSwgb3RoSW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghY2FjaGVIYXMoc2Vlbiwgb3RoSW5kZXgpICYmXG4gICAgICAgICAgICAgICAgKGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZWVuLnB1c2gob3RoSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEoXG4gICAgICAgICAgYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8XG4gICAgICAgICAgICBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKGFycmF5KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEFycmF5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL190b1NvdXJjZS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2VxLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpO1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgZGVlcCBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmVcbiAqIGVxdWl2YWxlbnQuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIHN1cHBvcnRzIGNvbXBhcmluZyBhcnJheXMsIGFycmF5IGJ1ZmZlcnMsIGJvb2xlYW5zLFxuICogZGF0ZSBvYmplY3RzLCBlcnJvciBvYmplY3RzLCBtYXBzLCBudW1iZXJzLCBgT2JqZWN0YCBvYmplY3RzLCByZWdleGVzLFxuICogc2V0cywgc3RyaW5ncywgc3ltYm9scywgYW5kIHR5cGVkIGFycmF5cy4gYE9iamVjdGAgb2JqZWN0cyBhcmUgY29tcGFyZWRcbiAqIGJ5IHRoZWlyIG93biwgbm90IGluaGVyaXRlZCwgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLiBGdW5jdGlvbnMgYW5kIERPTVxuICogbm9kZXMgYXJlIGNvbXBhcmVkIGJ5IHN0cmljdCBlcXVhbGl0eSwgaS5lLiBgPT09YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5pc0VxdWFsKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIG9iamVjdCA9PT0gb3RoZXI7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0VxdWFsKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0VxdWFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0VxdWFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzTGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fYmFzZUlzVHlwZWRBcnJheScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBIYW5kbGVzIEluLWFwcCBtZXNzYWdlIGZpbHRlcmluZ1xuICovXG5pbXBvcnQgVmFyQ2FjaGUgZnJvbSAnLi9WYXJDYWNoZSdcblxuLyoqIHByaXZhdGVcbiAqIHJldHVybiB0cnVlIGlmIG1lc3NhZ2UgcGFzcyBvbmUgdHJpZ2dlci92ZXJiIGNvbmRpdGlvblxuICogaWYgbm8gdHJpZ2dlciwgcmV0dXJuIGZhbHNlIGFzIGluIGFuZHJvaWRcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXNcbiAqIC8vIEBwYXJhbSB7b2JqZWN0fSBtZXNzYWdlXG4gKiAvLyBAcGFyYW0ge29iamVjdD99IG1lc3NhZ2Uud2hlblRyaWdnZXJzXG4gKiBAcmV0dXJuIHtmdW5jdGlvbih7b2JqZWN0fSk6e2Jvb2xlYW59fVxuICovXG5jb25zdCBmaWx0ZXJCeVRyaWdnZXJzID0gKHBhcmFtcz17fSkgPT4gKG1lc3NhZ2UpID0+IHtcbiAgY29uc3QgdHJpZ2dlcnMgPSBtZXNzYWdlLndoZW5UcmlnZ2VycyAmJiBtZXNzYWdlLndoZW5UcmlnZ2Vycy5jaGlsZHJlblxuICBpZighcGFyYW1zLnRyaWdnZXJzIHx8ICF0cmlnZ2Vycykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbGV0IGZpbHRlcmVkQnlUcmlnZ2VycyA9IHRyaWdnZXJzLmZpbHRlcigodHJpZ2dlcikgPT4gKFxuICAgIHBhcmFtcy50cmlnZ2Vycy5pbmNsdWRlcyh0cmlnZ2VyLnN1YmplY3QpKVxuICApXG5cbiAgaWYgKCFmaWx0ZXJlZEJ5VHJpZ2dlcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgY29uc3QgdmVyYkZpbHRlciA9IGZpbHRlckJ5VmVyYnMocGFyYW1zKVxuICBpZighdmVyYkZpbHRlcikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGZpbHRlcmVkQnlUcmlnZ2VycyA9IGZpbHRlcmVkQnlUcmlnZ2Vycy5maWx0ZXIodmVyYkZpbHRlcilcblxuICByZXR1cm4gZmlsdGVyZWRCeVRyaWdnZXJzLmxlbmd0aFxufVxuXG4vKiogcHJpdmF0ZVxuICogcmV0dXJuIHRydWUgaWYgdHJpZ2dlciBwYXNzIHZlcmIvbm91bi9vYmplY3RzIGNvbmRpdGlvblxuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtc1xuICogLy8gQHBhcmFtIHtvYmplY3R9IHRyaWdnZXJcbiAqIC8vIEBwYXJhbSB7c3RyaW5nfSB0cmlnZ2VyLnZlcmJcbiAqIEByZXR1cm4ge2Z1bmN0aW9uKHtvYmplY3R9KTp7Ym9vbGVhbn19XG4gKi9cbmNvbnN0IGZpbHRlckJ5VmVyYnMgPSAocGFyYW1zKSA9PiAodHJpZ2dlcikgPT4ge1xuICBpZih0cmlnZ2VyLnZlcmIgPT09ICcnKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBjb25zdCBldmFsdWF0b3IgPSB0cmlnZ2VyVmVyYkV2YWx1YXRvcnNbdHJpZ2dlci52ZXJiXVxuICByZXR1cm4gZXZhbHVhdG9yKHRyaWdnZXIsIHBhcmFtcy5ub3VuLCBwYXJhbXMub2JqZWN0cylcbn1cblxuLyoqIHByaXZhdGVcbiAqIHJldHVybiB0cnVlIGlmIG1lc3NhZ2UgcGFzcyBhbGwgbGltaXRzXG4gKiBAcGFyYW0ge251bWJlcn0gbm93XG4gKiAvLyBAcGFyYW0ge09iamVjdH0gbWVzc2FnZVxuICogQHJldHVybiB7ZnVuY3Rpb24oe29iamVjdH0pOntib29sZWFufX1cbiAqL1xuY29uc3QgZmlsdGVyQnlMaW1pdHMgPSAobm93KSA9PiAobWVzc2FnZSkgPT4ge1xuICBjb25zdCBsaW1pdHMgPSBtZXNzYWdlLndoZW5MaW1pdHMgJiYgbWVzc2FnZS53aGVuTGltaXRzLmNoaWxkcmVuXG4gIGlmKCFsaW1pdHMgfHwgbGltaXRzLmxlbmd0aCA8IDEpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBsaW1pdHMuZXZlcnkoKGxpbWl0KSA9PiB7XG4gICAgICBjb25zdCB2ZXJiRXZhbHVhdG9yID0gbGltaXRWZXJiRXZhbHVhdG9yc1tsaW1pdC52ZXJiXVxuICAgICAgaWYgKCF2ZXJiRXZhbHVhdG9yKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZlcmJFdmFsdWF0b3IobWVzc2FnZS5pZCwgbGltaXQubm91biwgbGltaXQub2JqZWN0c1swXSwgbm93KVxuICAgIH1cbiAgKVxufVxuXG4vKiogcHJpdmF0ZVxuICogcmV0dXJuIHRoZSBhbW91bnQgb2Ygb2NjdXJlbmNlIG9mIG1lc3NhZ2VWaWV3IHNpbmNlICdzaW5jZSdcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaW5jZVxuICogLy8gQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2VWaWV3XG4gKiAvLyBAcGFyYW0ge09iamVjdH0gbWVzc2FnZVZpZXcudFxuICogQHJldHVybiB7ZnVuY3Rpb24oe251bWJlcn0sIHtvYmplY3R9KToge251bWJlcn19XG4gKi9cbmNvbnN0IGNvdW50TWVzc2FnZVZpZXdzQnlMaW1pdCA9IChzaW5jZSkgPT4gKGl0ZXJhdG9yLCBtZXNzYWdlVmlldykgPT4ge1xuICBpZihtZXNzYWdlVmlldy50ID4gc2luY2UpIHtcbiAgICBpdGVyYXRvcis9MVxuICB9XG4gIHJldHVybiBpdGVyYXRvclxufVxuLyoqIHByaXZhdGVcbiAqIHJldHVybiB0cnVlIGlmIG5vIGxpbWl0cyBhcmUgZGVmaW5lZCBvciBpZiBub3cgaXMgaW4gdGhlIHJhbmdlXG4gKiBAcGFyYW0ge251bWJlcn0gbm93XG4gKiAvLyBAcGFyYW0ge29iamVjdH0gbGltaXRUaW1lXG4gKiAvLyBAcGFyYW0ge29iamVjdD99IGxpbWl0VGltZS5zdGFydFRpbWVcbiAqIC8vIEBwYXJhbSB7b2JqZWN0P30gbGltaXRUaW1lLmVuZFRpbWVcbiAqIEByZXR1cm4ge2Z1bmN0aW9uKCB7b2JqZWN0fSk6e0Jvb2xlYW59fVxuICovXG5jb25zdCBmaWx0ZXJCeUxpbWl0VGltZXMgPSAobm93KSA9PiAobGltaXRUaW1lKSA9PiB7XG4gIHJldHVybiAoIWxpbWl0VGltZS5zdGFydFRpbWUgfHwgbGltaXRUaW1lLnN0YXJ0VGltZSA8IG5vdykgJiZcbiAgICAoIWxpbWl0VGltZS5lbmRUaW1lIHx8IGxpbWl0VGltZS5lbmRUaW1lID4gbm93IClcbn1cblxuLyoqIHByaXZhdGVcbiAqIHByb3ZpZGUgZXZhbHVhdG9ycyBmb3IgZmlsdGVyQnlWZXJic1xuICovXG5jb25zdCB0cmlnZ2VyVmVyYkV2YWx1YXRvcnMgPSB7XG4gIHRyaWdnZXJzOiAodHJpZ2dlciwgbm91bikgPT4ge1xuICAgIHJldHVybiBub3VuID09PSB0cmlnZ2VyLm5vdW5cbiAgfSxcbiAgdHJpZ2dlcnNXaXRoUGFyYW1ldGVyOiAodHJpZ2dlciwgbm91biwgcGFyYW1zID0ge30pID0+IHtcbiAgICByZXR1cm4gbm91biA9PT0gdHJpZ2dlci5ub3VuICYmIHBhcmFtcy5wYXJhbVZhbHVlID09PSB0cmlnZ2VyLm9iamVjdHNbcGFyYW1zLnBhcmFtTmFtZV1cbiAgfSxcbiAgY2hhbmdlc1RvOiAodHJpZ2dlciwgbm91biwgcGFyYW1zID0ge30pID0+IHtcbiAgICByZXR1cm4gbm91biA9PT0gdHJpZ2dlci5ub3VuICYmIHBhcmFtcy50byA9PT0gdHJpZ2dlci5vYmplY3RzWzBdXG4gIH0sXG4gIGNoYW5nZXNGcm9tVG86ICh0cmlnZ2VyLCBub3VuLCBwYXJhbXMgPSB7fSkgPT4ge1xuICAgIHJldHVybiBub3VuID09PSB0cmlnZ2VyLm5vdW4gJiZcbiAgICAgIHBhcmFtcy5mcm9tID09PSB0cmlnZ2VyLm9iamVjdHNbMF0gJiZcbiAgICAgIHBhcmFtcy50byA9PT0gdHJpZ2dlci5vYmplY3RzWzFdXG4gIH1cbn1cblxuLyoqIHByaXZhdGVcbiAqIHByb3ZpZGUgZXZhbHVhdG9ycyBmb3IgZmlsdGVyQnlMaW1pdFxuICovXG5jb25zdCBsaW1pdFZlcmJFdmFsdWF0b3JzID0ge1xuICBsaW1pdFVzZXI6IChtZXNzYWdlSWQsIG1heFZpZXcpID0+IHtcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0TWVzc2FnZVZpZXcobWVzc2FnZUlkKS5sZW5ndGggPCBtYXhWaWV3XG4gIH0sXG4gIGxpbWl0TW9udGg6IChtZXNzYWdlSWQsIG1heFZpZXcsIGFtb3VudCwgbm93KSA9PiB7XG4gICAgY29uc3Qgc2luY2UgPSBub3cgLSBhbW91bnQgKiAzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0TWVzc2FnZVZpZXcobWVzc2FnZUlkKVxuICAgICAgLnJlZHVjZSggY291bnRNZXNzYWdlVmlld3NCeUxpbWl0KHNpbmNlKSwgMCkgPCBtYXhWaWV3XG4gIH0sXG4gIGxpbWl0V2VlazogKG1lc3NhZ2VJZCwgbWF4VmlldywgYW1vdW50LCBub3cpID0+IHtcbiAgICBjb25zdCBzaW5jZSA9IG5vdyAtIGFtb3VudCAqIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gICAgcmV0dXJuIFZhckNhY2hlLmdldE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZClcbiAgICAgIC5yZWR1Y2UoIGNvdW50TWVzc2FnZVZpZXdzQnlMaW1pdChzaW5jZSksIDApIDwgbWF4Vmlld1xuICB9LFxuICBsaW1pdERheTogKG1lc3NhZ2VJZCwgbWF4VmlldywgYW1vdW50LCBub3cpID0+IHtcbiAgICBjb25zdCBzaW5jZSA9IG5vdyAtIGFtb3VudCAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0TWVzc2FnZVZpZXcobWVzc2FnZUlkKVxuICAgICAgLnJlZHVjZSggY291bnRNZXNzYWdlVmlld3NCeUxpbWl0KHNpbmNlKSwgMCkgPCBtYXhWaWV3XG4gIH0sXG4gIGxpbWl0SG91cjogKG1lc3NhZ2VJZCwgbWF4VmlldywgYW1vdW50LCBub3cpID0+IHtcbiAgICBjb25zdCBzaW5jZSA9IG5vdyAtIGFtb3VudCAqIDYwICogNjAgKiAxMDAwXG4gICAgcmV0dXJuIFZhckNhY2hlLmdldE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZClcbiAgICAgIC5yZWR1Y2UoIGNvdW50TWVzc2FnZVZpZXdzQnlMaW1pdChzaW5jZSksIDApIDwgbWF4Vmlld1xuICB9LFxuICBsaW1pdE1pbnV0ZTogKG1lc3NhZ2VJZCwgbWF4VmlldywgYW1vdW50LCBub3cpID0+IHtcbiAgICBjb25zdCBzaW5jZSA9IG5vdyAtIGFtb3VudCAqIDYwICogMTAwMFxuICAgIHJldHVybiBWYXJDYWNoZS5nZXRNZXNzYWdlVmlldyhtZXNzYWdlSWQpXG4gICAgICAucmVkdWNlKCBjb3VudE1lc3NhZ2VWaWV3c0J5TGltaXQoc2luY2UpLCAwKSA8IG1heFZpZXdcbiAgfSxcbiAgbGltaXRTZWNvbmQ6IChtZXNzYWdlSWQsIG1heFZpZXcsIGFtb3VudCwgbm93KSA9PiB7XG4gICAgY29uc3Qgc2luY2UgPSBub3cgLSBhbW91bnQgKiAxMDAwXG4gICAgcmV0dXJuIFZhckNhY2hlLmdldE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZClcbiAgICAgIC5yZWR1Y2UoIGNvdW50TWVzc2FnZVZpZXdzQnlMaW1pdChzaW5jZSksIDApIDwgbWF4Vmlld1xuICB9LFxuICBsaW1pdFNlc3Npb246IChtZXNzYWdlSWQsIG1heFZpZXcpID0+IHtcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0TWVzc2FnZVZpZXcobWVzc2FnZUlkLCB0cnVlKS5sZW5ndGggPCBtYXhWaWV3XG4gIH0sXG59XG4vKipcbiAqIFByb3ZpZGUgZmlsdGVyaW5nIGxvZ2ljIGZvciBtZXNzYWdlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb25NYW5hZ2VyIHtcblxuICAvKiogcHVibGljXG4gICAqIHJldHVybiBhbiBhcnJheSBvZiBmaWx0ZXJlZCBtZXNzYWdlIG9yZGVyZWQgYnkgcHJpb3JpdHlcbiAgICogQHBhcmFtIHthcnJheX0gbWVzc2FnZXNcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBzdHJpbmdbXSB8ID99IHRyaWdnZXJzXG4gICAqIEBwYXJhbSB7c3RyaW5nP30gdmVyYlxuICAgKiBAcGFyYW0ge3N0cmluZz99IG5vdW5cbiAgICogQHBhcmFtIHtvYmplY3Q/fSBwYXJhbXNcbiAgICogQHBhcmFtIHtzdHJpbmc/fSBwYXJhbXMuZnJvbVxuICAgKiBAcGFyYW0ge3N0cmluZz99IHBhcmFtcy50b1xuICAgKiBAcGFyYW0ge3N0cmluZz99IHBhcmFtcy5wYXJhbVZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nP30gcGFyYW1zLnBhcmFtTmFtZVxuICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICovXG4gIHN0YXRpYyBmaWx0ZXJNZXNzYWdlcyhtZXNzYWdlcywgdHJpZ2dlcnM9JycsIHZlcmIsIG5vdW4sIHBhcmFtcykge1xuICAgIGlmKCFBcnJheS5pc0FycmF5KHRyaWdnZXJzKSkge1xuICAgICAgdHJpZ2dlcnMgPSBbdHJpZ2dlcnNdXG4gICAgfVxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICByZXR1cm4gbWVzc2FnZXMuZmlsdGVyKGZpbHRlckJ5VHJpZ2dlcnMoXG4gICAgICAgIHtcbiAgICAgICAgICB0cmlnZ2VyczogdHJpZ2dlcnMsXG4gICAgICAgICAgdmVyYjogdmVyYixcbiAgICAgICAgICBub3VuOiBub3VuLFxuICAgICAgICAgIG9iamVjdHM6IHBhcmFtc1xuICAgICAgICB9XG4gICAgICApKVxuICAgICAgLmZpbHRlcihmaWx0ZXJCeUxpbWl0cyhub3cpKVxuICAgICAgLmZpbHRlcihmaWx0ZXJCeUxpbWl0VGltZXMobm93KSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eSlcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWN0aW9uTWFuYWdlci5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5jb25zdCBkYXRhQnJvd3NlciA9IFt7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnQ2hyb21lJyxcbiAgaWRlbnRpdHk6ICdDaHJvbWUnXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnT21uaVdlYicsXG4gIHZlcnNpb25TZWFyY2g6ICdPbW5pV2ViLycsXG4gIGlkZW50aXR5OiAnT21uaVdlYidcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudmVuZG9yLFxuICBzdWJTdHJpbmc6ICdBcHBsZScsXG4gIGlkZW50aXR5OiAnU2FmYXJpJyxcbiAgdmVyc2lvblNlYXJjaDogJ1ZlcnNpb24nXG59LCB7XG4gIHByb3A6IHdpbmRvdy5vcGVyYSxcbiAgaWRlbnRpdHk6ICdPcGVyYScsXG4gIHZlcnNpb25TZWFyY2g6ICdWZXJzaW9uJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci52ZW5kb3IsXG4gIHN1YlN0cmluZzogJ2lDYWInLFxuICBpZGVudGl0eTogJ2lDYWInXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnZlbmRvcixcbiAgc3ViU3RyaW5nOiAnS0RFJyxcbiAgaWRlbnRpdHk6ICdLb25xdWVyb3InXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnRmlyZWZveCcsXG4gIGlkZW50aXR5OiAnRmlyZWZveCdcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudmVuZG9yLFxuICBzdWJTdHJpbmc6ICdDYW1pbm8nLFxuICBpZGVudGl0eTogJ0NhbWlubydcbn0sIHsgLy8gZm9yIG5ld2VyIE5ldHNjYXBlICg2KylcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdOZXRzY2FwZScsXG4gIGlkZW50aXR5OiAnTmV0c2NhcGUnXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnTVNJRScsXG4gIGlkZW50aXR5OiAnRXhwbG9yZXInLFxuICB2ZXJzaW9uU2VhcmNoOiAnTVNJRSdcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdHZWNrbycsXG4gIGlkZW50aXR5OiAnTW96aWxsYScsXG4gIHZlcnNpb25TZWFyY2g6ICdydidcbn0sIHsgLy8gZm9yIG9sZGVyIE5ldHNjYXBlICg0LSlcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdNb3ppbGxhJyxcbiAgaWRlbnRpdHk6ICdOZXRzY2FwZScsXG4gIHZlcnNpb25TZWFyY2g6ICdNb3ppbGxhJ1xufV1cblxuY29uc3QgZGF0YU9TID0gW3tcbiAgc3RyaW5nOiBuYXZpZ2F0b3IucGxhdGZvcm0sXG4gIHN1YlN0cmluZzogJ1dpbicsXG4gIGlkZW50aXR5OiAnV2luZG93cydcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IucGxhdGZvcm0sXG4gIHN1YlN0cmluZzogJ01hYycsXG4gIGlkZW50aXR5OiAnTWFjIE9TJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIHN1YlN0cmluZzogJ2lQaG9uZScsXG4gIGlkZW50aXR5OiAnaU9TJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci5wbGF0Zm9ybSxcbiAgc3ViU3RyaW5nOiAnTGludXgnLFxuICBpZGVudGl0eTogJ0xpbnV4J1xufV1cblxuLy8gQnJvd3NlciBkZXRlY3Rpb24uIFNvdXJjZTogaHR0cDovL3d3dy5xdWlya3Ntb2RlLm9yZy9qcy9kZXRlY3QuaHRtbFxuLyoqXG4gKiBIZWxwZXIgY2xhc3MgdG8gZGV0ZWN0IHdoaWNoIGJyb3dzZXIgY2xpZW50IGlzIHVzaW5nLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcm93c2VyRGV0ZWN0b3Ige1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIG9iamVjdCB3aXRoIGN1cnJlbnQgYnJvd3NlciBzZXR0aW5ncy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYnJvd3NlciA9IHRoaXMuX3NlYXJjaFN0cmluZyhkYXRhQnJvd3NlcikgfHwgJ1Vua25vd24gQnJvd3NlcidcbiAgICB0aGlzLnZlcnNpb24gPSB0aGlzLl9zZWFyY2hWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8XG4gICAgICAgIHRoaXMuX3NlYXJjaFZlcnNpb24obmF2aWdhdG9yLmFwcFZlcnNpb24pIHx8ICdVbmtub3duIFZlcnNpb24nXG4gICAgdGhpcy5PUyA9IHRoaXMuX3NlYXJjaFN0cmluZyhkYXRhT1MpIHx8ICdVbmtub3duIE9TJ1xuICB9XG5cbiAgLyoqXG4gICAqIE1hdGNoZXMgdGhlIGNsaWVudCdzIHN5c3RlbSB0byB0aGUgcHJlZGVmaW5lZCBzeXN0ZW0gbGlzdC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgVGhlIGRhdGEgb2JqZWN0IHRvIHNjYW4uXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGZvdW5kIGlkZW50aXR5IHN0cmluZy5cbiAgICovXG4gIF9zZWFyY2hTdHJpbmcoZGF0YSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGRhdGFTdHJpbmcgPSBkYXRhW2ldLnN0cmluZ1xuICAgICAgbGV0IGRhdGFQcm9wID0gZGF0YVtpXS5wcm9wXG4gICAgICB0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcgPSBkYXRhW2ldLnZlcnNpb25TZWFyY2ggfHwgZGF0YVtpXS5pZGVudGl0eVxuICAgICAgaWYgKGRhdGFTdHJpbmcpIHtcbiAgICAgICAgaWYgKGRhdGFTdHJpbmcuaW5kZXhPZihkYXRhW2ldLnN1YlN0cmluZykgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGFbaV0uaWRlbnRpdHlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkYXRhUHJvcCkge1xuICAgICAgICByZXR1cm4gZGF0YVtpXS5pZGVudGl0eVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyB0aGUgY3VycmVudCB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBzeXN0ZW0uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhU3RyaW5nIFRoZSBkYXRhIG9iamVjdCB0byBzY2FuLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBmb3VuZCBudW1iZXIuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2VhcmNoVmVyc2lvbihkYXRhU3RyaW5nKSB7XG4gICAgaWYgKCFkYXRhU3RyaW5nKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgbGV0IGluZGV4ID0gZGF0YVN0cmluZy5pbmRleE9mKHRoaXMudmVyc2lvblNlYXJjaFN0cmluZylcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoZGF0YVN0cmluZy5zdWJzdHJpbmcoaW5kZXggKyB0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcubGVuZ3RoICsgMSkpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Ccm93c2VyRGV0ZWN0b3IuanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vQ29uc3RhbnRzJ1xuaW1wb3J0IEFyZ3NCdWlsZGVyIGZyb20gJy4vQXJnc0J1aWxkZXInXG5pbXBvcnQgU29ja2V0SW9DbGllbnQgZnJvbSAnLi9Tb2NrZXRJb0NsaWVudCdcbmltcG9ydCBWYXJDYWNoZSBmcm9tICcuL1ZhckNhY2hlJ1xuaW1wb3J0IExlYW5wbHVtUmVxdWVzdCBmcm9tICcuL0xlYW5wbHVtUmVxdWVzdCdcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJ1xuaW1wb3J0IGV2ZW50cyBmcm9tICcuL0V2ZW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhbnBsdW1Tb2NrZXQge1xuXG4gIHN0YXRpYyBzb2NrZXRIb3N0ID0gJ2Rldi5sZWFucGx1bS5jb20nXG5cbiAgc3RhdGljIGNvbm5lY3QoKSB7XG4gICAgaWYgKCFXZWJTb2NrZXQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdZb3VyIGJyb3dzZXIgZG9lc25cXCd0IHN1cHBvcnQgV2ViU29ja2V0cy4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGNsaWVudCA9IG5ldyBTb2NrZXRJb0NsaWVudCgpXG4gICAgbGV0IGF1dGhTZW50ID0gZmFsc2VcbiAgICBjbGllbnQub25vcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWF1dGhTZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogQ29ubmVjdGVkIHRvIGRldmVsb3BtZW50IHNlcnZlci4nKVxuICAgICAgICBsZXQgYXJncyA9IHt9XG4gICAgICAgIGFyZ3NbQ29uc3RhbnRzLlBBUkFNUy5BUFBfSURdID0gTGVhbnBsdW1SZXF1ZXN0LmFwcElkXG4gICAgICAgIGFyZ3NbQ29uc3RhbnRzLlBBUkFNUy5ERVZJQ0VfSURdID0gTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkXG4gICAgICAgIGNsaWVudC5zZW5kKCdhdXRoJywgYXJncylcbiAgICAgICAgYXV0aFNlbnQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIGNsaWVudC5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogU29ja2V0IGVycm9yJywgZXZlbnQpXG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKiBAcGFyYW0gYXJnc1tdLmVtYWlsXG4gICAgICovXG4gICAgY2xpZW50Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50LCBhcmdzKSB7XG4gICAgICBpZiAoZXZlbnQgPT09ICd1cGRhdGVWYXJzJykge1xuICAgICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5HRVRfVkFSUyxcbiAgICAgICAgICAgIG5ldyBBcmdzQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklOQ0xVREVfREVGQVVMVFMsIGZhbHNlKSwge1xuICAgICAgICAgICAgICBxdWV1ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgICAgICAgICByZXNwb25zZTogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgZ2V0VmFyc1Jlc3BvbnNlID0gTGVhbnBsdW1SZXF1ZXN0LmdldExhc3RSZXNwb25zZShyZXNwb25zZSlcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gZ2V0VmFyc1Jlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUlNdXG4gICAgICAgICAgICAgICAgbGV0IHZhcmlhbnRzID0gZ2V0VmFyc1Jlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUklBTlRTXVxuICAgICAgICAgICAgICAgIGxldCBhY3Rpb25NZXRhZGF0YSA9IGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5BQ1RJT05fTUVUQURBVEFdXG4gICAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsKHZhbHVlcywgVmFyQ2FjaGUuZGlmZnMpKSB7XG4gICAgICAgICAgICAgICAgICBWYXJDYWNoZS5hcHBseURpZmZzKHZhbHVlcywgdmFyaWFudHMsIGFjdGlvbk1ldGFkYXRhKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAnZ2V0VmFyaWFibGVzJykge1xuICAgICAgICBWYXJDYWNoZS5zZW5kVmFyaWFibGVzKClcbiAgICAgICAgY2xpZW50LnNlbmQoJ2dldENvbnRlbnRSZXNwb25zZScsIHtcbiAgICAgICAgICAndXBkYXRlZCc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09ICdnZXRBY3Rpb25zJykge1xuICAgICAgICAvLyBVbnN1cHBvcnRlZCBpbiBKYXZhU2NyaXB0IFNESy5cbiAgICAgICAgY2xpZW50LnNlbmQoJ2dldENvbnRlbnRSZXNwb25zZScsIHtcbiAgICAgICAgICAndXBkYXRlZCc6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAncmVnaXN0ZXJEZXZpY2UnKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICAgICAgICBhbGVydChgWW91ciBkZXZpY2UgaGFzIGJlZW4gcmVnaXN0ZXJlZCB0byAke2FyZ3NbMF0uZW1haWx9LmApXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAndHJpZ2dlcicpIHtcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3dlYnNvY2tldC90cmlnZ2VyJywge1xuICAgICAgICAgIGFyZ3NcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgY2xpZW50Lm9uY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogRGlzY29ubmVjdGVkIHRvIGRldmVsb3BtZW50IHNlcnZlci4nKVxuICAgICAgYXV0aFNlbnQgPSBmYWxzZVxuICAgIH1cbiAgICBjbGllbnQuY29ubmVjdChMZWFucGx1bVNvY2tldC5zb2NrZXRIb3N0KVxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFjbGllbnQuY29ubmVjdGVkICYmICFjbGllbnQuY29ubmVjdGluZykge1xuICAgICAgICBjbGllbnQuY29ubmVjdChMZWFucGx1bVNvY2tldC5zb2NrZXRIb3N0KVxuICAgICAgfVxuICAgIH0sIDUwMDApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MZWFucGx1bVNvY2tldC5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5cbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9Db25zdGFudHMnXG5pbXBvcnQgQXJnc0J1aWxkZXIgZnJvbSAnLi9BcmdzQnVpbGRlcidcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJ1xuaW1wb3J0IExvY2FsU3RvcmFnZU1hbmFnZXIgZnJvbSAnLi9Mb2NhbFN0b3JhZ2VNYW5hZ2VyJ1xuaW1wb3J0IExlYW5wbHVtUmVxdWVzdCBmcm9tICcuL0xlYW5wbHVtUmVxdWVzdCdcblxuY29uc3QgQVBQTElDQVRJT05fU0VSVkVSX1BVQkxJQ19LRVkgPVxuICAgICdCSW5XUHBXbnRmUjM5cmdYU1AwNHBxZG1FZERHYTUwejZ6cWJNdnh5eEpDd3pYSXVTcFNoOEM4ODgtQ2ZKODJXRUxsN1hlOGNqQScgK1xuICAgICduZkN0LTN2SzBDaTY4J1xuXG5sZXQgaXNTdWJzY3JpYmVkID0gZmFsc2VcbmxldCBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uID0gbnVsbFxuXG4vKipcbiAqIFB1c2ggTWFuYWdlciBoYW5kbGVzIHRoZSByZWdpc3RyYXRpb24gYW5kIHN1YnNjcmlwdGlvbiBmb3Igd2ViIHB1c2guXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1c2hNYW5hZ2VyIHtcbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHdlYiBwdXNoIGlzIHN1cHBvcnRlZCBpbiB0aGUgYnJvd3Nlci5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiBzdXBwb3J0ZWQsIGVsc2UgZmFsc2UuXG4gICAqL1xuICBzdGF0aWMgaXNXZWJQdXNoU3VwcG9ydGVkKCkge1xuICAgIHJldHVybiBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIgJiYgJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvciAmJlxuICAgICAgICAnUHVzaE1hbmFnZXInIGluIHdpbmRvd1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoZSBicm93c2VyIGlzIHN1YnNjcmliZWQgdG8gd2ViIHB1c2ggbm90aWZpY2F0aW9ucy5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gVHJ1ZSBpZiBzdWJzY3JpYmVkLCBlbHNlIGZhbHNlLlxuICAgKi9cbiAgc3RhdGljIGlzV2ViUHVzaFN1YnNjcmliZWQoKSB7XG4gICAgaWYgKCFQdXNoTWFuYWdlci5pc1dlYlB1c2hTdXBwb3J0ZWQoKSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHJlc29sdmUoZmFsc2UpXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gUHVzaE1hbmFnZXIuZ2V0U2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbigpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8qKiBAbmFtZXNwYWNlIHJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlciBUaGUgcHVzaCBtYW5hZ2VyIG9iamVjdCBvZiB0aGUgYnJvd3Nlci4gKiovXG4gICAgICAgICAgICAgIC8qKiBAbmFtZXNwYWNlIHJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24gKiovXG4gICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKVxuICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzU3Vic2NyaWJlZCA9IHN1YnNjcmlwdGlvbiAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgUHVzaE1hbmFnZXIudXBkYXRlTmV3U3Vic2NyaXB0aW9uT25TZXJ2ZXIoc3Vic2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaXNTdWJzY3JpYmVkKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGZvciBXZWJQdXNoLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgc2VydmljZVdvcmtlclVybCBUaGUgdXJsIHRoYXQgc2VydmVzIHRoZSBzZXJ2aWNlIHdvcmtlclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbiB5b3VyIGRvbWFpbi5cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrICAgICAgICAgVGhlIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCB3aXRoIHJlc3VsdC5cbiAgICogQHJldHVybiB7b2JqZWN0fSBub3RoaW5nXG4gICAqL1xuICBzdGF0aWMgcmVnaXN0ZXIoc2VydmljZVdvcmtlclVybCwgY2FsbGJhY2spIHtcbiAgICBpZiAoIVB1c2hNYW5hZ2VyLmlzV2ViUHVzaFN1cHBvcnRlZCgpKSB7XG4gICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IFB1c2ggbWVzc2FnaW5nIGlzIG5vdCBzdXBwb3J0ZWQuJylcbiAgICAgIHJldHVybiBjYWxsYmFjayhmYWxzZSlcbiAgICB9XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoXG4gICAgICAgIHNlcnZpY2VXb3JrZXJVcmwgPyBzZXJ2aWNlV29ya2VyVXJsIDogJy9zdy5taW4uanMnLCBudWxsKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgICBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uID0gcmVnaXN0cmF0aW9uXG5cbiAgICAgICAgICBsZXQgc2VydmljZVdvcmtlclxuICAgICAgICAgIGlmIChyZWdpc3RyYXRpb24uaW5zdGFsbGluZykge1xuICAgICAgICAgICAgc2VydmljZVdvcmtlciA9IHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nXG4gICAgICAgICAgfSBlbHNlIGlmIChyZWdpc3RyYXRpb24ud2FpdGluZykge1xuICAgICAgICAgICAgc2VydmljZVdvcmtlciA9IHJlZ2lzdHJhdGlvbi53YWl0aW5nXG4gICAgICAgICAgfSBlbHNlIGlmIChyZWdpc3RyYXRpb24uYWN0aXZlKSB7XG4gICAgICAgICAgICBzZXJ2aWNlV29ya2VyID0gcmVnaXN0cmF0aW9uLmFjdGl2ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghc2VydmljZVdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgc3Vic2NyaWJlID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gU2V0IHRoZSBpbml0aWFsIHN1YnNjcmlwdGlvbiB2YWx1ZVxuICAgICAgICAgICAgc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKVxuICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICBpc1N1YnNjcmliZWQgPSAhKHN1YnNjcmlwdGlvbiA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICBpZiAoaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIFB1c2hNYW5hZ2VyLnVwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyKHN1YnNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhpc1N1YnNjcmliZWQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZXJ2aWNlV29ya2VyLnN0YXRlID09PSAnYWN0aXZhdGVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmliZSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VydmljZVdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdzdGF0ZWNoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5zdGF0ZSAhPT0gJ2FjdGl2YXRlZCcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN1YnNjcmliZSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBTZXJ2aWNlIFdvcmtlciBFcnJvcjogJywgZXJyb3IpXG4gICAgICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRoZSB1c2VyKGJyb3dzZXIpIHRvIHB1c2guXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFJlc29sdmVzIGlmIHN1YnNjcmlwdGlvbiBzdWNjZXNzZnVsLCBvdGhlcndpc2UgcmVqZWN0cy5cbiAgICovXG4gIHN0YXRpYyBzdWJzY3JpYmVVc2VyKCkge1xuICAgIGNvbnN0IGFwcGxpY2F0aW9uU2VydmVyS2V5ID0gUHVzaE1hbmFnZXIudXJsQjY0VG9VaW50OEFycmF5KEFQUExJQ0FUSU9OX1NFUlZFUl9QVUJMSUNfS0VZKVxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIC8qKiBAbmFtZXNwYWNlIHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuc3Vic2NyaWJlIFN1YnNjcmliZSB0byBwdXNoLiAqKi9cbiAgICAgIHJldHVybiBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLnN1YnNjcmliZSh7XG4gICAgICAgIHVzZXJWaXNpYmxlT25seTogdHJ1ZSxcbiAgICAgICAgYXBwbGljYXRpb25TZXJ2ZXJLZXlcbiAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgIFB1c2hNYW5hZ2VyLnVwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyKHN1YnNjcmlwdGlvbilcbiAgICAgICAgICAgICAgaXNTdWJzY3JpYmVkID0gdHJ1ZVxuICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShpc1N1YnNjcmliZWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KGBMZWFucGx1bTogRmFpbGVkIHRvIHN1YnNjcmliZSB0aGUgdXNlcjogJHtlcnJ9YClcbiAgICAgICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgdGhlIHVzZXIoYnJvd3NlcikgZnJvbSBwdXNoLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXNvbHZlcyBpZiB1bnN1YnNjcmliZWQsIG90aGVyd2lzZSByZWplY3RzLlxuICAgKi9cbiAgc3RhdGljIHVuc3Vic2NyaWJlVXNlcigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgUHVzaE1hbmFnZXIuaXNXZWJQdXNoU3Vic2NyaWJlZCgpLnRoZW4oKHN1YnNjcmliZWQpID0+IHtcbiAgICAgICAgaWYgKCFzdWJzY3JpYmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoKVxuICAgICAgICB9XG5cbiAgICAgICAgc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAvKiogQG5hbWVzcGFjZSBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLnVuc3Vic2NyaWJlIFVuc3Vic2NyaWJlIHRvXG4gICAgICAgICAgICAgICAgICogIHB1c2guICoqL1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiByZWplY3QoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICByZWplY3QoYExlYW5wbHVtOiBFcnJvciB1bnN1YnNjcmliaW5nOiAke2Vycm9yfWApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oc3VjY2Vzcykge1xuICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiByZWplY3QoKVxuICAgICAgICAgICAgfSlcbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICByZXR1cm4gcmVqZWN0KClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBvYmplY3QgZnJvbSBicm93c2VyLlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IFJldHVybnMgdGhlIHJlZ2lzdHJhdGlvbiBvciBudWxsLlxuICAgKi9cbiAgc3RhdGljIGdldFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbikge1xuICAgICAgICByZXNvbHZlKHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogQG5hbWVzcGFjZSBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5nZXRSZWdpc3RyYXRpb24gUmV0cmlldmVzIHRoZSAgcHVzaCByZWdpc3RyYXRpb25cbiAgICAgICAgICogZnJvbSB0aGUgYnJvd3Nlci4gKiovXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmdldFJlZ2lzdHJhdGlvbigpLnRoZW4oKHJlZ2lzdHJhdGlvbikgPT4ge1xuICAgICAgICAgIHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24gPSByZWdpc3RyYXRpb25cbiAgICAgICAgICByZXNvbHZlKHJlZ2lzdHJhdGlvbilcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEVuY29kZXMgYSBiYXNlNjQgdXJsIHN0cmluZyB0byBhbiB1aW50OCBhcnJhcnkuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gYmFzZTY0U3RyaW5nIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7VWludDhBcnJheX0gICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHN0YXRpYyB1cmxCNjRUb1VpbnQ4QXJyYXkoYmFzZTY0U3RyaW5nKSB7XG4gICAgY29uc3QgcGFkZGluZyA9ICc9Jy5yZXBlYXQoKDQgLSBiYXNlNjRTdHJpbmcubGVuZ3RoICUgNCkgJSA0KVxuICAgIGNvbnN0IGJhc2U2NCA9IChiYXNlNjRTdHJpbmcgKyBwYWRkaW5nKVxuICAgICAgICAucmVwbGFjZSgvLS9nLCAnKycpXG4gICAgICAgIC5yZXBsYWNlKC9fL2csICcvJylcblxuICAgIGNvbnN0IHJhd0RhdGEgPSB3aW5kb3cuYXRvYihiYXNlNjQpXG4gICAgY29uc3Qgb3V0cHV0QXJyYXkgPSBuZXcgVWludDhBcnJheShyYXdEYXRhLmxlbmd0aClcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmF3RGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgb3V0cHV0QXJyYXlbaV0gPSByYXdEYXRhLmNoYXJDb2RlQXQoaSlcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dEFycmF5XG4gIH1cblxuICAvKipcbiAgICogW3ByZXBhcmVTdWJzY3JpcHRpb24gZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge29iamVjdH0gc3Vic2NyaXB0aW9uIFRoZSByYXcgc3Vic2NyaXB0aW9uIGZyb20gYnJvd3Nlci5cbiAgICogQHBhcmFtICB7ZnVuY3Rpb259IHN1YnNjcmlwdGlvbi5nZXRLZXkgVGhlIHN1YnNjcmlwdGlvbiBrZXkuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gc3Vic2NyaXB0aW9uLmVuZHBvaW50IFRoZSBzdWJzY3JpcHRpb24ga2V5LlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBzdWJzY3JpcHRpb24gb2JqZWN0IHRvIGJlIHNlbnQgdG8gc2VydmVyLlxuICAgKi9cbiAgc3RhdGljIHByZXBhcmVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgbGV0IGtleSA9IHN1YnNjcmlwdGlvbi5nZXRLZXkgPyBzdWJzY3JpcHRpb24uZ2V0S2V5KCdwMjU2ZGgnKSA6ICcnXG4gICAgbGV0IGF1dGggPSBzdWJzY3JpcHRpb24uZ2V0S2V5ID8gc3Vic2NyaXB0aW9uLmdldEtleSgnYXV0aCcpIDogJydcbiAgICAvLyBub2luc3BlY3Rpb24gRVM2TW9kdWxlc0RlcGVuZGVuY2llc1xuICAgIGxldCBrZXlBc2NpaSA9IGJ0b2EoUmVmbGVjdC5hcHBseShTdHJpbmcuZnJvbUNoYXJDb2RlLCBudWxsLCBuZXcgVWludDhBcnJheShrZXkpKSlcbiAgICAvLyBub2luc3BlY3Rpb24gRVM2TW9kdWxlc0RlcGVuZGVuY2llc1xuICAgIGxldCBhdXRoQXNjaWkgPSBidG9hKFJlZmxlY3QuYXBwbHkoU3RyaW5nLmZyb21DaGFyQ29kZSwgbnVsbCwgbmV3IFVpbnQ4QXJyYXkoYXV0aCkpKVxuICAgIHJldHVybiB7XG4gICAgICBlbmRwb2ludDogc3Vic2NyaXB0aW9uLmVuZHBvaW50LFxuICAgICAga2V5OiBrZXlBc2NpaSxcbiAgICAgIGF1dGg6IGF1dGhBc2NpaVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgbmV3IHN1YnNjcmlwdGlvbiBvYmplY3QgdG8gdGhlIExlYW5wbHVtIHNlcnZlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHN1YnNjcmlwdGlvbiBUaGUgc3Vic2NyaXB0aW9uLlxuICAgKi9cbiAgc3RhdGljIHVwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyKHN1YnNjcmlwdGlvbikge1xuICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgIGxldCBwcmVwYXJlZFN1YnNjcmlwdGlvbiA9IFB1c2hNYW5hZ2VyLnByZXBhcmVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKVxuICAgICAgbGV0IHByZXBhcmVkU3Vic2NyaXB0aW9uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocHJlcGFyZWRTdWJzY3JpcHRpb24pXG4gICAgICBsZXQgZXhpc3RpbmdTdWJzY3JpcHRpb25TdHJpbmcgPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoXG4gICAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5QVVNIX1NVQlNDUklQVElPTilcbiAgICAgIGlmICghaXNFcXVhbChleGlzdGluZ1N1YnNjcmlwdGlvblN0cmluZywgcHJlcGFyZWRTdWJzY3JpcHRpb25TdHJpbmcpKSB7XG4gICAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuUFVTSF9TVUJTQ1JJUFRJT04sXG4gICAgICAgICAgICBwcmVwYXJlZFN1YnNjcmlwdGlvblN0cmluZylcbiAgICAgICAgUHVzaE1hbmFnZXIuc2V0U3Vic2NyaXB0aW9uKHByZXBhcmVkU3Vic2NyaXB0aW9uU3RyaW5nKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHRoZSBzdWJzY3JpcHRpb24gdG8gdGhlIExlYW5wbHVtIHNlcnZlci5cbiAgICogQHBhcmFtIHtTdHJpbmcvT2JqZWN0fSBzdWJzY3JpcHRpb24gVGhlIHN1YnNjcmlwdGlvbiBzdHJpbmcuXG4gICAqL1xuICBzdGF0aWMgc2V0U3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbikge1xuICAgIGlmICghc3Vic2NyaXB0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuU0VUX0RFVklDRV9BVFRSSUJVVEVTLFxuICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKS5hZGQoQ29uc3RhbnRzLlBBUkFNUy5XRUJfUFVTSF9TVUJTQ1JJUFRJT04sXG4gICAgICAgICAgICBzdWJzY3JpcHRpb24pLCB7XG4gICAgICAgICAgcXVldWVkOiBmYWxzZSxcbiAgICAgICAgICBzZW5kTm93OiB0cnVlXG4gICAgICAgIH1cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9QdXNoTWFuYWdlci5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vQ29uc3RhbnRzJ1xuaW1wb3J0IEludGVybmFsU3RhdGUgZnJvbSAnLi9JbnRlcm5hbFN0YXRlJ1xuaW1wb3J0IEFyZ3NCdWlsZGVyIGZyb20gJy4vQXJnc0J1aWxkZXInXG5pbXBvcnQgQnJvd3NlckRldGVjdG9yIGZyb20gJy4vQnJvd3NlckRldGVjdG9yJ1xuaW1wb3J0IFB1c2hNYW5hZ2VyIGZyb20gJy4vUHVzaE1hbmFnZXInXG5pbXBvcnQgQWN0aW9uTWFuYWdlciBmcm9tICcuL0FjdGlvbk1hbmFnZXInXG5pbXBvcnQgTG9jYWxTdG9yYWdlTWFuYWdlciBmcm9tICcuL0xvY2FsU3RvcmFnZU1hbmFnZXInXG5pbXBvcnQgVmFyQ2FjaGUgZnJvbSAnLi9WYXJDYWNoZSdcbmltcG9ydCBMZWFucGx1bVJlcXVlc3QgZnJvbSAnLi9MZWFucGx1bVJlcXVlc3QnXG5pbXBvcnQgTGVhbnBsdW1Tb2NrZXQgZnJvbSAnLi9MZWFucGx1bVNvY2tldCdcbmltcG9ydCBldmVudHMgZnJvbSAnLi9FdmVudHMnXG5cbmxldCBfYnJvd3NlckRldGVjdG9yID0gbmV3IEJyb3dzZXJEZXRlY3RvcigpXG5cbi8qKlxuICogQHByZXNlcnZlIExlYW5wbHVtIEphdmFzY3JpcHQgU0RLLlxuICogQ29weXJpZ2h0IDIwMTYsIExlYW5wbHVtLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogWW91IG1heSBub3QgZGlzdHJpYnV0ZSB0aGlzIHNvdXJjZSBjb2RlIHdpdGhvdXQgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uXG4gKiBmcm9tIExlYW5wbHVtLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWFucGx1bSB7XG5cbiAgc3RhdGljIHNldEFwaVBhdGgoYXBpUGF0aCkge1xuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LmFwaVBhdGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBMZWFucGx1bVJlcXVlc3QuYXBpUGF0aCA9IGFwaVBhdGhcbiAgfVxuXG4gIHN0YXRpYyBzZXRFbWFpbChlbWFpbCkge1xuICAgIExlYW5wbHVtLl9lbWFpbCA9IGVtYWlsXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgbmV0d29yayB0aW1lb3V0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Vjb25kcyBUaGUgdGltZW91dCBpbiBzZWNvbmRzLlxuICAgKi9cbiAgc3RhdGljIHNldE5ldHdvcmtUaW1lb3V0KHNlY29uZHMpIHtcbiAgICBMZWFucGx1bVJlcXVlc3Quc2V0TmV0d29ya1RpbWVvdXQoc2Vjb25kcylcbiAgfVxuXG4gIHN0YXRpYyBzZXRWYXJpYW50RGVidWdJbmZvRW5hYmxlZCh2YXJpYW50RGVidWdJbmZvRW5hYmxlZCkge1xuICAgIEludGVybmFsU3RhdGUuc2V0VmFyaWFudERlYnVnSW5mb0VuYWJsZWQodmFyaWFudERlYnVnSW5mb0VuYWJsZWQpXG4gIH07XG5cbiAgc3RhdGljIGdldFZhcmlhbnREZWJ1Z0luZm8oKSB7XG4gICAgcmV0dXJuIFZhckNhY2hlLmdldFZhcmlhbnREZWJ1Z0luZm8oKVxuICB9O1xuXG4gIHN0YXRpYyBzZXRBcHBJZEZvckRldmVsb3BtZW50TW9kZShhcHBJZCwgYWNjZXNzS2V5KSB7XG4gICAgTGVhbnBsdW1SZXF1ZXN0LmFwcElkID0gYXBwSWRcbiAgICBMZWFucGx1bVJlcXVlc3QuY2xpZW50S2V5ID0gYWNjZXNzS2V5XG4gICAgSW50ZXJuYWxTdGF0ZS5kZXZNb2RlID0gdHJ1ZVxuICB9XG5cbiAgc3RhdGljIHNldEFwcElkRm9yUHJvZHVjdGlvbk1vZGUoYXBwSWQsIGFjY2Vzc0tleSkge1xuICAgIExlYW5wbHVtUmVxdWVzdC5hcHBJZCA9IGFwcElkXG4gICAgTGVhbnBsdW1SZXF1ZXN0LmNsaWVudEtleSA9IGFjY2Vzc0tleVxuICAgIEludGVybmFsU3RhdGUuZGV2TW9kZSA9IGZhbHNlXG4gIH1cblxuICBzdGF0aWMgc2V0U29ja2V0SG9zdChob3N0KSB7XG4gICAgTGVhbnBsdW1Tb2NrZXQuc29ja2V0SG9zdCA9IGhvc3RcbiAgfVxuXG4gIHN0YXRpYyBzZXREZXZpY2VJZChkZXZpY2VJZCkge1xuICAgIExlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZCA9IGRldmljZUlkXG4gIH1cblxuICBzdGF0aWMgc2V0QXBwVmVyc2lvbih2ZXJzaW9uTmFtZSkge1xuICAgIExlYW5wbHVtUmVxdWVzdC52ZXJzaW9uTmFtZSA9IHZlcnNpb25OYW1lXG4gIH1cblxuICBzdGF0aWMgc2V0RGV2aWNlTmFtZShkZXZpY2VOYW1lKSB7XG4gICAgTGVhbnBsdW0uX2RldmljZU5hbWUgPSBkZXZpY2VOYW1lXG4gIH1cblxuICBzdGF0aWMgc2V0RGV2aWNlTW9kZWwoZGV2aWNlTW9kZWwpIHtcbiAgICBMZWFucGx1bS5fZGV2aWNlTW9kZWwgPSBkZXZpY2VNb2RlbFxuICB9XG5cbiAgc3RhdGljIHNldFN5c3RlbU5hbWUoc3lzdGVtTmFtZSkge1xuICAgIExlYW5wbHVtLl9zeXN0ZW1OYW1lID0gc3lzdGVtTmFtZVxuICB9XG5cbiAgc3RhdGljIHNldFN5c3RlbVZlcnNpb24oc3lzdGVtVmVyc2lvbikge1xuICAgIExlYW5wbHVtLl9zeXN0ZW1WZXJzaW9uID0gc3lzdGVtVmVyc2lvblxuICB9XG5cbiAgc3RhdGljIHNldFZhcmlhYmxlcyh2YXJpYWJsZXMpIHtcbiAgICBWYXJDYWNoZS5zZXRWYXJpYWJsZXModmFyaWFibGVzKVxuICB9XG5cbiAgc3RhdGljIHNldFJlcXVlc3RCYXRjaGluZyhiYXRjaEVuYWJsZWQsIGNvb2xkb3duU2Vjb25kcykge1xuICAgIExlYW5wbHVtUmVxdWVzdC5iYXRjaEVuYWJsZWQgPSBiYXRjaEVuYWJsZWRcbiAgICBMZWFucGx1bVJlcXVlc3QuYmF0Y2hDb29sZG93biA9IGNvb2xkb3duU2Vjb25kc1xuICB9XG5cbiAgc3RhdGljIGdldFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0VmFyaWFibGVzKClcbiAgfVxuXG4gIHN0YXRpYyBnZXRWYXJpYWJsZSguLi5hcmdzKSB7XG4gICAgbGV0IGN1cnJlbnQgPSBMZWFucGx1bS5nZXRWYXJpYWJsZXMoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgY3VycmVudCA9IGN1cnJlbnRbYXJnc1tpXV1cbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRcbiAgfVxuXG4gIHN0YXRpYyBnZXRWYXJpYW50cygpIHtcbiAgICByZXR1cm4gVmFyQ2FjaGUudmFyaWFudHMgfHwgW11cbiAgfVxuXG4gIHN0YXRpYyBnZXRNZXNzYWdlcygpIHtcbiAgICByZXR1cm4gVmFyY2FjaGUuZ2V0TWVzc2FnZXMoKSB8fCBbXVxuICB9XG5cbiAgc3RhdGljIGFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBJbnRlcm5hbFN0YXRlLmFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyKGhhbmRsZXIpXG4gIH1cblxuICBzdGF0aWMgYWRkVmFyaWFibGVzQ2hhbmdlZEhhbmRsZXIoaGFuZGxlcikge1xuICAgIEludGVybmFsU3RhdGUuYWRkVmFyaWFibGVzQ2hhbmdlZEhhbmRsZXIoaGFuZGxlcilcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVTdGFydFJlc3BvbnNlSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgSW50ZXJuYWxTdGF0ZS5yZW1vdmVTdGFydFJlc3BvbnNlSGFuZGxlcihoYW5kbGVyKVxuICB9XG5cbiAgc3RhdGljIHJlbW92ZVZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBJbnRlcm5hbFN0YXRlLnJlbW92ZVZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpXG4gIH1cblxuICBzdGF0aWMgZm9yY2VDb250ZW50VXBkYXRlKGNhbGxiYWNrKSB7XG4gICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuR0VUX1ZBUlMsXG4gICAgICBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklOQ0xVREVfREVGQVVMVFMsIGZhbHNlKVxuICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklOQ0xVREVfVkFSSUFOVF9ERUJVR19JTkZPLCBJbnRlcm5hbFN0YXRlLnZhcmlhbnREZWJ1Z0luZm9FbmFibGVkKSwge1xuICAgICAgICBxdWV1ZWQ6IGZhbHNlLFxuICAgICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgICByZXNwb25zZTogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgbGV0IGdldFZhcnNSZXNwb25zZSA9IExlYW5wbHVtUmVxdWVzdC5nZXRMYXN0UmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgIGxldCBpc1N1Y2Nlc3MgPSBMZWFucGx1bVJlcXVlc3QuaXNSZXNwb25zZVN1Y2Nlc3MoZ2V0VmFyc1Jlc3BvbnNlKTtcbiAgICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgICAgICBWYXJDYWNoZS5hcHBseURpZmZzKFxuICAgICAgICAgICAgICBnZXRWYXJzUmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuVkFSU10sXG4gICAgICAgICAgICAgIGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJJQU5UU10sXG4gICAgICAgICAgICAgIGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5BQ1RJT05fTUVUQURBVEFdKVxuICAgICAgICAgICAgVmFyQ2FjaGUudmFyaWFudERlYnVnSW5mbyA9IGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJJQU5UX0RFQlVHX0lORk9dXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soaXNTdWNjZXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgc3RhdGljIHN0YXJ0KHVzZXJJZCwgdXNlckF0dHJpYnV0ZXMsIGNhbGxiYWNrKSB7XG4gICAgLy8gT3ZlcmxvYWRzLlxuICAgIGlmICh0eXBlb2YgdXNlcklkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJJZFxuICAgICAgdXNlckF0dHJpYnV0ZXMgPSB7fVxuICAgICAgdXNlcklkID0gbnVsbFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHVzZXJJZCA9PT0gJ29iamVjdCcgJiYgdXNlcklkICE9PSBudWxsICYmXG4gICAgICAgIHVzZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJBdHRyaWJ1dGVzXG4gICAgICB1c2VyQXR0cmlidXRlcyA9IHVzZXJJZFxuICAgICAgdXNlcklkID0gbnVsbFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHVzZXJBdHRyaWJ1dGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJBdHRyaWJ1dGVzXG4gICAgICB1c2VyQXR0cmlidXRlcyA9IHt9XG4gICAgfVxuICAgIExlYW5wbHVtUmVxdWVzdC51c2VySWQgPSB1c2VySWRcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIExlYW5wbHVtLmFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyKGNhbGxiYWNrKVxuICAgIH1cblxuICAgIFZhckNhY2hlLm9uVXBkYXRlID0gZnVuY3Rpb24oKXtcbiAgICAgIEludGVybmFsU3RhdGUudHJpZ2dlclZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycygpXG4gICAgfVxuXG4gICAgbGV0IGFyZ3MgPSBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVVNFUl9BVFRSSUJVVEVTLCBKU09OLnN0cmluZ2lmeSh1c2VyQXR0cmlidXRlcykpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5DT1VOVFJZLCBDb25zdGFudHMuVkFMVUVTLkRFVEVDVClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlJFR0lPTiwgQ29uc3RhbnRzLlZBTFVFUy5ERVRFQ1QpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5DSVRZLCBDb25zdGFudHMuVkFMVUVTLkRFVEVDVClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkxPQ0FUSU9OLCBDb25zdGFudHMuVkFMVUVTLkRFVEVDVClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlNZU1RFTV9OQU1FLCBMZWFucGx1bS5fc3lzdGVtTmFtZSB8fCBfYnJvd3NlckRldGVjdG9yLk9TKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuU1lTVEVNX1ZFUlNJT04sIChMZWFucGx1bS5fc3lzdGVtVmVyc2lvbiB8fCAnJykudG9TdHJpbmcoKSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkJST1dTRVJfTkFNRSwgX2Jyb3dzZXJEZXRlY3Rvci5icm93c2VyKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQlJPV1NFUl9WRVJTSU9OLCBfYnJvd3NlckRldGVjdG9yLnZlcnNpb24udG9TdHJpbmcoKSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkxPQ0FMRSwgQ29uc3RhbnRzLlZBTFVFUy5ERVRFQ1QpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5ERVZJQ0VfTkFNRSwgTGVhbnBsdW0uX2RldmljZU5hbWUgfHxcbiAgICAgICAgICAgIGAke19icm93c2VyRGV0ZWN0b3IuYnJvd3Nlcn0gJHtfYnJvd3NlckRldGVjdG9yLnZlcnNpb259YClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkRFVklDRV9NT0RFTCwgTGVhbnBsdW0uX2RldmljZU1vZGVsIHx8ICdXZWIgQnJvd3NlcicpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkNMVURFX0RFRkFVTFRTLCBmYWxzZSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklOQ0xVREVfVkFSSUFOVF9ERUJVR19JTkZPLCBJbnRlcm5hbFN0YXRlLnZhcmlhbnREZWJ1Z0luZm9FbmFibGVkKTtcblxuICAgIC8vIElzc3VlIHJlcXVlc3QuXG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuU1RBUlQsIGFyZ3MsIHtcbiAgICAgIHF1ZXVlZDogdHJ1ZSxcbiAgICAgIHNlbmROb3c6IHRydWUsXG4gICAgICByZXNwb25zZTogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgSW50ZXJuYWxTdGF0ZS5oYXNTdGFydGVkID0gdHJ1ZVxuICAgICAgICBsZXQgc3RhcnRSZXNwb25zZSA9IExlYW5wbHVtUmVxdWVzdC5nZXRMYXN0UmVzcG9uc2UocmVzcG9uc2UpXG4gICAgICAgIGlmIChMZWFucGx1bVJlcXVlc3QuaXNSZXNwb25zZVN1Y2Nlc3Moc3RhcnRSZXNwb25zZSkpIHtcbiAgICAgICAgICBJbnRlcm5hbFN0YXRlLnN0YXJ0U3VjY2Vzc2Z1bCA9IHRydWVcbiAgICAgICAgICBpZiAoSW50ZXJuYWxTdGF0ZS5kZXZNb2RlKSB7XG4gICAgICAgICAgICBsZXQgbGF0ZXN0VmVyc2lvbiA9IHN0YXJ0UmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuTEFURVNUX1ZFUlNJT05dXG4gICAgICAgICAgICBpZiAobGF0ZXN0VmVyc2lvbikge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQSBuZXdlciB2ZXJzaW9uIG9mIExlYW5wbHVtLCAke2xhdGVzdFZlcnNpb259LCBpcyBhdmFpbGFibGUuIEdvIHRvYCArXG4gICAgICAgICAgICAgICAgICAnbGVhbnBsdW0uY29tIHRvIGRvd25sb2FkIGl0LicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBMZWFucGx1bVNvY2tldC5jb25uZWN0KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBWYXJDYWNoZS5hcHBseURpZmZzKFxuICAgICAgICAgICAgICBzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUlNdLFxuICAgICAgICAgICAgICBzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUklBTlRTXSxcbiAgICAgICAgICAgICAgc3RhcnRSZXNwb25zZVtDb25zdGFudHMuS0VZUy5BQ1RJT05fTUVUQURBVEFdKTtcbiAgICAgICAgICBWYXJDYWNoZS52YXJpYW50RGVidWdJbmZvID0gc3RhcnRSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJJQU5UX0RFQlVHX0lORk9dXG4gICAgICAgICAgVmFyQ2FjaGUudG9rZW4gPSBzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlRPS0VOXVxuICAgICAgICAgIFZhckNhY2hlLnNldE1lc3NhZ2VzKHN0YXJ0UmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuTUVTU0FHRVNdKVxuICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdtZXNzYWdlcycsIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBMZWFucGx1bS5nZXRGaWx0ZXJlZFJlc3VsdHMoXG4gICAgICAgICAgICAgIFZhckNhY2hlLmdldE1lc3NhZ2VzKCksXG4gICAgICAgICAgICAgIFsnc3RhcnQnLCAncmVzdW1lJ10sXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY2FsbGVkQnk6ICdzdGFydCdcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEludGVybmFsU3RhdGUuc3RhcnRTdWNjZXNzZnVsID0gZmFsc2VcbiAgICAgICAgICBWYXJDYWNoZS5sb2FkRGlmZnMoKVxuICAgICAgICB9XG4gICAgICAgIEludGVybmFsU3RhdGUudHJpZ2dlclN0YXJ0SGFuZGxlcnMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgLyoqXG4gICAqIHJldHVybiBhbiBhcnJheSBvZiBmaWx0ZXJlZCBtZXNzYWdlXG4gICAqIEBwYXJhbSB7QXJyYXl9IG1lc3NhZ2VzIC0gdGhlIG1lc3NhZ2UgcmVzcG9uc2Ugc3RvcmVkIGluIFZhcmNhY2hlXG4gICAqIEBwYXJhbSB7U3RyaW5nIHwgU3RyaW5nW10gfCA/fSB0cmlnZ2VycyAtIHRoZSB0cmlnZ2VyKHMpIHdlIHdhbnQgdG8gY2hlY2sgYWdhaW5zdFxuICAgKiBAcGFyYW0ge1N0cmluZz99IHZlcmIgLSBhZGRpdGlvbmFsIHBhcmFtZXRlclxuICAgKiBAcGFyYW0gIHtTdHJpbmc/fSBub3VuIC0gYWRkaXRpb25hbCBwYXJhbWV0ZXJcbiAgICogQHBhcmFtICB7T2JqZWN0P30gcGFyYW1zIC0gbmVjZXNzYXJ5IGZvciBzb21lIGV2ZW50XG4gICAqIEBwYXJhbSAge251bWJlcj99IHBhcmFtcy5mcm9tIC0gbmVjZXNzYXJ5IGZvciBzb21lIGV2ZW50XG4gICAqIEBwYXJhbSAge251bWJlcj99IHBhcmFtcy50byAtIG5lY2Vzc2FyeSBmb3Igc29tZSBldmVudFxuICAgKiBAcGFyYW0gIHtzdHJpbmc/fSBwYXJhbXMucGFyYW1WYWx1ZSAtIG5lY2Vzc2FyeSBmb3Igc29tZSBldmVudFxuICAgKiBAcGFyYW0gIHtzdHJpbmc/fSBwYXJhbXMuTmFtZSAtIG5lY2Vzc2FyeSBmb3Igc29tZSBldmVudFxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyBnZXRGaWx0ZXJlZFJlc3VsdHMoIG1lc3NhZ2VzLCB0cmlnZ2Vycz0nJywgdmVyYj0nJywgbm91bj0nJywgcGFyYW1zPXt9KSB7XG4gICAgaWYoIW1lc3NhZ2VzKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgcmV0dXJuIEFjdGlvbk1hbmFnZXIuZmlsdGVyTWVzc2FnZXMobWVzc2FnZXMsIHRyaWdnZXJzLCB2ZXJiLCBub3VuLCBwYXJhbXMpXG4gIH1cbiAgc3RhdGljIHN0YXJ0RnJvbUNhY2hlKHVzZXJJZCwgdXNlckF0dHJpYnV0ZXMsIGNhbGxiYWNrKSB7XG4gICAgLy8gT3ZlcmxvYWRzLlxuICAgIGlmICh0eXBlb2YgdXNlcklkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJJZFxuICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkQXNzaWdubWVudFxuICAgICAgdXNlckF0dHJpYnV0ZXMgPSB7fVxuICAgICAgdXNlcklkID0gbnVsbFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHVzZXJJZCA9PT0gJ29iamVjdCcgJiYgdXNlcklkICE9PSBudWxsICYmXG4gICAgICAgIHVzZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJBdHRyaWJ1dGVzXG4gICAgICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRBc3NpZ25tZW50XG4gICAgICB1c2VyQXR0cmlidXRlcyA9IHVzZXJJZFxuICAgICAgdXNlcklkID0gbnVsbFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHVzZXJBdHRyaWJ1dGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJBdHRyaWJ1dGVzXG4gICAgICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRBc3NpZ25tZW50XG4gICAgICB1c2VyQXR0cmlidXRlcyA9IHt9XG4gICAgfVxuICAgIExlYW5wbHVtUmVxdWVzdC51c2VySWQgPSB1c2VySWRcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIExlYW5wbHVtLmFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyKGNhbGxiYWNrKVxuICAgIH1cblxuICAgIEludGVybmFsU3RhdGUuaGFzU3RhcnRlZCA9IHRydWVcbiAgICBJbnRlcm5hbFN0YXRlLnN0YXJ0U3VjY2Vzc2Z1bCA9IHRydWVcbiAgICBpZiAoSW50ZXJuYWxTdGF0ZS5kZXZNb2RlKSB7XG4gICAgICBMZWFucGx1bVNvY2tldC5jb25uZWN0KClcbiAgICB9XG4gICAgVmFyQ2FjaGUubG9hZERpZmZzKClcbiAgICBJbnRlcm5hbFN0YXRlLnRyaWdnZXJTdGFydEhhbmRsZXJzKClcbiAgfVxuXG4gIHN0YXRpYyBzdG9wKCkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlNUT1AsIHVuZGVmaW5lZCwge1xuICAgICAgc2VuZE5vdzogdHJ1ZSxcbiAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgcGF1c2VTZXNzaW9uKCkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlBBVVNFX1NFU1NJT04sIHVuZGVmaW5lZCwge1xuICAgICAgc2VuZE5vdzogdHJ1ZSxcbiAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgcmVzdW1lU2Vzc2lvbigpIHtcbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5SRVNVTUVfU0VTU0lPTiwgdW5kZWZpbmVkLCB7XG4gICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgcXVldWVkOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBwYXVzZVN0YXRlKCkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlBBVVNFX1NUQVRFLCB1bmRlZmluZWQsIHtcbiAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgcmVzdW1lU3RhdGUoKSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuUkVTVU1FX1NUQVRFLCB1bmRlZmluZWQsIHtcbiAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgc2V0VXNlcklkKHVzZXJJZCkge1xuICAgIExlYW5wbHVtLnNldFVzZXJBdHRyaWJ1dGVzKHVzZXJJZClcbiAgfVxuXG4gIHN0YXRpYyBzZXRVc2VyQXR0cmlidXRlcyh1c2VySWQsIHVzZXJBdHRyaWJ1dGVzKSB7XG4gICAgaWYgKHVzZXJBdHRyaWJ1dGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2YgdXNlcklkID09PSAnb2JqZWN0Jykge1xuICAgICAgICB1c2VyQXR0cmlidXRlcyA9IHVzZXJJZFxuICAgICAgICB1c2VySWQgPSB1bmRlZmluZWRcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHVzZXJJZCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBzZXRVc2VyQXR0cmlidXRlcyBleHBlY3RzIGEgc3RyaW5nIG9yIGFuICcgK1xuICAgICAgICAgICAgJ29iamVjdCcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5TRVRfVVNFUl9BVFRSSUJVVEVTLFxuICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlVTRVJfQVRUUklCVVRFUyxcbiAgICAgICAgICAgICAgICB1c2VyQXR0cmlidXRlcyA/IEpTT04uc3RyaW5naWZ5KHVzZXJBdHRyaWJ1dGVzKSA6IHVuZGVmaW5lZClcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5ORVdfVVNFUl9JRCwgdXNlcklkKSwge1xuICAgICAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgICAgICB9KVxuICAgIGlmICh1c2VySWQpIHtcbiAgICAgIExlYW5wbHVtUmVxdWVzdC51c2VySWQgPSB1c2VySWRcbiAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRCwgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0RmlsZVVybChmaWxlTmFtZSkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICByZXR1cm4gTGVhbnBsdW1SZXF1ZXN0XG4gICAgICAgIC5nZW5lcmF0ZVJlcXVlc3RVcmwoXG4gICAgICAgICAgQ29uc3RhbnRzLk1FVEhPRFMuRE9XTkxPQURfRklMRSxcbiAgICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKS5hZGQoQ29uc3RhbnRzLlBBUkFNUy5GSUxFTkFNRSwgZmlsZU5hbWUpXG4gICAgICAgIClcbiAgfVxuXG4gIC8vIFRPRE86IG5lZWQgcHJvYmFibHkgdG8gYWRkIHRoZSBwYXJhbXMgKGFrYSBleGl0LCBhY2NlcHQsIGNhbmNlbClcbiAgLy8gIHRvIGJ1aWxkIHZhbGlkIGZpbHRlciB2YWx1ZTogJy5jMjM0MjM5MzggZXhpdCdcbiAgLy8gIGVpdGhlciBWYXJDYWNoZSBnZXRNZXNzYWdlQnlJZCBvciBwYXNzIG1lc3NhZ2Ugb3IgcGFzcyBtZXNzYWdlIHBhcmFtc1xuICAvKipcbiAgICogSXQgYWxsb3cgdHJhY2tpbmcgbWVzc2FnZXMgYnkgcGFzc2luZyBhbiBleHRyYSAnbWVzc2FnZUlkJyBwYXJhbSB0byB0aGUgdHJhY2sgbWV0aG9kXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZUlkXG4gICAqL1xuICBzdGF0aWMgdHJhY2tNZXNzYWdlKGV2ZW50LCBtZXNzYWdlSWQpe1xuICAgIExlYW5wbHVtLnRyYWNrKGV2ZW50LHVuZGVmaW5lZCx1bmRlZmluZWQsdW5kZWZpbmVkLG1lc3NhZ2VJZClcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEBwYXJhbSBpbmZvXG4gICAqIEBwYXJhbSBwYXJhbXNcbiAgICogQHBhcmFtIG1lc3NhZ2VJZCAtIG1lc3NhZ2VJZCBpcyBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgZm9yIHRyYWNraW5nIG1lc3NhZ2UuIExlYXZlIGl0IHVuZGVmaW5lZCBmb3Igbm90aWZpY2F0aW9uXG4gICAqL1xuICBzdGF0aWMgdHJhY2soZXZlbnQsIHZhbHVlLCBpbmZvLCBwYXJhbXMsIG1lc3NhZ2VJZCkge1xuICAgIC8vIE92ZXJsb2Fkcy5cbiAgICAvLyBvYmplY3QgJiYgIW51bGwgJiYgIXVuZGVmaW5lZCAtPiBwYXJhbXNcbiAgICAvLyBzdHJpbmcgLT4gaW5mbywgcGFyYW1zXG4gICAgLy8gKiwgb2JqZWN0ICYmICFudWxsICYmICF1bmRlZmluZWQgLT4gdmFsdWUsIHBhcmFtc1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtcyA9IHZhbHVlXG4gICAgICBpbmZvID0gdW5kZWZpbmVkXG4gICAgICB2YWx1ZSA9IHVuZGVmaW5lZFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgcGFyYW1zID0gaW5mb1xuICAgICAgaW5mbyA9IHZhbHVlXG4gICAgICB2YWx1ZSA9IHVuZGVmaW5lZFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGluZm8gPT09ICdvYmplY3QnICYmIGluZm8gIT09IG51bGwgJiYgaW5mbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMgPSBpbmZvXG4gICAgICBpbmZvID0gdW5kZWZpbmVkXG4gICAgfVxuICAgIGV2ZW50cy5wdWJsaXNoKCAnbWVzc2FnZXMnLCB7XG4gICAgICBtZXNzYWdlczogTGVhbnBsdW0uZ2V0RmlsdGVyZWRSZXN1bHRzKFxuICAgICAgICBWYXJDYWNoZS5nZXRNZXNzYWdlcygpLFxuICAgICAgICAnZXZlbnQnLFxuICAgICAgICAndHJpZ2dlcnMnLFxuICAgICAgICBtZXNzYWdlSWQgPyBtZXNzYWdlSWQgOiBldmVudFxuICAgICAgKVxuICAgIH0pXG4gICAgbGV0IGFyZ3NCdWlsZGVyID0gbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5FVkVOVCwgZXZlbnQpXG4gICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVkFMVUUsIHZhbHVlIHx8IDAuMClcbiAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkZPLCBpbmZvKVxuICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlBBUkFNUywgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSlcbiAgICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICBpZihtZXNzYWdlSWQpIHtcbiAgICAgIGFyZ3NCdWlsZGVyLmFkZChDb25zdGFudHMuUEFSQU1TLk1FU1NBR0VfSUQsIG1lc3NhZ2VJZClcbiAgICB9XG5cbiAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5UUkFDSyxcbiAgICAgICBhcmdzQnVpbGRlciwge1xuICAgICAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgICAgICB9KVxuICB9XG5cbiAgc3RhdGljIGFkdmFuY2VUbyggc3RhdGUsIGluZm8sIHBhcmFtcykge1xuICAgIC8vIE92ZXJsb2Fkcy5cbiAgICAvLyBzdHJpbmd8bnVsbHx1bmRlZmluZWQsICogLT4gaW5mbywgcGFyYW1zXG4gICAgLy8gb2JqZWN0ICYmICFudWxsICYmICF1bmRlZmluZWQgLT4gcGFyYW1zXG4gICAgaWYgKHR5cGVvZiBpbmZvID09PSAnb2JqZWN0JyAmJiBpbmZvICE9PSBudWxsICYmIGluZm8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zID0gaW5mb1xuICAgICAgaW5mbyA9IHVuZGVmaW5lZFxuICAgIH1cbiAgICBldmVudHMucHVibGlzaCgnbWVzc2FnZXMnLCB7XG4gICAgICBtZXNzYWdlczogTGVhbnBsdW0uZ2V0RmlsdGVyZWRSZXN1bHRzKFxuICAgICAgICBWYXJDYWNoZS5nZXRNZXNzYWdlcygpLFxuICAgICAgICAnc3RhdGUnLFxuICAgICAgICAndHJpZ2dlcnMnLFxuICAgICAgICBzdGF0ZVxuICAgICAgKVxuICAgIH0pXG5cbiAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5BRFZBTkNFLFxuICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5TVEFURSwgc3RhdGUpXG4gICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklORk8sIGluZm8pXG4gICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlBBUkFNUywgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSksIHtcbiAgICAgICAgcXVldWVkOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHdlYiBwdXNoIGlzIHN1cHBvcnRlZCBpbiB0aGUgYnJvd3Nlci5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiBzdXBwb3J0ZWQsIGVsc2UgZmFsc2UuXG4gICAqL1xuICBzdGF0aWMgaXNXZWJQdXNoU3VwcG9ydGVkKCkge1xuICAgIHJldHVybiBQdXNoTWFuYWdlci5pc1dlYlB1c2hTdXBwb3J0ZWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgd2ViIHB1c2ggaXMgc3Vic2NyaWJlZC5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUmVzb2x2ZXMgaWYgdHJ1ZSwgcmVqZWN0cyBpZiBmYWxzZS5cbiAgICovXG4gIHN0YXRpYyBpc1dlYlB1c2hTdWJzY3JpYmVkKCkge1xuICAgIHJldHVybiBQdXNoTWFuYWdlci5pc1dlYlB1c2hTdWJzY3JpYmVkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciB0aGUgYnJvd3NlciBmb3Igd2ViIHB1c2guXG4gICAqIEBwYXJhbSAge3N0cmluZ30gICBzZXJ2aWNlV29ya2VyVXJsIFRoZSB1cmwgb24geW91ciBzZXJ2ZXIgdGhhdCBob3N0cyB0aGVcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL3N3Lm1pbi5qcyBzZXJ2aWNlIHdvcmtlciBqcyBmaWxlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAgICAgICAgICAgICAgICAgICBSZXNvbHZlcyBpZiByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJ3aXNlIGZhaWxzLlxuICAgKi9cbiAgc3RhdGljIHJlZ2lzdGVyRm9yV2ViUHVzaChzZXJ2aWNlV29ya2VyVXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChQdXNoTWFuYWdlci5pc1dlYlB1c2hTdXBwb3J0ZWQoKSkge1xuICAgICAgICByZXR1cm4gUHVzaE1hbmFnZXIucmVnaXN0ZXIoc2VydmljZVdvcmtlclVybCwgKGlzU3Vic2NyaWJlZCkgPT4ge1xuICAgICAgICAgIGlmIChpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBQdXNoTWFuYWdlci5zdWJzY3JpYmVVc2VyKClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3QoJ0xlYW5wbHVtOiBXZWJQdXNoIGlzIG5vdCBzdXBwb3J0ZWQuJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXJzIHRoZSBicm93c2VyIGZvcm0gd2ViIHB1c2guXG4gICAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgICAgICAgUmVzb2x2ZXMgb24gc3VjY2Vzcywgb3RoZXJ3aXNlIHJlamVjdHMuXG4gICAqL1xuICBzdGF0aWMgdW5yZWdpc3RlckZyb21XZWJQdXNoKCkge1xuICAgIHJldHVybiBQdXNoTWFuYWdlci51bnN1YnNjcmliZVVzZXIoKVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBjYWNoZWQgdmFsdWVzIGZvciBtZXNzYWdlcywgdmFyaWFibGVzIGFuZCB0ZXN0IGFzc2lnbm1lbnRzLlxuICAgKiBVc2Ugc3BhcmluZ2x5IGFzIGlmIHRoZSBhcHAgaXMgdXBkYXRlZCwgeW91J2xsIGhhdmUgdG8gZGVhbCB3aXRoIHBvdGVudGlhbGx5XG4gICAqIGluY29uc2lzdGVudCBzdGF0ZSBvciB1c2VyIGV4cGVyaWVuY2UuXG4gICAqL1xuICBzdGF0aWMgY2xlYXJVc2VyQ29udGVudCgpIHtcbiAgICBWYXJDYWNoZS5jbGVhclVzZXJDb250ZW50KClcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcHViL3N1YiBldmVudHMgbWFuYWdlci5cbiAgICpcbiAgICogQFJldHVybiB7IHB1Ymxpc2g6ICh0b3BpYywgYXJncykgPT4ge30sIHN1YnNjcmliZTogKHRvcGljLCBjYWxsYmFjaykgPT4ge30gfVxuICAgKi9cbiAgc3RhdGljIGdldEV2ZW50cygpIHtcbiAgICByZXR1cm4gZXZlbnRzXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MZWFucGx1bS5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5cbmltcG9ydCBSZXF1ZXN0IGZyb20gJy4vTmV0d29yaydcblxuLyoqXG4gKiBTb2NrZXQuaW8gMS4wIGNsaWVudCBjbGFzcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ja2V0SW9DbGllbnQge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYSBuZXcgU29ja2V0SW9DbGllbnQsIG5vdCBjb25uZWN0ZWQgYnkgZGVmYXVsdC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2VcbiAgICB0aGlzLmNvbm5lY3RpbmcgPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIENvbm5lY3RzIHRvIHRoZSBnaXZlbiBzb2NrZXRIb3N0LlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHNvY2tldEhvc3QgVGhlIGhvc3QgdG8gY29ubmVjdCB0by5cbiAgICovXG4gIGNvbm5lY3Qoc29ja2V0SG9zdCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXRoaXNcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmNvbm5lY3RpbmcgPSB0cnVlXG4gICAgUmVxdWVzdC5hamF4KCdQT1NUJywgYGh0dHBzOi8vJHtzb2NrZXRIb3N0fS9zb2NrZXQuaW8vMWAsICcnLFxuICAgICAgICBmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgbGV0IHBhcnRzID0gbGluZS5zcGxpdCgnOicpXG4gICAgICAgICAgbGV0IHNlc3Npb24gPSBwYXJ0c1swXVxuICAgICAgICAgIGxldCBoZWFydGJlYXQgPSBwYXJzZUludChwYXJ0c1sxXSkgLyAyICogMTAwMFxuICAgICAgICAgIHNlbGYuc29ja2V0ID0gbmV3IFdlYlNvY2tldChgd3NzOi8vJHtzb2NrZXRIb3N0fS9zb2NrZXQuaW8vMS93ZWJzb2NrZXQvJHtzZXNzaW9ufWApXG4gICAgICAgICAgbGV0IGhlYXJ0YmVhdEludGVydmFsID0gbnVsbFxuICAgICAgICAgIHNlbGYuc29ja2V0Lm9ub3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5jb25uZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgICBzZWxmLmNvbm5lY3RpbmcgPSBmYWxzZVxuICAgICAgICAgICAgaWYgKHNlbGYub25vcGVuKSB7XG4gICAgICAgICAgICAgIHNlbGYub25vcGVuKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlYXJ0YmVhdEludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHNlbGYuc29ja2V0LnNlbmQoJzI6OjonKVxuICAgICAgICAgICAgfSwgaGVhcnRiZWF0KVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmLnNvY2tldC5vbmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLmNvbm5lY3RlZCA9IGZhbHNlXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGhlYXJ0YmVhdEludGVydmFsKVxuICAgICAgICAgICAgaWYgKHNlbGYub25jbG9zZSkge1xuICAgICAgICAgICAgICBzZWxmLm9uY2xvc2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmLnNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2VQYXJ0cyA9IGV2ZW50LmRhdGEuc3BsaXQoJzonKVxuICAgICAgICAgICAgbGV0IGNvZGUgPSBwYXJzZUludChtZXNzYWdlUGFydHNbMF0pXG4gICAgICAgICAgICBpZiAoY29kZSA9PT0gMikge1xuICAgICAgICAgICAgICBzZWxmLnNvY2tldC5zZW5kKCcyOjonKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSA1KSB7XG4gICAgICAgICAgICAgIGxldCBtZXNzYWdlSWQgPSBtZXNzYWdlUGFydHNbMV1cbiAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2VQYXJ0cy5zbGljZSgzKS5qb2luKCc6JykpXG4gICAgICAgICAgICAgIGxldCBtZXNzYWdlRXZlbnQgPSBkYXRhLm5hbWVcbiAgICAgICAgICAgICAgbGV0IGFyZ3MgPSBkYXRhLmFyZ3NcbiAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VJZCkge1xuICAgICAgICAgICAgICAgIHNlbGYuc29ja2V0LnNlbmQoYDY6Ojoke21lc3NhZ2VJZH1gKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChzZWxmLm9ubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHNlbGYub25tZXNzYWdlKG1lc3NhZ2VFdmVudCwgYXJncylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSA3KSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTb2NrZXQgZXJyb3I6ICR7ZXZlbnQuZGF0YX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmLnNvY2tldC5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHNlbGYuc29ja2V0LmNsb3NlKClcbiAgICAgICAgICAgIGlmIChzZWxmLm9uZXJyb3IpIHtcbiAgICAgICAgICAgICAgc2VsZi5vbmVycm9yKGV2ZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgbnVsbCwgZmFsc2UsIHRydWUgLy8gbnVsbCwgcXVldWVkLCBwbGFpblRleHRcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgZ2l2ZW4gZXZlbnQgd2l0aCBhcmd1bWVudHMgdG8gdGhlIHNlcnZlci5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIGV2ZW50LlxuICAgKiBAcGFyYW0gIHsqfSBhcmdzIEFyZ3VtZW50cyB0byBzZW5kLlxuICAgKi9cbiAgc2VuZChuYW1lLCBhcmdzKSB7XG4gICAgaWYgKCF0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBTb2NrZXQgaXMgbm90IGNvbm5lY3RlZC4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxldCBhcmdzSnNvbiA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG5hbWUsXG4gICAgICBhcmdzXG4gICAgfSlcbiAgICB0aGlzLnNvY2tldC5zZW5kKGA1Ojo6JHthcmdzSnNvbn1gKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU29ja2V0SW9DbGllbnQuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fRGF0YVZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fSGFzaC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TZXQuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyksXG4gICAgc2V0Q2FjaGVBZGQgPSByZXF1aXJlKCcuL19zZXRDYWNoZUFkZCcpLFxuICAgIHNldENhY2hlSGFzID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVIYXMnKTtcblxuLyoqXG4gKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTZXRDYWNoZSh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPT0gbnVsbCA/IDAgOiB2YWx1ZXMubGVuZ3RoO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU2V0Q2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU3RhY2suanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19VaW50OEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fV2Vha01hcC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheVB1c2guanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlTb21lO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlTb21lLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldEFsbEtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNFcXVhbERlZXAgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbERlZXAnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzRXF1YWxgIHdoaWNoIHN1cHBvcnRzIHBhcnRpYWwgY29tcGFyaXNvbnNcbiAqIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBVbm9yZGVyZWQgY29tcGFyaXNvblxuICogIDIgLSBQYXJ0aWFsIGNvbXBhcmlzb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3RMaWtlKHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgYmFzZUlzRXF1YWwsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBlcXVhbEJ5VGFnID0gcmVxdWlyZSgnLi9fZXF1YWxCeVRhZycpLFxuICAgIGVxdWFsT2JqZWN0cyA9IHJlcXVpcmUoJy4vX2VxdWFsT2JqZWN0cycpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBvYmpJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG9iamVjdCksXG4gICAgICBvdGhUYWcgPSBvdGhJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG90aGVyKTtcblxuICBvYmpUYWcgPSBvYmpUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG9ialRhZztcbiAgb3RoVGFnID0gb3RoVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvdGhUYWc7XG5cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcbiAgICAgIG90aElzT2JqID0gb3RoVGFnID09IG9iamVjdFRhZyxcbiAgICAgIGlzU2FtZVRhZyA9IG9ialRhZyA9PSBvdGhUYWc7XG5cbiAgaWYgKGlzU2FtZVRhZyAmJiBpc0J1ZmZlcihvYmplY3QpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihvdGhlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgb2JqSXNBcnIgPSB0cnVlO1xuICAgIG9iaklzT2JqID0gZmFsc2U7XG4gIH1cbiAgaWYgKGlzU2FtZVRhZyAmJiAhb2JqSXNPYmopIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIHJldHVybiAob2JqSXNBcnIgfHwgaXNUeXBlZEFycmF5KG9iamVjdCkpXG4gICAgICA/IGVxdWFsQXJyYXlzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spXG4gICAgICA6IGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgb2JqVGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgfVxuICBpZiAoIShiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcpKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cbiAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgdmFyIG9ialVud3JhcHBlZCA9IG9iaklzV3JhcHBlZCA/IG9iamVjdC52YWx1ZSgpIDogb2JqZWN0LFxuICAgICAgICAgIG90aFVud3JhcHBlZCA9IG90aElzV3JhcHBlZCA/IG90aGVyLnZhbHVlKCkgOiBvdGhlcjtcblxuICAgICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICAgIHJldHVybiBlcXVhbEZ1bmMob2JqVW53cmFwcGVkLCBvdGhVbndyYXBwZWQsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFpc1NhbWVUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgcmV0dXJuIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbERlZXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlVGltZXMuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlVW5hcnkuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGEgYGNhY2hlYCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgVGhlIGNhY2hlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSGFzKGNhY2hlLCBrZXkpIHtcbiAgcmV0dXJuIGNhY2hlLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAob2JqZWN0LmJ5dGVPZmZzZXQgIT0gb3RoZXIuYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgb2JqZWN0ID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIG90aGVyID0gb3RoZXIuYnVmZmVyO1xuXG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAhZXF1YWxGdW5jKG5ldyBVaW50OEFycmF5KG9iamVjdCksIG5ldyBVaW50OEFycmF5KG90aGVyKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgLy8gQ29lcmNlIGJvb2xlYW5zIHRvIGAxYCBvciBgMGAgYW5kIGRhdGVzIHRvIG1pbGxpc2Vjb25kcy5cbiAgICAgIC8vIEludmFsaWQgZGF0ZXMgYXJlIGNvZXJjZWQgdG8gYE5hTmAuXG4gICAgICByZXR1cm4gZXEoK29iamVjdCwgK290aGVyKTtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzLCBwcmltaXRpdmVzIGFuZCBvYmplY3RzLFxuICAgICAgLy8gYXMgZXF1YWwuIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuICAgICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICB2YXIgY29udmVydCA9IG1hcFRvQXJyYXk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUc7XG4gICAgICBjb252ZXJ0IHx8IChjb252ZXJ0ID0gc2V0VG9BcnJheSk7XG5cbiAgICAgIGlmIChvYmplY3Quc2l6ZSAhPSBvdGhlci5zaXplICYmICFpc1BhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICAgICAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgICAgIGlmIChzdGFja2VkKSB7XG4gICAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgICAgfVxuICAgICAgYml0bWFzayB8PSBDT01QQVJFX1VOT1JERVJFRF9GTEFHO1xuXG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgICAgIHZhciByZXN1bHQgPSBlcXVhbEFycmF5cyhjb252ZXJ0KG9iamVjdCksIGNvbnZlcnQob3RoZXIpLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgaWYgKHN5bWJvbFZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlT2YuY2FsbChvYmplY3QpID09IHN5bWJvbFZhbHVlT2YuY2FsbChvdGhlcik7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQnlUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19lcXVhbEJ5VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgb2JqUHJvcHMgPSBnZXRBbGxLZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGdldEFsbEtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNQYXJ0aWFsID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gIHZhciBza2lwQ3RvciA9IGlzUGFydGlhbDtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBvYmpWYWx1ZSwga2V5LCBvdGhlciwgb2JqZWN0LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IChvYmpWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKVxuICAgICAgICAgIDogY29tcGFyZWRcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxPYmplY3RzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRSYXdUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaENsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaEdldC5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNJbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc01hc2tlZC5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZVNldC5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwVG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIGB1dGlsLnR5cGVzYCBmb3IgTm9kZS5qcyAxMCsuXG4gICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKCd1dGlsJykudHlwZXM7XG5cbiAgICBpZiAodHlwZXMpIHtcbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICAvLyBMZWdhY3kgYHByb2Nlc3MuYmluZGluZygndXRpbCcpYCBmb3IgTm9kZS5qcyA8IDEwLlxuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19ub2RlVXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX292ZXJBcmcuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlQWRkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc2V0Q2FjaGVBZGQuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3NldENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zZXRUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0dldC5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvc3R1YkFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==