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
  SDK_VERSION: '2.0.9-iflix',
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
    // return noun === trigger.noun && params.paramValue === trigger.objects[params.paramName]
    return noun === trigger.noun && params.paramName === trigger.objects[0] && params.paramValue === trigger.objects[1];
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
    /** public
     * return an array of messages filter by id and and limit
     * @params {string} messageId
     * @params {message[]} messages
     */

  }, {
    key: "filterMessagesById",
    value: function filterMessagesById(messages, messageId) {
      var now = Date.now();
      return messages.filter(function (message) {
        return messageId === message.id;
      }).filter(filterByLimits(now)).filter(filterByLimitTimes(now));
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
     * @param {Array} messages
     * @param {String | String[] | ?} triggers
     * @param {String?} verb - additional parameter
     * @param  {String?} noun - additional parameter
     * @param  {Object?} params
     * @param  {number?} params.from
     * @param  {number?} params.to
     * @param  {string?} params.paramValue
     * @param  {string?} params.paramName
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
    /**
     * @param {Array} messages
     * @param {String} messageId
     * @returns {Array}
     */

  }, {
    key: "getFilteredResultsById",
    value: function getFilteredResultsById(messages, messageId) {
      if (!messages) {
        return [];
      }

      return _ActionManager["default"].filterMessagesById(messages, messageId);
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
     * it add the message to the message view list
     * It publish chained message and campain immediate delivery message
     * @param {string} event
     * @param {string} messageId
     * @param {Object} action - the content of the triggered message action if any
     *  // @param __name__
     * @params {string} parentEvent - the name of the parent event if any
     */

  }, {
    key: "trackMessage",
    value: function trackMessage(event, messageId, action, parentEvent) {
      var concatEvent = (parentEvent ? parentEvent + ' ' : '') + event;

      if (event === '' && !parentEvent) {
        _VarCache["default"].addMessageView(messageId); // track view track event is '' aka 'View'

      }

      var chainedMessage;

      if (action) {
        switch (action.__name__) {
          case 'Chain to Existing Message':
            chainedMessage = action['Chained message'] && Leanplum.getFilteredResultsById(_VarCache["default"].getMessages(), action['Chained message']);
            break;

          case 'Center Popup':
          case 'HTML':
          case 'Alert':
            chainedMessage = [{
              vars: action,
              parentActionName: concatEvent,
              id: messageId,
              action: action.__name__
            }];
            break;
        }

        if (chainedMessage) {
          _Events["default"].publish('messages', {
            messages: chainedMessage
          });
        }
      } // do not send view event if it is a simple chained message


      if (event !== '' || !parentEvent) {
        Leanplum.track(concatEvent, undefined, undefined, undefined, messageId);
      }
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

      var args = new _ArgsBuilder["default"]().add(_Constants["default"].PARAMS.EVENT, event).add(_Constants["default"].PARAMS.VALUE, value || 0.0).add(_Constants["default"].PARAMS.INFO, info).add(_Constants["default"].PARAMS.PARAMS, JSON.stringify(params)); // noinspection Annotator

      if (messageId) {
        args.add(_Constants["default"].PARAMS.MESSAGE_ID, messageId);
      }

      _LeanplumRequest["default"].request(_Constants["default"].METHODS.TRACK, args, {
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
        messages: Leanplum.getFilteredResults(_VarCache["default"].getMessages(), 'state', 'triggers', state, params)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2MGJlZjE3NGJiZjdiMmE5NzY1YiIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FyZ3NCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9MZWFucGx1bVJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvY2FsU3RvcmFnZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL3NyYy9JbnRlcm5hbFN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9WYXJDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9OZXR3b3JrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQWN0aW9uTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQnJvd3NlckRldGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9MZWFucGx1bVNvY2tldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHVzaE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xlYW5wbHVtLmpzIiwid2VicGFjazovLy8uL3NyYy9Tb2NrZXRJb0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N0YWNrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheVNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxCeVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOlsiTUVUSE9EUyIsIlNUQVJUIiwiU1RPUCIsIkFEVkFOQ0UiLCJUUkFDSyIsIlBBVVNFX1NFU1NJT04iLCJSRVNVTUVfU0VTU0lPTiIsIlBBVVNFX1NUQVRFIiwiUkVTVU1FX1NUQVRFIiwiRE9XTkxPQURfRklMRSIsIk1VTFRJIiwiU0VUX1ZBUlMiLCJHRVRfVkFSUyIsIlNFVF9VU0VSX0FUVFJJQlVURVMiLCJTRVRfREVWSUNFX0FUVFJJQlVURVMiLCJVUExPQURfRklMRSIsIlJFR0lTVEVSX0RFVklDRSIsIlNES19WRVJTSU9OIiwiQ0xJRU5UIiwiUEFSQU1TIiwiQUNUSU9OIiwiQVBQX0lEIiwiQ0xJRU5UX0tFWSIsIkRFVklDRV9JRCIsIlVTRVJfSUQiLCJORVdfVVNFUl9JRCIsIkRFVl9NT0RFIiwiVkVSU0lPTl9OQU1FIiwiU1lTVEVNX05BTUUiLCJTWVNURU1fVkVSU0lPTiIsIkJST1dTRVJfTkFNRSIsIkJST1dTRVJfVkVSU0lPTiIsIkRFVklDRV9OQU1FIiwiREVWSUNFX01PREVMIiwiVVNFUl9BVFRSSUJVVEVTIiwiTE9DQUxFIiwiQ09VTlRSWSIsIlJFR0lPTiIsIkNJVFkiLCJMT0NBVElPTiIsIlNUQVRFIiwiSU5GTyIsIkVWRU5UIiwiVkFMVUUiLCJGSUxFTkFNRSIsIlRJTUUiLCJEQVRBIiwiVkFSUyIsIkZJTEUiLCJTSVpFIiwiVkFSSUFUSU9OIiwiSEFTSCIsIkVNQUlMIiwiVkFSSUFCTEVTIiwiSU5DTFVERV9ERUZBVUxUUyIsIklOQ0xVREVfVkFSSUFOVF9ERUJVR19JTkZPIiwiV0VCX1BVU0hfU1VCU0NSSVBUSU9OIiwiTUVTU0FHRV9JRCIsIktFWVMiLCJJU19SRUdJU1RFUkVEIiwiTEFURVNUX1ZFUlNJT04iLCJWQVJJQU5UUyIsIlZBUklBTlRfREVCVUdfSU5GTyIsIkFDVElPTl9NRVRBREFUQSIsIlRPS0VOIiwiTUVTU0FHRVMiLCJERUZBVUxUX0tFWVMiLCJDT1VOVCIsIklURU0iLCJQVVNIX1NVQlNDUklQVElPTiIsIk1FU1NBR0VfVklFVyIsIlZBTFVFUyIsIkRFVEVDVCIsIkFyZ3NCdWlsZGVyIiwiYXJnU3RyaW5nIiwiYXJnVmFsdWVzIiwia2V5IiwidmFsdWUiLCJlbmNvZGVkVXJpQ29tcG9uZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYm9keSIsIl9ib2R5IiwiYXBwSWQiLCJjbGllbnRLZXkiLCJhZGQiLCJDb25zdGFudHMiLCJsYXN0UmVxdWVzdFRpbWUiLCJ1bmRlZmluZWQiLCJjb29sZG93blRpbWVvdXQiLCJMZWFucGx1bVJlcXVlc3QiLCJhY3Rpb24iLCJwYXJhbXMiLCJvcHRpb25zIiwiZGV2aWNlSWQiLCJMb2NhbFN0b3JhZ2VNYW5hZ2VyIiwiZ2V0RnJvbUxvY2FsU3RvcmFnZSIsImlkIiwicG9zc2libGUiLCJpIiwiY2hhckF0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwic2F2ZVRvTG9jYWxTdG9yYWdlIiwidXNlcklkIiwiYXJnc0J1aWxkZXIiLCJhdHRhY2hBcGlLZXlzIiwidmVyc2lvbk5hbWUiLCJJbnRlcm5hbFN0YXRlIiwiZGV2TW9kZSIsIkRhdGUiLCJnZXRUaW1lIiwidG9TdHJpbmciLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJlcnJvciIsImVyciIsImNvbnNvbGUiLCJOZXR3b3JrIiwiYWpheCIsImFwaVBhdGgiLCJidWlsZCIsInF1ZXVlZCIsInNlbmROb3ciLCJiYXRjaEVuYWJsZWQiLCJzZW5kVW5zZW50UmVxdWVzdHMiLCJyZXF1ZXN0c1RvU2VuZCIsInBvcFVuc2VudFJlcXVlc3RzIiwicmVxdWVzdERhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwibXVsdGlSZXF1ZXN0QXJncyIsImJhdGNoQ29vbGRvd24iLCJub3ciLCJzZXRUaW1lb3V0Iiwic2F2ZVJlcXVlc3RGb3JMYXRlciIsImJ1aWxkRGljdCIsInF1ZXJ5UGFyYW1zIiwiRXJyb3IiLCJzZWNvbmRzIiwic2V0TmV0d29ya1RpbWVvdXQiLCJhcmdzIiwiY291bnQiLCJpdGVtS2V5IiwicmVtb3ZlRnJvbUxvY2FsU3RvcmFnZSIsInJlcXVlc3RBcmdzIiwicGFyc2UiLCJwdXNoIiwiaWdub3JlZCIsImluZGV4IiwibnVtUmVzcG9uc2VzIiwiZ2V0UmVzcG9uc2VBdCIsIm1lc3NhZ2UiLCJsb2NhbFN0b3JhZ2VFbmFibGVkIiwiYWx0ZXJuYXRlTG9jYWxTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZSIsInJlbW92ZUl0ZW0iLCJoYW5kbGVyIiwic3RhcnRIYW5kbGVycyIsImhhc1N0YXJ0ZWQiLCJzdGFydFN1Y2Nlc3NmdWwiLCJpZHgiLCJpbmRleE9mIiwic3BsaWNlIiwidmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzIiwiaGFzUmVjZWl2ZWREaWZmcyIsInZhcmlhbnREZWJ1Z0luZm9FbmFibGVkIiwiVmFyQ2FjaGUiLCJkaWZmcyIsInZhcmlhbnRzIiwiYWN0aW9uTWV0YWRhdGEiLCJtZXJnZWQiLCJtZXJnZUhlbHBlciIsInZhcmlhYmxlcyIsInNhdmVEaWZmcyIsIm9uVXBkYXRlIiwiYXBwbHlEaWZmcyIsInRva2VuIiwidmFyaWFudERlYnVnSW5mbyIsImxvZyIsIm1lc3NhZ2VJZCIsIm1lc3NhZ2VWaWV3IiwiZ2V0TWVzc2FnZXNWaWV3IiwibWVzc2FnZXNWaWV3IiwibWVzc2FnZVZpZXdQZXJTZXNzaW9uIiwibWVzc2FnZXNWaWV3UGVyU2Vzc2lvbiIsInQiLCJzZXNzaW9uIiwicmVxdWVzdCIsIm1lc3NhZ2VzIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsInZhcnMiLCJkaWZmIiwib2JqSXRlcmF0b3IiLCJvYmoiLCJmIiwiQXJyYXkiLCJhdHRyIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwidmFyc0l0ZXJhdG9yIiwiZGlmZkl0ZXJhdG9yIiwiaXNBcnJheSIsImF0dHJpYnV0ZSIsInZhclN1YnNjcmlwdCIsInN1YnN0cmluZyIsInBhcnNlSW50Iiwic3Vic2NyaXB0IiwiZGlmZlZhbHVlIiwidG9waWNzIiwic3Vic2NyaWJlIiwidG9waWMiLCJsaXN0ZW5lciIsInJlbW92ZSIsInB1Ymxpc2giLCJpbmZvIiwiZm9yRWFjaCIsIml0ZW0iLCJyZXF1ZXN0UXVldWUiLCJuZXR3b3JrVGltZW91dFNlY29uZHMiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwicGxhaW5UZXh0IiwicnVubmluZ1JlcXVlc3QiLCJlbnF1ZXVlUmVxdWVzdCIsImFyZ3VtZW50cyIsIlhEb21haW5SZXF1ZXN0IiwibG9jYXRpb24iLCJwcm90b2NvbCIsIlJlZmxlY3QiLCJhcHBseSIsImFqYXhJRTgiLCJoYW5kbGVkIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwicmFuQ2FsbGJhY2siLCJyZXNwb25zZVRleHQiLCJzdGF0dXMiLCJkZXF1ZXVlUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsImFib3J0IiwieGRyIiwib25sb2FkIiwib25lcnJvciIsIm9udGltZW91dCIsIm9ucHJvZ3Jlc3MiLCJ0aW1lb3V0IiwicmVxdWVzdEFyZ3VtZW50cyIsInNoaWZ0IiwiZmlsdGVyQnlUcmlnZ2VycyIsInRyaWdnZXJzIiwid2hlblRyaWdnZXJzIiwiY2hpbGRyZW4iLCJmaWx0ZXJlZEJ5VHJpZ2dlcnMiLCJmaWx0ZXIiLCJ0cmlnZ2VyIiwiaW5jbHVkZXMiLCJzdWJqZWN0IiwidmVyYkZpbHRlciIsImZpbHRlckJ5VmVyYnMiLCJ2ZXJiIiwiZXZhbHVhdG9yIiwidHJpZ2dlclZlcmJFdmFsdWF0b3JzIiwibm91biIsIm9iamVjdHMiLCJmaWx0ZXJCeUxpbWl0cyIsImxpbWl0cyIsIndoZW5MaW1pdHMiLCJldmVyeSIsImxpbWl0IiwidmVyYkV2YWx1YXRvciIsImxpbWl0VmVyYkV2YWx1YXRvcnMiLCJjb3VudE1lc3NhZ2VWaWV3c0J5TGltaXQiLCJzaW5jZSIsIml0ZXJhdG9yIiwiZmlsdGVyQnlMaW1pdFRpbWVzIiwibGltaXRUaW1lIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInRyaWdnZXJzV2l0aFBhcmFtZXRlciIsInBhcmFtTmFtZSIsInBhcmFtVmFsdWUiLCJjaGFuZ2VzVG8iLCJ0byIsImNoYW5nZXNGcm9tVG8iLCJmcm9tIiwibGltaXRVc2VyIiwibWF4VmlldyIsImdldE1lc3NhZ2VWaWV3IiwibGltaXRNb250aCIsImFtb3VudCIsInJlZHVjZSIsImxpbWl0V2VlayIsImxpbWl0RGF5IiwibGltaXRIb3VyIiwibGltaXRNaW51dGUiLCJsaW1pdFNlY29uZCIsImxpbWl0U2Vzc2lvbiIsIkFjdGlvbk1hbmFnZXIiLCJzb3J0IiwiYSIsImIiLCJwcmlvcml0eSIsImRhdGFCcm93c2VyIiwic3RyaW5nIiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwic3ViU3RyaW5nIiwiaWRlbnRpdHkiLCJ2ZXJzaW9uU2VhcmNoIiwidmVuZG9yIiwicHJvcCIsIndpbmRvdyIsIm9wZXJhIiwiZGF0YU9TIiwicGxhdGZvcm0iLCJCcm93c2VyRGV0ZWN0b3IiLCJicm93c2VyIiwiX3NlYXJjaFN0cmluZyIsInZlcnNpb24iLCJfc2VhcmNoVmVyc2lvbiIsImFwcFZlcnNpb24iLCJPUyIsImRhdGFTdHJpbmciLCJkYXRhUHJvcCIsInZlcnNpb25TZWFyY2hTdHJpbmciLCJwYXJzZUZsb2F0IiwiTGVhbnBsdW1Tb2NrZXQiLCJXZWJTb2NrZXQiLCJjbGllbnQiLCJTb2NrZXRJb0NsaWVudCIsImF1dGhTZW50Iiwib25vcGVuIiwiZXZlbnQiLCJvbm1lc3NhZ2UiLCJnZXRWYXJzUmVzcG9uc2UiLCJnZXRMYXN0UmVzcG9uc2UiLCJ2YWx1ZXMiLCJzZW5kVmFyaWFibGVzIiwiYWxlcnQiLCJlbWFpbCIsImV2ZW50cyIsIm9uY2xvc2UiLCJjb25uZWN0Iiwic29ja2V0SG9zdCIsInNldEludGVydmFsIiwiY29ubmVjdGVkIiwiY29ubmVjdGluZyIsIkFQUExJQ0FUSU9OX1NFUlZFUl9QVUJMSUNfS0VZIiwiaXNTdWJzY3JpYmVkIiwic2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiIsIlB1c2hNYW5hZ2VyIiwic2VydmljZVdvcmtlciIsImlzV2ViUHVzaFN1cHBvcnRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZ2V0U2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiIsInRoZW4iLCJyZWdpc3RyYXRpb24iLCJwdXNoTWFuYWdlciIsImdldFN1YnNjcmlwdGlvbiIsInN1YnNjcmlwdGlvbiIsInVwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyIiwic2VydmljZVdvcmtlclVybCIsImNhbGxiYWNrIiwicmVnaXN0ZXIiLCJpbnN0YWxsaW5nIiwid2FpdGluZyIsImFjdGl2ZSIsInN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsImFwcGxpY2F0aW9uU2VydmVyS2V5IiwidXJsQjY0VG9VaW50OEFycmF5IiwicmVqZWN0IiwidXNlclZpc2libGVPbmx5IiwiaXNXZWJQdXNoU3Vic2NyaWJlZCIsInN1YnNjcmliZWQiLCJ1bnN1YnNjcmliZSIsImdldFJlZ2lzdHJhdGlvbiIsImJhc2U2NFN0cmluZyIsInBhZGRpbmciLCJyZXBlYXQiLCJiYXNlNjQiLCJyZXBsYWNlIiwicmF3RGF0YSIsImF0b2IiLCJvdXRwdXRBcnJheSIsIlVpbnQ4QXJyYXkiLCJjaGFyQ29kZUF0IiwiZ2V0S2V5IiwiYXV0aCIsImtleUFzY2lpIiwiYnRvYSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImF1dGhBc2NpaSIsImVuZHBvaW50IiwicHJlcGFyZWRTdWJzY3JpcHRpb24iLCJwcmVwYXJlU3Vic2NyaXB0aW9uIiwicHJlcGFyZWRTdWJzY3JpcHRpb25TdHJpbmciLCJleGlzdGluZ1N1YnNjcmlwdGlvblN0cmluZyIsInNldFN1YnNjcmlwdGlvbiIsIl9icm93c2VyRGV0ZWN0b3IiLCJMZWFucGx1bSIsIl9lbWFpbCIsInNldFZhcmlhbnREZWJ1Z0luZm9FbmFibGVkIiwiZ2V0VmFyaWFudERlYnVnSW5mbyIsImFjY2Vzc0tleSIsImhvc3QiLCJkZXZpY2VOYW1lIiwiX2RldmljZU5hbWUiLCJkZXZpY2VNb2RlbCIsIl9kZXZpY2VNb2RlbCIsInN5c3RlbU5hbWUiLCJfc3lzdGVtTmFtZSIsInN5c3RlbVZlcnNpb24iLCJfc3lzdGVtVmVyc2lvbiIsInNldFZhcmlhYmxlcyIsImNvb2xkb3duU2Vjb25kcyIsImdldFZhcmlhYmxlcyIsImN1cnJlbnQiLCJWYXJjYWNoZSIsImdldE1lc3NhZ2VzIiwiYWRkU3RhcnRSZXNwb25zZUhhbmRsZXIiLCJhZGRWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlciIsInJlbW92ZVN0YXJ0UmVzcG9uc2VIYW5kbGVyIiwicmVtb3ZlVmFyaWFibGVzQ2hhbmdlZEhhbmRsZXIiLCJpc1N1Y2Nlc3MiLCJpc1Jlc3BvbnNlU3VjY2VzcyIsInVzZXJBdHRyaWJ1dGVzIiwidHJpZ2dlclZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycyIsInN0YXJ0UmVzcG9uc2UiLCJsYXRlc3RWZXJzaW9uIiwic2V0TWVzc2FnZXMiLCJnZXRGaWx0ZXJlZFJlc3VsdHMiLCJjYWxsZWRCeSIsImxvYWREaWZmcyIsInRyaWdnZXJTdGFydEhhbmRsZXJzIiwiZmlsdGVyTWVzc2FnZXMiLCJmaWx0ZXJNZXNzYWdlc0J5SWQiLCJzZXRVc2VyQXR0cmlidXRlcyIsImZpbGVOYW1lIiwiZ2VuZXJhdGVSZXF1ZXN0VXJsIiwicGFyZW50RXZlbnQiLCJjb25jYXRFdmVudCIsImFkZE1lc3NhZ2VWaWV3IiwiY2hhaW5lZE1lc3NhZ2UiLCJfX25hbWVfXyIsImdldEZpbHRlcmVkUmVzdWx0c0J5SWQiLCJwYXJlbnRBY3Rpb25OYW1lIiwidHJhY2siLCJzdWJzY3JpYmVVc2VyIiwidW5zdWJzY3JpYmVVc2VyIiwiY2xlYXJVc2VyQ29udGVudCIsInNlbGYiLCJSZXF1ZXN0IiwibGluZSIsInBhcnRzIiwic3BsaXQiLCJoZWFydGJlYXQiLCJzb2NrZXQiLCJoZWFydGJlYXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJtZXNzYWdlUGFydHMiLCJjb2RlIiwic2xpY2UiLCJqb2luIiwibWVzc2FnZUV2ZW50IiwibmFtZSIsImNsb3NlIiwiYXJnc0pzb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUE7O0FBRUE7QUFDQTs7QUFF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QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMzREE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDakJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6ImxlYW5wbHVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTGVhbnBsdW1cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTGVhbnBsdW1cIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjBiZWYxNzRiYmY3YjJhOTc2NWIiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19yb290LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIE1FVEhPRFM6IHtcbiAgICBTVEFSVDogJ3N0YXJ0JyxcbiAgICBTVE9QOiAnc3RvcCcsXG4gICAgQURWQU5DRTogJ2FkdmFuY2UnLFxuICAgIFRSQUNLOiAndHJhY2snLFxuICAgIFBBVVNFX1NFU1NJT046ICdwYXVzZVNlc3Npb24nLFxuICAgIFJFU1VNRV9TRVNTSU9OOiAncmVzdW1lU2Vzc2lvbicsXG4gICAgUEFVU0VfU1RBVEU6ICdwYXVzZVN0YXRlJyxcbiAgICBSRVNVTUVfU1RBVEU6ICdyZXN1bWVTdGF0ZScsXG4gICAgRE9XTkxPQURfRklMRTogJ2Rvd25sb2FkRmlsZScsXG4gICAgTVVMVEk6ICdtdWx0aScsXG4gICAgU0VUX1ZBUlM6ICdzZXRWYXJzJyxcbiAgICBHRVRfVkFSUzogJ2dldFZhcnMnLFxuICAgIFNFVF9VU0VSX0FUVFJJQlVURVM6ICdzZXRVc2VyQXR0cmlidXRlcycsXG4gICAgU0VUX0RFVklDRV9BVFRSSUJVVEVTOiAnc2V0RGV2aWNlQXR0cmlidXRlcycsXG4gICAgVVBMT0FEX0ZJTEU6ICd1cGxvYWRGaWxlJyxcbiAgICBSRUdJU1RFUl9ERVZJQ0U6ICdyZWdpc3RlckRldmljZSdcbiAgfSxcblxuICBTREtfVkVSU0lPTjogJzIuMC45LWlmbGl4JyxcblxuICBDTElFTlQ6ICdqcycsXG5cbiAgUEFSQU1TOiB7XG4gICAgQUNUSU9OOiAnYWN0aW9uJyxcbiAgICBBUFBfSUQ6ICdhcHBJZCcsXG4gICAgQ0xJRU5UOiAnY2xpZW50JyxcbiAgICBDTElFTlRfS0VZOiAnY2xpZW50S2V5JyxcbiAgICBERVZJQ0VfSUQ6ICdkZXZpY2VJZCcsXG4gICAgU0RLX1ZFUlNJT046ICdzZGtWZXJzaW9uJyxcbiAgICBVU0VSX0lEOiAndXNlcklkJyxcbiAgICBORVdfVVNFUl9JRDogJ25ld1VzZXJJZCcsXG4gICAgREVWX01PREU6ICdkZXZNb2RlJyxcbiAgICBWRVJTSU9OX05BTUU6ICd2ZXJzaW9uTmFtZScsXG4gICAgU1lTVEVNX05BTUU6ICdzeXN0ZW1OYW1lJyxcbiAgICBTWVNURU1fVkVSU0lPTjogJ3N5c3RlbVZlcnNpb24nLFxuICAgIEJST1dTRVJfTkFNRTogJ2Jyb3dzZXJOYW1lJyxcbiAgICBCUk9XU0VSX1ZFUlNJT046ICdicm93c2VyVmVyc2lvbicsXG4gICAgREVWSUNFX05BTUU6ICdkZXZpY2VOYW1lJyxcbiAgICBERVZJQ0VfTU9ERUw6ICdkZXZpY2VNb2RlbCcsXG4gICAgVVNFUl9BVFRSSUJVVEVTOiAndXNlckF0dHJpYnV0ZXMnLFxuICAgIExPQ0FMRTogJ2xvY2FsZScsXG4gICAgQ09VTlRSWTogJ2NvdW50cnknLFxuICAgIFJFR0lPTjogJ3JlZ2lvbicsXG4gICAgQ0lUWTogJ2NpdHknLFxuICAgIExPQ0FUSU9OOiAnbG9jYXRpb24nLFxuICAgIFNUQVRFOiAnc3RhdGUnLFxuICAgIElORk86ICdpbmZvJyxcbiAgICBFVkVOVDogJ2V2ZW50JyxcbiAgICBWQUxVRTogJ3ZhbHVlJyxcbiAgICBGSUxFTkFNRTogJ2ZpbGVuYW1lJyxcbiAgICBUSU1FOiAndGltZScsXG4gICAgREFUQTogJ2RhdGEnLFxuICAgIFZBUlM6ICd2YXJzJyxcbiAgICBGSUxFOiAnZmlsZScsXG4gICAgU0laRTogJ3NpemUnLFxuICAgIFZBUklBVElPTjogJ3ZhcmlhdGlvbicsXG4gICAgSEFTSDogJ2hhc2gnLFxuICAgIEVNQUlMOiAnZW1haWwnLFxuICAgIFZBUklBQkxFUzogJ3ZhcnMnLFxuICAgIFBBUkFNUzogJ3BhcmFtcycsXG4gICAgSU5DTFVERV9ERUZBVUxUUzogJ2luY2x1ZGVEZWZhdWx0cycsXG4gICAgSU5DTFVERV9WQVJJQU5UX0RFQlVHX0lORk86ICdpbmNsdWRlVmFyaWFudERlYnVnSW5mbycsXG4gICAgV0VCX1BVU0hfU1VCU0NSSVBUSU9OOiAnd2ViUHVzaFN1YnNjcmlwdGlvbicsXG4gICAgTUVTU0FHRV9JRDogJ21lc3NhZ2VJZCdcbiAgfSxcblxuICBLRVlTOiB7XG4gICAgSVNfUkVHSVNURVJFRDogJ2lzUmVnaXN0ZXJlZCcsXG4gICAgTEFURVNUX1ZFUlNJT046ICdsYXRlc3RWZXJzaW9uJyxcbiAgICBWQVJTOiAndmFycycsXG4gICAgVkFSSUFOVFM6ICd2YXJpYW50cycsXG4gICAgVkFSSUFOVF9ERUJVR19JTkZPOiAndmFyaWFudERlYnVnSW5mbycsXG4gICAgQUNUSU9OX01FVEFEQVRBOiAnYWN0aW9uTWV0YWRhdGEnLFxuICAgIFRPS0VOOiAndG9rZW4nLFxuICAgIE1FU1NBR0VTOiAnbWVzc2FnZXMnXG4gIH0sXG5cbiAgREVGQVVMVF9LRVlTOiB7XG4gICAgQ09VTlQ6ICdfX2xlYW5wbHVtX3Vuc3luY2VkJyxcbiAgICBJVEVNOiAnX19sZWFucGx1bV91bnN5bmNlZF8nLFxuICAgIFZBUklBQkxFUzogJ19fbGVhbnBsdW1fdmFyaWFibGVzJyxcbiAgICBWQVJJQU5UUzogJ19fbGVhbnBsdW1fdmFyaWFudHMnLFxuICAgIFZBUklBTlRfREVCVUdfSU5GTzogJ19fbGVhbnBsdW1fdmFyaWFudF9kZWJ1Z19pbmZvJyxcbiAgICBBQ1RJT05fTUVUQURBVEE6ICdfX2xlYW5wbHVtX2FjdGlvbl9tZXRhZGF0YScsXG4gICAgVE9LRU46ICdfX2xlYW5wbHVtX3Rva2VuJyxcbiAgICBERVZJQ0VfSUQ6ICdfX2xlYW5wbHVtX2RldmljZV9pZCcsXG4gICAgVVNFUl9JRDogJ19fbGVhbnBsdW1fdXNlcl9pZCcsXG4gICAgUFVTSF9TVUJTQ1JJUFRJT046ICdfX2xlYW5wbHVtX3B1c2hfc3Vic2NyaXB0aW9uJyxcbiAgICBNRVNTQUdFX1ZJRVc6ICdfX2xlYW5wbHVtX21lc3NhZ2VzX3ZpZXcnLFxuICB9LFxuXG4gIFZBTFVFUzoge1xuICAgIERFVEVDVDogJyhkZXRlY3QpJ1xuICB9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnN0YW50cy5qcyIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0TmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5cbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9Db25zdGFudHMnXG5cbi8qKlxuICogTGVhbnBsdW0gQXJnc0J1aWxkZXIsIHVzZSB0byBjb25zdHJ1Y3QgcmVxdWVzdCBwYXlsb2FkLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmdzQnVpbGRlciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZW1wdHkgcmVxdWVzdCBhcmd1bWVudC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXJnU3RyaW5nID0gJydcbiAgICB0aGlzLmFyZ1ZhbHVlcyA9IHt9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGdpdmVuIGtleSwgdmFsdWUgdG8gdGhlIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBmb3IgdGhlIHZhbHVlLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xib29sZWFufSB2YWx1ZSBUaGUgdmFsdWUgZm9yIGdpdmVuIGtleS5cbiAgICogQHJldHVybiB7QXJnc0J1aWxkZXJ9IFJldHVybnMgYW4gb2JqZWN0IG9mIEFyZ3NCdWlsZGVyLlxuICAgKi9cbiAgYWRkKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgaWYgKHRoaXMuYXJnU3RyaW5nKSB7XG4gICAgICB0aGlzLmFyZ1N0cmluZyArPSAnJidcbiAgICB9XG4gICAgbGV0IGVuY29kZWRVcmlDb21wb25lbnQgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpXG4gICAgdGhpcy5hcmdTdHJpbmcgKz0gYCR7a2V5fT0ke2VuY29kZWRVcmlDb21wb25lbnR9YFxuICAgIHRoaXMuYXJnVmFsdWVzW2tleV0gPSB2YWx1ZVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvKipcbiAgICogQ2FjaGUgdGhlIGdpdmVuIGJvZHkuXG4gICAqIEBwYXJhbSAge1N0cmluZ30gW2JvZHldIEEgZ2l2ZW4gYm9keS5cbiAgICogQHJldHVybiB7QXJnc0J1aWxkZXJ8U3RyaW5nfSBSZXR1cm5zIEFyZ3NCdWlsZGVyIGlmIGJvZHkgZ2l2ZW4sIGVsc2UgdGhlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keS5cbiAgICovXG4gIGJvZHkoYm9keSkge1xuICAgIGlmIChib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5ID0gYm9keVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2JvZHlcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gYXR0YWNoIGdpdmVuIGFwcElkIGFuZCBhcHBLZXkgdG8gcmVxdWVzdC5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBhcHBJZCBUaGUgYXBwSWQgdG8gYXR0YWNoLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGNsaWVudEtleSBUaGUgYXBwS2V5IHRvIGF0dGFjaC5cbiAgICogQHJldHVybiB7QXJnc0J1aWxkZXJ9IFJldHVybnMgYW4gb2JqZWN0IG9mIEFyZ3NCdWlsZGVyLlxuICAgKi9cbiAgYXR0YWNoQXBpS2V5cyhhcHBJZCwgY2xpZW50S2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkKENvbnN0YW50cy5QQVJBTVMuQVBQX0lELCBhcHBJZClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkNMSUVOVCwgQ29uc3RhbnRzLkNMSUVOVClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkNMSUVOVF9LRVksIGNsaWVudEtleSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGFyZ3VtZW50cy5cbiAgICogQHJldHVybiB7U3RyaW5nfSBBcmd1bWVudHMgc3RyaW5nLlxuICAgKi9cbiAgYnVpbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJnU3RyaW5nXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBhcmd1bWVudCB2YWx1ZXMuXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGFyZ3VtZW50IHZhbHVlcy5cbiAgICovXG4gIGJ1aWxkRGljdCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcmdWYWx1ZXNcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FyZ3NCdWlsZGVyLmpzIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9Db25zdGFudHMnXG5pbXBvcnQgQXJnc0J1aWxkZXIgZnJvbSAnLi9BcmdzQnVpbGRlcidcbmltcG9ydCBJbnRlcm5hbFN0YXRlIGZyb20gJy4vSW50ZXJuYWxTdGF0ZSdcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4vTmV0d29yaydcbmltcG9ydCBMb2NhbFN0b3JhZ2VNYW5hZ2VyIGZyb20gJy4vTG9jYWxTdG9yYWdlTWFuYWdlcidcblxubGV0IGxhc3RSZXF1ZXN0VGltZSA9IHVuZGVmaW5lZFxubGV0IGNvb2xkb3duVGltZW91dCA9IG51bGxcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhbnBsdW1SZXF1ZXN0IHtcblxuICBzdGF0aWMgYXBpUGF0aCA9ICdodHRwczovL3d3dy5sZWFucGx1bS5jb20vYXBpJ1xuICBzdGF0aWMgYmF0Y2hFbmFibGVkID0gdHJ1ZVxuICBzdGF0aWMgYmF0Y2hDb29sZG93biA9IDVcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGFjdGlvblxuICAgKiBAcGFyYW0gcGFyYW1zXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEBwYXJhbSBvcHRpb25zLnN1Y2Nlc3NcbiAgICogQHBhcmFtIG9wdGlvbnMuZXJyb3JcbiAgICogQHBhcmFtIG9wdGlvbnMucmVzcG9uc2VcbiAgICogQHBhcmFtIG9wdGlvbnMucXVldWVkXG4gICAqIEBwYXJhbSBvcHRpb25zLnNlbmROb3dcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXRpYyByZXF1ZXN0KGFjdGlvbiwgcGFyYW1zLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwgbmV3IEFyZ3NCdWlsZGVyKClcblxuICAgIC8vIEdldCBvciBjcmVhdGUgZGV2aWNlIElEIGFuZCB1c2VyIElELlxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkKSB7XG4gICAgICBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQgPVxuICAgICAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkRFVklDRV9JRClcbiAgICB9XG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQpIHtcbiAgICAgIGxldCBpZCA9ICcnXG4gICAgICBsZXQgcG9zc2libGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicgK1xuICAgICAgICAgICcwMTIzNDU2Nzg5J1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgIGlkICs9IHBvc3NpYmxlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpKVxuICAgICAgfVxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkID0gaWRcbiAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuREVWSUNFX0lELCBpZClcbiAgICB9XG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QudXNlcklkKSB7XG4gICAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRClcbiAgICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCkge1xuICAgICAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkXG4gICAgICB9XG4gICAgfVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRCwgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZClcblxuICAgIGxldCBhcmdzQnVpbGRlciA9IHBhcmFtc1xuICAgICAgICAuYXR0YWNoQXBpS2V5cyhMZWFucGx1bVJlcXVlc3QuYXBwSWQsIExlYW5wbHVtUmVxdWVzdC5jbGllbnRLZXkpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5TREtfVkVSU0lPTiwgQ29uc3RhbnRzLlNES19WRVJTSU9OKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuREVWSUNFX0lELCBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5VU0VSX0lELCBMZWFucGx1bVJlcXVlc3QudXNlcklkKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQUNUSU9OLCBhY3Rpb24pXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5WRVJTSU9OX05BTUUsIExlYW5wbHVtUmVxdWVzdC52ZXJzaW9uTmFtZSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkRFVl9NT0RFLCBJbnRlcm5hbFN0YXRlLmRldk1vZGUpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5USU1FLCAobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKS50b1N0cmluZygpKVxuICAgIGxldCBzdWNjZXNzID0gb3B0aW9ucy5zdWNjZXNzIHx8IG9wdGlvbnMucmVzcG9uc2VcbiAgICBsZXQgZXJyb3IgPSBvcHRpb25zLmVycm9yIHx8IG9wdGlvbnMucmVzcG9uc2VcblxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LmFwcElkIHx8ICFMZWFucGx1bVJlcXVlc3QuY2xpZW50S2V5KSB7XG4gICAgICBsZXQgZXJyID0gJ0xlYW5wbHVtIEFwcCBJRCBhbmQgY2xpZW50IGtleSBhcmUgbm90IHNldC4gTWFrZSBzdXJlIHlvdSAnICtcbiAgICAgICAgICAnYXJlIGNhbGxpbmcgc2V0QXBwSWRGb3JEZXZlbG9wbWVudE1vZGUgb3Igc2V0QXBwSWRGb3JQcm9kdWN0aW9uTW9kZSAnICtcbiAgICAgICAgICAnYmVmb3JlIGlzc3VpbmcgQVBJIGNhbGxzLidcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgaWYgKGVycm9yKSBlcnJvcihlcnIpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmJvZHkoKSkge1xuICAgICAgTmV0d29yay5hamF4KCdQT1NUJywgYCR7TGVhbnBsdW1SZXF1ZXN0LmFwaVBhdGh9PyR7YXJnc0J1aWxkZXIuYnVpbGQoKX1gLFxuICAgICAgICAgIHBhcmFtcy5ib2R5KCksIHN1Y2Nlc3MsIGVycm9yLCBvcHRpb25zLnF1ZXVlZClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBzZW5kTm93ID0gSW50ZXJuYWxTdGF0ZS5kZXZNb2RlIHx8IG9wdGlvbnMuc2VuZE5vdyB8fCAhTGVhbnBsdW1SZXF1ZXN0LmJhdGNoRW5hYmxlZFxuXG4gICAgbGV0IHNlbmRVbnNlbnRSZXF1ZXN0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHJlcXVlc3RzVG9TZW5kID0gTGVhbnBsdW1SZXF1ZXN0LnBvcFVuc2VudFJlcXVlc3RzKClcbiAgICAgIGlmIChyZXF1ZXN0c1RvU2VuZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCByZXF1ZXN0RGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAnZGF0YSc6IHJlcXVlc3RzVG9TZW5kXG4gICAgICAgIH0pXG4gICAgICAgIGxldCBtdWx0aVJlcXVlc3RBcmdzID0gbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgICAgICAgIC5hdHRhY2hBcGlLZXlzKExlYW5wbHVtUmVxdWVzdC5hcHBJZCwgTGVhbnBsdW1SZXF1ZXN0LmNsaWVudEtleSlcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5TREtfVkVSU0lPTiwgQ29uc3RhbnRzLlNES19WRVJTSU9OKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkFDVElPTiwgQ29uc3RhbnRzLk1FVEhPRFMuTVVMVEkpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVElNRSwgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkudG9TdHJpbmcoKS50b1N0cmluZygpKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgTmV0d29yay5hamF4KCdQT1NUJywgYCR7TGVhbnBsdW1SZXF1ZXN0LmFwaVBhdGh9PyR7bXVsdGlSZXF1ZXN0QXJnc31gLCByZXF1ZXN0RGF0YSwgc3VjY2VzcywgZXJyb3IsXG4gICAgICAgICAgICBvcHRpb25zLnF1ZXVlZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWFsIHdpdGggY29vbGRvd24uXG4gICAgaWYgKCFzZW5kTm93ICYmIExlYW5wbHVtUmVxdWVzdC5iYXRjaENvb2xkb3duKSB7XG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwXG4gICAgICBpZiAoIWxhc3RSZXF1ZXN0VGltZSB8fFxuICAgICAgICAgIG5vdyAtIGxhc3RSZXF1ZXN0VGltZSA+PSBMZWFucGx1bVJlcXVlc3QuYmF0Y2hDb29sZG93bikge1xuICAgICAgICBzZW5kTm93ID0gdHJ1ZVxuICAgICAgICBsYXN0UmVxdWVzdFRpbWUgPSBub3dcbiAgICAgIH0gZWxzZSBpZiAoIWNvb2xkb3duVGltZW91dCkge1xuICAgICAgICBjb29sZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvb2xkb3duVGltZW91dCA9IG51bGxcbiAgICAgICAgICBsYXN0UmVxdWVzdFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDBcbiAgICAgICAgICBzZW5kVW5zZW50UmVxdWVzdHMoKVxuICAgICAgICB9LCAoTGVhbnBsdW1SZXF1ZXN0LmJhdGNoQ29vbGRvd24gLSAobm93IC0gbGFzdFJlcXVlc3RUaW1lKSkgKiAxMDAwKVxuICAgICAgfVxuICAgIH1cblxuICAgIExlYW5wbHVtUmVxdWVzdC5zYXZlUmVxdWVzdEZvckxhdGVyKGFyZ3NCdWlsZGVyLmJ1aWxkRGljdCgpKVxuICAgIGlmIChzZW5kTm93KSB7XG4gICAgICBzZW5kVW5zZW50UmVxdWVzdHMoKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZW5lcmF0ZVJlcXVlc3RVcmwoYWN0aW9uLCBxdWVyeVBhcmFtcykge1xuICAgIHF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXMgfHwgbmV3IEFyZ3NCdWlsZGVyKClcblxuICAgIC8vIEdldCBvciBjcmVhdGUgZGV2aWNlIElEIGFuZCB1c2VyIElELlxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkKSB7XG4gICAgICBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQgPVxuICAgICAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkRFVklDRV9JRClcbiAgICB9XG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQpIHtcbiAgICAgIGxldCBpZCA9ICcnXG4gICAgICBsZXQgcG9zc2libGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicgK1xuICAgICAgICAgICcwMTIzNDU2Nzg5J1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgIGlkICs9IHBvc3NpYmxlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpKVxuICAgICAgfVxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkID0gaWRcbiAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuREVWSUNFX0lELCBpZClcbiAgICB9XG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QudXNlcklkKSB7XG4gICAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRClcbiAgICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCkge1xuICAgICAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkXG4gICAgICB9XG4gICAgfVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRCwgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZClcblxuICAgIGxldCBhcmdzQnVpbGRlciA9IHF1ZXJ5UGFyYW1zXG4gICAgICAgIC5hdHRhY2hBcGlLZXlzKExlYW5wbHVtUmVxdWVzdC5hcHBJZCwgTGVhbnBsdW1SZXF1ZXN0LmNsaWVudEtleSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlNES19WRVJTSU9OLCBDb25zdGFudHMuU0RLX1ZFUlNJT04pXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5ERVZJQ0VfSUQsIExlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlVTRVJfSUQsIExlYW5wbHVtUmVxdWVzdC51c2VySWQpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5BQ1RJT04sIGFjdGlvbilcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlZFUlNJT05fTkFNRSwgTGVhbnBsdW1SZXF1ZXN0LnZlcnNpb25OYW1lKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuREVWX01PREUsIEludGVybmFsU3RhdGUuZGV2TW9kZSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlRJTUUsIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApLnRvU3RyaW5nKCkpXG5cbiAgICBpZiAoIUxlYW5wbHVtUmVxdWVzdC5hcHBJZCB8fCAhTGVhbnBsdW1SZXF1ZXN0LmNsaWVudEtleSkge1xuICAgICAgbGV0IGVyciA9ICdMZWFucGx1bSBBcHAgSUQgYW5kIGNsaWVudCBrZXkgYXJlIG5vdCBzZXQuIE1ha2Ugc3VyZSB5b3UgJyArXG4gICAgICAgICAgJ2FyZSBjYWxsaW5nIHNldEFwcElkRm9yRGV2ZWxvcG1lbnRNb2RlIG9yIHNldEFwcElkRm9yUHJvZHVjdGlvbk1vZGUgJyArXG4gICAgICAgICAgJ2JlZm9yZSBpc3N1aW5nIEFQSSBjYWxscy4nXG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpXG4gICAgfVxuXG4gICAgcmV0dXJuIGAke0xlYW5wbHVtUmVxdWVzdC5hcGlQYXRofT8ke2FyZ3NCdWlsZGVyLmJ1aWxkKCl9YFxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIG5ldHdvcmsgdGltZW91dC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgVGhlIHRpbWVvdXQgaW4gc2Vjb25kcy5cbiAgICovXG4gIHN0YXRpYyBzZXROZXR3b3JrVGltZW91dChzZWNvbmRzKSB7XG4gICAgTmV0d29yay5zZXROZXR3b3JrVGltZW91dChzZWNvbmRzKVxuICB9XG5cbiAgc3RhdGljIHNhdmVSZXF1ZXN0Rm9yTGF0ZXIoYXJncykge1xuICAgIGxldCBjb3VudCA9IExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkNPVU5UKSB8fCAwXG4gICAgbGV0IGl0ZW1LZXkgPSBDb25zdGFudHMuREVGQVVMVF9LRVlTLklURU0gKyBjb3VudFxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKGl0ZW1LZXksIEpTT04uc3RyaW5naWZ5KGFyZ3MpKVxuICAgIGNvdW50KytcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkNPVU5ULCBjb3VudClcbiAgfVxuXG4gIHN0YXRpYyBwb3BVbnNlbnRSZXF1ZXN0cygpIHtcbiAgICBsZXQgcmVxdWVzdERhdGEgPSBbXVxuICAgIGxldCBjb3VudCA9IExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkNPVU5UKSB8fCAwXG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5yZW1vdmVGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuQ09VTlQpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbUtleSA9IENvbnN0YW50cy5ERUZBVUxUX0tFWVMuSVRFTSArIGlcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCByZXF1ZXN0QXJncyA9IEpTT04ucGFyc2UoTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKGl0ZW1LZXkpKVxuICAgICAgICByZXF1ZXN0RGF0YS5wdXNoKHJlcXVlc3RBcmdzKVxuICAgICAgfSBjYXRjaCAoaWdub3JlZCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICAgIH1cbiAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIucmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShpdGVtS2V5KVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdERhdGFcbiAgfVxuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8gUmVzcG9uc2UgcGFyc2luZyAvLy8vLy8vLy8vLy8vLy8vLy9cblxuICBzdGF0aWMgbnVtUmVzcG9uc2VzKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UucmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZS5yZXNwb25zZS5sZW5ndGhcbiAgfVxuXG4gIHN0YXRpYyBnZXRSZXNwb25zZUF0KHJlc3BvbnNlLCBpbmRleCkge1xuICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLnJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UucmVzcG9uc2VbaW5kZXhdXG4gIH1cblxuICBzdGF0aWMgZ2V0TGFzdFJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgbGV0IGNvdW50ID0gTGVhbnBsdW1SZXF1ZXN0Lm51bVJlc3BvbnNlcyhyZXNwb25zZSlcbiAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICByZXR1cm4gTGVhbnBsdW1SZXF1ZXN0LmdldFJlc3BvbnNlQXQocmVzcG9uc2UsIGNvdW50IC0gMSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaXNSZXNwb25zZVN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuICEhcmVzcG9uc2Uuc3VjY2Vzc1xuICB9XG5cbiAgc3RhdGljIGdldFJlc3BvbnNlRXJyb3IocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBsZXQgZXJyb3IgPSByZXNwb25zZS5lcnJvclxuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBlcnJvci5tZXNzYWdlXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MZWFucGx1bVJlcXVlc3QuanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuXG5sZXQgbG9jYWxTdG9yYWdlRW5hYmxlZFxubGV0IGFsdGVybmF0ZUxvY2FsU3RvcmFnZSA9IHt9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsU3RvcmFnZU1hbmFnZXIge1xuICBzdGF0aWMgZ2V0RnJvbUxvY2FsU3RvcmFnZShrZXkpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBhbHRlcm5hdGVMb2NhbFN0b3JhZ2Vba2V5XVxuICAgIH1cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlW2tleV1cbiAgfVxuXG4gIHN0YXRpYyBzYXZlVG9Mb2NhbFN0b3JhZ2Uoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2VFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgYWx0ZXJuYXRlTG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Vba2V5XSA9IHZhbHVlXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9jYWxTdG9yYWdlRW5hYmxlZCA9IGZhbHNlXG4gICAgICBhbHRlcm5hdGVMb2NhbFN0b3JhZ2Vba2V5XSA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJlbW92ZUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZUVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICBkZWxldGUgYWx0ZXJuYXRlTG9jYWxTdG9yYWdlW2tleV1cbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZUVuYWJsZWQgPSBmYWxzZVxuICAgICAgZGVsZXRlIGFsdGVybmF0ZUxvY2FsU3RvcmFnZVtrZXldXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTG9jYWxTdG9yYWdlTWFuYWdlci5qcyIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19MaXN0Q2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJuYWxTdGF0ZSB7XG4gIHN0YXRpYyBkZXZNb2RlID0gZmFsc2VcblxuICBzdGF0aWMgdmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzID0gW11cbiAgc3RhdGljIGhhc1JlY2VpdmVkRGlmZnMgPSBmYWxzZVxuXG4gIHN0YXRpYyBzdGFydEhhbmRsZXJzID0gW11cbiAgc3RhdGljIGhhc1N0YXJ0ZWQgPSBmYWxzZVxuICBzdGF0aWMgc3RhcnRTdWNjZXNzZnVsID0gZmFsc2VcbiAgc3RhdGljIHZhcmlhbnREZWJ1Z0luZm9FbmFibGVkID0gZmFsc2VcblxuICBzdGF0aWMgYWRkU3RhcnRSZXNwb25zZUhhbmRsZXIoaGFuZGxlcikge1xuICAgIEludGVybmFsU3RhdGUuc3RhcnRIYW5kbGVycy5wdXNoKGhhbmRsZXIpXG4gICAgaWYgKEludGVybmFsU3RhdGUuaGFzU3RhcnRlZCkge1xuICAgICAgaGFuZGxlcihJbnRlcm5hbFN0YXRlLnN0YXJ0U3VjY2Vzc2Z1bClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlU3RhcnRSZXNwb25zZUhhbmRsZXIoaGFuZGxlcikge1xuICAgIGxldCBpZHggPSBJbnRlcm5hbFN0YXRlLnN0YXJ0SGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKVxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgSW50ZXJuYWxTdGF0ZS5zdGFydEhhbmRsZXJzLnNwbGljZShpZHgsIDEpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHRyaWdnZXJTdGFydEhhbmRsZXJzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgSW50ZXJuYWxTdGF0ZS5zdGFydEhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBJbnRlcm5hbFN0YXRlLnN0YXJ0SGFuZGxlcnNbaV0oSW50ZXJuYWxTdGF0ZS5zdGFydFN1Y2Nlc3NmdWwpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFkZFZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBJbnRlcm5hbFN0YXRlLnZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycy5wdXNoKGhhbmRsZXIpXG4gICAgaWYgKEludGVybmFsU3RhdGUuaGFzUmVjZWl2ZWREaWZmcykge1xuICAgICAgaGFuZGxlcigpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJlbW92ZVZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBsZXQgaWR4ID0gSW50ZXJuYWxTdGF0ZS52YXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKVxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgSW50ZXJuYWxTdGF0ZS52YXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSlcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdHJpZ2dlclZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEludGVybmFsU3RhdGUudmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIEludGVybmFsU3RhdGUudmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzW2ldKClcbiAgICAgIH1cbiAgfVxuXG4gICAgc3RhdGljIHNldFZhcmlhbnREZWJ1Z0luZm9FbmFibGVkKHZhcmlhbnREZWJ1Z0luZm9FbmFibGVkKSB7XG4gICAgSW50ZXJuYWxTdGF0ZS52YXJpYW50RGVidWdJbmZvRW5hYmxlZCA9IHZhcmlhbnREZWJ1Z0luZm9FbmFibGVkXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ludGVybmFsU3RhdGUuanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vQ29uc3RhbnRzJ1xuaW1wb3J0IEludGVybmFsU3RhdGUgZnJvbSAnLi9JbnRlcm5hbFN0YXRlJ1xuaW1wb3J0IEFyZ3NCdWlsZGVyIGZyb20gJy4vQXJnc0J1aWxkZXInXG5pbXBvcnQgTG9jYWxTdG9yYWdlTWFuYWdlciBmcm9tICcuL0xvY2FsU3RvcmFnZU1hbmFnZXInXG5pbXBvcnQgTGVhbnBsdW1SZXF1ZXN0IGZyb20gJy4vTGVhbnBsdW1SZXF1ZXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJDYWNoZSB7XG4gIHN0YXRpYyBkaWZmcyA9IHVuZGVmaW5lZFxuICBzdGF0aWMgdmFyaWFibGVzID0gbnVsbFxuICBzdGF0aWMgdmFyaWFudHMgPSBbXVxuICBzdGF0aWMgdmFyaWFudERlYnVnSW5mbyA9IHt9XG4gIHN0YXRpYyBtZXJnZWQgPSB1bmRlZmluZWRcbiAgc3RhdGljIG9uVXBkYXRlID0gdW5kZWZpbmVkXG4gIHN0YXRpYyB0b2tlbiA9ICcnXG4gIHN0YXRpYyBhY3Rpb25NZXRhZGF0YSA9IHt9XG4gIHN0YXRpYyBtZXNzYWdlc1ZpZXcgPSB1bmRlZmluZWRcbiAgc3RhdGljIG1lc3NhZ2VzVmlld1BlclNlc3Npb24gPSBbXVxuICBzdGF0aWMgbWVzc2FnZXNcblxuICBzdGF0aWMgYXBwbHlEaWZmcyhkaWZmcywgdmFyaWFudHMsIGFjdGlvbk1ldGFkYXRhKSB7XG4gICAgVmFyQ2FjaGUuZGlmZnMgPSBkaWZmc1xuICAgIFZhckNhY2hlLnZhcmlhbnRzID0gdmFyaWFudHNcbiAgICBWYXJDYWNoZS5hY3Rpb25NZXRhZGF0YSA9IGFjdGlvbk1ldGFkYXRhXG4gICAgSW50ZXJuYWxTdGF0ZS5oYXNSZWNlaXZlZERpZmZzID0gdHJ1ZVxuICAgIFZhckNhY2hlLm1lcmdlZCA9IFZhckNhY2hlLm1lcmdlSGVscGVyKFZhckNhY2hlLnZhcmlhYmxlcywgZGlmZnMpXG4gICAgVmFyQ2FjaGUuc2F2ZURpZmZzKClcbiAgICBpZiAoVmFyQ2FjaGUub25VcGRhdGUpIHtcbiAgICAgIFZhckNhY2hlLm9uVXBkYXRlKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbG9hZERpZmZzKCkge1xuICAgIHRyeSB7XG4gICAgICBWYXJDYWNoZS5hcHBseURpZmZzKFxuICAgICAgICAgIEpTT04ucGFyc2UoTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKFxuICAgICAgICAgICAgICBDb25zdGFudHMuREVGQVVMVF9LRVlTLlZBUklBQkxFUykgfHwgbnVsbCksXG4gICAgICAgICAgSlNPTi5wYXJzZShMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoXG4gICAgICAgICAgICAgIENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVkFSSUFOVFMpIHx8IG51bGwpLFxuICAgICAgICAgIEpTT04ucGFyc2UoTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKFxuICAgICAgICAgICAgICBDb25zdGFudHMuREVGQVVMVF9LRVlTLkFDVElPTl9NRVRBREFUQSkgfHwgbnVsbCkpXG4gICAgICBWYXJDYWNoZS50b2tlbiA9IExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlRPS0VOKVxuICAgICAgVmFyQ2FjaGUudmFyaWFudERlYnVnSW5mbyA9IExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlZBUklBTlRfREVCVUdfSU5GTylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgTGVhbnBsdW06IEludmFsaWQgZGlmZnM6ICR7ZX1gKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBzYXZlRGlmZnMoKSB7XG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoXG4gICAgICAgIENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVkFSSUFCTEVTLCBKU09OLnN0cmluZ2lmeShWYXJDYWNoZS5kaWZmcyB8fCB7fSkpXG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoXG4gICAgICAgIENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVkFSSUFOVFMsIEpTT04uc3RyaW5naWZ5KFZhckNhY2hlLnZhcmlhbnRzIHx8IFtdKVxuICAgIClcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkFDVElPTl9NRVRBREFUQSxcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoVmFyQ2FjaGUuYWN0aW9uTWV0YWRhdGEgfHwge30pKVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVkFSSUFOVF9ERUJVR19JTkZPLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShWYXJDYWNoZS52YXJpYW50RGVidWdJbmZvIHx8IHt9KSlcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlRPS0VOLCBWYXJDYWNoZS50b2tlbilcbiAgfVxuXG4gIC8qKlxuICAgKiByZWNvcmQgdmlldyBtZXNzYWdlIGluIGxvY2FsIHN0b3JhZ2UgYW5kICBpbiBtZW1vcnkgKGFrYSBzZXNzaW9uKVxuICAgKiBAcGFyYW0gbWVzc2FnZUlkXG4gICAqL1xuICBzdGF0aWMgYWRkTWVzc2FnZVZpZXcobWVzc2FnZUlkKXtcbiAgICBjb25zdCBtZXNzYWdlVmlldyA9IFZhckNhY2hlLmdldE1lc3NhZ2VzVmlldygpW21lc3NhZ2VJZF1cbiAgICBpZiAobWVzc2FnZVZpZXcgPT09IHVuZGVmaW5lZCl7XG4gICAgICBWYXJDYWNoZS5tZXNzYWdlc1ZpZXdbbWVzc2FnZUlkXSA9IFtdXG4gICAgfVxuICAgIGNvbnN0IG1lc3NhZ2VWaWV3UGVyU2Vzc2lvbiA9VmFyQ2FjaGUubWVzc2FnZXNWaWV3UGVyU2Vzc2lvblttZXNzYWdlSWRdIHx8IFtdXG5cbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgbWVzc2FnZVZpZXdQZXJTZXNzaW9uLnB1c2goe3Q6bm93fSlcbiAgICBWYXJDYWNoZS5tZXNzYWdlc1ZpZXdbbWVzc2FnZUlkXS5wdXNoKHt0Om5vd30pXG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5NRVNTQUdFX1ZJRVcsSlNPTi5zdHJpbmdpZnkoXG4gICAgICBWYXJDYWNoZS5tZXNzYWdlc1ZpZXcgfHwge30pKVxuICB9XG5cblxuXG4gIC8qKlxuICAgKiBnZXQgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBtZXNzYWdlVmlld3Mgd2l0aCBtZXNzYWdlSWQgYXMga2V5LCBwZXIgc2Vzc2lvbiBvciBmcm9tIHN0YXJ0XG4gICAqIEBwYXJhbSBzZXNzaW9uIHtCb29sZWFuIHwgdW5kZWZpbmVkfVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldE1lc3NhZ2VzVmlldyhzZXNzaW9uKXtcbiAgICBpZihzZXNzaW9uKXtcbiAgICAgIHJldHVybiBWYXJDYWNoZS5tZXNzYWdlc1ZpZXdQZXJTZXNzaW9uXG4gICAgfVxuICAgIGlmKFZhckNhY2hlLm1lc3NhZ2VzVmlldyA9PT0gdW5kZWZpbmVkKXtcbiAgICAgIFZhckNhY2hlLm1lc3NhZ2VzVmlldyA9IEpTT04ucGFyc2UoXG4gICAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLk1FU1NBR0VfVklFVykgfHwgJ3t9JylcbiAgICB9XG4gICAgcmV0dXJuIFZhckNhY2hlLm1lc3NhZ2VzVmlld1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBhbGwgdmlldyBmb3IgYSBnaXZlbiBtZXNzYWdlIGVpdGhlciBmb3JtIHRoZSBzdGFydCBvciBwZXIgc2Vzc2lvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZUlkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbiB8IHVuZGVmaW5lZH0gc2Vzc2lvblxuICAgKiBAcmV0dXJucyB7KnxBcnJheX1cbiAgICovXG4gIHN0YXRpYyBnZXRNZXNzYWdlVmlldyhtZXNzYWdlSWQsIHNlc3Npb24pe1xuICAgIHJldHVybiBWYXJDYWNoZS5nZXRNZXNzYWdlc1ZpZXcoc2Vzc2lvbilbbWVzc2FnZUlkXSB8fCBbXVxuICB9XG4gIHN0YXRpYyBzZXRWYXJpYWJsZXModmFyaWFibGVzKSB7XG4gICAgVmFyQ2FjaGUudmFyaWFibGVzID0gdmFyaWFibGVzXG4gIH1cblxuICBzdGF0aWMgZ2V0VmFyaWFibGVzKCkge1xuICAgIHJldHVybiBWYXJDYWNoZS5tZXJnZWQgIT09IHVuZGVmaW5lZCA/IFZhckNhY2hlLm1lcmdlZCA6IFZhckNhY2hlLnZhcmlhYmxlc1xuICB9XG5cbiAgc3RhdGljIGdldFZhcmlhbnREZWJ1Z0luZm8oKSB7XG4gICAgcmV0dXJuIFZhckNhY2hlLnZhcmlhbnREZWJ1Z0luZm9cbiAgfVxuXG4gIHN0YXRpYyBzZW5kVmFyaWFibGVzKCkge1xuICAgIGxldCBib2R5ID0ge31cbiAgICBib2R5W0NvbnN0YW50cy5QQVJBTVMuVkFSSUFCTEVTXSA9IFZhckNhY2hlLnZhcmlhYmxlc1xuICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlNFVF9WQVJTLFxuICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKS5ib2R5KEpTT04uc3RyaW5naWZ5KGJvZHkpKSwge1xuICAgICAgICAgIHNlbmROb3c6IHRydWVcbiAgICAgICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBnZXRNZXNzYWdlcygpIHtcbiAgICByZXR1cm4gVmFyQ2FjaGUubWVzc2FnZXNcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gbWVzc2FnZSB7IG1lc3NhZ2VJZDp7bWVzc2FnZX0sIH0gdG8gW3ttZXNzYWdlfV0gYW5kIHN0b3JlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlc1xuICAgKi9cbiAgc3RhdGljIHNldE1lc3NhZ2VzKG1lc3NhZ2VzKSB7XG4gICAgVmFyQ2FjaGUubWVzc2FnZXMgPSBPYmplY3QuZW50cmllcyhtZXNzYWdlcylcbiAgICAgICAgLm1hcCgoW2lkLCBtZXNzYWdlXSkgPT4gKHtpZCwgLi4ubWVzc2FnZX0pKVxuICB9XG5cbiAgICBzdGF0aWMgbWVyZ2VIZWxwZXIodmFycywgZGlmZikge1xuICAgIGlmICh0eXBlb2YgZGlmZiA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGRpZmYgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgZGlmZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBkaWZmXG4gICAgfVxuICAgIGlmIChkaWZmID09PSBudWxsIHx8IGRpZmYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHZhcnNcbiAgICB9XG5cbiAgICBsZXQgb2JqSXRlcmF0b3IgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihmKSB7XG4gICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmKG9ialtpXSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgIC8vIFRoaXMgc2VlbXMgdG8gYmUgYmVzdCBwcmFjdGljZTogaHR0cHM6Ly9naXRodWIuY29tL2VzbGludC9lc2xpbnQvaXNzdWVzLzcwNzFcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVmbGVjdFxuICAgICAgICAgICAgaWYgKHt9Lmhhc093blByb3BlcnR5LmNhbGwob2JqLCBhdHRyKSkge1xuICAgICAgICAgICAgICBmKGF0dHIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGxldCB2YXJzSXRlcmF0b3IgPSBvYmpJdGVyYXRvcih2YXJzKVxuICAgIGxldCBkaWZmSXRlcmF0b3IgPSBvYmpJdGVyYXRvcihkaWZmKVxuXG4gICAgLy8gSW5mZXIgdGhhdCB0aGUgZGlmZnMgaXMgYW4gYXJyYXkgaWYgdGhlIHZhcnMgdmFsdWUgZG9lc24ndCBleGlzdCB0byB0ZWxsIHVzIHRoZSB0eXBlLlxuICAgIGxldCBpc0FycmF5ID0gZmFsc2VcbiAgICBpZiAodmFycyA9PT0gbnVsbCkge1xuICAgICAgaWYgKCEoZGlmZiBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICBpc0FycmF5ID0gbnVsbFxuICAgICAgICBmb3IgKGxldCBhdHRyaWJ1dGUgaW4gZGlmZikge1xuICAgICAgICAgIGlmICghZGlmZi5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNBcnJheSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaXNBcnJheSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCEodHlwZW9mIGF0dHJpYnV0ZSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgICAgICBpc0FycmF5ID0gZmFsc2VcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhdHRyaWJ1dGUubGVuZ3RoIDwgMyB8fCBhdHRyaWJ1dGUuY2hhckF0KDApICE9PSAnWycgfHxcbiAgICAgICAgICAgICAgYXR0cmlidXRlLmNoYXJBdChhdHRyaWJ1dGUubGVuZ3RoIC0gMSkgIT09ICddJykge1xuICAgICAgICAgICAgaXNBcnJheSA9IGZhbHNlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgdmFyU3Vic2NyaXB0ID0gYXR0cmlidXRlLnN1YnN0cmluZygxLCBhdHRyaWJ1dGUubGVuZ3RoIC0gMSlcbiAgICAgICAgICBpZiAoIXBhcnNlSW50KHZhclN1YnNjcmlwdCkudG9TdHJpbmcoKSA9PT0gdmFyU3Vic2NyaXB0KSB7XG4gICAgICAgICAgICBpc0FycmF5ID0gZmFsc2VcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWVyZ2UgYXJyYXlzLlxuICAgIGlmICh2YXJzIGluc3RhbmNlb2YgQXJyYXkgfHwgaXNBcnJheSkge1xuICAgICAgbGV0IG1lcmdlZCA9IFtdXG4gICAgICB2YXJzSXRlcmF0b3IoZnVuY3Rpb24oYXR0cikge1xuICAgICAgICBtZXJnZWQucHVzaChhdHRyKVxuICAgICAgfSlcbiAgICAgIGRpZmZJdGVyYXRvcihmdW5jdGlvbih2YXJTdWJzY3JpcHQpIHtcbiAgICAgICAgbGV0IHN1YnNjcmlwdCA9XG4gICAgICAgICAgICBwYXJzZUludCh2YXJTdWJzY3JpcHQuc3Vic3RyaW5nKDEsIHZhclN1YnNjcmlwdC5sZW5ndGggLSAxKSlcbiAgICAgICAgbGV0IGRpZmZWYWx1ZSA9IGRpZmZbdmFyU3Vic2NyaXB0XVxuICAgICAgICB3aGlsZSAoc3Vic2NyaXB0ID49IG1lcmdlZC5sZW5ndGgpIHtcbiAgICAgICAgICBtZXJnZWQucHVzaChudWxsKVxuICAgICAgICB9XG4gICAgICAgIG1lcmdlZFtzdWJzY3JpcHRdID0gVmFyQ2FjaGUubWVyZ2VIZWxwZXIobWVyZ2VkW3N1YnNjcmlwdF0sIGRpZmZWYWx1ZSlcbiAgICAgIH0pXG4gICAgICByZXR1cm4gbWVyZ2VkXG4gICAgfVxuXG4gICAgLy8gTWVyZ2UgZGljdGlvbmFyaWVzLlxuICAgIGxldCBtZXJnZWQgPSB7fVxuICAgIHZhcnNJdGVyYXRvcihmdW5jdGlvbihhdHRyKSB7XG4gICAgICBpZiAoZGlmZlthdHRyXSA9PT0gbnVsbCB8fCBkaWZmW2F0dHJdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVyZ2VkW2F0dHJdID0gdmFyc1thdHRyXVxuICAgICAgfVxuICAgIH0pXG4gICAgZGlmZkl0ZXJhdG9yKGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgIG1lcmdlZFthdHRyXSA9IFZhckNhY2hlLm1lcmdlSGVscGVyKHZhcnMgIT09IG51bGwgPyB2YXJzW2F0dHJdIDogbnVsbCxcbiAgICAgICAgICBkaWZmW2F0dHJdKVxuICAgIH0pXG4gICAgcmV0dXJuIG1lcmdlZFxuICB9XG5cbiAgc3RhdGljIGNsZWFyVXNlckNvbnRlbnQoKSB7XG4gICAgVmFyQ2FjaGUuZGlmZnMgPSB1bmRlZmluZWRcbiAgICBWYXJDYWNoZS52YXJpYWJsZXMgPSBudWxsXG4gICAgVmFyQ2FjaGUudmFyaWFudHMgPSBbXVxuICAgIFZhckNhY2hlLnZhcmlhbnREZWJ1Z0luZm8gPSB7fVxuICAgIFZhckNhY2hlLm1lcmdlZCA9IHVuZGVmaW5lZFxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9WYXJDYWNoZS5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19NYXAuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbigpe1xuICB2YXIgdG9waWNzID0ge31cblxuICByZXR1cm4ge1xuICAgIHN1YnNjcmliZTogZnVuY3Rpb24odG9waWMsIGxpc3RlbmVyKSB7XG4gICAgICBpZighdG9waWNzLmhhc093blByb3BlcnR5LmNhbGwodG9waWNzLCB0b3BpYykpIHRvcGljc1t0b3BpY10gPSBbXVxuXG4gICAgICB2YXIgaW5kZXggPSB0b3BpY3NbdG9waWNdLnB1c2gobGlzdGVuZXIpIC0gMVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGRlbGV0ZSB0b3BpY3NbdG9waWNdW2luZGV4XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBwdWJsaXNoOiBmdW5jdGlvbih0b3BpYywgaW5mbykge1xuICAgICAgaWYoIXRvcGljcy5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRvcGljcywgdG9waWMpKSByZXR1cm5cblxuICAgICAgdG9waWNzW3RvcGljXS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaXRlbShpbmZvICE9IHVuZGVmaW5lZCA/IGluZm8gOiB7fSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KSgpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRXZlbnRzLmpzIiwiLyoqXG4gKiBBamF4IGZ1bmN0aW9ucyBmcm9tOlxuICpcbiAqIFBhcnNlIEphdmFTY3JpcHQgU0RLXG4gKiBWZXJzaW9uOiAxLjEuNVxuICogQnVpbHQ6IE1vbiBPY3QgMDEgMjAxMiAxNzo1NzoxM1xuICogaHR0cDovL3BhcnNlLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDEyIFBhcnNlLCBJbmMuXG4gKiBUaGUgUGFyc2UgSmF2YVNjcmlwdCBTREsgaXMgZnJlZWx5IGRpc3RyaWJ1dGFibGUgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmxldCByZXF1ZXN0UXVldWUgPSBbXVxubGV0IG5ldHdvcmtUaW1lb3V0U2Vjb25kcyA9IDEwXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldHdvcmsge1xuICAvKipcbiAgICogU2V0cyB0aGUgbmV0d29yayB0aW1lb3V0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Vjb25kcyBUaGUgdGltZW91dCBpbiBzZWNvbmRzLlxuICAgKi9cbiAgc3RhdGljIHNldE5ldHdvcmtUaW1lb3V0KHNlY29uZHMpIHtcbiAgICBuZXR3b3JrVGltZW91dFNlY29uZHMgPSBzZWNvbmRzXG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhbiBhamF4IHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgVGhlIGh0dHAgbWV0aG9kLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gb3Blbi5cbiAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXlCdWZmZXJ8QmxvYnxEb2N1bWVudHxGb3JtRGF0YX0gZGF0YSBUaGUgZGF0YSB0byBiZSBzZW50IGluIGJvZHkuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1Y2Nlc3MgQSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gc3VjY2Vzcy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZXJyb3IgQSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gZXJyb3IuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcXVldWVkIFdoZXRoZXIgdGhlIHJlcXVlc3Qgc2hvdWxkIGJlIHF1ZXVlZCBvciBpbW1lZGlhdGVseSBzZW50LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtwbGFpblRleHRdIFdoZXRoZXIgdGhlIHJlc3BvbnNlIHNob3VsZCBiZSByZXR1cm5lZCBhcyBwbGFpbiB0ZXh0IG9yIGpzb24uXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBzdGF0aWMgYWpheChtZXRob2QsIHVybCwgZGF0YSwgc3VjY2VzcywgZXJyb3IsIHF1ZXVlZCwgcGxhaW5UZXh0KSB7XG4gICAgaWYgKHF1ZXVlZCkge1xuICAgICAgaWYgKE5ldHdvcmsucnVubmluZ1JlcXVlc3QpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgICByZXR1cm4gTmV0d29yay5lbnF1ZXVlUmVxdWVzdChhcmd1bWVudHMpXG4gICAgICB9XG4gICAgICBOZXR3b3JrLnJ1bm5pbmdSZXF1ZXN0ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8qKiBAbmFtZXNwYWNlIFhEb21haW5SZXF1ZXN0ICoqL1xuICAgIC8qKiBAbmFtZXNwYWNlIGxvY2F0aW9uICoqL1xuICAgIGlmICh0eXBlb2YgWERvbWFpblJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAobG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwOicgJiYgdXJsLmluZGV4T2YoJ2h0dHBzOicpID09PSAwKSB7XG4gICAgICAgIHVybCA9IGBodHRwOiR7dXJsLnN1YnN0cmluZyg2KX1gXG4gICAgICB9XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgICByZXR1cm4gUmVmbGVjdC5hcHBseShOZXR3b3JrLmFqYXhJRTgsIG51bGwsIGFyZ3VtZW50cylcbiAgICB9XG5cbiAgICBsZXQgaGFuZGxlZCA9IGZhbHNlXG5cbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBoYW5kbGVkID0gdHJ1ZVxuXG4gICAgICAgIGxldCByZXNwb25zZVxuICAgICAgICBsZXQgcmFuQ2FsbGJhY2sgPSBmYWxzZVxuICAgICAgICBpZiAocGxhaW5UZXh0KSB7XG4gICAgICAgICAgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGVycm9yKG51bGwsIHhocilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMClcbiAgICAgICAgICAgIHJhbkNhbGxiYWNrID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmFuQ2FsbGJhY2spIHtcbiAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3BvbnNlLCB4aHIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDApXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGVycm9yKHJlc3BvbnNlLCB4aHIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHF1ZXVlZCkge1xuICAgICAgICAgIE5ldHdvcmsucnVubmluZ1JlcXVlc3QgPSBmYWxzZVxuICAgICAgICAgIE5ldHdvcmsuZGVxdWV1ZVJlcXVlc3QoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKVxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9wbGFpbicpIC8vIEF2b2lkIHByZS1mbGlnaHQuXG4gICAgeGhyLnNlbmQoZGF0YSlcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFoYW5kbGVkKSB7XG4gICAgICAgIHhoci5hYm9ydCgpXG4gICAgICB9XG4gICAgfSwgbmV0d29ya1RpbWVvdXRTZWNvbmRzICogMTAwMClcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGFuIGFqYXggcmVxdWVzdCBmb3IgSUU4LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIFRoZSBodHRwIG1ldGhvZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIG9wZW4uXG4gICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5QnVmZmVyfEJsb2J8RG9jdW1lbnR8Rm9ybURhdGF9IGRhdGEgVGhlIGRhdGEgdG8gYmUgc2VudCBpbiBib2R5LlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdWNjZXNzIEEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIHN1Y2Nlc3MuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGVycm9yIEEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGVycm9yLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHF1ZXVlZCBXaGV0aGVyIHRoZSByZXF1ZXN0IHNob3VsZCBiZSBxdWV1ZWQgb3IgaW1tZWRpYXRlbHkgc2VudC5cbiAgICogQHBhcmFtIHtib29sZWFufSBwbGFpblRleHQgV2hldGhlciB0aGUgcmVzcG9uc2Ugc2hvdWxkIGJlIHJldHVybmVkIGFzIHBsYWluIHRleHQgb3IganNvbi5cbiAgICovXG4gIHN0YXRpYyBhamF4SUU4KG1ldGhvZCwgdXJsLCBkYXRhLCBzdWNjZXNzLCBlcnJvciwgcXVldWVkLCBwbGFpblRleHQpIHtcbiAgICBsZXQgeGRyID0gbmV3IFhEb21haW5SZXF1ZXN0KClcbiAgICB4ZHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgcmVzcG9uc2VcbiAgICAgIGxldCByYW5DYWxsYmFjayA9IGZhbHNlXG4gICAgICBpZiAocGxhaW5UZXh0KSB7XG4gICAgICAgIHJlc3BvbnNlID0geGRyLnJlc3BvbnNlVGV4dFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UoeGRyLnJlc3BvbnNlVGV4dClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgZXJyb3IobnVsbCwgeGRyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDApXG4gICAgICAgICAgcmFuQ2FsbGJhY2sgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghcmFuQ2FsbGJhY2spIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgc3VjY2VzcyhyZXNwb25zZSwgeGRyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgMClcbiAgICAgIH1cbiAgICAgIGlmIChxdWV1ZWQpIHtcbiAgICAgICAgTmV0d29yay5ydW5uaW5nUmVxdWVzdCA9IGZhbHNlXG4gICAgICAgIE5ldHdvcmsuZGVxdWV1ZVJlcXVlc3QoKVxuICAgICAgfVxuICAgIH1cbiAgICB4ZHIub25lcnJvciA9IHhkci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGVycm9yKG51bGwsIHhkcilcbiAgICAgICAgfVxuICAgICAgfSwgMClcbiAgICAgIGlmIChxdWV1ZWQpIHtcbiAgICAgICAgTmV0d29yay5ydW5uaW5nUmVxdWVzdCA9IGZhbHNlXG4gICAgICAgIE5ldHdvcmsuZGVxdWV1ZVJlcXVlc3QoKVxuICAgICAgfVxuICAgIH1cbiAgICB4ZHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xuICAgIH1cbiAgICB4ZHIub3BlbihtZXRob2QsIHVybClcbiAgICB4ZHIudGltZW91dCA9IG5ldHdvcmtUaW1lb3V0U2Vjb25kcyAqIDEwMDBcbiAgICB4ZHIuc2VuZChkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIHJlcXVlc3QgdG8gdGhlIHJlcXVlc3QgcXVldWUuXG4gICAqIEBwYXJhbSB7QXJndW1lbnRzfSByZXF1ZXN0QXJndW1lbnRzIFRoZSByZXF1ZXN0IGFyZ3VtZW50cyBmcm9tIHRoZSBpbml0aWFsIG1ldGhvZCBjYWxsLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3RhdGljIGVucXVldWVSZXF1ZXN0KHJlcXVlc3RBcmd1bWVudHMpIHtcbiAgICByZXF1ZXN0UXVldWUucHVzaChyZXF1ZXN0QXJndW1lbnRzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIHJlcXVlc3QgZnJvbSB0aGUgcmVxdWVzdCBxdWV1ZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXRpYyBkZXF1ZXVlUmVxdWVzdCgpIHtcbiAgICBsZXQgYXJncyA9IHJlcXVlc3RRdWV1ZS5zaGlmdCgpXG4gICAgaWYgKGFyZ3MpIHtcbiAgICAgIFJlZmxlY3QuYXBwbHkoTmV0d29yay5hamF4LCBudWxsLCBhcmdzKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL05ldHdvcmsuanMiLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTWFwQ2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlTb21lID0gcmVxdWlyZSgnLi9fYXJyYXlTb21lJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBhcnJheXMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBvdGhlciBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgYXJyYXlgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFycmF5cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEFycmF5cyhhcnJheSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IG90aGVyLmxlbmd0aDtcblxuICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzUGFydGlhbCAmJiBvdGhMZW5ndGggPiBhcnJMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQoYXJyYXkpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgc2VlbiA9IChiaXRtYXNrICYgQ09NUEFSRV9VTk9SREVSRURfRkxBRykgPyBuZXcgU2V0Q2FjaGUgOiB1bmRlZmluZWQ7XG5cbiAgc3RhY2suc2V0KGFycmF5LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgYXJyYXkpO1xuXG4gIC8vIElnbm9yZSBub24taW5kZXggcHJvcGVydGllcy5cbiAgd2hpbGUgKCsraW5kZXggPCBhcnJMZW5ndGgpIHtcbiAgICB2YXIgYXJyVmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJbaW5kZXhdO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIGFyclZhbHVlLCBpbmRleCwgb3RoZXIsIGFycmF5LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKGFyclZhbHVlLCBvdGhWYWx1ZSwgaW5kZXgsIGFycmF5LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICBpZiAoY29tcGFyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGNvbXBhcmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoc2Vlbikge1xuICAgICAgaWYgKCFhcnJheVNvbWUob3RoZXIsIGZ1bmN0aW9uKG90aFZhbHVlLCBvdGhJbmRleCkge1xuICAgICAgICAgICAgaWYgKCFjYWNoZUhhcyhzZWVuLCBvdGhJbmRleCkgJiZcbiAgICAgICAgICAgICAgICAoYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlZW4ucHVzaChvdGhJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShcbiAgICAgICAgICBhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHxcbiAgICAgICAgICAgIGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10oYXJyYXkpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQXJyYXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3RvU291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvZXEuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNCdWZmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyk7XG5cbi8qKlxuICogUGVyZm9ybXMgYSBkZWVwIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZVxuICogZXF1aXZhbGVudC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2Qgc3VwcG9ydHMgY29tcGFyaW5nIGFycmF5cywgYXJyYXkgYnVmZmVycywgYm9vbGVhbnMsXG4gKiBkYXRlIG9iamVjdHMsIGVycm9yIG9iamVjdHMsIG1hcHMsIG51bWJlcnMsIGBPYmplY3RgIG9iamVjdHMsIHJlZ2V4ZXMsXG4gKiBzZXRzLCBzdHJpbmdzLCBzeW1ib2xzLCBhbmQgdHlwZWQgYXJyYXlzLiBgT2JqZWN0YCBvYmplY3RzIGFyZSBjb21wYXJlZFxuICogYnkgdGhlaXIgb3duLCBub3QgaW5oZXJpdGVkLCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuIEZ1bmN0aW9ucyBhbmQgRE9NXG4gKiBub2RlcyBhcmUgY29tcGFyZWQgYnkgc3RyaWN0IGVxdWFsaXR5LCBpLmUuIGA9PT1gLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmlzRXF1YWwob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogb2JqZWN0ID09PSBvdGhlcjtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRXF1YWwodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRXF1YWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzRXF1YWwuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzRnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNMZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc09iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEhhbmRsZXMgSW4tYXBwIG1lc3NhZ2UgZmlsdGVyaW5nXG4gKi9cbmltcG9ydCBWYXJDYWNoZSBmcm9tICcuL1ZhckNhY2hlJ1xuXG4vKiogcHJpdmF0ZVxuICogcmV0dXJuIHRydWUgaWYgbWVzc2FnZSBwYXNzIG9uZSB0cmlnZ2VyL3ZlcmIgY29uZGl0aW9uXG4gKiBpZiBubyB0cmlnZ2VyLCByZXR1cm4gZmFsc2UgYXMgaW4gYW5kcm9pZFxuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtc1xuICogLy8gQHBhcmFtIHtvYmplY3R9IG1lc3NhZ2VcbiAqIC8vIEBwYXJhbSB7b2JqZWN0P30gbWVzc2FnZS53aGVuVHJpZ2dlcnNcbiAqIEByZXR1cm4ge2Z1bmN0aW9uKHtvYmplY3R9KTp7Ym9vbGVhbn19XG4gKi9cbmNvbnN0IGZpbHRlckJ5VHJpZ2dlcnMgPSAocGFyYW1zPXt9KSA9PiAobWVzc2FnZSkgPT4ge1xuICBjb25zdCB0cmlnZ2VycyA9IG1lc3NhZ2Uud2hlblRyaWdnZXJzICYmIG1lc3NhZ2Uud2hlblRyaWdnZXJzLmNoaWxkcmVuXG4gIGlmKCFwYXJhbXMudHJpZ2dlcnMgfHwgIXRyaWdnZXJzKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBsZXQgZmlsdGVyZWRCeVRyaWdnZXJzID0gdHJpZ2dlcnMuZmlsdGVyKCh0cmlnZ2VyKSA9PiAoXG4gICAgcGFyYW1zLnRyaWdnZXJzLmluY2x1ZGVzKHRyaWdnZXIuc3ViamVjdCkpXG4gIClcblxuICBpZiAoIWZpbHRlcmVkQnlUcmlnZ2Vycy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBjb25zdCB2ZXJiRmlsdGVyID0gZmlsdGVyQnlWZXJicyhwYXJhbXMpXG4gIGlmKCF2ZXJiRmlsdGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgZmlsdGVyZWRCeVRyaWdnZXJzID0gZmlsdGVyZWRCeVRyaWdnZXJzLmZpbHRlcih2ZXJiRmlsdGVyKVxuXG4gIHJldHVybiBmaWx0ZXJlZEJ5VHJpZ2dlcnMubGVuZ3RoXG59XG5cbi8qKiBwcml2YXRlXG4gKiByZXR1cm4gdHJ1ZSBpZiB0cmlnZ2VyIHBhc3MgdmVyYi9ub3VuL29iamVjdHMgY29uZGl0aW9uXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zXG4gKiAvLyBAcGFyYW0ge29iamVjdH0gdHJpZ2dlclxuICogLy8gQHBhcmFtIHtzdHJpbmd9IHRyaWdnZXIudmVyYlxuICogQHJldHVybiB7ZnVuY3Rpb24oe29iamVjdH0pOntib29sZWFufX1cbiAqL1xuY29uc3QgZmlsdGVyQnlWZXJicyA9IChwYXJhbXMpID0+ICh0cmlnZ2VyKSA9PiB7XG4gIGlmKHRyaWdnZXIudmVyYiA9PT0gJycpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGNvbnN0IGV2YWx1YXRvciA9IHRyaWdnZXJWZXJiRXZhbHVhdG9yc1t0cmlnZ2VyLnZlcmJdXG4gIHJldHVybiBldmFsdWF0b3IodHJpZ2dlciwgcGFyYW1zLm5vdW4sIHBhcmFtcy5vYmplY3RzKVxufVxuXG4vKiogcHJpdmF0ZVxuICogcmV0dXJuIHRydWUgaWYgbWVzc2FnZSBwYXNzIGFsbCBsaW1pdHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBub3dcbiAqIC8vIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlXG4gKiBAcmV0dXJuIHtmdW5jdGlvbih7b2JqZWN0fSk6e2Jvb2xlYW59fVxuICovXG5jb25zdCBmaWx0ZXJCeUxpbWl0cyA9IChub3cpID0+IChtZXNzYWdlKSA9PiB7XG4gIGNvbnN0IGxpbWl0cyA9IG1lc3NhZ2Uud2hlbkxpbWl0cyAmJiBtZXNzYWdlLndoZW5MaW1pdHMuY2hpbGRyZW5cbiAgaWYoIWxpbWl0cyB8fCBsaW1pdHMubGVuZ3RoIDwgMSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIGxpbWl0cy5ldmVyeSgobGltaXQpID0+IHtcbiAgICAgIGNvbnN0IHZlcmJFdmFsdWF0b3IgPSBsaW1pdFZlcmJFdmFsdWF0b3JzW2xpbWl0LnZlcmJdXG4gICAgICBpZiAoIXZlcmJFdmFsdWF0b3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICByZXR1cm4gdmVyYkV2YWx1YXRvcihtZXNzYWdlLmlkLCBsaW1pdC5ub3VuLCBsaW1pdC5vYmplY3RzWzBdLCBub3cpXG4gICAgfVxuICApXG59XG5cbi8qKiBwcml2YXRlXG4gKiByZXR1cm4gdGhlIGFtb3VudCBvZiBvY2N1cmVuY2Ugb2YgbWVzc2FnZVZpZXcgc2luY2UgJ3NpbmNlJ1xuICogQHBhcmFtIHtudW1iZXJ9IHNpbmNlXG4gKiAvLyBAcGFyYW0ge09iamVjdH0gbWVzc2FnZVZpZXdcbiAqIC8vIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlVmlldy50XG4gKiBAcmV0dXJuIHtmdW5jdGlvbih7bnVtYmVyfSwge29iamVjdH0pOiB7bnVtYmVyfX1cbiAqL1xuY29uc3QgY291bnRNZXNzYWdlVmlld3NCeUxpbWl0ID0gKHNpbmNlKSA9PiAoaXRlcmF0b3IsIG1lc3NhZ2VWaWV3KSA9PiB7XG4gIGlmKG1lc3NhZ2VWaWV3LnQgPiBzaW5jZSkge1xuICAgIGl0ZXJhdG9yKz0xXG4gIH1cbiAgcmV0dXJuIGl0ZXJhdG9yXG59XG4vKiogcHJpdmF0ZVxuICogcmV0dXJuIHRydWUgaWYgbm8gbGltaXRzIGFyZSBkZWZpbmVkIG9yIGlmIG5vdyBpcyBpbiB0aGUgcmFuZ2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBub3dcbiAqIC8vIEBwYXJhbSB7b2JqZWN0fSBsaW1pdFRpbWVcbiAqIC8vIEBwYXJhbSB7b2JqZWN0P30gbGltaXRUaW1lLnN0YXJ0VGltZVxuICogLy8gQHBhcmFtIHtvYmplY3Q/fSBsaW1pdFRpbWUuZW5kVGltZVxuICogQHJldHVybiB7ZnVuY3Rpb24oIHtvYmplY3R9KTp7Qm9vbGVhbn19XG4gKi9cbmNvbnN0IGZpbHRlckJ5TGltaXRUaW1lcyA9IChub3cpID0+IChsaW1pdFRpbWUpID0+IHtcbiAgcmV0dXJuICghbGltaXRUaW1lLnN0YXJ0VGltZSB8fCBsaW1pdFRpbWUuc3RhcnRUaW1lIDwgbm93KSAmJlxuICAgICghbGltaXRUaW1lLmVuZFRpbWUgfHwgbGltaXRUaW1lLmVuZFRpbWUgPiBub3cgKVxufVxuXG4vKiogcHJpdmF0ZVxuICogcHJvdmlkZSBldmFsdWF0b3JzIGZvciBmaWx0ZXJCeVZlcmJzXG4gKi9cbmNvbnN0IHRyaWdnZXJWZXJiRXZhbHVhdG9ycyA9IHtcbiAgdHJpZ2dlcnM6ICh0cmlnZ2VyLCBub3VuKSA9PiB7XG4gICAgcmV0dXJuIG5vdW4gPT09IHRyaWdnZXIubm91blxuICB9LFxuICB0cmlnZ2Vyc1dpdGhQYXJhbWV0ZXI6ICh0cmlnZ2VyLCBub3VuLCBwYXJhbXMgPSB7fSkgPT4ge1xuICAgIC8vIHJldHVybiBub3VuID09PSB0cmlnZ2VyLm5vdW4gJiYgcGFyYW1zLnBhcmFtVmFsdWUgPT09IHRyaWdnZXIub2JqZWN0c1twYXJhbXMucGFyYW1OYW1lXVxuICAgIHJldHVybiBub3VuID09PSB0cmlnZ2VyLm5vdW4gJiZcbiAgICAgIHBhcmFtcy5wYXJhbU5hbWUgPT09IHRyaWdnZXIub2JqZWN0c1swXSAmJlxuICAgICAgcGFyYW1zLnBhcmFtVmFsdWUgPT09IHRyaWdnZXIub2JqZWN0c1sxXVxuICB9LFxuICBjaGFuZ2VzVG86ICh0cmlnZ2VyLCBub3VuLCBwYXJhbXMgPSB7fSkgPT4ge1xuICAgIHJldHVybiBub3VuID09PSB0cmlnZ2VyLm5vdW4gJiYgcGFyYW1zLnRvID09PSB0cmlnZ2VyLm9iamVjdHNbMF1cbiAgfSxcbiAgY2hhbmdlc0Zyb21UbzogKHRyaWdnZXIsIG5vdW4sIHBhcmFtcyA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIG5vdW4gPT09IHRyaWdnZXIubm91biAmJlxuICAgICAgcGFyYW1zLmZyb20gPT09IHRyaWdnZXIub2JqZWN0c1swXSAmJlxuICAgICAgcGFyYW1zLnRvID09PSB0cmlnZ2VyLm9iamVjdHNbMV1cbiAgfVxufVxuXG4vKiogcHJpdmF0ZVxuICogcHJvdmlkZSBldmFsdWF0b3JzIGZvciBmaWx0ZXJCeUxpbWl0XG4gKi9cbmNvbnN0IGxpbWl0VmVyYkV2YWx1YXRvcnMgPSB7XG4gIGxpbWl0VXNlcjogKG1lc3NhZ2VJZCwgbWF4VmlldykgPT4ge1xuICAgIHJldHVybiBWYXJDYWNoZS5nZXRNZXNzYWdlVmlldyhtZXNzYWdlSWQpLmxlbmd0aCA8IG1heFZpZXdcbiAgfSxcbiAgbGltaXRNb250aDogKG1lc3NhZ2VJZCwgbWF4VmlldywgYW1vdW50LCBub3cpID0+IHtcbiAgICBjb25zdCBzaW5jZSA9IG5vdyAtIGFtb3VudCAqIDMwICogMjQgKiA2MCAqIDYwICogMTAwMFxuICAgIHJldHVybiBWYXJDYWNoZS5nZXRNZXNzYWdlVmlldyhtZXNzYWdlSWQpXG4gICAgICAucmVkdWNlKCBjb3VudE1lc3NhZ2VWaWV3c0J5TGltaXQoc2luY2UpLCAwKSA8IG1heFZpZXdcbiAgfSxcbiAgbGltaXRXZWVrOiAobWVzc2FnZUlkLCBtYXhWaWV3LCBhbW91bnQsIG5vdykgPT4ge1xuICAgIGNvbnN0IHNpbmNlID0gbm93IC0gYW1vdW50ICogNyAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0TWVzc2FnZVZpZXcobWVzc2FnZUlkKVxuICAgICAgLnJlZHVjZSggY291bnRNZXNzYWdlVmlld3NCeUxpbWl0KHNpbmNlKSwgMCkgPCBtYXhWaWV3XG4gIH0sXG4gIGxpbWl0RGF5OiAobWVzc2FnZUlkLCBtYXhWaWV3LCBhbW91bnQsIG5vdykgPT4ge1xuICAgIGNvbnN0IHNpbmNlID0gbm93IC0gYW1vdW50ICogMjQgKiA2MCAqIDYwICogMTAwMFxuICAgIHJldHVybiBWYXJDYWNoZS5nZXRNZXNzYWdlVmlldyhtZXNzYWdlSWQpXG4gICAgICAucmVkdWNlKCBjb3VudE1lc3NhZ2VWaWV3c0J5TGltaXQoc2luY2UpLCAwKSA8IG1heFZpZXdcbiAgfSxcbiAgbGltaXRIb3VyOiAobWVzc2FnZUlkLCBtYXhWaWV3LCBhbW91bnQsIG5vdykgPT4ge1xuICAgIGNvbnN0IHNpbmNlID0gbm93IC0gYW1vdW50ICogNjAgKiA2MCAqIDEwMDBcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0TWVzc2FnZVZpZXcobWVzc2FnZUlkKVxuICAgICAgLnJlZHVjZSggY291bnRNZXNzYWdlVmlld3NCeUxpbWl0KHNpbmNlKSwgMCkgPCBtYXhWaWV3XG4gIH0sXG4gIGxpbWl0TWludXRlOiAobWVzc2FnZUlkLCBtYXhWaWV3LCBhbW91bnQsIG5vdykgPT4ge1xuICAgIGNvbnN0IHNpbmNlID0gbm93IC0gYW1vdW50ICogNjAgKiAxMDAwXG4gICAgcmV0dXJuIFZhckNhY2hlLmdldE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZClcbiAgICAgIC5yZWR1Y2UoIGNvdW50TWVzc2FnZVZpZXdzQnlMaW1pdChzaW5jZSksIDApIDwgbWF4Vmlld1xuICB9LFxuICBsaW1pdFNlY29uZDogKG1lc3NhZ2VJZCwgbWF4VmlldywgYW1vdW50LCBub3cpID0+IHtcbiAgICBjb25zdCBzaW5jZSA9IG5vdyAtIGFtb3VudCAqIDEwMDBcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0TWVzc2FnZVZpZXcobWVzc2FnZUlkKVxuICAgICAgLnJlZHVjZSggY291bnRNZXNzYWdlVmlld3NCeUxpbWl0KHNpbmNlKSwgMCkgPCBtYXhWaWV3XG4gIH0sXG4gIGxpbWl0U2Vzc2lvbjogKG1lc3NhZ2VJZCwgbWF4VmlldykgPT4ge1xuICAgIHJldHVybiBWYXJDYWNoZS5nZXRNZXNzYWdlVmlldyhtZXNzYWdlSWQsIHRydWUpLmxlbmd0aCA8IG1heFZpZXdcbiAgfSxcbn1cbi8qKlxuICogUHJvdmlkZSBmaWx0ZXJpbmcgbG9naWMgZm9yIG1lc3NhZ2VzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbk1hbmFnZXIge1xuXG4gIC8qKiBwdWJsaWNcbiAgICogcmV0dXJuIGFuIGFycmF5IG9mIGZpbHRlcmVkIG1lc3NhZ2Ugb3JkZXJlZCBieSBwcmlvcml0eVxuICAgKiBAcGFyYW0ge2FycmF5fSBtZXNzYWdlc1xuICAgKiBAcGFyYW0ge3N0cmluZyB8IHN0cmluZ1tdIHwgP30gdHJpZ2dlcnNcbiAgICogQHBhcmFtIHtzdHJpbmc/fSB2ZXJiXG4gICAqIEBwYXJhbSB7c3RyaW5nP30gbm91blxuICAgKiBAcGFyYW0ge29iamVjdD99IHBhcmFtc1xuICAgKiBAcGFyYW0ge3N0cmluZz99IHBhcmFtcy5mcm9tXG4gICAqIEBwYXJhbSB7c3RyaW5nP30gcGFyYW1zLnRvXG4gICAqIEBwYXJhbSB7c3RyaW5nP30gcGFyYW1zLnBhcmFtVmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmc/fSBwYXJhbXMucGFyYW1OYW1lXG4gICAqIEByZXR1cm4ge2FycmF5fVxuICAgKi9cbiAgc3RhdGljIGZpbHRlck1lc3NhZ2VzKG1lc3NhZ2VzLCB0cmlnZ2Vycz0nJywgdmVyYiwgbm91biwgcGFyYW1zKSB7XG4gICAgaWYoIUFycmF5LmlzQXJyYXkodHJpZ2dlcnMpKSB7XG4gICAgICB0cmlnZ2VycyA9IFt0cmlnZ2Vyc11cbiAgICB9XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBtZXNzYWdlcy5maWx0ZXIoZmlsdGVyQnlUcmlnZ2VycyhcbiAgICAgICAge1xuICAgICAgICAgIHRyaWdnZXJzOiB0cmlnZ2VycyxcbiAgICAgICAgICB2ZXJiOiB2ZXJiLFxuICAgICAgICAgIG5vdW46IG5vdW4sXG4gICAgICAgICAgb2JqZWN0czogcGFyYW1zXG4gICAgICAgIH1cbiAgICAgICkpXG4gICAgICAuZmlsdGVyKGZpbHRlckJ5TGltaXRzKG5vdykpXG4gICAgICAuZmlsdGVyKGZpbHRlckJ5TGltaXRUaW1lcyhub3cpKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEucHJpb3JpdHkgLSBiLnByaW9yaXR5KVxuICB9XG5cbiAgLyoqIHB1YmxpY1xuICAgKiByZXR1cm4gYW4gYXJyYXkgb2YgbWVzc2FnZXMgZmlsdGVyIGJ5IGlkIGFuZCBhbmQgbGltaXRcbiAgICogQHBhcmFtcyB7c3RyaW5nfSBtZXNzYWdlSWRcbiAgICogQHBhcmFtcyB7bWVzc2FnZVtdfSBtZXNzYWdlc1xuICAgKi9cbiAgc3RhdGljIGZpbHRlck1lc3NhZ2VzQnlJZChtZXNzYWdlcywgbWVzc2FnZUlkKXtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIG1lc3NhZ2VzLmZpbHRlcigobWVzc2FnZSkgPT4gbWVzc2FnZUlkID09PSBtZXNzYWdlLmlkKVxuICAgICAgLmZpbHRlcihmaWx0ZXJCeUxpbWl0cyhub3cpKVxuICAgICAgLmZpbHRlcihmaWx0ZXJCeUxpbWl0VGltZXMobm93KSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FjdGlvbk1hbmFnZXIuanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuY29uc3QgZGF0YUJyb3dzZXIgPSBbe1xuICBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIHN1YlN0cmluZzogJ0Nocm9tZScsXG4gIGlkZW50aXR5OiAnQ2hyb21lJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIHN1YlN0cmluZzogJ09tbmlXZWInLFxuICB2ZXJzaW9uU2VhcmNoOiAnT21uaVdlYi8nLFxuICBpZGVudGl0eTogJ09tbmlXZWInXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnZlbmRvcixcbiAgc3ViU3RyaW5nOiAnQXBwbGUnLFxuICBpZGVudGl0eTogJ1NhZmFyaScsXG4gIHZlcnNpb25TZWFyY2g6ICdWZXJzaW9uJ1xufSwge1xuICBwcm9wOiB3aW5kb3cub3BlcmEsXG4gIGlkZW50aXR5OiAnT3BlcmEnLFxuICB2ZXJzaW9uU2VhcmNoOiAnVmVyc2lvbidcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudmVuZG9yLFxuICBzdWJTdHJpbmc6ICdpQ2FiJyxcbiAgaWRlbnRpdHk6ICdpQ2FiJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci52ZW5kb3IsXG4gIHN1YlN0cmluZzogJ0tERScsXG4gIGlkZW50aXR5OiAnS29ucXVlcm9yJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIHN1YlN0cmluZzogJ0ZpcmVmb3gnLFxuICBpZGVudGl0eTogJ0ZpcmVmb3gnXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnZlbmRvcixcbiAgc3ViU3RyaW5nOiAnQ2FtaW5vJyxcbiAgaWRlbnRpdHk6ICdDYW1pbm8nXG59LCB7IC8vIGZvciBuZXdlciBOZXRzY2FwZSAoNispXG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnTmV0c2NhcGUnLFxuICBpZGVudGl0eTogJ05ldHNjYXBlJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIHN1YlN0cmluZzogJ01TSUUnLFxuICBpZGVudGl0eTogJ0V4cGxvcmVyJyxcbiAgdmVyc2lvblNlYXJjaDogJ01TSUUnXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnR2Vja28nLFxuICBpZGVudGl0eTogJ01vemlsbGEnLFxuICB2ZXJzaW9uU2VhcmNoOiAncnYnXG59LCB7IC8vIGZvciBvbGRlciBOZXRzY2FwZSAoNC0pXG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnTW96aWxsYScsXG4gIGlkZW50aXR5OiAnTmV0c2NhcGUnLFxuICB2ZXJzaW9uU2VhcmNoOiAnTW96aWxsYSdcbn1dXG5cbmNvbnN0IGRhdGFPUyA9IFt7XG4gIHN0cmluZzogbmF2aWdhdG9yLnBsYXRmb3JtLFxuICBzdWJTdHJpbmc6ICdXaW4nLFxuICBpZGVudGl0eTogJ1dpbmRvd3MnXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnBsYXRmb3JtLFxuICBzdWJTdHJpbmc6ICdNYWMnLFxuICBpZGVudGl0eTogJ01hYyBPUydcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdpUGhvbmUnLFxuICBpZGVudGl0eTogJ2lPUydcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IucGxhdGZvcm0sXG4gIHN1YlN0cmluZzogJ0xpbnV4JyxcbiAgaWRlbnRpdHk6ICdMaW51eCdcbn1dXG5cbi8vIEJyb3dzZXIgZGV0ZWN0aW9uLiBTb3VyY2U6IGh0dHA6Ly93d3cucXVpcmtzbW9kZS5vcmcvanMvZGV0ZWN0Lmh0bWxcbi8qKlxuICogSGVscGVyIGNsYXNzIHRvIGRldGVjdCB3aGljaCBicm93c2VyIGNsaWVudCBpcyB1c2luZy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJvd3NlckRldGVjdG9yIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBvYmplY3Qgd2l0aCBjdXJyZW50IGJyb3dzZXIgc2V0dGluZ3MuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJyb3dzZXIgPSB0aGlzLl9zZWFyY2hTdHJpbmcoZGF0YUJyb3dzZXIpIHx8ICdVbmtub3duIEJyb3dzZXInXG4gICAgdGhpcy52ZXJzaW9uID0gdGhpcy5fc2VhcmNoVmVyc2lvbihuYXZpZ2F0b3IudXNlckFnZW50KSB8fFxuICAgICAgICB0aGlzLl9zZWFyY2hWZXJzaW9uKG5hdmlnYXRvci5hcHBWZXJzaW9uKSB8fCAnVW5rbm93biBWZXJzaW9uJ1xuICAgIHRoaXMuT1MgPSB0aGlzLl9zZWFyY2hTdHJpbmcoZGF0YU9TKSB8fCAnVW5rbm93biBPUydcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXRjaGVzIHRoZSBjbGllbnQncyBzeXN0ZW0gdG8gdGhlIHByZWRlZmluZWQgc3lzdGVtIGxpc3QuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIFRoZSBkYXRhIG9iamVjdCB0byBzY2FuLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBmb3VuZCBpZGVudGl0eSBzdHJpbmcuXG4gICAqL1xuICBfc2VhcmNoU3RyaW5nKGRhdGEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBkYXRhU3RyaW5nID0gZGF0YVtpXS5zdHJpbmdcbiAgICAgIGxldCBkYXRhUHJvcCA9IGRhdGFbaV0ucHJvcFxuICAgICAgdGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nID0gZGF0YVtpXS52ZXJzaW9uU2VhcmNoIHx8IGRhdGFbaV0uaWRlbnRpdHlcbiAgICAgIGlmIChkYXRhU3RyaW5nKSB7XG4gICAgICAgIGlmIChkYXRhU3RyaW5nLmluZGV4T2YoZGF0YVtpXS5zdWJTdHJpbmcpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiBkYXRhW2ldLmlkZW50aXR5XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGF0YVByb3ApIHtcbiAgICAgICAgcmV0dXJuIGRhdGFbaV0uaWRlbnRpdHlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgdGhlIGN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gc3lzdGVtLlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVN0cmluZyBUaGUgZGF0YSBvYmplY3QgdG8gc2Nhbi5cbiAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgZm91bmQgbnVtYmVyLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NlYXJjaFZlcnNpb24oZGF0YVN0cmluZykge1xuICAgIGlmICghZGF0YVN0cmluZykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIGxldCBpbmRleCA9IGRhdGFTdHJpbmcuaW5kZXhPZih0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBwYXJzZUZsb2F0KGRhdGFTdHJpbmcuc3Vic3RyaW5nKGluZGV4ICsgdGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nLmxlbmd0aCArIDEpKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQnJvd3NlckRldGVjdG9yLmpzIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cblxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL0NvbnN0YW50cydcbmltcG9ydCBBcmdzQnVpbGRlciBmcm9tICcuL0FyZ3NCdWlsZGVyJ1xuaW1wb3J0IFNvY2tldElvQ2xpZW50IGZyb20gJy4vU29ja2V0SW9DbGllbnQnXG5pbXBvcnQgVmFyQ2FjaGUgZnJvbSAnLi9WYXJDYWNoZSdcbmltcG9ydCBMZWFucGx1bVJlcXVlc3QgZnJvbSAnLi9MZWFucGx1bVJlcXVlc3QnXG5pbXBvcnQgaXNFcXVhbCBmcm9tICdsb2Rhc2gvaXNFcXVhbCdcbmltcG9ydCBldmVudHMgZnJvbSAnLi9FdmVudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlYW5wbHVtU29ja2V0IHtcblxuICBzdGF0aWMgc29ja2V0SG9zdCA9ICdkZXYubGVhbnBsdW0uY29tJ1xuXG4gIHN0YXRpYyBjb25uZWN0KCkge1xuICAgIGlmICghV2ViU29ja2V0KSB7XG4gICAgICBjb25zb2xlLmxvZygnWW91ciBicm93c2VyIGRvZXNuXFwndCBzdXBwb3J0IFdlYlNvY2tldHMuJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBjbGllbnQgPSBuZXcgU29ja2V0SW9DbGllbnQoKVxuICAgIGxldCBhdXRoU2VudCA9IGZhbHNlXG4gICAgY2xpZW50Lm9ub3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFhdXRoU2VudCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IENvbm5lY3RlZCB0byBkZXZlbG9wbWVudCBzZXJ2ZXIuJylcbiAgICAgICAgbGV0IGFyZ3MgPSB7fVxuICAgICAgICBhcmdzW0NvbnN0YW50cy5QQVJBTVMuQVBQX0lEXSA9IExlYW5wbHVtUmVxdWVzdC5hcHBJZFxuICAgICAgICBhcmdzW0NvbnN0YW50cy5QQVJBTVMuREVWSUNFX0lEXSA9IExlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZFxuICAgICAgICBjbGllbnQuc2VuZCgnYXV0aCcsIGFyZ3MpXG4gICAgICAgIGF1dGhTZW50ID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICBjbGllbnQub25lcnJvciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IFNvY2tldCBlcnJvcicsIGV2ZW50KVxuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICogQHBhcmFtIGFyZ3NbXS5lbWFpbFxuICAgICAqL1xuICAgIGNsaWVudC5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCwgYXJncykge1xuICAgICAgaWYgKGV2ZW50ID09PSAndXBkYXRlVmFycycpIHtcbiAgICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuR0VUX1ZBUlMsXG4gICAgICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkNMVURFX0RFRkFVTFRTLCBmYWxzZSksIHtcbiAgICAgICAgICAgICAgcXVldWVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgc2VuZE5vdzogdHJ1ZSxcbiAgICAgICAgICAgICAgcmVzcG9uc2U6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGdldFZhcnNSZXNwb25zZSA9IExlYW5wbHVtUmVxdWVzdC5nZXRMYXN0UmVzcG9uc2UocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJTXVxuICAgICAgICAgICAgICAgIGxldCB2YXJpYW50cyA9IGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJJQU5UU11cbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uTWV0YWRhdGEgPSBnZXRWYXJzUmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuQUNUSU9OX01FVEFEQVRBXVxuICAgICAgICAgICAgICAgIGlmICghaXNFcXVhbCh2YWx1ZXMsIFZhckNhY2hlLmRpZmZzKSkge1xuICAgICAgICAgICAgICAgICAgVmFyQ2FjaGUuYXBwbHlEaWZmcyh2YWx1ZXMsIHZhcmlhbnRzLCBhY3Rpb25NZXRhZGF0YSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmIChldmVudCA9PT0gJ2dldFZhcmlhYmxlcycpIHtcbiAgICAgICAgVmFyQ2FjaGUuc2VuZFZhcmlhYmxlcygpXG4gICAgICAgIGNsaWVudC5zZW5kKCdnZXRDb250ZW50UmVzcG9uc2UnLCB7XG4gICAgICAgICAgJ3VwZGF0ZWQnOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAnZ2V0QWN0aW9ucycpIHtcbiAgICAgICAgLy8gVW5zdXBwb3J0ZWQgaW4gSmF2YVNjcmlwdCBTREsuXG4gICAgICAgIGNsaWVudC5zZW5kKCdnZXRDb250ZW50UmVzcG9uc2UnLCB7XG4gICAgICAgICAgJ3VwZGF0ZWQnOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChldmVudCA9PT0gJ3JlZ2lzdGVyRGV2aWNlJykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcbiAgICAgICAgYWxlcnQoYFlvdXIgZGV2aWNlIGhhcyBiZWVuIHJlZ2lzdGVyZWQgdG8gJHthcmdzWzBdLmVtYWlsfS5gKVxuICAgICAgfSBlbHNlIGlmIChldmVudCA9PT0gJ3RyaWdnZXInKSB7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCd3ZWJzb2NrZXQvdHJpZ2dlcicsIHtcbiAgICAgICAgICBhcmdzXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGNsaWVudC5vbmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IERpc2Nvbm5lY3RlZCB0byBkZXZlbG9wbWVudCBzZXJ2ZXIuJylcbiAgICAgIGF1dGhTZW50ID0gZmFsc2VcbiAgICB9XG4gICAgY2xpZW50LmNvbm5lY3QoTGVhbnBsdW1Tb2NrZXQuc29ja2V0SG9zdClcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgIGlmICghY2xpZW50LmNvbm5lY3RlZCAmJiAhY2xpZW50LmNvbm5lY3RpbmcpIHtcbiAgICAgICAgY2xpZW50LmNvbm5lY3QoTGVhbnBsdW1Tb2NrZXQuc29ja2V0SG9zdClcbiAgICAgIH1cbiAgICB9LCA1MDAwKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGVhbnBsdW1Tb2NrZXQuanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vQ29uc3RhbnRzJ1xuaW1wb3J0IEFyZ3NCdWlsZGVyIGZyb20gJy4vQXJnc0J1aWxkZXInXG5pbXBvcnQgaXNFcXVhbCBmcm9tICdsb2Rhc2gvaXNFcXVhbCdcbmltcG9ydCBMb2NhbFN0b3JhZ2VNYW5hZ2VyIGZyb20gJy4vTG9jYWxTdG9yYWdlTWFuYWdlcidcbmltcG9ydCBMZWFucGx1bVJlcXVlc3QgZnJvbSAnLi9MZWFucGx1bVJlcXVlc3QnXG5cbmNvbnN0IEFQUExJQ0FUSU9OX1NFUlZFUl9QVUJMSUNfS0VZID1cbiAgICAnQkluV1BwV250ZlIzOXJnWFNQMDRwcWRtRWRER2E1MHo2enFiTXZ4eXhKQ3d6WEl1U3BTaDhDODg4LUNmSjgyV0VMbDdYZThjakEnICtcbiAgICAnbmZDdC0zdkswQ2k2OCdcblxubGV0IGlzU3Vic2NyaWJlZCA9IGZhbHNlXG5sZXQgc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiA9IG51bGxcblxuLyoqXG4gKiBQdXNoIE1hbmFnZXIgaGFuZGxlcyB0aGUgcmVnaXN0cmF0aW9uIGFuZCBzdWJzY3JpcHRpb24gZm9yIHdlYiBwdXNoLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQdXNoTWFuYWdlciB7XG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB3ZWIgcHVzaCBpcyBzdXBwb3J0ZWQgaW4gdGhlIGJyb3dzZXIuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IFRydWUgaWYgc3VwcG9ydGVkLCBlbHNlIGZhbHNlLlxuICAgKi9cbiAgc3RhdGljIGlzV2ViUHVzaFN1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yICYmIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyICYmICdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IgJiZcbiAgICAgICAgJ1B1c2hNYW5hZ2VyJyBpbiB3aW5kb3dcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgYnJvd3NlciBpcyBzdWJzY3JpYmVkIHRvIHdlYiBwdXNoIG5vdGlmaWNhdGlvbnMuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFRydWUgaWYgc3Vic2NyaWJlZCwgZWxzZSBmYWxzZS5cbiAgICovXG4gIHN0YXRpYyBpc1dlYlB1c2hTdWJzY3JpYmVkKCkge1xuICAgIGlmICghUHVzaE1hbmFnZXIuaXNXZWJQdXNoU3VwcG9ydGVkKCkpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICByZXNvbHZlKGZhbHNlKVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIFB1c2hNYW5hZ2VyLmdldFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24oKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGlmICghcmVnaXN0cmF0aW9uKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvKiogQG5hbWVzcGFjZSByZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIgVGhlIHB1c2ggbWFuYWdlciBvYmplY3Qgb2YgdGhlIGJyb3dzZXIuICoqL1xuICAgICAgICAgICAgICAvKiogQG5hbWVzcGFjZSByZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uICoqL1xuICAgICAgICAgICAgICByZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKClcbiAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpc1N1YnNjcmliZWQgPSBzdWJzY3JpcHRpb24gIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgIFB1c2hNYW5hZ2VyLnVwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyKHN1YnNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGlzU3Vic2NyaWJlZClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBmb3IgV2ViUHVzaC5cbiAgICogQHBhcmFtICB7U3RyaW5nfSAgIHNlcnZpY2VXb3JrZXJVcmwgVGhlIHVybCB0aGF0IHNlcnZlcyB0aGUgc2VydmljZSB3b3JrZXJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb24geW91ciBkb21haW4uXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayAgICAgICAgIFRoZSBjYWxsYmFjayB0byBiZSBjYWxsZWQgd2l0aCByZXN1bHQuXG4gICAqIEByZXR1cm4ge29iamVjdH0gbm90aGluZ1xuICAgKi9cbiAgc3RhdGljIHJlZ2lzdGVyKHNlcnZpY2VXb3JrZXJVcmwsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFQdXNoTWFuYWdlci5pc1dlYlB1c2hTdXBwb3J0ZWQoKSkge1xuICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBQdXNoIG1lc3NhZ2luZyBpcyBub3Qgc3VwcG9ydGVkLicpXG4gICAgICByZXR1cm4gY2FsbGJhY2soZmFsc2UpXG4gICAgfVxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKFxuICAgICAgICBzZXJ2aWNlV29ya2VyVXJsID8gc2VydmljZVdvcmtlclVybCA6ICcvc3cubWluLmpzJywgbnVsbClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4gICAgICAgICAgc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiA9IHJlZ2lzdHJhdGlvblxuXG4gICAgICAgICAgbGV0IHNlcnZpY2VXb3JrZXJcbiAgICAgICAgICBpZiAocmVnaXN0cmF0aW9uLmluc3RhbGxpbmcpIHtcbiAgICAgICAgICAgIHNlcnZpY2VXb3JrZXIgPSByZWdpc3RyYXRpb24uaW5zdGFsbGluZ1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVnaXN0cmF0aW9uLndhaXRpbmcpIHtcbiAgICAgICAgICAgIHNlcnZpY2VXb3JrZXIgPSByZWdpc3RyYXRpb24ud2FpdGluZ1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVnaXN0cmF0aW9uLmFjdGl2ZSkge1xuICAgICAgICAgICAgc2VydmljZVdvcmtlciA9IHJlZ2lzdHJhdGlvbi5hY3RpdmVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIXNlcnZpY2VXb3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHN1YnNjcmliZSA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vIFNldCB0aGUgaW5pdGlhbCBzdWJzY3JpcHRpb24gdmFsdWVcbiAgICAgICAgICAgIHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKClcbiAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgaXNTdWJzY3JpYmVkID0gIShzdWJzY3JpcHRpb24gPT09IG51bGwpXG4gICAgICAgICAgICAgICAgaWYgKGlzU3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgICAgICAgICBQdXNoTWFuYWdlci51cGRhdGVOZXdTdWJzY3JpcHRpb25PblNlcnZlcihzdWJzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soaXNTdWJzY3JpYmVkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VydmljZVdvcmtlci5zdGF0ZSA9PT0gJ2FjdGl2YXRlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBzdWJzY3JpYmUoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignc3RhdGVjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuc3RhdGUgIT09ICdhY3RpdmF0ZWQnKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdWJzY3JpYmUoKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogU2VydmljZSBXb3JrZXIgRXJyb3I6ICcsIGVycm9yKVxuICAgICAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0aGUgdXNlcihicm93c2VyKSB0byBwdXNoLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXNvbHZlcyBpZiBzdWJzY3JpcHRpb24gc3VjY2Vzc2Z1bCwgb3RoZXJ3aXNlIHJlamVjdHMuXG4gICAqL1xuICBzdGF0aWMgc3Vic2NyaWJlVXNlcigpIHtcbiAgICBjb25zdCBhcHBsaWNhdGlvblNlcnZlcktleSA9IFB1c2hNYW5hZ2VyLnVybEI2NFRvVWludDhBcnJheShBUFBMSUNBVElPTl9TRVJWRVJfUFVCTElDX0tFWSlcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAvKiogQG5hbWVzcGFjZSBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLnN1YnNjcmliZSBTdWJzY3JpYmUgdG8gcHVzaC4gKiovXG4gICAgICByZXR1cm4gc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5zdWJzY3JpYmUoe1xuICAgICAgICB1c2VyVmlzaWJsZU9ubHk6IHRydWUsXG4gICAgICAgIGFwcGxpY2F0aW9uU2VydmVyS2V5XG4gICAgICB9KVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICBQdXNoTWFuYWdlci51cGRhdGVOZXdTdWJzY3JpcHRpb25PblNlcnZlcihzdWJzY3JpcHRpb24pXG4gICAgICAgICAgICAgIGlzU3Vic2NyaWJlZCA9IHRydWVcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoaXNTdWJzY3JpYmVkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2VcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChgTGVhbnBsdW06IEZhaWxlZCB0byBzdWJzY3JpYmUgdGhlIHVzZXI6ICR7ZXJyfWApXG4gICAgICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlIHRoZSB1c2VyKGJyb3dzZXIpIGZyb20gcHVzaC5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUmVzb2x2ZXMgaWYgdW5zdWJzY3JpYmVkLCBvdGhlcndpc2UgcmVqZWN0cy5cbiAgICovXG4gIHN0YXRpYyB1bnN1YnNjcmliZVVzZXIoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIFB1c2hNYW5hZ2VyLmlzV2ViUHVzaFN1YnNjcmliZWQoKS50aGVuKChzdWJzY3JpYmVkKSA9PiB7XG4gICAgICAgIGlmICghc3Vic2NyaWJlZCkge1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgLyoqIEBuYW1lc3BhY2Ugc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci51bnN1YnNjcmliZSBVbnN1YnNjcmliZSB0b1xuICAgICAgICAgICAgICAgICAqICBwdXNoLiAqKi9cbiAgICAgICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGBMZWFucGx1bTogRXJyb3IgdW5zdWJzY3JpYmluZzogJHtlcnJvcn1gKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KClcbiAgICAgICAgICAgIH0pXG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlamVjdCgpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gb2JqZWN0IGZyb20gYnJvd3Nlci5cbiAgICogQHJldHVybiB7b2JqZWN0fSBSZXR1cm5zIHRoZSByZWdpc3RyYXRpb24gb3IgbnVsbC5cbiAgICovXG4gIHN0YXRpYyBnZXRTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24pIHtcbiAgICAgICAgcmVzb2x2ZShzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIEBuYW1lc3BhY2UgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuZ2V0UmVnaXN0cmF0aW9uIFJldHJpZXZlcyB0aGUgIHB1c2ggcmVnaXN0cmF0aW9uXG4gICAgICAgICAqIGZyb20gdGhlIGJyb3dzZXIuICoqL1xuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5nZXRSZWdpc3RyYXRpb24oKS50aGVuKChyZWdpc3RyYXRpb24pID0+IHtcbiAgICAgICAgICBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uID0gcmVnaXN0cmF0aW9uXG4gICAgICAgICAgcmVzb2x2ZShyZWdpc3RyYXRpb24pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmNvZGVzIGEgYmFzZTY0IHVybCBzdHJpbmcgdG8gYW4gdWludDggYXJyYXJ5LlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGJhc2U2NFN0cmluZyBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9ICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBzdGF0aWMgdXJsQjY0VG9VaW50OEFycmF5KGJhc2U2NFN0cmluZykge1xuICAgIGNvbnN0IHBhZGRpbmcgPSAnPScucmVwZWF0KCg0IC0gYmFzZTY0U3RyaW5nLmxlbmd0aCAlIDQpICUgNClcbiAgICBjb25zdCBiYXNlNjQgPSAoYmFzZTY0U3RyaW5nICsgcGFkZGluZylcbiAgICAgICAgLnJlcGxhY2UoLy0vZywgJysnKVxuICAgICAgICAucmVwbGFjZSgvXy9nLCAnLycpXG5cbiAgICBjb25zdCByYXdEYXRhID0gd2luZG93LmF0b2IoYmFzZTY0KVxuICAgIGNvbnN0IG91dHB1dEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkocmF3RGF0YS5sZW5ndGgpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhd0RhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgIG91dHB1dEFycmF5W2ldID0gcmF3RGF0YS5jaGFyQ29kZUF0KGkpXG4gICAgfVxuICAgIHJldHVybiBvdXRwdXRBcnJheVxuICB9XG5cbiAgLyoqXG4gICAqIFtwcmVwYXJlU3Vic2NyaXB0aW9uIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtvYmplY3R9IHN1YnNjcmlwdGlvbiBUaGUgcmF3IHN1YnNjcmlwdGlvbiBmcm9tIGJyb3dzZXIuXG4gICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBzdWJzY3JpcHRpb24uZ2V0S2V5IFRoZSBzdWJzY3JpcHRpb24ga2V5LlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHN1YnNjcmlwdGlvbi5lbmRwb2ludCBUaGUgc3Vic2NyaXB0aW9uIGtleS5cbiAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgc3Vic2NyaXB0aW9uIG9iamVjdCB0byBiZSBzZW50IHRvIHNlcnZlci5cbiAgICovXG4gIHN0YXRpYyBwcmVwYXJlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbikge1xuICAgIGxldCBrZXkgPSBzdWJzY3JpcHRpb24uZ2V0S2V5ID8gc3Vic2NyaXB0aW9uLmdldEtleSgncDI1NmRoJykgOiAnJ1xuICAgIGxldCBhdXRoID0gc3Vic2NyaXB0aW9uLmdldEtleSA/IHN1YnNjcmlwdGlvbi5nZXRLZXkoJ2F1dGgnKSA6ICcnXG4gICAgLy8gbm9pbnNwZWN0aW9uIEVTNk1vZHVsZXNEZXBlbmRlbmNpZXNcbiAgICBsZXQga2V5QXNjaWkgPSBidG9hKFJlZmxlY3QuYXBwbHkoU3RyaW5nLmZyb21DaGFyQ29kZSwgbnVsbCwgbmV3IFVpbnQ4QXJyYXkoa2V5KSkpXG4gICAgLy8gbm9pbnNwZWN0aW9uIEVTNk1vZHVsZXNEZXBlbmRlbmNpZXNcbiAgICBsZXQgYXV0aEFzY2lpID0gYnRvYShSZWZsZWN0LmFwcGx5KFN0cmluZy5mcm9tQ2hhckNvZGUsIG51bGwsIG5ldyBVaW50OEFycmF5KGF1dGgpKSlcbiAgICByZXR1cm4ge1xuICAgICAgZW5kcG9pbnQ6IHN1YnNjcmlwdGlvbi5lbmRwb2ludCxcbiAgICAgIGtleToga2V5QXNjaWksXG4gICAgICBhdXRoOiBhdXRoQXNjaWlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIG5ldyBzdWJzY3JpcHRpb24gb2JqZWN0IHRvIHRoZSBMZWFucGx1bSBzZXJ2ZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdWJzY3JpcHRpb24gVGhlIHN1YnNjcmlwdGlvbi5cbiAgICovXG4gIHN0YXRpYyB1cGRhdGVOZXdTdWJzY3JpcHRpb25PblNlcnZlcihzdWJzY3JpcHRpb24pIHtcbiAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICBsZXQgcHJlcGFyZWRTdWJzY3JpcHRpb24gPSBQdXNoTWFuYWdlci5wcmVwYXJlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbilcbiAgICAgIGxldCBwcmVwYXJlZFN1YnNjcmlwdGlvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHByZXBhcmVkU3Vic2NyaXB0aW9uKVxuICAgICAgbGV0IGV4aXN0aW5nU3Vic2NyaXB0aW9uU3RyaW5nID0gTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKFxuICAgICAgICAgIENvbnN0YW50cy5ERUZBVUxUX0tFWVMuUFVTSF9TVUJTQ1JJUFRJT04pXG4gICAgICBpZiAoIWlzRXF1YWwoZXhpc3RpbmdTdWJzY3JpcHRpb25TdHJpbmcsIHByZXBhcmVkU3Vic2NyaXB0aW9uU3RyaW5nKSkge1xuICAgICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlBVU0hfU1VCU0NSSVBUSU9OLFxuICAgICAgICAgICAgcHJlcGFyZWRTdWJzY3JpcHRpb25TdHJpbmcpXG4gICAgICAgIFB1c2hNYW5hZ2VyLnNldFN1YnNjcmlwdGlvbihwcmVwYXJlZFN1YnNjcmlwdGlvblN0cmluZylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZCB0aGUgc3Vic2NyaXB0aW9uIHRvIHRoZSBMZWFucGx1bSBzZXJ2ZXIuXG4gICAqIEBwYXJhbSB7U3RyaW5nL09iamVjdH0gc3Vic2NyaXB0aW9uIFRoZSBzdWJzY3JpcHRpb24gc3RyaW5nLlxuICAgKi9cbiAgc3RhdGljIHNldFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgICBpZiAoIXN1YnNjcmlwdGlvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlNFVF9ERVZJQ0VfQVRUUklCVVRFUyxcbiAgICAgICAgbmV3IEFyZ3NCdWlsZGVyKCkuYWRkKENvbnN0YW50cy5QQVJBTVMuV0VCX1BVU0hfU1VCU0NSSVBUSU9OLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uKSwge1xuICAgICAgICAgIHF1ZXVlZDogZmFsc2UsXG4gICAgICAgICAgc2VuZE5vdzogdHJ1ZVxuICAgICAgICB9XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUHVzaE1hbmFnZXIuanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL0NvbnN0YW50cydcbmltcG9ydCBJbnRlcm5hbFN0YXRlIGZyb20gJy4vSW50ZXJuYWxTdGF0ZSdcbmltcG9ydCBBcmdzQnVpbGRlciBmcm9tICcuL0FyZ3NCdWlsZGVyJ1xuaW1wb3J0IEJyb3dzZXJEZXRlY3RvciBmcm9tICcuL0Jyb3dzZXJEZXRlY3RvcidcbmltcG9ydCBQdXNoTWFuYWdlciBmcm9tICcuL1B1c2hNYW5hZ2VyJ1xuaW1wb3J0IEFjdGlvbk1hbmFnZXIgZnJvbSAnLi9BY3Rpb25NYW5hZ2VyJ1xuaW1wb3J0IExvY2FsU3RvcmFnZU1hbmFnZXIgZnJvbSAnLi9Mb2NhbFN0b3JhZ2VNYW5hZ2VyJ1xuaW1wb3J0IFZhckNhY2hlIGZyb20gJy4vVmFyQ2FjaGUnXG5pbXBvcnQgTGVhbnBsdW1SZXF1ZXN0IGZyb20gJy4vTGVhbnBsdW1SZXF1ZXN0J1xuaW1wb3J0IExlYW5wbHVtU29ja2V0IGZyb20gJy4vTGVhbnBsdW1Tb2NrZXQnXG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vRXZlbnRzJ1xuXG5sZXQgX2Jyb3dzZXJEZXRlY3RvciA9IG5ldyBCcm93c2VyRGV0ZWN0b3IoKVxuXG4vKipcbiAqIEBwcmVzZXJ2ZSBMZWFucGx1bSBKYXZhc2NyaXB0IFNESy5cbiAqIENvcHlyaWdodCAyMDE2LCBMZWFucGx1bSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFlvdSBtYXkgbm90IGRpc3RyaWJ1dGUgdGhpcyBzb3VyY2UgY29kZSB3aXRob3V0IHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvblxuICogZnJvbSBMZWFucGx1bS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhbnBsdW0ge1xuXG4gIHN0YXRpYyBzZXRBcGlQYXRoKGFwaVBhdGgpIHtcbiAgICBpZiAoIUxlYW5wbHVtUmVxdWVzdC5hcGlQYXRoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgTGVhbnBsdW1SZXF1ZXN0LmFwaVBhdGggPSBhcGlQYXRoXG4gIH1cblxuICBzdGF0aWMgc2V0RW1haWwoZW1haWwpIHtcbiAgICBMZWFucGx1bS5fZW1haWwgPSBlbWFpbFxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIG5ldHdvcmsgdGltZW91dC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgVGhlIHRpbWVvdXQgaW4gc2Vjb25kcy5cbiAgICovXG4gIHN0YXRpYyBzZXROZXR3b3JrVGltZW91dChzZWNvbmRzKSB7XG4gICAgTGVhbnBsdW1SZXF1ZXN0LnNldE5ldHdvcmtUaW1lb3V0KHNlY29uZHMpXG4gIH1cblxuICBzdGF0aWMgc2V0VmFyaWFudERlYnVnSW5mb0VuYWJsZWQodmFyaWFudERlYnVnSW5mb0VuYWJsZWQpIHtcbiAgICBJbnRlcm5hbFN0YXRlLnNldFZhcmlhbnREZWJ1Z0luZm9FbmFibGVkKHZhcmlhbnREZWJ1Z0luZm9FbmFibGVkKVxuICB9O1xuXG4gIHN0YXRpYyBnZXRWYXJpYW50RGVidWdJbmZvKCkge1xuICAgIHJldHVybiBWYXJDYWNoZS5nZXRWYXJpYW50RGVidWdJbmZvKClcbiAgfTtcblxuICBzdGF0aWMgc2V0QXBwSWRGb3JEZXZlbG9wbWVudE1vZGUoYXBwSWQsIGFjY2Vzc0tleSkge1xuICAgIExlYW5wbHVtUmVxdWVzdC5hcHBJZCA9IGFwcElkXG4gICAgTGVhbnBsdW1SZXF1ZXN0LmNsaWVudEtleSA9IGFjY2Vzc0tleVxuICAgIEludGVybmFsU3RhdGUuZGV2TW9kZSA9IHRydWVcbiAgfVxuXG4gIHN0YXRpYyBzZXRBcHBJZEZvclByb2R1Y3Rpb25Nb2RlKGFwcElkLCBhY2Nlc3NLZXkpIHtcbiAgICBMZWFucGx1bVJlcXVlc3QuYXBwSWQgPSBhcHBJZFxuICAgIExlYW5wbHVtUmVxdWVzdC5jbGllbnRLZXkgPSBhY2Nlc3NLZXlcbiAgICBJbnRlcm5hbFN0YXRlLmRldk1vZGUgPSBmYWxzZVxuICB9XG5cbiAgc3RhdGljIHNldFNvY2tldEhvc3QoaG9zdCkge1xuICAgIExlYW5wbHVtU29ja2V0LnNvY2tldEhvc3QgPSBob3N0XG4gIH1cblxuICBzdGF0aWMgc2V0RGV2aWNlSWQoZGV2aWNlSWQpIHtcbiAgICBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQgPSBkZXZpY2VJZFxuICB9XG5cbiAgc3RhdGljIHNldEFwcFZlcnNpb24odmVyc2lvbk5hbWUpIHtcbiAgICBMZWFucGx1bVJlcXVlc3QudmVyc2lvbk5hbWUgPSB2ZXJzaW9uTmFtZVxuICB9XG5cbiAgc3RhdGljIHNldERldmljZU5hbWUoZGV2aWNlTmFtZSkge1xuICAgIExlYW5wbHVtLl9kZXZpY2VOYW1lID0gZGV2aWNlTmFtZVxuICB9XG5cbiAgc3RhdGljIHNldERldmljZU1vZGVsKGRldmljZU1vZGVsKSB7XG4gICAgTGVhbnBsdW0uX2RldmljZU1vZGVsID0gZGV2aWNlTW9kZWxcbiAgfVxuXG4gIHN0YXRpYyBzZXRTeXN0ZW1OYW1lKHN5c3RlbU5hbWUpIHtcbiAgICBMZWFucGx1bS5fc3lzdGVtTmFtZSA9IHN5c3RlbU5hbWVcbiAgfVxuXG4gIHN0YXRpYyBzZXRTeXN0ZW1WZXJzaW9uKHN5c3RlbVZlcnNpb24pIHtcbiAgICBMZWFucGx1bS5fc3lzdGVtVmVyc2lvbiA9IHN5c3RlbVZlcnNpb25cbiAgfVxuXG4gIHN0YXRpYyBzZXRWYXJpYWJsZXModmFyaWFibGVzKSB7XG4gICAgVmFyQ2FjaGUuc2V0VmFyaWFibGVzKHZhcmlhYmxlcylcbiAgfVxuXG4gIHN0YXRpYyBzZXRSZXF1ZXN0QmF0Y2hpbmcoYmF0Y2hFbmFibGVkLCBjb29sZG93blNlY29uZHMpIHtcbiAgICBMZWFucGx1bVJlcXVlc3QuYmF0Y2hFbmFibGVkID0gYmF0Y2hFbmFibGVkXG4gICAgTGVhbnBsdW1SZXF1ZXN0LmJhdGNoQ29vbGRvd24gPSBjb29sZG93blNlY29uZHNcbiAgfVxuXG4gIHN0YXRpYyBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIFZhckNhY2hlLmdldFZhcmlhYmxlcygpXG4gIH1cblxuICBzdGF0aWMgZ2V0VmFyaWFibGUoLi4uYXJncykge1xuICAgIGxldCBjdXJyZW50ID0gTGVhbnBsdW0uZ2V0VmFyaWFibGVzKClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50W2FyZ3NbaV1dXG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50XG4gIH1cblxuICBzdGF0aWMgZ2V0VmFyaWFudHMoKSB7XG4gICAgcmV0dXJuIFZhckNhY2hlLnZhcmlhbnRzIHx8IFtdXG4gIH1cblxuICBzdGF0aWMgZ2V0TWVzc2FnZXMoKSB7XG4gICAgcmV0dXJuIFZhcmNhY2hlLmdldE1lc3NhZ2VzKCkgfHwgW11cbiAgfVxuXG4gIHN0YXRpYyBhZGRTdGFydFJlc3BvbnNlSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgSW50ZXJuYWxTdGF0ZS5hZGRTdGFydFJlc3BvbnNlSGFuZGxlcihoYW5kbGVyKVxuICB9XG5cbiAgc3RhdGljIGFkZFZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBJbnRlcm5hbFN0YXRlLmFkZFZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpXG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlU3RhcnRSZXNwb25zZUhhbmRsZXIoaGFuZGxlcikge1xuICAgIEludGVybmFsU3RhdGUucmVtb3ZlU3RhcnRSZXNwb25zZUhhbmRsZXIoaGFuZGxlcilcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgSW50ZXJuYWxTdGF0ZS5yZW1vdmVWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcihoYW5kbGVyKVxuICB9XG5cbiAgc3RhdGljIGZvcmNlQ29udGVudFVwZGF0ZShjYWxsYmFjaykge1xuICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLkdFVF9WQVJTLFxuICAgICAgbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkNMVURFX0RFRkFVTFRTLCBmYWxzZSlcbiAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkNMVURFX1ZBUklBTlRfREVCVUdfSU5GTywgSW50ZXJuYWxTdGF0ZS52YXJpYW50RGVidWdJbmZvRW5hYmxlZCksIHtcbiAgICAgICAgcXVldWVkOiBmYWxzZSxcbiAgICAgICAgc2VuZE5vdzogdHJ1ZSxcbiAgICAgICAgcmVzcG9uc2U6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIGxldCBnZXRWYXJzUmVzcG9uc2UgPSBMZWFucGx1bVJlcXVlc3QuZ2V0TGFzdFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICBsZXQgaXNTdWNjZXNzID0gTGVhbnBsdW1SZXF1ZXN0LmlzUmVzcG9uc2VTdWNjZXNzKGdldFZhcnNSZXNwb25zZSk7XG4gICAgICAgICAgaWYgKGlzU3VjY2Vzcykge1xuICAgICAgICAgICAgVmFyQ2FjaGUuYXBwbHlEaWZmcyhcbiAgICAgICAgICAgICAgZ2V0VmFyc1Jlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUlNdLFxuICAgICAgICAgICAgICBnZXRWYXJzUmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuVkFSSUFOVFNdLFxuICAgICAgICAgICAgICBnZXRWYXJzUmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuQUNUSU9OX01FVEFEQVRBXSlcbiAgICAgICAgICAgIFZhckNhY2hlLnZhcmlhbnREZWJ1Z0luZm8gPSBnZXRWYXJzUmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuVkFSSUFOVF9ERUJVR19JTkZPXVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGlzU3VjY2Vzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBzdGFydCh1c2VySWQsIHVzZXJBdHRyaWJ1dGVzLCBjYWxsYmFjaykge1xuICAgIC8vIE92ZXJsb2Fkcy5cbiAgICBpZiAodHlwZW9mIHVzZXJJZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSB1c2VySWRcbiAgICAgIHVzZXJBdHRyaWJ1dGVzID0ge31cbiAgICAgIHVzZXJJZCA9IG51bGxcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB1c2VySWQgPT09ICdvYmplY3QnICYmIHVzZXJJZCAhPT0gbnVsbCAmJlxuICAgICAgICB1c2VySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2FsbGJhY2sgPSB1c2VyQXR0cmlidXRlc1xuICAgICAgdXNlckF0dHJpYnV0ZXMgPSB1c2VySWRcbiAgICAgIHVzZXJJZCA9IG51bGxcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB1c2VyQXR0cmlidXRlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSB1c2VyQXR0cmlidXRlc1xuICAgICAgdXNlckF0dHJpYnV0ZXMgPSB7fVxuICAgIH1cbiAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gdXNlcklkXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBMZWFucGx1bS5hZGRTdGFydFJlc3BvbnNlSGFuZGxlcihjYWxsYmFjaylcbiAgICB9XG5cbiAgICBWYXJDYWNoZS5vblVwZGF0ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICBJbnRlcm5hbFN0YXRlLnRyaWdnZXJWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMoKVxuICAgIH1cblxuICAgIGxldCBhcmdzID0gbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlVTRVJfQVRUUklCVVRFUywgSlNPTi5zdHJpbmdpZnkodXNlckF0dHJpYnV0ZXMpKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQ09VTlRSWSwgQ29uc3RhbnRzLlZBTFVFUy5ERVRFQ1QpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5SRUdJT04sIENvbnN0YW50cy5WQUxVRVMuREVURUNUKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQ0lUWSwgQ29uc3RhbnRzLlZBTFVFUy5ERVRFQ1QpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5MT0NBVElPTiwgQ29uc3RhbnRzLlZBTFVFUy5ERVRFQ1QpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5TWVNURU1fTkFNRSwgTGVhbnBsdW0uX3N5c3RlbU5hbWUgfHwgX2Jyb3dzZXJEZXRlY3Rvci5PUylcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlNZU1RFTV9WRVJTSU9OLCAoTGVhbnBsdW0uX3N5c3RlbVZlcnNpb24gfHwgJycpLnRvU3RyaW5nKCkpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5CUk9XU0VSX05BTUUsIF9icm93c2VyRGV0ZWN0b3IuYnJvd3NlcilcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkJST1dTRVJfVkVSU0lPTiwgX2Jyb3dzZXJEZXRlY3Rvci52ZXJzaW9uLnRvU3RyaW5nKCkpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5MT0NBTEUsIENvbnN0YW50cy5WQUxVRVMuREVURUNUKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuREVWSUNFX05BTUUsIExlYW5wbHVtLl9kZXZpY2VOYW1lIHx8XG4gICAgICAgICAgICBgJHtfYnJvd3NlckRldGVjdG9yLmJyb3dzZXJ9ICR7X2Jyb3dzZXJEZXRlY3Rvci52ZXJzaW9ufWApXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5ERVZJQ0VfTU9ERUwsIExlYW5wbHVtLl9kZXZpY2VNb2RlbCB8fCAnV2ViIEJyb3dzZXInKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuSU5DTFVERV9ERUZBVUxUUywgZmFsc2UpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkNMVURFX1ZBUklBTlRfREVCVUdfSU5GTywgSW50ZXJuYWxTdGF0ZS52YXJpYW50RGVidWdJbmZvRW5hYmxlZCk7XG5cbiAgICAvLyBJc3N1ZSByZXF1ZXN0LlxuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlNUQVJULCBhcmdzLCB7XG4gICAgICBxdWV1ZWQ6IHRydWUsXG4gICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgcmVzcG9uc2U6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIEludGVybmFsU3RhdGUuaGFzU3RhcnRlZCA9IHRydWVcbiAgICAgICAgbGV0IHN0YXJ0UmVzcG9uc2UgPSBMZWFucGx1bVJlcXVlc3QuZ2V0TGFzdFJlc3BvbnNlKHJlc3BvbnNlKVxuICAgICAgICBpZiAoTGVhbnBsdW1SZXF1ZXN0LmlzUmVzcG9uc2VTdWNjZXNzKHN0YXJ0UmVzcG9uc2UpKSB7XG4gICAgICAgICAgSW50ZXJuYWxTdGF0ZS5zdGFydFN1Y2Nlc3NmdWwgPSB0cnVlXG4gICAgICAgICAgaWYgKEludGVybmFsU3RhdGUuZGV2TW9kZSkge1xuICAgICAgICAgICAgbGV0IGxhdGVzdFZlcnNpb24gPSBzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLkxBVEVTVF9WRVJTSU9OXVxuICAgICAgICAgICAgaWYgKGxhdGVzdFZlcnNpb24pIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYEEgbmV3ZXIgdmVyc2lvbiBvZiBMZWFucGx1bSwgJHtsYXRlc3RWZXJzaW9ufSwgaXMgYXZhaWxhYmxlLiBHbyB0b2AgK1xuICAgICAgICAgICAgICAgICAgJ2xlYW5wbHVtLmNvbSB0byBkb3dubG9hZCBpdC4nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgTGVhbnBsdW1Tb2NrZXQuY29ubmVjdCgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgVmFyQ2FjaGUuYXBwbHlEaWZmcyhcbiAgICAgICAgICAgICAgc3RhcnRSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJTXSxcbiAgICAgICAgICAgICAgc3RhcnRSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJJQU5UU10sXG4gICAgICAgICAgICAgIHN0YXJ0UmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuQUNUSU9OX01FVEFEQVRBXSk7XG4gICAgICAgICAgVmFyQ2FjaGUudmFyaWFudERlYnVnSW5mbyA9IHN0YXJ0UmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuVkFSSUFOVF9ERUJVR19JTkZPXVxuICAgICAgICAgIFZhckNhY2hlLnRva2VuID0gc3RhcnRSZXNwb25zZVtDb25zdGFudHMuS0VZUy5UT0tFTl1cbiAgICAgICAgICBWYXJDYWNoZS5zZXRNZXNzYWdlcyhzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLk1FU1NBR0VTXSlcbiAgICAgICAgICBldmVudHMucHVibGlzaCgnbWVzc2FnZXMnLCB7XG4gICAgICAgICAgICBtZXNzYWdlczogTGVhbnBsdW0uZ2V0RmlsdGVyZWRSZXN1bHRzKFxuICAgICAgICAgICAgICBWYXJDYWNoZS5nZXRNZXNzYWdlcygpLFxuICAgICAgICAgICAgICBbJ3N0YXJ0JywgJ3Jlc3VtZSddXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY2FsbGVkQnk6ICdzdGFydCdcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEludGVybmFsU3RhdGUuc3RhcnRTdWNjZXNzZnVsID0gZmFsc2VcbiAgICAgICAgICBWYXJDYWNoZS5sb2FkRGlmZnMoKVxuICAgICAgICB9XG4gICAgICAgIEludGVybmFsU3RhdGUudHJpZ2dlclN0YXJ0SGFuZGxlcnMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgLyoqXG4gICAqIHJldHVybiBhbiBhcnJheSBvZiBmaWx0ZXJlZCBtZXNzYWdlXG4gICAqIEBwYXJhbSB7QXJyYXl9IG1lc3NhZ2VzXG4gICAqIEBwYXJhbSB7U3RyaW5nIHwgU3RyaW5nW10gfCA/fSB0cmlnZ2Vyc1xuICAgKiBAcGFyYW0ge1N0cmluZz99IHZlcmIgLSBhZGRpdGlvbmFsIHBhcmFtZXRlclxuICAgKiBAcGFyYW0gIHtTdHJpbmc/fSBub3VuIC0gYWRkaXRpb25hbCBwYXJhbWV0ZXJcbiAgICogQHBhcmFtICB7T2JqZWN0P30gcGFyYW1zXG4gICAqIEBwYXJhbSAge251bWJlcj99IHBhcmFtcy5mcm9tXG4gICAqIEBwYXJhbSAge251bWJlcj99IHBhcmFtcy50b1xuICAgKiBAcGFyYW0gIHtzdHJpbmc/fSBwYXJhbXMucGFyYW1WYWx1ZVxuICAgKiBAcGFyYW0gIHtzdHJpbmc/fSBwYXJhbXMucGFyYW1OYW1lXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIGdldEZpbHRlcmVkUmVzdWx0cyggbWVzc2FnZXMsIHRyaWdnZXJzPScnLCB2ZXJiPScnLCBub3VuPScnLCBwYXJhbXM9e30pIHtcbiAgICBpZighbWVzc2FnZXMpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgICByZXR1cm4gQWN0aW9uTWFuYWdlci5maWx0ZXJNZXNzYWdlcyhtZXNzYWdlcywgdHJpZ2dlcnMsIHZlcmIsIG5vdW4sIHBhcmFtcylcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0FycmF5fSBtZXNzYWdlc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZUlkXG4gICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyBnZXRGaWx0ZXJlZFJlc3VsdHNCeUlkKCBtZXNzYWdlcywgbWVzc2FnZUlkKSB7XG4gICAgaWYoIW1lc3NhZ2VzKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgcmV0dXJuIEFjdGlvbk1hbmFnZXIuZmlsdGVyTWVzc2FnZXNCeUlkKG1lc3NhZ2VzLCBtZXNzYWdlSWQpXG4gIH1cbiAgc3RhdGljIHN0YXJ0RnJvbUNhY2hlKHVzZXJJZCwgdXNlckF0dHJpYnV0ZXMsIGNhbGxiYWNrKSB7XG4gICAgLy8gT3ZlcmxvYWRzLlxuICAgIGlmICh0eXBlb2YgdXNlcklkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJJZFxuICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkQXNzaWdubWVudFxuICAgICAgdXNlckF0dHJpYnV0ZXMgPSB7fVxuICAgICAgdXNlcklkID0gbnVsbFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHVzZXJJZCA9PT0gJ29iamVjdCcgJiYgdXNlcklkICE9PSBudWxsICYmXG4gICAgICAgIHVzZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJBdHRyaWJ1dGVzXG4gICAgICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRBc3NpZ25tZW50XG4gICAgICB1c2VyQXR0cmlidXRlcyA9IHVzZXJJZFxuICAgICAgdXNlcklkID0gbnVsbFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHVzZXJBdHRyaWJ1dGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJBdHRyaWJ1dGVzXG4gICAgICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRBc3NpZ25tZW50XG4gICAgICB1c2VyQXR0cmlidXRlcyA9IHt9XG4gICAgfVxuICAgIExlYW5wbHVtUmVxdWVzdC51c2VySWQgPSB1c2VySWRcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIExlYW5wbHVtLmFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyKGNhbGxiYWNrKVxuICAgIH1cblxuICAgIEludGVybmFsU3RhdGUuaGFzU3RhcnRlZCA9IHRydWVcbiAgICBJbnRlcm5hbFN0YXRlLnN0YXJ0U3VjY2Vzc2Z1bCA9IHRydWVcbiAgICBpZiAoSW50ZXJuYWxTdGF0ZS5kZXZNb2RlKSB7XG4gICAgICBMZWFucGx1bVNvY2tldC5jb25uZWN0KClcbiAgICB9XG4gICAgVmFyQ2FjaGUubG9hZERpZmZzKClcbiAgICBJbnRlcm5hbFN0YXRlLnRyaWdnZXJTdGFydEhhbmRsZXJzKClcbiAgfVxuXG4gIHN0YXRpYyBzdG9wKCkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlNUT1AsIHVuZGVmaW5lZCwge1xuICAgICAgc2VuZE5vdzogdHJ1ZSxcbiAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgcGF1c2VTZXNzaW9uKCkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlBBVVNFX1NFU1NJT04sIHVuZGVmaW5lZCwge1xuICAgICAgc2VuZE5vdzogdHJ1ZSxcbiAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgcmVzdW1lU2Vzc2lvbigpIHtcbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5SRVNVTUVfU0VTU0lPTiwgdW5kZWZpbmVkLCB7XG4gICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgcXVldWVkOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBwYXVzZVN0YXRlKCkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlBBVVNFX1NUQVRFLCB1bmRlZmluZWQsIHtcbiAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgcmVzdW1lU3RhdGUoKSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuUkVTVU1FX1NUQVRFLCB1bmRlZmluZWQsIHtcbiAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgc2V0VXNlcklkKHVzZXJJZCkge1xuICAgIExlYW5wbHVtLnNldFVzZXJBdHRyaWJ1dGVzKHVzZXJJZClcbiAgfVxuXG4gIHN0YXRpYyBzZXRVc2VyQXR0cmlidXRlcyh1c2VySWQsIHVzZXJBdHRyaWJ1dGVzKSB7XG4gICAgaWYgKHVzZXJBdHRyaWJ1dGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2YgdXNlcklkID09PSAnb2JqZWN0Jykge1xuICAgICAgICB1c2VyQXR0cmlidXRlcyA9IHVzZXJJZFxuICAgICAgICB1c2VySWQgPSB1bmRlZmluZWRcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHVzZXJJZCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBzZXRVc2VyQXR0cmlidXRlcyBleHBlY3RzIGEgc3RyaW5nIG9yIGFuICcgK1xuICAgICAgICAgICAgJ29iamVjdCcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5TRVRfVVNFUl9BVFRSSUJVVEVTLFxuICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlVTRVJfQVRUUklCVVRFUyxcbiAgICAgICAgICAgICAgICB1c2VyQXR0cmlidXRlcyA/IEpTT04uc3RyaW5naWZ5KHVzZXJBdHRyaWJ1dGVzKSA6IHVuZGVmaW5lZClcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5ORVdfVVNFUl9JRCwgdXNlcklkKSwge1xuICAgICAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgICAgICB9KVxuICAgIGlmICh1c2VySWQpIHtcbiAgICAgIExlYW5wbHVtUmVxdWVzdC51c2VySWQgPSB1c2VySWRcbiAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRCwgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0RmlsZVVybChmaWxlTmFtZSkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICByZXR1cm4gTGVhbnBsdW1SZXF1ZXN0XG4gICAgICAgIC5nZW5lcmF0ZVJlcXVlc3RVcmwoXG4gICAgICAgICAgQ29uc3RhbnRzLk1FVEhPRFMuRE9XTkxPQURfRklMRSxcbiAgICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKS5hZGQoQ29uc3RhbnRzLlBBUkFNUy5GSUxFTkFNRSwgZmlsZU5hbWUpXG4gICAgICAgIClcbiAgfVxuXG4gIC8vIFRPRE86IG5lZWQgcHJvYmFibHkgdG8gYWRkIHRoZSBwYXJhbXMgKGFrYSBleGl0LCBhY2NlcHQsIGNhbmNlbClcbiAgLy8gIHRvIGJ1aWxkIHZhbGlkIGZpbHRlciB2YWx1ZTogJy5jMjM0MjM5MzggZXhpdCdcbiAgLy8gIGVpdGhlciBWYXJDYWNoZSBnZXRNZXNzYWdlQnlJZCBvciBwYXNzIG1lc3NhZ2Ugb3IgcGFzcyBtZXNzYWdlIHBhcmFtc1xuICAvKipcbiAgICogSXQgYWxsb3cgdHJhY2tpbmcgbWVzc2FnZXMgYnkgcGFzc2luZyBhbiBleHRyYSAnbWVzc2FnZUlkJyBwYXJhbSB0byB0aGUgdHJhY2sgbWV0aG9kXG4gICAqIGl0IGFkZCB0aGUgbWVzc2FnZSB0byB0aGUgbWVzc2FnZSB2aWV3IGxpc3RcbiAgICogSXQgcHVibGlzaCBjaGFpbmVkIG1lc3NhZ2UgYW5kIGNhbXBhaW4gaW1tZWRpYXRlIGRlbGl2ZXJ5IG1lc3NhZ2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlSWRcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiAtIHRoZSBjb250ZW50IG9mIHRoZSB0cmlnZ2VyZWQgbWVzc2FnZSBhY3Rpb24gaWYgYW55XG4gICAqICAvLyBAcGFyYW0gX19uYW1lX19cbiAgICogQHBhcmFtcyB7c3RyaW5nfSBwYXJlbnRFdmVudCAtIHRoZSBuYW1lIG9mIHRoZSBwYXJlbnQgZXZlbnQgaWYgYW55XG4gICAqL1xuICBzdGF0aWMgdHJhY2tNZXNzYWdlKGV2ZW50LG1lc3NhZ2VJZCwgYWN0aW9uLCBwYXJlbnRFdmVudCl7XG4gICAgY29uc3QgY29uY2F0RXZlbnQgPSAocGFyZW50RXZlbnQgPyBwYXJlbnRFdmVudCArICcgJzonJykgKyBldmVudFxuICAgIGlmKGV2ZW50ID09PSAnJyAmJiAhcGFyZW50RXZlbnQpIHtcbiAgICAgIFZhckNhY2hlLmFkZE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZCkgLy8gdHJhY2sgdmlldyB0cmFjayBldmVudCBpcyAnJyBha2EgJ1ZpZXcnXG4gICAgfVxuICAgIGxldCBjaGFpbmVkTWVzc2FnZVxuICAgIGlmKGFjdGlvbikge1xuICAgICAgc3dpdGNoIChhY3Rpb24uX19uYW1lX18pIHtcbiAgICAgICAgY2FzZSAnQ2hhaW4gdG8gRXhpc3RpbmcgTWVzc2FnZSc6XG4gICAgICAgICAgY2hhaW5lZE1lc3NhZ2UgPSBhY3Rpb25bJ0NoYWluZWQgbWVzc2FnZSddICYmXG4gICAgICAgICAgICBMZWFucGx1bS5nZXRGaWx0ZXJlZFJlc3VsdHNCeUlkKFZhckNhY2hlLmdldE1lc3NhZ2VzKCksIGFjdGlvblsnQ2hhaW5lZCBtZXNzYWdlJ10pXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnQ2VudGVyIFBvcHVwJzpcbiAgICAgICAgY2FzZSAnSFRNTCc6XG4gICAgICAgIGNhc2UgJ0FsZXJ0JzpcbiAgICAgICAgICBjaGFpbmVkTWVzc2FnZSA9IFt7XG4gICAgICAgICAgICB2YXJzOiBhY3Rpb24sXG4gICAgICAgICAgICBwYXJlbnRBY3Rpb25OYW1lOiBjb25jYXRFdmVudCxcbiAgICAgICAgICAgIGlkOiBtZXNzYWdlSWQsXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbi5fX25hbWVfX1xuICAgICAgICAgIH1dXG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGlmKGNoYWluZWRNZXNzYWdlKSB7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdtZXNzYWdlcycsIHtcbiAgICAgICAgICBtZXNzYWdlczogY2hhaW5lZE1lc3NhZ2VcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZG8gbm90IHNlbmQgdmlldyBldmVudCBpZiBpdCBpcyBhIHNpbXBsZSBjaGFpbmVkIG1lc3NhZ2VcbiAgICBpZiggZXZlbnQgIT09JycgfHwgIXBhcmVudEV2ZW50KXtcbiAgICAgIExlYW5wbHVtLnRyYWNrKGNvbmNhdEV2ZW50LHVuZGVmaW5lZCx1bmRlZmluZWQsdW5kZWZpbmVkLG1lc3NhZ2VJZClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcGFyYW0gaW5mb1xuICAgKiBAcGFyYW0gcGFyYW1zXG4gICAqIEBwYXJhbSBtZXNzYWdlSWQgLSBtZXNzYWdlSWQgaXMgYW4gb3B0aW9uYWwgcGFyYW1ldGVyIGZvciB0cmFja2luZyBtZXNzYWdlLiBMZWF2ZSBpdCB1bmRlZmluZWQgZm9yIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgc3RhdGljIHRyYWNrKGV2ZW50LCB2YWx1ZSwgaW5mbywgcGFyYW1zLCBtZXNzYWdlSWQpIHtcbiAgICAvLyBPdmVybG9hZHMuXG4gICAgLy8gb2JqZWN0ICYmICFudWxsICYmICF1bmRlZmluZWQgLT4gcGFyYW1zXG4gICAgLy8gc3RyaW5nIC0+IGluZm8sIHBhcmFtc1xuICAgIC8vICosIG9iamVjdCAmJiAhbnVsbCAmJiAhdW5kZWZpbmVkIC0+IHZhbHVlLCBwYXJhbXNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMgPSB2YWx1ZVxuICAgICAgaW5mbyA9IHVuZGVmaW5lZFxuICAgICAgdmFsdWUgPSB1bmRlZmluZWRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmFtcyA9IGluZm9cbiAgICAgIGluZm8gPSB2YWx1ZVxuICAgICAgdmFsdWUgPSB1bmRlZmluZWRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbmZvID09PSAnb2JqZWN0JyAmJiBpbmZvICE9PSBudWxsICYmIGluZm8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zID0gaW5mb1xuICAgICAgaW5mbyA9IHVuZGVmaW5lZFxuICAgIH1cbiAgICBldmVudHMucHVibGlzaCggJ21lc3NhZ2VzJywge1xuICAgICAgbWVzc2FnZXM6IExlYW5wbHVtLmdldEZpbHRlcmVkUmVzdWx0cyhcbiAgICAgICAgVmFyQ2FjaGUuZ2V0TWVzc2FnZXMoKSxcbiAgICAgICAgJ2V2ZW50JyxcbiAgICAgICAgJ3RyaWdnZXJzJyxcbiAgICAgICAgbWVzc2FnZUlkID8gbWVzc2FnZUlkIDogZXZlbnRcbiAgICAgIClcbiAgICB9KVxuICAgIGxldCBhcmdzID0gbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5FVkVOVCwgZXZlbnQpXG4gICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVkFMVUUsIHZhbHVlIHx8IDAuMClcbiAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkZPLCBpbmZvKVxuICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlBBUkFNUywgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSlcbiAgICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICBpZihtZXNzYWdlSWQpIHtcbiAgICAgIGFyZ3MuYWRkKENvbnN0YW50cy5QQVJBTVMuTUVTU0FHRV9JRCwgbWVzc2FnZUlkKVxuICAgIH1cblxuICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlRSQUNLLFxuICAgICAgIGFyZ3MsIHtcbiAgICAgICAgICBxdWV1ZWQ6IHRydWVcbiAgICAgICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBhZHZhbmNlVG8oIHN0YXRlLCBpbmZvLCBwYXJhbXMpIHtcbiAgICAvLyBPdmVybG9hZHMuXG4gICAgLy8gc3RyaW5nfG51bGx8dW5kZWZpbmVkLCAqIC0+IGluZm8sIHBhcmFtc1xuICAgIC8vIG9iamVjdCAmJiAhbnVsbCAmJiAhdW5kZWZpbmVkIC0+IHBhcmFtc1xuICAgIGlmICh0eXBlb2YgaW5mbyA9PT0gJ29iamVjdCcgJiYgaW5mbyAhPT0gbnVsbCAmJiBpbmZvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtcyA9IGluZm9cbiAgICAgIGluZm8gPSB1bmRlZmluZWRcbiAgICB9XG4gICAgZXZlbnRzLnB1Ymxpc2goJ21lc3NhZ2VzJywge1xuICAgICAgbWVzc2FnZXM6IExlYW5wbHVtLmdldEZpbHRlcmVkUmVzdWx0cyhcbiAgICAgICAgVmFyQ2FjaGUuZ2V0TWVzc2FnZXMoKSxcbiAgICAgICAgJ3N0YXRlJyxcbiAgICAgICAgJ3RyaWdnZXJzJyxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHBhcmFtc1xuICAgICAgKVxuICAgIH0pXG5cbiAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5BRFZBTkNFLFxuICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5TVEFURSwgc3RhdGUpXG4gICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklORk8sIGluZm8pXG4gICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlBBUkFNUywgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSksIHtcbiAgICAgICAgcXVldWVkOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHdlYiBwdXNoIGlzIHN1cHBvcnRlZCBpbiB0aGUgYnJvd3Nlci5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiBzdXBwb3J0ZWQsIGVsc2UgZmFsc2UuXG4gICAqL1xuICBzdGF0aWMgaXNXZWJQdXNoU3VwcG9ydGVkKCkge1xuICAgIHJldHVybiBQdXNoTWFuYWdlci5pc1dlYlB1c2hTdXBwb3J0ZWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgd2ViIHB1c2ggaXMgc3Vic2NyaWJlZC5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUmVzb2x2ZXMgaWYgdHJ1ZSwgcmVqZWN0cyBpZiBmYWxzZS5cbiAgICovXG4gIHN0YXRpYyBpc1dlYlB1c2hTdWJzY3JpYmVkKCkge1xuICAgIHJldHVybiBQdXNoTWFuYWdlci5pc1dlYlB1c2hTdWJzY3JpYmVkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciB0aGUgYnJvd3NlciBmb3Igd2ViIHB1c2guXG4gICAqIEBwYXJhbSAge3N0cmluZ30gICBzZXJ2aWNlV29ya2VyVXJsIFRoZSB1cmwgb24geW91ciBzZXJ2ZXIgdGhhdCBob3N0cyB0aGVcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL3N3Lm1pbi5qcyBzZXJ2aWNlIHdvcmtlciBqcyBmaWxlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAgICAgICAgICAgICAgICAgICBSZXNvbHZlcyBpZiByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJ3aXNlIGZhaWxzLlxuICAgKi9cbiAgc3RhdGljIHJlZ2lzdGVyRm9yV2ViUHVzaChzZXJ2aWNlV29ya2VyVXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChQdXNoTWFuYWdlci5pc1dlYlB1c2hTdXBwb3J0ZWQoKSkge1xuICAgICAgICByZXR1cm4gUHVzaE1hbmFnZXIucmVnaXN0ZXIoc2VydmljZVdvcmtlclVybCwgKGlzU3Vic2NyaWJlZCkgPT4ge1xuICAgICAgICAgIGlmIChpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBQdXNoTWFuYWdlci5zdWJzY3JpYmVVc2VyKClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3QoJ0xlYW5wbHVtOiBXZWJQdXNoIGlzIG5vdCBzdXBwb3J0ZWQuJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXJzIHRoZSBicm93c2VyIGZvcm0gd2ViIHB1c2guXG4gICAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgICAgICAgUmVzb2x2ZXMgb24gc3VjY2Vzcywgb3RoZXJ3aXNlIHJlamVjdHMuXG4gICAqL1xuICBzdGF0aWMgdW5yZWdpc3RlckZyb21XZWJQdXNoKCkge1xuICAgIHJldHVybiBQdXNoTWFuYWdlci51bnN1YnNjcmliZVVzZXIoKVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBjYWNoZWQgdmFsdWVzIGZvciBtZXNzYWdlcywgdmFyaWFibGVzIGFuZCB0ZXN0IGFzc2lnbm1lbnRzLlxuICAgKiBVc2Ugc3BhcmluZ2x5IGFzIGlmIHRoZSBhcHAgaXMgdXBkYXRlZCwgeW91J2xsIGhhdmUgdG8gZGVhbCB3aXRoIHBvdGVudGlhbGx5XG4gICAqIGluY29uc2lzdGVudCBzdGF0ZSBvciB1c2VyIGV4cGVyaWVuY2UuXG4gICAqL1xuICBzdGF0aWMgY2xlYXJVc2VyQ29udGVudCgpIHtcbiAgICBWYXJDYWNoZS5jbGVhclVzZXJDb250ZW50KClcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcHViL3N1YiBldmVudHMgbWFuYWdlci5cbiAgICpcbiAgICogQFJldHVybiB7IHB1Ymxpc2g6ICh0b3BpYywgYXJncykgPT4ge30sIHN1YnNjcmliZTogKHRvcGljLCBjYWxsYmFjaykgPT4ge30gfVxuICAgKi9cbiAgc3RhdGljIGdldEV2ZW50cygpIHtcbiAgICByZXR1cm4gZXZlbnRzXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MZWFucGx1bS5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5cbmltcG9ydCBSZXF1ZXN0IGZyb20gJy4vTmV0d29yaydcblxuLyoqXG4gKiBTb2NrZXQuaW8gMS4wIGNsaWVudCBjbGFzcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ja2V0SW9DbGllbnQge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYSBuZXcgU29ja2V0SW9DbGllbnQsIG5vdCBjb25uZWN0ZWQgYnkgZGVmYXVsdC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2VcbiAgICB0aGlzLmNvbm5lY3RpbmcgPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIENvbm5lY3RzIHRvIHRoZSBnaXZlbiBzb2NrZXRIb3N0LlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHNvY2tldEhvc3QgVGhlIGhvc3QgdG8gY29ubmVjdCB0by5cbiAgICovXG4gIGNvbm5lY3Qoc29ja2V0SG9zdCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXRoaXNcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmNvbm5lY3RpbmcgPSB0cnVlXG4gICAgUmVxdWVzdC5hamF4KCdQT1NUJywgYGh0dHBzOi8vJHtzb2NrZXRIb3N0fS9zb2NrZXQuaW8vMWAsICcnLFxuICAgICAgICBmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgbGV0IHBhcnRzID0gbGluZS5zcGxpdCgnOicpXG4gICAgICAgICAgbGV0IHNlc3Npb24gPSBwYXJ0c1swXVxuICAgICAgICAgIGxldCBoZWFydGJlYXQgPSBwYXJzZUludChwYXJ0c1sxXSkgLyAyICogMTAwMFxuICAgICAgICAgIHNlbGYuc29ja2V0ID0gbmV3IFdlYlNvY2tldChgd3NzOi8vJHtzb2NrZXRIb3N0fS9zb2NrZXQuaW8vMS93ZWJzb2NrZXQvJHtzZXNzaW9ufWApXG4gICAgICAgICAgbGV0IGhlYXJ0YmVhdEludGVydmFsID0gbnVsbFxuICAgICAgICAgIHNlbGYuc29ja2V0Lm9ub3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5jb25uZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgICBzZWxmLmNvbm5lY3RpbmcgPSBmYWxzZVxuICAgICAgICAgICAgaWYgKHNlbGYub25vcGVuKSB7XG4gICAgICAgICAgICAgIHNlbGYub25vcGVuKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlYXJ0YmVhdEludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHNlbGYuc29ja2V0LnNlbmQoJzI6OjonKVxuICAgICAgICAgICAgfSwgaGVhcnRiZWF0KVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmLnNvY2tldC5vbmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLmNvbm5lY3RlZCA9IGZhbHNlXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGhlYXJ0YmVhdEludGVydmFsKVxuICAgICAgICAgICAgaWYgKHNlbGYub25jbG9zZSkge1xuICAgICAgICAgICAgICBzZWxmLm9uY2xvc2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmLnNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2VQYXJ0cyA9IGV2ZW50LmRhdGEuc3BsaXQoJzonKVxuICAgICAgICAgICAgbGV0IGNvZGUgPSBwYXJzZUludChtZXNzYWdlUGFydHNbMF0pXG4gICAgICAgICAgICBpZiAoY29kZSA9PT0gMikge1xuICAgICAgICAgICAgICBzZWxmLnNvY2tldC5zZW5kKCcyOjonKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSA1KSB7XG4gICAgICAgICAgICAgIGxldCBtZXNzYWdlSWQgPSBtZXNzYWdlUGFydHNbMV1cbiAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2VQYXJ0cy5zbGljZSgzKS5qb2luKCc6JykpXG4gICAgICAgICAgICAgIGxldCBtZXNzYWdlRXZlbnQgPSBkYXRhLm5hbWVcbiAgICAgICAgICAgICAgbGV0IGFyZ3MgPSBkYXRhLmFyZ3NcbiAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VJZCkge1xuICAgICAgICAgICAgICAgIHNlbGYuc29ja2V0LnNlbmQoYDY6Ojoke21lc3NhZ2VJZH1gKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChzZWxmLm9ubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHNlbGYub25tZXNzYWdlKG1lc3NhZ2VFdmVudCwgYXJncylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSA3KSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTb2NrZXQgZXJyb3I6ICR7ZXZlbnQuZGF0YX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmLnNvY2tldC5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHNlbGYuc29ja2V0LmNsb3NlKClcbiAgICAgICAgICAgIGlmIChzZWxmLm9uZXJyb3IpIHtcbiAgICAgICAgICAgICAgc2VsZi5vbmVycm9yKGV2ZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgbnVsbCwgZmFsc2UsIHRydWUgLy8gbnVsbCwgcXVldWVkLCBwbGFpblRleHRcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgZ2l2ZW4gZXZlbnQgd2l0aCBhcmd1bWVudHMgdG8gdGhlIHNlcnZlci5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIGV2ZW50LlxuICAgKiBAcGFyYW0gIHsqfSBhcmdzIEFyZ3VtZW50cyB0byBzZW5kLlxuICAgKi9cbiAgc2VuZChuYW1lLCBhcmdzKSB7XG4gICAgaWYgKCF0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBTb2NrZXQgaXMgbm90IGNvbm5lY3RlZC4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxldCBhcmdzSnNvbiA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG5hbWUsXG4gICAgICBhcmdzXG4gICAgfSlcbiAgICB0aGlzLnNvY2tldC5zZW5kKGA1Ojo6JHthcmdzSnNvbn1gKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU29ja2V0SW9DbGllbnQuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fRGF0YVZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fSGFzaC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TZXQuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyksXG4gICAgc2V0Q2FjaGVBZGQgPSByZXF1aXJlKCcuL19zZXRDYWNoZUFkZCcpLFxuICAgIHNldENhY2hlSGFzID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVIYXMnKTtcblxuLyoqXG4gKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTZXRDYWNoZSh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPT0gbnVsbCA/IDAgOiB2YWx1ZXMubGVuZ3RoO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU2V0Q2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU3RhY2suanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19VaW50OEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fV2Vha01hcC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheVB1c2guanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlTb21lO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlTb21lLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldEFsbEtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNFcXVhbERlZXAgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbERlZXAnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzRXF1YWxgIHdoaWNoIHN1cHBvcnRzIHBhcnRpYWwgY29tcGFyaXNvbnNcbiAqIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBVbm9yZGVyZWQgY29tcGFyaXNvblxuICogIDIgLSBQYXJ0aWFsIGNvbXBhcmlzb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3RMaWtlKHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgYmFzZUlzRXF1YWwsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBlcXVhbEJ5VGFnID0gcmVxdWlyZSgnLi9fZXF1YWxCeVRhZycpLFxuICAgIGVxdWFsT2JqZWN0cyA9IHJlcXVpcmUoJy4vX2VxdWFsT2JqZWN0cycpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBvYmpJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG9iamVjdCksXG4gICAgICBvdGhUYWcgPSBvdGhJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG90aGVyKTtcblxuICBvYmpUYWcgPSBvYmpUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG9ialRhZztcbiAgb3RoVGFnID0gb3RoVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvdGhUYWc7XG5cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcbiAgICAgIG90aElzT2JqID0gb3RoVGFnID09IG9iamVjdFRhZyxcbiAgICAgIGlzU2FtZVRhZyA9IG9ialRhZyA9PSBvdGhUYWc7XG5cbiAgaWYgKGlzU2FtZVRhZyAmJiBpc0J1ZmZlcihvYmplY3QpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihvdGhlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgb2JqSXNBcnIgPSB0cnVlO1xuICAgIG9iaklzT2JqID0gZmFsc2U7XG4gIH1cbiAgaWYgKGlzU2FtZVRhZyAmJiAhb2JqSXNPYmopIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIHJldHVybiAob2JqSXNBcnIgfHwgaXNUeXBlZEFycmF5KG9iamVjdCkpXG4gICAgICA/IGVxdWFsQXJyYXlzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spXG4gICAgICA6IGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgb2JqVGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgfVxuICBpZiAoIShiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcpKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cbiAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgdmFyIG9ialVud3JhcHBlZCA9IG9iaklzV3JhcHBlZCA/IG9iamVjdC52YWx1ZSgpIDogb2JqZWN0LFxuICAgICAgICAgIG90aFVud3JhcHBlZCA9IG90aElzV3JhcHBlZCA/IG90aGVyLnZhbHVlKCkgOiBvdGhlcjtcblxuICAgICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICAgIHJldHVybiBlcXVhbEZ1bmMob2JqVW53cmFwcGVkLCBvdGhVbndyYXBwZWQsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFpc1NhbWVUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgcmV0dXJuIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbERlZXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlVGltZXMuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlVW5hcnkuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGEgYGNhY2hlYCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgVGhlIGNhY2hlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSGFzKGNhY2hlLCBrZXkpIHtcbiAgcmV0dXJuIGNhY2hlLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAob2JqZWN0LmJ5dGVPZmZzZXQgIT0gb3RoZXIuYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgb2JqZWN0ID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIG90aGVyID0gb3RoZXIuYnVmZmVyO1xuXG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAhZXF1YWxGdW5jKG5ldyBVaW50OEFycmF5KG9iamVjdCksIG5ldyBVaW50OEFycmF5KG90aGVyKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgLy8gQ29lcmNlIGJvb2xlYW5zIHRvIGAxYCBvciBgMGAgYW5kIGRhdGVzIHRvIG1pbGxpc2Vjb25kcy5cbiAgICAgIC8vIEludmFsaWQgZGF0ZXMgYXJlIGNvZXJjZWQgdG8gYE5hTmAuXG4gICAgICByZXR1cm4gZXEoK29iamVjdCwgK290aGVyKTtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzLCBwcmltaXRpdmVzIGFuZCBvYmplY3RzLFxuICAgICAgLy8gYXMgZXF1YWwuIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuICAgICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICB2YXIgY29udmVydCA9IG1hcFRvQXJyYXk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUc7XG4gICAgICBjb252ZXJ0IHx8IChjb252ZXJ0ID0gc2V0VG9BcnJheSk7XG5cbiAgICAgIGlmIChvYmplY3Quc2l6ZSAhPSBvdGhlci5zaXplICYmICFpc1BhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICAgICAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgICAgIGlmIChzdGFja2VkKSB7XG4gICAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgICAgfVxuICAgICAgYml0bWFzayB8PSBDT01QQVJFX1VOT1JERVJFRF9GTEFHO1xuXG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgICAgIHZhciByZXN1bHQgPSBlcXVhbEFycmF5cyhjb252ZXJ0KG9iamVjdCksIGNvbnZlcnQob3RoZXIpLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgaWYgKHN5bWJvbFZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlT2YuY2FsbChvYmplY3QpID09IHN5bWJvbFZhbHVlT2YuY2FsbChvdGhlcik7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQnlUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19lcXVhbEJ5VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgb2JqUHJvcHMgPSBnZXRBbGxLZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGdldEFsbEtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNQYXJ0aWFsID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gIHZhciBza2lwQ3RvciA9IGlzUGFydGlhbDtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBvYmpWYWx1ZSwga2V5LCBvdGhlciwgb2JqZWN0LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IChvYmpWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKVxuICAgICAgICAgIDogY29tcGFyZWRcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxPYmplY3RzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRSYXdUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaENsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaEdldC5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNJbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc01hc2tlZC5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZVNldC5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwVG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIGB1dGlsLnR5cGVzYCBmb3IgTm9kZS5qcyAxMCsuXG4gICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKCd1dGlsJykudHlwZXM7XG5cbiAgICBpZiAodHlwZXMpIHtcbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICAvLyBMZWdhY3kgYHByb2Nlc3MuYmluZGluZygndXRpbCcpYCBmb3IgTm9kZS5qcyA8IDEwLlxuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19ub2RlVXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX292ZXJBcmcuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlQWRkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc2V0Q2FjaGVBZGQuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3NldENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zZXRUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0dldC5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvc3R1YkFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==