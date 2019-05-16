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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = ({
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
  SDK_VERSION: '2.0.0-iflix',
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
});

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArgsBuilder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(1);
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
      return this.add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.APP_ID, appId).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.CLIENT, __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].CLIENT).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.CLIENT_KEY, clientKey);
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



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeanplumRequest; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ArgsBuilder__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InternalState__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Network__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LocalStorageManager__ = __webpack_require__(5);
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
      params = params || new __WEBPACK_IMPORTED_MODULE_1__ArgsBuilder__["a" /* default */](); // Get or create device ID and user ID.

      if (!LeanplumRequest.deviceId) {
        LeanplumRequest.deviceId = __WEBPACK_IMPORTED_MODULE_4__LocalStorageManager__["a" /* default */].getFromLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.DEVICE_ID);
      }

      if (!LeanplumRequest.deviceId) {
        var id = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' + '0123456789';

        for (var i = 0; i < 16; i++) {
          id += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        LeanplumRequest.deviceId = id;
        __WEBPACK_IMPORTED_MODULE_4__LocalStorageManager__["a" /* default */].saveToLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.DEVICE_ID, id);
      }

      if (!LeanplumRequest.userId) {
        LeanplumRequest.userId = __WEBPACK_IMPORTED_MODULE_4__LocalStorageManager__["a" /* default */].getFromLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.USER_ID);

        if (!LeanplumRequest.userId) {
          LeanplumRequest.userId = LeanplumRequest.deviceId;
        }
      }

      __WEBPACK_IMPORTED_MODULE_4__LocalStorageManager__["a" /* default */].saveToLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.USER_ID, LeanplumRequest.userId);
      var argsBuilder = params.attachApiKeys(LeanplumRequest.appId, LeanplumRequest.clientKey).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.SDK_VERSION, __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].SDK_VERSION).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.DEVICE_ID, LeanplumRequest.deviceId).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.USER_ID, LeanplumRequest.userId).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.ACTION, action).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.VERSION_NAME, LeanplumRequest.versionName).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.DEV_MODE, __WEBPACK_IMPORTED_MODULE_2__InternalState__["a" /* default */].devMode).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.TIME, (new Date().getTime() / 1000).toString());
      var success = options.success || options.response;
      var error = options.error || options.response;

      if (!LeanplumRequest.appId || !LeanplumRequest.clientKey) {
        var err = 'Leanplum App ID and client key are not set. Make sure you ' + 'are calling setAppIdForDevelopmentMode or setAppIdForProductionMode ' + 'before issuing API calls.';
        console.error(err);
        if (error) error(err);
        return;
      }

      if (params.body()) {
        __WEBPACK_IMPORTED_MODULE_3__Network__["a" /* default */].ajax('POST', "".concat(LeanplumRequest.apiPath, "?").concat(argsBuilder.build()), params.body(), success, error, options.queued);
        return;
      }

      var sendNow = __WEBPACK_IMPORTED_MODULE_2__InternalState__["a" /* default */].devMode || options.sendNow || !LeanplumRequest.batchEnabled;

      var sendUnsentRequests = function sendUnsentRequests() {
        var requestsToSend = LeanplumRequest.popUnsentRequests();

        if (requestsToSend.length > 0) {
          var requestData = JSON.stringify({
            'data': requestsToSend
          });
          var multiRequestArgs = new __WEBPACK_IMPORTED_MODULE_1__ArgsBuilder__["a" /* default */]().attachApiKeys(LeanplumRequest.appId, LeanplumRequest.clientKey).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.SDK_VERSION, __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].SDK_VERSION).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.ACTION, __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].METHODS.MULTI).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.TIME, (new Date().getTime() / 1000).toString().toString()).build();
          __WEBPACK_IMPORTED_MODULE_3__Network__["a" /* default */].ajax('POST', "".concat(LeanplumRequest.apiPath, "?").concat(multiRequestArgs), requestData, success, error, options.queued);
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
      queryParams = queryParams || new __WEBPACK_IMPORTED_MODULE_1__ArgsBuilder__["a" /* default */](); // Get or create device ID and user ID.

      if (!LeanplumRequest.deviceId) {
        LeanplumRequest.deviceId = __WEBPACK_IMPORTED_MODULE_4__LocalStorageManager__["a" /* default */].getFromLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.DEVICE_ID);
      }

      if (!LeanplumRequest.deviceId) {
        var id = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' + '0123456789';

        for (var i = 0; i < 16; i++) {
          id += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        LeanplumRequest.deviceId = id;
        __WEBPACK_IMPORTED_MODULE_4__LocalStorageManager__["a" /* default */].saveToLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.DEVICE_ID, id);
      }

      if (!LeanplumRequest.userId) {
        LeanplumRequest.userId = __WEBPACK_IMPORTED_MODULE_4__LocalStorageManager__["a" /* default */].getFromLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.USER_ID);

        if (!LeanplumRequest.userId) {
          LeanplumRequest.userId = LeanplumRequest.deviceId;
        }
      }

      __WEBPACK_IMPORTED_MODULE_4__LocalStorageManager__["a" /* default */].saveToLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.USER_ID, LeanplumRequest.userId);
      var argsBuilder = queryParams.attachApiKeys(LeanplumRequest.appId, LeanplumRequest.clientKey).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.SDK_VERSION, __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].SDK_VERSION).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.DEVICE_ID, LeanplumRequest.deviceId).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.USER_ID, LeanplumRequest.userId).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.ACTION, action).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.VERSION_NAME, LeanplumRequest.versionName).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.DEV_MODE, __WEBPACK_IMPORTED_MODULE_2__InternalState__["a" /* default */].devMode).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.TIME, (new Date().getTime() / 1000).toString());

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
      __WEBPACK_IMPORTED_MODULE_3__Network__["a" /* default */].setNetworkTimeout(seconds);
    }
  }, {
    key: "saveRequestForLater",
    value: function saveRequestForLater(args) {
      var count = __WEBPACK_IMPORTED_MODULE_4__LocalStorageManager__["a" /* default */].getFromLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.COUNT) || 0;
      var itemKey = __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.ITEM + count;
      __WEBPACK_IMPORTED_MODULE_4__LocalStorageManager__["a" /* default */].saveToLocalStorage(itemKey, JSON.stringify(args));
      count++;
      __WEBPACK_IMPORTED_MODULE_4__LocalStorageManager__["a" /* default */].saveToLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.COUNT, count);
    }
  }, {
    key: "popUnsentRequests",
    value: function popUnsentRequests() {
      var requestData = [];
      var count = __WEBPACK_IMPORTED_MODULE_4__LocalStorageManager__["a" /* default */].getFromLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.COUNT) || 0;
      __WEBPACK_IMPORTED_MODULE_4__LocalStorageManager__["a" /* default */].removeFromLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.COUNT);

      for (var i = 0; i < count; i++) {
        var itemKey = __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.ITEM + i;

        try {
          var requestArgs = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__LocalStorageManager__["a" /* default */].getFromLocalStorage(itemKey));
          requestData.push(requestArgs);
        } catch (ignored) {// eslint-disable-next-line no-empty
        }

        __WEBPACK_IMPORTED_MODULE_4__LocalStorageManager__["a" /* default */].removeFromLocalStorage(itemKey);
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

_defineProperty(LeanplumRequest, "apiPath", 'https://www.leanplum.com/api');

_defineProperty(LeanplumRequest, "batchEnabled", true);

_defineProperty(LeanplumRequest, "batchCooldown", 5);



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageManager; });
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternalState; });
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

_defineProperty(InternalState, "devMode", false);

_defineProperty(InternalState, "variablesChangedHandlers", []);

_defineProperty(InternalState, "hasReceivedDiffs", false);

_defineProperty(InternalState, "startHandlers", []);

_defineProperty(InternalState, "hasStarted", false);

_defineProperty(InternalState, "startSuccessful", false);

_defineProperty(InternalState, "variantDebugInfoEnabled", false);



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VarCache; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InternalState__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ArgsBuilder__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LocalStorageManager__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LeanplumRequest__ = __webpack_require__(4);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
      __WEBPACK_IMPORTED_MODULE_1__InternalState__["a" /* default */].hasReceivedDiffs = true;
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
        VarCache.applyDiffs(JSON.parse(__WEBPACK_IMPORTED_MODULE_3__LocalStorageManager__["a" /* default */].getFromLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.VARIABLES) || null), JSON.parse(__WEBPACK_IMPORTED_MODULE_3__LocalStorageManager__["a" /* default */].getFromLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.VARIANTS) || null), JSON.parse(__WEBPACK_IMPORTED_MODULE_3__LocalStorageManager__["a" /* default */].getFromLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.ACTION_METADATA) || null));
        VarCache.token = __WEBPACK_IMPORTED_MODULE_3__LocalStorageManager__["a" /* default */].getFromLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.TOKEN);
        VarCache.variantDebugInfo = __WEBPACK_IMPORTED_MODULE_3__LocalStorageManager__["a" /* default */].getFromLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.VARIANT_DEBUG_INFO);
      } catch (e) {
        console.log("Leanplum: Invalid diffs: ".concat(e));
      }
    }
  }, {
    key: "saveDiffs",
    value: function saveDiffs() {
      __WEBPACK_IMPORTED_MODULE_3__LocalStorageManager__["a" /* default */].saveToLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.VARIABLES, JSON.stringify(VarCache.diffs || {}));
      __WEBPACK_IMPORTED_MODULE_3__LocalStorageManager__["a" /* default */].saveToLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.VARIANTS, JSON.stringify(VarCache.variants || []));
      __WEBPACK_IMPORTED_MODULE_3__LocalStorageManager__["a" /* default */].saveToLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.ACTION_METADATA, JSON.stringify(VarCache.actionMetadata || {}));
      __WEBPACK_IMPORTED_MODULE_3__LocalStorageManager__["a" /* default */].saveToLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.VARIANT_DEBUG_INFO, JSON.stringify(VarCache.variantDebugInfo || {}));
      __WEBPACK_IMPORTED_MODULE_3__LocalStorageManager__["a" /* default */].saveToLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.TOKEN, VarCache.token);
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
      __WEBPACK_IMPORTED_MODULE_3__LocalStorageManager__["a" /* default */].saveToLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.MESSAGE_VIEW, JSON.stringify(VarCache.messagesView || {}));
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
        VarCache.messagesView = JSON.parse(__WEBPACK_IMPORTED_MODULE_3__LocalStorageManager__["a" /* default */].getFromLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.MESSAGE_VIEW) || '{}');
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
      body[__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.VARIABLES] = VarCache.variables;
      __WEBPACK_IMPORTED_MODULE_4__LeanplumRequest__["a" /* default */].request(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].METHODS.SET_VARS, new __WEBPACK_IMPORTED_MODULE_2__ArgsBuilder__["a" /* default */]().body(JSON.stringify(body)), {
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((function () {
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
})());

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Network; });
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VarCache__ = __webpack_require__(13);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Handles In-app message filtering
 */

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
  triggersWithParameter: function triggersWithParameter(trigger, noun, params) {
    return noun === trigger.noun && params.paramValue === trigger.objects[params.paramName];
  },
  changesTo: function changesTo(trigger, noun, params) {
    return noun === trigger.noun && params.to === trigger.objects[0];
  },
  changesFromTo: function changesFromTo(trigger, noun, params) {
    return noun === trigger.noun && params.from === trigger.objects[0] && params.to === trigger.objects[1];
  }
  /** private
   * provide evaluators for filterByLimit
   */

};
var limitVerbEvaluators = {
  limitUser: function limitUser(messageId, maxView) {
    return __WEBPACK_IMPORTED_MODULE_0__VarCache__["a" /* default */].getMessageView(messageId).length < maxView;
  },
  limitMonth: function limitMonth(messageId, maxView, amount, now) {
    var since = now - amount * 30 * 24 * 60 * 60 * 1000;
    return __WEBPACK_IMPORTED_MODULE_0__VarCache__["a" /* default */].getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
  },
  limitWeek: function limitWeek(messageId, maxView, amount, now) {
    var since = now - amount * 7 * 24 * 60 * 60 * 1000;
    return __WEBPACK_IMPORTED_MODULE_0__VarCache__["a" /* default */].getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
  },
  limitDay: function limitDay(messageId, maxView, amount, now) {
    var since = now - amount * 24 * 60 * 60 * 1000;
    return __WEBPACK_IMPORTED_MODULE_0__VarCache__["a" /* default */].getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
  },
  limitHour: function limitHour(messageId, maxView, amount, now) {
    var since = now - amount * 60 * 60 * 1000;
    return __WEBPACK_IMPORTED_MODULE_0__VarCache__["a" /* default */].getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
  },
  limitMinute: function limitMinute(messageId, maxView, amount, now) {
    var since = now - amount * 60 * 1000;
    return __WEBPACK_IMPORTED_MODULE_0__VarCache__["a" /* default */].getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
  },
  limitSecond: function limitSecond(messageId, maxView, amount, now) {
    var since = now - amount * 1000;
    return __WEBPACK_IMPORTED_MODULE_0__VarCache__["a" /* default */].getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
  },
  limitSession: function limitSession(messageId, maxView) {
    return __WEBPACK_IMPORTED_MODULE_0__VarCache__["a" /* default */].getMessageView(messageId, true).length < maxView;
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
        triggers: triggers
      })).filter(filterByLimits(now)).filter(filterByLimitTimes(now)).sort(function (a, b) {
        return a.priority - b.priority;
      });
    }
  }]);

  return ActionManager;
}();



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserDetector; });
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



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeanplumSocket; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ArgsBuilder__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SocketIoClient__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VarCache__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LeanplumRequest__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isEqual__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Events__ = __webpack_require__(17);
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

      var client = new __WEBPACK_IMPORTED_MODULE_2__SocketIoClient__["a" /* default */]();
      var authSent = false;

      client.onopen = function () {
        if (!authSent) {
          console.log('Leanplum: Connected to development server.');
          var args = {};
          args[__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.APP_ID] = __WEBPACK_IMPORTED_MODULE_4__LeanplumRequest__["a" /* default */].appId;
          args[__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.DEVICE_ID] = __WEBPACK_IMPORTED_MODULE_4__LeanplumRequest__["a" /* default */].deviceId;
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
          __WEBPACK_IMPORTED_MODULE_4__LeanplumRequest__["a" /* default */].request(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].METHODS.GET_VARS, new __WEBPACK_IMPORTED_MODULE_1__ArgsBuilder__["a" /* default */]().add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.INCLUDE_DEFAULTS, false), {
            queued: false,
            sendNow: true,
            response: function response(_response) {
              var getVarsResponse = __WEBPACK_IMPORTED_MODULE_4__LeanplumRequest__["a" /* default */].getLastResponse(_response);
              var values = getVarsResponse[__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].KEYS.VARS];
              var variants = getVarsResponse[__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].KEYS.VARIANTS];
              var actionMetadata = getVarsResponse[__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].KEYS.ACTION_METADATA];

              if (!__WEBPACK_IMPORTED_MODULE_5_lodash_isEqual___default()(values, __WEBPACK_IMPORTED_MODULE_3__VarCache__["a" /* default */].diffs)) {
                __WEBPACK_IMPORTED_MODULE_3__VarCache__["a" /* default */].applyDiffs(values, variants, actionMetadata);
              }
            }
          });
        } else if (event === 'getVariables') {
          __WEBPACK_IMPORTED_MODULE_3__VarCache__["a" /* default */].sendVariables();
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
          __WEBPACK_IMPORTED_MODULE_6__Events__["a" /* default */].publish('websocket/trigger', {
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

_defineProperty(LeanplumSocket, "socketHost", 'dev.leanplum.com');



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ArgsBuilder__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isEqual__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LocalStorageManager__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LeanplumRequest__ = __webpack_require__(4);
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
        var existingSubscriptionString = __WEBPACK_IMPORTED_MODULE_3__LocalStorageManager__["a" /* default */].getFromLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.PUSH_SUBSCRIPTION);

        if (!__WEBPACK_IMPORTED_MODULE_2_lodash_isEqual___default()(existingSubscriptionString, preparedSubscriptionString)) {
          __WEBPACK_IMPORTED_MODULE_3__LocalStorageManager__["a" /* default */].saveToLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.PUSH_SUBSCRIPTION, preparedSubscriptionString);
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

      __WEBPACK_IMPORTED_MODULE_4__LeanplumRequest__["a" /* default */].request(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].METHODS.SET_DEVICE_ATTRIBUTES, new __WEBPACK_IMPORTED_MODULE_1__ArgsBuilder__["a" /* default */]().add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.WEB_PUSH_SUBSCRIPTION, subscription), {
        queued: false,
        sendNow: true
      });
    }
  }]);

  return PushManager;
}();



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Leanplum; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InternalState__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ArgsBuilder__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BrowserDetector__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PushManager__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ActionManager__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__LocalStorageManager__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__VarCache__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__LeanplumSocket__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Events__ = __webpack_require__(17);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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












var _browserDetector = new __WEBPACK_IMPORTED_MODULE_3__BrowserDetector__["a" /* default */]();
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
      if (!__WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].apiPath) {
        return;
      }

      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].apiPath = apiPath;
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
      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].setNetworkTimeout(seconds);
    }
  }, {
    key: "setVariantDebugInfoEnabled",
    value: function setVariantDebugInfoEnabled(variantDebugInfoEnabled) {
      __WEBPACK_IMPORTED_MODULE_1__InternalState__["a" /* default */].setVariantDebugInfoEnabled(variantDebugInfoEnabled);
    }
  }, {
    key: "getVariantDebugInfo",
    value: function getVariantDebugInfo() {
      return __WEBPACK_IMPORTED_MODULE_7__VarCache__["a" /* default */].getVariantDebugInfo();
    }
  }, {
    key: "setAppIdForDevelopmentMode",
    value: function setAppIdForDevelopmentMode(appId, accessKey) {
      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].appId = appId;
      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].clientKey = accessKey;
      __WEBPACK_IMPORTED_MODULE_1__InternalState__["a" /* default */].devMode = true;
    }
  }, {
    key: "setAppIdForProductionMode",
    value: function setAppIdForProductionMode(appId, accessKey) {
      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].appId = appId;
      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].clientKey = accessKey;
      __WEBPACK_IMPORTED_MODULE_1__InternalState__["a" /* default */].devMode = false;
    }
  }, {
    key: "setSocketHost",
    value: function setSocketHost(host) {
      __WEBPACK_IMPORTED_MODULE_9__LeanplumSocket__["a" /* default */].socketHost = host;
    }
  }, {
    key: "setDeviceId",
    value: function setDeviceId(deviceId) {
      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].deviceId = deviceId;
    }
  }, {
    key: "setAppVersion",
    value: function setAppVersion(versionName) {
      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].versionName = versionName;
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
      __WEBPACK_IMPORTED_MODULE_7__VarCache__["a" /* default */].setVariables(variables);
    }
  }, {
    key: "setRequestBatching",
    value: function setRequestBatching(batchEnabled, cooldownSeconds) {
      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].batchEnabled = batchEnabled;
      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].batchCooldown = cooldownSeconds;
    }
  }, {
    key: "getVariables",
    value: function getVariables() {
      return __WEBPACK_IMPORTED_MODULE_7__VarCache__["a" /* default */].getVariables();
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
      return __WEBPACK_IMPORTED_MODULE_7__VarCache__["a" /* default */].variants || [];
    }
  }, {
    key: "getMessages",
    value: function getMessages() {
      return Varcache.getMessages() || [];
    }
  }, {
    key: "addStartResponseHandler",
    value: function addStartResponseHandler(handler) {
      __WEBPACK_IMPORTED_MODULE_1__InternalState__["a" /* default */].addStartResponseHandler(handler);
    }
  }, {
    key: "addVariablesChangedHandler",
    value: function addVariablesChangedHandler(handler) {
      __WEBPACK_IMPORTED_MODULE_1__InternalState__["a" /* default */].addVariablesChangedHandler(handler);
    }
  }, {
    key: "removeStartResponseHandler",
    value: function removeStartResponseHandler(handler) {
      __WEBPACK_IMPORTED_MODULE_1__InternalState__["a" /* default */].removeStartResponseHandler(handler);
    }
  }, {
    key: "removeVariablesChangedHandler",
    value: function removeVariablesChangedHandler(handler) {
      __WEBPACK_IMPORTED_MODULE_1__InternalState__["a" /* default */].removeVariablesChangedHandler(handler);
    }
  }, {
    key: "forceContentUpdate",
    value: function forceContentUpdate(callback) {
      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].request(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].METHODS.GET_VARS, new __WEBPACK_IMPORTED_MODULE_2__ArgsBuilder__["a" /* default */]().add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.INCLUDE_DEFAULTS, false).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.INCLUDE_VARIANT_DEBUG_INFO, __WEBPACK_IMPORTED_MODULE_1__InternalState__["a" /* default */].variantDebugInfoEnabled), {
        queued: false,
        sendNow: true,
        response: function response(_response) {
          var getVarsResponse = __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].getLastResponse(_response);
          var isSuccess = __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].isResponseSuccess(getVarsResponse);

          if (isSuccess) {
            __WEBPACK_IMPORTED_MODULE_7__VarCache__["a" /* default */].applyDiffs(getVarsResponse[__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].KEYS.VARS], getVarsResponse[__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].KEYS.VARIANTS], getVarsResponse[__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].KEYS.ACTION_METADATA]);
            __WEBPACK_IMPORTED_MODULE_7__VarCache__["a" /* default */].variantDebugInfo = getVarsResponse[__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].KEYS.VARIANT_DEBUG_INFO];
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

      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].userId = userId;

      if (callback) {
        Leanplum.addStartResponseHandler(callback);
      }

      __WEBPACK_IMPORTED_MODULE_7__VarCache__["a" /* default */].onUpdate = function () {
        __WEBPACK_IMPORTED_MODULE_1__InternalState__["a" /* default */].triggerVariablesChangedHandlers();
      };

      var args = new __WEBPACK_IMPORTED_MODULE_2__ArgsBuilder__["a" /* default */]().add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.USER_ATTRIBUTES, JSON.stringify(userAttributes)).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.COUNTRY, __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].VALUES.DETECT).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.REGION, __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].VALUES.DETECT).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.CITY, __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].VALUES.DETECT).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.LOCATION, __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].VALUES.DETECT).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.SYSTEM_NAME, Leanplum._systemName || _browserDetector.OS).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.SYSTEM_VERSION, (Leanplum._systemVersion || '').toString()).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.BROWSER_NAME, _browserDetector.browser).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.BROWSER_VERSION, _browserDetector.version.toString()).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.LOCALE, __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].VALUES.DETECT).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.DEVICE_NAME, Leanplum._deviceName || "".concat(_browserDetector.browser, " ").concat(_browserDetector.version)).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.DEVICE_MODEL, Leanplum._deviceModel || 'Web Browser').add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.INCLUDE_DEFAULTS, false).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.INCLUDE_VARIANT_DEBUG_INFO, __WEBPACK_IMPORTED_MODULE_1__InternalState__["a" /* default */].variantDebugInfoEnabled); // Issue request.
      // noinspection Annotator

      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].request(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].METHODS.START, args, {
        queued: true,
        sendNow: true,
        response: function response(_response2) {
          __WEBPACK_IMPORTED_MODULE_1__InternalState__["a" /* default */].hasStarted = true;
          var startResponse = __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].getLastResponse(_response2);

          if (__WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].isResponseSuccess(startResponse)) {
            __WEBPACK_IMPORTED_MODULE_1__InternalState__["a" /* default */].startSuccessful = true;

            if (__WEBPACK_IMPORTED_MODULE_1__InternalState__["a" /* default */].devMode) {
              var latestVersion = startResponse[__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].KEYS.LATEST_VERSION];

              if (latestVersion) {
                console.log("A newer version of Leanplum, ".concat(latestVersion, ", is available. Go to") + 'leanplum.com to download it.');
              }

              __WEBPACK_IMPORTED_MODULE_9__LeanplumSocket__["a" /* default */].connect();
            }

            __WEBPACK_IMPORTED_MODULE_7__VarCache__["a" /* default */].applyDiffs(startResponse[__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].KEYS.VARS], startResponse[__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].KEYS.VARIANTS], startResponse[__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].KEYS.ACTION_METADATA]);
            __WEBPACK_IMPORTED_MODULE_7__VarCache__["a" /* default */].variantDebugInfo = startResponse[__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].KEYS.VARIANT_DEBUG_INFO];
            __WEBPACK_IMPORTED_MODULE_7__VarCache__["a" /* default */].token = startResponse[__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].KEYS.TOKEN];
            __WEBPACK_IMPORTED_MODULE_7__VarCache__["a" /* default */].setMessages(startResponse[__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].KEYS.MESSAGES]);
            __WEBPACK_IMPORTED_MODULE_10__Events__["a" /* default */].publish('start/messages', {
              messages: Leanplum.getFilteredResults(__WEBPACK_IMPORTED_MODULE_7__VarCache__["a" /* default */].getMessages(), ['start', 'resume'])
            });
          } else {
            __WEBPACK_IMPORTED_MODULE_1__InternalState__["a" /* default */].startSuccessful = false;
            __WEBPACK_IMPORTED_MODULE_7__VarCache__["a" /* default */].loadDiffs();
          }

          __WEBPACK_IMPORTED_MODULE_1__InternalState__["a" /* default */].triggerStartHandlers();
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

      return __WEBPACK_IMPORTED_MODULE_5__ActionManager__["a" /* default */].filterMessages(messages, triggers, verb, noun, params);
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

      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].userId = userId;

      if (callback) {
        Leanplum.addStartResponseHandler(callback);
      }

      __WEBPACK_IMPORTED_MODULE_1__InternalState__["a" /* default */].hasStarted = true;
      __WEBPACK_IMPORTED_MODULE_1__InternalState__["a" /* default */].startSuccessful = true;

      if (__WEBPACK_IMPORTED_MODULE_1__InternalState__["a" /* default */].devMode) {
        __WEBPACK_IMPORTED_MODULE_9__LeanplumSocket__["a" /* default */].connect();
      }

      __WEBPACK_IMPORTED_MODULE_7__VarCache__["a" /* default */].loadDiffs();
      __WEBPACK_IMPORTED_MODULE_1__InternalState__["a" /* default */].triggerStartHandlers();
    }
  }, {
    key: "stop",
    value: function stop() {
      // noinspection Annotator
      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].request(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].METHODS.STOP, undefined, {
        sendNow: true,
        queued: true
      });
    }
  }, {
    key: "pauseSession",
    value: function pauseSession() {
      // noinspection Annotator
      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].request(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].METHODS.PAUSE_SESSION, undefined, {
        sendNow: true,
        queued: true
      });
    }
  }, {
    key: "resumeSession",
    value: function resumeSession() {
      // noinspection Annotator
      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].request(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].METHODS.RESUME_SESSION, undefined, {
        sendNow: true,
        queued: true
      });
    }
  }, {
    key: "pauseState",
    value: function pauseState() {
      // noinspection Annotator
      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].request(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].METHODS.PAUSE_STATE, undefined, {
        queued: true
      });
    }
  }, {
    key: "resumeState",
    value: function resumeState() {
      // noinspection Annotator
      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].request(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].METHODS.RESUME_STATE, undefined, {
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


      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].request(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].METHODS.SET_USER_ATTRIBUTES, new __WEBPACK_IMPORTED_MODULE_2__ArgsBuilder__["a" /* default */]().add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.USER_ATTRIBUTES, userAttributes ? JSON.stringify(userAttributes) : undefined).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.NEW_USER_ID, userId), {
        queued: true
      });

      if (userId) {
        __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].userId = userId;
        __WEBPACK_IMPORTED_MODULE_6__LocalStorageManager__["a" /* default */].saveToLocalStorage(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].DEFAULT_KEYS.USER_ID, __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].userId);
      }
    }
  }, {
    key: "getFileUrl",
    value: function getFileUrl(fileName) {
      // noinspection Annotator
      return __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].generateRequestUrl(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].METHODS.DOWNLOAD_FILE, new __WEBPACK_IMPORTED_MODULE_2__ArgsBuilder__["a" /* default */]().add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.FILENAME, fileName));
    }
  }, {
    key: "trackMessage",
    value: function trackMessage(event, messageId) {
      if (event === '') {
        __WEBPACK_IMPORTED_MODULE_7__VarCache__["a" /* default */].addMessageView(messageId); // track view track event is '' aka 'View'
      } // noinspection Annotator


      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].request(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].METHODS.TRACK, new __WEBPACK_IMPORTED_MODULE_2__ArgsBuilder__["a" /* default */]().add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.EVENT, event).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.MESSAGE_ID, messageId), {
        queued: true
      });
    }
  }, {
    key: "track",
    value: function track(event, value, info, params) {
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

      __WEBPACK_IMPORTED_MODULE_10__Events__["a" /* default */].publish('track', {
        event: event,
        params: params
      }); // noinspection Annotator

      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].request(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].METHODS.TRACK, new __WEBPACK_IMPORTED_MODULE_2__ArgsBuilder__["a" /* default */]().add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.EVENT, event).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.VALUE, value || 0.0).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.INFO, info).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.PARAMS, JSON.stringify(params)), {
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

      __WEBPACK_IMPORTED_MODULE_8__LeanplumRequest__["a" /* default */].request(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].METHODS.ADVANCE, new __WEBPACK_IMPORTED_MODULE_2__ArgsBuilder__["a" /* default */]().add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.STATE, state).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.INFO, info).add(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* default */].PARAMS.PARAMS, JSON.stringify(params)), {
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
      return __WEBPACK_IMPORTED_MODULE_4__PushManager__["a" /* default */].isWebPushSupported();
    }
    /**
     * Determines if web push is subscribed.
     * @return {Promise} Resolves if true, rejects if false.
     */

  }, {
    key: "isWebPushSubscribed",
    value: function isWebPushSubscribed() {
      return __WEBPACK_IMPORTED_MODULE_4__PushManager__["a" /* default */].isWebPushSubscribed();
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
        if (__WEBPACK_IMPORTED_MODULE_4__PushManager__["a" /* default */].isWebPushSupported()) {
          return __WEBPACK_IMPORTED_MODULE_4__PushManager__["a" /* default */].register(serviceWorkerUrl, function (isSubscribed) {
            if (isSubscribed) {
              return resolve(true);
            }

            return __WEBPACK_IMPORTED_MODULE_4__PushManager__["a" /* default */].subscribeUser();
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
      return __WEBPACK_IMPORTED_MODULE_4__PushManager__["a" /* default */].unsubscribeUser();
    }
    /**
     * Clears cached values for messages, variables and test assignments.
     * Use sparingly as if the app is updated, you'll have to deal with potentially
     * inconsistent state or user experience.
     */

  }, {
    key: "clearUserContent",
    value: function clearUserContent() {
      __WEBPACK_IMPORTED_MODULE_7__VarCache__["a" /* default */].clearUserContent();
    }
    /**
     * Get pub/sub events manager.
     *
     * @Return { publish: (topic, args) => {}, subscribe: (topic, callback) => {} }
     */

  }, {
    key: "getEvents",
    value: function getEvents() {
      return __WEBPACK_IMPORTED_MODULE_10__Events__["a" /* default */];
    }
  }]);

  return Leanplum;
}();



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketIoClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Network__ = __webpack_require__(18);
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
      __WEBPACK_IMPORTED_MODULE_0__Network__["a" /* default */].ajax('POST', "https://".concat(socketHost, "/socket.io/1"), '', function (line) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmN2IyMzIwMDU4YWNjOTliYzI1ZSIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FyZ3NCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9MZWFucGx1bVJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvY2FsU3RvcmFnZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL3NyYy9JbnRlcm5hbFN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9WYXJDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9OZXR3b3JrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQWN0aW9uTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQnJvd3NlckRldGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9MZWFucGx1bVNvY2tldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHVzaE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xlYW5wbHVtLmpzIiwid2VicGFjazovLy8uL3NyYy9Tb2NrZXRJb0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N0YWNrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheVNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxCeVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOlsiTUVUSE9EUyIsIlNUQVJUIiwiU1RPUCIsIkFEVkFOQ0UiLCJUUkFDSyIsIlBBVVNFX1NFU1NJT04iLCJSRVNVTUVfU0VTU0lPTiIsIlBBVVNFX1NUQVRFIiwiUkVTVU1FX1NUQVRFIiwiRE9XTkxPQURfRklMRSIsIk1VTFRJIiwiU0VUX1ZBUlMiLCJHRVRfVkFSUyIsIlNFVF9VU0VSX0FUVFJJQlVURVMiLCJTRVRfREVWSUNFX0FUVFJJQlVURVMiLCJVUExPQURfRklMRSIsIlJFR0lTVEVSX0RFVklDRSIsIlNES19WRVJTSU9OIiwiQ0xJRU5UIiwiUEFSQU1TIiwiQUNUSU9OIiwiQVBQX0lEIiwiQ0xJRU5UX0tFWSIsIkRFVklDRV9JRCIsIlVTRVJfSUQiLCJORVdfVVNFUl9JRCIsIkRFVl9NT0RFIiwiVkVSU0lPTl9OQU1FIiwiU1lTVEVNX05BTUUiLCJTWVNURU1fVkVSU0lPTiIsIkJST1dTRVJfTkFNRSIsIkJST1dTRVJfVkVSU0lPTiIsIkRFVklDRV9OQU1FIiwiREVWSUNFX01PREVMIiwiVVNFUl9BVFRSSUJVVEVTIiwiTE9DQUxFIiwiQ09VTlRSWSIsIlJFR0lPTiIsIkNJVFkiLCJMT0NBVElPTiIsIlNUQVRFIiwiSU5GTyIsIkVWRU5UIiwiVkFMVUUiLCJGSUxFTkFNRSIsIlRJTUUiLCJEQVRBIiwiVkFSUyIsIkZJTEUiLCJTSVpFIiwiVkFSSUFUSU9OIiwiSEFTSCIsIkVNQUlMIiwiVkFSSUFCTEVTIiwiSU5DTFVERV9ERUZBVUxUUyIsIklOQ0xVREVfVkFSSUFOVF9ERUJVR19JTkZPIiwiV0VCX1BVU0hfU1VCU0NSSVBUSU9OIiwiTUVTU0FHRV9JRCIsIktFWVMiLCJJU19SRUdJU1RFUkVEIiwiTEFURVNUX1ZFUlNJT04iLCJWQVJJQU5UUyIsIlZBUklBTlRfREVCVUdfSU5GTyIsIkFDVElPTl9NRVRBREFUQSIsIlRPS0VOIiwiTUVTU0FHRVMiLCJERUZBVUxUX0tFWVMiLCJDT1VOVCIsIklURU0iLCJQVVNIX1NVQlNDUklQVElPTiIsIk1FU1NBR0VfVklFVyIsIlZBTFVFUyIsIkRFVEVDVCIsIkFyZ3NCdWlsZGVyIiwiYXJnU3RyaW5nIiwiYXJnVmFsdWVzIiwia2V5IiwidmFsdWUiLCJlbmNvZGVkVXJpQ29tcG9uZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYm9keSIsIl9ib2R5IiwiYXBwSWQiLCJjbGllbnRLZXkiLCJhZGQiLCJsYXN0UmVxdWVzdFRpbWUiLCJ1bmRlZmluZWQiLCJjb29sZG93blRpbWVvdXQiLCJMZWFucGx1bVJlcXVlc3QiLCJhY3Rpb24iLCJwYXJhbXMiLCJvcHRpb25zIiwiZGV2aWNlSWQiLCJnZXRGcm9tTG9jYWxTdG9yYWdlIiwiaWQiLCJwb3NzaWJsZSIsImkiLCJjaGFyQXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJMb2NhbFN0b3JhZ2VNYW5hZ2VyIiwic2F2ZVRvTG9jYWxTdG9yYWdlIiwidXNlcklkIiwiYXJnc0J1aWxkZXIiLCJhdHRhY2hBcGlLZXlzIiwidmVyc2lvbk5hbWUiLCJkZXZNb2RlIiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImVycm9yIiwiZXJyIiwiY29uc29sZSIsIk5ldHdvcmsiLCJhamF4IiwiYXBpUGF0aCIsImJ1aWxkIiwicXVldWVkIiwic2VuZE5vdyIsImJhdGNoRW5hYmxlZCIsInNlbmRVbnNlbnRSZXF1ZXN0cyIsInJlcXVlc3RzVG9TZW5kIiwicG9wVW5zZW50UmVxdWVzdHMiLCJyZXF1ZXN0RGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtdWx0aVJlcXVlc3RBcmdzIiwiYmF0Y2hDb29sZG93biIsIm5vdyIsInNldFRpbWVvdXQiLCJzYXZlUmVxdWVzdEZvckxhdGVyIiwiYnVpbGREaWN0IiwicXVlcnlQYXJhbXMiLCJFcnJvciIsInNlY29uZHMiLCJzZXROZXR3b3JrVGltZW91dCIsImFyZ3MiLCJjb3VudCIsIml0ZW1LZXkiLCJyZW1vdmVGcm9tTG9jYWxTdG9yYWdlIiwicmVxdWVzdEFyZ3MiLCJwYXJzZSIsInB1c2giLCJpZ25vcmVkIiwiaW5kZXgiLCJudW1SZXNwb25zZXMiLCJnZXRSZXNwb25zZUF0IiwibWVzc2FnZSIsImxvY2FsU3RvcmFnZUVuYWJsZWQiLCJhbHRlcm5hdGVMb2NhbFN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJlIiwicmVtb3ZlSXRlbSIsIkludGVybmFsU3RhdGUiLCJoYW5kbGVyIiwic3RhcnRIYW5kbGVycyIsImhhc1N0YXJ0ZWQiLCJzdGFydFN1Y2Nlc3NmdWwiLCJpZHgiLCJpbmRleE9mIiwic3BsaWNlIiwidmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzIiwiaGFzUmVjZWl2ZWREaWZmcyIsInZhcmlhbnREZWJ1Z0luZm9FbmFibGVkIiwiVmFyQ2FjaGUiLCJkaWZmcyIsInZhcmlhbnRzIiwiYWN0aW9uTWV0YWRhdGEiLCJtZXJnZWQiLCJtZXJnZUhlbHBlciIsInZhcmlhYmxlcyIsInNhdmVEaWZmcyIsIm9uVXBkYXRlIiwiYXBwbHlEaWZmcyIsInRva2VuIiwidmFyaWFudERlYnVnSW5mbyIsImxvZyIsIm1lc3NhZ2VJZCIsIm1lc3NhZ2VWaWV3IiwiZ2V0TWVzc2FnZXNWaWV3IiwibWVzc2FnZXNWaWV3IiwibWVzc2FnZVZpZXdQZXJTZXNzaW9uIiwibWVzc2FnZXNWaWV3UGVyU2Vzc2lvbiIsInQiLCJzZXNzaW9uIiwicmVxdWVzdCIsIm1lc3NhZ2VzIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsInZhcnMiLCJkaWZmIiwib2JqSXRlcmF0b3IiLCJvYmoiLCJmIiwiQXJyYXkiLCJhdHRyIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwidmFyc0l0ZXJhdG9yIiwiZGlmZkl0ZXJhdG9yIiwiaXNBcnJheSIsImF0dHJpYnV0ZSIsInZhclN1YnNjcmlwdCIsInN1YnN0cmluZyIsInBhcnNlSW50Iiwic3Vic2NyaXB0IiwiZGlmZlZhbHVlIiwidG9waWNzIiwic3Vic2NyaWJlIiwidG9waWMiLCJsaXN0ZW5lciIsInJlbW92ZSIsInB1Ymxpc2giLCJpbmZvIiwiZm9yRWFjaCIsIml0ZW0iLCJyZXF1ZXN0UXVldWUiLCJuZXR3b3JrVGltZW91dFNlY29uZHMiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwicGxhaW5UZXh0IiwicnVubmluZ1JlcXVlc3QiLCJlbnF1ZXVlUmVxdWVzdCIsImFyZ3VtZW50cyIsIlhEb21haW5SZXF1ZXN0IiwibG9jYXRpb24iLCJwcm90b2NvbCIsIlJlZmxlY3QiLCJhcHBseSIsImFqYXhJRTgiLCJoYW5kbGVkIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwicmFuQ2FsbGJhY2siLCJyZXNwb25zZVRleHQiLCJzdGF0dXMiLCJkZXF1ZXVlUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsImFib3J0IiwieGRyIiwib25sb2FkIiwib25lcnJvciIsIm9udGltZW91dCIsIm9ucHJvZ3Jlc3MiLCJ0aW1lb3V0IiwicmVxdWVzdEFyZ3VtZW50cyIsInNoaWZ0IiwiZmlsdGVyQnlUcmlnZ2VycyIsInRyaWdnZXJzIiwid2hlblRyaWdnZXJzIiwiY2hpbGRyZW4iLCJmaWx0ZXJlZEJ5VHJpZ2dlcnMiLCJmaWx0ZXIiLCJ0cmlnZ2VyIiwiaW5jbHVkZXMiLCJzdWJqZWN0IiwidmVyYkZpbHRlciIsImZpbHRlckJ5VmVyYnMiLCJ2ZXJiIiwiZXZhbHVhdG9yIiwidHJpZ2dlclZlcmJFdmFsdWF0b3JzIiwibm91biIsIm9iamVjdHMiLCJmaWx0ZXJCeUxpbWl0cyIsImxpbWl0cyIsIndoZW5MaW1pdHMiLCJldmVyeSIsImxpbWl0IiwidmVyYkV2YWx1YXRvciIsImxpbWl0VmVyYkV2YWx1YXRvcnMiLCJjb3VudE1lc3NhZ2VWaWV3c0J5TGltaXQiLCJzaW5jZSIsIml0ZXJhdG9yIiwiZmlsdGVyQnlMaW1pdFRpbWVzIiwibGltaXRUaW1lIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInRyaWdnZXJzV2l0aFBhcmFtZXRlciIsInBhcmFtVmFsdWUiLCJwYXJhbU5hbWUiLCJjaGFuZ2VzVG8iLCJ0byIsImNoYW5nZXNGcm9tVG8iLCJmcm9tIiwibGltaXRVc2VyIiwibWF4VmlldyIsImdldE1lc3NhZ2VWaWV3IiwibGltaXRNb250aCIsImFtb3VudCIsInJlZHVjZSIsImxpbWl0V2VlayIsImxpbWl0RGF5IiwibGltaXRIb3VyIiwibGltaXRNaW51dGUiLCJsaW1pdFNlY29uZCIsImxpbWl0U2Vzc2lvbiIsIkFjdGlvbk1hbmFnZXIiLCJzb3J0IiwiYSIsImIiLCJwcmlvcml0eSIsImRhdGFCcm93c2VyIiwic3RyaW5nIiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwic3ViU3RyaW5nIiwiaWRlbnRpdHkiLCJ2ZXJzaW9uU2VhcmNoIiwidmVuZG9yIiwicHJvcCIsIndpbmRvdyIsIm9wZXJhIiwiZGF0YU9TIiwicGxhdGZvcm0iLCJCcm93c2VyRGV0ZWN0b3IiLCJicm93c2VyIiwiX3NlYXJjaFN0cmluZyIsInZlcnNpb24iLCJfc2VhcmNoVmVyc2lvbiIsImFwcFZlcnNpb24iLCJPUyIsImRhdGFTdHJpbmciLCJkYXRhUHJvcCIsInZlcnNpb25TZWFyY2hTdHJpbmciLCJwYXJzZUZsb2F0IiwiTGVhbnBsdW1Tb2NrZXQiLCJXZWJTb2NrZXQiLCJjbGllbnQiLCJhdXRoU2VudCIsIm9ub3BlbiIsImV2ZW50Iiwib25tZXNzYWdlIiwiZ2V0VmFyc1Jlc3BvbnNlIiwiZ2V0TGFzdFJlc3BvbnNlIiwidmFsdWVzIiwic2VuZFZhcmlhYmxlcyIsImFsZXJ0IiwiZW1haWwiLCJldmVudHMiLCJvbmNsb3NlIiwiY29ubmVjdCIsInNvY2tldEhvc3QiLCJzZXRJbnRlcnZhbCIsImNvbm5lY3RlZCIsImNvbm5lY3RpbmciLCJBUFBMSUNBVElPTl9TRVJWRVJfUFVCTElDX0tFWSIsImlzU3Vic2NyaWJlZCIsInNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24iLCJQdXNoTWFuYWdlciIsInNlcnZpY2VXb3JrZXIiLCJpc1dlYlB1c2hTdXBwb3J0ZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImdldFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24iLCJ0aGVuIiwicmVnaXN0cmF0aW9uIiwicHVzaE1hbmFnZXIiLCJnZXRTdWJzY3JpcHRpb24iLCJzdWJzY3JpcHRpb24iLCJ1cGRhdGVOZXdTdWJzY3JpcHRpb25PblNlcnZlciIsInNlcnZpY2VXb3JrZXJVcmwiLCJjYWxsYmFjayIsInJlZ2lzdGVyIiwiaW5zdGFsbGluZyIsIndhaXRpbmciLCJhY3RpdmUiLCJzdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJhcHBsaWNhdGlvblNlcnZlcktleSIsInVybEI2NFRvVWludDhBcnJheSIsInJlamVjdCIsInVzZXJWaXNpYmxlT25seSIsImlzV2ViUHVzaFN1YnNjcmliZWQiLCJzdWJzY3JpYmVkIiwidW5zdWJzY3JpYmUiLCJnZXRSZWdpc3RyYXRpb24iLCJiYXNlNjRTdHJpbmciLCJwYWRkaW5nIiwicmVwZWF0IiwiYmFzZTY0IiwicmVwbGFjZSIsInJhd0RhdGEiLCJhdG9iIiwib3V0cHV0QXJyYXkiLCJVaW50OEFycmF5IiwiY2hhckNvZGVBdCIsImdldEtleSIsImF1dGgiLCJrZXlBc2NpaSIsImJ0b2EiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJhdXRoQXNjaWkiLCJlbmRwb2ludCIsInByZXBhcmVkU3Vic2NyaXB0aW9uIiwicHJlcGFyZVN1YnNjcmlwdGlvbiIsInByZXBhcmVkU3Vic2NyaXB0aW9uU3RyaW5nIiwiZXhpc3RpbmdTdWJzY3JpcHRpb25TdHJpbmciLCJzZXRTdWJzY3JpcHRpb24iLCJfYnJvd3NlckRldGVjdG9yIiwiTGVhbnBsdW0iLCJfZW1haWwiLCJzZXRWYXJpYW50RGVidWdJbmZvRW5hYmxlZCIsImdldFZhcmlhbnREZWJ1Z0luZm8iLCJhY2Nlc3NLZXkiLCJob3N0IiwiZGV2aWNlTmFtZSIsIl9kZXZpY2VOYW1lIiwiZGV2aWNlTW9kZWwiLCJfZGV2aWNlTW9kZWwiLCJzeXN0ZW1OYW1lIiwiX3N5c3RlbU5hbWUiLCJzeXN0ZW1WZXJzaW9uIiwiX3N5c3RlbVZlcnNpb24iLCJzZXRWYXJpYWJsZXMiLCJjb29sZG93blNlY29uZHMiLCJnZXRWYXJpYWJsZXMiLCJjdXJyZW50IiwiVmFyY2FjaGUiLCJnZXRNZXNzYWdlcyIsImFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyIiwiYWRkVmFyaWFibGVzQ2hhbmdlZEhhbmRsZXIiLCJyZW1vdmVTdGFydFJlc3BvbnNlSGFuZGxlciIsInJlbW92ZVZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyIiwiaXNTdWNjZXNzIiwiaXNSZXNwb25zZVN1Y2Nlc3MiLCJ1c2VyQXR0cmlidXRlcyIsInRyaWdnZXJWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMiLCJzdGFydFJlc3BvbnNlIiwibGF0ZXN0VmVyc2lvbiIsInNldE1lc3NhZ2VzIiwiZ2V0RmlsdGVyZWRSZXN1bHRzIiwibG9hZERpZmZzIiwidHJpZ2dlclN0YXJ0SGFuZGxlcnMiLCJmaWx0ZXJNZXNzYWdlcyIsInNldFVzZXJBdHRyaWJ1dGVzIiwiZmlsZU5hbWUiLCJnZW5lcmF0ZVJlcXVlc3RVcmwiLCJhZGRNZXNzYWdlVmlldyIsInN1YnNjcmliZVVzZXIiLCJ1bnN1YnNjcmliZVVzZXIiLCJjbGVhclVzZXJDb250ZW50IiwiU29ja2V0SW9DbGllbnQiLCJzZWxmIiwiUmVxdWVzdCIsImxpbmUiLCJwYXJ0cyIsInNwbGl0IiwiaGVhcnRiZWF0Iiwic29ja2V0IiwiaGVhcnRiZWF0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibWVzc2FnZVBhcnRzIiwiY29kZSIsInNsaWNlIiwiam9pbiIsIm1lc3NhZ2VFdmVudCIsIm5hbWUiLCJjbG9zZSIsImFyZ3NKc29uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNSQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEseURBQWU7QUFDYkEsU0FBTyxFQUFFO0FBQ1BDLFNBQUssRUFBRSxPQURBO0FBRVBDLFFBQUksRUFBRSxNQUZDO0FBR1BDLFdBQU8sRUFBRSxTQUhGO0FBSVBDLFNBQUssRUFBRSxPQUpB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2pCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QyIsImZpbGUiOiJsZWFucGx1bS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkxlYW5wbHVtXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkxlYW5wbHVtXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGY3YjIzMjAwNThhY2M5OWJjMjVlIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fcm9vdC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBNRVRIT0RTOiB7XG4gICAgU1RBUlQ6ICdzdGFydCcsXG4gICAgU1RPUDogJ3N0b3AnLFxuICAgIEFEVkFOQ0U6ICdhZHZhbmNlJyxcbiAgICBUUkFDSzogJ3RyYWNrJyxcbiAgICBQQVVTRV9TRVNTSU9OOiAncGF1c2VTZXNzaW9uJyxcbiAgICBSRVNVTUVfU0VTU0lPTjogJ3Jlc3VtZVNlc3Npb24nLFxuICAgIFBBVVNFX1NUQVRFOiAncGF1c2VTdGF0ZScsXG4gICAgUkVTVU1FX1NUQVRFOiAncmVzdW1lU3RhdGUnLFxuICAgIERPV05MT0FEX0ZJTEU6ICdkb3dubG9hZEZpbGUnLFxuICAgIE1VTFRJOiAnbXVsdGknLFxuICAgIFNFVF9WQVJTOiAnc2V0VmFycycsXG4gICAgR0VUX1ZBUlM6ICdnZXRWYXJzJyxcbiAgICBTRVRfVVNFUl9BVFRSSUJVVEVTOiAnc2V0VXNlckF0dHJpYnV0ZXMnLFxuICAgIFNFVF9ERVZJQ0VfQVRUUklCVVRFUzogJ3NldERldmljZUF0dHJpYnV0ZXMnLFxuICAgIFVQTE9BRF9GSUxFOiAndXBsb2FkRmlsZScsXG4gICAgUkVHSVNURVJfREVWSUNFOiAncmVnaXN0ZXJEZXZpY2UnXG4gIH0sXG5cbiAgU0RLX1ZFUlNJT046ICcyLjAuMC1pZmxpeCcsXG5cbiAgQ0xJRU5UOiAnanMnLFxuXG4gIFBBUkFNUzoge1xuICAgIEFDVElPTjogJ2FjdGlvbicsXG4gICAgQVBQX0lEOiAnYXBwSWQnLFxuICAgIENMSUVOVDogJ2NsaWVudCcsXG4gICAgQ0xJRU5UX0tFWTogJ2NsaWVudEtleScsXG4gICAgREVWSUNFX0lEOiAnZGV2aWNlSWQnLFxuICAgIFNES19WRVJTSU9OOiAnc2RrVmVyc2lvbicsXG4gICAgVVNFUl9JRDogJ3VzZXJJZCcsXG4gICAgTkVXX1VTRVJfSUQ6ICduZXdVc2VySWQnLFxuICAgIERFVl9NT0RFOiAnZGV2TW9kZScsXG4gICAgVkVSU0lPTl9OQU1FOiAndmVyc2lvbk5hbWUnLFxuICAgIFNZU1RFTV9OQU1FOiAnc3lzdGVtTmFtZScsXG4gICAgU1lTVEVNX1ZFUlNJT046ICdzeXN0ZW1WZXJzaW9uJyxcbiAgICBCUk9XU0VSX05BTUU6ICdicm93c2VyTmFtZScsXG4gICAgQlJPV1NFUl9WRVJTSU9OOiAnYnJvd3NlclZlcnNpb24nLFxuICAgIERFVklDRV9OQU1FOiAnZGV2aWNlTmFtZScsXG4gICAgREVWSUNFX01PREVMOiAnZGV2aWNlTW9kZWwnLFxuICAgIFVTRVJfQVRUUklCVVRFUzogJ3VzZXJBdHRyaWJ1dGVzJyxcbiAgICBMT0NBTEU6ICdsb2NhbGUnLFxuICAgIENPVU5UUlk6ICdjb3VudHJ5JyxcbiAgICBSRUdJT046ICdyZWdpb24nLFxuICAgIENJVFk6ICdjaXR5JyxcbiAgICBMT0NBVElPTjogJ2xvY2F0aW9uJyxcbiAgICBTVEFURTogJ3N0YXRlJyxcbiAgICBJTkZPOiAnaW5mbycsXG4gICAgRVZFTlQ6ICdldmVudCcsXG4gICAgVkFMVUU6ICd2YWx1ZScsXG4gICAgRklMRU5BTUU6ICdmaWxlbmFtZScsXG4gICAgVElNRTogJ3RpbWUnLFxuICAgIERBVEE6ICdkYXRhJyxcbiAgICBWQVJTOiAndmFycycsXG4gICAgRklMRTogJ2ZpbGUnLFxuICAgIFNJWkU6ICdzaXplJyxcbiAgICBWQVJJQVRJT046ICd2YXJpYXRpb24nLFxuICAgIEhBU0g6ICdoYXNoJyxcbiAgICBFTUFJTDogJ2VtYWlsJyxcbiAgICBWQVJJQUJMRVM6ICd2YXJzJyxcbiAgICBQQVJBTVM6ICdwYXJhbXMnLFxuICAgIElOQ0xVREVfREVGQVVMVFM6ICdpbmNsdWRlRGVmYXVsdHMnLFxuICAgIElOQ0xVREVfVkFSSUFOVF9ERUJVR19JTkZPOiAnaW5jbHVkZVZhcmlhbnREZWJ1Z0luZm8nLFxuICAgIFdFQl9QVVNIX1NVQlNDUklQVElPTjogJ3dlYlB1c2hTdWJzY3JpcHRpb24nLFxuICAgIE1FU1NBR0VfSUQ6ICdtZXNzYWdlSWQnXG4gIH0sXG5cbiAgS0VZUzoge1xuICAgIElTX1JFR0lTVEVSRUQ6ICdpc1JlZ2lzdGVyZWQnLFxuICAgIExBVEVTVF9WRVJTSU9OOiAnbGF0ZXN0VmVyc2lvbicsXG4gICAgVkFSUzogJ3ZhcnMnLFxuICAgIFZBUklBTlRTOiAndmFyaWFudHMnLFxuICAgIFZBUklBTlRfREVCVUdfSU5GTzogJ3ZhcmlhbnREZWJ1Z0luZm8nLFxuICAgIEFDVElPTl9NRVRBREFUQTogJ2FjdGlvbk1ldGFkYXRhJyxcbiAgICBUT0tFTjogJ3Rva2VuJyxcbiAgICBNRVNTQUdFUzogJ21lc3NhZ2VzJ1xuICB9LFxuXG4gIERFRkFVTFRfS0VZUzoge1xuICAgIENPVU5UOiAnX19sZWFucGx1bV91bnN5bmNlZCcsXG4gICAgSVRFTTogJ19fbGVhbnBsdW1fdW5zeW5jZWRfJyxcbiAgICBWQVJJQUJMRVM6ICdfX2xlYW5wbHVtX3ZhcmlhYmxlcycsXG4gICAgVkFSSUFOVFM6ICdfX2xlYW5wbHVtX3ZhcmlhbnRzJyxcbiAgICBWQVJJQU5UX0RFQlVHX0lORk86ICdfX2xlYW5wbHVtX3ZhcmlhbnRfZGVidWdfaW5mbycsXG4gICAgQUNUSU9OX01FVEFEQVRBOiAnX19sZWFucGx1bV9hY3Rpb25fbWV0YWRhdGEnLFxuICAgIFRPS0VOOiAnX19sZWFucGx1bV90b2tlbicsXG4gICAgREVWSUNFX0lEOiAnX19sZWFucGx1bV9kZXZpY2VfaWQnLFxuICAgIFVTRVJfSUQ6ICdfX2xlYW5wbHVtX3VzZXJfaWQnLFxuICAgIFBVU0hfU1VCU0NSSVBUSU9OOiAnX19sZWFucGx1bV9wdXNoX3N1YnNjcmlwdGlvbicsXG4gICAgTUVTU0FHRV9WSUVXOiAnX19sZWFucGx1bV9tZXNzYWdlc192aWV3JyxcbiAgfSxcblxuICBWQUxVRVM6IHtcbiAgICBERVRFQ1Q6ICcoZGV0ZWN0KSdcbiAgfSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db25zdGFudHMuanMiLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vQ29uc3RhbnRzJ1xuXG4vKipcbiAqIExlYW5wbHVtIEFyZ3NCdWlsZGVyLCB1c2UgdG8gY29uc3RydWN0IHJlcXVlc3QgcGF5bG9hZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJnc0J1aWxkZXIge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGVtcHR5IHJlcXVlc3QgYXJndW1lbnQuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFyZ1N0cmluZyA9ICcnXG4gICAgdGhpcy5hcmdWYWx1ZXMgPSB7fVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBnaXZlbiBrZXksIHZhbHVlIHRvIHRoZSBwYXlsb2FkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgZm9yIHRoZSB2YWx1ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd8Ym9vbGVhbn0gdmFsdWUgVGhlIHZhbHVlIGZvciBnaXZlbiBrZXkuXG4gICAqIEByZXR1cm4ge0FyZ3NCdWlsZGVyfSBSZXR1cm5zIGFuIG9iamVjdCBvZiBBcmdzQnVpbGRlci5cbiAgICovXG4gIGFkZChrZXksIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGlmICh0aGlzLmFyZ1N0cmluZykge1xuICAgICAgdGhpcy5hcmdTdHJpbmcgKz0gJyYnXG4gICAgfVxuICAgIGxldCBlbmNvZGVkVXJpQ29tcG9uZW50ID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKVxuICAgIHRoaXMuYXJnU3RyaW5nICs9IGAke2tleX09JHtlbmNvZGVkVXJpQ29tcG9uZW50fWBcbiAgICB0aGlzLmFyZ1ZhbHVlc1trZXldID0gdmFsdWVcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLyoqXG4gICAqIENhY2hlIHRoZSBnaXZlbiBib2R5LlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IFtib2R5XSBBIGdpdmVuIGJvZHkuXG4gICAqIEByZXR1cm4ge0FyZ3NCdWlsZGVyfFN0cmluZ30gUmV0dXJucyBBcmdzQnVpbGRlciBpZiBib2R5IGdpdmVuLCBlbHNlIHRoZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkuXG4gICAqL1xuICBib2R5KGJvZHkpIHtcbiAgICBpZiAoYm9keSkge1xuICAgICAgdGhpcy5fYm9keSA9IGJvZHlcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9ib2R5XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIGF0dGFjaCBnaXZlbiBhcHBJZCBhbmQgYXBwS2V5IHRvIHJlcXVlc3QuXG4gICAqIEBwYXJhbSAge1N0cmluZ30gYXBwSWQgVGhlIGFwcElkIHRvIGF0dGFjaC5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBjbGllbnRLZXkgVGhlIGFwcEtleSB0byBhdHRhY2guXG4gICAqIEByZXR1cm4ge0FyZ3NCdWlsZGVyfSBSZXR1cm5zIGFuIG9iamVjdCBvZiBBcmdzQnVpbGRlci5cbiAgICovXG4gIGF0dGFjaEFwaUtleXMoYXBwSWQsIGNsaWVudEtleSkge1xuICAgIHJldHVybiB0aGlzLmFkZChDb25zdGFudHMuUEFSQU1TLkFQUF9JRCwgYXBwSWQpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5DTElFTlQsIENvbnN0YW50cy5DTElFTlQpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5DTElFTlRfS0VZLCBjbGllbnRLZXkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBhcmd1bWVudHMuXG4gICAqIEByZXR1cm4ge1N0cmluZ30gQXJndW1lbnRzIHN0cmluZy5cbiAgICovXG4gIGJ1aWxkKCkge1xuICAgIHJldHVybiB0aGlzLmFyZ1N0cmluZ1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgYXJndW1lbnQgdmFsdWVzLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBhcmd1bWVudCB2YWx1ZXMuXG4gICAqL1xuICBidWlsZERpY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJnVmFsdWVzXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BcmdzQnVpbGRlci5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vQ29uc3RhbnRzJ1xuaW1wb3J0IEFyZ3NCdWlsZGVyIGZyb20gJy4vQXJnc0J1aWxkZXInXG5pbXBvcnQgSW50ZXJuYWxTdGF0ZSBmcm9tICcuL0ludGVybmFsU3RhdGUnXG5pbXBvcnQgTmV0d29yayBmcm9tICcuL05ldHdvcmsnXG5pbXBvcnQgTG9jYWxTdG9yYWdlTWFuYWdlciBmcm9tICcuL0xvY2FsU3RvcmFnZU1hbmFnZXInXG5cbmxldCBsYXN0UmVxdWVzdFRpbWUgPSB1bmRlZmluZWRcbmxldCBjb29sZG93blRpbWVvdXQgPSBudWxsXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlYW5wbHVtUmVxdWVzdCB7XG5cbiAgc3RhdGljIGFwaVBhdGggPSAnaHR0cHM6Ly93d3cubGVhbnBsdW0uY29tL2FwaSdcbiAgc3RhdGljIGJhdGNoRW5hYmxlZCA9IHRydWVcbiAgc3RhdGljIGJhdGNoQ29vbGRvd24gPSA1XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBhY3Rpb25cbiAgICogQHBhcmFtIHBhcmFtc1xuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBAcGFyYW0gb3B0aW9ucy5zdWNjZXNzXG4gICAqIEBwYXJhbSBvcHRpb25zLmVycm9yXG4gICAqIEBwYXJhbSBvcHRpb25zLnJlc3BvbnNlXG4gICAqIEBwYXJhbSBvcHRpb25zLnF1ZXVlZFxuICAgKiBAcGFyYW0gb3B0aW9ucy5zZW5kTm93XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdGF0aWMgcmVxdWVzdChhY3Rpb24sIHBhcmFtcywgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IG5ldyBBcmdzQnVpbGRlcigpXG5cbiAgICAvLyBHZXQgb3IgY3JlYXRlIGRldmljZSBJRCBhbmQgdXNlciBJRC5cbiAgICBpZiAoIUxlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZCkge1xuICAgICAgTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkID1cbiAgICAgICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5ERVZJQ0VfSUQpXG4gICAgfVxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkKSB7XG4gICAgICBsZXQgaWQgPSAnJ1xuICAgICAgbGV0IHBvc3NpYmxlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonICtcbiAgICAgICAgICAnMDEyMzQ1Njc4OSdcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgICBpZCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSlcbiAgICAgIH1cbiAgICAgIExlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZCA9IGlkXG4gICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkRFVklDRV9JRCwgaWQpXG4gICAgfVxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCkge1xuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCA9IExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlVTRVJfSUQpXG4gICAgICBpZiAoIUxlYW5wbHVtUmVxdWVzdC51c2VySWQpIHtcbiAgICAgICAgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCA9IExlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZFxuICAgICAgfVxuICAgIH1cbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlVTRVJfSUQsIExlYW5wbHVtUmVxdWVzdC51c2VySWQpXG5cbiAgICBsZXQgYXJnc0J1aWxkZXIgPSBwYXJhbXNcbiAgICAgICAgLmF0dGFjaEFwaUtleXMoTGVhbnBsdW1SZXF1ZXN0LmFwcElkLCBMZWFucGx1bVJlcXVlc3QuY2xpZW50S2V5KVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuU0RLX1ZFUlNJT04sIENvbnN0YW50cy5TREtfVkVSU0lPTilcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkRFVklDRV9JRCwgTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVVNFUl9JRCwgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkFDVElPTiwgYWN0aW9uKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVkVSU0lPTl9OQU1FLCBMZWFucGx1bVJlcXVlc3QudmVyc2lvbk5hbWUpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5ERVZfTU9ERSwgSW50ZXJuYWxTdGF0ZS5kZXZNb2RlKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVElNRSwgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkudG9TdHJpbmcoKSlcbiAgICBsZXQgc3VjY2VzcyA9IG9wdGlvbnMuc3VjY2VzcyB8fCBvcHRpb25zLnJlc3BvbnNlXG4gICAgbGV0IGVycm9yID0gb3B0aW9ucy5lcnJvciB8fCBvcHRpb25zLnJlc3BvbnNlXG5cbiAgICBpZiAoIUxlYW5wbHVtUmVxdWVzdC5hcHBJZCB8fCAhTGVhbnBsdW1SZXF1ZXN0LmNsaWVudEtleSkge1xuICAgICAgbGV0IGVyciA9ICdMZWFucGx1bSBBcHAgSUQgYW5kIGNsaWVudCBrZXkgYXJlIG5vdCBzZXQuIE1ha2Ugc3VyZSB5b3UgJyArXG4gICAgICAgICAgJ2FyZSBjYWxsaW5nIHNldEFwcElkRm9yRGV2ZWxvcG1lbnRNb2RlIG9yIHNldEFwcElkRm9yUHJvZHVjdGlvbk1vZGUgJyArXG4gICAgICAgICAgJ2JlZm9yZSBpc3N1aW5nIEFQSSBjYWxscy4nXG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgIGlmIChlcnJvcikgZXJyb3IoZXJyKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5ib2R5KCkpIHtcbiAgICAgIE5ldHdvcmsuYWpheCgnUE9TVCcsIGAke0xlYW5wbHVtUmVxdWVzdC5hcGlQYXRofT8ke2FyZ3NCdWlsZGVyLmJ1aWxkKCl9YCxcbiAgICAgICAgICBwYXJhbXMuYm9keSgpLCBzdWNjZXNzLCBlcnJvciwgb3B0aW9ucy5xdWV1ZWQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgc2VuZE5vdyA9IEludGVybmFsU3RhdGUuZGV2TW9kZSB8fCBvcHRpb25zLnNlbmROb3cgfHwgIUxlYW5wbHVtUmVxdWVzdC5iYXRjaEVuYWJsZWRcblxuICAgIGxldCBzZW5kVW5zZW50UmVxdWVzdHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxldCByZXF1ZXN0c1RvU2VuZCA9IExlYW5wbHVtUmVxdWVzdC5wb3BVbnNlbnRSZXF1ZXN0cygpXG4gICAgICBpZiAocmVxdWVzdHNUb1NlbmQubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgcmVxdWVzdERhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgJ2RhdGEnOiByZXF1ZXN0c1RvU2VuZFxuICAgICAgICB9KVxuICAgICAgICBsZXQgbXVsdGlSZXF1ZXN0QXJncyA9IG5ldyBBcmdzQnVpbGRlcigpXG4gICAgICAgICAgICAuYXR0YWNoQXBpS2V5cyhMZWFucGx1bVJlcXVlc3QuYXBwSWQsIExlYW5wbHVtUmVxdWVzdC5jbGllbnRLZXkpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuU0RLX1ZFUlNJT04sIENvbnN0YW50cy5TREtfVkVSU0lPTilcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5BQ1RJT04sIENvbnN0YW50cy5NRVRIT0RTLk1VTFRJKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlRJTUUsIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApLnRvU3RyaW5nKCkudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIC5idWlsZCgpXG4gICAgICAgIE5ldHdvcmsuYWpheCgnUE9TVCcsIGAke0xlYW5wbHVtUmVxdWVzdC5hcGlQYXRofT8ke211bHRpUmVxdWVzdEFyZ3N9YCwgcmVxdWVzdERhdGEsIHN1Y2Nlc3MsIGVycm9yLFxuICAgICAgICAgICAgb3B0aW9ucy5xdWV1ZWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGVhbCB3aXRoIGNvb2xkb3duLlxuICAgIGlmICghc2VuZE5vdyAmJiBMZWFucGx1bVJlcXVlc3QuYmF0Y2hDb29sZG93bikge1xuICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMFxuICAgICAgaWYgKCFsYXN0UmVxdWVzdFRpbWUgfHxcbiAgICAgICAgICBub3cgLSBsYXN0UmVxdWVzdFRpbWUgPj0gTGVhbnBsdW1SZXF1ZXN0LmJhdGNoQ29vbGRvd24pIHtcbiAgICAgICAgc2VuZE5vdyA9IHRydWVcbiAgICAgICAgbGFzdFJlcXVlc3RUaW1lID0gbm93XG4gICAgICB9IGVsc2UgaWYgKCFjb29sZG93blRpbWVvdXQpIHtcbiAgICAgICAgY29vbGRvd25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb29sZG93blRpbWVvdXQgPSBudWxsXG4gICAgICAgICAgbGFzdFJlcXVlc3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwXG4gICAgICAgICAgc2VuZFVuc2VudFJlcXVlc3RzKClcbiAgICAgICAgfSwgKExlYW5wbHVtUmVxdWVzdC5iYXRjaENvb2xkb3duIC0gKG5vdyAtIGxhc3RSZXF1ZXN0VGltZSkpICogMTAwMClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMZWFucGx1bVJlcXVlc3Quc2F2ZVJlcXVlc3RGb3JMYXRlcihhcmdzQnVpbGRlci5idWlsZERpY3QoKSlcbiAgICBpZiAoc2VuZE5vdykge1xuICAgICAgc2VuZFVuc2VudFJlcXVlc3RzKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2VuZXJhdGVSZXF1ZXN0VXJsKGFjdGlvbiwgcXVlcnlQYXJhbXMpIHtcbiAgICBxdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zIHx8IG5ldyBBcmdzQnVpbGRlcigpXG5cbiAgICAvLyBHZXQgb3IgY3JlYXRlIGRldmljZSBJRCBhbmQgdXNlciBJRC5cbiAgICBpZiAoIUxlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZCkge1xuICAgICAgTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkID1cbiAgICAgICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5ERVZJQ0VfSUQpXG4gICAgfVxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkKSB7XG4gICAgICBsZXQgaWQgPSAnJ1xuICAgICAgbGV0IHBvc3NpYmxlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonICtcbiAgICAgICAgICAnMDEyMzQ1Njc4OSdcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgICBpZCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSlcbiAgICAgIH1cbiAgICAgIExlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZCA9IGlkXG4gICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkRFVklDRV9JRCwgaWQpXG4gICAgfVxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCkge1xuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCA9IExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlVTRVJfSUQpXG4gICAgICBpZiAoIUxlYW5wbHVtUmVxdWVzdC51c2VySWQpIHtcbiAgICAgICAgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCA9IExlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZFxuICAgICAgfVxuICAgIH1cbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlVTRVJfSUQsIExlYW5wbHVtUmVxdWVzdC51c2VySWQpXG5cbiAgICBsZXQgYXJnc0J1aWxkZXIgPSBxdWVyeVBhcmFtc1xuICAgICAgICAuYXR0YWNoQXBpS2V5cyhMZWFucGx1bVJlcXVlc3QuYXBwSWQsIExlYW5wbHVtUmVxdWVzdC5jbGllbnRLZXkpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5TREtfVkVSU0lPTiwgQ29uc3RhbnRzLlNES19WRVJTSU9OKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuREVWSUNFX0lELCBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5VU0VSX0lELCBMZWFucGx1bVJlcXVlc3QudXNlcklkKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQUNUSU9OLCBhY3Rpb24pXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5WRVJTSU9OX05BTUUsIExlYW5wbHVtUmVxdWVzdC52ZXJzaW9uTmFtZSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkRFVl9NT0RFLCBJbnRlcm5hbFN0YXRlLmRldk1vZGUpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5USU1FLCAobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKS50b1N0cmluZygpKVxuXG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QuYXBwSWQgfHwgIUxlYW5wbHVtUmVxdWVzdC5jbGllbnRLZXkpIHtcbiAgICAgIGxldCBlcnIgPSAnTGVhbnBsdW0gQXBwIElEIGFuZCBjbGllbnQga2V5IGFyZSBub3Qgc2V0LiBNYWtlIHN1cmUgeW91ICcgK1xuICAgICAgICAgICdhcmUgY2FsbGluZyBzZXRBcHBJZEZvckRldmVsb3BtZW50TW9kZSBvciBzZXRBcHBJZEZvclByb2R1Y3Rpb25Nb2RlICcgK1xuICAgICAgICAgICdiZWZvcmUgaXNzdWluZyBBUEkgY2FsbHMuJ1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKVxuICAgIH1cblxuICAgIHJldHVybiBgJHtMZWFucGx1bVJlcXVlc3QuYXBpUGF0aH0/JHthcmdzQnVpbGRlci5idWlsZCgpfWBcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBuZXR3b3JrIHRpbWVvdXQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWNvbmRzIFRoZSB0aW1lb3V0IGluIHNlY29uZHMuXG4gICAqL1xuICBzdGF0aWMgc2V0TmV0d29ya1RpbWVvdXQoc2Vjb25kcykge1xuICAgIE5ldHdvcmsuc2V0TmV0d29ya1RpbWVvdXQoc2Vjb25kcylcbiAgfVxuXG4gIHN0YXRpYyBzYXZlUmVxdWVzdEZvckxhdGVyKGFyZ3MpIHtcbiAgICBsZXQgY291bnQgPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5DT1VOVCkgfHwgMFxuICAgIGxldCBpdGVtS2V5ID0gQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5JVEVNICsgY291bnRcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShpdGVtS2V5LCBKU09OLnN0cmluZ2lmeShhcmdzKSlcbiAgICBjb3VudCsrXG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5DT1VOVCwgY291bnQpXG4gIH1cblxuICBzdGF0aWMgcG9wVW5zZW50UmVxdWVzdHMoKSB7XG4gICAgbGV0IHJlcXVlc3REYXRhID0gW11cbiAgICBsZXQgY291bnQgPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5DT1VOVCkgfHwgMFxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIucmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkNPVU5UKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgbGV0IGl0ZW1LZXkgPSBDb25zdGFudHMuREVGQVVMVF9LRVlTLklURU0gKyBpXG4gICAgICB0cnkge1xuICAgICAgICBsZXQgcmVxdWVzdEFyZ3MgPSBKU09OLnBhcnNlKExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShpdGVtS2V5KSlcbiAgICAgICAgcmVxdWVzdERhdGEucHVzaChyZXF1ZXN0QXJncylcbiAgICAgIH0gY2F0Y2ggKGlnbm9yZWQpIHsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgICB9XG4gICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnJlbW92ZUZyb21Mb2NhbFN0b3JhZ2UoaXRlbUtleSlcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3REYXRhXG4gIH1cblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vIFJlc3BvbnNlIHBhcnNpbmcgLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgc3RhdGljIG51bVJlc3BvbnNlcyhyZXNwb25zZSkge1xuICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLnJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UucmVzcG9uc2UubGVuZ3RoXG4gIH1cblxuICBzdGF0aWMgZ2V0UmVzcG9uc2VBdChyZXNwb25zZSwgaW5kZXgpIHtcbiAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5yZXNwb25zZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLnJlc3BvbnNlW2luZGV4XVxuICB9XG5cbiAgc3RhdGljIGdldExhc3RSZXNwb25zZShyZXNwb25zZSkge1xuICAgIGxldCBjb3VudCA9IExlYW5wbHVtUmVxdWVzdC5udW1SZXNwb25zZXMocmVzcG9uc2UpXG4gICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgcmV0dXJuIExlYW5wbHVtUmVxdWVzdC5nZXRSZXNwb25zZUF0KHJlc3BvbnNlLCBjb3VudCAtIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGlzUmVzcG9uc2VTdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiAhIXJlc3BvbnNlLnN1Y2Nlc3NcbiAgfVxuXG4gIHN0YXRpYyBnZXRSZXNwb25zZUVycm9yKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgbGV0IGVycm9yID0gcmVzcG9uc2UuZXJyb3JcbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gZXJyb3IubWVzc2FnZVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGVhbnBsdW1SZXF1ZXN0LmpzIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cblxubGV0IGxvY2FsU3RvcmFnZUVuYWJsZWRcbmxldCBhbHRlcm5hdGVMb2NhbFN0b3JhZ2UgPSB7fVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhbFN0b3JhZ2VNYW5hZ2VyIHtcbiAgc3RhdGljIGdldEZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZUVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gYWx0ZXJuYXRlTG9jYWxTdG9yYWdlW2tleV1cbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZVtrZXldXG4gIH1cblxuICBzdGF0aWMgc2F2ZVRvTG9jYWxTdG9yYWdlKGtleSwgdmFsdWUpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGFsdGVybmF0ZUxvY2FsU3RvcmFnZVtrZXldID0gdmFsdWVcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZUVuYWJsZWQgPSBmYWxzZVxuICAgICAgYWx0ZXJuYXRlTG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVGcm9tTG9jYWxTdG9yYWdlKGtleSkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2VFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgZGVsZXRlIGFsdGVybmF0ZUxvY2FsU3RvcmFnZVtrZXldXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VFbmFibGVkID0gZmFsc2VcbiAgICAgIGRlbGV0ZSBhbHRlcm5hdGVMb2NhbFN0b3JhZ2Vba2V5XVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xvY2FsU3RvcmFnZU1hbmFnZXIuanMiLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTGlzdENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldE1hcERhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVybmFsU3RhdGUge1xuICBzdGF0aWMgZGV2TW9kZSA9IGZhbHNlXG5cbiAgc3RhdGljIHZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycyA9IFtdXG4gIHN0YXRpYyBoYXNSZWNlaXZlZERpZmZzID0gZmFsc2VcblxuICBzdGF0aWMgc3RhcnRIYW5kbGVycyA9IFtdXG4gIHN0YXRpYyBoYXNTdGFydGVkID0gZmFsc2VcbiAgc3RhdGljIHN0YXJ0U3VjY2Vzc2Z1bCA9IGZhbHNlXG4gIHN0YXRpYyB2YXJpYW50RGVidWdJbmZvRW5hYmxlZCA9IGZhbHNlXG5cbiAgc3RhdGljIGFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBJbnRlcm5hbFN0YXRlLnN0YXJ0SGFuZGxlcnMucHVzaChoYW5kbGVyKVxuICAgIGlmIChJbnRlcm5hbFN0YXRlLmhhc1N0YXJ0ZWQpIHtcbiAgICAgIGhhbmRsZXIoSW50ZXJuYWxTdGF0ZS5zdGFydFN1Y2Nlc3NmdWwpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJlbW92ZVN0YXJ0UmVzcG9uc2VIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBsZXQgaWR4ID0gSW50ZXJuYWxTdGF0ZS5zdGFydEhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcilcbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgIEludGVybmFsU3RhdGUuc3RhcnRIYW5kbGVycy5zcGxpY2UoaWR4LCAxKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB0cmlnZ2VyU3RhcnRIYW5kbGVycygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEludGVybmFsU3RhdGUuc3RhcnRIYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgSW50ZXJuYWxTdGF0ZS5zdGFydEhhbmRsZXJzW2ldKEludGVybmFsU3RhdGUuc3RhcnRTdWNjZXNzZnVsKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhZGRWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgSW50ZXJuYWxTdGF0ZS52YXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMucHVzaChoYW5kbGVyKVxuICAgIGlmIChJbnRlcm5hbFN0YXRlLmhhc1JlY2VpdmVkRGlmZnMpIHtcbiAgICAgIGhhbmRsZXIoKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgbGV0IGlkeCA9IEludGVybmFsU3RhdGUudmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcilcbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgIEludGVybmFsU3RhdGUudmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzLnNwbGljZShpZHgsIDEpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHRyaWdnZXJWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBJbnRlcm5hbFN0YXRlLnZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBJbnRlcm5hbFN0YXRlLnZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyc1tpXSgpXG4gICAgICB9XG4gIH1cblxuICAgIHN0YXRpYyBzZXRWYXJpYW50RGVidWdJbmZvRW5hYmxlZCh2YXJpYW50RGVidWdJbmZvRW5hYmxlZCkge1xuICAgIEludGVybmFsU3RhdGUudmFyaWFudERlYnVnSW5mb0VuYWJsZWQgPSB2YXJpYW50RGVidWdJbmZvRW5hYmxlZFxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbnRlcm5hbFN0YXRlLmpzIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cblxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL0NvbnN0YW50cydcbmltcG9ydCBJbnRlcm5hbFN0YXRlIGZyb20gJy4vSW50ZXJuYWxTdGF0ZSdcbmltcG9ydCBBcmdzQnVpbGRlciBmcm9tICcuL0FyZ3NCdWlsZGVyJ1xuaW1wb3J0IExvY2FsU3RvcmFnZU1hbmFnZXIgZnJvbSAnLi9Mb2NhbFN0b3JhZ2VNYW5hZ2VyJ1xuaW1wb3J0IExlYW5wbHVtUmVxdWVzdCBmcm9tICcuL0xlYW5wbHVtUmVxdWVzdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFyQ2FjaGUge1xuICBzdGF0aWMgZGlmZnMgPSB1bmRlZmluZWRcbiAgc3RhdGljIHZhcmlhYmxlcyA9IG51bGxcbiAgc3RhdGljIHZhcmlhbnRzID0gW11cbiAgc3RhdGljIHZhcmlhbnREZWJ1Z0luZm8gPSB7fVxuICBzdGF0aWMgbWVyZ2VkID0gdW5kZWZpbmVkXG4gIHN0YXRpYyBvblVwZGF0ZSA9IHVuZGVmaW5lZFxuICBzdGF0aWMgdG9rZW4gPSAnJ1xuICBzdGF0aWMgYWN0aW9uTWV0YWRhdGEgPSB7fVxuICBzdGF0aWMgbWVzc2FnZXNWaWV3ID0gdW5kZWZpbmVkXG4gIHN0YXRpYyBtZXNzYWdlc1ZpZXdQZXJTZXNzaW9uID0gW11cbiAgc3RhdGljIG1lc3NhZ2VzXG5cbiAgc3RhdGljIGFwcGx5RGlmZnMoZGlmZnMsIHZhcmlhbnRzLCBhY3Rpb25NZXRhZGF0YSkge1xuICAgIFZhckNhY2hlLmRpZmZzID0gZGlmZnNcbiAgICBWYXJDYWNoZS52YXJpYW50cyA9IHZhcmlhbnRzXG4gICAgVmFyQ2FjaGUuYWN0aW9uTWV0YWRhdGEgPSBhY3Rpb25NZXRhZGF0YVxuICAgIEludGVybmFsU3RhdGUuaGFzUmVjZWl2ZWREaWZmcyA9IHRydWVcbiAgICBWYXJDYWNoZS5tZXJnZWQgPSBWYXJDYWNoZS5tZXJnZUhlbHBlcihWYXJDYWNoZS52YXJpYWJsZXMsIGRpZmZzKVxuICAgIFZhckNhY2hlLnNhdmVEaWZmcygpXG4gICAgaWYgKFZhckNhY2hlLm9uVXBkYXRlKSB7XG4gICAgICBWYXJDYWNoZS5vblVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGxvYWREaWZmcygpIHtcbiAgICB0cnkge1xuICAgICAgVmFyQ2FjaGUuYXBwbHlEaWZmcyhcbiAgICAgICAgICBKU09OLnBhcnNlKExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShcbiAgICAgICAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQUJMRVMpIHx8IG51bGwpLFxuICAgICAgICAgIEpTT04ucGFyc2UoTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKFxuICAgICAgICAgICAgICBDb25zdGFudHMuREVGQVVMVF9LRVlTLlZBUklBTlRTKSB8fCBudWxsKSxcbiAgICAgICAgICBKU09OLnBhcnNlKExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShcbiAgICAgICAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5BQ1RJT05fTUVUQURBVEEpIHx8IG51bGwpKVxuICAgICAgVmFyQ2FjaGUudG9rZW4gPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5UT0tFTilcbiAgICAgIFZhckNhY2hlLnZhcmlhbnREZWJ1Z0luZm8gPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQU5UX0RFQlVHX0lORk8pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coYExlYW5wbHVtOiBJbnZhbGlkIGRpZmZzOiAke2V9YClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgc2F2ZURpZmZzKCkge1xuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKFxuICAgICAgICBDb25zdGFudHMuREVGQVVMVF9LRVlTLlZBUklBQkxFUywgSlNPTi5zdHJpbmdpZnkoVmFyQ2FjaGUuZGlmZnMgfHwge30pKVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKFxuICAgICAgICBDb25zdGFudHMuREVGQVVMVF9LRVlTLlZBUklBTlRTLCBKU09OLnN0cmluZ2lmeShWYXJDYWNoZS52YXJpYW50cyB8fCBbXSlcbiAgICApXG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5BQ1RJT05fTUVUQURBVEEsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KFZhckNhY2hlLmFjdGlvbk1ldGFkYXRhIHx8IHt9KSlcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlZBUklBTlRfREVCVUdfSU5GTyxcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoVmFyQ2FjaGUudmFyaWFudERlYnVnSW5mbyB8fCB7fSkpXG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5UT0tFTiwgVmFyQ2FjaGUudG9rZW4pXG4gIH1cblxuICAvKipcbiAgICogcmVjb3JkIHZpZXcgbWVzc2FnZSBpbiBsb2NhbCBzdG9yYWdlIGFuZCAgaW4gbWVtb3J5IChha2Egc2Vzc2lvbilcbiAgICogQHBhcmFtIG1lc3NhZ2VJZFxuICAgKi9cbiAgc3RhdGljIGFkZE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZCl7XG4gICAgY29uc3QgbWVzc2FnZVZpZXcgPSBWYXJDYWNoZS5nZXRNZXNzYWdlc1ZpZXcoKVttZXNzYWdlSWRdXG4gICAgaWYgKG1lc3NhZ2VWaWV3ID09PSB1bmRlZmluZWQpe1xuICAgICAgVmFyQ2FjaGUubWVzc2FnZXNWaWV3W21lc3NhZ2VJZF0gPSBbXVxuICAgIH1cbiAgICBjb25zdCBtZXNzYWdlVmlld1BlclNlc3Npb24gPVZhckNhY2hlLm1lc3NhZ2VzVmlld1BlclNlc3Npb25bbWVzc2FnZUlkXSB8fCBbXVxuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIG1lc3NhZ2VWaWV3UGVyU2Vzc2lvbi5wdXNoKHt0Om5vd30pXG4gICAgVmFyQ2FjaGUubWVzc2FnZXNWaWV3W21lc3NhZ2VJZF0ucHVzaCh7dDpub3d9KVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuTUVTU0FHRV9WSUVXLEpTT04uc3RyaW5naWZ5KFxuICAgICAgVmFyQ2FjaGUubWVzc2FnZXNWaWV3IHx8IHt9KSlcbiAgfVxuXG5cblxuICAvKipcbiAgICogZ2V0IGFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgbWVzc2FnZVZpZXdzIHdpdGggbWVzc2FnZUlkIGFzIGtleSwgcGVyIHNlc3Npb24gb3IgZnJvbSBzdGFydFxuICAgKiBAcGFyYW0gc2Vzc2lvbiB7Qm9vbGVhbiB8IHVuZGVmaW5lZH1cbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXRNZXNzYWdlc1ZpZXcoc2Vzc2lvbil7XG4gICAgaWYoc2Vzc2lvbil7XG4gICAgICByZXR1cm4gVmFyQ2FjaGUubWVzc2FnZXNWaWV3UGVyU2Vzc2lvblxuICAgIH1cbiAgICBpZihWYXJDYWNoZS5tZXNzYWdlc1ZpZXcgPT09IHVuZGVmaW5lZCl7XG4gICAgICBWYXJDYWNoZS5tZXNzYWdlc1ZpZXcgPSBKU09OLnBhcnNlKFxuICAgICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5NRVNTQUdFX1ZJRVcpIHx8ICd7fScpXG4gICAgfVxuICAgIHJldHVybiBWYXJDYWNoZS5tZXNzYWdlc1ZpZXdcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgYWxsIHZpZXcgZm9yIGEgZ2l2ZW4gbWVzc2FnZSBlaXRoZXIgZm9ybSB0aGUgc3RhcnQgb3IgcGVyIHNlc3Npb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VJZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW4gfCB1bmRlZmluZWR9IHNlc3Npb25cbiAgICogQHJldHVybnMgeyp8QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgZ2V0TWVzc2FnZVZpZXcobWVzc2FnZUlkLCBzZXNzaW9uKXtcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0TWVzc2FnZXNWaWV3KHNlc3Npb24pW21lc3NhZ2VJZF0gfHwgW11cbiAgfVxuICBzdGF0aWMgc2V0VmFyaWFibGVzKHZhcmlhYmxlcykge1xuICAgIFZhckNhY2hlLnZhcmlhYmxlcyA9IHZhcmlhYmxlc1xuICB9XG5cbiAgc3RhdGljIGdldFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gVmFyQ2FjaGUubWVyZ2VkICE9PSB1bmRlZmluZWQgPyBWYXJDYWNoZS5tZXJnZWQgOiBWYXJDYWNoZS52YXJpYWJsZXNcbiAgfVxuXG4gIHN0YXRpYyBnZXRWYXJpYW50RGVidWdJbmZvKCkge1xuICAgIHJldHVybiBWYXJDYWNoZS52YXJpYW50RGVidWdJbmZvXG4gIH1cblxuICBzdGF0aWMgc2VuZFZhcmlhYmxlcygpIHtcbiAgICBsZXQgYm9keSA9IHt9XG4gICAgYm9keVtDb25zdGFudHMuUEFSQU1TLlZBUklBQkxFU10gPSBWYXJDYWNoZS52YXJpYWJsZXNcbiAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5TRVRfVkFSUyxcbiAgICAgICAgbmV3IEFyZ3NCdWlsZGVyKCkuYm9keShKU09OLnN0cmluZ2lmeShib2R5KSksIHtcbiAgICAgICAgICBzZW5kTm93OiB0cnVlXG4gICAgICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZ2V0TWVzc2FnZXMoKSB7XG4gICAgcmV0dXJuIFZhckNhY2hlLm1lc3NhZ2VzXG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIG1lc3NhZ2UgeyBtZXNzYWdlSWQ6e21lc3NhZ2V9LCB9IHRvIFt7bWVzc2FnZX1dIGFuZCBzdG9yZVxuICAgKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZXNcbiAgICovXG4gIHN0YXRpYyBzZXRNZXNzYWdlcyhtZXNzYWdlcykge1xuICAgIFZhckNhY2hlLm1lc3NhZ2VzID0gT2JqZWN0LmVudHJpZXMobWVzc2FnZXMpXG4gICAgICAgIC5tYXAoKFtpZCwgbWVzc2FnZV0pID0+ICh7aWQsIC4uLm1lc3NhZ2V9KSlcbiAgfVxuXG4gICAgc3RhdGljIG1lcmdlSGVscGVyKHZhcnMsIGRpZmYpIHtcbiAgICBpZiAodHlwZW9mIGRpZmYgPT09ICdudW1iZXInIHx8IHR5cGVvZiBkaWZmID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIGRpZmYgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZGlmZlxuICAgIH1cbiAgICBpZiAoZGlmZiA9PT0gbnVsbCB8fCBkaWZmID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB2YXJzXG4gICAgfVxuXG4gICAgbGV0IG9iakl0ZXJhdG9yID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZikge1xuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZihvYmpbaV0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAobGV0IGF0dHIgaW4gb2JqKSB7XG4gICAgICAgICAgICAvLyBUaGlzIHNlZW1zIHRvIGJlIGJlc3QgcHJhY3RpY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9lc2xpbnQvZXNsaW50L2lzc3Vlcy83MDcxXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlZmxlY3RcbiAgICAgICAgICAgIGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgYXR0cikpIHtcbiAgICAgICAgICAgICAgZihhdHRyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgdmFyc0l0ZXJhdG9yID0gb2JqSXRlcmF0b3IodmFycylcbiAgICBsZXQgZGlmZkl0ZXJhdG9yID0gb2JqSXRlcmF0b3IoZGlmZilcblxuICAgIC8vIEluZmVyIHRoYXQgdGhlIGRpZmZzIGlzIGFuIGFycmF5IGlmIHRoZSB2YXJzIHZhbHVlIGRvZXNuJ3QgZXhpc3QgdG8gdGVsbCB1cyB0aGUgdHlwZS5cbiAgICBsZXQgaXNBcnJheSA9IGZhbHNlXG4gICAgaWYgKHZhcnMgPT09IG51bGwpIHtcbiAgICAgIGlmICghKGRpZmYgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgaXNBcnJheSA9IG51bGxcbiAgICAgICAgZm9yIChsZXQgYXR0cmlidXRlIGluIGRpZmYpIHtcbiAgICAgICAgICBpZiAoIWRpZmYuaGFzT3duUHJvcGVydHkoYXR0cmlidXRlKSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzQXJyYXkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGlzQXJyYXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghKHR5cGVvZiBhdHRyaWJ1dGUgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICAgICAgaXNBcnJheSA9IGZhbHNlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYXR0cmlidXRlLmxlbmd0aCA8IDMgfHwgYXR0cmlidXRlLmNoYXJBdCgwKSAhPT0gJ1snIHx8XG4gICAgICAgICAgICAgIGF0dHJpYnV0ZS5jaGFyQXQoYXR0cmlidXRlLmxlbmd0aCAtIDEpICE9PSAnXScpIHtcbiAgICAgICAgICAgIGlzQXJyYXkgPSBmYWxzZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHZhclN1YnNjcmlwdCA9IGF0dHJpYnV0ZS5zdWJzdHJpbmcoMSwgYXR0cmlidXRlLmxlbmd0aCAtIDEpXG4gICAgICAgICAgaWYgKCFwYXJzZUludCh2YXJTdWJzY3JpcHQpLnRvU3RyaW5nKCkgPT09IHZhclN1YnNjcmlwdCkge1xuICAgICAgICAgICAgaXNBcnJheSA9IGZhbHNlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1lcmdlIGFycmF5cy5cbiAgICBpZiAodmFycyBpbnN0YW5jZW9mIEFycmF5IHx8IGlzQXJyYXkpIHtcbiAgICAgIGxldCBtZXJnZWQgPSBbXVxuICAgICAgdmFyc0l0ZXJhdG9yKGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgICAgbWVyZ2VkLnB1c2goYXR0cilcbiAgICAgIH0pXG4gICAgICBkaWZmSXRlcmF0b3IoZnVuY3Rpb24odmFyU3Vic2NyaXB0KSB7XG4gICAgICAgIGxldCBzdWJzY3JpcHQgPVxuICAgICAgICAgICAgcGFyc2VJbnQodmFyU3Vic2NyaXB0LnN1YnN0cmluZygxLCB2YXJTdWJzY3JpcHQubGVuZ3RoIC0gMSkpXG4gICAgICAgIGxldCBkaWZmVmFsdWUgPSBkaWZmW3ZhclN1YnNjcmlwdF1cbiAgICAgICAgd2hpbGUgKHN1YnNjcmlwdCA+PSBtZXJnZWQubGVuZ3RoKSB7XG4gICAgICAgICAgbWVyZ2VkLnB1c2gobnVsbClcbiAgICAgICAgfVxuICAgICAgICBtZXJnZWRbc3Vic2NyaXB0XSA9IFZhckNhY2hlLm1lcmdlSGVscGVyKG1lcmdlZFtzdWJzY3JpcHRdLCBkaWZmVmFsdWUpXG4gICAgICB9KVxuICAgICAgcmV0dXJuIG1lcmdlZFxuICAgIH1cblxuICAgIC8vIE1lcmdlIGRpY3Rpb25hcmllcy5cbiAgICBsZXQgbWVyZ2VkID0ge31cbiAgICB2YXJzSXRlcmF0b3IoZnVuY3Rpb24oYXR0cikge1xuICAgICAgaWYgKGRpZmZbYXR0cl0gPT09IG51bGwgfHwgZGlmZlthdHRyXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1lcmdlZFthdHRyXSA9IHZhcnNbYXR0cl1cbiAgICAgIH1cbiAgICB9KVxuICAgIGRpZmZJdGVyYXRvcihmdW5jdGlvbihhdHRyKSB7XG4gICAgICBtZXJnZWRbYXR0cl0gPSBWYXJDYWNoZS5tZXJnZUhlbHBlcih2YXJzICE9PSBudWxsID8gdmFyc1thdHRyXSA6IG51bGwsXG4gICAgICAgICAgZGlmZlthdHRyXSlcbiAgICB9KVxuICAgIHJldHVybiBtZXJnZWRcbiAgfVxuXG4gIHN0YXRpYyBjbGVhclVzZXJDb250ZW50KCkge1xuICAgIFZhckNhY2hlLmRpZmZzID0gdW5kZWZpbmVkXG4gICAgVmFyQ2FjaGUudmFyaWFibGVzID0gbnVsbFxuICAgIFZhckNhY2hlLnZhcmlhbnRzID0gW11cbiAgICBWYXJDYWNoZS52YXJpYW50RGVidWdJbmZvID0ge31cbiAgICBWYXJDYWNoZS5tZXJnZWQgPSB1bmRlZmluZWRcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVmFyQ2FjaGUuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oKXtcbiAgdmFyIHRvcGljcyA9IHt9XG5cbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uKHRvcGljLCBsaXN0ZW5lcikge1xuICAgICAgaWYoIXRvcGljcy5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRvcGljcywgdG9waWMpKSB0b3BpY3NbdG9waWNdID0gW11cblxuICAgICAgdmFyIGluZGV4ID0gdG9waWNzW3RvcGljXS5wdXNoKGxpc3RlbmVyKSAtIDFcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkZWxldGUgdG9waWNzW3RvcGljXVtpbmRleF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcHVibGlzaDogZnVuY3Rpb24odG9waWMsIGluZm8pIHtcbiAgICAgIGlmKCF0b3BpY3MuaGFzT3duUHJvcGVydHkuY2FsbCh0b3BpY3MsIHRvcGljKSkgcmV0dXJuXG5cbiAgICAgIHRvcGljc1t0b3BpY10uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGl0ZW0oaW5mbyAhPSB1bmRlZmluZWQgPyBpbmZvIDoge30pXG4gICAgICB9KVxuICAgIH1cbiAgfVxufSkoKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0V2ZW50cy5qcyIsIi8qKlxuICogQWpheCBmdW5jdGlvbnMgZnJvbTpcbiAqXG4gKiBQYXJzZSBKYXZhU2NyaXB0IFNES1xuICogVmVyc2lvbjogMS4xLjVcbiAqIEJ1aWx0OiBNb24gT2N0IDAxIDIwMTIgMTc6NTc6MTNcbiAqIGh0dHA6Ly9wYXJzZS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAxMiBQYXJzZSwgSW5jLlxuICogVGhlIFBhcnNlIEphdmFTY3JpcHQgU0RLIGlzIGZyZWVseSBkaXN0cmlidXRhYmxlIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5sZXQgcmVxdWVzdFF1ZXVlID0gW11cbmxldCBuZXR3b3JrVGltZW91dFNlY29uZHMgPSAxMFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXR3b3JrIHtcbiAgLyoqXG4gICAqIFNldHMgdGhlIG5ldHdvcmsgdGltZW91dC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgVGhlIHRpbWVvdXQgaW4gc2Vjb25kcy5cbiAgICovXG4gIHN0YXRpYyBzZXROZXR3b3JrVGltZW91dChzZWNvbmRzKSB7XG4gICAgbmV0d29ya1RpbWVvdXRTZWNvbmRzID0gc2Vjb25kc1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYW4gYWpheCByZXF1ZXN0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIFRoZSBodHRwIG1ldGhvZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIG9wZW4uXG4gICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5QnVmZmVyfEJsb2J8RG9jdW1lbnR8Rm9ybURhdGF9IGRhdGEgVGhlIGRhdGEgdG8gYmUgc2VudCBpbiBib2R5LlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdWNjZXNzIEEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIHN1Y2Nlc3MuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGVycm9yIEEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGVycm9yLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHF1ZXVlZCBXaGV0aGVyIHRoZSByZXF1ZXN0IHNob3VsZCBiZSBxdWV1ZWQgb3IgaW1tZWRpYXRlbHkgc2VudC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbcGxhaW5UZXh0XSBXaGV0aGVyIHRoZSByZXNwb25zZSBzaG91bGQgYmUgcmV0dXJuZWQgYXMgcGxhaW4gdGV4dCBvciBqc29uLlxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgc3RhdGljIGFqYXgobWV0aG9kLCB1cmwsIGRhdGEsIHN1Y2Nlc3MsIGVycm9yLCBxdWV1ZWQsIHBsYWluVGV4dCkge1xuICAgIGlmIChxdWV1ZWQpIHtcbiAgICAgIGlmIChOZXR3b3JrLnJ1bm5pbmdSZXF1ZXN0KSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICAgICAgcmV0dXJuIE5ldHdvcmsuZW5xdWV1ZVJlcXVlc3QoYXJndW1lbnRzKVxuICAgICAgfVxuICAgICAgTmV0d29yay5ydW5uaW5nUmVxdWVzdCA9IHRydWVcbiAgICB9XG5cbiAgICAvKiogQG5hbWVzcGFjZSBYRG9tYWluUmVxdWVzdCAqKi9cbiAgICAvKiogQG5hbWVzcGFjZSBsb2NhdGlvbiAqKi9cbiAgICBpZiAodHlwZW9mIFhEb21haW5SZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKGxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cDonICYmIHVybC5pbmRleE9mKCdodHRwczonKSA9PT0gMCkge1xuICAgICAgICB1cmwgPSBgaHR0cDoke3VybC5zdWJzdHJpbmcoNil9YFxuICAgICAgfVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgcmV0dXJuIFJlZmxlY3QuYXBwbHkoTmV0d29yay5hamF4SUU4LCBudWxsLCBhcmd1bWVudHMpXG4gICAgfVxuXG4gICAgbGV0IGhhbmRsZWQgPSBmYWxzZVxuXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlZCA9IHRydWVcblxuICAgICAgICBsZXQgcmVzcG9uc2VcbiAgICAgICAgbGV0IHJhbkNhbGxiYWNrID0gZmFsc2VcbiAgICAgICAgaWYgKHBsYWluVGV4dCkge1xuICAgICAgICAgIHJlc3BvbnNlID0geGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dClcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBlcnJvcihudWxsLCB4aHIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDApXG4gICAgICAgICAgICByYW5DYWxsYmFjayA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJhbkNhbGxiYWNrKSB7XG4gICAgICAgICAgaWYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXNwb25zZSwgeGhyKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBlcnJvcihyZXNwb25zZSwgeGhyKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChxdWV1ZWQpIHtcbiAgICAgICAgICBOZXR3b3JrLnJ1bm5pbmdSZXF1ZXN0ID0gZmFsc2VcbiAgICAgICAgICBOZXR3b3JrLmRlcXVldWVSZXF1ZXN0KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSlcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvcGxhaW4nKSAvLyBBdm9pZCBwcmUtZmxpZ2h0LlxuICAgIHhoci5zZW5kKGRhdGEpXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGlmICghaGFuZGxlZCkge1xuICAgICAgICB4aHIuYWJvcnQoKVxuICAgICAgfVxuICAgIH0sIG5ldHdvcmtUaW1lb3V0U2Vjb25kcyAqIDEwMDApXG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhbiBhamF4IHJlcXVlc3QgZm9yIElFOC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCBUaGUgaHR0cCBtZXRob2QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBvcGVuLlxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheUJ1ZmZlcnxCbG9ifERvY3VtZW50fEZvcm1EYXRhfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHNlbnQgaW4gYm9keS5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gc3VjY2VzcyBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBzdWNjZXNzLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBlcnJvciBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBlcnJvci5cbiAgICogQHBhcmFtIHtib29sZWFufSBxdWV1ZWQgV2hldGhlciB0aGUgcmVxdWVzdCBzaG91bGQgYmUgcXVldWVkIG9yIGltbWVkaWF0ZWx5IHNlbnQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGxhaW5UZXh0IFdoZXRoZXIgdGhlIHJlc3BvbnNlIHNob3VsZCBiZSByZXR1cm5lZCBhcyBwbGFpbiB0ZXh0IG9yIGpzb24uXG4gICAqL1xuICBzdGF0aWMgYWpheElFOChtZXRob2QsIHVybCwgZGF0YSwgc3VjY2VzcywgZXJyb3IsIHF1ZXVlZCwgcGxhaW5UZXh0KSB7XG4gICAgbGV0IHhkciA9IG5ldyBYRG9tYWluUmVxdWVzdCgpXG4gICAgeGRyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHJlc3BvbnNlXG4gICAgICBsZXQgcmFuQ2FsbGJhY2sgPSBmYWxzZVxuICAgICAgaWYgKHBsYWluVGV4dCkge1xuICAgICAgICByZXNwb25zZSA9IHhkci5yZXNwb25zZVRleHRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhkci5yZXNwb25zZVRleHQpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGVycm9yKG51bGwsIHhkcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAwKVxuICAgICAgICAgIHJhbkNhbGxiYWNrID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXJhbkNhbGxiYWNrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzcG9uc2UsIHhkcilcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDApXG4gICAgICB9XG4gICAgICBpZiAocXVldWVkKSB7XG4gICAgICAgIE5ldHdvcmsucnVubmluZ1JlcXVlc3QgPSBmYWxzZVxuICAgICAgICBOZXR3b3JrLmRlcXVldWVSZXF1ZXN0KClcbiAgICAgIH1cbiAgICB9XG4gICAgeGRyLm9uZXJyb3IgPSB4ZHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBlcnJvcihudWxsLCB4ZHIpXG4gICAgICAgIH1cbiAgICAgIH0sIDApXG4gICAgICBpZiAocXVldWVkKSB7XG4gICAgICAgIE5ldHdvcmsucnVubmluZ1JlcXVlc3QgPSBmYWxzZVxuICAgICAgICBOZXR3b3JrLmRlcXVldWVSZXF1ZXN0KClcbiAgICAgIH1cbiAgICB9XG4gICAgeGRyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcbiAgICB9XG4gICAgeGRyLm9wZW4obWV0aG9kLCB1cmwpXG4gICAgeGRyLnRpbWVvdXQgPSBuZXR3b3JrVGltZW91dFNlY29uZHMgKiAxMDAwXG4gICAgeGRyLnNlbmQoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSByZXF1ZXN0IHRvIHRoZSByZXF1ZXN0IHF1ZXVlLlxuICAgKiBAcGFyYW0ge0FyZ3VtZW50c30gcmVxdWVzdEFyZ3VtZW50cyBUaGUgcmVxdWVzdCBhcmd1bWVudHMgZnJvbSB0aGUgaW5pdGlhbCBtZXRob2QgY2FsbC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXRpYyBlbnF1ZXVlUmVxdWVzdChyZXF1ZXN0QXJndW1lbnRzKSB7XG4gICAgcmVxdWVzdFF1ZXVlLnB1c2gocmVxdWVzdEFyZ3VtZW50cylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSByZXF1ZXN0IGZyb20gdGhlIHJlcXVlc3QgcXVldWUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdGF0aWMgZGVxdWV1ZVJlcXVlc3QoKSB7XG4gICAgbGV0IGFyZ3MgPSByZXF1ZXN0UXVldWUuc2hpZnQoKVxuICAgIGlmIChhcmdzKSB7XG4gICAgICBSZWZsZWN0LmFwcGx5KE5ldHdvcmsuYWpheCwgbnVsbCwgYXJncylcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9OZXR3b3JrLmpzIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX01hcENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5U29tZSA9IHJlcXVpcmUoJy4vX2FycmF5U29tZScpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgYXJyYXlzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlciBUaGUgb3RoZXIgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYGFycmF5YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcnJheXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxBcnJheXMoYXJyYXksIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBhcnJMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBvdGhMZW5ndGggPSBvdGhlci5sZW5ndGg7XG5cbiAgaWYgKGFyckxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIShpc1BhcnRpYWwgJiYgb3RoTGVuZ3RoID4gYXJyTGVuZ3RoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KGFycmF5KTtcbiAgaWYgKHN0YWNrZWQgJiYgc3RhY2suZ2V0KG90aGVyKSkge1xuICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICB9XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgIHNlZW4gPSAoYml0bWFzayAmIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpID8gbmV3IFNldENhY2hlIDogdW5kZWZpbmVkO1xuXG4gIHN0YWNrLnNldChhcnJheSwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIGFycmF5KTtcblxuICAvLyBJZ25vcmUgbm9uLWluZGV4IHByb3BlcnRpZXMuXG4gIHdoaWxlICgrK2luZGV4IDwgYXJyTGVuZ3RoKSB7XG4gICAgdmFyIGFyclZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2luZGV4XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBhcnJWYWx1ZSwgaW5kZXgsIG90aGVyLCBhcnJheSwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihhcnJWYWx1ZSwgb3RoVmFsdWUsIGluZGV4LCBhcnJheSwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgaWYgKGNvbXBhcmVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChjb21wYXJlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKHNlZW4pIHtcbiAgICAgIGlmICghYXJyYXlTb21lKG90aGVyLCBmdW5jdGlvbihvdGhWYWx1ZSwgb3RoSW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghY2FjaGVIYXMoc2Vlbiwgb3RoSW5kZXgpICYmXG4gICAgICAgICAgICAgICAgKGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZWVuLnB1c2gob3RoSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEoXG4gICAgICAgICAgYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8XG4gICAgICAgICAgICBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKGFycmF5KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEFycmF5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL190b1NvdXJjZS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2VxLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpO1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgZGVlcCBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmVcbiAqIGVxdWl2YWxlbnQuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIHN1cHBvcnRzIGNvbXBhcmluZyBhcnJheXMsIGFycmF5IGJ1ZmZlcnMsIGJvb2xlYW5zLFxuICogZGF0ZSBvYmplY3RzLCBlcnJvciBvYmplY3RzLCBtYXBzLCBudW1iZXJzLCBgT2JqZWN0YCBvYmplY3RzLCByZWdleGVzLFxuICogc2V0cywgc3RyaW5ncywgc3ltYm9scywgYW5kIHR5cGVkIGFycmF5cy4gYE9iamVjdGAgb2JqZWN0cyBhcmUgY29tcGFyZWRcbiAqIGJ5IHRoZWlyIG93biwgbm90IGluaGVyaXRlZCwgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLiBGdW5jdGlvbnMgYW5kIERPTVxuICogbm9kZXMgYXJlIGNvbXBhcmVkIGJ5IHN0cmljdCBlcXVhbGl0eSwgaS5lLiBgPT09YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5pc0VxdWFsKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIG9iamVjdCA9PT0gb3RoZXI7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0VxdWFsKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0VxdWFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0VxdWFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzTGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fYmFzZUlzVHlwZWRBcnJheScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBIYW5kbGVzIEluLWFwcCBtZXNzYWdlIGZpbHRlcmluZ1xuICovXG5pbXBvcnQgVmFyQ2FjaGUgZnJvbSAnLi9WYXJDYWNoZSdcblxuLyoqIHByaXZhdGVcbiAqIHJldHVybiB0cnVlIGlmIG1lc3NhZ2UgcGFzcyBvbmUgdHJpZ2dlci92ZXJiIGNvbmRpdGlvblxuICogaWYgbm8gdHJpZ2dlciwgcmV0dXJuIGZhbHNlIGFzIGluIGFuZHJvaWRcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXNcbiAqIC8vIEBwYXJhbSB7b2JqZWN0fSBtZXNzYWdlXG4gKiAvLyBAcGFyYW0ge29iamVjdD99IG1lc3NhZ2Uud2hlblRyaWdnZXJzXG4gKiBAcmV0dXJuIHtmdW5jdGlvbih7b2JqZWN0fSk6e2Jvb2xlYW59fVxuICovXG5jb25zdCBmaWx0ZXJCeVRyaWdnZXJzID0gKHBhcmFtcz17fSkgPT4gKG1lc3NhZ2UpID0+IHtcbiAgY29uc3QgdHJpZ2dlcnMgPSBtZXNzYWdlLndoZW5UcmlnZ2VycyAmJiBtZXNzYWdlLndoZW5UcmlnZ2Vycy5jaGlsZHJlblxuICBpZighcGFyYW1zLnRyaWdnZXJzIHx8ICF0cmlnZ2Vycykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbGV0IGZpbHRlcmVkQnlUcmlnZ2VycyA9IHRyaWdnZXJzLmZpbHRlcigodHJpZ2dlcikgPT4gKFxuICAgIHBhcmFtcy50cmlnZ2Vycy5pbmNsdWRlcyh0cmlnZ2VyLnN1YmplY3QpKVxuICApXG5cbiAgaWYgKCFmaWx0ZXJlZEJ5VHJpZ2dlcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgY29uc3QgdmVyYkZpbHRlciA9IGZpbHRlckJ5VmVyYnMocGFyYW1zKVxuICBpZighdmVyYkZpbHRlcikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGZpbHRlcmVkQnlUcmlnZ2VycyA9IGZpbHRlcmVkQnlUcmlnZ2Vycy5maWx0ZXIodmVyYkZpbHRlcilcblxuICByZXR1cm4gZmlsdGVyZWRCeVRyaWdnZXJzLmxlbmd0aFxufVxuXG4vKiogcHJpdmF0ZVxuICogcmV0dXJuIHRydWUgaWYgdHJpZ2dlciBwYXNzIHZlcmIvbm91bi9vYmplY3RzIGNvbmRpdGlvblxuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtc1xuICogLy8gQHBhcmFtIHtvYmplY3R9IHRyaWdnZXJcbiAqIC8vIEBwYXJhbSB7c3RyaW5nfSB0cmlnZ2VyLnZlcmJcbiAqIEByZXR1cm4ge2Z1bmN0aW9uKHtvYmplY3R9KTp7Ym9vbGVhbn19XG4gKi9cbmNvbnN0IGZpbHRlckJ5VmVyYnMgPSAocGFyYW1zKSA9PiAodHJpZ2dlcikgPT4ge1xuICBpZih0cmlnZ2VyLnZlcmIgPT09ICcnKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBjb25zdCBldmFsdWF0b3IgPSB0cmlnZ2VyVmVyYkV2YWx1YXRvcnNbdHJpZ2dlci52ZXJiXVxuICByZXR1cm4gZXZhbHVhdG9yKHRyaWdnZXIsIHBhcmFtcy5ub3VuLCBwYXJhbXMub2JqZWN0cylcbn1cblxuLyoqIHByaXZhdGVcbiAqIHJldHVybiB0cnVlIGlmIG1lc3NhZ2UgcGFzcyBhbGwgbGltaXRzXG4gKiBAcGFyYW0ge251bWJlcn0gbm93XG4gKiAvLyBAcGFyYW0ge09iamVjdH0gbWVzc2FnZVxuICogQHJldHVybiB7ZnVuY3Rpb24oe29iamVjdH0pOntib29sZWFufX1cbiAqL1xuY29uc3QgZmlsdGVyQnlMaW1pdHMgPSAobm93KSA9PiAobWVzc2FnZSkgPT4ge1xuICBjb25zdCBsaW1pdHMgPSBtZXNzYWdlLndoZW5MaW1pdHMgJiYgbWVzc2FnZS53aGVuTGltaXRzLmNoaWxkcmVuXG4gIGlmKCFsaW1pdHMgfHwgbGltaXRzLmxlbmd0aCA8IDEpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBsaW1pdHMuZXZlcnkoKGxpbWl0KSA9PiB7XG4gICAgICBjb25zdCB2ZXJiRXZhbHVhdG9yID0gbGltaXRWZXJiRXZhbHVhdG9yc1tsaW1pdC52ZXJiXVxuICAgICAgaWYgKCF2ZXJiRXZhbHVhdG9yKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZlcmJFdmFsdWF0b3IobWVzc2FnZS5pZCwgbGltaXQubm91biwgbGltaXQub2JqZWN0c1swXSwgbm93KVxuICAgIH1cbiAgKVxufVxuXG4vKiogcHJpdmF0ZVxuICogcmV0dXJuIHRoZSBhbW91bnQgb2Ygb2NjdXJlbmNlIG9mIG1lc3NhZ2VWaWV3IHNpbmNlICdzaW5jZSdcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaW5jZVxuICogLy8gQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2VWaWV3XG4gKiAvLyBAcGFyYW0ge09iamVjdH0gbWVzc2FnZVZpZXcudFxuICogQHJldHVybiB7ZnVuY3Rpb24oe251bWJlcn0sIHtvYmplY3R9KToge251bWJlcn19XG4gKi9cbmNvbnN0IGNvdW50TWVzc2FnZVZpZXdzQnlMaW1pdCA9IChzaW5jZSkgPT4gKGl0ZXJhdG9yLCBtZXNzYWdlVmlldykgPT4ge1xuICBpZihtZXNzYWdlVmlldy50ID4gc2luY2UpIHtcbiAgICBpdGVyYXRvcis9MVxuICB9XG4gIHJldHVybiBpdGVyYXRvclxufVxuLyoqIHByaXZhdGVcbiAqIHJldHVybiB0cnVlIGlmIG5vIGxpbWl0cyBhcmUgZGVmaW5lZCBvciBpZiBub3cgaXMgaW4gdGhlIHJhbmdlXG4gKiBAcGFyYW0ge251bWJlcn0gbm93XG4gKiAvLyBAcGFyYW0ge29iamVjdH0gbGltaXRUaW1lXG4gKiAvLyBAcGFyYW0ge29iamVjdD99IGxpbWl0VGltZS5zdGFydFRpbWVcbiAqIC8vIEBwYXJhbSB7b2JqZWN0P30gbGltaXRUaW1lLmVuZFRpbWVcbiAqIEByZXR1cm4ge2Z1bmN0aW9uKCB7b2JqZWN0fSk6e0Jvb2xlYW59fVxuICovXG5jb25zdCBmaWx0ZXJCeUxpbWl0VGltZXMgPSAobm93KSA9PiAobGltaXRUaW1lKSA9PiB7XG4gIHJldHVybiAoIWxpbWl0VGltZS5zdGFydFRpbWUgfHwgbGltaXRUaW1lLnN0YXJ0VGltZSA8IG5vdykgJiZcbiAgICAoIWxpbWl0VGltZS5lbmRUaW1lIHx8IGxpbWl0VGltZS5lbmRUaW1lID4gbm93IClcbn1cblxuLyoqIHByaXZhdGVcbiAqIHByb3ZpZGUgZXZhbHVhdG9ycyBmb3IgZmlsdGVyQnlWZXJic1xuICovXG5jb25zdCB0cmlnZ2VyVmVyYkV2YWx1YXRvcnMgPSB7XG4gIHRyaWdnZXJzOiAodHJpZ2dlciwgbm91bikgPT4ge1xuICAgIHJldHVybiBub3VuID09PSB0cmlnZ2VyLm5vdW5cbiAgfSxcbiAgdHJpZ2dlcnNXaXRoUGFyYW1ldGVyOiAodHJpZ2dlciwgbm91biwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5vdW4gPT09IHRyaWdnZXIubm91biAmJiBwYXJhbXMucGFyYW1WYWx1ZSA9PT0gdHJpZ2dlci5vYmplY3RzW3BhcmFtcy5wYXJhbU5hbWVdXG4gIH0sXG4gIGNoYW5nZXNUbzogKHRyaWdnZXIsIG5vdW4sIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBub3VuID09PSB0cmlnZ2VyLm5vdW4gJiYgcGFyYW1zLnRvID09PSB0cmlnZ2VyLm9iamVjdHNbMF1cbiAgfSxcbiAgY2hhbmdlc0Zyb21UbzogKHRyaWdnZXIsIG5vdW4sIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBub3VuID09PSB0cmlnZ2VyLm5vdW4gJiZcbiAgICAgIHBhcmFtcy5mcm9tID09PSB0cmlnZ2VyLm9iamVjdHNbMF0gJiZcbiAgICAgIHBhcmFtcy50byA9PT0gdHJpZ2dlci5vYmplY3RzWzFdXG4gIH1cbn1cblxuLyoqIHByaXZhdGVcbiAqIHByb3ZpZGUgZXZhbHVhdG9ycyBmb3IgZmlsdGVyQnlMaW1pdFxuICovXG5jb25zdCBsaW1pdFZlcmJFdmFsdWF0b3JzID0ge1xuICBsaW1pdFVzZXI6IChtZXNzYWdlSWQsIG1heFZpZXcpID0+IHtcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0TWVzc2FnZVZpZXcobWVzc2FnZUlkKS5sZW5ndGggPCBtYXhWaWV3XG4gIH0sXG4gIGxpbWl0TW9udGg6IChtZXNzYWdlSWQsIG1heFZpZXcsIGFtb3VudCwgbm93KSA9PiB7XG4gICAgY29uc3Qgc2luY2UgPSBub3cgLSBhbW91bnQgKiAzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0TWVzc2FnZVZpZXcobWVzc2FnZUlkKVxuICAgICAgLnJlZHVjZSggY291bnRNZXNzYWdlVmlld3NCeUxpbWl0KHNpbmNlKSwgMCkgPCBtYXhWaWV3XG4gIH0sXG4gIGxpbWl0V2VlazogKG1lc3NhZ2VJZCwgbWF4VmlldywgYW1vdW50LCBub3cpID0+IHtcbiAgICBjb25zdCBzaW5jZSA9IG5vdyAtIGFtb3VudCAqIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gICAgcmV0dXJuIFZhckNhY2hlLmdldE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZClcbiAgICAgIC5yZWR1Y2UoIGNvdW50TWVzc2FnZVZpZXdzQnlMaW1pdChzaW5jZSksIDApIDwgbWF4Vmlld1xuICB9LFxuICBsaW1pdERheTogKG1lc3NhZ2VJZCwgbWF4VmlldywgYW1vdW50LCBub3cpID0+IHtcbiAgICBjb25zdCBzaW5jZSA9IG5vdyAtIGFtb3VudCAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0TWVzc2FnZVZpZXcobWVzc2FnZUlkKVxuICAgICAgLnJlZHVjZSggY291bnRNZXNzYWdlVmlld3NCeUxpbWl0KHNpbmNlKSwgMCkgPCBtYXhWaWV3XG4gIH0sXG4gIGxpbWl0SG91cjogKG1lc3NhZ2VJZCwgbWF4VmlldywgYW1vdW50LCBub3cpID0+IHtcbiAgICBjb25zdCBzaW5jZSA9IG5vdyAtIGFtb3VudCAqIDYwICogNjAgKiAxMDAwXG4gICAgcmV0dXJuIFZhckNhY2hlLmdldE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZClcbiAgICAgIC5yZWR1Y2UoIGNvdW50TWVzc2FnZVZpZXdzQnlMaW1pdChzaW5jZSksIDApIDwgbWF4Vmlld1xuICB9LFxuICBsaW1pdE1pbnV0ZTogKG1lc3NhZ2VJZCwgbWF4VmlldywgYW1vdW50LCBub3cpID0+IHtcbiAgICBjb25zdCBzaW5jZSA9IG5vdyAtIGFtb3VudCAqIDYwICogMTAwMFxuICAgIHJldHVybiBWYXJDYWNoZS5nZXRNZXNzYWdlVmlldyhtZXNzYWdlSWQpXG4gICAgICAucmVkdWNlKCBjb3VudE1lc3NhZ2VWaWV3c0J5TGltaXQoc2luY2UpLCAwKSA8IG1heFZpZXdcbiAgfSxcbiAgbGltaXRTZWNvbmQ6IChtZXNzYWdlSWQsIG1heFZpZXcsIGFtb3VudCwgbm93KSA9PiB7XG4gICAgY29uc3Qgc2luY2UgPSBub3cgLSBhbW91bnQgKiAxMDAwXG4gICAgcmV0dXJuIFZhckNhY2hlLmdldE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZClcbiAgICAgIC5yZWR1Y2UoIGNvdW50TWVzc2FnZVZpZXdzQnlMaW1pdChzaW5jZSksIDApIDwgbWF4Vmlld1xuICB9LFxuICBsaW1pdFNlc3Npb246IChtZXNzYWdlSWQsIG1heFZpZXcpID0+IHtcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0TWVzc2FnZVZpZXcobWVzc2FnZUlkLCB0cnVlKS5sZW5ndGggPCBtYXhWaWV3XG4gIH0sXG59XG4vKipcbiAqIFByb3ZpZGUgZmlsdGVyaW5nIGxvZ2ljIGZvciBtZXNzYWdlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb25NYW5hZ2VyIHtcblxuICAvKiogcHVibGljXG4gICAqIHJldHVybiBhbiBhcnJheSBvZiBmaWx0ZXJlZCBtZXNzYWdlIG9yZGVyZWQgYnkgcHJpb3JpdHlcbiAgICogQHBhcmFtIHthcnJheX0gbWVzc2FnZXNcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBzdHJpbmdbXSB8ID99IHRyaWdnZXJzXG4gICAqIEBwYXJhbSB7c3RyaW5nP30gdmVyYlxuICAgKiBAcGFyYW0ge3N0cmluZz99IG5vdW5cbiAgICogQHBhcmFtIHtvYmplY3Q/fSBwYXJhbXNcbiAgICogQHBhcmFtIHtzdHJpbmc/fSBwYXJhbXMuZnJvbVxuICAgKiBAcGFyYW0ge3N0cmluZz99IHBhcmFtcy50b1xuICAgKiBAcGFyYW0ge3N0cmluZz99IHBhcmFtcy5wYXJhbVZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nP30gcGFyYW1zLnBhcmFtTmFtZVxuICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICovXG4gIHN0YXRpYyBmaWx0ZXJNZXNzYWdlcyhtZXNzYWdlcywgdHJpZ2dlcnM9JycsIHZlcmIsIG5vdW4sIHBhcmFtcykge1xuICAgIGlmKCFBcnJheS5pc0FycmF5KHRyaWdnZXJzKSkge1xuICAgICAgdHJpZ2dlcnMgPSBbdHJpZ2dlcnNdXG4gICAgfVxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICByZXR1cm4gbWVzc2FnZXMuZmlsdGVyKGZpbHRlckJ5VHJpZ2dlcnMoXG4gICAgICAgIHtcbiAgICAgICAgICB0cmlnZ2VyczogdHJpZ2dlcnNcbiAgICAgICAgfVxuICAgICAgKSlcbiAgICAgIC5maWx0ZXIoZmlsdGVyQnlMaW1pdHMobm93KSlcbiAgICAgIC5maWx0ZXIoZmlsdGVyQnlMaW1pdFRpbWVzKG5vdykpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHkpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FjdGlvbk1hbmFnZXIuanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuY29uc3QgZGF0YUJyb3dzZXIgPSBbe1xuICBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIHN1YlN0cmluZzogJ0Nocm9tZScsXG4gIGlkZW50aXR5OiAnQ2hyb21lJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIHN1YlN0cmluZzogJ09tbmlXZWInLFxuICB2ZXJzaW9uU2VhcmNoOiAnT21uaVdlYi8nLFxuICBpZGVudGl0eTogJ09tbmlXZWInXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnZlbmRvcixcbiAgc3ViU3RyaW5nOiAnQXBwbGUnLFxuICBpZGVudGl0eTogJ1NhZmFyaScsXG4gIHZlcnNpb25TZWFyY2g6ICdWZXJzaW9uJ1xufSwge1xuICBwcm9wOiB3aW5kb3cub3BlcmEsXG4gIGlkZW50aXR5OiAnT3BlcmEnLFxuICB2ZXJzaW9uU2VhcmNoOiAnVmVyc2lvbidcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudmVuZG9yLFxuICBzdWJTdHJpbmc6ICdpQ2FiJyxcbiAgaWRlbnRpdHk6ICdpQ2FiJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci52ZW5kb3IsXG4gIHN1YlN0cmluZzogJ0tERScsXG4gIGlkZW50aXR5OiAnS29ucXVlcm9yJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIHN1YlN0cmluZzogJ0ZpcmVmb3gnLFxuICBpZGVudGl0eTogJ0ZpcmVmb3gnXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnZlbmRvcixcbiAgc3ViU3RyaW5nOiAnQ2FtaW5vJyxcbiAgaWRlbnRpdHk6ICdDYW1pbm8nXG59LCB7IC8vIGZvciBuZXdlciBOZXRzY2FwZSAoNispXG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnTmV0c2NhcGUnLFxuICBpZGVudGl0eTogJ05ldHNjYXBlJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIHN1YlN0cmluZzogJ01TSUUnLFxuICBpZGVudGl0eTogJ0V4cGxvcmVyJyxcbiAgdmVyc2lvblNlYXJjaDogJ01TSUUnXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnR2Vja28nLFxuICBpZGVudGl0eTogJ01vemlsbGEnLFxuICB2ZXJzaW9uU2VhcmNoOiAncnYnXG59LCB7IC8vIGZvciBvbGRlciBOZXRzY2FwZSAoNC0pXG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnTW96aWxsYScsXG4gIGlkZW50aXR5OiAnTmV0c2NhcGUnLFxuICB2ZXJzaW9uU2VhcmNoOiAnTW96aWxsYSdcbn1dXG5cbmNvbnN0IGRhdGFPUyA9IFt7XG4gIHN0cmluZzogbmF2aWdhdG9yLnBsYXRmb3JtLFxuICBzdWJTdHJpbmc6ICdXaW4nLFxuICBpZGVudGl0eTogJ1dpbmRvd3MnXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnBsYXRmb3JtLFxuICBzdWJTdHJpbmc6ICdNYWMnLFxuICBpZGVudGl0eTogJ01hYyBPUydcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdpUGhvbmUnLFxuICBpZGVudGl0eTogJ2lPUydcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IucGxhdGZvcm0sXG4gIHN1YlN0cmluZzogJ0xpbnV4JyxcbiAgaWRlbnRpdHk6ICdMaW51eCdcbn1dXG5cbi8vIEJyb3dzZXIgZGV0ZWN0aW9uLiBTb3VyY2U6IGh0dHA6Ly93d3cucXVpcmtzbW9kZS5vcmcvanMvZGV0ZWN0Lmh0bWxcbi8qKlxuICogSGVscGVyIGNsYXNzIHRvIGRldGVjdCB3aGljaCBicm93c2VyIGNsaWVudCBpcyB1c2luZy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJvd3NlckRldGVjdG9yIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBvYmplY3Qgd2l0aCBjdXJyZW50IGJyb3dzZXIgc2V0dGluZ3MuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJyb3dzZXIgPSB0aGlzLl9zZWFyY2hTdHJpbmcoZGF0YUJyb3dzZXIpIHx8ICdVbmtub3duIEJyb3dzZXInXG4gICAgdGhpcy52ZXJzaW9uID0gdGhpcy5fc2VhcmNoVmVyc2lvbihuYXZpZ2F0b3IudXNlckFnZW50KSB8fFxuICAgICAgICB0aGlzLl9zZWFyY2hWZXJzaW9uKG5hdmlnYXRvci5hcHBWZXJzaW9uKSB8fCAnVW5rbm93biBWZXJzaW9uJ1xuICAgIHRoaXMuT1MgPSB0aGlzLl9zZWFyY2hTdHJpbmcoZGF0YU9TKSB8fCAnVW5rbm93biBPUydcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXRjaGVzIHRoZSBjbGllbnQncyBzeXN0ZW0gdG8gdGhlIHByZWRlZmluZWQgc3lzdGVtIGxpc3QuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIFRoZSBkYXRhIG9iamVjdCB0byBzY2FuLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBmb3VuZCBpZGVudGl0eSBzdHJpbmcuXG4gICAqL1xuICBfc2VhcmNoU3RyaW5nKGRhdGEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBkYXRhU3RyaW5nID0gZGF0YVtpXS5zdHJpbmdcbiAgICAgIGxldCBkYXRhUHJvcCA9IGRhdGFbaV0ucHJvcFxuICAgICAgdGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nID0gZGF0YVtpXS52ZXJzaW9uU2VhcmNoIHx8IGRhdGFbaV0uaWRlbnRpdHlcbiAgICAgIGlmIChkYXRhU3RyaW5nKSB7XG4gICAgICAgIGlmIChkYXRhU3RyaW5nLmluZGV4T2YoZGF0YVtpXS5zdWJTdHJpbmcpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiBkYXRhW2ldLmlkZW50aXR5XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGF0YVByb3ApIHtcbiAgICAgICAgcmV0dXJuIGRhdGFbaV0uaWRlbnRpdHlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgdGhlIGN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gc3lzdGVtLlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVN0cmluZyBUaGUgZGF0YSBvYmplY3QgdG8gc2Nhbi5cbiAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgZm91bmQgbnVtYmVyLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NlYXJjaFZlcnNpb24oZGF0YVN0cmluZykge1xuICAgIGlmICghZGF0YVN0cmluZykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIGxldCBpbmRleCA9IGRhdGFTdHJpbmcuaW5kZXhPZih0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBwYXJzZUZsb2F0KGRhdGFTdHJpbmcuc3Vic3RyaW5nKGluZGV4ICsgdGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nLmxlbmd0aCArIDEpKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQnJvd3NlckRldGVjdG9yLmpzIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cblxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL0NvbnN0YW50cydcbmltcG9ydCBBcmdzQnVpbGRlciBmcm9tICcuL0FyZ3NCdWlsZGVyJ1xuaW1wb3J0IFNvY2tldElvQ2xpZW50IGZyb20gJy4vU29ja2V0SW9DbGllbnQnXG5pbXBvcnQgVmFyQ2FjaGUgZnJvbSAnLi9WYXJDYWNoZSdcbmltcG9ydCBMZWFucGx1bVJlcXVlc3QgZnJvbSAnLi9MZWFucGx1bVJlcXVlc3QnXG5pbXBvcnQgaXNFcXVhbCBmcm9tICdsb2Rhc2gvaXNFcXVhbCdcbmltcG9ydCBldmVudHMgZnJvbSAnLi9FdmVudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlYW5wbHVtU29ja2V0IHtcblxuICBzdGF0aWMgc29ja2V0SG9zdCA9ICdkZXYubGVhbnBsdW0uY29tJ1xuXG4gIHN0YXRpYyBjb25uZWN0KCkge1xuICAgIGlmICghV2ViU29ja2V0KSB7XG4gICAgICBjb25zb2xlLmxvZygnWW91ciBicm93c2VyIGRvZXNuXFwndCBzdXBwb3J0IFdlYlNvY2tldHMuJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBjbGllbnQgPSBuZXcgU29ja2V0SW9DbGllbnQoKVxuICAgIGxldCBhdXRoU2VudCA9IGZhbHNlXG4gICAgY2xpZW50Lm9ub3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFhdXRoU2VudCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IENvbm5lY3RlZCB0byBkZXZlbG9wbWVudCBzZXJ2ZXIuJylcbiAgICAgICAgbGV0IGFyZ3MgPSB7fVxuICAgICAgICBhcmdzW0NvbnN0YW50cy5QQVJBTVMuQVBQX0lEXSA9IExlYW5wbHVtUmVxdWVzdC5hcHBJZFxuICAgICAgICBhcmdzW0NvbnN0YW50cy5QQVJBTVMuREVWSUNFX0lEXSA9IExlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZFxuICAgICAgICBjbGllbnQuc2VuZCgnYXV0aCcsIGFyZ3MpXG4gICAgICAgIGF1dGhTZW50ID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICBjbGllbnQub25lcnJvciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IFNvY2tldCBlcnJvcicsIGV2ZW50KVxuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICogQHBhcmFtIGFyZ3NbXS5lbWFpbFxuICAgICAqL1xuICAgIGNsaWVudC5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCwgYXJncykge1xuICAgICAgaWYgKGV2ZW50ID09PSAndXBkYXRlVmFycycpIHtcbiAgICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuR0VUX1ZBUlMsXG4gICAgICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkNMVURFX0RFRkFVTFRTLCBmYWxzZSksIHtcbiAgICAgICAgICAgICAgcXVldWVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgc2VuZE5vdzogdHJ1ZSxcbiAgICAgICAgICAgICAgcmVzcG9uc2U6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGdldFZhcnNSZXNwb25zZSA9IExlYW5wbHVtUmVxdWVzdC5nZXRMYXN0UmVzcG9uc2UocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJTXVxuICAgICAgICAgICAgICAgIGxldCB2YXJpYW50cyA9IGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJJQU5UU11cbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uTWV0YWRhdGEgPSBnZXRWYXJzUmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuQUNUSU9OX01FVEFEQVRBXVxuICAgICAgICAgICAgICAgIGlmICghaXNFcXVhbCh2YWx1ZXMsIFZhckNhY2hlLmRpZmZzKSkge1xuICAgICAgICAgICAgICAgICAgVmFyQ2FjaGUuYXBwbHlEaWZmcyh2YWx1ZXMsIHZhcmlhbnRzLCBhY3Rpb25NZXRhZGF0YSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmIChldmVudCA9PT0gJ2dldFZhcmlhYmxlcycpIHtcbiAgICAgICAgVmFyQ2FjaGUuc2VuZFZhcmlhYmxlcygpXG4gICAgICAgIGNsaWVudC5zZW5kKCdnZXRDb250ZW50UmVzcG9uc2UnLCB7XG4gICAgICAgICAgJ3VwZGF0ZWQnOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAnZ2V0QWN0aW9ucycpIHtcbiAgICAgICAgLy8gVW5zdXBwb3J0ZWQgaW4gSmF2YVNjcmlwdCBTREsuXG4gICAgICAgIGNsaWVudC5zZW5kKCdnZXRDb250ZW50UmVzcG9uc2UnLCB7XG4gICAgICAgICAgJ3VwZGF0ZWQnOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChldmVudCA9PT0gJ3JlZ2lzdGVyRGV2aWNlJykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcbiAgICAgICAgYWxlcnQoYFlvdXIgZGV2aWNlIGhhcyBiZWVuIHJlZ2lzdGVyZWQgdG8gJHthcmdzWzBdLmVtYWlsfS5gKVxuICAgICAgfSBlbHNlIGlmIChldmVudCA9PT0gJ3RyaWdnZXInKSB7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCd3ZWJzb2NrZXQvdHJpZ2dlcicsIHtcbiAgICAgICAgICBhcmdzXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGNsaWVudC5vbmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IERpc2Nvbm5lY3RlZCB0byBkZXZlbG9wbWVudCBzZXJ2ZXIuJylcbiAgICAgIGF1dGhTZW50ID0gZmFsc2VcbiAgICB9XG4gICAgY2xpZW50LmNvbm5lY3QoTGVhbnBsdW1Tb2NrZXQuc29ja2V0SG9zdClcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgIGlmICghY2xpZW50LmNvbm5lY3RlZCAmJiAhY2xpZW50LmNvbm5lY3RpbmcpIHtcbiAgICAgICAgY2xpZW50LmNvbm5lY3QoTGVhbnBsdW1Tb2NrZXQuc29ja2V0SG9zdClcbiAgICAgIH1cbiAgICB9LCA1MDAwKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGVhbnBsdW1Tb2NrZXQuanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vQ29uc3RhbnRzJ1xuaW1wb3J0IEFyZ3NCdWlsZGVyIGZyb20gJy4vQXJnc0J1aWxkZXInXG5pbXBvcnQgaXNFcXVhbCBmcm9tICdsb2Rhc2gvaXNFcXVhbCdcbmltcG9ydCBMb2NhbFN0b3JhZ2VNYW5hZ2VyIGZyb20gJy4vTG9jYWxTdG9yYWdlTWFuYWdlcidcbmltcG9ydCBMZWFucGx1bVJlcXVlc3QgZnJvbSAnLi9MZWFucGx1bVJlcXVlc3QnXG5cbmNvbnN0IEFQUExJQ0FUSU9OX1NFUlZFUl9QVUJMSUNfS0VZID1cbiAgICAnQkluV1BwV250ZlIzOXJnWFNQMDRwcWRtRWRER2E1MHo2enFiTXZ4eXhKQ3d6WEl1U3BTaDhDODg4LUNmSjgyV0VMbDdYZThjakEnICtcbiAgICAnbmZDdC0zdkswQ2k2OCdcblxubGV0IGlzU3Vic2NyaWJlZCA9IGZhbHNlXG5sZXQgc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiA9IG51bGxcblxuLyoqXG4gKiBQdXNoIE1hbmFnZXIgaGFuZGxlcyB0aGUgcmVnaXN0cmF0aW9uIGFuZCBzdWJzY3JpcHRpb24gZm9yIHdlYiBwdXNoLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQdXNoTWFuYWdlciB7XG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB3ZWIgcHVzaCBpcyBzdXBwb3J0ZWQgaW4gdGhlIGJyb3dzZXIuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IFRydWUgaWYgc3VwcG9ydGVkLCBlbHNlIGZhbHNlLlxuICAgKi9cbiAgc3RhdGljIGlzV2ViUHVzaFN1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yICYmIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyICYmICdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IgJiZcbiAgICAgICAgJ1B1c2hNYW5hZ2VyJyBpbiB3aW5kb3dcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgYnJvd3NlciBpcyBzdWJzY3JpYmVkIHRvIHdlYiBwdXNoIG5vdGlmaWNhdGlvbnMuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFRydWUgaWYgc3Vic2NyaWJlZCwgZWxzZSBmYWxzZS5cbiAgICovXG4gIHN0YXRpYyBpc1dlYlB1c2hTdWJzY3JpYmVkKCkge1xuICAgIGlmICghUHVzaE1hbmFnZXIuaXNXZWJQdXNoU3VwcG9ydGVkKCkpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICByZXNvbHZlKGZhbHNlKVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIFB1c2hNYW5hZ2VyLmdldFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24oKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGlmICghcmVnaXN0cmF0aW9uKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvKiogQG5hbWVzcGFjZSByZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIgVGhlIHB1c2ggbWFuYWdlciBvYmplY3Qgb2YgdGhlIGJyb3dzZXIuICoqL1xuICAgICAgICAgICAgICAvKiogQG5hbWVzcGFjZSByZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uICoqL1xuICAgICAgICAgICAgICByZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKClcbiAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpc1N1YnNjcmliZWQgPSBzdWJzY3JpcHRpb24gIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgIFB1c2hNYW5hZ2VyLnVwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyKHN1YnNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGlzU3Vic2NyaWJlZClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBmb3IgV2ViUHVzaC5cbiAgICogQHBhcmFtICB7U3RyaW5nfSAgIHNlcnZpY2VXb3JrZXJVcmwgVGhlIHVybCB0aGF0IHNlcnZlcyB0aGUgc2VydmljZSB3b3JrZXJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb24geW91ciBkb21haW4uXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayAgICAgICAgIFRoZSBjYWxsYmFjayB0byBiZSBjYWxsZWQgd2l0aCByZXN1bHQuXG4gICAqIEByZXR1cm4ge29iamVjdH0gbm90aGluZ1xuICAgKi9cbiAgc3RhdGljIHJlZ2lzdGVyKHNlcnZpY2VXb3JrZXJVcmwsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFQdXNoTWFuYWdlci5pc1dlYlB1c2hTdXBwb3J0ZWQoKSkge1xuICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBQdXNoIG1lc3NhZ2luZyBpcyBub3Qgc3VwcG9ydGVkLicpXG4gICAgICByZXR1cm4gY2FsbGJhY2soZmFsc2UpXG4gICAgfVxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKFxuICAgICAgICBzZXJ2aWNlV29ya2VyVXJsID8gc2VydmljZVdvcmtlclVybCA6ICcvc3cubWluLmpzJywgbnVsbClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4gICAgICAgICAgc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiA9IHJlZ2lzdHJhdGlvblxuXG4gICAgICAgICAgbGV0IHNlcnZpY2VXb3JrZXJcbiAgICAgICAgICBpZiAocmVnaXN0cmF0aW9uLmluc3RhbGxpbmcpIHtcbiAgICAgICAgICAgIHNlcnZpY2VXb3JrZXIgPSByZWdpc3RyYXRpb24uaW5zdGFsbGluZ1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVnaXN0cmF0aW9uLndhaXRpbmcpIHtcbiAgICAgICAgICAgIHNlcnZpY2VXb3JrZXIgPSByZWdpc3RyYXRpb24ud2FpdGluZ1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVnaXN0cmF0aW9uLmFjdGl2ZSkge1xuICAgICAgICAgICAgc2VydmljZVdvcmtlciA9IHJlZ2lzdHJhdGlvbi5hY3RpdmVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIXNlcnZpY2VXb3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHN1YnNjcmliZSA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vIFNldCB0aGUgaW5pdGlhbCBzdWJzY3JpcHRpb24gdmFsdWVcbiAgICAgICAgICAgIHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKClcbiAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgaXNTdWJzY3JpYmVkID0gIShzdWJzY3JpcHRpb24gPT09IG51bGwpXG4gICAgICAgICAgICAgICAgaWYgKGlzU3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgICAgICAgICBQdXNoTWFuYWdlci51cGRhdGVOZXdTdWJzY3JpcHRpb25PblNlcnZlcihzdWJzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soaXNTdWJzY3JpYmVkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VydmljZVdvcmtlci5zdGF0ZSA9PT0gJ2FjdGl2YXRlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBzdWJzY3JpYmUoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignc3RhdGVjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuc3RhdGUgIT09ICdhY3RpdmF0ZWQnKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdWJzY3JpYmUoKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogU2VydmljZSBXb3JrZXIgRXJyb3I6ICcsIGVycm9yKVxuICAgICAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0aGUgdXNlcihicm93c2VyKSB0byBwdXNoLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXNvbHZlcyBpZiBzdWJzY3JpcHRpb24gc3VjY2Vzc2Z1bCwgb3RoZXJ3aXNlIHJlamVjdHMuXG4gICAqL1xuICBzdGF0aWMgc3Vic2NyaWJlVXNlcigpIHtcbiAgICBjb25zdCBhcHBsaWNhdGlvblNlcnZlcktleSA9IFB1c2hNYW5hZ2VyLnVybEI2NFRvVWludDhBcnJheShBUFBMSUNBVElPTl9TRVJWRVJfUFVCTElDX0tFWSlcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAvKiogQG5hbWVzcGFjZSBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLnN1YnNjcmliZSBTdWJzY3JpYmUgdG8gcHVzaC4gKiovXG4gICAgICByZXR1cm4gc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5zdWJzY3JpYmUoe1xuICAgICAgICB1c2VyVmlzaWJsZU9ubHk6IHRydWUsXG4gICAgICAgIGFwcGxpY2F0aW9uU2VydmVyS2V5XG4gICAgICB9KVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICBQdXNoTWFuYWdlci51cGRhdGVOZXdTdWJzY3JpcHRpb25PblNlcnZlcihzdWJzY3JpcHRpb24pXG4gICAgICAgICAgICAgIGlzU3Vic2NyaWJlZCA9IHRydWVcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoaXNTdWJzY3JpYmVkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2VcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChgTGVhbnBsdW06IEZhaWxlZCB0byBzdWJzY3JpYmUgdGhlIHVzZXI6ICR7ZXJyfWApXG4gICAgICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlIHRoZSB1c2VyKGJyb3dzZXIpIGZyb20gcHVzaC5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUmVzb2x2ZXMgaWYgdW5zdWJzY3JpYmVkLCBvdGhlcndpc2UgcmVqZWN0cy5cbiAgICovXG4gIHN0YXRpYyB1bnN1YnNjcmliZVVzZXIoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIFB1c2hNYW5hZ2VyLmlzV2ViUHVzaFN1YnNjcmliZWQoKS50aGVuKChzdWJzY3JpYmVkKSA9PiB7XG4gICAgICAgIGlmICghc3Vic2NyaWJlZCkge1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgLyoqIEBuYW1lc3BhY2Ugc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci51bnN1YnNjcmliZSBVbnN1YnNjcmliZSB0b1xuICAgICAgICAgICAgICAgICAqICBwdXNoLiAqKi9cbiAgICAgICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGBMZWFucGx1bTogRXJyb3IgdW5zdWJzY3JpYmluZzogJHtlcnJvcn1gKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KClcbiAgICAgICAgICAgIH0pXG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlamVjdCgpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gb2JqZWN0IGZyb20gYnJvd3Nlci5cbiAgICogQHJldHVybiB7b2JqZWN0fSBSZXR1cm5zIHRoZSByZWdpc3RyYXRpb24gb3IgbnVsbC5cbiAgICovXG4gIHN0YXRpYyBnZXRTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24pIHtcbiAgICAgICAgcmVzb2x2ZShzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIEBuYW1lc3BhY2UgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuZ2V0UmVnaXN0cmF0aW9uIFJldHJpZXZlcyB0aGUgIHB1c2ggcmVnaXN0cmF0aW9uXG4gICAgICAgICAqIGZyb20gdGhlIGJyb3dzZXIuICoqL1xuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5nZXRSZWdpc3RyYXRpb24oKS50aGVuKChyZWdpc3RyYXRpb24pID0+IHtcbiAgICAgICAgICBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uID0gcmVnaXN0cmF0aW9uXG4gICAgICAgICAgcmVzb2x2ZShyZWdpc3RyYXRpb24pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmNvZGVzIGEgYmFzZTY0IHVybCBzdHJpbmcgdG8gYW4gdWludDggYXJyYXJ5LlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGJhc2U2NFN0cmluZyBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9ICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBzdGF0aWMgdXJsQjY0VG9VaW50OEFycmF5KGJhc2U2NFN0cmluZykge1xuICAgIGNvbnN0IHBhZGRpbmcgPSAnPScucmVwZWF0KCg0IC0gYmFzZTY0U3RyaW5nLmxlbmd0aCAlIDQpICUgNClcbiAgICBjb25zdCBiYXNlNjQgPSAoYmFzZTY0U3RyaW5nICsgcGFkZGluZylcbiAgICAgICAgLnJlcGxhY2UoLy0vZywgJysnKVxuICAgICAgICAucmVwbGFjZSgvXy9nLCAnLycpXG5cbiAgICBjb25zdCByYXdEYXRhID0gd2luZG93LmF0b2IoYmFzZTY0KVxuICAgIGNvbnN0IG91dHB1dEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkocmF3RGF0YS5sZW5ndGgpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhd0RhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgIG91dHB1dEFycmF5W2ldID0gcmF3RGF0YS5jaGFyQ29kZUF0KGkpXG4gICAgfVxuICAgIHJldHVybiBvdXRwdXRBcnJheVxuICB9XG5cbiAgLyoqXG4gICAqIFtwcmVwYXJlU3Vic2NyaXB0aW9uIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtvYmplY3R9IHN1YnNjcmlwdGlvbiBUaGUgcmF3IHN1YnNjcmlwdGlvbiBmcm9tIGJyb3dzZXIuXG4gICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBzdWJzY3JpcHRpb24uZ2V0S2V5IFRoZSBzdWJzY3JpcHRpb24ga2V5LlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHN1YnNjcmlwdGlvbi5lbmRwb2ludCBUaGUgc3Vic2NyaXB0aW9uIGtleS5cbiAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgc3Vic2NyaXB0aW9uIG9iamVjdCB0byBiZSBzZW50IHRvIHNlcnZlci5cbiAgICovXG4gIHN0YXRpYyBwcmVwYXJlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbikge1xuICAgIGxldCBrZXkgPSBzdWJzY3JpcHRpb24uZ2V0S2V5ID8gc3Vic2NyaXB0aW9uLmdldEtleSgncDI1NmRoJykgOiAnJ1xuICAgIGxldCBhdXRoID0gc3Vic2NyaXB0aW9uLmdldEtleSA/IHN1YnNjcmlwdGlvbi5nZXRLZXkoJ2F1dGgnKSA6ICcnXG4gICAgLy8gbm9pbnNwZWN0aW9uIEVTNk1vZHVsZXNEZXBlbmRlbmNpZXNcbiAgICBsZXQga2V5QXNjaWkgPSBidG9hKFJlZmxlY3QuYXBwbHkoU3RyaW5nLmZyb21DaGFyQ29kZSwgbnVsbCwgbmV3IFVpbnQ4QXJyYXkoa2V5KSkpXG4gICAgLy8gbm9pbnNwZWN0aW9uIEVTNk1vZHVsZXNEZXBlbmRlbmNpZXNcbiAgICBsZXQgYXV0aEFzY2lpID0gYnRvYShSZWZsZWN0LmFwcGx5KFN0cmluZy5mcm9tQ2hhckNvZGUsIG51bGwsIG5ldyBVaW50OEFycmF5KGF1dGgpKSlcbiAgICByZXR1cm4ge1xuICAgICAgZW5kcG9pbnQ6IHN1YnNjcmlwdGlvbi5lbmRwb2ludCxcbiAgICAgIGtleToga2V5QXNjaWksXG4gICAgICBhdXRoOiBhdXRoQXNjaWlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIG5ldyBzdWJzY3JpcHRpb24gb2JqZWN0IHRvIHRoZSBMZWFucGx1bSBzZXJ2ZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdWJzY3JpcHRpb24gVGhlIHN1YnNjcmlwdGlvbi5cbiAgICovXG4gIHN0YXRpYyB1cGRhdGVOZXdTdWJzY3JpcHRpb25PblNlcnZlcihzdWJzY3JpcHRpb24pIHtcbiAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICBsZXQgcHJlcGFyZWRTdWJzY3JpcHRpb24gPSBQdXNoTWFuYWdlci5wcmVwYXJlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbilcbiAgICAgIGxldCBwcmVwYXJlZFN1YnNjcmlwdGlvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHByZXBhcmVkU3Vic2NyaXB0aW9uKVxuICAgICAgbGV0IGV4aXN0aW5nU3Vic2NyaXB0aW9uU3RyaW5nID0gTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKFxuICAgICAgICAgIENvbnN0YW50cy5ERUZBVUxUX0tFWVMuUFVTSF9TVUJTQ1JJUFRJT04pXG4gICAgICBpZiAoIWlzRXF1YWwoZXhpc3RpbmdTdWJzY3JpcHRpb25TdHJpbmcsIHByZXBhcmVkU3Vic2NyaXB0aW9uU3RyaW5nKSkge1xuICAgICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlBVU0hfU1VCU0NSSVBUSU9OLFxuICAgICAgICAgICAgcHJlcGFyZWRTdWJzY3JpcHRpb25TdHJpbmcpXG4gICAgICAgIFB1c2hNYW5hZ2VyLnNldFN1YnNjcmlwdGlvbihwcmVwYXJlZFN1YnNjcmlwdGlvblN0cmluZylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZCB0aGUgc3Vic2NyaXB0aW9uIHRvIHRoZSBMZWFucGx1bSBzZXJ2ZXIuXG4gICAqIEBwYXJhbSB7U3RyaW5nL09iamVjdH0gc3Vic2NyaXB0aW9uIFRoZSBzdWJzY3JpcHRpb24gc3RyaW5nLlxuICAgKi9cbiAgc3RhdGljIHNldFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgICBpZiAoIXN1YnNjcmlwdGlvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlNFVF9ERVZJQ0VfQVRUUklCVVRFUyxcbiAgICAgICAgbmV3IEFyZ3NCdWlsZGVyKCkuYWRkKENvbnN0YW50cy5QQVJBTVMuV0VCX1BVU0hfU1VCU0NSSVBUSU9OLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uKSwge1xuICAgICAgICAgIHF1ZXVlZDogZmFsc2UsXG4gICAgICAgICAgc2VuZE5vdzogdHJ1ZVxuICAgICAgICB9XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUHVzaE1hbmFnZXIuanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL0NvbnN0YW50cydcbmltcG9ydCBJbnRlcm5hbFN0YXRlIGZyb20gJy4vSW50ZXJuYWxTdGF0ZSdcbmltcG9ydCBBcmdzQnVpbGRlciBmcm9tICcuL0FyZ3NCdWlsZGVyJ1xuaW1wb3J0IEJyb3dzZXJEZXRlY3RvciBmcm9tICcuL0Jyb3dzZXJEZXRlY3RvcidcbmltcG9ydCBQdXNoTWFuYWdlciBmcm9tICcuL1B1c2hNYW5hZ2VyJ1xuaW1wb3J0IEFjdGlvbk1hbmFnZXIgZnJvbSAnLi9BY3Rpb25NYW5hZ2VyJ1xuaW1wb3J0IExvY2FsU3RvcmFnZU1hbmFnZXIgZnJvbSAnLi9Mb2NhbFN0b3JhZ2VNYW5hZ2VyJ1xuaW1wb3J0IFZhckNhY2hlIGZyb20gJy4vVmFyQ2FjaGUnXG5pbXBvcnQgTGVhbnBsdW1SZXF1ZXN0IGZyb20gJy4vTGVhbnBsdW1SZXF1ZXN0J1xuaW1wb3J0IExlYW5wbHVtU29ja2V0IGZyb20gJy4vTGVhbnBsdW1Tb2NrZXQnXG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vRXZlbnRzJ1xuXG5sZXQgX2Jyb3dzZXJEZXRlY3RvciA9IG5ldyBCcm93c2VyRGV0ZWN0b3IoKVxuXG4vKipcbiAqIEBwcmVzZXJ2ZSBMZWFucGx1bSBKYXZhc2NyaXB0IFNESy5cbiAqIENvcHlyaWdodCAyMDE2LCBMZWFucGx1bSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFlvdSBtYXkgbm90IGRpc3RyaWJ1dGUgdGhpcyBzb3VyY2UgY29kZSB3aXRob3V0IHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvblxuICogZnJvbSBMZWFucGx1bS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhbnBsdW0ge1xuXG4gIHN0YXRpYyBzZXRBcGlQYXRoKGFwaVBhdGgpIHtcbiAgICBpZiAoIUxlYW5wbHVtUmVxdWVzdC5hcGlQYXRoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgTGVhbnBsdW1SZXF1ZXN0LmFwaVBhdGggPSBhcGlQYXRoXG4gIH1cblxuICBzdGF0aWMgc2V0RW1haWwoZW1haWwpIHtcbiAgICBMZWFucGx1bS5fZW1haWwgPSBlbWFpbFxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIG5ldHdvcmsgdGltZW91dC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgVGhlIHRpbWVvdXQgaW4gc2Vjb25kcy5cbiAgICovXG4gIHN0YXRpYyBzZXROZXR3b3JrVGltZW91dChzZWNvbmRzKSB7XG4gICAgTGVhbnBsdW1SZXF1ZXN0LnNldE5ldHdvcmtUaW1lb3V0KHNlY29uZHMpXG4gIH1cblxuICBzdGF0aWMgc2V0VmFyaWFudERlYnVnSW5mb0VuYWJsZWQodmFyaWFudERlYnVnSW5mb0VuYWJsZWQpIHtcbiAgICBJbnRlcm5hbFN0YXRlLnNldFZhcmlhbnREZWJ1Z0luZm9FbmFibGVkKHZhcmlhbnREZWJ1Z0luZm9FbmFibGVkKVxuICB9O1xuXG4gIHN0YXRpYyBnZXRWYXJpYW50RGVidWdJbmZvKCkge1xuICAgIHJldHVybiBWYXJDYWNoZS5nZXRWYXJpYW50RGVidWdJbmZvKClcbiAgfTtcblxuICBzdGF0aWMgc2V0QXBwSWRGb3JEZXZlbG9wbWVudE1vZGUoYXBwSWQsIGFjY2Vzc0tleSkge1xuICAgIExlYW5wbHVtUmVxdWVzdC5hcHBJZCA9IGFwcElkXG4gICAgTGVhbnBsdW1SZXF1ZXN0LmNsaWVudEtleSA9IGFjY2Vzc0tleVxuICAgIEludGVybmFsU3RhdGUuZGV2TW9kZSA9IHRydWVcbiAgfVxuXG4gIHN0YXRpYyBzZXRBcHBJZEZvclByb2R1Y3Rpb25Nb2RlKGFwcElkLCBhY2Nlc3NLZXkpIHtcbiAgICBMZWFucGx1bVJlcXVlc3QuYXBwSWQgPSBhcHBJZFxuICAgIExlYW5wbHVtUmVxdWVzdC5jbGllbnRLZXkgPSBhY2Nlc3NLZXlcbiAgICBJbnRlcm5hbFN0YXRlLmRldk1vZGUgPSBmYWxzZVxuICB9XG5cbiAgc3RhdGljIHNldFNvY2tldEhvc3QoaG9zdCkge1xuICAgIExlYW5wbHVtU29ja2V0LnNvY2tldEhvc3QgPSBob3N0XG4gIH1cblxuICBzdGF0aWMgc2V0RGV2aWNlSWQoZGV2aWNlSWQpIHtcbiAgICBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQgPSBkZXZpY2VJZFxuICB9XG5cbiAgc3RhdGljIHNldEFwcFZlcnNpb24odmVyc2lvbk5hbWUpIHtcbiAgICBMZWFucGx1bVJlcXVlc3QudmVyc2lvbk5hbWUgPSB2ZXJzaW9uTmFtZVxuICB9XG5cbiAgc3RhdGljIHNldERldmljZU5hbWUoZGV2aWNlTmFtZSkge1xuICAgIExlYW5wbHVtLl9kZXZpY2VOYW1lID0gZGV2aWNlTmFtZVxuICB9XG5cbiAgc3RhdGljIHNldERldmljZU1vZGVsKGRldmljZU1vZGVsKSB7XG4gICAgTGVhbnBsdW0uX2RldmljZU1vZGVsID0gZGV2aWNlTW9kZWxcbiAgfVxuXG4gIHN0YXRpYyBzZXRTeXN0ZW1OYW1lKHN5c3RlbU5hbWUpIHtcbiAgICBMZWFucGx1bS5fc3lzdGVtTmFtZSA9IHN5c3RlbU5hbWVcbiAgfVxuXG4gIHN0YXRpYyBzZXRTeXN0ZW1WZXJzaW9uKHN5c3RlbVZlcnNpb24pIHtcbiAgICBMZWFucGx1bS5fc3lzdGVtVmVyc2lvbiA9IHN5c3RlbVZlcnNpb25cbiAgfVxuXG4gIHN0YXRpYyBzZXRWYXJpYWJsZXModmFyaWFibGVzKSB7XG4gICAgVmFyQ2FjaGUuc2V0VmFyaWFibGVzKHZhcmlhYmxlcylcbiAgfVxuXG4gIHN0YXRpYyBzZXRSZXF1ZXN0QmF0Y2hpbmcoYmF0Y2hFbmFibGVkLCBjb29sZG93blNlY29uZHMpIHtcbiAgICBMZWFucGx1bVJlcXVlc3QuYmF0Y2hFbmFibGVkID0gYmF0Y2hFbmFibGVkXG4gICAgTGVhbnBsdW1SZXF1ZXN0LmJhdGNoQ29vbGRvd24gPSBjb29sZG93blNlY29uZHNcbiAgfVxuXG4gIHN0YXRpYyBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIFZhckNhY2hlLmdldFZhcmlhYmxlcygpXG4gIH1cblxuICBzdGF0aWMgZ2V0VmFyaWFibGUoLi4uYXJncykge1xuICAgIGxldCBjdXJyZW50ID0gTGVhbnBsdW0uZ2V0VmFyaWFibGVzKClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50W2FyZ3NbaV1dXG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50XG4gIH1cblxuICBzdGF0aWMgZ2V0VmFyaWFudHMoKSB7XG4gICAgcmV0dXJuIFZhckNhY2hlLnZhcmlhbnRzIHx8IFtdXG4gIH1cblxuICBzdGF0aWMgZ2V0TWVzc2FnZXMoKSB7XG4gICAgcmV0dXJuIFZhcmNhY2hlLmdldE1lc3NhZ2VzKCkgfHwgW11cbiAgfVxuXG4gIHN0YXRpYyBhZGRTdGFydFJlc3BvbnNlSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgSW50ZXJuYWxTdGF0ZS5hZGRTdGFydFJlc3BvbnNlSGFuZGxlcihoYW5kbGVyKVxuICB9XG5cbiAgc3RhdGljIGFkZFZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBJbnRlcm5hbFN0YXRlLmFkZFZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpXG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlU3RhcnRSZXNwb25zZUhhbmRsZXIoaGFuZGxlcikge1xuICAgIEludGVybmFsU3RhdGUucmVtb3ZlU3RhcnRSZXNwb25zZUhhbmRsZXIoaGFuZGxlcilcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgSW50ZXJuYWxTdGF0ZS5yZW1vdmVWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcihoYW5kbGVyKVxuICB9XG5cbiAgc3RhdGljIGZvcmNlQ29udGVudFVwZGF0ZShjYWxsYmFjaykge1xuICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLkdFVF9WQVJTLFxuICAgICAgbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkNMVURFX0RFRkFVTFRTLCBmYWxzZSlcbiAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkNMVURFX1ZBUklBTlRfREVCVUdfSU5GTywgSW50ZXJuYWxTdGF0ZS52YXJpYW50RGVidWdJbmZvRW5hYmxlZCksIHtcbiAgICAgICAgcXVldWVkOiBmYWxzZSxcbiAgICAgICAgc2VuZE5vdzogdHJ1ZSxcbiAgICAgICAgcmVzcG9uc2U6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIGxldCBnZXRWYXJzUmVzcG9uc2UgPSBMZWFucGx1bVJlcXVlc3QuZ2V0TGFzdFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICBsZXQgaXNTdWNjZXNzID0gTGVhbnBsdW1SZXF1ZXN0LmlzUmVzcG9uc2VTdWNjZXNzKGdldFZhcnNSZXNwb25zZSk7XG4gICAgICAgICAgaWYgKGlzU3VjY2Vzcykge1xuICAgICAgICAgICAgVmFyQ2FjaGUuYXBwbHlEaWZmcyhcbiAgICAgICAgICAgICAgZ2V0VmFyc1Jlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUlNdLFxuICAgICAgICAgICAgICBnZXRWYXJzUmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuVkFSSUFOVFNdLFxuICAgICAgICAgICAgICBnZXRWYXJzUmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuQUNUSU9OX01FVEFEQVRBXSlcbiAgICAgICAgICAgIFZhckNhY2hlLnZhcmlhbnREZWJ1Z0luZm8gPSBnZXRWYXJzUmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuVkFSSUFOVF9ERUJVR19JTkZPXVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGlzU3VjY2Vzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBzdGFydCh1c2VySWQsIHVzZXJBdHRyaWJ1dGVzLCBjYWxsYmFjaykge1xuICAgIC8vIE92ZXJsb2Fkcy5cbiAgICBpZiAodHlwZW9mIHVzZXJJZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSB1c2VySWRcbiAgICAgIHVzZXJBdHRyaWJ1dGVzID0ge31cbiAgICAgIHVzZXJJZCA9IG51bGxcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB1c2VySWQgPT09ICdvYmplY3QnICYmIHVzZXJJZCAhPT0gbnVsbCAmJlxuICAgICAgICB1c2VySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2FsbGJhY2sgPSB1c2VyQXR0cmlidXRlc1xuICAgICAgdXNlckF0dHJpYnV0ZXMgPSB1c2VySWRcbiAgICAgIHVzZXJJZCA9IG51bGxcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB1c2VyQXR0cmlidXRlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSB1c2VyQXR0cmlidXRlc1xuICAgICAgdXNlckF0dHJpYnV0ZXMgPSB7fVxuICAgIH1cbiAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gdXNlcklkXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBMZWFucGx1bS5hZGRTdGFydFJlc3BvbnNlSGFuZGxlcihjYWxsYmFjaylcbiAgICB9XG5cbiAgICBWYXJDYWNoZS5vblVwZGF0ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICBJbnRlcm5hbFN0YXRlLnRyaWdnZXJWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMoKVxuICAgIH1cblxuICAgIGxldCBhcmdzID0gbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlVTRVJfQVRUUklCVVRFUywgSlNPTi5zdHJpbmdpZnkodXNlckF0dHJpYnV0ZXMpKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQ09VTlRSWSwgQ29uc3RhbnRzLlZBTFVFUy5ERVRFQ1QpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5SRUdJT04sIENvbnN0YW50cy5WQUxVRVMuREVURUNUKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQ0lUWSwgQ29uc3RhbnRzLlZBTFVFUy5ERVRFQ1QpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5MT0NBVElPTiwgQ29uc3RhbnRzLlZBTFVFUy5ERVRFQ1QpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5TWVNURU1fTkFNRSwgTGVhbnBsdW0uX3N5c3RlbU5hbWUgfHwgX2Jyb3dzZXJEZXRlY3Rvci5PUylcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlNZU1RFTV9WRVJTSU9OLCAoTGVhbnBsdW0uX3N5c3RlbVZlcnNpb24gfHwgJycpLnRvU3RyaW5nKCkpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5CUk9XU0VSX05BTUUsIF9icm93c2VyRGV0ZWN0b3IuYnJvd3NlcilcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkJST1dTRVJfVkVSU0lPTiwgX2Jyb3dzZXJEZXRlY3Rvci52ZXJzaW9uLnRvU3RyaW5nKCkpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5MT0NBTEUsIENvbnN0YW50cy5WQUxVRVMuREVURUNUKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuREVWSUNFX05BTUUsIExlYW5wbHVtLl9kZXZpY2VOYW1lIHx8XG4gICAgICAgICAgICBgJHtfYnJvd3NlckRldGVjdG9yLmJyb3dzZXJ9ICR7X2Jyb3dzZXJEZXRlY3Rvci52ZXJzaW9ufWApXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5ERVZJQ0VfTU9ERUwsIExlYW5wbHVtLl9kZXZpY2VNb2RlbCB8fCAnV2ViIEJyb3dzZXInKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuSU5DTFVERV9ERUZBVUxUUywgZmFsc2UpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkNMVURFX1ZBUklBTlRfREVCVUdfSU5GTywgSW50ZXJuYWxTdGF0ZS52YXJpYW50RGVidWdJbmZvRW5hYmxlZCk7XG5cbiAgICAvLyBJc3N1ZSByZXF1ZXN0LlxuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlNUQVJULCBhcmdzLCB7XG4gICAgICBxdWV1ZWQ6IHRydWUsXG4gICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgcmVzcG9uc2U6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIEludGVybmFsU3RhdGUuaGFzU3RhcnRlZCA9IHRydWVcbiAgICAgICAgbGV0IHN0YXJ0UmVzcG9uc2UgPSBMZWFucGx1bVJlcXVlc3QuZ2V0TGFzdFJlc3BvbnNlKHJlc3BvbnNlKVxuICAgICAgICBpZiAoTGVhbnBsdW1SZXF1ZXN0LmlzUmVzcG9uc2VTdWNjZXNzKHN0YXJ0UmVzcG9uc2UpKSB7XG4gICAgICAgICAgSW50ZXJuYWxTdGF0ZS5zdGFydFN1Y2Nlc3NmdWwgPSB0cnVlXG4gICAgICAgICAgaWYgKEludGVybmFsU3RhdGUuZGV2TW9kZSkge1xuICAgICAgICAgICAgbGV0IGxhdGVzdFZlcnNpb24gPSBzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLkxBVEVTVF9WRVJTSU9OXVxuICAgICAgICAgICAgaWYgKGxhdGVzdFZlcnNpb24pIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYEEgbmV3ZXIgdmVyc2lvbiBvZiBMZWFucGx1bSwgJHtsYXRlc3RWZXJzaW9ufSwgaXMgYXZhaWxhYmxlLiBHbyB0b2AgK1xuICAgICAgICAgICAgICAgICAgJ2xlYW5wbHVtLmNvbSB0byBkb3dubG9hZCBpdC4nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgTGVhbnBsdW1Tb2NrZXQuY29ubmVjdCgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgVmFyQ2FjaGUuYXBwbHlEaWZmcyhcbiAgICAgICAgICAgICAgc3RhcnRSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJTXSxcbiAgICAgICAgICAgICAgc3RhcnRSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJJQU5UU10sXG4gICAgICAgICAgICAgIHN0YXJ0UmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuQUNUSU9OX01FVEFEQVRBXSk7XG4gICAgICAgICAgVmFyQ2FjaGUudmFyaWFudERlYnVnSW5mbyA9IHN0YXJ0UmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuVkFSSUFOVF9ERUJVR19JTkZPXVxuICAgICAgICAgIFZhckNhY2hlLnRva2VuID0gc3RhcnRSZXNwb25zZVtDb25zdGFudHMuS0VZUy5UT0tFTl1cbiAgICAgICAgICBWYXJDYWNoZS5zZXRNZXNzYWdlcyhzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLk1FU1NBR0VTXSlcbiAgICAgICAgICBldmVudHMucHVibGlzaCgnc3RhcnQvbWVzc2FnZXMnLCB7XG4gICAgICAgICAgICBtZXNzYWdlczogTGVhbnBsdW0uZ2V0RmlsdGVyZWRSZXN1bHRzKFxuICAgICAgICAgICAgICAgIFZhckNhY2hlLmdldE1lc3NhZ2VzKCksXG4gICAgICAgICAgICAgICAgWydzdGFydCcsICdyZXN1bWUnXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgSW50ZXJuYWxTdGF0ZS5zdGFydFN1Y2Nlc3NmdWwgPSBmYWxzZVxuICAgICAgICAgIFZhckNhY2hlLmxvYWREaWZmcygpXG4gICAgICAgIH1cbiAgICAgICAgSW50ZXJuYWxTdGF0ZS50cmlnZ2VyU3RhcnRIYW5kbGVycygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICAvKipcbiAgICogcmV0dXJuIGFuIGFycmF5IG9mIGZpbHRlcmVkIG1lc3NhZ2VcbiAgICogQHBhcmFtIHtBcnJheX0gbWVzc2FnZXMgLSB0aGUgbWVzc2FnZSByZXNwb25zZSBzdG9yZWQgaW4gVmFyY2FjaGVcbiAgICogQHBhcmFtIHtTdHJpbmcgfCBTdHJpbmdbXSB8ID99IHRyaWdnZXJzIC0gdGhlIHRyaWdnZXIocykgd2Ugd2FudCB0byBjaGVjayBhZ2FpbnN0XG4gICAqIEBwYXJhbSB7U3RyaW5nP30gdmVyYiAtIGFkZGl0aW9uYWwgcGFyYW1ldGVyXG4gICAqIEBwYXJhbSAge1N0cmluZz99IG5vdW4gLSBhZGRpdGlvbmFsIHBhcmFtZXRlclxuICAgKiBAcGFyYW0gIHtPYmplY3Q/fSBwYXJhbXMgLSBuZWNlc3NhcnkgZm9yIHNvbWUgZXZlbnRcbiAgICogQHBhcmFtICB7bnVtYmVyP30gcGFyYW1zLmZyb20gLSBuZWNlc3NhcnkgZm9yIHNvbWUgZXZlbnRcbiAgICogQHBhcmFtICB7bnVtYmVyP30gcGFyYW1zLnRvIC0gbmVjZXNzYXJ5IGZvciBzb21lIGV2ZW50XG4gICAqIEBwYXJhbSAge3N0cmluZz99IHBhcmFtcy5wYXJhbVZhbHVlIC0gbmVjZXNzYXJ5IGZvciBzb21lIGV2ZW50XG4gICAqIEBwYXJhbSAge3N0cmluZz99IHBhcmFtcy5OYW1lIC0gbmVjZXNzYXJ5IGZvciBzb21lIGV2ZW50XG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIGdldEZpbHRlcmVkUmVzdWx0cyggbWVzc2FnZXMsIHRyaWdnZXJzPScnLCB2ZXJiPScnLCBub3VuPScnLCBwYXJhbXM9e30pIHtcbiAgICBpZighbWVzc2FnZXMpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgICByZXR1cm4gQWN0aW9uTWFuYWdlci5maWx0ZXJNZXNzYWdlcyhtZXNzYWdlcywgdHJpZ2dlcnMsIHZlcmIsIG5vdW4sIHBhcmFtcylcbiAgfVxuICBzdGF0aWMgc3RhcnRGcm9tQ2FjaGUodXNlcklkLCB1c2VyQXR0cmlidXRlcywgY2FsbGJhY2spIHtcbiAgICAvLyBPdmVybG9hZHMuXG4gICAgaWYgKHR5cGVvZiB1c2VySWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gdXNlcklkXG4gICAgICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRBc3NpZ25tZW50XG4gICAgICB1c2VyQXR0cmlidXRlcyA9IHt9XG4gICAgICB1c2VySWQgPSBudWxsXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdXNlcklkID09PSAnb2JqZWN0JyAmJiB1c2VySWQgIT09IG51bGwgJiZcbiAgICAgICAgdXNlcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNhbGxiYWNrID0gdXNlckF0dHJpYnV0ZXNcbiAgICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEFzc2lnbm1lbnRcbiAgICAgIHVzZXJBdHRyaWJ1dGVzID0gdXNlcklkXG4gICAgICB1c2VySWQgPSBudWxsXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdXNlckF0dHJpYnV0ZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gdXNlckF0dHJpYnV0ZXNcbiAgICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEFzc2lnbm1lbnRcbiAgICAgIHVzZXJBdHRyaWJ1dGVzID0ge31cbiAgICB9XG4gICAgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCA9IHVzZXJJZFxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgTGVhbnBsdW0uYWRkU3RhcnRSZXNwb25zZUhhbmRsZXIoY2FsbGJhY2spXG4gICAgfVxuXG4gICAgSW50ZXJuYWxTdGF0ZS5oYXNTdGFydGVkID0gdHJ1ZVxuICAgIEludGVybmFsU3RhdGUuc3RhcnRTdWNjZXNzZnVsID0gdHJ1ZVxuICAgIGlmIChJbnRlcm5hbFN0YXRlLmRldk1vZGUpIHtcbiAgICAgIExlYW5wbHVtU29ja2V0LmNvbm5lY3QoKVxuICAgIH1cbiAgICBWYXJDYWNoZS5sb2FkRGlmZnMoKVxuICAgIEludGVybmFsU3RhdGUudHJpZ2dlclN0YXJ0SGFuZGxlcnMoKVxuICB9XG5cbiAgc3RhdGljIHN0b3AoKSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuU1RPUCwgdW5kZWZpbmVkLCB7XG4gICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgcXVldWVkOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBwYXVzZVNlc3Npb24oKSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuUEFVU0VfU0VTU0lPTiwgdW5kZWZpbmVkLCB7XG4gICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgcXVldWVkOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyByZXN1bWVTZXNzaW9uKCkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlJFU1VNRV9TRVNTSU9OLCB1bmRlZmluZWQsIHtcbiAgICAgIHNlbmROb3c6IHRydWUsXG4gICAgICBxdWV1ZWQ6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIHBhdXNlU3RhdGUoKSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuUEFVU0VfU1RBVEUsIHVuZGVmaW5lZCwge1xuICAgICAgcXVldWVkOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyByZXN1bWVTdGF0ZSgpIHtcbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5SRVNVTUVfU1RBVEUsIHVuZGVmaW5lZCwge1xuICAgICAgcXVldWVkOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBzZXRVc2VySWQodXNlcklkKSB7XG4gICAgTGVhbnBsdW0uc2V0VXNlckF0dHJpYnV0ZXModXNlcklkKVxuICB9XG5cbiAgc3RhdGljIHNldFVzZXJBdHRyaWJ1dGVzKHVzZXJJZCwgdXNlckF0dHJpYnV0ZXMpIHtcbiAgICBpZiAodXNlckF0dHJpYnV0ZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiB1c2VySWQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHVzZXJBdHRyaWJ1dGVzID0gdXNlcklkXG4gICAgICAgIHVzZXJJZCA9IHVuZGVmaW5lZFxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdXNlcklkICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IHNldFVzZXJBdHRyaWJ1dGVzIGV4cGVjdHMgYSBzdHJpbmcgb3IgYW4gJyArXG4gICAgICAgICAgICAnb2JqZWN0JylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlNFVF9VU0VSX0FUVFJJQlVURVMsXG4gICAgICAgIG5ldyBBcmdzQnVpbGRlcigpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVVNFUl9BVFRSSUJVVEVTLFxuICAgICAgICAgICAgICAgIHVzZXJBdHRyaWJ1dGVzID8gSlNPTi5zdHJpbmdpZnkodXNlckF0dHJpYnV0ZXMpIDogdW5kZWZpbmVkKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLk5FV19VU0VSX0lELCB1c2VySWQpLCB7XG4gICAgICAgICAgcXVldWVkOiB0cnVlXG4gICAgICAgIH0pXG4gICAgaWYgKHVzZXJJZCkge1xuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCA9IHVzZXJJZFxuICAgICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5VU0VSX0lELCBMZWFucGx1bVJlcXVlc3QudXNlcklkKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRGaWxlVXJsKGZpbGVOYW1lKSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgIHJldHVybiBMZWFucGx1bVJlcXVlc3RcbiAgICAgICAgLmdlbmVyYXRlUmVxdWVzdFVybChcbiAgICAgICAgICBDb25zdGFudHMuTUVUSE9EUy5ET1dOTE9BRF9GSUxFLFxuICAgICAgICAgIG5ldyBBcmdzQnVpbGRlcigpLmFkZChDb25zdGFudHMuUEFSQU1TLkZJTEVOQU1FLCBmaWxlTmFtZSlcbiAgICAgICAgKVxuICB9XG5cbiAgc3RhdGljIHRyYWNrTWVzc2FnZShldmVudCwgbWVzc2FnZUlkKSB7XG4gICAgaWYoZXZlbnQgPT09ICcnKSB7XG4gICAgICBWYXJDYWNoZS5hZGRNZXNzYWdlVmlldyhtZXNzYWdlSWQpIC8vIHRyYWNrIHZpZXcgdHJhY2sgZXZlbnQgaXMgJycgYWthICdWaWV3J1xuICAgIH1cbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuVFJBQ0ssXG4gICAgICAgIG5ldyBBcmdzQnVpbGRlcigpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuRVZFTlQsIGV2ZW50KVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLk1FU1NBR0VfSUQsIG1lc3NhZ2VJZCksIHtcbiAgICAgICAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgICAgICB9KVxuICB9XG5cbiAgc3RhdGljIHRyYWNrKGV2ZW50LCB2YWx1ZSwgaW5mbywgcGFyYW1zKSB7XG4gICAgLy8gT3ZlcmxvYWRzLlxuICAgIC8vIG9iamVjdCAmJiAhbnVsbCAmJiAhdW5kZWZpbmVkIC0+IHBhcmFtc1xuICAgIC8vIHN0cmluZyAtPiBpbmZvLCBwYXJhbXNcbiAgICAvLyAqLCBvYmplY3QgJiYgIW51bGwgJiYgIXVuZGVmaW5lZCAtPiB2YWx1ZSwgcGFyYW1zXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zID0gdmFsdWVcbiAgICAgIGluZm8gPSB1bmRlZmluZWRcbiAgICAgIHZhbHVlID0gdW5kZWZpbmVkXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJhbXMgPSBpbmZvXG4gICAgICBpbmZvID0gdmFsdWVcbiAgICAgIHZhbHVlID0gdW5kZWZpbmVkXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaW5mbyA9PT0gJ29iamVjdCcgJiYgaW5mbyAhPT0gbnVsbCAmJiBpbmZvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtcyA9IGluZm9cbiAgICAgIGluZm8gPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBldmVudHMucHVibGlzaCgndHJhY2snLCB7XG4gICAgICBldmVudCxcbiAgICAgIHBhcmFtc1xuICAgIH0pXG5cbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5UUkFDSyxcbiAgICAgICAgbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5FVkVOVCwgZXZlbnQpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVkFMVUUsIHZhbHVlIHx8IDAuMClcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkZPLCBpbmZvKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlBBUkFNUywgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSksIHtcbiAgICAgICAgICBxdWV1ZWQ6IHRydWVcbiAgICAgICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBhZHZhbmNlVG8oc3RhdGUsIGluZm8sIHBhcmFtcykge1xuICAgIC8vIE92ZXJsb2Fkcy5cbiAgICAvLyBzdHJpbmd8bnVsbHx1bmRlZmluZWQsICogLT4gaW5mbywgcGFyYW1zXG4gICAgLy8gb2JqZWN0ICYmICFudWxsICYmICF1bmRlZmluZWQgLT4gcGFyYW1zXG4gICAgaWYgKHR5cGVvZiBpbmZvID09PSAnb2JqZWN0JyAmJiBpbmZvICE9PSBudWxsICYmIGluZm8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zID0gaW5mb1xuICAgICAgaW5mbyA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLkFEVkFOQ0UsXG4gICAgICAgIG5ldyBBcmdzQnVpbGRlcigpXG4gICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlNUQVRFLCBzdGF0ZSlcbiAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuSU5GTywgaW5mbylcbiAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuUEFSQU1TLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKSwge1xuICAgICAgICBxdWV1ZWQ6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgd2ViIHB1c2ggaXMgc3VwcG9ydGVkIGluIHRoZSBicm93c2VyLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBUcnVlIGlmIHN1cHBvcnRlZCwgZWxzZSBmYWxzZS5cbiAgICovXG4gIHN0YXRpYyBpc1dlYlB1c2hTdXBwb3J0ZWQoKSB7XG4gICAgcmV0dXJuIFB1c2hNYW5hZ2VyLmlzV2ViUHVzaFN1cHBvcnRlZCgpXG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB3ZWIgcHVzaCBpcyBzdWJzY3JpYmVkLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXNvbHZlcyBpZiB0cnVlLCByZWplY3RzIGlmIGZhbHNlLlxuICAgKi9cbiAgc3RhdGljIGlzV2ViUHVzaFN1YnNjcmliZWQoKSB7XG4gICAgcmV0dXJuIFB1c2hNYW5hZ2VyLmlzV2ViUHVzaFN1YnNjcmliZWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIHRoZSBicm93c2VyIGZvciB3ZWIgcHVzaC5cbiAgICogQHBhcmFtICB7c3RyaW5nfSAgIHNlcnZpY2VXb3JrZXJVcmwgVGhlIHVybCBvbiB5b3VyIHNlcnZlciB0aGF0IGhvc3RzIHRoZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvc3cubWluLmpzIHNlcnZpY2Ugd29ya2VyIGpzIGZpbGUuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgICAgICAgICAgICAgIFJlc29sdmVzIGlmIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsLFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcndpc2UgZmFpbHMuXG4gICAqL1xuICBzdGF0aWMgcmVnaXN0ZXJGb3JXZWJQdXNoKHNlcnZpY2VXb3JrZXJVcmwpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKFB1c2hNYW5hZ2VyLmlzV2ViUHVzaFN1cHBvcnRlZCgpKSB7XG4gICAgICAgIHJldHVybiBQdXNoTWFuYWdlci5yZWdpc3RlcihzZXJ2aWNlV29ya2VyVXJsLCAoaXNTdWJzY3JpYmVkKSA9PiB7XG4gICAgICAgICAgaWYgKGlzU3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFB1c2hNYW5hZ2VyLnN1YnNjcmliZVVzZXIoKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdCgnTGVhbnBsdW06IFdlYlB1c2ggaXMgbm90IHN1cHBvcnRlZC4nKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVW5yZWdpc3RlcnMgdGhlIGJyb3dzZXIgZm9ybSB3ZWIgcHVzaC5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gICAgICAgICAgICBSZXNvbHZlcyBvbiBzdWNjZXNzLCBvdGhlcndpc2UgcmVqZWN0cy5cbiAgICovXG4gIHN0YXRpYyB1bnJlZ2lzdGVyRnJvbVdlYlB1c2goKSB7XG4gICAgcmV0dXJuIFB1c2hNYW5hZ2VyLnVuc3Vic2NyaWJlVXNlcigpXG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIGNhY2hlZCB2YWx1ZXMgZm9yIG1lc3NhZ2VzLCB2YXJpYWJsZXMgYW5kIHRlc3QgYXNzaWdubWVudHMuXG4gICAqIFVzZSBzcGFyaW5nbHkgYXMgaWYgdGhlIGFwcCBpcyB1cGRhdGVkLCB5b3UnbGwgaGF2ZSB0byBkZWFsIHdpdGggcG90ZW50aWFsbHlcbiAgICogaW5jb25zaXN0ZW50IHN0YXRlIG9yIHVzZXIgZXhwZXJpZW5jZS5cbiAgICovXG4gIHN0YXRpYyBjbGVhclVzZXJDb250ZW50KCkge1xuICAgIFZhckNhY2hlLmNsZWFyVXNlckNvbnRlbnQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwdWIvc3ViIGV2ZW50cyBtYW5hZ2VyLlxuICAgKlxuICAgKiBAUmV0dXJuIHsgcHVibGlzaDogKHRvcGljLCBhcmdzKSA9PiB7fSwgc3Vic2NyaWJlOiAodG9waWMsIGNhbGxiYWNrKSA9PiB7fSB9XG4gICAqL1xuICBzdGF0aWMgZ2V0RXZlbnRzKCkge1xuICAgIHJldHVybiBldmVudHNcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xlYW5wbHVtLmpzIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cblxuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi9OZXR3b3JrJ1xuXG4vKipcbiAqIFNvY2tldC5pbyAxLjAgY2xpZW50IGNsYXNzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2NrZXRJb0NsaWVudCB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhIG5ldyBTb2NrZXRJb0NsaWVudCwgbm90IGNvbm5lY3RlZCBieSBkZWZhdWx0LlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZVxuICAgIHRoaXMuY29ubmVjdGluZyA9IGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogQ29ubmVjdHMgdG8gdGhlIGdpdmVuIHNvY2tldEhvc3QuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gc29ja2V0SG9zdCBUaGUgaG9zdCB0byBjb25uZWN0IHRvLlxuICAgKi9cbiAgY29ubmVjdChzb2NrZXRIb3N0KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtdGhpc1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuY29ubmVjdGluZyA9IHRydWVcbiAgICBSZXF1ZXN0LmFqYXgoJ1BPU1QnLCBgaHR0cHM6Ly8ke3NvY2tldEhvc3R9L3NvY2tldC5pby8xYCwgJycsXG4gICAgICAgIGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICBsZXQgcGFydHMgPSBsaW5lLnNwbGl0KCc6JylcbiAgICAgICAgICBsZXQgc2Vzc2lvbiA9IHBhcnRzWzBdXG4gICAgICAgICAgbGV0IGhlYXJ0YmVhdCA9IHBhcnNlSW50KHBhcnRzWzFdKSAvIDIgKiAxMDAwXG4gICAgICAgICAgc2VsZi5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KGB3c3M6Ly8ke3NvY2tldEhvc3R9L3NvY2tldC5pby8xL3dlYnNvY2tldC8ke3Nlc3Npb259YClcbiAgICAgICAgICBsZXQgaGVhcnRiZWF0SW50ZXJ2YWwgPSBudWxsXG4gICAgICAgICAgc2VsZi5zb2NrZXQub25vcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLmNvbm5lY3RlZCA9IHRydWVcbiAgICAgICAgICAgIHNlbGYuY29ubmVjdGluZyA9IGZhbHNlXG4gICAgICAgICAgICBpZiAoc2VsZi5vbm9wZW4pIHtcbiAgICAgICAgICAgICAgc2VsZi5vbm9wZW4oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhcnRiZWF0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgc2VsZi5zb2NrZXQuc2VuZCgnMjo6OicpXG4gICAgICAgICAgICB9LCBoZWFydGJlYXQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGYuc29ja2V0Lm9uY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuY29ubmVjdGVkID0gZmFsc2VcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaGVhcnRiZWF0SW50ZXJ2YWwpXG4gICAgICAgICAgICBpZiAoc2VsZi5vbmNsb3NlKSB7XG4gICAgICAgICAgICAgIHNlbGYub25jbG9zZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGYuc29ja2V0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZVBhcnRzID0gZXZlbnQuZGF0YS5zcGxpdCgnOicpXG4gICAgICAgICAgICBsZXQgY29kZSA9IHBhcnNlSW50KG1lc3NhZ2VQYXJ0c1swXSlcbiAgICAgICAgICAgIGlmIChjb2RlID09PSAyKSB7XG4gICAgICAgICAgICAgIHNlbGYuc29ja2V0LnNlbmQoJzI6OicpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDUpIHtcbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VJZCA9IG1lc3NhZ2VQYXJ0c1sxXVxuICAgICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZVBhcnRzLnNsaWNlKDMpLmpvaW4oJzonKSlcbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VFdmVudCA9IGRhdGEubmFtZVxuICAgICAgICAgICAgICBsZXQgYXJncyA9IGRhdGEuYXJnc1xuICAgICAgICAgICAgICBpZiAobWVzc2FnZUlkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zb2NrZXQuc2VuZChgNjo6OiR7bWVzc2FnZUlkfWApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHNlbGYub25tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vbm1lc3NhZ2UobWVzc2FnZUV2ZW50LCBhcmdzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDcpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYFNvY2tldCBlcnJvcjogJHtldmVudC5kYXRhfWApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGYuc29ja2V0Lm9uZXJyb3IgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgc2VsZi5zb2NrZXQuY2xvc2UoKVxuICAgICAgICAgICAgaWYgKHNlbGYub25lcnJvcikge1xuICAgICAgICAgICAgICBzZWxmLm9uZXJyb3IoZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBudWxsLCBmYWxzZSwgdHJ1ZSAvLyBudWxsLCBxdWV1ZWQsIHBsYWluVGV4dFxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBnaXZlbiBldmVudCB3aXRoIGFyZ3VtZW50cyB0byB0aGUgc2VydmVyLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWUgTmFtZSBvZiB0aGUgZXZlbnQuXG4gICAqIEBwYXJhbSAgeyp9IGFyZ3MgQXJndW1lbnRzIHRvIHNlbmQuXG4gICAqL1xuICBzZW5kKG5hbWUsIGFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuY29ubmVjdGVkKSB7XG4gICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IFNvY2tldCBpcyBub3QgY29ubmVjdGVkLicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IGFyZ3NKc29uID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbmFtZSxcbiAgICAgIGFyZ3NcbiAgICB9KVxuICAgIHRoaXMuc29ja2V0LnNlbmQoYDU6Ojoke2FyZ3NKc29ufWApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Tb2NrZXRJb0NsaWVudC5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19EYXRhVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19IYXNoLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fUHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1NldC5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKSxcbiAgICBzZXRDYWNoZUFkZCA9IHJlcXVpcmUoJy4vX3NldENhY2hlQWRkJyksXG4gICAgc2V0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19zZXRDYWNoZUhhcycpO1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU2V0Q2FjaGVgLlxuU2V0Q2FjaGUucHJvdG90eXBlLmFkZCA9IFNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gc2V0Q2FjaGVBZGQ7XG5TZXRDYWNoZS5wcm90b3R5cGUuaGFzID0gc2V0Q2FjaGVIYXM7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0Q2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TZXRDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIHN0YWNrQ2xlYXIgPSByZXF1aXJlKCcuL19zdGFja0NsZWFyJyksXG4gICAgc3RhY2tEZWxldGUgPSByZXF1aXJlKCcuL19zdGFja0RlbGV0ZScpLFxuICAgIHN0YWNrR2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tHZXQnKSxcbiAgICBzdGFja0hhcyA9IHJlcXVpcmUoJy4vX3N0YWNrSGFzJyksXG4gICAgc3RhY2tTZXQgPSByZXF1aXJlKCcuL19zdGFja1NldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2s7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TdGFjay5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gVWludDhBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1VpbnQ4QXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19XZWFrTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheUZpbHRlci5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVNvbWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheVNvbWUuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0QWxsS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc0VxdWFsRGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsRGVlcCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAgd2hpY2ggc3VwcG9ydHMgcGFydGlhbCBjb21wYXJpc29uc1xuICogYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIFVub3JkZXJlZCBjb21wYXJpc29uXG4gKiAgMiAtIFBhcnRpYWwgY29tcGFyaXNvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdExpa2UodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBiYXNlSXNFcXVhbCwgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWwuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIGVxdWFsQnlUYWcgPSByZXF1aXJlKCcuL19lcXVhbEJ5VGFnJyksXG4gICAgZXF1YWxPYmplY3RzID0gcmVxdWlyZSgnLi9fZXF1YWxPYmplY3RzJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgIG9ialRhZyA9IG9iaklzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob2JqZWN0KSxcbiAgICAgIG90aFRhZyA9IG90aElzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob3RoZXIpO1xuXG4gIG9ialRhZyA9IG9ialRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb2JqVGFnO1xuICBvdGhUYWcgPSBvdGhUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG90aFRhZztcblxuICB2YXIgb2JqSXNPYmogPSBvYmpUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgb3RoSXNPYmogPSBvdGhUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgaXNTYW1lVGFnID0gb2JqVGFnID09IG90aFRhZztcblxuICBpZiAoaXNTYW1lVGFnICYmIGlzQnVmZmVyKG9iamVjdCkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKG90aGVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvYmpJc0FyciA9IHRydWU7XG4gICAgb2JqSXNPYmogPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNTYW1lVGFnICYmICFvYmpJc09iaikge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgcmV0dXJuIChvYmpJc0FyciB8fCBpc1R5cGVkQXJyYXkob2JqZWN0KSlcbiAgICAgID8gZXF1YWxBcnJheXMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaylcbiAgICAgIDogZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICB9XG4gIGlmICghKGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRykpIHtcbiAgICB2YXIgb2JqSXNXcmFwcGVkID0gb2JqSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdfX3dyYXBwZWRfXycpLFxuICAgICAgICBvdGhJc1dyYXBwZWQgPSBvdGhJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCAnX193cmFwcGVkX18nKTtcblxuICAgIGlmIChvYmpJc1dyYXBwZWQgfHwgb3RoSXNXcmFwcGVkKSB7XG4gICAgICB2YXIgb2JqVW53cmFwcGVkID0gb2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsXG4gICAgICAgICAgb3RoVW53cmFwcGVkID0gb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyO1xuXG4gICAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpVbndyYXBwZWQsIG90aFVud3JhcHBlZCwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICByZXR1cm4gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsRGVlcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsRGVlcC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBgY2FjaGVgIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBtYXBUb0FycmF5ID0gcmVxdWlyZSgnLi9fbWFwVG9BcnJheScpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGNvbXBhcmluZyBvYmplY3RzIG9mXG4gKiB0aGUgc2FtZSBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY29tcGFyaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3RzIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCB0YWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgIChvYmplY3QuYnl0ZU9mZnNldCAhPSBvdGhlci5ieXRlT2Zmc2V0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBvYmplY3QgPSBvYmplY3QuYnVmZmVyO1xuICAgICAgb3RoZXIgPSBvdGhlci5idWZmZXI7XG5cbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgICFlcXVhbEZ1bmMobmV3IFVpbnQ4QXJyYXkob2JqZWN0KSwgbmV3IFVpbnQ4QXJyYXkob3RoZXIpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgICAvLyBDb2VyY2UgYm9vbGVhbnMgdG8gYDFgIG9yIGAwYCBhbmQgZGF0ZXMgdG8gbWlsbGlzZWNvbmRzLlxuICAgICAgLy8gSW52YWxpZCBkYXRlcyBhcmUgY29lcmNlZCB0byBgTmFOYC5cbiAgICAgIHJldHVybiBlcSgrb2JqZWN0LCArb3RoZXIpO1xuXG4gICAgY2FzZSBlcnJvclRhZzpcbiAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PSBvdGhlci5uYW1lICYmIG9iamVjdC5tZXNzYWdlID09IG90aGVyLm1lc3NhZ2U7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIC8vIENvZXJjZSByZWdleGVzIHRvIHN0cmluZ3MgYW5kIHRyZWF0IHN0cmluZ3MsIHByaW1pdGl2ZXMgYW5kIG9iamVjdHMsXG4gICAgICAvLyBhcyBlcXVhbC4gU2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1yZWdleHAucHJvdG90eXBlLnRvc3RyaW5nXG4gICAgICAvLyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAgcmV0dXJuIG9iamVjdCA9PSAob3RoZXIgKyAnJyk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHZhciBjb252ZXJ0ID0gbWFwVG9BcnJheTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRztcbiAgICAgIGNvbnZlcnQgfHwgKGNvbnZlcnQgPSBzZXRUb0FycmF5KTtcblxuICAgICAgaWYgKG9iamVjdC5zaXplICE9IG90aGVyLnNpemUgJiYgIWlzUGFydGlhbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gICAgICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICAgICAgaWYgKHN0YWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gICAgICB9XG4gICAgICBiaXRtYXNrIHw9IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUc7XG5cbiAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICAgICAgdmFyIHJlc3VsdCA9IGVxdWFsQXJyYXlzKGNvbnZlcnQob2JqZWN0KSwgY29udmVydChvdGhlciksIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICAgICAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICBpZiAoc3ltYm9sVmFsdWVPZikge1xuICAgICAgICByZXR1cm4gc3ltYm9sVmFsdWVPZi5jYWxsKG9iamVjdCkgPT0gc3ltYm9sVmFsdWVPZi5jYWxsKG90aGVyKTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxCeVRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2VxdWFsQnlUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5cycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBvYmplY3RzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBvYmpQcm9wcyA9IGdldEFsbEtleXMob2JqZWN0KSxcbiAgICAgIG9iakxlbmd0aCA9IG9ialByb3BzLmxlbmd0aCxcbiAgICAgIG90aFByb3BzID0gZ2V0QWxsS2V5cyhvdGhlciksXG4gICAgICBvdGhMZW5ndGggPSBvdGhQcm9wcy5sZW5ndGg7XG5cbiAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzUGFydGlhbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaW5kZXggPSBvYmpMZW5ndGg7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICBpZiAoIShpc1BhcnRpYWwgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIG9iamVjdCk7XG5cbiAgdmFyIHNraXBDdG9yID0gaXNQYXJ0aWFsO1xuICB3aGlsZSAoKytpbmRleCA8IG9iakxlbmd0aCkge1xuICAgIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltrZXldO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIG9ialZhbHVlLCBrZXksIG90aGVyLCBvYmplY3QsIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIob2JqVmFsdWUsIG90aFZhbHVlLCBrZXksIG9iamVjdCwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKCEoY29tcGFyZWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gKG9ialZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMob2JqVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpXG4gICAgICAgICAgOiBjb21wYXJlZFxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gIH1cbiAgaWYgKHJlc3VsdCAmJiAhc2tpcEN0b3IpIHtcbiAgICB2YXIgb2JqQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgb3RoQ3RvciA9IG90aGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgLy8gTm9uIGBPYmplY3RgIG9iamVjdCBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1YWwuXG4gICAgaWYgKG9iakN0b3IgIT0gb3RoQ3RvciAmJlxuICAgICAgICAoJ2NvbnN0cnVjdG9yJyBpbiBvYmplY3QgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvdGhlcikgJiZcbiAgICAgICAgISh0eXBlb2Ygb2JqQ3RvciA9PSAnZnVuY3Rpb24nICYmIG9iakN0b3IgaW5zdGFuY2VvZiBvYmpDdG9yICYmXG4gICAgICAgICAgdHlwZW9mIG90aEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvdGhDdG9yIGluc3RhbmNlb2Ygb3RoQ3RvcikpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbE9iamVjdHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19lcXVhbE9iamVjdHMuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldEFsbEtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFJhd1RhZy5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBEYXRhVmlldyA9IHJlcXVpcmUoJy4vX0RhdGFWaWV3JyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgUHJvbWlzZSA9IHJlcXVpcmUoJy4vX1Byb21pc2UnKSxcbiAgICBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBXZWFrTWFwID0gcmVxdWlyZSgnLi9fV2Vha01hcCcpLFxuICAgIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcyA8IDYuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBiYXNlR2V0VGFnKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6ICcnO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaEhhcy5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaFNldC5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG5cbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGUgPT0gJ251bWJlcicgfHxcbiAgICAgICh0eXBlICE9ICdzeW1ib2wnICYmIHJlSXNVaW50LnRlc3QodmFsdWUpKSkgJiZcbiAgICAgICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc0luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzTWFza2VkLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc1Byb3RvdHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcFRvQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUucmVxdWlyZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25vZGVVdGlsLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fb3ZlckFyZy5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVBZGQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zZXRDYWNoZUFkZC5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBpbiB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUhhcyh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc2V0Q2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9BcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3NldFRvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0NsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9zdHViQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9zdHViRmFsc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9