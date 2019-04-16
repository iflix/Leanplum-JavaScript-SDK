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

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.Constants = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
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

    SDK_VERSION: '1.7.0-iflix',

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
  module.exports = exports['default'];
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
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./Constants'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.Constants);
    global.ArgsBuilder = mod.exports;
  }
})(this, function (module, exports, _Constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Constants2 = _interopRequireDefault(_Constants);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var ArgsBuilder = function () {
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
      key: 'add',
      value: function add(key, value) {
        if (typeof value === 'undefined') {
          return this;
        }
        if (this.argString) {
          this.argString += '&';
        }
        var encodedUriComponent = encodeURIComponent(value);
        this.argString += key + '=' + encodedUriComponent;
        this.argValues[key] = value;
        return this;
      }
    }, {
      key: 'body',
      value: function body(_body) {
        if (_body) {
          this._body = _body;
          return this;
        }
        return this._body;
      }
    }, {
      key: 'attachApiKeys',
      value: function attachApiKeys(appId, clientKey) {
        return this.add(_Constants2.default.PARAMS.APP_ID, appId).add(_Constants2.default.PARAMS.CLIENT, _Constants2.default.CLIENT).add(_Constants2.default.PARAMS.CLIENT_KEY, clientKey);
      }
    }, {
      key: 'build',
      value: function build() {
        return this.argString;
      }
    }, {
      key: 'buildDict',
      value: function buildDict() {
        return this.argValues;
      }
    }]);

    return ArgsBuilder;
  }();

  exports.default = ArgsBuilder;
  module.exports = exports['default'];
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(3), __webpack_require__(12), __webpack_require__(18), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./Constants'), require('./ArgsBuilder'), require('./InternalState'), require('./Network'), require('./LocalStorageManager'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.Constants, global.ArgsBuilder, global.InternalState, global.Network, global.LocalStorageManager);
    global.LeanplumRequest = mod.exports;
  }
})(this, function (module, exports, _Constants, _ArgsBuilder, _InternalState, _Network, _LocalStorageManager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Constants2 = _interopRequireDefault(_Constants);

  var _ArgsBuilder2 = _interopRequireDefault(_ArgsBuilder);

  var _InternalState2 = _interopRequireDefault(_InternalState);

  var _Network2 = _interopRequireDefault(_Network);

  var _LocalStorageManager2 = _interopRequireDefault(_LocalStorageManager);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var lastRequestTime = undefined;
  var cooldownTimeout = null;

  var LeanplumRequest = function () {
    function LeanplumRequest() {
      _classCallCheck(this, LeanplumRequest);
    }

    _createClass(LeanplumRequest, null, [{
      key: 'request',
      value: function request(action, params, options) {
        options = options || {};
        params = params || new _ArgsBuilder2.default();

        // Get or create device ID and user ID.
        if (!LeanplumRequest.deviceId) {
          LeanplumRequest.deviceId = _LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.DEVICE_ID);
        }
        if (!LeanplumRequest.deviceId) {
          var id = '';
          var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' + '0123456789';
          for (var i = 0; i < 16; i++) {
            id += possible.charAt(Math.floor(Math.random() * possible.length));
          }
          LeanplumRequest.deviceId = id;
          _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.DEVICE_ID, id);
        }
        if (!LeanplumRequest.userId) {
          LeanplumRequest.userId = _LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.USER_ID);
          if (!LeanplumRequest.userId) {
            LeanplumRequest.userId = LeanplumRequest.deviceId;
          }
        }
        _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.USER_ID, LeanplumRequest.userId);

        var argsBuilder = params.attachApiKeys(LeanplumRequest.appId, LeanplumRequest.clientKey).add(_Constants2.default.PARAMS.SDK_VERSION, _Constants2.default.SDK_VERSION).add(_Constants2.default.PARAMS.DEVICE_ID, LeanplumRequest.deviceId).add(_Constants2.default.PARAMS.USER_ID, LeanplumRequest.userId).add(_Constants2.default.PARAMS.ACTION, action).add(_Constants2.default.PARAMS.VERSION_NAME, LeanplumRequest.versionName).add(_Constants2.default.PARAMS.DEV_MODE, _InternalState2.default.devMode).add(_Constants2.default.PARAMS.TIME, (new Date().getTime() / 1000).toString());
        var success = options.success || options.response;
        var error = options.error || options.response;

        if (!LeanplumRequest.appId || !LeanplumRequest.clientKey) {
          var err = 'Leanplum App ID and client key are not set. Make sure you ' + 'are calling setAppIdForDevelopmentMode or setAppIdForProductionMode ' + 'before issuing API calls.';
          console.error(err);
          if (error) error(err);
          return;
        }

        if (params.body()) {
          _Network2.default.ajax('POST', LeanplumRequest.apiPath + '?' + argsBuilder.build(), params.body(), success, error, options.queued);
          return;
        }

        var sendNow = _InternalState2.default.devMode || options.sendNow || !LeanplumRequest.batchEnabled;

        var sendUnsentRequests = function sendUnsentRequests() {
          var requestsToSend = LeanplumRequest.popUnsentRequests();
          if (requestsToSend.length > 0) {
            var requestData = JSON.stringify({
              'data': requestsToSend
            });
            var multiRequestArgs = new _ArgsBuilder2.default().attachApiKeys(LeanplumRequest.appId, LeanplumRequest.clientKey).add(_Constants2.default.PARAMS.SDK_VERSION, _Constants2.default.SDK_VERSION).add(_Constants2.default.PARAMS.ACTION, _Constants2.default.METHODS.MULTI).add(_Constants2.default.PARAMS.TIME, (new Date().getTime() / 1000).toString().toString()).build();
            _Network2.default.ajax('POST', LeanplumRequest.apiPath + '?' + multiRequestArgs, requestData, success, error, options.queued);
          }
        };

        // Deal with cooldown.
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
      key: 'generateRequestUrl',
      value: function generateRequestUrl(action, queryParams) {
        queryParams = queryParams || new _ArgsBuilder2.default();

        // Get or create device ID and user ID.
        if (!LeanplumRequest.deviceId) {
          LeanplumRequest.deviceId = _LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.DEVICE_ID);
        }
        if (!LeanplumRequest.deviceId) {
          var id = '';
          var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' + '0123456789';
          for (var i = 0; i < 16; i++) {
            id += possible.charAt(Math.floor(Math.random() * possible.length));
          }
          LeanplumRequest.deviceId = id;
          _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.DEVICE_ID, id);
        }
        if (!LeanplumRequest.userId) {
          LeanplumRequest.userId = _LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.USER_ID);
          if (!LeanplumRequest.userId) {
            LeanplumRequest.userId = LeanplumRequest.deviceId;
          }
        }
        _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.USER_ID, LeanplumRequest.userId);

        var argsBuilder = queryParams.attachApiKeys(LeanplumRequest.appId, LeanplumRequest.clientKey).add(_Constants2.default.PARAMS.SDK_VERSION, _Constants2.default.SDK_VERSION).add(_Constants2.default.PARAMS.DEVICE_ID, LeanplumRequest.deviceId).add(_Constants2.default.PARAMS.USER_ID, LeanplumRequest.userId).add(_Constants2.default.PARAMS.ACTION, action).add(_Constants2.default.PARAMS.VERSION_NAME, LeanplumRequest.versionName).add(_Constants2.default.PARAMS.DEV_MODE, _InternalState2.default.devMode).add(_Constants2.default.PARAMS.TIME, (new Date().getTime() / 1000).toString());

        if (!LeanplumRequest.appId || !LeanplumRequest.clientKey) {
          var err = 'Leanplum App ID and client key are not set. Make sure you ' + 'are calling setAppIdForDevelopmentMode or setAppIdForProductionMode ' + 'before issuing API calls.';
          console.error(err);
          throw new Error(err);
        }

        return LeanplumRequest.apiPath + '?' + argsBuilder.build();
      }
    }, {
      key: 'setNetworkTimeout',
      value: function setNetworkTimeout(seconds) {
        _Network2.default.setNetworkTimeout(seconds);
      }
    }, {
      key: 'saveRequestForLater',
      value: function saveRequestForLater(args) {
        var count = _LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.COUNT) || 0;
        var itemKey = _Constants2.default.DEFAULT_KEYS.ITEM + count;
        _LocalStorageManager2.default.saveToLocalStorage(itemKey, JSON.stringify(args));
        count++;
        _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.COUNT, count);
      }
    }, {
      key: 'popUnsentRequests',
      value: function popUnsentRequests() {
        var requestData = [];
        var count = _LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.COUNT) || 0;
        _LocalStorageManager2.default.removeFromLocalStorage(_Constants2.default.DEFAULT_KEYS.COUNT);
        for (var i = 0; i < count; i++) {
          var itemKey = _Constants2.default.DEFAULT_KEYS.ITEM + i;
          try {
            var requestArgs = JSON.parse(_LocalStorageManager2.default.getFromLocalStorage(itemKey));
            requestData.push(requestArgs);
          } catch (ignored) {// eslint-disable-next-line no-empty
          }
          _LocalStorageManager2.default.removeFromLocalStorage(itemKey);
        }
        return requestData;
      }
    }, {
      key: 'numResponses',
      value: function numResponses(response) {
        if (!response || !response.response) {
          return 0;
        }
        return response.response.length;
      }
    }, {
      key: 'getResponseAt',
      value: function getResponseAt(response, index) {
        if (!response || !response.response) {
          return null;
        }
        return response.response[index];
      }
    }, {
      key: 'getLastResponse',
      value: function getLastResponse(response) {
        var count = LeanplumRequest.numResponses(response);
        if (count > 0) {
          return LeanplumRequest.getResponseAt(response, count - 1);
        } else {
          return null;
        }
      }
    }, {
      key: 'isResponseSuccess',
      value: function isResponseSuccess(response) {
        if (!response) {
          return false;
        }
        return !!response.success;
      }
    }, {
      key: 'getResponseError',
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

  LeanplumRequest.apiPath = 'https://www.leanplum.com/api';
  LeanplumRequest.batchEnabled = true;
  LeanplumRequest.batchCooldown = 5;
  exports.default = LeanplumRequest;
  module.exports = exports['default'];
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.LocalStorageManager = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

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

  var localStorageEnabled = void 0;
  var alternateLocalStorage = {};

  var LocalStorageManager = function () {
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

  exports.default = LocalStorageManager;
  module.exports = exports["default"];
});

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

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.InternalState = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var InternalState = function () {
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

  InternalState.devMode = false;
  InternalState.variablesChangedHandlers = [];
  InternalState.hasReceivedDiffs = false;
  InternalState.startHandlers = [];
  InternalState.hasStarted = false;
  InternalState.startSuccessful = false;
  InternalState.variantDebugInfoEnabled = false;
  exports.default = InternalState;
  module.exports = exports["default"];
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(12), __webpack_require__(3), __webpack_require__(5), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./Constants'), require('./InternalState'), require('./ArgsBuilder'), require('./LocalStorageManager'), require('./LeanplumRequest'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.Constants, global.InternalState, global.ArgsBuilder, global.LocalStorageManager, global.LeanplumRequest);
    global.VarCache = mod.exports;
  }
})(this, function (module, exports, _Constants, _InternalState, _ArgsBuilder, _LocalStorageManager, _LeanplumRequest) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Constants2 = _interopRequireDefault(_Constants);

  var _InternalState2 = _interopRequireDefault(_InternalState);

  var _ArgsBuilder2 = _interopRequireDefault(_ArgsBuilder);

  var _LocalStorageManager2 = _interopRequireDefault(_LocalStorageManager);

  var _LeanplumRequest2 = _interopRequireDefault(_LeanplumRequest);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var VarCache = function () {
    function VarCache() {
      _classCallCheck(this, VarCache);
    }

    _createClass(VarCache, null, [{
      key: 'applyDiffs',
      value: function applyDiffs(diffs, variants, actionMetadata) {
        VarCache.diffs = diffs;
        VarCache.variants = variants;
        VarCache.actionMetadata = actionMetadata;
        _InternalState2.default.hasReceivedDiffs = true;
        VarCache.merged = VarCache.mergeHelper(VarCache.variables, diffs);
        VarCache.saveDiffs();
        if (VarCache.onUpdate) {
          VarCache.onUpdate();
        }
      }
    }, {
      key: 'loadDiffs',
      value: function loadDiffs() {
        try {
          VarCache.applyDiffs(JSON.parse(_LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIABLES) || null), JSON.parse(_LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIANTS) || null), JSON.parse(_LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.ACTION_METADATA) || null));
          VarCache.token = _LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.TOKEN);
          VarCache.variantDebugInfo = _LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIANT_DEBUG_INFO);
        } catch (e) {
          console.log('Leanplum: Invalid diffs: ' + e);
        }
      }
    }, {
      key: 'saveDiffs',
      value: function saveDiffs() {
        _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIABLES, JSON.stringify(VarCache.diffs || {}));
        _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIANTS, JSON.stringify(VarCache.variants || []));
        _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.ACTION_METADATA, JSON.stringify(VarCache.actionMetadata || {}));
        _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIANT_DEBUG_INFO, JSON.stringify(VarCache.variantDebugInfo || {}));
        _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.TOKEN, VarCache.token);
      }
    }, {
      key: 'addMessageView',
      value: function addMessageView(messageId) {
        var messageView = VarCache.getMessagesView()[messageId];
        if (messageView === undefined) {
          VarCache.messagesView[messageId] = [];
        }
        var messageViewPerSession = VarCache.messagesViewPerSession[messageId] || [];

        var now = Date.now();
        messageViewPerSession.push({ t: now });
        VarCache.messagesView[messageId].push({ t: now });
        _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.MESSAGE_VIEW, JSON.stringify(VarCache.messagesView || {}));
      }
    }, {
      key: 'getMessagesView',
      value: function getMessagesView(session) {
        if (session) {
          return VarCache.messagesViewPerSession;
        }
        if (VarCache.messagesView === undefined) {
          VarCache.messagesView = JSON.parse(_LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.MESSAGE_VIEW) || '{}');
        }
        return VarCache.messagesView;
      }
    }, {
      key: 'getMessageView',
      value: function getMessageView(messageId, session) {
        return VarCache.getMessagesView(session)[messageId] || [];
      }
    }, {
      key: 'setVariables',
      value: function setVariables(variables) {
        VarCache.variables = variables;
      }
    }, {
      key: 'getVariables',
      value: function getVariables() {
        return VarCache.merged !== undefined ? VarCache.merged : VarCache.variables;
      }
    }, {
      key: 'getVariantDebugInfo',
      value: function getVariantDebugInfo() {
        return VarCache.variantDebugInfo;
      }
    }, {
      key: 'sendVariables',
      value: function sendVariables() {
        var body = {};
        body[_Constants2.default.PARAMS.VARIABLES] = VarCache.variables;
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.SET_VARS, new _ArgsBuilder2.default().body(JSON.stringify(body)), {
          sendNow: true
        });
      }
    }, {
      key: 'mergeHelper',
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
        var diffIterator = objIterator(diff);

        // Infer that the diffs is an array if the vars value doesn't exist to tell us the type.
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
        }

        // Merge arrays.
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
        }

        // Merge dictionaries.
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
      key: 'clearUserContent',
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

  VarCache.diffs = undefined;
  VarCache.variables = null;
  VarCache.variants = [];
  VarCache.variantDebugInfo = {};
  VarCache.merged = undefined;
  VarCache.onUpdate = undefined;
  VarCache.token = '';
  VarCache.actionMetadata = {};
  VarCache.messagesView = undefined;
  VarCache.messagesViewPerSession = [];
  exports.default = VarCache;
  module.exports = exports['default'];
});

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

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.Events = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
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

  module.exports = exports["default"];
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.Network = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

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

  var Network = function () {
    function Network() {
      _classCallCheck(this, Network);
    }

    _createClass(Network, null, [{
      key: 'setNetworkTimeout',
      value: function setNetworkTimeout(seconds) {
        networkTimeoutSeconds = seconds;
      }
    }, {
      key: 'ajax',
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
            url = 'http:' + url.substring(6);
          }
          // eslint-disable-next-line prefer-rest-params
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

            var response = void 0;
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
    }, {
      key: 'ajaxIE8',
      value: function ajaxIE8(method, url, data, success, error, queued, plainText) {
        var xdr = new XDomainRequest();
        xdr.onload = function () {
          var response = void 0;
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
    }, {
      key: 'enqueueRequest',
      value: function enqueueRequest(requestArguments) {
        requestQueue.push(requestArguments);
      }
    }, {
      key: 'dequeueRequest',
      value: function dequeueRequest() {
        var args = requestQueue.shift();
        if (args) {
          Reflect.apply(Network.ajax, null, args);
        }
      }
    }]);

    return Network;
  }();

  exports.default = Network;
  module.exports = exports['default'];
});

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

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(13)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./VarCache'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.VarCache);
    global.ActionManager = mod.exports;
  }
})(this, function (module, exports, _VarCache) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _VarCache2 = _interopRequireDefault(_VarCache);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  /** private
   * return true if message pass one trigger/verb condition
   * @param params {Object}
   * @param message
   * @returns {Boolean}
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

      if (!filteredByTriggers.length) {
        return false;
      }

      return true;
    };
  };

  /** private
   * return true if trigger pass verb/noun/objects condition
   * @param params {Object}
   * @param trigger {Object}
   * @returns {Boolean}
   */
  var filterByVerbs = function filterByVerbs(params) {
    return function (trigger) {
      if (trigger.verb === '') {
        return true;
      }
      var evaluator = triggerVerbEvaluators[trigger.verb];
      if (!evaluator(trigger, params.noun, params.objects)) {
        return false;
      }
      return true;
    };
  };

  /** prrivate
   * return true if message pass all limits
   * @param now {Date.now()}
   * @param message {Object}
   * @returns {Boolean}
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
   * return the amount of ocurence of messageView since 'since'
   * @param since {Number}
   * @param messageView {Array}
   * @returns {function(*, *): *}
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
   * @param now {Date.now()}
   * @param limitTime {Object}
   * @returns {Boolean}
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
  };var limitVerbEvaluators = {
    limitUser: function limitUser(messageId, maxView) {
      return _VarCache2.default.getMessageView(messageId).length < maxView;
    },
    limitMonth: function limitMonth(messageId, maxView, amount, now) {
      var since = now - amount * 30 * 24 * 60 * 60 * 1000;
      return _VarCache2.default.getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
    },
    limitWeek: function limitWeek(messageId, maxView, amount, now) {
      var since = now - amount * 7 * 24 * 60 * 60 * 1000;
      return _VarCache2.default.getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
    },
    limitDay: function limitDay(messageId, maxView, amount, now) {
      var since = now - amount * 24 * 60 * 60 * 1000;
      return _VarCache2.default.getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
    },
    limitHour: function limitHour(messageId, maxView, amount, now) {
      var since = now - amount * 60 * 60 * 1000;
      return _VarCache2.default.getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
    },
    limitMinute: function limitMinute(messageId, maxView, amount, now) {
      var since = now - amount * 60 * 1000;
      return _VarCache2.default.getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
    },
    limitSecond: function limitSecond(messageId, maxView, amount, now) {
      var since = now - amount * 1000;
      return _VarCache2.default.getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
    },
    limitSession: function limitSession(messageId, maxView) {
      return _VarCache2.default.getMessageView(messageId, true).length < maxView;
    }
  };

  var ActionManager = function () {
    function ActionManager() {
      _classCallCheck(this, ActionManager);
    }

    _createClass(ActionManager, null, [{
      key: 'filterMessages',
      value: function filterMessages(messages) {
        var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var verb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var noun = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
        var params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

        if (!Array.isArray(trigger)) {
          trigger = [trigger];
        }
        var now = Date.now();
        var filteredMessages = Object.entries(messages).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              id = _ref2[0],
              message = _ref2[1];

          return _extends({ id: id }, message);
        });
        filteredMessages = filteredMessages.filter(filterByTriggers({
          triggers: trigger
        })).filter(filterByLimits(now)).filter(filterByLimitTimes(now));
        return filteredMessages;
      }
    }]);

    return ActionManager;
  }();

  exports.default = ActionManager;
  module.exports = exports['default'];
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.BrowserDetector = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

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
  }, { // for newer Netscape (6+)
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
  }, { // for older Netscape (4-)
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
  }];

  // Browser detection. Source: http://www.quirksmode.org/js/detect.html
  /**
   * Helper class to detect which browser client is using.
   */

  var BrowserDetector = function () {
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
      key: '_searchString',
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
    }, {
      key: '_searchVersion',
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

  exports.default = BrowserDetector;
  module.exports = exports['default'];
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(3), __webpack_require__(36), __webpack_require__(13), __webpack_require__(4), __webpack_require__(25), __webpack_require__(17)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./Constants'), require('./ArgsBuilder'), require('./SocketIoClient'), require('./VarCache'), require('./LeanplumRequest'), require('lodash/isEqual'), require('./Events'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.Constants, global.ArgsBuilder, global.SocketIoClient, global.VarCache, global.LeanplumRequest, global.isEqual, global.Events);
    global.LeanplumSocket = mod.exports;
  }
})(this, function (module, exports, _Constants, _ArgsBuilder, _SocketIoClient, _VarCache, _LeanplumRequest, _isEqual, _Events) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Constants2 = _interopRequireDefault(_Constants);

  var _ArgsBuilder2 = _interopRequireDefault(_ArgsBuilder);

  var _SocketIoClient2 = _interopRequireDefault(_SocketIoClient);

  var _VarCache2 = _interopRequireDefault(_VarCache);

  var _LeanplumRequest2 = _interopRequireDefault(_LeanplumRequest);

  var _isEqual2 = _interopRequireDefault(_isEqual);

  var _Events2 = _interopRequireDefault(_Events);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var LeanplumSocket = function () {
    function LeanplumSocket() {
      _classCallCheck(this, LeanplumSocket);
    }

    _createClass(LeanplumSocket, null, [{
      key: 'connect',
      value: function connect() {
        if (!WebSocket) {
          console.log('Your browser doesn\'t support WebSockets.');
          return;
        }

        var client = new _SocketIoClient2.default();
        var authSent = false;
        client.onopen = function () {
          if (!authSent) {
            console.log('Leanplum: Connected to development server.');
            var args = {};
            args[_Constants2.default.PARAMS.APP_ID] = _LeanplumRequest2.default.appId;
            args[_Constants2.default.PARAMS.DEVICE_ID] = _LeanplumRequest2.default.deviceId;
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
            _LeanplumRequest2.default.request(_Constants2.default.METHODS.GET_VARS, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.INCLUDE_DEFAULTS, false), {
              queued: false,
              sendNow: true,
              response: function response(_response) {
                var getVarsResponse = _LeanplumRequest2.default.getLastResponse(_response);
                var values = getVarsResponse[_Constants2.default.KEYS.VARS];
                var variants = getVarsResponse[_Constants2.default.KEYS.VARIANTS];
                var actionMetadata = getVarsResponse[_Constants2.default.KEYS.ACTION_METADATA];
                if (!(0, _isEqual2.default)(values, _VarCache2.default.diffs)) {
                  _VarCache2.default.applyDiffs(values, variants, actionMetadata);
                }
              }
            });
          } else if (event === 'getVariables') {
            _VarCache2.default.sendVariables();
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
            alert('Your device has been registered to ' + args[0].email + '.');
          } else if (event === 'trigger') {
            _Events2.default.publish('websocket/trigger', {
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

  LeanplumSocket.socketHost = 'dev.leanplum.com';
  exports.default = LeanplumSocket;
  module.exports = exports['default'];
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(3), __webpack_require__(25), __webpack_require__(5), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./Constants'), require('./ArgsBuilder'), require('lodash/isEqual'), require('./LocalStorageManager'), require('./LeanplumRequest'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.Constants, global.ArgsBuilder, global.isEqual, global.LocalStorageManager, global.LeanplumRequest);
    global.PushManager = mod.exports;
  }
})(this, function (module, exports, _Constants, _ArgsBuilder, _isEqual, _LocalStorageManager, _LeanplumRequest) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Constants2 = _interopRequireDefault(_Constants);

  var _ArgsBuilder2 = _interopRequireDefault(_ArgsBuilder);

  var _isEqual2 = _interopRequireDefault(_isEqual);

  var _LocalStorageManager2 = _interopRequireDefault(_LocalStorageManager);

  var _LeanplumRequest2 = _interopRequireDefault(_LeanplumRequest);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var APPLICATION_SERVER_PUBLIC_KEY = 'BInWPpWntfR39rgXSP04pqdmEdDGa50z6zqbMvxyxJCwzXIuSpSh8C888-CfJ82WELl7Xe8cjA' + 'nfCt-3vK0Ci68';

  var isSubscribed = false;
  var serviceWorkerRegistration = null;

  /**
   * Push Manager handles the registration and subscription for web push.
   */

  var PushManager = function () {
    function PushManager() {
      _classCallCheck(this, PushManager);
    }

    _createClass(PushManager, null, [{
      key: 'isWebPushSupported',
      value: function isWebPushSupported() {
        return navigator && navigator.serviceWorker && 'serviceWorker' in navigator && 'PushManager' in window;
      }
    }, {
      key: 'isWebPushSubscribed',
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
    }, {
      key: 'register',
      value: function register(serviceWorkerUrl, callback) {
        if (!PushManager.isWebPushSupported()) {
          console.log('Leanplum: Push messaging is not supported.');
          return callback(false);
        }
        navigator.serviceWorker.register(serviceWorkerUrl ? serviceWorkerUrl : '/sw.min.js', null).then(function (registration) {
          serviceWorkerRegistration = registration;

          var serviceWorker = void 0;
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
        }).catch(function (error) {
          console.log('Leanplum: Service Worker Error: ', error);
        });
      }
    }, {
      key: 'subscribeUser',
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
          }).catch(function (err) {
            return reject('Leanplum: Failed to subscribe the user: ' + err);
          });
        });
      }
    }, {
      key: 'unsubscribeUser',
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
            }).catch(function (error) {
              reject('Leanplum: Error unsubscribing: ' + error);
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
    }, {
      key: 'getServiceWorkerRegistration',
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
    }, {
      key: 'urlB64ToUint8Array',
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
    }, {
      key: 'prepareSubscription',
      value: function prepareSubscription(subscription) {
        var key = subscription.getKey ? subscription.getKey('p256dh') : '';
        var auth = subscription.getKey ? subscription.getKey('auth') : '';
        // noinspection ES6ModulesDependencies
        var keyAscii = btoa(Reflect.apply(String.fromCharCode, null, new Uint8Array(key)));
        // noinspection ES6ModulesDependencies
        var authAscii = btoa(Reflect.apply(String.fromCharCode, null, new Uint8Array(auth)));
        return {
          endpoint: subscription.endpoint,
          key: keyAscii,
          auth: authAscii
        };
      }
    }, {
      key: 'updateNewSubscriptionOnServer',
      value: function updateNewSubscriptionOnServer(subscription) {
        if (subscription) {
          var preparedSubscription = PushManager.prepareSubscription(subscription);
          var preparedSubscriptionString = JSON.stringify(preparedSubscription);
          var existingSubscriptionString = _LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.PUSH_SUBSCRIPTION);
          if (!(0, _isEqual2.default)(existingSubscriptionString, preparedSubscriptionString)) {
            _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.PUSH_SUBSCRIPTION, preparedSubscriptionString);
            PushManager.setSubscription(preparedSubscriptionString);
          }
        }
      }
    }, {
      key: 'setSubscription',
      value: function setSubscription(subscription) {
        if (!subscription) {
          return;
        }
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.SET_DEVICE_ATTRIBUTES, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.WEB_PUSH_SUBSCRIPTION, subscription), {
          queued: false,
          sendNow: true
        });
      }
    }]);

    return PushManager;
  }();

  exports.default = PushManager;
  module.exports = exports['default'];
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(12), __webpack_require__(3), __webpack_require__(32), __webpack_require__(34), __webpack_require__(31), __webpack_require__(5), __webpack_require__(13), __webpack_require__(4), __webpack_require__(33), __webpack_require__(17)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./Constants'), require('./InternalState'), require('./ArgsBuilder'), require('./BrowserDetector'), require('./PushManager'), require('./ActionManager'), require('./LocalStorageManager'), require('./VarCache'), require('./LeanplumRequest'), require('./LeanplumSocket'), require('./Events'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.Constants, global.InternalState, global.ArgsBuilder, global.BrowserDetector, global.PushManager, global.ActionManager, global.LocalStorageManager, global.VarCache, global.LeanplumRequest, global.LeanplumSocket, global.Events);
    global.Leanplum = mod.exports;
  }
})(this, function (module, exports, _Constants, _InternalState, _ArgsBuilder, _BrowserDetector, _PushManager, _ActionManager, _LocalStorageManager, _VarCache, _LeanplumRequest, _LeanplumSocket, _Events) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Constants2 = _interopRequireDefault(_Constants);

  var _InternalState2 = _interopRequireDefault(_InternalState);

  var _ArgsBuilder2 = _interopRequireDefault(_ArgsBuilder);

  var _BrowserDetector2 = _interopRequireDefault(_BrowserDetector);

  var _PushManager2 = _interopRequireDefault(_PushManager);

  var _ActionManager2 = _interopRequireDefault(_ActionManager);

  var _LocalStorageManager2 = _interopRequireDefault(_LocalStorageManager);

  var _VarCache2 = _interopRequireDefault(_VarCache);

  var _LeanplumRequest2 = _interopRequireDefault(_LeanplumRequest);

  var _LeanplumSocket2 = _interopRequireDefault(_LeanplumSocket);

  var _Events2 = _interopRequireDefault(_Events);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _browserDetector = new _BrowserDetector2.default();

  /**
   * @preserve Leanplum Javascript SDK.
   * Copyright 2016, Leanplum, Inc. All rights reserved.
   *
   * You may not distribute this source code without prior written permission
   * from Leanplum.
   */

  var Leanplum = function () {
    function Leanplum() {
      _classCallCheck(this, Leanplum);
    }

    _createClass(Leanplum, null, [{
      key: 'setApiPath',
      value: function setApiPath(apiPath) {
        if (!_LeanplumRequest2.default.apiPath) {
          return;
        }
        _LeanplumRequest2.default.apiPath = apiPath;
      }
    }, {
      key: 'setEmail',
      value: function setEmail(email) {
        Leanplum._email = email;
      }
    }, {
      key: 'setNetworkTimeout',
      value: function setNetworkTimeout(seconds) {
        _LeanplumRequest2.default.setNetworkTimeout(seconds);
      }
    }, {
      key: 'setVariantDebugInfoEnabled',
      value: function setVariantDebugInfoEnabled(variantDebugInfoEnabled) {
        _InternalState2.default.setVariantDebugInfoEnabled(variantDebugInfoEnabled);
      }
    }, {
      key: 'getVariantDebugInfo',
      value: function getVariantDebugInfo() {
        return _VarCache2.default.getVariantDebugInfo();
      }
    }, {
      key: 'setAppIdForDevelopmentMode',
      value: function setAppIdForDevelopmentMode(appId, accessKey) {
        _LeanplumRequest2.default.appId = appId;
        _LeanplumRequest2.default.clientKey = accessKey;
        _InternalState2.default.devMode = true;
      }
    }, {
      key: 'setAppIdForProductionMode',
      value: function setAppIdForProductionMode(appId, accessKey) {
        _LeanplumRequest2.default.appId = appId;
        _LeanplumRequest2.default.clientKey = accessKey;
        _InternalState2.default.devMode = false;
      }
    }, {
      key: 'setSocketHost',
      value: function setSocketHost(host) {
        _LeanplumSocket2.default.socketHost = host;
      }
    }, {
      key: 'setDeviceId',
      value: function setDeviceId(deviceId) {
        _LeanplumRequest2.default.deviceId = deviceId;
      }
    }, {
      key: 'setAppVersion',
      value: function setAppVersion(versionName) {
        _LeanplumRequest2.default.versionName = versionName;
      }
    }, {
      key: 'setDeviceName',
      value: function setDeviceName(deviceName) {
        Leanplum._deviceName = deviceName;
      }
    }, {
      key: 'setDeviceModel',
      value: function setDeviceModel(deviceModel) {
        Leanplum._deviceModel = deviceModel;
      }
    }, {
      key: 'setSystemName',
      value: function setSystemName(systemName) {
        Leanplum._systemName = systemName;
      }
    }, {
      key: 'setSystemVersion',
      value: function setSystemVersion(systemVersion) {
        Leanplum._systemVersion = systemVersion;
      }
    }, {
      key: 'setVariables',
      value: function setVariables(variables) {
        _VarCache2.default.setVariables(variables);
      }
    }, {
      key: 'setRequestBatching',
      value: function setRequestBatching(batchEnabled, cooldownSeconds) {
        _LeanplumRequest2.default.batchEnabled = batchEnabled;
        _LeanplumRequest2.default.batchCooldown = cooldownSeconds;
      }
    }, {
      key: 'getVariables',
      value: function getVariables() {
        return _VarCache2.default.getVariables();
      }
    }, {
      key: 'getVariable',
      value: function getVariable() {
        var current = Leanplum.getVariables();

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        for (var i = 0; i < args.length; i++) {
          current = current[args[i]];
        }
        return current;
      }
    }, {
      key: 'getVariants',
      value: function getVariants() {
        return _VarCache2.default.variants || [];
      }
    }, {
      key: 'addStartResponseHandler',
      value: function addStartResponseHandler(handler) {
        _InternalState2.default.addStartResponseHandler(handler);
      }
    }, {
      key: 'addVariablesChangedHandler',
      value: function addVariablesChangedHandler(handler) {
        _InternalState2.default.addVariablesChangedHandler(handler);
      }
    }, {
      key: 'removeStartResponseHandler',
      value: function removeStartResponseHandler(handler) {
        _InternalState2.default.removeStartResponseHandler(handler);
      }
    }, {
      key: 'removeVariablesChangedHandler',
      value: function removeVariablesChangedHandler(handler) {
        _InternalState2.default.removeVariablesChangedHandler(handler);
      }
    }, {
      key: 'forceContentUpdate',
      value: function forceContentUpdate(callback) {
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.GET_VARS, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.INCLUDE_DEFAULTS, false).add(_Constants2.default.PARAMS.INCLUDE_VARIANT_DEBUG_INFO, _InternalState2.default.variantDebugInfoEnabled), {
          queued: false,
          sendNow: true,
          response: function response(_response) {
            var getVarsResponse = _LeanplumRequest2.default.getLastResponse(_response);
            var isSuccess = _LeanplumRequest2.default.isResponseSuccess(getVarsResponse);
            if (isSuccess) {
              _VarCache2.default.applyDiffs(getVarsResponse[_Constants2.default.KEYS.VARS], getVarsResponse[_Constants2.default.KEYS.VARIANTS], getVarsResponse[_Constants2.default.KEYS.ACTION_METADATA]);
              _VarCache2.default.variantDebugInfo = getVarsResponse[_Constants2.default.KEYS.VARIANT_DEBUG_INFO];
            }
            if (callback) {
              callback(isSuccess);
            }
          }
        });
      }
    }, {
      key: 'start',
      value: function start(userId, userAttributes, callback) {
        // Overloads.
        if (typeof userId === 'function') {
          callback = userId;
          userAttributes = {};
          userId = null;
        } else if ((typeof userId === 'undefined' ? 'undefined' : _typeof(userId)) === 'object' && userId !== null && userId !== undefined) {
          callback = userAttributes;
          userAttributes = userId;
          userId = null;
        } else if (typeof userAttributes === 'function') {
          callback = userAttributes;
          userAttributes = {};
        }
        _LeanplumRequest2.default.userId = userId;
        if (callback) {
          Leanplum.addStartResponseHandler(callback);
        }

        _VarCache2.default.onUpdate = function () {
          _InternalState2.default.triggerVariablesChangedHandlers();
        };

        var args = new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.USER_ATTRIBUTES, JSON.stringify(userAttributes)).add(_Constants2.default.PARAMS.COUNTRY, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.REGION, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.CITY, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.LOCATION, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.SYSTEM_NAME, Leanplum._systemName || _browserDetector.OS).add(_Constants2.default.PARAMS.SYSTEM_VERSION, (Leanplum._systemVersion || '').toString()).add(_Constants2.default.PARAMS.BROWSER_NAME, _browserDetector.browser).add(_Constants2.default.PARAMS.BROWSER_VERSION, _browserDetector.version.toString()).add(_Constants2.default.PARAMS.LOCALE, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.DEVICE_NAME, Leanplum._deviceName || _browserDetector.browser + ' ' + _browserDetector.version).add(_Constants2.default.PARAMS.DEVICE_MODEL, Leanplum._deviceModel || 'Web Browser').add(_Constants2.default.PARAMS.INCLUDE_DEFAULTS, false).add(_Constants2.default.PARAMS.INCLUDE_VARIANT_DEBUG_INFO, _InternalState2.default.variantDebugInfoEnabled);

        // Issue request.
        // noinspection Annotator
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.START, args, {
          queued: true,
          sendNow: true,
          response: function response(_response2) {
            _InternalState2.default.hasStarted = true;
            var startResponse = _LeanplumRequest2.default.getLastResponse(_response2);
            if (_LeanplumRequest2.default.isResponseSuccess(startResponse)) {
              _InternalState2.default.startSuccessful = true;
              if (_InternalState2.default.devMode) {
                var latestVersion = startResponse[_Constants2.default.KEYS.LATEST_VERSION];
                if (latestVersion) {
                  console.log('A newer version of Leanplum, ' + latestVersion + ', is available. Go to' + 'leanplum.com to download it.');
                }
                _LeanplumSocket2.default.connect();
              }

              _VarCache2.default.applyDiffs(startResponse[_Constants2.default.KEYS.VARS], startResponse[_Constants2.default.KEYS.VARIANTS], startResponse[_Constants2.default.KEYS.ACTION_METADATA]);
              _VarCache2.default.variantDebugInfo = startResponse[_Constants2.default.KEYS.VARIANT_DEBUG_INFO];
              _VarCache2.default.token = startResponse[_Constants2.default.KEYS.TOKEN];

              _Events2.default.publish('start/messages', {
                messages: Leanplum.getFilteredResults(startResponse[_Constants2.default.KEYS.MESSAGES], ['start', 'resume'])
              });
            } else {
              _InternalState2.default.startSuccessful = false;
              _VarCache2.default.loadDiffs();
            }
            _InternalState2.default.triggerStartHandlers();
          }
        });
      }
    }, {
      key: 'getFilteredResults',
      value: function getFilteredResults() {
        var messages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var verb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var noun = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
        var params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

        if (messages === null) {
          return [];
        }
        return _ActionManager2.default.filterMessages(messages, trigger, verb, noun, params);
      }
    }, {
      key: 'startFromCache',
      value: function startFromCache(userId, userAttributes, callback) {
        // Overloads.
        if (typeof userId === 'function') {
          callback = userId;
          // noinspection JSUnusedAssignment
          userAttributes = {};
          userId = null;
        } else if ((typeof userId === 'undefined' ? 'undefined' : _typeof(userId)) === 'object' && userId !== null && userId !== undefined) {
          callback = userAttributes;
          // noinspection JSUnusedAssignment
          userAttributes = userId;
          userId = null;
        } else if (typeof userAttributes === 'function') {
          callback = userAttributes;
          // noinspection JSUnusedAssignment
          userAttributes = {};
        }
        _LeanplumRequest2.default.userId = userId;
        if (callback) {
          Leanplum.addStartResponseHandler(callback);
        }

        _InternalState2.default.hasStarted = true;
        _InternalState2.default.startSuccessful = true;
        if (_InternalState2.default.devMode) {
          _LeanplumSocket2.default.connect();
        }
        _VarCache2.default.loadDiffs();
        _InternalState2.default.triggerStartHandlers();
      }
    }, {
      key: 'stop',
      value: function stop() {
        // noinspection Annotator
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.STOP, undefined, {
          sendNow: true,
          queued: true
        });
      }
    }, {
      key: 'pauseSession',
      value: function pauseSession() {
        // noinspection Annotator
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.PAUSE_SESSION, undefined, {
          sendNow: true,
          queued: true
        });
      }
    }, {
      key: 'resumeSession',
      value: function resumeSession() {
        // noinspection Annotator
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.RESUME_SESSION, undefined, {
          sendNow: true,
          queued: true
        });
      }
    }, {
      key: 'pauseState',
      value: function pauseState() {
        // noinspection Annotator
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.PAUSE_STATE, undefined, {
          queued: true
        });
      }
    }, {
      key: 'resumeState',
      value: function resumeState() {
        // noinspection Annotator
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.RESUME_STATE, undefined, {
          queued: true
        });
      }
    }, {
      key: 'setUserId',
      value: function setUserId(userId) {
        Leanplum.setUserAttributes(userId);
      }
    }, {
      key: 'setUserAttributes',
      value: function setUserAttributes(userId, userAttributes) {
        if (userAttributes === undefined) {
          if ((typeof userId === 'undefined' ? 'undefined' : _typeof(userId)) === 'object') {
            userAttributes = userId;
            userId = undefined;
          } else if (typeof userId !== 'string') {
            console.log('Leanplum: setUserAttributes expects a string or an ' + 'object');
            return;
          }
        }
        // noinspection Annotator
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.SET_USER_ATTRIBUTES, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.USER_ATTRIBUTES, userAttributes ? JSON.stringify(userAttributes) : undefined).add(_Constants2.default.PARAMS.NEW_USER_ID, userId), {
          queued: true
        });
        if (userId) {
          _LeanplumRequest2.default.userId = userId;
          _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.USER_ID, _LeanplumRequest2.default.userId);
        }
      }
    }, {
      key: 'getFileUrl',
      value: function getFileUrl(fileName) {
        // noinspection Annotator
        return _LeanplumRequest2.default.generateRequestUrl(_Constants2.default.METHODS.DOWNLOAD_FILE, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.FILENAME, fileName));
      }
    }, {
      key: 'trackMessage',
      value: function trackMessage(event, messageId) {
        if (event === '') {
          _VarCache2.default.addMessageView(messageId); // track view track event is '' aka 'View'
        }
        // noinspection Annotator
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.TRACK, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.EVENT, event).add(_Constants2.default.PARAMS.MESSAGE_ID, messageId), {
          queued: true
        });
      }
    }, {
      key: 'track',
      value: function track(event, value, info, params) {
        // Overloads.
        // object && !null && !undefined -> params
        // string -> info, params
        // *, object && !null && !undefined -> value, params
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null && value !== undefined) {
          params = value;
          info = undefined;
          value = undefined;
        } else if (typeof value === 'string') {
          params = info;
          info = value;
          value = undefined;
        } else if ((typeof info === 'undefined' ? 'undefined' : _typeof(info)) === 'object' && info !== null && info !== undefined) {
          params = info;
          info = undefined;
        }

        _Events2.default.publish('track', {
          event: event,
          params: params
        });

        // noinspection Annotator
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.TRACK, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.EVENT, event).add(_Constants2.default.PARAMS.VALUE, value || 0.0).add(_Constants2.default.PARAMS.INFO, info).add(_Constants2.default.PARAMS.PARAMS, JSON.stringify(params)), {
          queued: true
        });
      }
    }, {
      key: 'advanceTo',
      value: function advanceTo(state, info, params) {
        // Overloads.
        // string|null|undefined, * -> info, params
        // object && !null && !undefined -> params
        if ((typeof info === 'undefined' ? 'undefined' : _typeof(info)) === 'object' && info !== null && info !== undefined) {
          params = info;
          info = undefined;
        }

        _LeanplumRequest2.default.request(_Constants2.default.METHODS.ADVANCE, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.STATE, state).add(_Constants2.default.PARAMS.INFO, info).add(_Constants2.default.PARAMS.PARAMS, JSON.stringify(params)), {
          queued: true
        });
      }
    }, {
      key: 'isWebPushSupported',
      value: function isWebPushSupported() {
        return _PushManager2.default.isWebPushSupported();
      }
    }, {
      key: 'isWebPushSubscribed',
      value: function isWebPushSubscribed() {
        return _PushManager2.default.isWebPushSubscribed();
      }
    }, {
      key: 'registerForWebPush',
      value: function registerForWebPush(serviceWorkerUrl) {
        return new Promise(function (resolve, reject) {
          if (_PushManager2.default.isWebPushSupported()) {
            return _PushManager2.default.register(serviceWorkerUrl, function (isSubscribed) {
              if (isSubscribed) {
                return resolve(true);
              }
              return _PushManager2.default.subscribeUser();
            });
          } else {
            return reject('Leanplum: WebPush is not supported.');
          }
        });
      }
    }, {
      key: 'unregisterFromWebPush',
      value: function unregisterFromWebPush() {
        return _PushManager2.default.unsubscribeUser();
      }
    }, {
      key: 'clearUserContent',
      value: function clearUserContent() {
        _VarCache2.default.clearUserContent();
      }
    }, {
      key: 'getEvents',
      value: function getEvents() {
        return _Events2.default;
      }
    }]);

    return Leanplum;
  }();

  exports.default = Leanplum;
  module.exports = exports['default'];
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(18)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./Network'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.Network);
    global.SocketIoClient = mod.exports;
  }
})(this, function (module, exports, _Network) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Network2 = _interopRequireDefault(_Network);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var SocketIoClient = function () {
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
      key: 'connect',
      value: function connect(socketHost) {
        // eslint-disable-next-line consistent-this
        var self = this;
        self.connecting = true;
        _Network2.default.ajax('POST', 'https://' + socketHost + '/socket.io/1', '', function (line) {
          var parts = line.split(':');
          var session = parts[0];
          var heartbeat = parseInt(parts[1]) / 2 * 1000;
          self.socket = new WebSocket('wss://' + socketHost + '/socket.io/1/websocket/' + session);
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
                self.socket.send('6:::' + messageId);
              }
              if (self.onmessage) {
                self.onmessage(messageEvent, args);
              }
            } else if (code === 7) {
              console.log('Socket error: ' + event.data);
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
    }, {
      key: 'send',
      value: function send(name, args) {
        if (!this.connected) {
          console.log('Leanplum: Socket is not connected.');
          return;
        }
        var argsJson = JSON.stringify({
          name: name,
          args: args
        });
        this.socket.send('5:::' + argsJson);
      }
    }]);

    return SocketIoClient;
  }();

  exports.default = SocketIoClient;
  module.exports = exports['default'];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyZDNlZDM2MTI0ZmE5ZjQxMTA0YiIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FyZ3NCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9MZWFucGx1bVJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvY2FsU3RvcmFnZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL3NyYy9JbnRlcm5hbFN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9WYXJDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9OZXR3b3JrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQWN0aW9uTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQnJvd3NlckRldGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9MZWFucGx1bVNvY2tldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHVzaE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xlYW5wbHVtLmpzIiwid2VicGFjazovLy8uL3NyYy9Tb2NrZXRJb0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N0YWNrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheVNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxCeVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOlsiTUVUSE9EUyIsIlNUQVJUIiwiU1RPUCIsIkFEVkFOQ0UiLCJUUkFDSyIsIlBBVVNFX1NFU1NJT04iLCJSRVNVTUVfU0VTU0lPTiIsIlBBVVNFX1NUQVRFIiwiUkVTVU1FX1NUQVRFIiwiRE9XTkxPQURfRklMRSIsIk1VTFRJIiwiU0VUX1ZBUlMiLCJHRVRfVkFSUyIsIlNFVF9VU0VSX0FUVFJJQlVURVMiLCJTRVRfREVWSUNFX0FUVFJJQlVURVMiLCJVUExPQURfRklMRSIsIlJFR0lTVEVSX0RFVklDRSIsIlNES19WRVJTSU9OIiwiQ0xJRU5UIiwiUEFSQU1TIiwiQUNUSU9OIiwiQVBQX0lEIiwiQ0xJRU5UX0tFWSIsIkRFVklDRV9JRCIsIlVTRVJfSUQiLCJORVdfVVNFUl9JRCIsIkRFVl9NT0RFIiwiVkVSU0lPTl9OQU1FIiwiU1lTVEVNX05BTUUiLCJTWVNURU1fVkVSU0lPTiIsIkJST1dTRVJfTkFNRSIsIkJST1dTRVJfVkVSU0lPTiIsIkRFVklDRV9OQU1FIiwiREVWSUNFX01PREVMIiwiVVNFUl9BVFRSSUJVVEVTIiwiTE9DQUxFIiwiQ09VTlRSWSIsIlJFR0lPTiIsIkNJVFkiLCJMT0NBVElPTiIsIlNUQVRFIiwiSU5GTyIsIkVWRU5UIiwiVkFMVUUiLCJGSUxFTkFNRSIsIlRJTUUiLCJEQVRBIiwiVkFSUyIsIkZJTEUiLCJTSVpFIiwiVkFSSUFUSU9OIiwiSEFTSCIsIkVNQUlMIiwiVkFSSUFCTEVTIiwiSU5DTFVERV9ERUZBVUxUUyIsIklOQ0xVREVfVkFSSUFOVF9ERUJVR19JTkZPIiwiV0VCX1BVU0hfU1VCU0NSSVBUSU9OIiwiTUVTU0FHRV9JRCIsIktFWVMiLCJJU19SRUdJU1RFUkVEIiwiTEFURVNUX1ZFUlNJT04iLCJWQVJJQU5UUyIsIlZBUklBTlRfREVCVUdfSU5GTyIsIkFDVElPTl9NRVRBREFUQSIsIlRPS0VOIiwiTUVTU0FHRVMiLCJERUZBVUxUX0tFWVMiLCJDT1VOVCIsIklURU0iLCJQVVNIX1NVQlNDUklQVElPTiIsIk1FU1NBR0VfVklFVyIsIlZBTFVFUyIsIkRFVEVDVCIsIkFyZ3NCdWlsZGVyIiwiYXJnU3RyaW5nIiwiYXJnVmFsdWVzIiwia2V5IiwidmFsdWUiLCJlbmNvZGVkVXJpQ29tcG9uZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYm9keSIsIl9ib2R5IiwiYXBwSWQiLCJjbGllbnRLZXkiLCJhZGQiLCJsYXN0UmVxdWVzdFRpbWUiLCJ1bmRlZmluZWQiLCJjb29sZG93blRpbWVvdXQiLCJMZWFucGx1bVJlcXVlc3QiLCJhY3Rpb24iLCJwYXJhbXMiLCJvcHRpb25zIiwiZGV2aWNlSWQiLCJnZXRGcm9tTG9jYWxTdG9yYWdlIiwiaWQiLCJwb3NzaWJsZSIsImkiLCJjaGFyQXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJzYXZlVG9Mb2NhbFN0b3JhZ2UiLCJ1c2VySWQiLCJhcmdzQnVpbGRlciIsImF0dGFjaEFwaUtleXMiLCJ2ZXJzaW9uTmFtZSIsImRldk1vZGUiLCJEYXRlIiwiZ2V0VGltZSIsInRvU3RyaW5nIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiZXJyb3IiLCJlcnIiLCJjb25zb2xlIiwiYWpheCIsImFwaVBhdGgiLCJidWlsZCIsInF1ZXVlZCIsInNlbmROb3ciLCJiYXRjaEVuYWJsZWQiLCJzZW5kVW5zZW50UmVxdWVzdHMiLCJyZXF1ZXN0c1RvU2VuZCIsInBvcFVuc2VudFJlcXVlc3RzIiwicmVxdWVzdERhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwibXVsdGlSZXF1ZXN0QXJncyIsImJhdGNoQ29vbGRvd24iLCJub3ciLCJzZXRUaW1lb3V0Iiwic2F2ZVJlcXVlc3RGb3JMYXRlciIsImJ1aWxkRGljdCIsInF1ZXJ5UGFyYW1zIiwiRXJyb3IiLCJzZWNvbmRzIiwic2V0TmV0d29ya1RpbWVvdXQiLCJhcmdzIiwiY291bnQiLCJpdGVtS2V5IiwicmVtb3ZlRnJvbUxvY2FsU3RvcmFnZSIsInJlcXVlc3RBcmdzIiwicGFyc2UiLCJwdXNoIiwiaWdub3JlZCIsImluZGV4IiwibnVtUmVzcG9uc2VzIiwiZ2V0UmVzcG9uc2VBdCIsIm1lc3NhZ2UiLCJsb2NhbFN0b3JhZ2VFbmFibGVkIiwiYWx0ZXJuYXRlTG9jYWxTdG9yYWdlIiwiTG9jYWxTdG9yYWdlTWFuYWdlciIsImxvY2FsU3RvcmFnZSIsImUiLCJyZW1vdmVJdGVtIiwiSW50ZXJuYWxTdGF0ZSIsImhhbmRsZXIiLCJzdGFydEhhbmRsZXJzIiwiaGFzU3RhcnRlZCIsInN0YXJ0U3VjY2Vzc2Z1bCIsImlkeCIsImluZGV4T2YiLCJzcGxpY2UiLCJ2YXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMiLCJoYXNSZWNlaXZlZERpZmZzIiwidmFyaWFudERlYnVnSW5mb0VuYWJsZWQiLCJWYXJDYWNoZSIsImRpZmZzIiwidmFyaWFudHMiLCJhY3Rpb25NZXRhZGF0YSIsIm1lcmdlZCIsIm1lcmdlSGVscGVyIiwidmFyaWFibGVzIiwic2F2ZURpZmZzIiwib25VcGRhdGUiLCJhcHBseURpZmZzIiwidG9rZW4iLCJ2YXJpYW50RGVidWdJbmZvIiwibG9nIiwibWVzc2FnZUlkIiwibWVzc2FnZVZpZXciLCJnZXRNZXNzYWdlc1ZpZXciLCJtZXNzYWdlc1ZpZXciLCJtZXNzYWdlVmlld1BlclNlc3Npb24iLCJtZXNzYWdlc1ZpZXdQZXJTZXNzaW9uIiwidCIsInNlc3Npb24iLCJyZXF1ZXN0IiwidmFycyIsImRpZmYiLCJvYmpJdGVyYXRvciIsIm9iaiIsImYiLCJBcnJheSIsImF0dHIiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJ2YXJzSXRlcmF0b3IiLCJkaWZmSXRlcmF0b3IiLCJpc0FycmF5IiwiYXR0cmlidXRlIiwidmFyU3Vic2NyaXB0Iiwic3Vic3RyaW5nIiwicGFyc2VJbnQiLCJzdWJzY3JpcHQiLCJkaWZmVmFsdWUiLCJ0b3BpY3MiLCJzdWJzY3JpYmUiLCJ0b3BpYyIsImxpc3RlbmVyIiwicmVtb3ZlIiwicHVibGlzaCIsImluZm8iLCJmb3JFYWNoIiwiaXRlbSIsInJlcXVlc3RRdWV1ZSIsIm5ldHdvcmtUaW1lb3V0U2Vjb25kcyIsIk5ldHdvcmsiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwicGxhaW5UZXh0IiwicnVubmluZ1JlcXVlc3QiLCJlbnF1ZXVlUmVxdWVzdCIsImFyZ3VtZW50cyIsIlhEb21haW5SZXF1ZXN0IiwibG9jYXRpb24iLCJwcm90b2NvbCIsIlJlZmxlY3QiLCJhcHBseSIsImFqYXhJRTgiLCJoYW5kbGVkIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwicmFuQ2FsbGJhY2siLCJyZXNwb25zZVRleHQiLCJzdGF0dXMiLCJkZXF1ZXVlUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsImFib3J0IiwieGRyIiwib25sb2FkIiwib25lcnJvciIsIm9udGltZW91dCIsIm9ucHJvZ3Jlc3MiLCJ0aW1lb3V0IiwicmVxdWVzdEFyZ3VtZW50cyIsInNoaWZ0IiwiZmlsdGVyQnlUcmlnZ2VycyIsInRyaWdnZXJzIiwid2hlblRyaWdnZXJzIiwiY2hpbGRyZW4iLCJmaWx0ZXJlZEJ5VHJpZ2dlcnMiLCJmaWx0ZXIiLCJ0cmlnZ2VyIiwiaW5jbHVkZXMiLCJzdWJqZWN0IiwidmVyYkZpbHRlciIsImZpbHRlckJ5VmVyYnMiLCJ2ZXJiIiwiZXZhbHVhdG9yIiwidHJpZ2dlclZlcmJFdmFsdWF0b3JzIiwibm91biIsIm9iamVjdHMiLCJmaWx0ZXJCeUxpbWl0cyIsImxpbWl0cyIsIndoZW5MaW1pdHMiLCJldmVyeSIsImxpbWl0IiwidmVyYkV2YWx1YXRvciIsImxpbWl0VmVyYkV2YWx1YXRvcnMiLCJjb3VudE1lc3NhZ2VWaWV3c0J5TGltaXQiLCJzaW5jZSIsIml0ZXJhdG9yIiwiZmlsdGVyQnlMaW1pdFRpbWVzIiwibGltaXRUaW1lIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInRyaWdnZXJzV2l0aFBhcmFtZXRlciIsInBhcmFtVmFsdWUiLCJwYXJhbU5hbWUiLCJjaGFuZ2VzVG8iLCJ0byIsImNoYW5nZXNGcm9tVG8iLCJmcm9tIiwibGltaXRVc2VyIiwibWF4VmlldyIsImdldE1lc3NhZ2VWaWV3IiwibGltaXRNb250aCIsImFtb3VudCIsInJlZHVjZSIsImxpbWl0V2VlayIsImxpbWl0RGF5IiwibGltaXRIb3VyIiwibGltaXRNaW51dGUiLCJsaW1pdFNlY29uZCIsImxpbWl0U2Vzc2lvbiIsIkFjdGlvbk1hbmFnZXIiLCJtZXNzYWdlcyIsImZpbHRlcmVkTWVzc2FnZXMiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiZGF0YUJyb3dzZXIiLCJzdHJpbmciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJzdWJTdHJpbmciLCJpZGVudGl0eSIsInZlcnNpb25TZWFyY2giLCJ2ZW5kb3IiLCJwcm9wIiwid2luZG93Iiwib3BlcmEiLCJkYXRhT1MiLCJwbGF0Zm9ybSIsIkJyb3dzZXJEZXRlY3RvciIsImJyb3dzZXIiLCJfc2VhcmNoU3RyaW5nIiwidmVyc2lvbiIsIl9zZWFyY2hWZXJzaW9uIiwiYXBwVmVyc2lvbiIsIk9TIiwiZGF0YVN0cmluZyIsImRhdGFQcm9wIiwidmVyc2lvblNlYXJjaFN0cmluZyIsInBhcnNlRmxvYXQiLCJMZWFucGx1bVNvY2tldCIsIldlYlNvY2tldCIsImNsaWVudCIsImF1dGhTZW50Iiwib25vcGVuIiwiZXZlbnQiLCJvbm1lc3NhZ2UiLCJnZXRWYXJzUmVzcG9uc2UiLCJnZXRMYXN0UmVzcG9uc2UiLCJ2YWx1ZXMiLCJzZW5kVmFyaWFibGVzIiwiYWxlcnQiLCJlbWFpbCIsIm9uY2xvc2UiLCJjb25uZWN0Iiwic29ja2V0SG9zdCIsInNldEludGVydmFsIiwiY29ubmVjdGVkIiwiY29ubmVjdGluZyIsIkFQUExJQ0FUSU9OX1NFUlZFUl9QVUJMSUNfS0VZIiwiaXNTdWJzY3JpYmVkIiwic2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiIsIlB1c2hNYW5hZ2VyIiwic2VydmljZVdvcmtlciIsImlzV2ViUHVzaFN1cHBvcnRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZ2V0U2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiIsInRoZW4iLCJyZWdpc3RyYXRpb24iLCJwdXNoTWFuYWdlciIsImdldFN1YnNjcmlwdGlvbiIsInN1YnNjcmlwdGlvbiIsInVwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyIiwic2VydmljZVdvcmtlclVybCIsImNhbGxiYWNrIiwicmVnaXN0ZXIiLCJpbnN0YWxsaW5nIiwid2FpdGluZyIsImFjdGl2ZSIsInN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsImNhdGNoIiwiYXBwbGljYXRpb25TZXJ2ZXJLZXkiLCJ1cmxCNjRUb1VpbnQ4QXJyYXkiLCJyZWplY3QiLCJ1c2VyVmlzaWJsZU9ubHkiLCJpc1dlYlB1c2hTdWJzY3JpYmVkIiwic3Vic2NyaWJlZCIsInVuc3Vic2NyaWJlIiwiZ2V0UmVnaXN0cmF0aW9uIiwiYmFzZTY0U3RyaW5nIiwicGFkZGluZyIsInJlcGVhdCIsImJhc2U2NCIsInJlcGxhY2UiLCJyYXdEYXRhIiwiYXRvYiIsIm91dHB1dEFycmF5IiwiVWludDhBcnJheSIsImNoYXJDb2RlQXQiLCJnZXRLZXkiLCJhdXRoIiwia2V5QXNjaWkiLCJidG9hIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYXV0aEFzY2lpIiwiZW5kcG9pbnQiLCJwcmVwYXJlZFN1YnNjcmlwdGlvbiIsInByZXBhcmVTdWJzY3JpcHRpb24iLCJwcmVwYXJlZFN1YnNjcmlwdGlvblN0cmluZyIsImV4aXN0aW5nU3Vic2NyaXB0aW9uU3RyaW5nIiwic2V0U3Vic2NyaXB0aW9uIiwiX2Jyb3dzZXJEZXRlY3RvciIsIkxlYW5wbHVtIiwiX2VtYWlsIiwic2V0VmFyaWFudERlYnVnSW5mb0VuYWJsZWQiLCJnZXRWYXJpYW50RGVidWdJbmZvIiwiYWNjZXNzS2V5IiwiaG9zdCIsImRldmljZU5hbWUiLCJfZGV2aWNlTmFtZSIsImRldmljZU1vZGVsIiwiX2RldmljZU1vZGVsIiwic3lzdGVtTmFtZSIsIl9zeXN0ZW1OYW1lIiwic3lzdGVtVmVyc2lvbiIsIl9zeXN0ZW1WZXJzaW9uIiwic2V0VmFyaWFibGVzIiwiY29vbGRvd25TZWNvbmRzIiwiZ2V0VmFyaWFibGVzIiwiY3VycmVudCIsImFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyIiwiYWRkVmFyaWFibGVzQ2hhbmdlZEhhbmRsZXIiLCJyZW1vdmVTdGFydFJlc3BvbnNlSGFuZGxlciIsInJlbW92ZVZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyIiwiaXNTdWNjZXNzIiwiaXNSZXNwb25zZVN1Y2Nlc3MiLCJ1c2VyQXR0cmlidXRlcyIsInRyaWdnZXJWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMiLCJzdGFydFJlc3BvbnNlIiwibGF0ZXN0VmVyc2lvbiIsImdldEZpbHRlcmVkUmVzdWx0cyIsImxvYWREaWZmcyIsInRyaWdnZXJTdGFydEhhbmRsZXJzIiwiZmlsdGVyTWVzc2FnZXMiLCJzZXRVc2VyQXR0cmlidXRlcyIsImZpbGVOYW1lIiwiZ2VuZXJhdGVSZXF1ZXN0VXJsIiwiYWRkTWVzc2FnZVZpZXciLCJzdWJzY3JpYmVVc2VyIiwidW5zdWJzY3JpYmVVc2VyIiwiY2xlYXJVc2VyQ29udGVudCIsIlNvY2tldElvQ2xpZW50Iiwic2VsZiIsImxpbmUiLCJwYXJ0cyIsInNwbGl0IiwiaGVhcnRiZWF0Iiwic29ja2V0IiwiaGVhcnRiZWF0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibWVzc2FnZVBhcnRzIiwiY29kZSIsInNsaWNlIiwiam9pbiIsIm1lc3NhZ2VFdmVudCIsIm5hbWUiLCJjbG9zZSIsImFyZ3NKc29uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNTZTtBQUNiQSxhQUFTO0FBQ1BDLGFBQU8sT0FEQTtBQUVQQyxZQUFNLE1BRkM7QUFHUEMsZUFBUyxTQUhGO0FBSVBDLGFBQU8sT0FKQTtBQUtQQyxxQkFBZSxjQUxSO0FBTVBDLHNCQUFnQixlQU5UO0FBT1BDLG1CQUFhLFlBUE47QUFRUEMsb0JBQWMsYUFSUDtBQVNQQyxxQkFBZSxjQVRSO0FB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNwQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM5Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzNEQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNaQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDL0dBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNqQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoibGVhbnBsdW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJMZWFucGx1bVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJMZWFucGx1bVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDM1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyZDNlZDM2MTI0ZmE5ZjQxMTA0YiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgTUVUSE9EUzoge1xuICAgIFNUQVJUOiAnc3RhcnQnLFxuICAgIFNUT1A6ICdzdG9wJyxcbiAgICBBRFZBTkNFOiAnYWR2YW5jZScsXG4gICAgVFJBQ0s6ICd0cmFjaycsXG4gICAgUEFVU0VfU0VTU0lPTjogJ3BhdXNlU2Vzc2lvbicsXG4gICAgUkVTVU1FX1NFU1NJT046ICdyZXN1bWVTZXNzaW9uJyxcbiAgICBQQVVTRV9TVEFURTogJ3BhdXNlU3RhdGUnLFxuICAgIFJFU1VNRV9TVEFURTogJ3Jlc3VtZVN0YXRlJyxcbiAgICBET1dOTE9BRF9GSUxFOiAnZG93bmxvYWRGaWxlJyxcbiAgICBNVUxUSTogJ211bHRpJyxcbiAgICBTRVRfVkFSUzogJ3NldFZhcnMnLFxuICAgIEdFVF9WQVJTOiAnZ2V0VmFycycsXG4gICAgU0VUX1VTRVJfQVRUUklCVVRFUzogJ3NldFVzZXJBdHRyaWJ1dGVzJyxcbiAgICBTRVRfREVWSUNFX0FUVFJJQlVURVM6ICdzZXREZXZpY2VBdHRyaWJ1dGVzJyxcbiAgICBVUExPQURfRklMRTogJ3VwbG9hZEZpbGUnLFxuICAgIFJFR0lTVEVSX0RFVklDRTogJ3JlZ2lzdGVyRGV2aWNlJ1xuICB9LFxuXG4gIFNES19WRVJTSU9OOiAnMS43LjAtaWZsaXgnLFxuXG4gIENMSUVOVDogJ2pzJyxcblxuICBQQVJBTVM6IHtcbiAgICBBQ1RJT046ICdhY3Rpb24nLFxuICAgIEFQUF9JRDogJ2FwcElkJyxcbiAgICBDTElFTlQ6ICdjbGllbnQnLFxuICAgIENMSUVOVF9LRVk6ICdjbGllbnRLZXknLFxuICAgIERFVklDRV9JRDogJ2RldmljZUlkJyxcbiAgICBTREtfVkVSU0lPTjogJ3Nka1ZlcnNpb24nLFxuICAgIFVTRVJfSUQ6ICd1c2VySWQnLFxuICAgIE5FV19VU0VSX0lEOiAnbmV3VXNlcklkJyxcbiAgICBERVZfTU9ERTogJ2Rldk1vZGUnLFxuICAgIFZFUlNJT05fTkFNRTogJ3ZlcnNpb25OYW1lJyxcbiAgICBTWVNURU1fTkFNRTogJ3N5c3RlbU5hbWUnLFxuICAgIFNZU1RFTV9WRVJTSU9OOiAnc3lzdGVtVmVyc2lvbicsXG4gICAgQlJPV1NFUl9OQU1FOiAnYnJvd3Nlck5hbWUnLFxuICAgIEJST1dTRVJfVkVSU0lPTjogJ2Jyb3dzZXJWZXJzaW9uJyxcbiAgICBERVZJQ0VfTkFNRTogJ2RldmljZU5hbWUnLFxuICAgIERFVklDRV9NT0RFTDogJ2RldmljZU1vZGVsJyxcbiAgICBVU0VSX0FUVFJJQlVURVM6ICd1c2VyQXR0cmlidXRlcycsXG4gICAgTE9DQUxFOiAnbG9jYWxlJyxcbiAgICBDT1VOVFJZOiAnY291bnRyeScsXG4gICAgUkVHSU9OOiAncmVnaW9uJyxcbiAgICBDSVRZOiAnY2l0eScsXG4gICAgTE9DQVRJT046ICdsb2NhdGlvbicsXG4gICAgU1RBVEU6ICdzdGF0ZScsXG4gICAgSU5GTzogJ2luZm8nLFxuICAgIEVWRU5UOiAnZXZlbnQnLFxuICAgIFZBTFVFOiAndmFsdWUnLFxuICAgIEZJTEVOQU1FOiAnZmlsZW5hbWUnLFxuICAgIFRJTUU6ICd0aW1lJyxcbiAgICBEQVRBOiAnZGF0YScsXG4gICAgVkFSUzogJ3ZhcnMnLFxuICAgIEZJTEU6ICdmaWxlJyxcbiAgICBTSVpFOiAnc2l6ZScsXG4gICAgVkFSSUFUSU9OOiAndmFyaWF0aW9uJyxcbiAgICBIQVNIOiAnaGFzaCcsXG4gICAgRU1BSUw6ICdlbWFpbCcsXG4gICAgVkFSSUFCTEVTOiAndmFycycsXG4gICAgUEFSQU1TOiAncGFyYW1zJyxcbiAgICBJTkNMVURFX0RFRkFVTFRTOiAnaW5jbHVkZURlZmF1bHRzJyxcbiAgICBJTkNMVURFX1ZBUklBTlRfREVCVUdfSU5GTzogJ2luY2x1ZGVWYXJpYW50RGVidWdJbmZvJyxcbiAgICBXRUJfUFVTSF9TVUJTQ1JJUFRJT046ICd3ZWJQdXNoU3Vic2NyaXB0aW9uJyxcbiAgICBNRVNTQUdFX0lEOiAnbWVzc2FnZUlkJ1xuICB9LFxuXG4gIEtFWVM6IHtcbiAgICBJU19SRUdJU1RFUkVEOiAnaXNSZWdpc3RlcmVkJyxcbiAgICBMQVRFU1RfVkVSU0lPTjogJ2xhdGVzdFZlcnNpb24nLFxuICAgIFZBUlM6ICd2YXJzJyxcbiAgICBWQVJJQU5UUzogJ3ZhcmlhbnRzJyxcbiAgICBWQVJJQU5UX0RFQlVHX0lORk86ICd2YXJpYW50RGVidWdJbmZvJyxcbiAgICBBQ1RJT05fTUVUQURBVEE6ICdhY3Rpb25NZXRhZGF0YScsXG4gICAgVE9LRU46ICd0b2tlbicsXG4gICAgTUVTU0FHRVM6ICdtZXNzYWdlcydcbiAgfSxcblxuICBERUZBVUxUX0tFWVM6IHtcbiAgICBDT1VOVDogJ19fbGVhbnBsdW1fdW5zeW5jZWQnLFxuICAgIElURU06ICdfX2xlYW5wbHVtX3Vuc3luY2VkXycsXG4gICAgVkFSSUFCTEVTOiAnX19sZWFucGx1bV92YXJpYWJsZXMnLFxuICAgIFZBUklBTlRTOiAnX19sZWFucGx1bV92YXJpYW50cycsXG4gICAgVkFSSUFOVF9ERUJVR19JTkZPOiAnX19sZWFucGx1bV92YXJpYW50X2RlYnVnX2luZm8nLFxuICAgIEFDVElPTl9NRVRBREFUQTogJ19fbGVhbnBsdW1fYWN0aW9uX21ldGFkYXRhJyxcbiAgICBUT0tFTjogJ19fbGVhbnBsdW1fdG9rZW4nLFxuICAgIERFVklDRV9JRDogJ19fbGVhbnBsdW1fZGV2aWNlX2lkJyxcbiAgICBVU0VSX0lEOiAnX19sZWFucGx1bV91c2VyX2lkJyxcbiAgICBQVVNIX1NVQlNDUklQVElPTjogJ19fbGVhbnBsdW1fcHVzaF9zdWJzY3JpcHRpb24nLFxuICAgIE1FU1NBR0VfVklFVzogJ19fbGVhbnBsdW1fbWVzc2FnZXNfdmlldycsXG4gIH0sXG5cbiAgVkFMVUVTOiB7XG4gICAgREVURUNUOiAnKGRldGVjdCknXG4gIH0sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uc3RhbnRzLmpzIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXROYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cblxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL0NvbnN0YW50cydcblxuLyoqXG4gKiBMZWFucGx1bSBBcmdzQnVpbGRlciwgdXNlIHRvIGNvbnN0cnVjdCByZXF1ZXN0IHBheWxvYWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyZ3NCdWlsZGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBlbXB0eSByZXF1ZXN0IGFyZ3VtZW50LlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcmdTdHJpbmcgPSAnJ1xuICAgIHRoaXMuYXJnVmFsdWVzID0ge31cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgZ2l2ZW4ga2V5LCB2YWx1ZSB0byB0aGUgcGF5bG9hZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IGZvciB0aGUgdmFsdWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfGJvb2xlYW59IHZhbHVlIFRoZSB2YWx1ZSBmb3IgZ2l2ZW4ga2V5LlxuICAgKiBAcmV0dXJuIHtBcmdzQnVpbGRlcn0gUmV0dXJucyBhbiBvYmplY3Qgb2YgQXJnc0J1aWxkZXIuXG4gICAqL1xuICBhZGQoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICBpZiAodGhpcy5hcmdTdHJpbmcpIHtcbiAgICAgIHRoaXMuYXJnU3RyaW5nICs9ICcmJ1xuICAgIH1cbiAgICBsZXQgZW5jb2RlZFVyaUNvbXBvbmVudCA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSlcbiAgICB0aGlzLmFyZ1N0cmluZyArPSBgJHtrZXl9PSR7ZW5jb2RlZFVyaUNvbXBvbmVudH1gXG4gICAgdGhpcy5hcmdWYWx1ZXNba2V5XSA9IHZhbHVlXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWNoZSB0aGUgZ2l2ZW4gYm9keS5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBbYm9keV0gQSBnaXZlbiBib2R5LlxuICAgKiBAcmV0dXJuIHtBcmdzQnVpbGRlcnxTdHJpbmd9IFJldHVybnMgQXJnc0J1aWxkZXIgaWYgYm9keSBnaXZlbiwgZWxzZSB0aGVcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5LlxuICAgKi9cbiAgYm9keShib2R5KSB7XG4gICAgaWYgKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHkgPSBib2R5XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYm9keVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBhdHRhY2ggZ2l2ZW4gYXBwSWQgYW5kIGFwcEtleSB0byByZXF1ZXN0LlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGFwcElkIFRoZSBhcHBJZCB0byBhdHRhY2guXG4gICAqIEBwYXJhbSAge1N0cmluZ30gY2xpZW50S2V5IFRoZSBhcHBLZXkgdG8gYXR0YWNoLlxuICAgKiBAcmV0dXJuIHtBcmdzQnVpbGRlcn0gUmV0dXJucyBhbiBvYmplY3Qgb2YgQXJnc0J1aWxkZXIuXG4gICAqL1xuICBhdHRhY2hBcGlLZXlzKGFwcElkLCBjbGllbnRLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5hZGQoQ29uc3RhbnRzLlBBUkFNUy5BUFBfSUQsIGFwcElkKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQ0xJRU5ULCBDb25zdGFudHMuQ0xJRU5UKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQ0xJRU5UX0tFWSwgY2xpZW50S2V5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgYXJndW1lbnRzLlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IEFyZ3VtZW50cyBzdHJpbmcuXG4gICAqL1xuICBidWlsZCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcmdTdHJpbmdcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGFyZ3VtZW50IHZhbHVlcy5cbiAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgYXJndW1lbnQgdmFsdWVzLlxuICAgKi9cbiAgYnVpbGREaWN0KCkge1xuICAgIHJldHVybiB0aGlzLmFyZ1ZhbHVlc1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQXJnc0J1aWxkZXIuanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL0NvbnN0YW50cydcbmltcG9ydCBBcmdzQnVpbGRlciBmcm9tICcuL0FyZ3NCdWlsZGVyJ1xuaW1wb3J0IEludGVybmFsU3RhdGUgZnJvbSAnLi9JbnRlcm5hbFN0YXRlJ1xuaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi9OZXR3b3JrJ1xuaW1wb3J0IExvY2FsU3RvcmFnZU1hbmFnZXIgZnJvbSAnLi9Mb2NhbFN0b3JhZ2VNYW5hZ2VyJ1xuXG5sZXQgbGFzdFJlcXVlc3RUaW1lID0gdW5kZWZpbmVkXG5sZXQgY29vbGRvd25UaW1lb3V0ID0gbnVsbFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWFucGx1bVJlcXVlc3Qge1xuXG4gIHN0YXRpYyBhcGlQYXRoID0gJ2h0dHBzOi8vd3d3LmxlYW5wbHVtLmNvbS9hcGknXG4gIHN0YXRpYyBiYXRjaEVuYWJsZWQgPSB0cnVlXG4gIHN0YXRpYyBiYXRjaENvb2xkb3duID0gNVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gYWN0aW9uXG4gICAqIEBwYXJhbSBwYXJhbXNcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHBhcmFtIG9wdGlvbnMuc3VjY2Vzc1xuICAgKiBAcGFyYW0gb3B0aW9ucy5lcnJvclxuICAgKiBAcGFyYW0gb3B0aW9ucy5yZXNwb25zZVxuICAgKiBAcGFyYW0gb3B0aW9ucy5xdWV1ZWRcbiAgICogQHBhcmFtIG9wdGlvbnMuc2VuZE5vd1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3RhdGljIHJlcXVlc3QoYWN0aW9uLCBwYXJhbXMsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCBuZXcgQXJnc0J1aWxkZXIoKVxuXG4gICAgLy8gR2V0IG9yIGNyZWF0ZSBkZXZpY2UgSUQgYW5kIHVzZXIgSUQuXG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQpIHtcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZCA9XG4gICAgICAgICAgTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuREVWSUNFX0lEKVxuICAgIH1cbiAgICBpZiAoIUxlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZCkge1xuICAgICAgbGV0IGlkID0gJydcbiAgICAgIGxldCBwb3NzaWJsZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JyArXG4gICAgICAgICAgJzAxMjM0NTY3ODknXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICAgICAgaWQgKz0gcG9zc2libGUuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlLmxlbmd0aCkpXG4gICAgICB9XG4gICAgICBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQgPSBpZFxuICAgICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5ERVZJQ0VfSUQsIGlkKVxuICAgIH1cbiAgICBpZiAoIUxlYW5wbHVtUmVxdWVzdC51c2VySWQpIHtcbiAgICAgIExlYW5wbHVtUmVxdWVzdC51c2VySWQgPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5VU0VSX0lEKVxuICAgICAgaWYgKCFMZWFucGx1bVJlcXVlc3QudXNlcklkKSB7XG4gICAgICAgIExlYW5wbHVtUmVxdWVzdC51c2VySWQgPSBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWRcbiAgICAgIH1cbiAgICB9XG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5VU0VSX0lELCBMZWFucGx1bVJlcXVlc3QudXNlcklkKVxuXG4gICAgbGV0IGFyZ3NCdWlsZGVyID0gcGFyYW1zXG4gICAgICAgIC5hdHRhY2hBcGlLZXlzKExlYW5wbHVtUmVxdWVzdC5hcHBJZCwgTGVhbnBsdW1SZXF1ZXN0LmNsaWVudEtleSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlNES19WRVJTSU9OLCBDb25zdGFudHMuU0RLX1ZFUlNJT04pXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5ERVZJQ0VfSUQsIExlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlVTRVJfSUQsIExlYW5wbHVtUmVxdWVzdC51c2VySWQpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5BQ1RJT04sIGFjdGlvbilcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlZFUlNJT05fTkFNRSwgTGVhbnBsdW1SZXF1ZXN0LnZlcnNpb25OYW1lKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuREVWX01PREUsIEludGVybmFsU3RhdGUuZGV2TW9kZSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlRJTUUsIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApLnRvU3RyaW5nKCkpXG4gICAgbGV0IHN1Y2Nlc3MgPSBvcHRpb25zLnN1Y2Nlc3MgfHwgb3B0aW9ucy5yZXNwb25zZVxuICAgIGxldCBlcnJvciA9IG9wdGlvbnMuZXJyb3IgfHwgb3B0aW9ucy5yZXNwb25zZVxuXG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QuYXBwSWQgfHwgIUxlYW5wbHVtUmVxdWVzdC5jbGllbnRLZXkpIHtcbiAgICAgIGxldCBlcnIgPSAnTGVhbnBsdW0gQXBwIElEIGFuZCBjbGllbnQga2V5IGFyZSBub3Qgc2V0LiBNYWtlIHN1cmUgeW91ICcgK1xuICAgICAgICAgICdhcmUgY2FsbGluZyBzZXRBcHBJZEZvckRldmVsb3BtZW50TW9kZSBvciBzZXRBcHBJZEZvclByb2R1Y3Rpb25Nb2RlICcgK1xuICAgICAgICAgICdiZWZvcmUgaXNzdWluZyBBUEkgY2FsbHMuJ1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICBpZiAoZXJyb3IpIGVycm9yKGVycilcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChwYXJhbXMuYm9keSgpKSB7XG4gICAgICBOZXR3b3JrLmFqYXgoJ1BPU1QnLCBgJHtMZWFucGx1bVJlcXVlc3QuYXBpUGF0aH0/JHthcmdzQnVpbGRlci5idWlsZCgpfWAsXG4gICAgICAgICAgcGFyYW1zLmJvZHkoKSwgc3VjY2VzcywgZXJyb3IsIG9wdGlvbnMucXVldWVkKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHNlbmROb3cgPSBJbnRlcm5hbFN0YXRlLmRldk1vZGUgfHwgb3B0aW9ucy5zZW5kTm93IHx8ICFMZWFucGx1bVJlcXVlc3QuYmF0Y2hFbmFibGVkXG5cbiAgICBsZXQgc2VuZFVuc2VudFJlcXVlc3RzID0gZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgcmVxdWVzdHNUb1NlbmQgPSBMZWFucGx1bVJlcXVlc3QucG9wVW5zZW50UmVxdWVzdHMoKVxuICAgICAgaWYgKHJlcXVlc3RzVG9TZW5kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IHJlcXVlc3REYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICdkYXRhJzogcmVxdWVzdHNUb1NlbmRcbiAgICAgICAgfSlcbiAgICAgICAgbGV0IG11bHRpUmVxdWVzdEFyZ3MgPSBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgICAgICAgLmF0dGFjaEFwaUtleXMoTGVhbnBsdW1SZXF1ZXN0LmFwcElkLCBMZWFucGx1bVJlcXVlc3QuY2xpZW50S2V5KVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlNES19WRVJTSU9OLCBDb25zdGFudHMuU0RLX1ZFUlNJT04pXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQUNUSU9OLCBDb25zdGFudHMuTUVUSE9EUy5NVUxUSSlcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5USU1FLCAobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKS50b1N0cmluZygpLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAuYnVpbGQoKVxuICAgICAgICBOZXR3b3JrLmFqYXgoJ1BPU1QnLCBgJHtMZWFucGx1bVJlcXVlc3QuYXBpUGF0aH0/JHttdWx0aVJlcXVlc3RBcmdzfWAsIHJlcXVlc3REYXRhLCBzdWNjZXNzLCBlcnJvcixcbiAgICAgICAgICAgIG9wdGlvbnMucXVldWVkKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERlYWwgd2l0aCBjb29sZG93bi5cbiAgICBpZiAoIXNlbmROb3cgJiYgTGVhbnBsdW1SZXF1ZXN0LmJhdGNoQ29vbGRvd24pIHtcbiAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDBcbiAgICAgIGlmICghbGFzdFJlcXVlc3RUaW1lIHx8XG4gICAgICAgICAgbm93IC0gbGFzdFJlcXVlc3RUaW1lID49IExlYW5wbHVtUmVxdWVzdC5iYXRjaENvb2xkb3duKSB7XG4gICAgICAgIHNlbmROb3cgPSB0cnVlXG4gICAgICAgIGxhc3RSZXF1ZXN0VGltZSA9IG5vd1xuICAgICAgfSBlbHNlIGlmICghY29vbGRvd25UaW1lb3V0KSB7XG4gICAgICAgIGNvb2xkb3duVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29vbGRvd25UaW1lb3V0ID0gbnVsbFxuICAgICAgICAgIGxhc3RSZXF1ZXN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMFxuICAgICAgICAgIHNlbmRVbnNlbnRSZXF1ZXN0cygpXG4gICAgICAgIH0sIChMZWFucGx1bVJlcXVlc3QuYmF0Y2hDb29sZG93biAtIChub3cgLSBsYXN0UmVxdWVzdFRpbWUpKSAqIDEwMDApXG4gICAgICB9XG4gICAgfVxuXG4gICAgTGVhbnBsdW1SZXF1ZXN0LnNhdmVSZXF1ZXN0Rm9yTGF0ZXIoYXJnc0J1aWxkZXIuYnVpbGREaWN0KCkpXG4gICAgaWYgKHNlbmROb3cpIHtcbiAgICAgIHNlbmRVbnNlbnRSZXF1ZXN0cygpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdlbmVyYXRlUmVxdWVzdFVybChhY3Rpb24sIHF1ZXJ5UGFyYW1zKSB7XG4gICAgcXVlcnlQYXJhbXMgPSBxdWVyeVBhcmFtcyB8fCBuZXcgQXJnc0J1aWxkZXIoKVxuXG4gICAgLy8gR2V0IG9yIGNyZWF0ZSBkZXZpY2UgSUQgYW5kIHVzZXIgSUQuXG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQpIHtcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZCA9XG4gICAgICAgICAgTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuREVWSUNFX0lEKVxuICAgIH1cbiAgICBpZiAoIUxlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZCkge1xuICAgICAgbGV0IGlkID0gJydcbiAgICAgIGxldCBwb3NzaWJsZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JyArXG4gICAgICAgICAgJzAxMjM0NTY3ODknXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICAgICAgaWQgKz0gcG9zc2libGUuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlLmxlbmd0aCkpXG4gICAgICB9XG4gICAgICBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQgPSBpZFxuICAgICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5ERVZJQ0VfSUQsIGlkKVxuICAgIH1cbiAgICBpZiAoIUxlYW5wbHVtUmVxdWVzdC51c2VySWQpIHtcbiAgICAgIExlYW5wbHVtUmVxdWVzdC51c2VySWQgPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5VU0VSX0lEKVxuICAgICAgaWYgKCFMZWFucGx1bVJlcXVlc3QudXNlcklkKSB7XG4gICAgICAgIExlYW5wbHVtUmVxdWVzdC51c2VySWQgPSBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWRcbiAgICAgIH1cbiAgICB9XG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5VU0VSX0lELCBMZWFucGx1bVJlcXVlc3QudXNlcklkKVxuXG4gICAgbGV0IGFyZ3NCdWlsZGVyID0gcXVlcnlQYXJhbXNcbiAgICAgICAgLmF0dGFjaEFwaUtleXMoTGVhbnBsdW1SZXF1ZXN0LmFwcElkLCBMZWFucGx1bVJlcXVlc3QuY2xpZW50S2V5KVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuU0RLX1ZFUlNJT04sIENvbnN0YW50cy5TREtfVkVSU0lPTilcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkRFVklDRV9JRCwgTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVVNFUl9JRCwgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkFDVElPTiwgYWN0aW9uKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVkVSU0lPTl9OQU1FLCBMZWFucGx1bVJlcXVlc3QudmVyc2lvbk5hbWUpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5ERVZfTU9ERSwgSW50ZXJuYWxTdGF0ZS5kZXZNb2RlKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVElNRSwgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkudG9TdHJpbmcoKSlcblxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LmFwcElkIHx8ICFMZWFucGx1bVJlcXVlc3QuY2xpZW50S2V5KSB7XG4gICAgICBsZXQgZXJyID0gJ0xlYW5wbHVtIEFwcCBJRCBhbmQgY2xpZW50IGtleSBhcmUgbm90IHNldC4gTWFrZSBzdXJlIHlvdSAnICtcbiAgICAgICAgICAnYXJlIGNhbGxpbmcgc2V0QXBwSWRGb3JEZXZlbG9wbWVudE1vZGUgb3Igc2V0QXBwSWRGb3JQcm9kdWN0aW9uTW9kZSAnICtcbiAgICAgICAgICAnYmVmb3JlIGlzc3VpbmcgQVBJIGNhbGxzLidcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycilcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7TGVhbnBsdW1SZXF1ZXN0LmFwaVBhdGh9PyR7YXJnc0J1aWxkZXIuYnVpbGQoKX1gXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgbmV0d29yayB0aW1lb3V0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Vjb25kcyBUaGUgdGltZW91dCBpbiBzZWNvbmRzLlxuICAgKi9cbiAgc3RhdGljIHNldE5ldHdvcmtUaW1lb3V0KHNlY29uZHMpIHtcbiAgICBOZXR3b3JrLnNldE5ldHdvcmtUaW1lb3V0KHNlY29uZHMpXG4gIH1cblxuICBzdGF0aWMgc2F2ZVJlcXVlc3RGb3JMYXRlcihhcmdzKSB7XG4gICAgbGV0IGNvdW50ID0gTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuQ09VTlQpIHx8IDBcbiAgICBsZXQgaXRlbUtleSA9IENvbnN0YW50cy5ERUZBVUxUX0tFWVMuSVRFTSArIGNvdW50XG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoaXRlbUtleSwgSlNPTi5zdHJpbmdpZnkoYXJncykpXG4gICAgY291bnQrK1xuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuQ09VTlQsIGNvdW50KVxuICB9XG5cbiAgc3RhdGljIHBvcFVuc2VudFJlcXVlc3RzKCkge1xuICAgIGxldCByZXF1ZXN0RGF0YSA9IFtdXG4gICAgbGV0IGNvdW50ID0gTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuQ09VTlQpIHx8IDBcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnJlbW92ZUZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5DT1VOVClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIGxldCBpdGVtS2V5ID0gQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5JVEVNICsgaVxuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlcXVlc3RBcmdzID0gSlNPTi5wYXJzZShMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoaXRlbUtleSkpXG4gICAgICAgIHJlcXVlc3REYXRhLnB1c2gocmVxdWVzdEFyZ3MpXG4gICAgICB9IGNhdGNoIChpZ25vcmVkKSB7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgICAgfVxuICAgICAgTG9jYWxTdG9yYWdlTWFuYWdlci5yZW1vdmVGcm9tTG9jYWxTdG9yYWdlKGl0ZW1LZXkpXG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0RGF0YVxuICB9XG5cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLyBSZXNwb25zZSBwYXJzaW5nIC8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIHN0YXRpYyBudW1SZXNwb25zZXMocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5yZXNwb25zZSkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLnJlc3BvbnNlLmxlbmd0aFxuICB9XG5cbiAgc3RhdGljIGdldFJlc3BvbnNlQXQocmVzcG9uc2UsIGluZGV4KSB7XG4gICAgaWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UucmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZS5yZXNwb25zZVtpbmRleF1cbiAgfVxuXG4gIHN0YXRpYyBnZXRMYXN0UmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICBsZXQgY291bnQgPSBMZWFucGx1bVJlcXVlc3QubnVtUmVzcG9uc2VzKHJlc3BvbnNlKVxuICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgIHJldHVybiBMZWFucGx1bVJlcXVlc3QuZ2V0UmVzcG9uc2VBdChyZXNwb25zZSwgY291bnQgLSAxKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBpc1Jlc3BvbnNlU3VjY2VzcyhyZXNwb25zZSkge1xuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gISFyZXNwb25zZS5zdWNjZXNzXG4gIH1cblxuICBzdGF0aWMgZ2V0UmVzcG9uc2VFcnJvcihyZXNwb25zZSkge1xuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGxldCBlcnJvciA9IHJlc3BvbnNlLmVycm9yXG4gICAgaWYgKCFlcnJvcikge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIGVycm9yLm1lc3NhZ2VcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xlYW5wbHVtUmVxdWVzdC5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5cbmxldCBsb2NhbFN0b3JhZ2VFbmFibGVkXG5sZXQgYWx0ZXJuYXRlTG9jYWxTdG9yYWdlID0ge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxTdG9yYWdlTWFuYWdlciB7XG4gIHN0YXRpYyBnZXRGcm9tTG9jYWxTdG9yYWdlKGtleSkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2VFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGFsdGVybmF0ZUxvY2FsU3RvcmFnZVtrZXldXG4gICAgfVxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Vba2V5XVxuICB9XG5cbiAgc3RhdGljIHNhdmVUb0xvY2FsU3RvcmFnZShrZXksIHZhbHVlKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZUVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICBhbHRlcm5hdGVMb2NhbFN0b3JhZ2Vba2V5XSA9IHZhbHVlXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZVtrZXldID0gdmFsdWVcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VFbmFibGVkID0gZmFsc2VcbiAgICAgIGFsdGVybmF0ZUxvY2FsU3RvcmFnZVtrZXldID0gdmFsdWVcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShrZXkpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGRlbGV0ZSBhbHRlcm5hdGVMb2NhbFN0b3JhZ2Vba2V5XVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9jYWxTdG9yYWdlRW5hYmxlZCA9IGZhbHNlXG4gICAgICBkZWxldGUgYWx0ZXJuYXRlTG9jYWxTdG9yYWdlW2tleV1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Mb2NhbFN0b3JhZ2VNYW5hZ2VyLmpzIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcm5hbFN0YXRlIHtcbiAgc3RhdGljIGRldk1vZGUgPSBmYWxzZVxuXG4gIHN0YXRpYyB2YXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMgPSBbXVxuICBzdGF0aWMgaGFzUmVjZWl2ZWREaWZmcyA9IGZhbHNlXG5cbiAgc3RhdGljIHN0YXJ0SGFuZGxlcnMgPSBbXVxuICBzdGF0aWMgaGFzU3RhcnRlZCA9IGZhbHNlXG4gIHN0YXRpYyBzdGFydFN1Y2Nlc3NmdWwgPSBmYWxzZVxuICBzdGF0aWMgdmFyaWFudERlYnVnSW5mb0VuYWJsZWQgPSBmYWxzZVxuXG4gIHN0YXRpYyBhZGRTdGFydFJlc3BvbnNlSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgSW50ZXJuYWxTdGF0ZS5zdGFydEhhbmRsZXJzLnB1c2goaGFuZGxlcilcbiAgICBpZiAoSW50ZXJuYWxTdGF0ZS5oYXNTdGFydGVkKSB7XG4gICAgICBoYW5kbGVyKEludGVybmFsU3RhdGUuc3RhcnRTdWNjZXNzZnVsKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVTdGFydFJlc3BvbnNlSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgbGV0IGlkeCA9IEludGVybmFsU3RhdGUuc3RhcnRIYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpXG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICBJbnRlcm5hbFN0YXRlLnN0YXJ0SGFuZGxlcnMuc3BsaWNlKGlkeCwgMSlcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdHJpZ2dlclN0YXJ0SGFuZGxlcnMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBJbnRlcm5hbFN0YXRlLnN0YXJ0SGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIEludGVybmFsU3RhdGUuc3RhcnRIYW5kbGVyc1tpXShJbnRlcm5hbFN0YXRlLnN0YXJ0U3VjY2Vzc2Z1bClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYWRkVmFyaWFibGVzQ2hhbmdlZEhhbmRsZXIoaGFuZGxlcikge1xuICAgIEludGVybmFsU3RhdGUudmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzLnB1c2goaGFuZGxlcilcbiAgICBpZiAoSW50ZXJuYWxTdGF0ZS5oYXNSZWNlaXZlZERpZmZzKSB7XG4gICAgICBoYW5kbGVyKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlVmFyaWFibGVzQ2hhbmdlZEhhbmRsZXIoaGFuZGxlcikge1xuICAgIGxldCBpZHggPSBJbnRlcm5hbFN0YXRlLnZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpXG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICBJbnRlcm5hbFN0YXRlLnZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycy5zcGxpY2UoaWR4LCAxKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB0cmlnZ2VyVmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgSW50ZXJuYWxTdGF0ZS52YXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgSW50ZXJuYWxTdGF0ZS52YXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnNbaV0oKVxuICAgICAgfVxuICB9XG5cbiAgICBzdGF0aWMgc2V0VmFyaWFudERlYnVnSW5mb0VuYWJsZWQodmFyaWFudERlYnVnSW5mb0VuYWJsZWQpIHtcbiAgICBJbnRlcm5hbFN0YXRlLnZhcmlhbnREZWJ1Z0luZm9FbmFibGVkID0gdmFyaWFudERlYnVnSW5mb0VuYWJsZWRcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSW50ZXJuYWxTdGF0ZS5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5cbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9Db25zdGFudHMnXG5pbXBvcnQgSW50ZXJuYWxTdGF0ZSBmcm9tICcuL0ludGVybmFsU3RhdGUnXG5pbXBvcnQgQXJnc0J1aWxkZXIgZnJvbSAnLi9BcmdzQnVpbGRlcidcbmltcG9ydCBMb2NhbFN0b3JhZ2VNYW5hZ2VyIGZyb20gJy4vTG9jYWxTdG9yYWdlTWFuYWdlcidcbmltcG9ydCBMZWFucGx1bVJlcXVlc3QgZnJvbSAnLi9MZWFucGx1bVJlcXVlc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhckNhY2hlIHtcbiAgc3RhdGljIGRpZmZzID0gdW5kZWZpbmVkXG4gIHN0YXRpYyB2YXJpYWJsZXMgPSBudWxsXG4gIHN0YXRpYyB2YXJpYW50cyA9IFtdXG4gIHN0YXRpYyB2YXJpYW50RGVidWdJbmZvID0ge31cbiAgc3RhdGljIG1lcmdlZCA9IHVuZGVmaW5lZFxuICBzdGF0aWMgb25VcGRhdGUgPSB1bmRlZmluZWRcbiAgc3RhdGljIHRva2VuID0gJydcbiAgc3RhdGljIGFjdGlvbk1ldGFkYXRhID0ge31cbiAgc3RhdGljIG1lc3NhZ2VzVmlldyA9IHVuZGVmaW5lZFxuICBzdGF0aWMgbWVzc2FnZXNWaWV3UGVyU2Vzc2lvbiA9IFtdXG5cbiAgc3RhdGljIGFwcGx5RGlmZnMoZGlmZnMsIHZhcmlhbnRzLCBhY3Rpb25NZXRhZGF0YSkge1xuICAgIFZhckNhY2hlLmRpZmZzID0gZGlmZnNcbiAgICBWYXJDYWNoZS52YXJpYW50cyA9IHZhcmlhbnRzXG4gICAgVmFyQ2FjaGUuYWN0aW9uTWV0YWRhdGEgPSBhY3Rpb25NZXRhZGF0YVxuICAgIEludGVybmFsU3RhdGUuaGFzUmVjZWl2ZWREaWZmcyA9IHRydWVcbiAgICBWYXJDYWNoZS5tZXJnZWQgPSBWYXJDYWNoZS5tZXJnZUhlbHBlcihWYXJDYWNoZS52YXJpYWJsZXMsIGRpZmZzKVxuICAgIFZhckNhY2hlLnNhdmVEaWZmcygpXG4gICAgaWYgKFZhckNhY2hlLm9uVXBkYXRlKSB7XG4gICAgICBWYXJDYWNoZS5vblVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGxvYWREaWZmcygpIHtcbiAgICB0cnkge1xuICAgICAgVmFyQ2FjaGUuYXBwbHlEaWZmcyhcbiAgICAgICAgICBKU09OLnBhcnNlKExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShcbiAgICAgICAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQUJMRVMpIHx8IG51bGwpLFxuICAgICAgICAgIEpTT04ucGFyc2UoTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKFxuICAgICAgICAgICAgICBDb25zdGFudHMuREVGQVVMVF9LRVlTLlZBUklBTlRTKSB8fCBudWxsKSxcbiAgICAgICAgICBKU09OLnBhcnNlKExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShcbiAgICAgICAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5BQ1RJT05fTUVUQURBVEEpIHx8IG51bGwpKVxuICAgICAgVmFyQ2FjaGUudG9rZW4gPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5UT0tFTilcbiAgICAgIFZhckNhY2hlLnZhcmlhbnREZWJ1Z0luZm8gPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQU5UX0RFQlVHX0lORk8pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coYExlYW5wbHVtOiBJbnZhbGlkIGRpZmZzOiAke2V9YClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgc2F2ZURpZmZzKCkge1xuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKFxuICAgICAgICBDb25zdGFudHMuREVGQVVMVF9LRVlTLlZBUklBQkxFUywgSlNPTi5zdHJpbmdpZnkoVmFyQ2FjaGUuZGlmZnMgfHwge30pKVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKFxuICAgICAgICBDb25zdGFudHMuREVGQVVMVF9LRVlTLlZBUklBTlRTLCBKU09OLnN0cmluZ2lmeShWYXJDYWNoZS52YXJpYW50cyB8fCBbXSlcbiAgICApXG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5BQ1RJT05fTUVUQURBVEEsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KFZhckNhY2hlLmFjdGlvbk1ldGFkYXRhIHx8IHt9KSlcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlZBUklBTlRfREVCVUdfSU5GTyxcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoVmFyQ2FjaGUudmFyaWFudERlYnVnSW5mbyB8fCB7fSkpXG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5UT0tFTiwgVmFyQ2FjaGUudG9rZW4pXG4gIH1cblxuICAvKipcbiAgICogcmVjb3JkIHZpZXcgbWVzc2FnZSBpbiBsb2NhbCBzdG9yYWdlIGFuZCAgaW4gbWVtb3J5IChha2Egc2Vzc2lvbilcbiAgICogQHBhcmFtIG1lc3NhZ2VJZFxuICAgKi9cbiAgc3RhdGljIGFkZE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZCl7XG4gICAgY29uc3QgbWVzc2FnZVZpZXcgPSBWYXJDYWNoZS5nZXRNZXNzYWdlc1ZpZXcoKVttZXNzYWdlSWRdXG4gICAgaWYgKG1lc3NhZ2VWaWV3ID09PSB1bmRlZmluZWQpe1xuICAgICAgVmFyQ2FjaGUubWVzc2FnZXNWaWV3W21lc3NhZ2VJZF0gPSBbXVxuICAgIH1cbiAgICBjb25zdCBtZXNzYWdlVmlld1BlclNlc3Npb24gPVZhckNhY2hlLm1lc3NhZ2VzVmlld1BlclNlc3Npb25bbWVzc2FnZUlkXSB8fCBbXVxuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIG1lc3NhZ2VWaWV3UGVyU2Vzc2lvbi5wdXNoKHt0Om5vd30pXG4gICAgVmFyQ2FjaGUubWVzc2FnZXNWaWV3W21lc3NhZ2VJZF0ucHVzaCh7dDpub3d9KVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuTUVTU0FHRV9WSUVXLEpTT04uc3RyaW5naWZ5KFxuICAgICAgVmFyQ2FjaGUubWVzc2FnZXNWaWV3IHx8IHt9KSlcbiAgfVxuXG5cblxuICAvKipcbiAgICogZ2V0IGFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgbWVzc2FnZVZpZXdzIHdpdGggbWVzc2FnZUlkIGFzIGtleSwgcGVyIHNlc3Npb24gb3IgZnJvbSBzdGFydFxuICAgKiBAcGFyYW0gc2Vzc2lvbiB7Qm9vbGVhbn1cbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXRNZXNzYWdlc1ZpZXcoc2Vzc2lvbil7XG4gICAgaWYoc2Vzc2lvbil7XG4gICAgICByZXR1cm4gVmFyQ2FjaGUubWVzc2FnZXNWaWV3UGVyU2Vzc2lvblxuICAgIH1cbiAgICBpZihWYXJDYWNoZS5tZXNzYWdlc1ZpZXcgPT09IHVuZGVmaW5lZCl7XG4gICAgICBWYXJDYWNoZS5tZXNzYWdlc1ZpZXcgPSBKU09OLnBhcnNlKFxuICAgICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5NRVNTQUdFX1ZJRVcpIHx8ICd7fScpXG4gICAgfVxuICAgIHJldHVybiBWYXJDYWNoZS5tZXNzYWdlc1ZpZXdcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgYWxsIHZpZXcgZm9yIGEgZ2l2ZW4gbWVzc2FnZSBlaXRoZXIgZm9ybSB0aGUgc3RhcnQgb3IgcGVyIHNlc3Npb25cbiAgICogQHBhcmFtIG1lc3NhZ2VJZFxuICAgKiBAcGFyYW0gc2Vzc2lvbiB7Qm9vbGVhbn1cbiAgICogQHJldHVybnMgeyp8QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgZ2V0TWVzc2FnZVZpZXcobWVzc2FnZUlkLCBzZXNzaW9uKXtcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0TWVzc2FnZXNWaWV3KHNlc3Npb24pW21lc3NhZ2VJZF0gfHwgW11cbiAgfVxuICBzdGF0aWMgc2V0VmFyaWFibGVzKHZhcmlhYmxlcykge1xuICAgIFZhckNhY2hlLnZhcmlhYmxlcyA9IHZhcmlhYmxlc1xuICB9XG5cbiAgc3RhdGljIGdldFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gVmFyQ2FjaGUubWVyZ2VkICE9PSB1bmRlZmluZWQgPyBWYXJDYWNoZS5tZXJnZWQgOiBWYXJDYWNoZS52YXJpYWJsZXNcbiAgfVxuXG4gIHN0YXRpYyBnZXRWYXJpYW50RGVidWdJbmZvKCkge1xuICAgIHJldHVybiBWYXJDYWNoZS52YXJpYW50RGVidWdJbmZvXG4gIH1cblxuICBzdGF0aWMgc2VuZFZhcmlhYmxlcygpIHtcbiAgICBsZXQgYm9keSA9IHt9XG4gICAgYm9keVtDb25zdGFudHMuUEFSQU1TLlZBUklBQkxFU10gPSBWYXJDYWNoZS52YXJpYWJsZXNcbiAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5TRVRfVkFSUyxcbiAgICAgICAgbmV3IEFyZ3NCdWlsZGVyKCkuYm9keShKU09OLnN0cmluZ2lmeShib2R5KSksIHtcbiAgICAgICAgICBzZW5kTm93OiB0cnVlXG4gICAgICAgIH0pXG4gIH1cblxuICBzdGF0aWMgbWVyZ2VIZWxwZXIodmFycywgZGlmZikge1xuICAgIGlmICh0eXBlb2YgZGlmZiA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGRpZmYgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgZGlmZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBkaWZmXG4gICAgfVxuICAgIGlmIChkaWZmID09PSBudWxsIHx8IGRpZmYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHZhcnNcbiAgICB9XG5cbiAgICBsZXQgb2JqSXRlcmF0b3IgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihmKSB7XG4gICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmKG9ialtpXSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgIC8vIFRoaXMgc2VlbXMgdG8gYmUgYmVzdCBwcmFjdGljZTogaHR0cHM6Ly9naXRodWIuY29tL2VzbGludC9lc2xpbnQvaXNzdWVzLzcwNzFcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVmbGVjdFxuICAgICAgICAgICAgaWYgKHt9Lmhhc093blByb3BlcnR5LmNhbGwob2JqLCBhdHRyKSkge1xuICAgICAgICAgICAgICBmKGF0dHIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGxldCB2YXJzSXRlcmF0b3IgPSBvYmpJdGVyYXRvcih2YXJzKVxuICAgIGxldCBkaWZmSXRlcmF0b3IgPSBvYmpJdGVyYXRvcihkaWZmKVxuXG4gICAgLy8gSW5mZXIgdGhhdCB0aGUgZGlmZnMgaXMgYW4gYXJyYXkgaWYgdGhlIHZhcnMgdmFsdWUgZG9lc24ndCBleGlzdCB0byB0ZWxsIHVzIHRoZSB0eXBlLlxuICAgIGxldCBpc0FycmF5ID0gZmFsc2VcbiAgICBpZiAodmFycyA9PT0gbnVsbCkge1xuICAgICAgaWYgKCEoZGlmZiBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICBpc0FycmF5ID0gbnVsbFxuICAgICAgICBmb3IgKGxldCBhdHRyaWJ1dGUgaW4gZGlmZikge1xuICAgICAgICAgIGlmICghZGlmZi5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNBcnJheSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaXNBcnJheSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCEodHlwZW9mIGF0dHJpYnV0ZSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgICAgICBpc0FycmF5ID0gZmFsc2VcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhdHRyaWJ1dGUubGVuZ3RoIDwgMyB8fCBhdHRyaWJ1dGUuY2hhckF0KDApICE9PSAnWycgfHxcbiAgICAgICAgICAgICAgYXR0cmlidXRlLmNoYXJBdChhdHRyaWJ1dGUubGVuZ3RoIC0gMSkgIT09ICddJykge1xuICAgICAgICAgICAgaXNBcnJheSA9IGZhbHNlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgdmFyU3Vic2NyaXB0ID0gYXR0cmlidXRlLnN1YnN0cmluZygxLCBhdHRyaWJ1dGUubGVuZ3RoIC0gMSlcbiAgICAgICAgICBpZiAoIXBhcnNlSW50KHZhclN1YnNjcmlwdCkudG9TdHJpbmcoKSA9PT0gdmFyU3Vic2NyaXB0KSB7XG4gICAgICAgICAgICBpc0FycmF5ID0gZmFsc2VcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWVyZ2UgYXJyYXlzLlxuICAgIGlmICh2YXJzIGluc3RhbmNlb2YgQXJyYXkgfHwgaXNBcnJheSkge1xuICAgICAgbGV0IG1lcmdlZCA9IFtdXG4gICAgICB2YXJzSXRlcmF0b3IoZnVuY3Rpb24oYXR0cikge1xuICAgICAgICBtZXJnZWQucHVzaChhdHRyKVxuICAgICAgfSlcbiAgICAgIGRpZmZJdGVyYXRvcihmdW5jdGlvbih2YXJTdWJzY3JpcHQpIHtcbiAgICAgICAgbGV0IHN1YnNjcmlwdCA9XG4gICAgICAgICAgICBwYXJzZUludCh2YXJTdWJzY3JpcHQuc3Vic3RyaW5nKDEsIHZhclN1YnNjcmlwdC5sZW5ndGggLSAxKSlcbiAgICAgICAgbGV0IGRpZmZWYWx1ZSA9IGRpZmZbdmFyU3Vic2NyaXB0XVxuICAgICAgICB3aGlsZSAoc3Vic2NyaXB0ID49IG1lcmdlZC5sZW5ndGgpIHtcbiAgICAgICAgICBtZXJnZWQucHVzaChudWxsKVxuICAgICAgICB9XG4gICAgICAgIG1lcmdlZFtzdWJzY3JpcHRdID0gVmFyQ2FjaGUubWVyZ2VIZWxwZXIobWVyZ2VkW3N1YnNjcmlwdF0sIGRpZmZWYWx1ZSlcbiAgICAgIH0pXG4gICAgICByZXR1cm4gbWVyZ2VkXG4gICAgfVxuXG4gICAgLy8gTWVyZ2UgZGljdGlvbmFyaWVzLlxuICAgIGxldCBtZXJnZWQgPSB7fVxuICAgIHZhcnNJdGVyYXRvcihmdW5jdGlvbihhdHRyKSB7XG4gICAgICBpZiAoZGlmZlthdHRyXSA9PT0gbnVsbCB8fCBkaWZmW2F0dHJdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVyZ2VkW2F0dHJdID0gdmFyc1thdHRyXVxuICAgICAgfVxuICAgIH0pXG4gICAgZGlmZkl0ZXJhdG9yKGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgIG1lcmdlZFthdHRyXSA9IFZhckNhY2hlLm1lcmdlSGVscGVyKHZhcnMgIT09IG51bGwgPyB2YXJzW2F0dHJdIDogbnVsbCxcbiAgICAgICAgICBkaWZmW2F0dHJdKVxuICAgIH0pXG4gICAgcmV0dXJuIG1lcmdlZFxuICB9XG5cbiAgc3RhdGljIGNsZWFyVXNlckNvbnRlbnQoKSB7XG4gICAgVmFyQ2FjaGUuZGlmZnMgPSB1bmRlZmluZWRcbiAgICBWYXJDYWNoZS52YXJpYWJsZXMgPSBudWxsXG4gICAgVmFyQ2FjaGUudmFyaWFudHMgPSBbXVxuICAgIFZhckNhY2hlLnZhcmlhbnREZWJ1Z0luZm8gPSB7fVxuICAgIFZhckNhY2hlLm1lcmdlZCA9IHVuZGVmaW5lZFxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9WYXJDYWNoZS5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19NYXAuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbigpe1xuICB2YXIgdG9waWNzID0ge31cblxuICByZXR1cm4ge1xuICAgIHN1YnNjcmliZTogZnVuY3Rpb24odG9waWMsIGxpc3RlbmVyKSB7XG4gICAgICBpZighdG9waWNzLmhhc093blByb3BlcnR5LmNhbGwodG9waWNzLCB0b3BpYykpIHRvcGljc1t0b3BpY10gPSBbXVxuXG4gICAgICB2YXIgaW5kZXggPSB0b3BpY3NbdG9waWNdLnB1c2gobGlzdGVuZXIpIC0gMVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGRlbGV0ZSB0b3BpY3NbdG9waWNdW2luZGV4XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBwdWJsaXNoOiBmdW5jdGlvbih0b3BpYywgaW5mbykge1xuICAgICAgaWYoIXRvcGljcy5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRvcGljcywgdG9waWMpKSByZXR1cm5cblxuICAgICAgdG9waWNzW3RvcGljXS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIFx0XHRpdGVtKGluZm8gIT0gdW5kZWZpbmVkID8gaW5mbyA6IHt9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pKClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FdmVudHMuanMiLCIvKipcbiAqIEFqYXggZnVuY3Rpb25zIGZyb206XG4gKlxuICogUGFyc2UgSmF2YVNjcmlwdCBTREtcbiAqIFZlcnNpb246IDEuMS41XG4gKiBCdWlsdDogTW9uIE9jdCAwMSAyMDEyIDE3OjU3OjEzXG4gKiBodHRwOi8vcGFyc2UuY29tXG4gKlxuICogQ29weXJpZ2h0IDIwMTIgUGFyc2UsIEluYy5cbiAqIFRoZSBQYXJzZSBKYXZhU2NyaXB0IFNESyBpcyBmcmVlbHkgZGlzdHJpYnV0YWJsZSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxubGV0IHJlcXVlc3RRdWV1ZSA9IFtdXG5sZXQgbmV0d29ya1RpbWVvdXRTZWNvbmRzID0gMTBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0d29yayB7XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBuZXR3b3JrIHRpbWVvdXQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWNvbmRzIFRoZSB0aW1lb3V0IGluIHNlY29uZHMuXG4gICAqL1xuICBzdGF0aWMgc2V0TmV0d29ya1RpbWVvdXQoc2Vjb25kcykge1xuICAgIG5ldHdvcmtUaW1lb3V0U2Vjb25kcyA9IHNlY29uZHNcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGFuIGFqYXggcmVxdWVzdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCBUaGUgaHR0cCBtZXRob2QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBvcGVuLlxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheUJ1ZmZlcnxCbG9ifERvY3VtZW50fEZvcm1EYXRhfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHNlbnQgaW4gYm9keS5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gc3VjY2VzcyBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBzdWNjZXNzLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBlcnJvciBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBlcnJvci5cbiAgICogQHBhcmFtIHtib29sZWFufSBxdWV1ZWQgV2hldGhlciB0aGUgcmVxdWVzdCBzaG91bGQgYmUgcXVldWVkIG9yIGltbWVkaWF0ZWx5IHNlbnQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3BsYWluVGV4dF0gV2hldGhlciB0aGUgcmVzcG9uc2Ugc2hvdWxkIGJlIHJldHVybmVkIGFzIHBsYWluIHRleHQgb3IganNvbi5cbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIHN0YXRpYyBhamF4KG1ldGhvZCwgdXJsLCBkYXRhLCBzdWNjZXNzLCBlcnJvciwgcXVldWVkLCBwbGFpblRleHQpIHtcbiAgICBpZiAocXVldWVkKSB7XG4gICAgICBpZiAoTmV0d29yay5ydW5uaW5nUmVxdWVzdCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgICAgIHJldHVybiBOZXR3b3JrLmVucXVldWVSZXF1ZXN0KGFyZ3VtZW50cylcbiAgICAgIH1cbiAgICAgIE5ldHdvcmsucnVubmluZ1JlcXVlc3QgPSB0cnVlXG4gICAgfVxuXG4gICAgLyoqIEBuYW1lc3BhY2UgWERvbWFpblJlcXVlc3QgKiovXG4gICAgLyoqIEBuYW1lc3BhY2UgbG9jYXRpb24gKiovXG4gICAgaWYgKHR5cGVvZiBYRG9tYWluUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChsb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHA6JyAmJiB1cmwuaW5kZXhPZignaHR0cHM6JykgPT09IDApIHtcbiAgICAgICAgdXJsID0gYGh0dHA6JHt1cmwuc3Vic3RyaW5nKDYpfWBcbiAgICAgIH1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICAgIHJldHVybiBSZWZsZWN0LmFwcGx5KE5ldHdvcmsuYWpheElFOCwgbnVsbCwgYXJndW1lbnRzKVxuICAgIH1cblxuICAgIGxldCBoYW5kbGVkID0gZmFsc2VcblxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGhhbmRsZWQgPSB0cnVlXG5cbiAgICAgICAgbGV0IHJlc3BvbnNlXG4gICAgICAgIGxldCByYW5DYWxsYmFjayA9IGZhbHNlXG4gICAgICAgIGlmIChwbGFpblRleHQpIHtcbiAgICAgICAgICByZXNwb25zZSA9IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IobnVsbCwgeGhyKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwKVxuICAgICAgICAgICAgcmFuQ2FsbGJhY2sgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyYW5DYWxsYmFjaykge1xuICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzcG9uc2UsIHhocilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IocmVzcG9uc2UsIHhocilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocXVldWVkKSB7XG4gICAgICAgICAgTmV0d29yay5ydW5uaW5nUmVxdWVzdCA9IGZhbHNlXG4gICAgICAgICAgTmV0d29yay5kZXF1ZXVlUmVxdWVzdCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L3BsYWluJykgLy8gQXZvaWQgcHJlLWZsaWdodC5cbiAgICB4aHIuc2VuZChkYXRhKVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWhhbmRsZWQpIHtcbiAgICAgICAgeGhyLmFib3J0KClcbiAgICAgIH1cbiAgICB9LCBuZXR3b3JrVGltZW91dFNlY29uZHMgKiAxMDAwKVxuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYW4gYWpheCByZXF1ZXN0IGZvciBJRTguXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgVGhlIGh0dHAgbWV0aG9kLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gb3Blbi5cbiAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXlCdWZmZXJ8QmxvYnxEb2N1bWVudHxGb3JtRGF0YX0gZGF0YSBUaGUgZGF0YSB0byBiZSBzZW50IGluIGJvZHkuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1Y2Nlc3MgQSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gc3VjY2Vzcy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZXJyb3IgQSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gZXJyb3IuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcXVldWVkIFdoZXRoZXIgdGhlIHJlcXVlc3Qgc2hvdWxkIGJlIHF1ZXVlZCBvciBpbW1lZGlhdGVseSBzZW50LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBsYWluVGV4dCBXaGV0aGVyIHRoZSByZXNwb25zZSBzaG91bGQgYmUgcmV0dXJuZWQgYXMgcGxhaW4gdGV4dCBvciBqc29uLlxuICAgKi9cbiAgc3RhdGljIGFqYXhJRTgobWV0aG9kLCB1cmwsIGRhdGEsIHN1Y2Nlc3MsIGVycm9yLCBxdWV1ZWQsIHBsYWluVGV4dCkge1xuICAgIGxldCB4ZHIgPSBuZXcgWERvbWFpblJlcXVlc3QoKVxuICAgIHhkci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxldCByZXNwb25zZVxuICAgICAgbGV0IHJhbkNhbGxiYWNrID0gZmFsc2VcbiAgICAgIGlmIChwbGFpblRleHQpIHtcbiAgICAgICAgcmVzcG9uc2UgPSB4ZHIucmVzcG9uc2VUZXh0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4ZHIucmVzcG9uc2VUZXh0KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBlcnJvcihudWxsLCB4ZHIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMClcbiAgICAgICAgICByYW5DYWxsYmFjayA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFyYW5DYWxsYmFjaykge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICBzdWNjZXNzKHJlc3BvbnNlLCB4ZHIpXG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKVxuICAgICAgfVxuICAgICAgaWYgKHF1ZXVlZCkge1xuICAgICAgICBOZXR3b3JrLnJ1bm5pbmdSZXF1ZXN0ID0gZmFsc2VcbiAgICAgICAgTmV0d29yay5kZXF1ZXVlUmVxdWVzdCgpXG4gICAgICB9XG4gICAgfVxuICAgIHhkci5vbmVycm9yID0geGRyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgZXJyb3IobnVsbCwgeGRyKVxuICAgICAgICB9XG4gICAgICB9LCAwKVxuICAgICAgaWYgKHF1ZXVlZCkge1xuICAgICAgICBOZXR3b3JrLnJ1bm5pbmdSZXF1ZXN0ID0gZmFsc2VcbiAgICAgICAgTmV0d29yay5kZXF1ZXVlUmVxdWVzdCgpXG4gICAgICB9XG4gICAgfVxuICAgIHhkci5vbnByb2dyZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgfVxuICAgIHhkci5vcGVuKG1ldGhvZCwgdXJsKVxuICAgIHhkci50aW1lb3V0ID0gbmV0d29ya1RpbWVvdXRTZWNvbmRzICogMTAwMFxuICAgIHhkci5zZW5kKGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgcmVxdWVzdCB0byB0aGUgcmVxdWVzdCBxdWV1ZS5cbiAgICogQHBhcmFtIHtBcmd1bWVudHN9IHJlcXVlc3RBcmd1bWVudHMgVGhlIHJlcXVlc3QgYXJndW1lbnRzIGZyb20gdGhlIGluaXRpYWwgbWV0aG9kIGNhbGwuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdGF0aWMgZW5xdWV1ZVJlcXVlc3QocmVxdWVzdEFyZ3VtZW50cykge1xuICAgIHJlcXVlc3RRdWV1ZS5wdXNoKHJlcXVlc3RBcmd1bWVudHMpXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgcmVxdWVzdCBmcm9tIHRoZSByZXF1ZXN0IHF1ZXVlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3RhdGljIGRlcXVldWVSZXF1ZXN0KCkge1xuICAgIGxldCBhcmdzID0gcmVxdWVzdFF1ZXVlLnNoaWZ0KClcbiAgICBpZiAoYXJncykge1xuICAgICAgUmVmbGVjdC5hcHBseShOZXR3b3JrLmFqYXgsIG51bGwsIGFyZ3MpXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTmV0d29yay5qcyIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19NYXBDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheVNvbWUgPSByZXF1aXJlKCcuL19hcnJheVNvbWUnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19lcXVhbEFycmF5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fdG9Tb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9lcS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0J1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGRlZXAgY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlXG4gKiBlcXVpdmFsZW50LlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBzdXBwb3J0cyBjb21wYXJpbmcgYXJyYXlzLCBhcnJheSBidWZmZXJzLCBib29sZWFucyxcbiAqIGRhdGUgb2JqZWN0cywgZXJyb3Igb2JqZWN0cywgbWFwcywgbnVtYmVycywgYE9iamVjdGAgb2JqZWN0cywgcmVnZXhlcyxcbiAqIHNldHMsIHN0cmluZ3MsIHN5bWJvbHMsIGFuZCB0eXBlZCBhcnJheXMuIGBPYmplY3RgIG9iamVjdHMgYXJlIGNvbXBhcmVkXG4gKiBieSB0aGVpciBvd24sIG5vdCBpbmhlcml0ZWQsIGVudW1lcmFibGUgcHJvcGVydGllcy4gRnVuY3Rpb25zIGFuZCBET01cbiAqIG5vZGVzIGFyZSBjb21wYXJlZCBieSBzdHJpY3QgZXF1YWxpdHksIGkuZS4gYD09PWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uaXNFcXVhbChvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBvYmplY3QgPT09IG90aGVyO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNFcXVhbCh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFcXVhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNFcXVhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0xlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogSGFuZGxlcyBJbi1hcHAgbWVzc2FnZSBmaWx0ZXJpbmdcbiAqL1xuaW1wb3J0IFZhckNhY2hlIGZyb20gXCIuL1ZhckNhY2hlXCI7XG5cbi8qKiBwcml2YXRlXG4gKiByZXR1cm4gdHJ1ZSBpZiBtZXNzYWdlIHBhc3Mgb25lIHRyaWdnZXIvdmVyYiBjb25kaXRpb25cbiAqIEBwYXJhbSBwYXJhbXMge09iamVjdH1cbiAqIEBwYXJhbSBtZXNzYWdlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgZmlsdGVyQnlUcmlnZ2VycyA9IChwYXJhbXM9e30pID0+IChtZXNzYWdlKSA9PiB7XG4gIGNvbnN0IHRyaWdnZXJzID0gbWVzc2FnZS53aGVuVHJpZ2dlcnMgJiYgbWVzc2FnZS53aGVuVHJpZ2dlcnMuY2hpbGRyZW5cbiAgaWYoIXBhcmFtcy50cmlnZ2VycyB8fCAhdHJpZ2dlcnMpe1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbGV0IGZpbHRlcmVkQnlUcmlnZ2VycyA9IHRyaWdnZXJzLmZpbHRlcigodHJpZ2dlcikgPT4gKFxuICAgIHBhcmFtcy50cmlnZ2Vycy5pbmNsdWRlcyh0cmlnZ2VyLnN1YmplY3QpKVxuICApXG5cbiAgaWYgKCFmaWx0ZXJlZEJ5VHJpZ2dlcnMubGVuZ3RoKXtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBjb25zdCB2ZXJiRmlsdGVyID0gZmlsdGVyQnlWZXJicyhwYXJhbXMpXG4gIGlmKCF2ZXJiRmlsdGVyKXtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBmaWx0ZXJlZEJ5VHJpZ2dlcnMgPSBmaWx0ZXJlZEJ5VHJpZ2dlcnMuZmlsdGVyKHZlcmJGaWx0ZXIpXG5cbiAgaWYoIWZpbHRlcmVkQnlUcmlnZ2Vycy5sZW5ndGgpe1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqIHByaXZhdGVcbiAqIHJldHVybiB0cnVlIGlmIHRyaWdnZXIgcGFzcyB2ZXJiL25vdW4vb2JqZWN0cyBjb25kaXRpb25cbiAqIEBwYXJhbSBwYXJhbXMge09iamVjdH1cbiAqIEBwYXJhbSB0cmlnZ2VyIHtPYmplY3R9XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgZmlsdGVyQnlWZXJicyA9IChwYXJhbXMpID0+ICh0cmlnZ2VyKSA9PiB7XG4gIGlmKHRyaWdnZXIudmVyYiA9PT0gJycpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGNvbnN0IGV2YWx1YXRvciA9IHRyaWdnZXJWZXJiRXZhbHVhdG9yc1t0cmlnZ2VyLnZlcmJdXG4gIGlmKCAhZXZhbHVhdG9yKHRyaWdnZXIsIHBhcmFtcy5ub3VuLCBwYXJhbXMub2JqZWN0cykpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKiogcHJyaXZhdGVcbiAqIHJldHVybiB0cnVlIGlmIG1lc3NhZ2UgcGFzcyBhbGwgbGltaXRzXG4gKiBAcGFyYW0gbm93IHtEYXRlLm5vdygpfVxuICogQHBhcmFtIG1lc3NhZ2Uge09iamVjdH1cbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5jb25zdCBmaWx0ZXJCeUxpbWl0cyAgPSAobm93KSA9PiAobWVzc2FnZSkgPT4ge1xuICBjb25zdCBsaW1pdHMgPSBtZXNzYWdlLndoZW5MaW1pdHMgJiYgbWVzc2FnZS53aGVuTGltaXRzLmNoaWxkcmVuXG4gIGlmKCFsaW1pdHMgfHwgbGltaXRzLmxlbmd0aCA8IDEpe1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIGxpbWl0cy5ldmVyeSgobGltaXQpID0+IHtcbiAgICAgIGNvbnN0IHZlcmJFdmFsdWF0b3IgPSBsaW1pdFZlcmJFdmFsdWF0b3JzW2xpbWl0LnZlcmJdXG4gICAgICBpZiAoIXZlcmJFdmFsdWF0b3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICByZXR1cm4gdmVyYkV2YWx1YXRvcihtZXNzYWdlLmlkLCBsaW1pdC5ub3VuLCBsaW1pdC5vYmplY3RzWzBdLCBub3cpXG4gICAgfVxuICApXG59XG5cbi8qKiBwcml2YXRlXG4gKiByZXR1cm4gdGhlIGFtb3VudCBvZiBvY3VyZW5jZSBvZiBtZXNzYWdlVmlldyBzaW5jZSAnc2luY2UnXG4gKiBAcGFyYW0gc2luY2Uge051bWJlcn1cbiAqIEBwYXJhbSBtZXNzYWdlVmlldyB7QXJyYXl9XG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oKiwgKik6ICp9XG4gKi9cbmNvbnN0IGNvdW50TWVzc2FnZVZpZXdzQnlMaW1pdCA9IChzaW5jZSkgPT4gKGl0ZXJhdG9yLG1lc3NhZ2VWaWV3KSA9PiB7XG4gIGlmKG1lc3NhZ2VWaWV3LnQgPiBzaW5jZSl7XG4gICAgaXRlcmF0b3IrPTFcbiAgfVxuICByZXR1cm4gaXRlcmF0b3Jcbn1cbi8qKiBwcml2YXRlXG4gKiByZXR1cm4gdHJ1ZSBpZiBubyBsaW1pdHMgYXJlIGRlZmluZWQgb3IgaWYgbm93IGlzIGluIHRoZSByYW5nZVxuICogQHBhcmFtIG5vdyB7RGF0ZS5ub3coKX1cbiAqIEBwYXJhbSBsaW1pdFRpbWUge09iamVjdH1cbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5jb25zdCBmaWx0ZXJCeUxpbWl0VGltZXMgPSAobm93KSA9PiAobGltaXRUaW1lKSA9PiB7XG4gIHJldHVybiAoIWxpbWl0VGltZS5zdGFydFRpbWUgfHwgbGltaXRUaW1lLnN0YXJ0VGltZSA8IG5vdykgJiZcbiAgICAoIWxpbWl0VGltZS5lbmRUaW1lIHx8IGxpbWl0VGltZS5lbmRUaW1lID4gbm93IClcbn1cblxuLyoqIHByaXZhdGVcbiAqIHByb3ZpZGUgZXZhbHVhdG9ycyBmb3IgZmlsdGVyQnlWZXJic1xuICovXG5jb25zdCB0cmlnZ2VyVmVyYkV2YWx1YXRvcnMgPSB7XG4gIHRyaWdnZXJzOiAodHJpZ2dlciwgbm91bikgPT4ge1xuICAgIHJldHVybiBub3VuID09PSB0cmlnZ2VyLm5vdW5cbiAgfSxcbiAgdHJpZ2dlcnNXaXRoUGFyYW1ldGVyOiAodHJpZ2dlciwgbm91biwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5vdW4gPT09IHRyaWdnZXIubm91biAmJiBwYXJhbXMucGFyYW1WYWx1ZSA9PT0gdHJpZ2dlci5vYmplY3RzW3BhcmFtcy5wYXJhbU5hbWVdXG4gIH0sXG4gIGNoYW5nZXNUbzogKHRyaWdnZXIsIG5vdW4sIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBub3VuID09PSB0cmlnZ2VyLm5vdW4gJiYgcGFyYW1zLnRvID09PSB0cmlnZ2VyLm9iamVjdHNbMF1cbiAgfSxcbiAgY2hhbmdlc0Zyb21UbzogKHRyaWdnZXIsIG5vdW4sIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBub3VuID09PSB0cmlnZ2VyLm5vdW4gJiZcbiAgICAgIHBhcmFtcy5mcm9tID09PSB0cmlnZ2VyLm9iamVjdHNbMF0gJiZcbiAgICAgIHBhcmFtcy50byA9PT0gdHJpZ2dlci5vYmplY3RzWzFdXG4gIH1cbn1cblxuLyoqIHByaXZhdGVcbiAqIHByb3ZpZGUgZXZhbHVhdG9ycyBmb3IgZmlsdGVyQnlMaW1pdFxuICovXG5jb25zdCBsaW1pdFZlcmJFdmFsdWF0b3JzID0ge1xuICBsaW1pdFVzZXI6IChtZXNzYWdlSWQsIG1heFZpZXcpID0+IHtcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0TWVzc2FnZVZpZXcobWVzc2FnZUlkKS5sZW5ndGggPCBtYXhWaWV3XG4gIH0sXG4gIGxpbWl0TW9udGg6IChtZXNzYWdlSWQsIG1heFZpZXcsYW1vdW50LG5vdykgPT4ge1xuICAgIGNvbnN0IHNpbmNlID0gbm93IC0gYW1vdW50ICogMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gICAgcmV0dXJuIFZhckNhY2hlLmdldE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZClcbiAgICAgIC5yZWR1Y2UoIGNvdW50TWVzc2FnZVZpZXdzQnlMaW1pdChzaW5jZSksMCkgPCBtYXhWaWV3XG4gIH0sXG4gIGxpbWl0V2VlazogKG1lc3NhZ2VJZCwgbWF4VmlldyxhbW91bnQsbm93KSA9PiB7XG4gICAgY29uc3Qgc2luY2UgPSBub3cgLSBhbW91bnQgKiA3ICogMjQgKiA2MCAqIDYwICogMTAwMFxuICAgIHJldHVybiBWYXJDYWNoZS5nZXRNZXNzYWdlVmlldyhtZXNzYWdlSWQpXG4gICAgICAucmVkdWNlKCBjb3VudE1lc3NhZ2VWaWV3c0J5TGltaXQoc2luY2UpLDApIDwgbWF4Vmlld1xuICB9LFxuICBsaW1pdERheTogKG1lc3NhZ2VJZCwgbWF4VmlldyxhbW91bnQsbm93KSA9PiB7XG4gICAgY29uc3Qgc2luY2UgPSBub3cgLSBhbW91bnQgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gICAgcmV0dXJuIFZhckNhY2hlLmdldE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZClcbiAgICAgIC5yZWR1Y2UoIGNvdW50TWVzc2FnZVZpZXdzQnlMaW1pdChzaW5jZSksMCkgPCBtYXhWaWV3XG4gIH0sXG4gIGxpbWl0SG91cjogKG1lc3NhZ2VJZCwgbWF4VmlldyxhbW91bnQsbm93KSA9PiB7XG4gICAgY29uc3Qgc2luY2UgPSBub3cgLSBhbW91bnQgKiA2MCAqIDYwICogMTAwMFxuICAgIHJldHVybiBWYXJDYWNoZS5nZXRNZXNzYWdlVmlldyhtZXNzYWdlSWQpXG4gICAgICAucmVkdWNlKCBjb3VudE1lc3NhZ2VWaWV3c0J5TGltaXQoc2luY2UpLDApIDwgbWF4Vmlld1xuICB9LFxuICBsaW1pdE1pbnV0ZTogKG1lc3NhZ2VJZCwgbWF4VmlldyxhbW91bnQsbm93KSA9PiB7XG4gICAgY29uc3Qgc2luY2UgPSBub3cgLSBhbW91bnQgKiA2MCAqIDEwMDBcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0TWVzc2FnZVZpZXcobWVzc2FnZUlkKVxuICAgICAgLnJlZHVjZSggY291bnRNZXNzYWdlVmlld3NCeUxpbWl0KHNpbmNlKSwwKSA8IG1heFZpZXdcbiAgfSxcbiAgbGltaXRTZWNvbmQ6IChtZXNzYWdlSWQsIG1heFZpZXcsYW1vdW50LG5vdykgPT4ge1xuICAgIGNvbnN0IHNpbmNlID0gbm93IC0gYW1vdW50ICogMTAwMFxuICAgIHJldHVybiBWYXJDYWNoZS5nZXRNZXNzYWdlVmlldyhtZXNzYWdlSWQpXG4gICAgICAucmVkdWNlKCBjb3VudE1lc3NhZ2VWaWV3c0J5TGltaXQoc2luY2UpLDApIDwgbWF4Vmlld1xuICB9LFxuICBsaW1pdFNlc3Npb246IChtZXNzYWdlSWQsIG1heFZpZXcpID0+IHtcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0TWVzc2FnZVZpZXcobWVzc2FnZUlkLHRydWUpLmxlbmd0aCA8IG1heFZpZXdcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uTWFuYWdlciB7XG5cbiAgLyoqIHB1YmxpY1xuICAgKiByZXR1cm4gYW4gYXJyYXkgb2YgZmlsdGVyZWQgbWVzc2FnZVxuICAgKiBAcGFyYW0gbWVzc2FnZXMge09iamVjdH1cbiAgICogQHBhcmFtIHRyaWdnZXIge1N0cmluZ31cbiAgICogQHBhcmFtIHZlcmIge1N0cmluZ31cbiAgICogQHBhcmFtIG5vdW4ge1N0cmluZ31cbiAgICogQHBhcmFtIHBhcmFtcyB7e1xuICAgKiAgZnJvbT86c3RyaW5nLFxuICAgKiAgdG8/OnN0cmluZyxcbiAgICogIHBhcmFtVmFsdWU/OlN0cmluZyxcbiAgICogIHBhcmFtTmFtZT86U3RyaW5nLFxuICAgKiB9fVxuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgZmlsdGVyTWVzc2FnZXMobWVzc2FnZXMsIHRyaWdnZXI9JycsIHZlcmI9bnVsbCwgbm91bj0nJywgcGFyYW1zPXt9KSB7XG4gICAgaWYoIUFycmF5LmlzQXJyYXkodHJpZ2dlcikpe1xuICAgICAgdHJpZ2dlciA9IFt0cmlnZ2VyXVxuICAgIH1cbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgbGV0IGZpbHRlcmVkTWVzc2FnZXMgPSBPYmplY3QuZW50cmllcyhtZXNzYWdlcylcbiAgICAgIC5tYXAoKFtpZCwgbWVzc2FnZV0pID0+ICh7IGlkLCAuLi5tZXNzYWdlIH0pKVxuICAgIGZpbHRlcmVkTWVzc2FnZXMgPSBmaWx0ZXJlZE1lc3NhZ2VzXG4gICAgICAuZmlsdGVyKGZpbHRlckJ5VHJpZ2dlcnMoXG4gICAgICAgIHtcbiAgICAgICAgICB0cmlnZ2Vyczp0cmlnZ2VyXG4gICAgICAgIH1cbiAgICAgICAgKSlcbiAgICAgIC5maWx0ZXIoZmlsdGVyQnlMaW1pdHMobm93KSlcbiAgICAgIC5maWx0ZXIoZmlsdGVyQnlMaW1pdFRpbWVzKG5vdykpXG4gICAgcmV0dXJuIGZpbHRlcmVkTWVzc2FnZXNcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWN0aW9uTWFuYWdlci5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5jb25zdCBkYXRhQnJvd3NlciA9IFt7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnQ2hyb21lJyxcbiAgaWRlbnRpdHk6ICdDaHJvbWUnXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnT21uaVdlYicsXG4gIHZlcnNpb25TZWFyY2g6ICdPbW5pV2ViLycsXG4gIGlkZW50aXR5OiAnT21uaVdlYidcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudmVuZG9yLFxuICBzdWJTdHJpbmc6ICdBcHBsZScsXG4gIGlkZW50aXR5OiAnU2FmYXJpJyxcbiAgdmVyc2lvblNlYXJjaDogJ1ZlcnNpb24nXG59LCB7XG4gIHByb3A6IHdpbmRvdy5vcGVyYSxcbiAgaWRlbnRpdHk6ICdPcGVyYScsXG4gIHZlcnNpb25TZWFyY2g6ICdWZXJzaW9uJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci52ZW5kb3IsXG4gIHN1YlN0cmluZzogJ2lDYWInLFxuICBpZGVudGl0eTogJ2lDYWInXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnZlbmRvcixcbiAgc3ViU3RyaW5nOiAnS0RFJyxcbiAgaWRlbnRpdHk6ICdLb25xdWVyb3InXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnRmlyZWZveCcsXG4gIGlkZW50aXR5OiAnRmlyZWZveCdcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudmVuZG9yLFxuICBzdWJTdHJpbmc6ICdDYW1pbm8nLFxuICBpZGVudGl0eTogJ0NhbWlubydcbn0sIHsgLy8gZm9yIG5ld2VyIE5ldHNjYXBlICg2KylcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdOZXRzY2FwZScsXG4gIGlkZW50aXR5OiAnTmV0c2NhcGUnXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnTVNJRScsXG4gIGlkZW50aXR5OiAnRXhwbG9yZXInLFxuICB2ZXJzaW9uU2VhcmNoOiAnTVNJRSdcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdHZWNrbycsXG4gIGlkZW50aXR5OiAnTW96aWxsYScsXG4gIHZlcnNpb25TZWFyY2g6ICdydidcbn0sIHsgLy8gZm9yIG9sZGVyIE5ldHNjYXBlICg0LSlcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdNb3ppbGxhJyxcbiAgaWRlbnRpdHk6ICdOZXRzY2FwZScsXG4gIHZlcnNpb25TZWFyY2g6ICdNb3ppbGxhJ1xufV1cblxuY29uc3QgZGF0YU9TID0gW3tcbiAgc3RyaW5nOiBuYXZpZ2F0b3IucGxhdGZvcm0sXG4gIHN1YlN0cmluZzogJ1dpbicsXG4gIGlkZW50aXR5OiAnV2luZG93cydcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IucGxhdGZvcm0sXG4gIHN1YlN0cmluZzogJ01hYycsXG4gIGlkZW50aXR5OiAnTWFjIE9TJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIHN1YlN0cmluZzogJ2lQaG9uZScsXG4gIGlkZW50aXR5OiAnaU9TJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci5wbGF0Zm9ybSxcbiAgc3ViU3RyaW5nOiAnTGludXgnLFxuICBpZGVudGl0eTogJ0xpbnV4J1xufV1cblxuLy8gQnJvd3NlciBkZXRlY3Rpb24uIFNvdXJjZTogaHR0cDovL3d3dy5xdWlya3Ntb2RlLm9yZy9qcy9kZXRlY3QuaHRtbFxuLyoqXG4gKiBIZWxwZXIgY2xhc3MgdG8gZGV0ZWN0IHdoaWNoIGJyb3dzZXIgY2xpZW50IGlzIHVzaW5nLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcm93c2VyRGV0ZWN0b3Ige1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIG9iamVjdCB3aXRoIGN1cnJlbnQgYnJvd3NlciBzZXR0aW5ncy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYnJvd3NlciA9IHRoaXMuX3NlYXJjaFN0cmluZyhkYXRhQnJvd3NlcikgfHwgJ1Vua25vd24gQnJvd3NlcidcbiAgICB0aGlzLnZlcnNpb24gPSB0aGlzLl9zZWFyY2hWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8XG4gICAgICAgIHRoaXMuX3NlYXJjaFZlcnNpb24obmF2aWdhdG9yLmFwcFZlcnNpb24pIHx8ICdVbmtub3duIFZlcnNpb24nXG4gICAgdGhpcy5PUyA9IHRoaXMuX3NlYXJjaFN0cmluZyhkYXRhT1MpIHx8ICdVbmtub3duIE9TJ1xuICB9XG5cbiAgLyoqXG4gICAqIE1hdGNoZXMgdGhlIGNsaWVudCdzIHN5c3RlbSB0byB0aGUgcHJlZGVmaW5lZCBzeXN0ZW0gbGlzdC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgVGhlIGRhdGEgb2JqZWN0IHRvIHNjYW4uXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGZvdW5kIGlkZW50aXR5IHN0cmluZy5cbiAgICovXG4gIF9zZWFyY2hTdHJpbmcoZGF0YSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGRhdGFTdHJpbmcgPSBkYXRhW2ldLnN0cmluZ1xuICAgICAgbGV0IGRhdGFQcm9wID0gZGF0YVtpXS5wcm9wXG4gICAgICB0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcgPSBkYXRhW2ldLnZlcnNpb25TZWFyY2ggfHwgZGF0YVtpXS5pZGVudGl0eVxuICAgICAgaWYgKGRhdGFTdHJpbmcpIHtcbiAgICAgICAgaWYgKGRhdGFTdHJpbmcuaW5kZXhPZihkYXRhW2ldLnN1YlN0cmluZykgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGFbaV0uaWRlbnRpdHlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkYXRhUHJvcCkge1xuICAgICAgICByZXR1cm4gZGF0YVtpXS5pZGVudGl0eVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyB0aGUgY3VycmVudCB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBzeXN0ZW0uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhU3RyaW5nIFRoZSBkYXRhIG9iamVjdCB0byBzY2FuLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBmb3VuZCBudW1iZXIuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2VhcmNoVmVyc2lvbihkYXRhU3RyaW5nKSB7XG4gICAgaWYgKCFkYXRhU3RyaW5nKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgbGV0IGluZGV4ID0gZGF0YVN0cmluZy5pbmRleE9mKHRoaXMudmVyc2lvblNlYXJjaFN0cmluZylcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoZGF0YVN0cmluZy5zdWJzdHJpbmcoaW5kZXggKyB0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcubGVuZ3RoICsgMSkpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Ccm93c2VyRGV0ZWN0b3IuanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vQ29uc3RhbnRzJ1xuaW1wb3J0IEFyZ3NCdWlsZGVyIGZyb20gJy4vQXJnc0J1aWxkZXInXG5pbXBvcnQgU29ja2V0SW9DbGllbnQgZnJvbSAnLi9Tb2NrZXRJb0NsaWVudCdcbmltcG9ydCBWYXJDYWNoZSBmcm9tICcuL1ZhckNhY2hlJ1xuaW1wb3J0IExlYW5wbHVtUmVxdWVzdCBmcm9tICcuL0xlYW5wbHVtUmVxdWVzdCdcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJ1xuaW1wb3J0IGV2ZW50cyBmcm9tICcuL0V2ZW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhbnBsdW1Tb2NrZXQge1xuXG4gIHN0YXRpYyBzb2NrZXRIb3N0ID0gJ2Rldi5sZWFucGx1bS5jb20nXG5cbiAgc3RhdGljIGNvbm5lY3QoKSB7XG4gICAgaWYgKCFXZWJTb2NrZXQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdZb3VyIGJyb3dzZXIgZG9lc25cXCd0IHN1cHBvcnQgV2ViU29ja2V0cy4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGNsaWVudCA9IG5ldyBTb2NrZXRJb0NsaWVudCgpXG4gICAgbGV0IGF1dGhTZW50ID0gZmFsc2VcbiAgICBjbGllbnQub25vcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWF1dGhTZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogQ29ubmVjdGVkIHRvIGRldmVsb3BtZW50IHNlcnZlci4nKVxuICAgICAgICBsZXQgYXJncyA9IHt9XG4gICAgICAgIGFyZ3NbQ29uc3RhbnRzLlBBUkFNUy5BUFBfSURdID0gTGVhbnBsdW1SZXF1ZXN0LmFwcElkXG4gICAgICAgIGFyZ3NbQ29uc3RhbnRzLlBBUkFNUy5ERVZJQ0VfSURdID0gTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkXG4gICAgICAgIGNsaWVudC5zZW5kKCdhdXRoJywgYXJncylcbiAgICAgICAgYXV0aFNlbnQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIGNsaWVudC5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogU29ja2V0IGVycm9yJywgZXZlbnQpXG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKiBAcGFyYW0gYXJnc1tdLmVtYWlsXG4gICAgICovXG4gICAgY2xpZW50Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50LCBhcmdzKSB7XG4gICAgICBpZiAoZXZlbnQgPT09ICd1cGRhdGVWYXJzJykge1xuICAgICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5HRVRfVkFSUyxcbiAgICAgICAgICAgIG5ldyBBcmdzQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklOQ0xVREVfREVGQVVMVFMsIGZhbHNlKSwge1xuICAgICAgICAgICAgICBxdWV1ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgICAgICAgICByZXNwb25zZTogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgZ2V0VmFyc1Jlc3BvbnNlID0gTGVhbnBsdW1SZXF1ZXN0LmdldExhc3RSZXNwb25zZShyZXNwb25zZSlcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gZ2V0VmFyc1Jlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUlNdXG4gICAgICAgICAgICAgICAgbGV0IHZhcmlhbnRzID0gZ2V0VmFyc1Jlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUklBTlRTXVxuICAgICAgICAgICAgICAgIGxldCBhY3Rpb25NZXRhZGF0YSA9IGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5BQ1RJT05fTUVUQURBVEFdXG4gICAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsKHZhbHVlcywgVmFyQ2FjaGUuZGlmZnMpKSB7XG4gICAgICAgICAgICAgICAgICBWYXJDYWNoZS5hcHBseURpZmZzKHZhbHVlcywgdmFyaWFudHMsIGFjdGlvbk1ldGFkYXRhKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAnZ2V0VmFyaWFibGVzJykge1xuICAgICAgICBWYXJDYWNoZS5zZW5kVmFyaWFibGVzKClcbiAgICAgICAgY2xpZW50LnNlbmQoJ2dldENvbnRlbnRSZXNwb25zZScsIHtcbiAgICAgICAgICAndXBkYXRlZCc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09ICdnZXRBY3Rpb25zJykge1xuICAgICAgICAvLyBVbnN1cHBvcnRlZCBpbiBKYXZhU2NyaXB0IFNESy5cbiAgICAgICAgY2xpZW50LnNlbmQoJ2dldENvbnRlbnRSZXNwb25zZScsIHtcbiAgICAgICAgICAndXBkYXRlZCc6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAncmVnaXN0ZXJEZXZpY2UnKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICAgICAgICBhbGVydChgWW91ciBkZXZpY2UgaGFzIGJlZW4gcmVnaXN0ZXJlZCB0byAke2FyZ3NbMF0uZW1haWx9LmApXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAndHJpZ2dlcicpIHtcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3dlYnNvY2tldC90cmlnZ2VyJywge1xuICAgICAgICAgIGFyZ3NcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgY2xpZW50Lm9uY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogRGlzY29ubmVjdGVkIHRvIGRldmVsb3BtZW50IHNlcnZlci4nKVxuICAgICAgYXV0aFNlbnQgPSBmYWxzZVxuICAgIH1cbiAgICBjbGllbnQuY29ubmVjdChMZWFucGx1bVNvY2tldC5zb2NrZXRIb3N0KVxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFjbGllbnQuY29ubmVjdGVkICYmICFjbGllbnQuY29ubmVjdGluZykge1xuICAgICAgICBjbGllbnQuY29ubmVjdChMZWFucGx1bVNvY2tldC5zb2NrZXRIb3N0KVxuICAgICAgfVxuICAgIH0sIDUwMDApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MZWFucGx1bVNvY2tldC5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5cbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9Db25zdGFudHMnXG5pbXBvcnQgQXJnc0J1aWxkZXIgZnJvbSAnLi9BcmdzQnVpbGRlcidcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJ1xuaW1wb3J0IExvY2FsU3RvcmFnZU1hbmFnZXIgZnJvbSAnLi9Mb2NhbFN0b3JhZ2VNYW5hZ2VyJ1xuaW1wb3J0IExlYW5wbHVtUmVxdWVzdCBmcm9tICcuL0xlYW5wbHVtUmVxdWVzdCdcblxuY29uc3QgQVBQTElDQVRJT05fU0VSVkVSX1BVQkxJQ19LRVkgPVxuICAgICdCSW5XUHBXbnRmUjM5cmdYU1AwNHBxZG1FZERHYTUwejZ6cWJNdnh5eEpDd3pYSXVTcFNoOEM4ODgtQ2ZKODJXRUxsN1hlOGNqQScgK1xuICAgICduZkN0LTN2SzBDaTY4J1xuXG5sZXQgaXNTdWJzY3JpYmVkID0gZmFsc2VcbmxldCBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uID0gbnVsbFxuXG4vKipcbiAqIFB1c2ggTWFuYWdlciBoYW5kbGVzIHRoZSByZWdpc3RyYXRpb24gYW5kIHN1YnNjcmlwdGlvbiBmb3Igd2ViIHB1c2guXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1c2hNYW5hZ2VyIHtcbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHdlYiBwdXNoIGlzIHN1cHBvcnRlZCBpbiB0aGUgYnJvd3Nlci5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiBzdXBwb3J0ZWQsIGVsc2UgZmFsc2UuXG4gICAqL1xuICBzdGF0aWMgaXNXZWJQdXNoU3VwcG9ydGVkKCkge1xuICAgIHJldHVybiBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIgJiYgJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvciAmJlxuICAgICAgICAnUHVzaE1hbmFnZXInIGluIHdpbmRvd1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoZSBicm93c2VyIGlzIHN1YnNjcmliZWQgdG8gd2ViIHB1c2ggbm90aWZpY2F0aW9ucy5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gVHJ1ZSBpZiBzdWJzY3JpYmVkLCBlbHNlIGZhbHNlLlxuICAgKi9cbiAgc3RhdGljIGlzV2ViUHVzaFN1YnNjcmliZWQoKSB7XG4gICAgaWYgKCFQdXNoTWFuYWdlci5pc1dlYlB1c2hTdXBwb3J0ZWQoKSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHJlc29sdmUoZmFsc2UpXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gUHVzaE1hbmFnZXIuZ2V0U2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbigpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8qKiBAbmFtZXNwYWNlIHJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlciBUaGUgcHVzaCBtYW5hZ2VyIG9iamVjdCBvZiB0aGUgYnJvd3Nlci4gKiovXG4gICAgICAgICAgICAgIC8qKiBAbmFtZXNwYWNlIHJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24gKiovXG4gICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKVxuICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzU3Vic2NyaWJlZCA9IHN1YnNjcmlwdGlvbiAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgUHVzaE1hbmFnZXIudXBkYXRlTmV3U3Vic2NyaXB0aW9uT25TZXJ2ZXIoc3Vic2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaXNTdWJzY3JpYmVkKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGZvciBXZWJQdXNoLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgc2VydmljZVdvcmtlclVybCBUaGUgdXJsIHRoYXQgc2VydmVzIHRoZSBzZXJ2aWNlIHdvcmtlclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbiB5b3VyIGRvbWFpbi5cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrICAgICAgICAgVGhlIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCB3aXRoIHJlc3VsdC5cbiAgICogQHJldHVybiB7b2JqZWN0fSBub3RoaW5nXG4gICAqL1xuICBzdGF0aWMgcmVnaXN0ZXIoc2VydmljZVdvcmtlclVybCwgY2FsbGJhY2spIHtcbiAgICBpZiAoIVB1c2hNYW5hZ2VyLmlzV2ViUHVzaFN1cHBvcnRlZCgpKSB7XG4gICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IFB1c2ggbWVzc2FnaW5nIGlzIG5vdCBzdXBwb3J0ZWQuJylcbiAgICAgIHJldHVybiBjYWxsYmFjayhmYWxzZSlcbiAgICB9XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoXG4gICAgICAgIHNlcnZpY2VXb3JrZXJVcmwgPyBzZXJ2aWNlV29ya2VyVXJsIDogJy9zdy5taW4uanMnLCBudWxsKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgICBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uID0gcmVnaXN0cmF0aW9uXG5cbiAgICAgICAgICBsZXQgc2VydmljZVdvcmtlclxuICAgICAgICAgIGlmIChyZWdpc3RyYXRpb24uaW5zdGFsbGluZykge1xuICAgICAgICAgICAgc2VydmljZVdvcmtlciA9IHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nXG4gICAgICAgICAgfSBlbHNlIGlmIChyZWdpc3RyYXRpb24ud2FpdGluZykge1xuICAgICAgICAgICAgc2VydmljZVdvcmtlciA9IHJlZ2lzdHJhdGlvbi53YWl0aW5nXG4gICAgICAgICAgfSBlbHNlIGlmIChyZWdpc3RyYXRpb24uYWN0aXZlKSB7XG4gICAgICAgICAgICBzZXJ2aWNlV29ya2VyID0gcmVnaXN0cmF0aW9uLmFjdGl2ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghc2VydmljZVdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgc3Vic2NyaWJlID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gU2V0IHRoZSBpbml0aWFsIHN1YnNjcmlwdGlvbiB2YWx1ZVxuICAgICAgICAgICAgc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKVxuICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICBpc1N1YnNjcmliZWQgPSAhKHN1YnNjcmlwdGlvbiA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICBpZiAoaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIFB1c2hNYW5hZ2VyLnVwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyKHN1YnNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhpc1N1YnNjcmliZWQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZXJ2aWNlV29ya2VyLnN0YXRlID09PSAnYWN0aXZhdGVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmliZSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VydmljZVdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdzdGF0ZWNoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5zdGF0ZSAhPT0gJ2FjdGl2YXRlZCcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN1YnNjcmliZSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBTZXJ2aWNlIFdvcmtlciBFcnJvcjogJywgZXJyb3IpXG4gICAgICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRoZSB1c2VyKGJyb3dzZXIpIHRvIHB1c2guXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFJlc29sdmVzIGlmIHN1YnNjcmlwdGlvbiBzdWNjZXNzZnVsLCBvdGhlcndpc2UgcmVqZWN0cy5cbiAgICovXG4gIHN0YXRpYyBzdWJzY3JpYmVVc2VyKCkge1xuICAgIGNvbnN0IGFwcGxpY2F0aW9uU2VydmVyS2V5ID0gUHVzaE1hbmFnZXIudXJsQjY0VG9VaW50OEFycmF5KEFQUExJQ0FUSU9OX1NFUlZFUl9QVUJMSUNfS0VZKVxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIC8qKiBAbmFtZXNwYWNlIHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuc3Vic2NyaWJlIFN1YnNjcmliZSB0byBwdXNoLiAqKi9cbiAgICAgIHJldHVybiBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLnN1YnNjcmliZSh7XG4gICAgICAgIHVzZXJWaXNpYmxlT25seTogdHJ1ZSxcbiAgICAgICAgYXBwbGljYXRpb25TZXJ2ZXJLZXlcbiAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgIFB1c2hNYW5hZ2VyLnVwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyKHN1YnNjcmlwdGlvbilcbiAgICAgICAgICAgICAgaXNTdWJzY3JpYmVkID0gdHJ1ZVxuICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShpc1N1YnNjcmliZWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KGBMZWFucGx1bTogRmFpbGVkIHRvIHN1YnNjcmliZSB0aGUgdXNlcjogJHtlcnJ9YClcbiAgICAgICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgdGhlIHVzZXIoYnJvd3NlcikgZnJvbSBwdXNoLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXNvbHZlcyBpZiB1bnN1YnNjcmliZWQsIG90aGVyd2lzZSByZWplY3RzLlxuICAgKi9cbiAgc3RhdGljIHVuc3Vic2NyaWJlVXNlcigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgUHVzaE1hbmFnZXIuaXNXZWJQdXNoU3Vic2NyaWJlZCgpLnRoZW4oKHN1YnNjcmliZWQpID0+IHtcbiAgICAgICAgaWYgKCFzdWJzY3JpYmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoKVxuICAgICAgICB9XG5cbiAgICAgICAgc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAvKiogQG5hbWVzcGFjZSBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLnVuc3Vic2NyaWJlIFVuc3Vic2NyaWJlIHRvXG4gICAgICAgICAgICAgICAgICogIHB1c2guICoqL1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiByZWplY3QoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICByZWplY3QoYExlYW5wbHVtOiBFcnJvciB1bnN1YnNjcmliaW5nOiAke2Vycm9yfWApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oc3VjY2Vzcykge1xuICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiByZWplY3QoKVxuICAgICAgICAgICAgfSlcbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICByZXR1cm4gcmVqZWN0KClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBvYmplY3QgZnJvbSBicm93c2VyLlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IFJldHVybnMgdGhlIHJlZ2lzdHJhdGlvbiBvciBudWxsLlxuICAgKi9cbiAgc3RhdGljIGdldFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbikge1xuICAgICAgICByZXNvbHZlKHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogQG5hbWVzcGFjZSBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5nZXRSZWdpc3RyYXRpb24gUmV0cmlldmVzIHRoZSAgcHVzaCByZWdpc3RyYXRpb25cbiAgICAgICAgICogZnJvbSB0aGUgYnJvd3Nlci4gKiovXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmdldFJlZ2lzdHJhdGlvbigpLnRoZW4oKHJlZ2lzdHJhdGlvbikgPT4ge1xuICAgICAgICAgIHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24gPSByZWdpc3RyYXRpb25cbiAgICAgICAgICByZXNvbHZlKHJlZ2lzdHJhdGlvbilcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEVuY29kZXMgYSBiYXNlNjQgdXJsIHN0cmluZyB0byBhbiB1aW50OCBhcnJhcnkuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gYmFzZTY0U3RyaW5nIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7VWludDhBcnJheX0gICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHN0YXRpYyB1cmxCNjRUb1VpbnQ4QXJyYXkoYmFzZTY0U3RyaW5nKSB7XG4gICAgY29uc3QgcGFkZGluZyA9ICc9Jy5yZXBlYXQoKDQgLSBiYXNlNjRTdHJpbmcubGVuZ3RoICUgNCkgJSA0KVxuICAgIGNvbnN0IGJhc2U2NCA9IChiYXNlNjRTdHJpbmcgKyBwYWRkaW5nKVxuICAgICAgICAucmVwbGFjZSgvLS9nLCAnKycpXG4gICAgICAgIC5yZXBsYWNlKC9fL2csICcvJylcblxuICAgIGNvbnN0IHJhd0RhdGEgPSB3aW5kb3cuYXRvYihiYXNlNjQpXG4gICAgY29uc3Qgb3V0cHV0QXJyYXkgPSBuZXcgVWludDhBcnJheShyYXdEYXRhLmxlbmd0aClcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmF3RGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgb3V0cHV0QXJyYXlbaV0gPSByYXdEYXRhLmNoYXJDb2RlQXQoaSlcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dEFycmF5XG4gIH1cblxuICAvKipcbiAgICogW3ByZXBhcmVTdWJzY3JpcHRpb24gZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge29iamVjdH0gc3Vic2NyaXB0aW9uIFRoZSByYXcgc3Vic2NyaXB0aW9uIGZyb20gYnJvd3Nlci5cbiAgICogQHBhcmFtICB7ZnVuY3Rpb259IHN1YnNjcmlwdGlvbi5nZXRLZXkgVGhlIHN1YnNjcmlwdGlvbiBrZXkuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gc3Vic2NyaXB0aW9uLmVuZHBvaW50IFRoZSBzdWJzY3JpcHRpb24ga2V5LlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBzdWJzY3JpcHRpb24gb2JqZWN0IHRvIGJlIHNlbnQgdG8gc2VydmVyLlxuICAgKi9cbiAgc3RhdGljIHByZXBhcmVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgbGV0IGtleSA9IHN1YnNjcmlwdGlvbi5nZXRLZXkgPyBzdWJzY3JpcHRpb24uZ2V0S2V5KCdwMjU2ZGgnKSA6ICcnXG4gICAgbGV0IGF1dGggPSBzdWJzY3JpcHRpb24uZ2V0S2V5ID8gc3Vic2NyaXB0aW9uLmdldEtleSgnYXV0aCcpIDogJydcbiAgICAvLyBub2luc3BlY3Rpb24gRVM2TW9kdWxlc0RlcGVuZGVuY2llc1xuICAgIGxldCBrZXlBc2NpaSA9IGJ0b2EoUmVmbGVjdC5hcHBseShTdHJpbmcuZnJvbUNoYXJDb2RlLCBudWxsLCBuZXcgVWludDhBcnJheShrZXkpKSlcbiAgICAvLyBub2luc3BlY3Rpb24gRVM2TW9kdWxlc0RlcGVuZGVuY2llc1xuICAgIGxldCBhdXRoQXNjaWkgPSBidG9hKFJlZmxlY3QuYXBwbHkoU3RyaW5nLmZyb21DaGFyQ29kZSwgbnVsbCwgbmV3IFVpbnQ4QXJyYXkoYXV0aCkpKVxuICAgIHJldHVybiB7XG4gICAgICBlbmRwb2ludDogc3Vic2NyaXB0aW9uLmVuZHBvaW50LFxuICAgICAga2V5OiBrZXlBc2NpaSxcbiAgICAgIGF1dGg6IGF1dGhBc2NpaVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgbmV3IHN1YnNjcmlwdGlvbiBvYmplY3QgdG8gdGhlIExlYW5wbHVtIHNlcnZlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHN1YnNjcmlwdGlvbiBUaGUgc3Vic2NyaXB0aW9uLlxuICAgKi9cbiAgc3RhdGljIHVwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyKHN1YnNjcmlwdGlvbikge1xuICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgIGxldCBwcmVwYXJlZFN1YnNjcmlwdGlvbiA9IFB1c2hNYW5hZ2VyLnByZXBhcmVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKVxuICAgICAgbGV0IHByZXBhcmVkU3Vic2NyaXB0aW9uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocHJlcGFyZWRTdWJzY3JpcHRpb24pXG4gICAgICBsZXQgZXhpc3RpbmdTdWJzY3JpcHRpb25TdHJpbmcgPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoXG4gICAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5QVVNIX1NVQlNDUklQVElPTilcbiAgICAgIGlmICghaXNFcXVhbChleGlzdGluZ1N1YnNjcmlwdGlvblN0cmluZywgcHJlcGFyZWRTdWJzY3JpcHRpb25TdHJpbmcpKSB7XG4gICAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuUFVTSF9TVUJTQ1JJUFRJT04sXG4gICAgICAgICAgICBwcmVwYXJlZFN1YnNjcmlwdGlvblN0cmluZylcbiAgICAgICAgUHVzaE1hbmFnZXIuc2V0U3Vic2NyaXB0aW9uKHByZXBhcmVkU3Vic2NyaXB0aW9uU3RyaW5nKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHRoZSBzdWJzY3JpcHRpb24gdG8gdGhlIExlYW5wbHVtIHNlcnZlci5cbiAgICogQHBhcmFtIHtTdHJpbmcvT2JqZWN0fSBzdWJzY3JpcHRpb24gVGhlIHN1YnNjcmlwdGlvbiBzdHJpbmcuXG4gICAqL1xuICBzdGF0aWMgc2V0U3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbikge1xuICAgIGlmICghc3Vic2NyaXB0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuU0VUX0RFVklDRV9BVFRSSUJVVEVTLFxuICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKS5hZGQoQ29uc3RhbnRzLlBBUkFNUy5XRUJfUFVTSF9TVUJTQ1JJUFRJT04sXG4gICAgICAgICAgICBzdWJzY3JpcHRpb24pLCB7XG4gICAgICAgICAgcXVldWVkOiBmYWxzZSxcbiAgICAgICAgICBzZW5kTm93OiB0cnVlXG4gICAgICAgIH1cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9QdXNoTWFuYWdlci5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vQ29uc3RhbnRzJ1xuaW1wb3J0IEludGVybmFsU3RhdGUgZnJvbSAnLi9JbnRlcm5hbFN0YXRlJ1xuaW1wb3J0IEFyZ3NCdWlsZGVyIGZyb20gJy4vQXJnc0J1aWxkZXInXG5pbXBvcnQgQnJvd3NlckRldGVjdG9yIGZyb20gJy4vQnJvd3NlckRldGVjdG9yJ1xuaW1wb3J0IFB1c2hNYW5hZ2VyIGZyb20gJy4vUHVzaE1hbmFnZXInXG5pbXBvcnQgQWN0aW9uTWFuYWdlciBmcm9tICcuL0FjdGlvbk1hbmFnZXInXG5pbXBvcnQgTG9jYWxTdG9yYWdlTWFuYWdlciBmcm9tICcuL0xvY2FsU3RvcmFnZU1hbmFnZXInXG5pbXBvcnQgVmFyQ2FjaGUgZnJvbSAnLi9WYXJDYWNoZSdcbmltcG9ydCBMZWFucGx1bVJlcXVlc3QgZnJvbSAnLi9MZWFucGx1bVJlcXVlc3QnXG5pbXBvcnQgTGVhbnBsdW1Tb2NrZXQgZnJvbSAnLi9MZWFucGx1bVNvY2tldCdcbmltcG9ydCBldmVudHMgZnJvbSAnLi9FdmVudHMnXG5cbmxldCBfYnJvd3NlckRldGVjdG9yID0gbmV3IEJyb3dzZXJEZXRlY3RvcigpXG5cbi8qKlxuICogQHByZXNlcnZlIExlYW5wbHVtIEphdmFzY3JpcHQgU0RLLlxuICogQ29weXJpZ2h0IDIwMTYsIExlYW5wbHVtLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogWW91IG1heSBub3QgZGlzdHJpYnV0ZSB0aGlzIHNvdXJjZSBjb2RlIHdpdGhvdXQgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uXG4gKiBmcm9tIExlYW5wbHVtLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWFucGx1bSB7XG5cbiAgc3RhdGljIHNldEFwaVBhdGgoYXBpUGF0aCkge1xuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LmFwaVBhdGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBMZWFucGx1bVJlcXVlc3QuYXBpUGF0aCA9IGFwaVBhdGhcbiAgfVxuXG4gIHN0YXRpYyBzZXRFbWFpbChlbWFpbCkge1xuICAgIExlYW5wbHVtLl9lbWFpbCA9IGVtYWlsXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgbmV0d29yayB0aW1lb3V0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Vjb25kcyBUaGUgdGltZW91dCBpbiBzZWNvbmRzLlxuICAgKi9cbiAgc3RhdGljIHNldE5ldHdvcmtUaW1lb3V0KHNlY29uZHMpIHtcbiAgICBMZWFucGx1bVJlcXVlc3Quc2V0TmV0d29ya1RpbWVvdXQoc2Vjb25kcylcbiAgfVxuXG4gIHN0YXRpYyBzZXRWYXJpYW50RGVidWdJbmZvRW5hYmxlZCh2YXJpYW50RGVidWdJbmZvRW5hYmxlZCkge1xuICAgIEludGVybmFsU3RhdGUuc2V0VmFyaWFudERlYnVnSW5mb0VuYWJsZWQodmFyaWFudERlYnVnSW5mb0VuYWJsZWQpXG4gIH07XG5cbiAgc3RhdGljIGdldFZhcmlhbnREZWJ1Z0luZm8oKSB7XG4gICAgcmV0dXJuIFZhckNhY2hlLmdldFZhcmlhbnREZWJ1Z0luZm8oKVxuICB9O1xuXG4gIHN0YXRpYyBzZXRBcHBJZEZvckRldmVsb3BtZW50TW9kZShhcHBJZCwgYWNjZXNzS2V5KSB7XG4gICAgTGVhbnBsdW1SZXF1ZXN0LmFwcElkID0gYXBwSWRcbiAgICBMZWFucGx1bVJlcXVlc3QuY2xpZW50S2V5ID0gYWNjZXNzS2V5XG4gICAgSW50ZXJuYWxTdGF0ZS5kZXZNb2RlID0gdHJ1ZVxuICB9XG5cbiAgc3RhdGljIHNldEFwcElkRm9yUHJvZHVjdGlvbk1vZGUoYXBwSWQsIGFjY2Vzc0tleSkge1xuICAgIExlYW5wbHVtUmVxdWVzdC5hcHBJZCA9IGFwcElkXG4gICAgTGVhbnBsdW1SZXF1ZXN0LmNsaWVudEtleSA9IGFjY2Vzc0tleVxuICAgIEludGVybmFsU3RhdGUuZGV2TW9kZSA9IGZhbHNlXG4gIH1cblxuICBzdGF0aWMgc2V0U29ja2V0SG9zdChob3N0KSB7XG4gICAgTGVhbnBsdW1Tb2NrZXQuc29ja2V0SG9zdCA9IGhvc3RcbiAgfVxuXG4gIHN0YXRpYyBzZXREZXZpY2VJZChkZXZpY2VJZCkge1xuICAgIExlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZCA9IGRldmljZUlkXG4gIH1cblxuICBzdGF0aWMgc2V0QXBwVmVyc2lvbih2ZXJzaW9uTmFtZSkge1xuICAgIExlYW5wbHVtUmVxdWVzdC52ZXJzaW9uTmFtZSA9IHZlcnNpb25OYW1lXG4gIH1cblxuICBzdGF0aWMgc2V0RGV2aWNlTmFtZShkZXZpY2VOYW1lKSB7XG4gICAgTGVhbnBsdW0uX2RldmljZU5hbWUgPSBkZXZpY2VOYW1lXG4gIH1cblxuICBzdGF0aWMgc2V0RGV2aWNlTW9kZWwoZGV2aWNlTW9kZWwpIHtcbiAgICBMZWFucGx1bS5fZGV2aWNlTW9kZWwgPSBkZXZpY2VNb2RlbFxuICB9XG5cbiAgc3RhdGljIHNldFN5c3RlbU5hbWUoc3lzdGVtTmFtZSkge1xuICAgIExlYW5wbHVtLl9zeXN0ZW1OYW1lID0gc3lzdGVtTmFtZVxuICB9XG5cbiAgc3RhdGljIHNldFN5c3RlbVZlcnNpb24oc3lzdGVtVmVyc2lvbikge1xuICAgIExlYW5wbHVtLl9zeXN0ZW1WZXJzaW9uID0gc3lzdGVtVmVyc2lvblxuICB9XG5cbiAgc3RhdGljIHNldFZhcmlhYmxlcyh2YXJpYWJsZXMpIHtcbiAgICBWYXJDYWNoZS5zZXRWYXJpYWJsZXModmFyaWFibGVzKVxuICB9XG5cbiAgc3RhdGljIHNldFJlcXVlc3RCYXRjaGluZyhiYXRjaEVuYWJsZWQsIGNvb2xkb3duU2Vjb25kcykge1xuICAgIExlYW5wbHVtUmVxdWVzdC5iYXRjaEVuYWJsZWQgPSBiYXRjaEVuYWJsZWRcbiAgICBMZWFucGx1bVJlcXVlc3QuYmF0Y2hDb29sZG93biA9IGNvb2xkb3duU2Vjb25kc1xuICB9XG5cbiAgc3RhdGljIGdldFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0VmFyaWFibGVzKClcbiAgfVxuXG4gIHN0YXRpYyBnZXRWYXJpYWJsZSguLi5hcmdzKSB7XG4gICAgbGV0IGN1cnJlbnQgPSBMZWFucGx1bS5nZXRWYXJpYWJsZXMoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgY3VycmVudCA9IGN1cnJlbnRbYXJnc1tpXV1cbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRcbiAgfVxuXG4gIHN0YXRpYyBnZXRWYXJpYW50cygpIHtcbiAgICByZXR1cm4gVmFyQ2FjaGUudmFyaWFudHMgfHwgW11cbiAgfVxuXG4gIHN0YXRpYyBhZGRTdGFydFJlc3BvbnNlSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgSW50ZXJuYWxTdGF0ZS5hZGRTdGFydFJlc3BvbnNlSGFuZGxlcihoYW5kbGVyKVxuICB9XG5cbiAgc3RhdGljIGFkZFZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBJbnRlcm5hbFN0YXRlLmFkZFZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpXG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlU3RhcnRSZXNwb25zZUhhbmRsZXIoaGFuZGxlcikge1xuICAgIEludGVybmFsU3RhdGUucmVtb3ZlU3RhcnRSZXNwb25zZUhhbmRsZXIoaGFuZGxlcilcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgSW50ZXJuYWxTdGF0ZS5yZW1vdmVWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcihoYW5kbGVyKVxuICB9XG5cbiAgc3RhdGljIGZvcmNlQ29udGVudFVwZGF0ZShjYWxsYmFjaykge1xuICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLkdFVF9WQVJTLFxuICAgICAgbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkNMVURFX0RFRkFVTFRTLCBmYWxzZSlcbiAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkNMVURFX1ZBUklBTlRfREVCVUdfSU5GTywgSW50ZXJuYWxTdGF0ZS52YXJpYW50RGVidWdJbmZvRW5hYmxlZCksIHtcbiAgICAgICAgcXVldWVkOiBmYWxzZSxcbiAgICAgICAgc2VuZE5vdzogdHJ1ZSxcbiAgICAgICAgcmVzcG9uc2U6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIGxldCBnZXRWYXJzUmVzcG9uc2UgPSBMZWFucGx1bVJlcXVlc3QuZ2V0TGFzdFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICBsZXQgaXNTdWNjZXNzID0gTGVhbnBsdW1SZXF1ZXN0LmlzUmVzcG9uc2VTdWNjZXNzKGdldFZhcnNSZXNwb25zZSk7XG4gICAgICAgICAgaWYgKGlzU3VjY2Vzcykge1xuICAgICAgICAgICAgVmFyQ2FjaGUuYXBwbHlEaWZmcyhcbiAgICAgICAgICAgICAgZ2V0VmFyc1Jlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUlNdLFxuICAgICAgICAgICAgICBnZXRWYXJzUmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuVkFSSUFOVFNdLFxuICAgICAgICAgICAgICBnZXRWYXJzUmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuQUNUSU9OX01FVEFEQVRBXSlcbiAgICAgICAgICAgIFZhckNhY2hlLnZhcmlhbnREZWJ1Z0luZm8gPSBnZXRWYXJzUmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuVkFSSUFOVF9ERUJVR19JTkZPXVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGlzU3VjY2Vzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBzdGFydCh1c2VySWQsIHVzZXJBdHRyaWJ1dGVzLCBjYWxsYmFjaykge1xuICAgIC8vIE92ZXJsb2Fkcy5cbiAgICBpZiAodHlwZW9mIHVzZXJJZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSB1c2VySWRcbiAgICAgIHVzZXJBdHRyaWJ1dGVzID0ge31cbiAgICAgIHVzZXJJZCA9IG51bGxcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB1c2VySWQgPT09ICdvYmplY3QnICYmIHVzZXJJZCAhPT0gbnVsbCAmJlxuICAgICAgICB1c2VySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2FsbGJhY2sgPSB1c2VyQXR0cmlidXRlc1xuICAgICAgdXNlckF0dHJpYnV0ZXMgPSB1c2VySWRcbiAgICAgIHVzZXJJZCA9IG51bGxcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB1c2VyQXR0cmlidXRlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSB1c2VyQXR0cmlidXRlc1xuICAgICAgdXNlckF0dHJpYnV0ZXMgPSB7fVxuICAgIH1cbiAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gdXNlcklkXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBMZWFucGx1bS5hZGRTdGFydFJlc3BvbnNlSGFuZGxlcihjYWxsYmFjaylcbiAgICB9XG5cbiAgICBWYXJDYWNoZS5vblVwZGF0ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICBJbnRlcm5hbFN0YXRlLnRyaWdnZXJWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMoKVxuICAgIH1cblxuICAgIGxldCBhcmdzID0gbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlVTRVJfQVRUUklCVVRFUywgSlNPTi5zdHJpbmdpZnkodXNlckF0dHJpYnV0ZXMpKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQ09VTlRSWSwgQ29uc3RhbnRzLlZBTFVFUy5ERVRFQ1QpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5SRUdJT04sIENvbnN0YW50cy5WQUxVRVMuREVURUNUKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQ0lUWSwgQ29uc3RhbnRzLlZBTFVFUy5ERVRFQ1QpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5MT0NBVElPTiwgQ29uc3RhbnRzLlZBTFVFUy5ERVRFQ1QpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5TWVNURU1fTkFNRSwgTGVhbnBsdW0uX3N5c3RlbU5hbWUgfHwgX2Jyb3dzZXJEZXRlY3Rvci5PUylcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlNZU1RFTV9WRVJTSU9OLCAoTGVhbnBsdW0uX3N5c3RlbVZlcnNpb24gfHwgJycpLnRvU3RyaW5nKCkpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5CUk9XU0VSX05BTUUsIF9icm93c2VyRGV0ZWN0b3IuYnJvd3NlcilcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkJST1dTRVJfVkVSU0lPTiwgX2Jyb3dzZXJEZXRlY3Rvci52ZXJzaW9uLnRvU3RyaW5nKCkpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5MT0NBTEUsIENvbnN0YW50cy5WQUxVRVMuREVURUNUKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuREVWSUNFX05BTUUsIExlYW5wbHVtLl9kZXZpY2VOYW1lIHx8XG4gICAgICAgICAgICBgJHtfYnJvd3NlckRldGVjdG9yLmJyb3dzZXJ9ICR7X2Jyb3dzZXJEZXRlY3Rvci52ZXJzaW9ufWApXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5ERVZJQ0VfTU9ERUwsIExlYW5wbHVtLl9kZXZpY2VNb2RlbCB8fCAnV2ViIEJyb3dzZXInKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuSU5DTFVERV9ERUZBVUxUUywgZmFsc2UpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkNMVURFX1ZBUklBTlRfREVCVUdfSU5GTywgSW50ZXJuYWxTdGF0ZS52YXJpYW50RGVidWdJbmZvRW5hYmxlZCk7XG5cbiAgICAvLyBJc3N1ZSByZXF1ZXN0LlxuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlNUQVJULCBhcmdzLCB7XG4gICAgICBxdWV1ZWQ6IHRydWUsXG4gICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgcmVzcG9uc2U6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIEludGVybmFsU3RhdGUuaGFzU3RhcnRlZCA9IHRydWVcbiAgICAgICAgbGV0IHN0YXJ0UmVzcG9uc2UgPSBMZWFucGx1bVJlcXVlc3QuZ2V0TGFzdFJlc3BvbnNlKHJlc3BvbnNlKVxuICAgICAgICBpZiAoTGVhbnBsdW1SZXF1ZXN0LmlzUmVzcG9uc2VTdWNjZXNzKHN0YXJ0UmVzcG9uc2UpKSB7XG4gICAgICAgICAgSW50ZXJuYWxTdGF0ZS5zdGFydFN1Y2Nlc3NmdWwgPSB0cnVlXG4gICAgICAgICAgaWYgKEludGVybmFsU3RhdGUuZGV2TW9kZSkge1xuICAgICAgICAgICAgbGV0IGxhdGVzdFZlcnNpb24gPSBzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLkxBVEVTVF9WRVJTSU9OXVxuICAgICAgICAgICAgaWYgKGxhdGVzdFZlcnNpb24pIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYEEgbmV3ZXIgdmVyc2lvbiBvZiBMZWFucGx1bSwgJHtsYXRlc3RWZXJzaW9ufSwgaXMgYXZhaWxhYmxlLiBHbyB0b2AgK1xuICAgICAgICAgICAgICAgICAgJ2xlYW5wbHVtLmNvbSB0byBkb3dubG9hZCBpdC4nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgTGVhbnBsdW1Tb2NrZXQuY29ubmVjdCgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgVmFyQ2FjaGUuYXBwbHlEaWZmcyhcbiAgICAgICAgICAgICAgc3RhcnRSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJTXSxcbiAgICAgICAgICAgICAgc3RhcnRSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJJQU5UU10sXG4gICAgICAgICAgICAgIHN0YXJ0UmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuQUNUSU9OX01FVEFEQVRBXSk7XG4gICAgICAgICAgVmFyQ2FjaGUudmFyaWFudERlYnVnSW5mbyA9IHN0YXJ0UmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuVkFSSUFOVF9ERUJVR19JTkZPXVxuICAgICAgICAgIFZhckNhY2hlLnRva2VuID0gc3RhcnRSZXNwb25zZVtDb25zdGFudHMuS0VZUy5UT0tFTl1cblxuICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdzdGFydC9tZXNzYWdlcycsIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBMZWFucGx1bS5nZXRGaWx0ZXJlZFJlc3VsdHMoc3RhcnRSZXNwb25zZVtDb25zdGFudHMuS0VZUy5NRVNTQUdFU10sIFsnc3RhcnQnLCdyZXN1bWUnXSlcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEludGVybmFsU3RhdGUuc3RhcnRTdWNjZXNzZnVsID0gZmFsc2VcbiAgICAgICAgICBWYXJDYWNoZS5sb2FkRGlmZnMoKVxuICAgICAgICB9XG4gICAgICAgIEludGVybmFsU3RhdGUudHJpZ2dlclN0YXJ0SGFuZGxlcnMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgLyoqXG4gICAqIHJldHVybiBhbiBhcnJheSBvZiBmaWx0ZXJlZCBtZXNzYWdlXG4gICAqIEBwYXJhbSBtZXNzYWdlcyB7T2JqZWN0fSB0aGUgbWVzc2FnZSByZXNwb25zZSBmcm9tIGxwIHNlcnZlclxuICAgKiBAcGFyYW0gdHJpZ2dlciB7U3RyaW5nfSBvciB7YXJyYXl9IHRoZSB0cmlnZ2VyIHdlIHdhbnQgdG8gY2hlY2sgYWdhaW5zdFxuICAgKiBAcGFyYW0gdmVyYiB7U3RyaW5nfSBuZWNlc3NhcnkgZm9yIHNvbWUgZXZlbnRcbiAgICogQHBhcmFtIG5vdW4ge1N0cmluZ30gbmVjZXNzYXJ5IGZvciBzb21lIGV2ZW50XG4gICAqIEBwYXJhbSBwYXJhbXMge09iamVjdH0geyAgbmVjZXNzYXJ5IGZvciBzb21lIGV2ZW50XG4gICAqICBmcm9tPzpzdHJpbmcsXG4gICAqICB0bz86c3RyaW5nLFxuICAgKiAgcGFyYW1WYWx1ZT86U3RyaW5nLFxuICAgKiAgcGFyYW1OYW1lPzpTdHJpbmcsXG4gICAqIH1cbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIGdldEZpbHRlcmVkUmVzdWx0cyhtZXNzYWdlcz17fSwgdHJpZ2dlcj0nJywgdmVyYj0nJywgbm91bj0nJywgcGFyYW1zPXt9KSB7XG4gICAgaWYobWVzc2FnZXMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgICByZXR1cm4gQWN0aW9uTWFuYWdlci5maWx0ZXJNZXNzYWdlcyhtZXNzYWdlcywgdHJpZ2dlciwgdmVyYiwgbm91biwgcGFyYW1zKVxuICB9XG4gIHN0YXRpYyBzdGFydEZyb21DYWNoZSh1c2VySWQsIHVzZXJBdHRyaWJ1dGVzLCBjYWxsYmFjaykge1xuICAgIC8vIE92ZXJsb2Fkcy5cbiAgICBpZiAodHlwZW9mIHVzZXJJZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSB1c2VySWRcbiAgICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEFzc2lnbm1lbnRcbiAgICAgIHVzZXJBdHRyaWJ1dGVzID0ge31cbiAgICAgIHVzZXJJZCA9IG51bGxcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB1c2VySWQgPT09ICdvYmplY3QnICYmIHVzZXJJZCAhPT0gbnVsbCAmJlxuICAgICAgICB1c2VySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2FsbGJhY2sgPSB1c2VyQXR0cmlidXRlc1xuICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkQXNzaWdubWVudFxuICAgICAgdXNlckF0dHJpYnV0ZXMgPSB1c2VySWRcbiAgICAgIHVzZXJJZCA9IG51bGxcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB1c2VyQXR0cmlidXRlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSB1c2VyQXR0cmlidXRlc1xuICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkQXNzaWdubWVudFxuICAgICAgdXNlckF0dHJpYnV0ZXMgPSB7fVxuICAgIH1cbiAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gdXNlcklkXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBMZWFucGx1bS5hZGRTdGFydFJlc3BvbnNlSGFuZGxlcihjYWxsYmFjaylcbiAgICB9XG5cbiAgICBJbnRlcm5hbFN0YXRlLmhhc1N0YXJ0ZWQgPSB0cnVlXG4gICAgSW50ZXJuYWxTdGF0ZS5zdGFydFN1Y2Nlc3NmdWwgPSB0cnVlXG4gICAgaWYgKEludGVybmFsU3RhdGUuZGV2TW9kZSkge1xuICAgICAgTGVhbnBsdW1Tb2NrZXQuY29ubmVjdCgpXG4gICAgfVxuICAgIFZhckNhY2hlLmxvYWREaWZmcygpXG4gICAgSW50ZXJuYWxTdGF0ZS50cmlnZ2VyU3RhcnRIYW5kbGVycygpXG4gIH1cblxuICBzdGF0aWMgc3RvcCgpIHtcbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5TVE9QLCB1bmRlZmluZWQsIHtcbiAgICAgIHNlbmROb3c6IHRydWUsXG4gICAgICBxdWV1ZWQ6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIHBhdXNlU2Vzc2lvbigpIHtcbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5QQVVTRV9TRVNTSU9OLCB1bmRlZmluZWQsIHtcbiAgICAgIHNlbmROb3c6IHRydWUsXG4gICAgICBxdWV1ZWQ6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIHJlc3VtZVNlc3Npb24oKSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuUkVTVU1FX1NFU1NJT04sIHVuZGVmaW5lZCwge1xuICAgICAgc2VuZE5vdzogdHJ1ZSxcbiAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgcGF1c2VTdGF0ZSgpIHtcbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5QQVVTRV9TVEFURSwgdW5kZWZpbmVkLCB7XG4gICAgICBxdWV1ZWQ6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIHJlc3VtZVN0YXRlKCkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlJFU1VNRV9TVEFURSwgdW5kZWZpbmVkLCB7XG4gICAgICBxdWV1ZWQ6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIHNldFVzZXJJZCh1c2VySWQpIHtcbiAgICBMZWFucGx1bS5zZXRVc2VyQXR0cmlidXRlcyh1c2VySWQpXG4gIH1cblxuICBzdGF0aWMgc2V0VXNlckF0dHJpYnV0ZXModXNlcklkLCB1c2VyQXR0cmlidXRlcykge1xuICAgIGlmICh1c2VyQXR0cmlidXRlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHVzZXJJZCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdXNlckF0dHJpYnV0ZXMgPSB1c2VySWRcbiAgICAgICAgdXNlcklkID0gdW5kZWZpbmVkXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB1c2VySWQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogc2V0VXNlckF0dHJpYnV0ZXMgZXhwZWN0cyBhIHN0cmluZyBvciBhbiAnICtcbiAgICAgICAgICAgICdvYmplY3QnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuU0VUX1VTRVJfQVRUUklCVVRFUyxcbiAgICAgICAgbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5VU0VSX0FUVFJJQlVURVMsXG4gICAgICAgICAgICAgICAgdXNlckF0dHJpYnV0ZXMgPyBKU09OLnN0cmluZ2lmeSh1c2VyQXR0cmlidXRlcykgOiB1bmRlZmluZWQpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuTkVXX1VTRVJfSUQsIHVzZXJJZCksIHtcbiAgICAgICAgICBxdWV1ZWQ6IHRydWVcbiAgICAgICAgfSlcbiAgICBpZiAodXNlcklkKSB7XG4gICAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gdXNlcklkXG4gICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlVTRVJfSUQsIExlYW5wbHVtUmVxdWVzdC51c2VySWQpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldEZpbGVVcmwoZmlsZU5hbWUpIHtcbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgcmV0dXJuIExlYW5wbHVtUmVxdWVzdFxuICAgICAgICAuZ2VuZXJhdGVSZXF1ZXN0VXJsKFxuICAgICAgICAgIENvbnN0YW50cy5NRVRIT0RTLkRPV05MT0FEX0ZJTEUsXG4gICAgICAgICAgbmV3IEFyZ3NCdWlsZGVyKCkuYWRkKENvbnN0YW50cy5QQVJBTVMuRklMRU5BTUUsIGZpbGVOYW1lKVxuICAgICAgICApXG4gIH1cblxuICBzdGF0aWMgdHJhY2tNZXNzYWdlKGV2ZW50LCBtZXNzYWdlSWQpIHtcbiAgICBpZihldmVudCA9PT0gJycpIHtcbiAgICAgIFZhckNhY2hlLmFkZE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZCkgLy8gdHJhY2sgdmlldyB0cmFjayBldmVudCBpcyAnJyBha2EgJ1ZpZXcnXG4gICAgfVxuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5UUkFDSyxcbiAgICAgICAgbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5FVkVOVCwgZXZlbnQpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuTUVTU0FHRV9JRCwgbWVzc2FnZUlkKSwge1xuICAgICAgICAgICAgcXVldWVkOiB0cnVlXG4gICAgICAgIH0pXG4gIH1cblxuICBzdGF0aWMgdHJhY2soZXZlbnQsIHZhbHVlLCBpbmZvLCBwYXJhbXMpIHtcbiAgICAvLyBPdmVybG9hZHMuXG4gICAgLy8gb2JqZWN0ICYmICFudWxsICYmICF1bmRlZmluZWQgLT4gcGFyYW1zXG4gICAgLy8gc3RyaW5nIC0+IGluZm8sIHBhcmFtc1xuICAgIC8vICosIG9iamVjdCAmJiAhbnVsbCAmJiAhdW5kZWZpbmVkIC0+IHZhbHVlLCBwYXJhbXNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMgPSB2YWx1ZVxuICAgICAgaW5mbyA9IHVuZGVmaW5lZFxuICAgICAgdmFsdWUgPSB1bmRlZmluZWRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmFtcyA9IGluZm9cbiAgICAgIGluZm8gPSB2YWx1ZVxuICAgICAgdmFsdWUgPSB1bmRlZmluZWRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbmZvID09PSAnb2JqZWN0JyAmJiBpbmZvICE9PSBudWxsICYmIGluZm8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zID0gaW5mb1xuICAgICAgaW5mbyA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGV2ZW50cy5wdWJsaXNoKCd0cmFjaycsIHtcbiAgICAgIGV2ZW50LFxuICAgICAgcGFyYW1zXG4gICAgfSlcblxuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlRSQUNLLFxuICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkVWRU5ULCBldmVudClcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5WQUxVRSwgdmFsdWUgfHwgMC4wKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklORk8sIGluZm8pXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuUEFSQU1TLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKSwge1xuICAgICAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgICAgICB9KVxuICB9XG5cbiAgc3RhdGljIGFkdmFuY2VUbyhzdGF0ZSwgaW5mbywgcGFyYW1zKSB7XG4gICAgLy8gT3ZlcmxvYWRzLlxuICAgIC8vIHN0cmluZ3xudWxsfHVuZGVmaW5lZCwgKiAtPiBpbmZvLCBwYXJhbXNcbiAgICAvLyBvYmplY3QgJiYgIW51bGwgJiYgIXVuZGVmaW5lZCAtPiBwYXJhbXNcbiAgICBpZiAodHlwZW9mIGluZm8gPT09ICdvYmplY3QnICYmIGluZm8gIT09IG51bGwgJiYgaW5mbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMgPSBpbmZvXG4gICAgICBpbmZvID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuQURWQU5DRSxcbiAgICAgICAgbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuU1RBVEUsIHN0YXRlKVxuICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkZPLCBpbmZvKVxuICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5QQVJBTVMsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpLCB7XG4gICAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB3ZWIgcHVzaCBpcyBzdXBwb3J0ZWQgaW4gdGhlIGJyb3dzZXIuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IFRydWUgaWYgc3VwcG9ydGVkLCBlbHNlIGZhbHNlLlxuICAgKi9cbiAgc3RhdGljIGlzV2ViUHVzaFN1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gUHVzaE1hbmFnZXIuaXNXZWJQdXNoU3VwcG9ydGVkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHdlYiBwdXNoIGlzIHN1YnNjcmliZWQuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFJlc29sdmVzIGlmIHRydWUsIHJlamVjdHMgaWYgZmFsc2UuXG4gICAqL1xuICBzdGF0aWMgaXNXZWJQdXNoU3Vic2NyaWJlZCgpIHtcbiAgICByZXR1cm4gUHVzaE1hbmFnZXIuaXNXZWJQdXNoU3Vic2NyaWJlZCgpXG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgdGhlIGJyb3dzZXIgZm9yIHdlYiBwdXNoLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgc2VydmljZVdvcmtlclVybCBUaGUgdXJsIG9uIHlvdXIgc2VydmVyIHRoYXQgaG9zdHMgdGhlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9zdy5taW4uanMgc2VydmljZSB3b3JrZXIganMgZmlsZS5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gICAgICAgICAgICAgICAgICAgUmVzb2x2ZXMgaWYgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwsXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyd2lzZSBmYWlscy5cbiAgICovXG4gIHN0YXRpYyByZWdpc3RlckZvcldlYlB1c2goc2VydmljZVdvcmtlclVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoUHVzaE1hbmFnZXIuaXNXZWJQdXNoU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgcmV0dXJuIFB1c2hNYW5hZ2VyLnJlZ2lzdGVyKHNlcnZpY2VXb3JrZXJVcmwsIChpc1N1YnNjcmliZWQpID0+IHtcbiAgICAgICAgICBpZiAoaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gUHVzaE1hbmFnZXIuc3Vic2NyaWJlVXNlcigpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVqZWN0KCdMZWFucGx1bTogV2ViUHVzaCBpcyBub3Qgc3VwcG9ydGVkLicpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVycyB0aGUgYnJvd3NlciBmb3JtIHdlYiBwdXNoLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAgICAgICAgICAgIFJlc29sdmVzIG9uIHN1Y2Nlc3MsIG90aGVyd2lzZSByZWplY3RzLlxuICAgKi9cbiAgc3RhdGljIHVucmVnaXN0ZXJGcm9tV2ViUHVzaCgpIHtcbiAgICByZXR1cm4gUHVzaE1hbmFnZXIudW5zdWJzY3JpYmVVc2VyKClcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgY2FjaGVkIHZhbHVlcyBmb3IgbWVzc2FnZXMsIHZhcmlhYmxlcyBhbmQgdGVzdCBhc3NpZ25tZW50cy5cbiAgICogVXNlIHNwYXJpbmdseSBhcyBpZiB0aGUgYXBwIGlzIHVwZGF0ZWQsIHlvdSdsbCBoYXZlIHRvIGRlYWwgd2l0aCBwb3RlbnRpYWxseVxuICAgKiBpbmNvbnNpc3RlbnQgc3RhdGUgb3IgdXNlciBleHBlcmllbmNlLlxuICAgKi9cbiAgc3RhdGljIGNsZWFyVXNlckNvbnRlbnQoKSB7XG4gICAgVmFyQ2FjaGUuY2xlYXJVc2VyQ29udGVudCgpXG4gIH1cblxuICAvKipcbiAgICogR2V0IHB1Yi9zdWIgZXZlbnRzIG1hbmFnZXIuXG4gICAqXG4gICAqIEBSZXR1cm4geyBwdWJsaXNoOiAodG9waWMsIGFyZ3MpID0+IHt9LCBzdWJzY3JpYmU6ICh0b3BpYywgY2FsbGJhY2spID0+IHt9IH1cbiAgICovXG4gIHN0YXRpYyBnZXRFdmVudHMgKCkge1xuICAgIHJldHVybiBldmVudHNcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xlYW5wbHVtLmpzIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cblxuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi9OZXR3b3JrJ1xuXG4vKipcbiAqIFNvY2tldC5pbyAxLjAgY2xpZW50IGNsYXNzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2NrZXRJb0NsaWVudCB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhIG5ldyBTb2NrZXRJb0NsaWVudCwgbm90IGNvbm5lY3RlZCBieSBkZWZhdWx0LlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZVxuICAgIHRoaXMuY29ubmVjdGluZyA9IGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogQ29ubmVjdHMgdG8gdGhlIGdpdmVuIHNvY2tldEhvc3QuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gc29ja2V0SG9zdCBUaGUgaG9zdCB0byBjb25uZWN0IHRvLlxuICAgKi9cbiAgY29ubmVjdChzb2NrZXRIb3N0KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtdGhpc1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuY29ubmVjdGluZyA9IHRydWVcbiAgICBSZXF1ZXN0LmFqYXgoJ1BPU1QnLCBgaHR0cHM6Ly8ke3NvY2tldEhvc3R9L3NvY2tldC5pby8xYCwgJycsXG4gICAgICAgIGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICBsZXQgcGFydHMgPSBsaW5lLnNwbGl0KCc6JylcbiAgICAgICAgICBsZXQgc2Vzc2lvbiA9IHBhcnRzWzBdXG4gICAgICAgICAgbGV0IGhlYXJ0YmVhdCA9IHBhcnNlSW50KHBhcnRzWzFdKSAvIDIgKiAxMDAwXG4gICAgICAgICAgc2VsZi5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KGB3c3M6Ly8ke3NvY2tldEhvc3R9L3NvY2tldC5pby8xL3dlYnNvY2tldC8ke3Nlc3Npb259YClcbiAgICAgICAgICBsZXQgaGVhcnRiZWF0SW50ZXJ2YWwgPSBudWxsXG4gICAgICAgICAgc2VsZi5zb2NrZXQub25vcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLmNvbm5lY3RlZCA9IHRydWVcbiAgICAgICAgICAgIHNlbGYuY29ubmVjdGluZyA9IGZhbHNlXG4gICAgICAgICAgICBpZiAoc2VsZi5vbm9wZW4pIHtcbiAgICAgICAgICAgICAgc2VsZi5vbm9wZW4oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhcnRiZWF0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgc2VsZi5zb2NrZXQuc2VuZCgnMjo6OicpXG4gICAgICAgICAgICB9LCBoZWFydGJlYXQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGYuc29ja2V0Lm9uY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuY29ubmVjdGVkID0gZmFsc2VcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaGVhcnRiZWF0SW50ZXJ2YWwpXG4gICAgICAgICAgICBpZiAoc2VsZi5vbmNsb3NlKSB7XG4gICAgICAgICAgICAgIHNlbGYub25jbG9zZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGYuc29ja2V0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZVBhcnRzID0gZXZlbnQuZGF0YS5zcGxpdCgnOicpXG4gICAgICAgICAgICBsZXQgY29kZSA9IHBhcnNlSW50KG1lc3NhZ2VQYXJ0c1swXSlcbiAgICAgICAgICAgIGlmIChjb2RlID09PSAyKSB7XG4gICAgICAgICAgICAgIHNlbGYuc29ja2V0LnNlbmQoJzI6OicpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDUpIHtcbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VJZCA9IG1lc3NhZ2VQYXJ0c1sxXVxuICAgICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZVBhcnRzLnNsaWNlKDMpLmpvaW4oJzonKSlcbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VFdmVudCA9IGRhdGEubmFtZVxuICAgICAgICAgICAgICBsZXQgYXJncyA9IGRhdGEuYXJnc1xuICAgICAgICAgICAgICBpZiAobWVzc2FnZUlkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zb2NrZXQuc2VuZChgNjo6OiR7bWVzc2FnZUlkfWApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHNlbGYub25tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vbm1lc3NhZ2UobWVzc2FnZUV2ZW50LCBhcmdzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDcpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYFNvY2tldCBlcnJvcjogJHtldmVudC5kYXRhfWApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGYuc29ja2V0Lm9uZXJyb3IgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgc2VsZi5zb2NrZXQuY2xvc2UoKVxuICAgICAgICAgICAgaWYgKHNlbGYub25lcnJvcikge1xuICAgICAgICAgICAgICBzZWxmLm9uZXJyb3IoZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBudWxsLCBmYWxzZSwgdHJ1ZSAvLyBudWxsLCBxdWV1ZWQsIHBsYWluVGV4dFxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBnaXZlbiBldmVudCB3aXRoIGFyZ3VtZW50cyB0byB0aGUgc2VydmVyLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWUgTmFtZSBvZiB0aGUgZXZlbnQuXG4gICAqIEBwYXJhbSAgeyp9IGFyZ3MgQXJndW1lbnRzIHRvIHNlbmQuXG4gICAqL1xuICBzZW5kKG5hbWUsIGFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuY29ubmVjdGVkKSB7XG4gICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IFNvY2tldCBpcyBub3QgY29ubmVjdGVkLicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IGFyZ3NKc29uID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbmFtZSxcbiAgICAgIGFyZ3NcbiAgICB9KVxuICAgIHRoaXMuc29ja2V0LnNlbmQoYDU6Ojoke2FyZ3NKc29ufWApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Tb2NrZXRJb0NsaWVudC5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19EYXRhVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19IYXNoLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fUHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1NldC5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKSxcbiAgICBzZXRDYWNoZUFkZCA9IHJlcXVpcmUoJy4vX3NldENhY2hlQWRkJyksXG4gICAgc2V0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19zZXRDYWNoZUhhcycpO1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU2V0Q2FjaGVgLlxuU2V0Q2FjaGUucHJvdG90eXBlLmFkZCA9IFNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gc2V0Q2FjaGVBZGQ7XG5TZXRDYWNoZS5wcm90b3R5cGUuaGFzID0gc2V0Q2FjaGVIYXM7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0Q2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TZXRDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIHN0YWNrQ2xlYXIgPSByZXF1aXJlKCcuL19zdGFja0NsZWFyJyksXG4gICAgc3RhY2tEZWxldGUgPSByZXF1aXJlKCcuL19zdGFja0RlbGV0ZScpLFxuICAgIHN0YWNrR2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tHZXQnKSxcbiAgICBzdGFja0hhcyA9IHJlcXVpcmUoJy4vX3N0YWNrSGFzJyksXG4gICAgc3RhY2tTZXQgPSByZXF1aXJlKCcuL19zdGFja1NldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2s7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TdGFjay5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gVWludDhBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1VpbnQ4QXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19XZWFrTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheUZpbHRlci5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVNvbWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheVNvbWUuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0QWxsS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc0VxdWFsRGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsRGVlcCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAgd2hpY2ggc3VwcG9ydHMgcGFydGlhbCBjb21wYXJpc29uc1xuICogYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIFVub3JkZXJlZCBjb21wYXJpc29uXG4gKiAgMiAtIFBhcnRpYWwgY29tcGFyaXNvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdExpa2UodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBiYXNlSXNFcXVhbCwgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWwuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIGVxdWFsQnlUYWcgPSByZXF1aXJlKCcuL19lcXVhbEJ5VGFnJyksXG4gICAgZXF1YWxPYmplY3RzID0gcmVxdWlyZSgnLi9fZXF1YWxPYmplY3RzJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgIG9ialRhZyA9IG9iaklzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob2JqZWN0KSxcbiAgICAgIG90aFRhZyA9IG90aElzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob3RoZXIpO1xuXG4gIG9ialRhZyA9IG9ialRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb2JqVGFnO1xuICBvdGhUYWcgPSBvdGhUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG90aFRhZztcblxuICB2YXIgb2JqSXNPYmogPSBvYmpUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgb3RoSXNPYmogPSBvdGhUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgaXNTYW1lVGFnID0gb2JqVGFnID09IG90aFRhZztcblxuICBpZiAoaXNTYW1lVGFnICYmIGlzQnVmZmVyKG9iamVjdCkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKG90aGVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvYmpJc0FyciA9IHRydWU7XG4gICAgb2JqSXNPYmogPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNTYW1lVGFnICYmICFvYmpJc09iaikge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgcmV0dXJuIChvYmpJc0FyciB8fCBpc1R5cGVkQXJyYXkob2JqZWN0KSlcbiAgICAgID8gZXF1YWxBcnJheXMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaylcbiAgICAgIDogZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICB9XG4gIGlmICghKGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRykpIHtcbiAgICB2YXIgb2JqSXNXcmFwcGVkID0gb2JqSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdfX3dyYXBwZWRfXycpLFxuICAgICAgICBvdGhJc1dyYXBwZWQgPSBvdGhJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCAnX193cmFwcGVkX18nKTtcblxuICAgIGlmIChvYmpJc1dyYXBwZWQgfHwgb3RoSXNXcmFwcGVkKSB7XG4gICAgICB2YXIgb2JqVW53cmFwcGVkID0gb2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsXG4gICAgICAgICAgb3RoVW53cmFwcGVkID0gb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyO1xuXG4gICAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpVbndyYXBwZWQsIG90aFVud3JhcHBlZCwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICByZXR1cm4gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsRGVlcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsRGVlcC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBgY2FjaGVgIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBtYXBUb0FycmF5ID0gcmVxdWlyZSgnLi9fbWFwVG9BcnJheScpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGNvbXBhcmluZyBvYmplY3RzIG9mXG4gKiB0aGUgc2FtZSBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY29tcGFyaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3RzIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCB0YWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgIChvYmplY3QuYnl0ZU9mZnNldCAhPSBvdGhlci5ieXRlT2Zmc2V0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBvYmplY3QgPSBvYmplY3QuYnVmZmVyO1xuICAgICAgb3RoZXIgPSBvdGhlci5idWZmZXI7XG5cbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgICFlcXVhbEZ1bmMobmV3IFVpbnQ4QXJyYXkob2JqZWN0KSwgbmV3IFVpbnQ4QXJyYXkob3RoZXIpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgICAvLyBDb2VyY2UgYm9vbGVhbnMgdG8gYDFgIG9yIGAwYCBhbmQgZGF0ZXMgdG8gbWlsbGlzZWNvbmRzLlxuICAgICAgLy8gSW52YWxpZCBkYXRlcyBhcmUgY29lcmNlZCB0byBgTmFOYC5cbiAgICAgIHJldHVybiBlcSgrb2JqZWN0LCArb3RoZXIpO1xuXG4gICAgY2FzZSBlcnJvclRhZzpcbiAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PSBvdGhlci5uYW1lICYmIG9iamVjdC5tZXNzYWdlID09IG90aGVyLm1lc3NhZ2U7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIC8vIENvZXJjZSByZWdleGVzIHRvIHN0cmluZ3MgYW5kIHRyZWF0IHN0cmluZ3MsIHByaW1pdGl2ZXMgYW5kIG9iamVjdHMsXG4gICAgICAvLyBhcyBlcXVhbC4gU2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1yZWdleHAucHJvdG90eXBlLnRvc3RyaW5nXG4gICAgICAvLyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAgcmV0dXJuIG9iamVjdCA9PSAob3RoZXIgKyAnJyk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHZhciBjb252ZXJ0ID0gbWFwVG9BcnJheTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRztcbiAgICAgIGNvbnZlcnQgfHwgKGNvbnZlcnQgPSBzZXRUb0FycmF5KTtcblxuICAgICAgaWYgKG9iamVjdC5zaXplICE9IG90aGVyLnNpemUgJiYgIWlzUGFydGlhbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gICAgICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICAgICAgaWYgKHN0YWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gICAgICB9XG4gICAgICBiaXRtYXNrIHw9IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUc7XG5cbiAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICAgICAgdmFyIHJlc3VsdCA9IGVxdWFsQXJyYXlzKGNvbnZlcnQob2JqZWN0KSwgY29udmVydChvdGhlciksIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICAgICAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICBpZiAoc3ltYm9sVmFsdWVPZikge1xuICAgICAgICByZXR1cm4gc3ltYm9sVmFsdWVPZi5jYWxsKG9iamVjdCkgPT0gc3ltYm9sVmFsdWVPZi5jYWxsKG90aGVyKTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxCeVRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2VxdWFsQnlUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5cycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBvYmplY3RzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBvYmpQcm9wcyA9IGdldEFsbEtleXMob2JqZWN0KSxcbiAgICAgIG9iakxlbmd0aCA9IG9ialByb3BzLmxlbmd0aCxcbiAgICAgIG90aFByb3BzID0gZ2V0QWxsS2V5cyhvdGhlciksXG4gICAgICBvdGhMZW5ndGggPSBvdGhQcm9wcy5sZW5ndGg7XG5cbiAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzUGFydGlhbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaW5kZXggPSBvYmpMZW5ndGg7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICBpZiAoIShpc1BhcnRpYWwgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIG9iamVjdCk7XG5cbiAgdmFyIHNraXBDdG9yID0gaXNQYXJ0aWFsO1xuICB3aGlsZSAoKytpbmRleCA8IG9iakxlbmd0aCkge1xuICAgIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltrZXldO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIG9ialZhbHVlLCBrZXksIG90aGVyLCBvYmplY3QsIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIob2JqVmFsdWUsIG90aFZhbHVlLCBrZXksIG9iamVjdCwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKCEoY29tcGFyZWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gKG9ialZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMob2JqVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpXG4gICAgICAgICAgOiBjb21wYXJlZFxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gIH1cbiAgaWYgKHJlc3VsdCAmJiAhc2tpcEN0b3IpIHtcbiAgICB2YXIgb2JqQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgb3RoQ3RvciA9IG90aGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgLy8gTm9uIGBPYmplY3RgIG9iamVjdCBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1YWwuXG4gICAgaWYgKG9iakN0b3IgIT0gb3RoQ3RvciAmJlxuICAgICAgICAoJ2NvbnN0cnVjdG9yJyBpbiBvYmplY3QgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvdGhlcikgJiZcbiAgICAgICAgISh0eXBlb2Ygb2JqQ3RvciA9PSAnZnVuY3Rpb24nICYmIG9iakN0b3IgaW5zdGFuY2VvZiBvYmpDdG9yICYmXG4gICAgICAgICAgdHlwZW9mIG90aEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvdGhDdG9yIGluc3RhbmNlb2Ygb3RoQ3RvcikpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbE9iamVjdHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19lcXVhbE9iamVjdHMuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldEFsbEtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFJhd1RhZy5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBEYXRhVmlldyA9IHJlcXVpcmUoJy4vX0RhdGFWaWV3JyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgUHJvbWlzZSA9IHJlcXVpcmUoJy4vX1Byb21pc2UnKSxcbiAgICBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBXZWFrTWFwID0gcmVxdWlyZSgnLi9fV2Vha01hcCcpLFxuICAgIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcyA8IDYuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBiYXNlR2V0VGFnKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6ICcnO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaEhhcy5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaFNldC5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG5cbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGUgPT0gJ251bWJlcicgfHxcbiAgICAgICh0eXBlICE9ICdzeW1ib2wnICYmIHJlSXNVaW50LnRlc3QodmFsdWUpKSkgJiZcbiAgICAgICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc0luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzTWFza2VkLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc1Byb3RvdHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcFRvQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUucmVxdWlyZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25vZGVVdGlsLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fb3ZlckFyZy5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVBZGQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zZXRDYWNoZUFkZC5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBpbiB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUhhcyh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc2V0Q2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9BcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3NldFRvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0NsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9zdHViQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9zdHViRmFsc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9