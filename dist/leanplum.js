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

    SDK_VERSION: '1.7.2-iflix',

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
      key: 'getMessages',
      value: function getMessages() {
        return VarCache.messages;
      }
    }, {
      key: 'setMessages',
      value: function setMessages(messages) {
        VarCache.messages = Object.entries(messages).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              id = _ref2[0],
              message = _ref2[1];

          return _extends({ id: id }, message);
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
    /**
     * Provide filtering logic for messages
     */
  };
  var ActionManager = function () {
    function ActionManager() {
      _classCallCheck(this, ActionManager);
    }

    _createClass(ActionManager, null, [{
      key: 'filterMessages',
      value: function filterMessages(messages) {
        var triggers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var verb = arguments[2];
        var noun = arguments[3];
        var params = arguments[4];

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
      key: 'getMessages',
      value: function getMessages() {
        return Varcache.getMessages() || [];
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
              _VarCache2.default.setMessages(startResponse[_Constants2.default.KEYS.MESSAGES]);
              _Events2.default.publish('start/messages', {
                messages: Leanplum.getFilteredResults(_VarCache2.default.getMessages(), ['start', 'resume'])
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
      value: function getFilteredResults(messages) {
        var triggers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var verb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var noun = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
        var params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

        if (!messages) {
          return [];
        }
        return _ActionManager2.default.filterMessages(messages, triggers, verb, noun, params);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjMGNjM2FlZGJjYzhjNWMxNDllMiIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FyZ3NCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9MZWFucGx1bVJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvY2FsU3RvcmFnZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL3NyYy9JbnRlcm5hbFN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9WYXJDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9OZXR3b3JrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQWN0aW9uTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQnJvd3NlckRldGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9MZWFucGx1bVNvY2tldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHVzaE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xlYW5wbHVtLmpzIiwid2VicGFjazovLy8uL3NyYy9Tb2NrZXRJb0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N0YWNrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheVNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxCeVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOlsiTUVUSE9EUyIsIlNUQVJUIiwiU1RPUCIsIkFEVkFOQ0UiLCJUUkFDSyIsIlBBVVNFX1NFU1NJT04iLCJSRVNVTUVfU0VTU0lPTiIsIlBBVVNFX1NUQVRFIiwiUkVTVU1FX1NUQVRFIiwiRE9XTkxPQURfRklMRSIsIk1VTFRJIiwiU0VUX1ZBUlMiLCJHRVRfVkFSUyIsIlNFVF9VU0VSX0FUVFJJQlVURVMiLCJTRVRfREVWSUNFX0FUVFJJQlVURVMiLCJVUExPQURfRklMRSIsIlJFR0lTVEVSX0RFVklDRSIsIlNES19WRVJTSU9OIiwiQ0xJRU5UIiwiUEFSQU1TIiwiQUNUSU9OIiwiQVBQX0lEIiwiQ0xJRU5UX0tFWSIsIkRFVklDRV9JRCIsIlVTRVJfSUQiLCJORVdfVVNFUl9JRCIsIkRFVl9NT0RFIiwiVkVSU0lPTl9OQU1FIiwiU1lTVEVNX05BTUUiLCJTWVNURU1fVkVSU0lPTiIsIkJST1dTRVJfTkFNRSIsIkJST1dTRVJfVkVSU0lPTiIsIkRFVklDRV9OQU1FIiwiREVWSUNFX01PREVMIiwiVVNFUl9BVFRSSUJVVEVTIiwiTE9DQUxFIiwiQ09VTlRSWSIsIlJFR0lPTiIsIkNJVFkiLCJMT0NBVElPTiIsIlNUQVRFIiwiSU5GTyIsIkVWRU5UIiwiVkFMVUUiLCJGSUxFTkFNRSIsIlRJTUUiLCJEQVRBIiwiVkFSUyIsIkZJTEUiLCJTSVpFIiwiVkFSSUFUSU9OIiwiSEFTSCIsIkVNQUlMIiwiVkFSSUFCTEVTIiwiSU5DTFVERV9ERUZBVUxUUyIsIklOQ0xVREVfVkFSSUFOVF9ERUJVR19JTkZPIiwiV0VCX1BVU0hfU1VCU0NSSVBUSU9OIiwiTUVTU0FHRV9JRCIsIktFWVMiLCJJU19SRUdJU1RFUkVEIiwiTEFURVNUX1ZFUlNJT04iLCJWQVJJQU5UUyIsIlZBUklBTlRfREVCVUdfSU5GTyIsIkFDVElPTl9NRVRBREFUQSIsIlRPS0VOIiwiTUVTU0FHRVMiLCJERUZBVUxUX0tFWVMiLCJDT1VOVCIsIklURU0iLCJQVVNIX1NVQlNDUklQVElPTiIsIk1FU1NBR0VfVklFVyIsIlZBTFVFUyIsIkRFVEVDVCIsIkFyZ3NCdWlsZGVyIiwiYXJnU3RyaW5nIiwiYXJnVmFsdWVzIiwia2V5IiwidmFsdWUiLCJlbmNvZGVkVXJpQ29tcG9uZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYm9keSIsIl9ib2R5IiwiYXBwSWQiLCJjbGllbnRLZXkiLCJhZGQiLCJDb25zdGFudHMiLCJsYXN0UmVxdWVzdFRpbWUiLCJ1bmRlZmluZWQiLCJjb29sZG93blRpbWVvdXQiLCJMZWFucGx1bVJlcXVlc3QiLCJhY3Rpb24iLCJwYXJhbXMiLCJvcHRpb25zIiwiZGV2aWNlSWQiLCJMb2NhbFN0b3JhZ2VNYW5hZ2VyIiwiZ2V0RnJvbUxvY2FsU3RvcmFnZSIsImlkIiwicG9zc2libGUiLCJpIiwiY2hhckF0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwic2F2ZVRvTG9jYWxTdG9yYWdlIiwidXNlcklkIiwiYXJnc0J1aWxkZXIiLCJhdHRhY2hBcGlLZXlzIiwidmVyc2lvbk5hbWUiLCJJbnRlcm5hbFN0YXRlIiwiZGV2TW9kZSIsIkRhdGUiLCJnZXRUaW1lIiwidG9TdHJpbmciLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJlcnJvciIsImVyciIsImNvbnNvbGUiLCJOZXR3b3JrIiwiYWpheCIsImFwaVBhdGgiLCJidWlsZCIsInF1ZXVlZCIsInNlbmROb3ciLCJiYXRjaEVuYWJsZWQiLCJzZW5kVW5zZW50UmVxdWVzdHMiLCJyZXF1ZXN0c1RvU2VuZCIsInBvcFVuc2VudFJlcXVlc3RzIiwicmVxdWVzdERhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwibXVsdGlSZXF1ZXN0QXJncyIsImJhdGNoQ29vbGRvd24iLCJub3ciLCJzZXRUaW1lb3V0Iiwic2F2ZVJlcXVlc3RGb3JMYXRlciIsImJ1aWxkRGljdCIsInF1ZXJ5UGFyYW1zIiwiRXJyb3IiLCJzZWNvbmRzIiwic2V0TmV0d29ya1RpbWVvdXQiLCJhcmdzIiwiY291bnQiLCJpdGVtS2V5IiwicmVtb3ZlRnJvbUxvY2FsU3RvcmFnZSIsInJlcXVlc3RBcmdzIiwicGFyc2UiLCJwdXNoIiwiaWdub3JlZCIsImluZGV4IiwibnVtUmVzcG9uc2VzIiwiZ2V0UmVzcG9uc2VBdCIsIm1lc3NhZ2UiLCJsb2NhbFN0b3JhZ2VFbmFibGVkIiwiYWx0ZXJuYXRlTG9jYWxTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZSIsInJlbW92ZUl0ZW0iLCJoYW5kbGVyIiwic3RhcnRIYW5kbGVycyIsImhhc1N0YXJ0ZWQiLCJzdGFydFN1Y2Nlc3NmdWwiLCJpZHgiLCJpbmRleE9mIiwic3BsaWNlIiwidmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzIiwiaGFzUmVjZWl2ZWREaWZmcyIsInZhcmlhbnREZWJ1Z0luZm9FbmFibGVkIiwiVmFyQ2FjaGUiLCJkaWZmcyIsInZhcmlhbnRzIiwiYWN0aW9uTWV0YWRhdGEiLCJtZXJnZWQiLCJtZXJnZUhlbHBlciIsInZhcmlhYmxlcyIsInNhdmVEaWZmcyIsIm9uVXBkYXRlIiwiYXBwbHlEaWZmcyIsInRva2VuIiwidmFyaWFudERlYnVnSW5mbyIsImxvZyIsIm1lc3NhZ2VJZCIsIm1lc3NhZ2VWaWV3IiwiZ2V0TWVzc2FnZXNWaWV3IiwibWVzc2FnZXNWaWV3IiwibWVzc2FnZVZpZXdQZXJTZXNzaW9uIiwibWVzc2FnZXNWaWV3UGVyU2Vzc2lvbiIsInQiLCJzZXNzaW9uIiwicmVxdWVzdCIsIm1lc3NhZ2VzIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsInZhcnMiLCJkaWZmIiwib2JqSXRlcmF0b3IiLCJvYmoiLCJmIiwiQXJyYXkiLCJhdHRyIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwidmFyc0l0ZXJhdG9yIiwiZGlmZkl0ZXJhdG9yIiwiaXNBcnJheSIsImF0dHJpYnV0ZSIsInZhclN1YnNjcmlwdCIsInN1YnN0cmluZyIsInBhcnNlSW50Iiwic3Vic2NyaXB0IiwiZGlmZlZhbHVlIiwidG9waWNzIiwic3Vic2NyaWJlIiwidG9waWMiLCJsaXN0ZW5lciIsInJlbW92ZSIsInB1Ymxpc2giLCJpbmZvIiwiZm9yRWFjaCIsIml0ZW0iLCJyZXF1ZXN0UXVldWUiLCJuZXR3b3JrVGltZW91dFNlY29uZHMiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwicGxhaW5UZXh0IiwicnVubmluZ1JlcXVlc3QiLCJlbnF1ZXVlUmVxdWVzdCIsImFyZ3VtZW50cyIsIlhEb21haW5SZXF1ZXN0IiwibG9jYXRpb24iLCJwcm90b2NvbCIsIlJlZmxlY3QiLCJhcHBseSIsImFqYXhJRTgiLCJoYW5kbGVkIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwicmFuQ2FsbGJhY2siLCJyZXNwb25zZVRleHQiLCJzdGF0dXMiLCJkZXF1ZXVlUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsImFib3J0IiwieGRyIiwib25sb2FkIiwib25lcnJvciIsIm9udGltZW91dCIsIm9ucHJvZ3Jlc3MiLCJ0aW1lb3V0IiwicmVxdWVzdEFyZ3VtZW50cyIsInNoaWZ0IiwiZmlsdGVyQnlUcmlnZ2VycyIsInRyaWdnZXJzIiwid2hlblRyaWdnZXJzIiwiY2hpbGRyZW4iLCJmaWx0ZXJlZEJ5VHJpZ2dlcnMiLCJmaWx0ZXIiLCJ0cmlnZ2VyIiwiaW5jbHVkZXMiLCJzdWJqZWN0IiwidmVyYkZpbHRlciIsImZpbHRlckJ5VmVyYnMiLCJ2ZXJiIiwiZXZhbHVhdG9yIiwidHJpZ2dlclZlcmJFdmFsdWF0b3JzIiwibm91biIsIm9iamVjdHMiLCJmaWx0ZXJCeUxpbWl0cyIsImxpbWl0cyIsIndoZW5MaW1pdHMiLCJldmVyeSIsImxpbWl0IiwidmVyYkV2YWx1YXRvciIsImxpbWl0VmVyYkV2YWx1YXRvcnMiLCJjb3VudE1lc3NhZ2VWaWV3c0J5TGltaXQiLCJzaW5jZSIsIml0ZXJhdG9yIiwiZmlsdGVyQnlMaW1pdFRpbWVzIiwibGltaXRUaW1lIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInRyaWdnZXJzV2l0aFBhcmFtZXRlciIsInBhcmFtVmFsdWUiLCJwYXJhbU5hbWUiLCJjaGFuZ2VzVG8iLCJ0byIsImNoYW5nZXNGcm9tVG8iLCJmcm9tIiwibGltaXRVc2VyIiwibWF4VmlldyIsImdldE1lc3NhZ2VWaWV3IiwibGltaXRNb250aCIsImFtb3VudCIsInJlZHVjZSIsImxpbWl0V2VlayIsImxpbWl0RGF5IiwibGltaXRIb3VyIiwibGltaXRNaW51dGUiLCJsaW1pdFNlY29uZCIsImxpbWl0U2Vzc2lvbiIsIkFjdGlvbk1hbmFnZXIiLCJzb3J0IiwiYSIsImIiLCJwcmlvcml0eSIsImRhdGFCcm93c2VyIiwic3RyaW5nIiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwic3ViU3RyaW5nIiwiaWRlbnRpdHkiLCJ2ZXJzaW9uU2VhcmNoIiwidmVuZG9yIiwicHJvcCIsIndpbmRvdyIsIm9wZXJhIiwiZGF0YU9TIiwicGxhdGZvcm0iLCJCcm93c2VyRGV0ZWN0b3IiLCJicm93c2VyIiwiX3NlYXJjaFN0cmluZyIsInZlcnNpb24iLCJfc2VhcmNoVmVyc2lvbiIsImFwcFZlcnNpb24iLCJPUyIsImRhdGFTdHJpbmciLCJkYXRhUHJvcCIsInZlcnNpb25TZWFyY2hTdHJpbmciLCJwYXJzZUZsb2F0IiwiTGVhbnBsdW1Tb2NrZXQiLCJXZWJTb2NrZXQiLCJjbGllbnQiLCJTb2NrZXRJb0NsaWVudCIsImF1dGhTZW50Iiwib25vcGVuIiwiZXZlbnQiLCJvbm1lc3NhZ2UiLCJnZXRWYXJzUmVzcG9uc2UiLCJnZXRMYXN0UmVzcG9uc2UiLCJ2YWx1ZXMiLCJzZW5kVmFyaWFibGVzIiwiYWxlcnQiLCJlbWFpbCIsImV2ZW50cyIsIm9uY2xvc2UiLCJjb25uZWN0Iiwic29ja2V0SG9zdCIsInNldEludGVydmFsIiwiY29ubmVjdGVkIiwiY29ubmVjdGluZyIsIkFQUExJQ0FUSU9OX1NFUlZFUl9QVUJMSUNfS0VZIiwiaXNTdWJzY3JpYmVkIiwic2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiIsIlB1c2hNYW5hZ2VyIiwic2VydmljZVdvcmtlciIsImlzV2ViUHVzaFN1cHBvcnRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZ2V0U2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiIsInRoZW4iLCJyZWdpc3RyYXRpb24iLCJwdXNoTWFuYWdlciIsImdldFN1YnNjcmlwdGlvbiIsInN1YnNjcmlwdGlvbiIsInVwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyIiwic2VydmljZVdvcmtlclVybCIsImNhbGxiYWNrIiwicmVnaXN0ZXIiLCJpbnN0YWxsaW5nIiwid2FpdGluZyIsImFjdGl2ZSIsInN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsImNhdGNoIiwiYXBwbGljYXRpb25TZXJ2ZXJLZXkiLCJ1cmxCNjRUb1VpbnQ4QXJyYXkiLCJyZWplY3QiLCJ1c2VyVmlzaWJsZU9ubHkiLCJpc1dlYlB1c2hTdWJzY3JpYmVkIiwic3Vic2NyaWJlZCIsInVuc3Vic2NyaWJlIiwiZ2V0UmVnaXN0cmF0aW9uIiwiYmFzZTY0U3RyaW5nIiwicGFkZGluZyIsInJlcGVhdCIsImJhc2U2NCIsInJlcGxhY2UiLCJyYXdEYXRhIiwiYXRvYiIsIm91dHB1dEFycmF5IiwiVWludDhBcnJheSIsImNoYXJDb2RlQXQiLCJnZXRLZXkiLCJhdXRoIiwia2V5QXNjaWkiLCJidG9hIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYXV0aEFzY2lpIiwiZW5kcG9pbnQiLCJwcmVwYXJlZFN1YnNjcmlwdGlvbiIsInByZXBhcmVTdWJzY3JpcHRpb24iLCJwcmVwYXJlZFN1YnNjcmlwdGlvblN0cmluZyIsImV4aXN0aW5nU3Vic2NyaXB0aW9uU3RyaW5nIiwic2V0U3Vic2NyaXB0aW9uIiwiX2Jyb3dzZXJEZXRlY3RvciIsIkxlYW5wbHVtIiwiX2VtYWlsIiwic2V0VmFyaWFudERlYnVnSW5mb0VuYWJsZWQiLCJnZXRWYXJpYW50RGVidWdJbmZvIiwiYWNjZXNzS2V5IiwiaG9zdCIsImRldmljZU5hbWUiLCJfZGV2aWNlTmFtZSIsImRldmljZU1vZGVsIiwiX2RldmljZU1vZGVsIiwic3lzdGVtTmFtZSIsIl9zeXN0ZW1OYW1lIiwic3lzdGVtVmVyc2lvbiIsIl9zeXN0ZW1WZXJzaW9uIiwic2V0VmFyaWFibGVzIiwiY29vbGRvd25TZWNvbmRzIiwiZ2V0VmFyaWFibGVzIiwiY3VycmVudCIsIlZhcmNhY2hlIiwiZ2V0TWVzc2FnZXMiLCJhZGRTdGFydFJlc3BvbnNlSGFuZGxlciIsImFkZFZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyIiwicmVtb3ZlU3RhcnRSZXNwb25zZUhhbmRsZXIiLCJyZW1vdmVWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlciIsImlzU3VjY2VzcyIsImlzUmVzcG9uc2VTdWNjZXNzIiwidXNlckF0dHJpYnV0ZXMiLCJ0cmlnZ2VyVmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzIiwic3RhcnRSZXNwb25zZSIsImxhdGVzdFZlcnNpb24iLCJzZXRNZXNzYWdlcyIsImdldEZpbHRlcmVkUmVzdWx0cyIsImxvYWREaWZmcyIsInRyaWdnZXJTdGFydEhhbmRsZXJzIiwiZmlsdGVyTWVzc2FnZXMiLCJzZXRVc2VyQXR0cmlidXRlcyIsImZpbGVOYW1lIiwiZ2VuZXJhdGVSZXF1ZXN0VXJsIiwiYWRkTWVzc2FnZVZpZXciLCJzdWJzY3JpYmVVc2VyIiwidW5zdWJzY3JpYmVVc2VyIiwiY2xlYXJVc2VyQ29udGVudCIsInNlbGYiLCJSZXF1ZXN0IiwibGluZSIsInBhcnRzIiwic3BsaXQiLCJoZWFydGJlYXQiLCJzb2NrZXQiLCJoZWFydGJlYXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJtZXNzYWdlUGFydHMiLCJjb2RlIiwic2xpY2UiLCJqb2luIiwibWVzc2FnZUV2ZW50IiwibmFtZSIsImNsb3NlIiwiYXJnc0pzb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ1NlO0FBQ2JBLGFBQVM7QUFDUEMsYUFBTyxPQURBO0FBRVBDLFlBQU0sTUFGQztBQUdQQyxlQUFTLFNBSEY7QUFJUEMsYUFBTyxPQUpBO0FBS1BDLHFCQUFl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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQy9HQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDakJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6ImxlYW5wbHVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTGVhbnBsdW1cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTGVhbnBsdW1cIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzBjYzNhZWRiY2M4YzVjMTQ5ZTIiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19yb290LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIE1FVEhPRFM6IHtcbiAgICBTVEFSVDogJ3N0YXJ0JyxcbiAgICBTVE9QOiAnc3RvcCcsXG4gICAgQURWQU5DRTogJ2FkdmFuY2UnLFxuICAgIFRSQUNLOiAndHJhY2snLFxuICAgIFBBVVNFX1NFU1NJT046ICdwYXVzZVNlc3Npb24nLFxuICAgIFJFU1VNRV9TRVNTSU9OOiAncmVzdW1lU2Vzc2lvbicsXG4gICAgUEFVU0VfU1RBVEU6ICdwYXVzZVN0YXRlJyxcbiAgICBSRVNVTUVfU1RBVEU6ICdyZXN1bWVTdGF0ZScsXG4gICAgRE9XTkxPQURfRklMRTogJ2Rvd25sb2FkRmlsZScsXG4gICAgTVVMVEk6ICdtdWx0aScsXG4gICAgU0VUX1ZBUlM6ICdzZXRWYXJzJyxcbiAgICBHRVRfVkFSUzogJ2dldFZhcnMnLFxuICAgIFNFVF9VU0VSX0FUVFJJQlVURVM6ICdzZXRVc2VyQXR0cmlidXRlcycsXG4gICAgU0VUX0RFVklDRV9BVFRSSUJVVEVTOiAnc2V0RGV2aWNlQXR0cmlidXRlcycsXG4gICAgVVBMT0FEX0ZJTEU6ICd1cGxvYWRGaWxlJyxcbiAgICBSRUdJU1RFUl9ERVZJQ0U6ICdyZWdpc3RlckRldmljZSdcbiAgfSxcblxuICBTREtfVkVSU0lPTjogJzEuNy4yLWlmbGl4JyxcblxuICBDTElFTlQ6ICdqcycsXG5cbiAgUEFSQU1TOiB7XG4gICAgQUNUSU9OOiAnYWN0aW9uJyxcbiAgICBBUFBfSUQ6ICdhcHBJZCcsXG4gICAgQ0xJRU5UOiAnY2xpZW50JyxcbiAgICBDTElFTlRfS0VZOiAnY2xpZW50S2V5JyxcbiAgICBERVZJQ0VfSUQ6ICdkZXZpY2VJZCcsXG4gICAgU0RLX1ZFUlNJT046ICdzZGtWZXJzaW9uJyxcbiAgICBVU0VSX0lEOiAndXNlcklkJyxcbiAgICBORVdfVVNFUl9JRDogJ25ld1VzZXJJZCcsXG4gICAgREVWX01PREU6ICdkZXZNb2RlJyxcbiAgICBWRVJTSU9OX05BTUU6ICd2ZXJzaW9uTmFtZScsXG4gICAgU1lTVEVNX05BTUU6ICdzeXN0ZW1OYW1lJyxcbiAgICBTWVNURU1fVkVSU0lPTjogJ3N5c3RlbVZlcnNpb24nLFxuICAgIEJST1dTRVJfTkFNRTogJ2Jyb3dzZXJOYW1lJyxcbiAgICBCUk9XU0VSX1ZFUlNJT046ICdicm93c2VyVmVyc2lvbicsXG4gICAgREVWSUNFX05BTUU6ICdkZXZpY2VOYW1lJyxcbiAgICBERVZJQ0VfTU9ERUw6ICdkZXZpY2VNb2RlbCcsXG4gICAgVVNFUl9BVFRSSUJVVEVTOiAndXNlckF0dHJpYnV0ZXMnLFxuICAgIExPQ0FMRTogJ2xvY2FsZScsXG4gICAgQ09VTlRSWTogJ2NvdW50cnknLFxuICAgIFJFR0lPTjogJ3JlZ2lvbicsXG4gICAgQ0lUWTogJ2NpdHknLFxuICAgIExPQ0FUSU9OOiAnbG9jYXRpb24nLFxuICAgIFNUQVRFOiAnc3RhdGUnLFxuICAgIElORk86ICdpbmZvJyxcbiAgICBFVkVOVDogJ2V2ZW50JyxcbiAgICBWQUxVRTogJ3ZhbHVlJyxcbiAgICBGSUxFTkFNRTogJ2ZpbGVuYW1lJyxcbiAgICBUSU1FOiAndGltZScsXG4gICAgREFUQTogJ2RhdGEnLFxuICAgIFZBUlM6ICd2YXJzJyxcbiAgICBGSUxFOiAnZmlsZScsXG4gICAgU0laRTogJ3NpemUnLFxuICAgIFZBUklBVElPTjogJ3ZhcmlhdGlvbicsXG4gICAgSEFTSDogJ2hhc2gnLFxuICAgIEVNQUlMOiAnZW1haWwnLFxuICAgIFZBUklBQkxFUzogJ3ZhcnMnLFxuICAgIFBBUkFNUzogJ3BhcmFtcycsXG4gICAgSU5DTFVERV9ERUZBVUxUUzogJ2luY2x1ZGVEZWZhdWx0cycsXG4gICAgSU5DTFVERV9WQVJJQU5UX0RFQlVHX0lORk86ICdpbmNsdWRlVmFyaWFudERlYnVnSW5mbycsXG4gICAgV0VCX1BVU0hfU1VCU0NSSVBUSU9OOiAnd2ViUHVzaFN1YnNjcmlwdGlvbicsXG4gICAgTUVTU0FHRV9JRDogJ21lc3NhZ2VJZCdcbiAgfSxcblxuICBLRVlTOiB7XG4gICAgSVNfUkVHSVNURVJFRDogJ2lzUmVnaXN0ZXJlZCcsXG4gICAgTEFURVNUX1ZFUlNJT046ICdsYXRlc3RWZXJzaW9uJyxcbiAgICBWQVJTOiAndmFycycsXG4gICAgVkFSSUFOVFM6ICd2YXJpYW50cycsXG4gICAgVkFSSUFOVF9ERUJVR19JTkZPOiAndmFyaWFudERlYnVnSW5mbycsXG4gICAgQUNUSU9OX01FVEFEQVRBOiAnYWN0aW9uTWV0YWRhdGEnLFxuICAgIFRPS0VOOiAndG9rZW4nLFxuICAgIE1FU1NBR0VTOiAnbWVzc2FnZXMnXG4gIH0sXG5cbiAgREVGQVVMVF9LRVlTOiB7XG4gICAgQ09VTlQ6ICdfX2xlYW5wbHVtX3Vuc3luY2VkJyxcbiAgICBJVEVNOiAnX19sZWFucGx1bV91bnN5bmNlZF8nLFxuICAgIFZBUklBQkxFUzogJ19fbGVhbnBsdW1fdmFyaWFibGVzJyxcbiAgICBWQVJJQU5UUzogJ19fbGVhbnBsdW1fdmFyaWFudHMnLFxuICAgIFZBUklBTlRfREVCVUdfSU5GTzogJ19fbGVhbnBsdW1fdmFyaWFudF9kZWJ1Z19pbmZvJyxcbiAgICBBQ1RJT05fTUVUQURBVEE6ICdfX2xlYW5wbHVtX2FjdGlvbl9tZXRhZGF0YScsXG4gICAgVE9LRU46ICdfX2xlYW5wbHVtX3Rva2VuJyxcbiAgICBERVZJQ0VfSUQ6ICdfX2xlYW5wbHVtX2RldmljZV9pZCcsXG4gICAgVVNFUl9JRDogJ19fbGVhbnBsdW1fdXNlcl9pZCcsXG4gICAgUFVTSF9TVUJTQ1JJUFRJT046ICdfX2xlYW5wbHVtX3B1c2hfc3Vic2NyaXB0aW9uJyxcbiAgICBNRVNTQUdFX1ZJRVc6ICdfX2xlYW5wbHVtX21lc3NhZ2VzX3ZpZXcnLFxuICB9LFxuXG4gIFZBTFVFUzoge1xuICAgIERFVEVDVDogJyhkZXRlY3QpJ1xuICB9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnN0YW50cy5qcyIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0TmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5cbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9Db25zdGFudHMnXG5cbi8qKlxuICogTGVhbnBsdW0gQXJnc0J1aWxkZXIsIHVzZSB0byBjb25zdHJ1Y3QgcmVxdWVzdCBwYXlsb2FkLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmdzQnVpbGRlciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZW1wdHkgcmVxdWVzdCBhcmd1bWVudC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXJnU3RyaW5nID0gJydcbiAgICB0aGlzLmFyZ1ZhbHVlcyA9IHt9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGdpdmVuIGtleSwgdmFsdWUgdG8gdGhlIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBmb3IgdGhlIHZhbHVlLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xib29sZWFufSB2YWx1ZSBUaGUgdmFsdWUgZm9yIGdpdmVuIGtleS5cbiAgICogQHJldHVybiB7QXJnc0J1aWxkZXJ9IFJldHVybnMgYW4gb2JqZWN0IG9mIEFyZ3NCdWlsZGVyLlxuICAgKi9cbiAgYWRkKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgaWYgKHRoaXMuYXJnU3RyaW5nKSB7XG4gICAgICB0aGlzLmFyZ1N0cmluZyArPSAnJidcbiAgICB9XG4gICAgbGV0IGVuY29kZWRVcmlDb21wb25lbnQgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpXG4gICAgdGhpcy5hcmdTdHJpbmcgKz0gYCR7a2V5fT0ke2VuY29kZWRVcmlDb21wb25lbnR9YFxuICAgIHRoaXMuYXJnVmFsdWVzW2tleV0gPSB2YWx1ZVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvKipcbiAgICogQ2FjaGUgdGhlIGdpdmVuIGJvZHkuXG4gICAqIEBwYXJhbSAge1N0cmluZ30gW2JvZHldIEEgZ2l2ZW4gYm9keS5cbiAgICogQHJldHVybiB7QXJnc0J1aWxkZXJ8U3RyaW5nfSBSZXR1cm5zIEFyZ3NCdWlsZGVyIGlmIGJvZHkgZ2l2ZW4sIGVsc2UgdGhlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keS5cbiAgICovXG4gIGJvZHkoYm9keSkge1xuICAgIGlmIChib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5ID0gYm9keVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2JvZHlcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gYXR0YWNoIGdpdmVuIGFwcElkIGFuZCBhcHBLZXkgdG8gcmVxdWVzdC5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBhcHBJZCBUaGUgYXBwSWQgdG8gYXR0YWNoLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGNsaWVudEtleSBUaGUgYXBwS2V5IHRvIGF0dGFjaC5cbiAgICogQHJldHVybiB7QXJnc0J1aWxkZXJ9IFJldHVybnMgYW4gb2JqZWN0IG9mIEFyZ3NCdWlsZGVyLlxuICAgKi9cbiAgYXR0YWNoQXBpS2V5cyhhcHBJZCwgY2xpZW50S2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkKENvbnN0YW50cy5QQVJBTVMuQVBQX0lELCBhcHBJZClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkNMSUVOVCwgQ29uc3RhbnRzLkNMSUVOVClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkNMSUVOVF9LRVksIGNsaWVudEtleSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGFyZ3VtZW50cy5cbiAgICogQHJldHVybiB7U3RyaW5nfSBBcmd1bWVudHMgc3RyaW5nLlxuICAgKi9cbiAgYnVpbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJnU3RyaW5nXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBhcmd1bWVudCB2YWx1ZXMuXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGFyZ3VtZW50IHZhbHVlcy5cbiAgICovXG4gIGJ1aWxkRGljdCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcmdWYWx1ZXNcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FyZ3NCdWlsZGVyLmpzIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9Db25zdGFudHMnXG5pbXBvcnQgQXJnc0J1aWxkZXIgZnJvbSAnLi9BcmdzQnVpbGRlcidcbmltcG9ydCBJbnRlcm5hbFN0YXRlIGZyb20gJy4vSW50ZXJuYWxTdGF0ZSdcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4vTmV0d29yaydcbmltcG9ydCBMb2NhbFN0b3JhZ2VNYW5hZ2VyIGZyb20gJy4vTG9jYWxTdG9yYWdlTWFuYWdlcidcblxubGV0IGxhc3RSZXF1ZXN0VGltZSA9IHVuZGVmaW5lZFxubGV0IGNvb2xkb3duVGltZW91dCA9IG51bGxcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhbnBsdW1SZXF1ZXN0IHtcblxuICBzdGF0aWMgYXBpUGF0aCA9ICdodHRwczovL3d3dy5sZWFucGx1bS5jb20vYXBpJ1xuICBzdGF0aWMgYmF0Y2hFbmFibGVkID0gdHJ1ZVxuICBzdGF0aWMgYmF0Y2hDb29sZG93biA9IDVcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGFjdGlvblxuICAgKiBAcGFyYW0gcGFyYW1zXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEBwYXJhbSBvcHRpb25zLnN1Y2Nlc3NcbiAgICogQHBhcmFtIG9wdGlvbnMuZXJyb3JcbiAgICogQHBhcmFtIG9wdGlvbnMucmVzcG9uc2VcbiAgICogQHBhcmFtIG9wdGlvbnMucXVldWVkXG4gICAqIEBwYXJhbSBvcHRpb25zLnNlbmROb3dcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXRpYyByZXF1ZXN0KGFjdGlvbiwgcGFyYW1zLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwgbmV3IEFyZ3NCdWlsZGVyKClcblxuICAgIC8vIEdldCBvciBjcmVhdGUgZGV2aWNlIElEIGFuZCB1c2VyIElELlxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkKSB7XG4gICAgICBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQgPVxuICAgICAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkRFVklDRV9JRClcbiAgICB9XG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQpIHtcbiAgICAgIGxldCBpZCA9ICcnXG4gICAgICBsZXQgcG9zc2libGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicgK1xuICAgICAgICAgICcwMTIzNDU2Nzg5J1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgIGlkICs9IHBvc3NpYmxlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpKVxuICAgICAgfVxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkID0gaWRcbiAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuREVWSUNFX0lELCBpZClcbiAgICB9XG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QudXNlcklkKSB7XG4gICAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRClcbiAgICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCkge1xuICAgICAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkXG4gICAgICB9XG4gICAgfVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRCwgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZClcblxuICAgIGxldCBhcmdzQnVpbGRlciA9IHBhcmFtc1xuICAgICAgICAuYXR0YWNoQXBpS2V5cyhMZWFucGx1bVJlcXVlc3QuYXBwSWQsIExlYW5wbHVtUmVxdWVzdC5jbGllbnRLZXkpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5TREtfVkVSU0lPTiwgQ29uc3RhbnRzLlNES19WRVJTSU9OKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuREVWSUNFX0lELCBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5VU0VSX0lELCBMZWFucGx1bVJlcXVlc3QudXNlcklkKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQUNUSU9OLCBhY3Rpb24pXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5WRVJTSU9OX05BTUUsIExlYW5wbHVtUmVxdWVzdC52ZXJzaW9uTmFtZSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkRFVl9NT0RFLCBJbnRlcm5hbFN0YXRlLmRldk1vZGUpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5USU1FLCAobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKS50b1N0cmluZygpKVxuICAgIGxldCBzdWNjZXNzID0gb3B0aW9ucy5zdWNjZXNzIHx8IG9wdGlvbnMucmVzcG9uc2VcbiAgICBsZXQgZXJyb3IgPSBvcHRpb25zLmVycm9yIHx8IG9wdGlvbnMucmVzcG9uc2VcblxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LmFwcElkIHx8ICFMZWFucGx1bVJlcXVlc3QuY2xpZW50S2V5KSB7XG4gICAgICBsZXQgZXJyID0gJ0xlYW5wbHVtIEFwcCBJRCBhbmQgY2xpZW50IGtleSBhcmUgbm90IHNldC4gTWFrZSBzdXJlIHlvdSAnICtcbiAgICAgICAgICAnYXJlIGNhbGxpbmcgc2V0QXBwSWRGb3JEZXZlbG9wbWVudE1vZGUgb3Igc2V0QXBwSWRGb3JQcm9kdWN0aW9uTW9kZSAnICtcbiAgICAgICAgICAnYmVmb3JlIGlzc3VpbmcgQVBJIGNhbGxzLidcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgaWYgKGVycm9yKSBlcnJvcihlcnIpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmJvZHkoKSkge1xuICAgICAgTmV0d29yay5hamF4KCdQT1NUJywgYCR7TGVhbnBsdW1SZXF1ZXN0LmFwaVBhdGh9PyR7YXJnc0J1aWxkZXIuYnVpbGQoKX1gLFxuICAgICAgICAgIHBhcmFtcy5ib2R5KCksIHN1Y2Nlc3MsIGVycm9yLCBvcHRpb25zLnF1ZXVlZClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBzZW5kTm93ID0gSW50ZXJuYWxTdGF0ZS5kZXZNb2RlIHx8IG9wdGlvbnMuc2VuZE5vdyB8fCAhTGVhbnBsdW1SZXF1ZXN0LmJhdGNoRW5hYmxlZFxuXG4gICAgbGV0IHNlbmRVbnNlbnRSZXF1ZXN0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHJlcXVlc3RzVG9TZW5kID0gTGVhbnBsdW1SZXF1ZXN0LnBvcFVuc2VudFJlcXVlc3RzKClcbiAgICAgIGlmIChyZXF1ZXN0c1RvU2VuZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCByZXF1ZXN0RGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAnZGF0YSc6IHJlcXVlc3RzVG9TZW5kXG4gICAgICAgIH0pXG4gICAgICAgIGxldCBtdWx0aVJlcXVlc3RBcmdzID0gbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgICAgICAgIC5hdHRhY2hBcGlLZXlzKExlYW5wbHVtUmVxdWVzdC5hcHBJZCwgTGVhbnBsdW1SZXF1ZXN0LmNsaWVudEtleSlcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5TREtfVkVSU0lPTiwgQ29uc3RhbnRzLlNES19WRVJTSU9OKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkFDVElPTiwgQ29uc3RhbnRzLk1FVEhPRFMuTVVMVEkpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVElNRSwgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkudG9TdHJpbmcoKS50b1N0cmluZygpKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgTmV0d29yay5hamF4KCdQT1NUJywgYCR7TGVhbnBsdW1SZXF1ZXN0LmFwaVBhdGh9PyR7bXVsdGlSZXF1ZXN0QXJnc31gLCByZXF1ZXN0RGF0YSwgc3VjY2VzcywgZXJyb3IsXG4gICAgICAgICAgICBvcHRpb25zLnF1ZXVlZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWFsIHdpdGggY29vbGRvd24uXG4gICAgaWYgKCFzZW5kTm93ICYmIExlYW5wbHVtUmVxdWVzdC5iYXRjaENvb2xkb3duKSB7XG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwXG4gICAgICBpZiAoIWxhc3RSZXF1ZXN0VGltZSB8fFxuICAgICAgICAgIG5vdyAtIGxhc3RSZXF1ZXN0VGltZSA+PSBMZWFucGx1bVJlcXVlc3QuYmF0Y2hDb29sZG93bikge1xuICAgICAgICBzZW5kTm93ID0gdHJ1ZVxuICAgICAgICBsYXN0UmVxdWVzdFRpbWUgPSBub3dcbiAgICAgIH0gZWxzZSBpZiAoIWNvb2xkb3duVGltZW91dCkge1xuICAgICAgICBjb29sZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvb2xkb3duVGltZW91dCA9IG51bGxcbiAgICAgICAgICBsYXN0UmVxdWVzdFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDBcbiAgICAgICAgICBzZW5kVW5zZW50UmVxdWVzdHMoKVxuICAgICAgICB9LCAoTGVhbnBsdW1SZXF1ZXN0LmJhdGNoQ29vbGRvd24gLSAobm93IC0gbGFzdFJlcXVlc3RUaW1lKSkgKiAxMDAwKVxuICAgICAgfVxuICAgIH1cblxuICAgIExlYW5wbHVtUmVxdWVzdC5zYXZlUmVxdWVzdEZvckxhdGVyKGFyZ3NCdWlsZGVyLmJ1aWxkRGljdCgpKVxuICAgIGlmIChzZW5kTm93KSB7XG4gICAgICBzZW5kVW5zZW50UmVxdWVzdHMoKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZW5lcmF0ZVJlcXVlc3RVcmwoYWN0aW9uLCBxdWVyeVBhcmFtcykge1xuICAgIHF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXMgfHwgbmV3IEFyZ3NCdWlsZGVyKClcblxuICAgIC8vIEdldCBvciBjcmVhdGUgZGV2aWNlIElEIGFuZCB1c2VyIElELlxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkKSB7XG4gICAgICBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQgPVxuICAgICAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkRFVklDRV9JRClcbiAgICB9XG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQpIHtcbiAgICAgIGxldCBpZCA9ICcnXG4gICAgICBsZXQgcG9zc2libGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicgK1xuICAgICAgICAgICcwMTIzNDU2Nzg5J1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgIGlkICs9IHBvc3NpYmxlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpKVxuICAgICAgfVxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkID0gaWRcbiAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuREVWSUNFX0lELCBpZClcbiAgICB9XG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QudXNlcklkKSB7XG4gICAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRClcbiAgICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCkge1xuICAgICAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkXG4gICAgICB9XG4gICAgfVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRCwgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZClcblxuICAgIGxldCBhcmdzQnVpbGRlciA9IHF1ZXJ5UGFyYW1zXG4gICAgICAgIC5hdHRhY2hBcGlLZXlzKExlYW5wbHVtUmVxdWVzdC5hcHBJZCwgTGVhbnBsdW1SZXF1ZXN0LmNsaWVudEtleSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlNES19WRVJTSU9OLCBDb25zdGFudHMuU0RLX1ZFUlNJT04pXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5ERVZJQ0VfSUQsIExlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlVTRVJfSUQsIExlYW5wbHVtUmVxdWVzdC51c2VySWQpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5BQ1RJT04sIGFjdGlvbilcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlZFUlNJT05fTkFNRSwgTGVhbnBsdW1SZXF1ZXN0LnZlcnNpb25OYW1lKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuREVWX01PREUsIEludGVybmFsU3RhdGUuZGV2TW9kZSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlRJTUUsIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApLnRvU3RyaW5nKCkpXG5cbiAgICBpZiAoIUxlYW5wbHVtUmVxdWVzdC5hcHBJZCB8fCAhTGVhbnBsdW1SZXF1ZXN0LmNsaWVudEtleSkge1xuICAgICAgbGV0IGVyciA9ICdMZWFucGx1bSBBcHAgSUQgYW5kIGNsaWVudCBrZXkgYXJlIG5vdCBzZXQuIE1ha2Ugc3VyZSB5b3UgJyArXG4gICAgICAgICAgJ2FyZSBjYWxsaW5nIHNldEFwcElkRm9yRGV2ZWxvcG1lbnRNb2RlIG9yIHNldEFwcElkRm9yUHJvZHVjdGlvbk1vZGUgJyArXG4gICAgICAgICAgJ2JlZm9yZSBpc3N1aW5nIEFQSSBjYWxscy4nXG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpXG4gICAgfVxuXG4gICAgcmV0dXJuIGAke0xlYW5wbHVtUmVxdWVzdC5hcGlQYXRofT8ke2FyZ3NCdWlsZGVyLmJ1aWxkKCl9YFxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIG5ldHdvcmsgdGltZW91dC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgVGhlIHRpbWVvdXQgaW4gc2Vjb25kcy5cbiAgICovXG4gIHN0YXRpYyBzZXROZXR3b3JrVGltZW91dChzZWNvbmRzKSB7XG4gICAgTmV0d29yay5zZXROZXR3b3JrVGltZW91dChzZWNvbmRzKVxuICB9XG5cbiAgc3RhdGljIHNhdmVSZXF1ZXN0Rm9yTGF0ZXIoYXJncykge1xuICAgIGxldCBjb3VudCA9IExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkNPVU5UKSB8fCAwXG4gICAgbGV0IGl0ZW1LZXkgPSBDb25zdGFudHMuREVGQVVMVF9LRVlTLklURU0gKyBjb3VudFxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKGl0ZW1LZXksIEpTT04uc3RyaW5naWZ5KGFyZ3MpKVxuICAgIGNvdW50KytcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkNPVU5ULCBjb3VudClcbiAgfVxuXG4gIHN0YXRpYyBwb3BVbnNlbnRSZXF1ZXN0cygpIHtcbiAgICBsZXQgcmVxdWVzdERhdGEgPSBbXVxuICAgIGxldCBjb3VudCA9IExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkNPVU5UKSB8fCAwXG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5yZW1vdmVGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuQ09VTlQpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbUtleSA9IENvbnN0YW50cy5ERUZBVUxUX0tFWVMuSVRFTSArIGlcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCByZXF1ZXN0QXJncyA9IEpTT04ucGFyc2UoTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKGl0ZW1LZXkpKVxuICAgICAgICByZXF1ZXN0RGF0YS5wdXNoKHJlcXVlc3RBcmdzKVxuICAgICAgfSBjYXRjaCAoaWdub3JlZCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICAgIH1cbiAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIucmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShpdGVtS2V5KVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdERhdGFcbiAgfVxuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8gUmVzcG9uc2UgcGFyc2luZyAvLy8vLy8vLy8vLy8vLy8vLy9cblxuICBzdGF0aWMgbnVtUmVzcG9uc2VzKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UucmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZS5yZXNwb25zZS5sZW5ndGhcbiAgfVxuXG4gIHN0YXRpYyBnZXRSZXNwb25zZUF0KHJlc3BvbnNlLCBpbmRleCkge1xuICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLnJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UucmVzcG9uc2VbaW5kZXhdXG4gIH1cblxuICBzdGF0aWMgZ2V0TGFzdFJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgbGV0IGNvdW50ID0gTGVhbnBsdW1SZXF1ZXN0Lm51bVJlc3BvbnNlcyhyZXNwb25zZSlcbiAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICByZXR1cm4gTGVhbnBsdW1SZXF1ZXN0LmdldFJlc3BvbnNlQXQocmVzcG9uc2UsIGNvdW50IC0gMSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaXNSZXNwb25zZVN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuICEhcmVzcG9uc2Uuc3VjY2Vzc1xuICB9XG5cbiAgc3RhdGljIGdldFJlc3BvbnNlRXJyb3IocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBsZXQgZXJyb3IgPSByZXNwb25zZS5lcnJvclxuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBlcnJvci5tZXNzYWdlXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MZWFucGx1bVJlcXVlc3QuanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuXG5sZXQgbG9jYWxTdG9yYWdlRW5hYmxlZFxubGV0IGFsdGVybmF0ZUxvY2FsU3RvcmFnZSA9IHt9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsU3RvcmFnZU1hbmFnZXIge1xuICBzdGF0aWMgZ2V0RnJvbUxvY2FsU3RvcmFnZShrZXkpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBhbHRlcm5hdGVMb2NhbFN0b3JhZ2Vba2V5XVxuICAgIH1cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlW2tleV1cbiAgfVxuXG4gIHN0YXRpYyBzYXZlVG9Mb2NhbFN0b3JhZ2Uoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2VFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgYWx0ZXJuYXRlTG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Vba2V5XSA9IHZhbHVlXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9jYWxTdG9yYWdlRW5hYmxlZCA9IGZhbHNlXG4gICAgICBhbHRlcm5hdGVMb2NhbFN0b3JhZ2Vba2V5XSA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJlbW92ZUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZUVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICBkZWxldGUgYWx0ZXJuYXRlTG9jYWxTdG9yYWdlW2tleV1cbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZUVuYWJsZWQgPSBmYWxzZVxuICAgICAgZGVsZXRlIGFsdGVybmF0ZUxvY2FsU3RvcmFnZVtrZXldXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTG9jYWxTdG9yYWdlTWFuYWdlci5qcyIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19MaXN0Q2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJuYWxTdGF0ZSB7XG4gIHN0YXRpYyBkZXZNb2RlID0gZmFsc2VcblxuICBzdGF0aWMgdmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzID0gW11cbiAgc3RhdGljIGhhc1JlY2VpdmVkRGlmZnMgPSBmYWxzZVxuXG4gIHN0YXRpYyBzdGFydEhhbmRsZXJzID0gW11cbiAgc3RhdGljIGhhc1N0YXJ0ZWQgPSBmYWxzZVxuICBzdGF0aWMgc3RhcnRTdWNjZXNzZnVsID0gZmFsc2VcbiAgc3RhdGljIHZhcmlhbnREZWJ1Z0luZm9FbmFibGVkID0gZmFsc2VcblxuICBzdGF0aWMgYWRkU3RhcnRSZXNwb25zZUhhbmRsZXIoaGFuZGxlcikge1xuICAgIEludGVybmFsU3RhdGUuc3RhcnRIYW5kbGVycy5wdXNoKGhhbmRsZXIpXG4gICAgaWYgKEludGVybmFsU3RhdGUuaGFzU3RhcnRlZCkge1xuICAgICAgaGFuZGxlcihJbnRlcm5hbFN0YXRlLnN0YXJ0U3VjY2Vzc2Z1bClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlU3RhcnRSZXNwb25zZUhhbmRsZXIoaGFuZGxlcikge1xuICAgIGxldCBpZHggPSBJbnRlcm5hbFN0YXRlLnN0YXJ0SGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKVxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgSW50ZXJuYWxTdGF0ZS5zdGFydEhhbmRsZXJzLnNwbGljZShpZHgsIDEpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHRyaWdnZXJTdGFydEhhbmRsZXJzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgSW50ZXJuYWxTdGF0ZS5zdGFydEhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBJbnRlcm5hbFN0YXRlLnN0YXJ0SGFuZGxlcnNbaV0oSW50ZXJuYWxTdGF0ZS5zdGFydFN1Y2Nlc3NmdWwpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFkZFZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBJbnRlcm5hbFN0YXRlLnZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycy5wdXNoKGhhbmRsZXIpXG4gICAgaWYgKEludGVybmFsU3RhdGUuaGFzUmVjZWl2ZWREaWZmcykge1xuICAgICAgaGFuZGxlcigpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJlbW92ZVZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBsZXQgaWR4ID0gSW50ZXJuYWxTdGF0ZS52YXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKVxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgSW50ZXJuYWxTdGF0ZS52YXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSlcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdHJpZ2dlclZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEludGVybmFsU3RhdGUudmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIEludGVybmFsU3RhdGUudmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzW2ldKClcbiAgICAgIH1cbiAgfVxuXG4gICAgc3RhdGljIHNldFZhcmlhbnREZWJ1Z0luZm9FbmFibGVkKHZhcmlhbnREZWJ1Z0luZm9FbmFibGVkKSB7XG4gICAgSW50ZXJuYWxTdGF0ZS52YXJpYW50RGVidWdJbmZvRW5hYmxlZCA9IHZhcmlhbnREZWJ1Z0luZm9FbmFibGVkXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ludGVybmFsU3RhdGUuanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vQ29uc3RhbnRzJ1xuaW1wb3J0IEludGVybmFsU3RhdGUgZnJvbSAnLi9JbnRlcm5hbFN0YXRlJ1xuaW1wb3J0IEFyZ3NCdWlsZGVyIGZyb20gJy4vQXJnc0J1aWxkZXInXG5pbXBvcnQgTG9jYWxTdG9yYWdlTWFuYWdlciBmcm9tICcuL0xvY2FsU3RvcmFnZU1hbmFnZXInXG5pbXBvcnQgTGVhbnBsdW1SZXF1ZXN0IGZyb20gJy4vTGVhbnBsdW1SZXF1ZXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJDYWNoZSB7XG4gIHN0YXRpYyBkaWZmcyA9IHVuZGVmaW5lZFxuICBzdGF0aWMgdmFyaWFibGVzID0gbnVsbFxuICBzdGF0aWMgdmFyaWFudHMgPSBbXVxuICBzdGF0aWMgdmFyaWFudERlYnVnSW5mbyA9IHt9XG4gIHN0YXRpYyBtZXJnZWQgPSB1bmRlZmluZWRcbiAgc3RhdGljIG9uVXBkYXRlID0gdW5kZWZpbmVkXG4gIHN0YXRpYyB0b2tlbiA9ICcnXG4gIHN0YXRpYyBhY3Rpb25NZXRhZGF0YSA9IHt9XG4gIHN0YXRpYyBtZXNzYWdlc1ZpZXcgPSB1bmRlZmluZWRcbiAgc3RhdGljIG1lc3NhZ2VzVmlld1BlclNlc3Npb24gPSBbXVxuICBzdGF0aWMgbWVzc2FnZXNcbiAgc3RhdGljIG1lc3NhZ2VzRGlmZlxuXG4gIHN0YXRpYyBhcHBseURpZmZzKGRpZmZzLCB2YXJpYW50cywgYWN0aW9uTWV0YWRhdGEpIHtcbiAgICBWYXJDYWNoZS5kaWZmcyA9IGRpZmZzXG4gICAgVmFyQ2FjaGUudmFyaWFudHMgPSB2YXJpYW50c1xuICAgIFZhckNhY2hlLmFjdGlvbk1ldGFkYXRhID0gYWN0aW9uTWV0YWRhdGFcbiAgICBJbnRlcm5hbFN0YXRlLmhhc1JlY2VpdmVkRGlmZnMgPSB0cnVlXG4gICAgVmFyQ2FjaGUubWVyZ2VkID0gVmFyQ2FjaGUubWVyZ2VIZWxwZXIoVmFyQ2FjaGUudmFyaWFibGVzLCBkaWZmcylcbiAgICBWYXJDYWNoZS5zYXZlRGlmZnMoKVxuICAgIGlmIChWYXJDYWNoZS5vblVwZGF0ZSkge1xuICAgICAgVmFyQ2FjaGUub25VcGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBsb2FkRGlmZnMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIFZhckNhY2hlLmFwcGx5RGlmZnMoXG4gICAgICAgICAgSlNPTi5wYXJzZShMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoXG4gICAgICAgICAgICAgIENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVkFSSUFCTEVTKSB8fCBudWxsKSxcbiAgICAgICAgICBKU09OLnBhcnNlKExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShcbiAgICAgICAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQU5UUykgfHwgbnVsbCksXG4gICAgICAgICAgSlNPTi5wYXJzZShMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoXG4gICAgICAgICAgICAgIENvbnN0YW50cy5ERUZBVUxUX0tFWVMuQUNUSU9OX01FVEFEQVRBKSB8fCBudWxsKSlcbiAgICAgIFZhckNhY2hlLnRva2VuID0gTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVE9LRU4pXG4gICAgICBWYXJDYWNoZS52YXJpYW50RGVidWdJbmZvID0gTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVkFSSUFOVF9ERUJVR19JTkZPKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBMZWFucGx1bTogSW52YWxpZCBkaWZmczogJHtlfWApXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHNhdmVEaWZmcygpIHtcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShcbiAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQUJMRVMsIEpTT04uc3RyaW5naWZ5KFZhckNhY2hlLmRpZmZzIHx8IHt9KSlcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShcbiAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQU5UUywgSlNPTi5zdHJpbmdpZnkoVmFyQ2FjaGUudmFyaWFudHMgfHwgW10pXG4gICAgKVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuQUNUSU9OX01FVEFEQVRBLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShWYXJDYWNoZS5hY3Rpb25NZXRhZGF0YSB8fCB7fSkpXG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQU5UX0RFQlVHX0lORk8sXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KFZhckNhY2hlLnZhcmlhbnREZWJ1Z0luZm8gfHwge30pKVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVE9LRU4sIFZhckNhY2hlLnRva2VuKVxuICB9XG5cbiAgLyoqXG4gICAqIHJlY29yZCB2aWV3IG1lc3NhZ2UgaW4gbG9jYWwgc3RvcmFnZSBhbmQgIGluIG1lbW9yeSAoYWthIHNlc3Npb24pXG4gICAqIEBwYXJhbSBtZXNzYWdlSWRcbiAgICovXG4gIHN0YXRpYyBhZGRNZXNzYWdlVmlldyhtZXNzYWdlSWQpe1xuICAgIGNvbnN0IG1lc3NhZ2VWaWV3ID0gVmFyQ2FjaGUuZ2V0TWVzc2FnZXNWaWV3KClbbWVzc2FnZUlkXVxuICAgIGlmIChtZXNzYWdlVmlldyA9PT0gdW5kZWZpbmVkKXtcbiAgICAgIFZhckNhY2hlLm1lc3NhZ2VzVmlld1ttZXNzYWdlSWRdID0gW11cbiAgICB9XG4gICAgY29uc3QgbWVzc2FnZVZpZXdQZXJTZXNzaW9uID1WYXJDYWNoZS5tZXNzYWdlc1ZpZXdQZXJTZXNzaW9uW21lc3NhZ2VJZF0gfHwgW11cblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICBtZXNzYWdlVmlld1BlclNlc3Npb24ucHVzaCh7dDpub3d9KVxuICAgIFZhckNhY2hlLm1lc3NhZ2VzVmlld1ttZXNzYWdlSWRdLnB1c2goe3Q6bm93fSlcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLk1FU1NBR0VfVklFVyxKU09OLnN0cmluZ2lmeShcbiAgICAgIFZhckNhY2hlLm1lc3NhZ2VzVmlldyB8fCB7fSkpXG4gIH1cblxuXG5cbiAgLyoqXG4gICAqIGdldCBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIG1lc3NhZ2VWaWV3cyB3aXRoIG1lc3NhZ2VJZCBhcyBrZXksIHBlciBzZXNzaW9uIG9yIGZyb20gc3RhcnRcbiAgICogQHBhcmFtIHNlc3Npb24ge0Jvb2xlYW4gfCB1bmRlZmluZWR9XG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0TWVzc2FnZXNWaWV3KHNlc3Npb24pe1xuICAgIGlmKHNlc3Npb24pe1xuICAgICAgcmV0dXJuIFZhckNhY2hlLm1lc3NhZ2VzVmlld1BlclNlc3Npb25cbiAgICB9XG4gICAgaWYoVmFyQ2FjaGUubWVzc2FnZXNWaWV3ID09PSB1bmRlZmluZWQpe1xuICAgICAgVmFyQ2FjaGUubWVzc2FnZXNWaWV3ID0gSlNPTi5wYXJzZShcbiAgICAgICAgTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuTUVTU0FHRV9WSUVXKSB8fCAne30nKVxuICAgIH1cbiAgICByZXR1cm4gVmFyQ2FjaGUubWVzc2FnZXNWaWV3XG4gIH1cblxuICAvKipcbiAgICogZ2V0IGFsbCB2aWV3IGZvciBhIGdpdmVuIG1lc3NhZ2UgZWl0aGVyIGZvcm0gdGhlIHN0YXJ0IG9yIHBlciBzZXNzaW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlSWRcbiAgICogQHBhcmFtIHtib29sZWFuIHwgdW5kZWZpbmVkfSBzZXNzaW9uXG4gICAqIEByZXR1cm5zIHsqfEFycmF5fVxuICAgKi9cbiAgc3RhdGljIGdldE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZCwgc2Vzc2lvbil7XG4gICAgcmV0dXJuIFZhckNhY2hlLmdldE1lc3NhZ2VzVmlldyhzZXNzaW9uKVttZXNzYWdlSWRdIHx8IFtdXG4gIH1cbiAgc3RhdGljIHNldFZhcmlhYmxlcyh2YXJpYWJsZXMpIHtcbiAgICBWYXJDYWNoZS52YXJpYWJsZXMgPSB2YXJpYWJsZXNcbiAgfVxuXG4gIHN0YXRpYyBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIFZhckNhY2hlLm1lcmdlZCAhPT0gdW5kZWZpbmVkID8gVmFyQ2FjaGUubWVyZ2VkIDogVmFyQ2FjaGUudmFyaWFibGVzXG4gIH1cblxuICBzdGF0aWMgZ2V0VmFyaWFudERlYnVnSW5mbygpIHtcbiAgICByZXR1cm4gVmFyQ2FjaGUudmFyaWFudERlYnVnSW5mb1xuICB9XG5cbiAgc3RhdGljIHNlbmRWYXJpYWJsZXMoKSB7XG4gICAgbGV0IGJvZHkgPSB7fVxuICAgIGJvZHlbQ29uc3RhbnRzLlBBUkFNUy5WQVJJQUJMRVNdID0gVmFyQ2FjaGUudmFyaWFibGVzXG4gICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuU0VUX1ZBUlMsXG4gICAgICAgIG5ldyBBcmdzQnVpbGRlcigpLmJvZHkoSlNPTi5zdHJpbmdpZnkoYm9keSkpLCB7XG4gICAgICAgICAgc2VuZE5vdzogdHJ1ZVxuICAgICAgICB9KVxuICB9XG5cbiAgc3RhdGljIGdldE1lc3NhZ2VzKCkge1xuICAgIHJldHVybiBWYXJDYWNoZS5tZXNzYWdlc1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBtZXNzYWdlIHsgbWVzc2FnZUlkOnttZXNzYWdlfSwgfSB0byBbe21lc3NhZ2V9XSBhbmQgc3RvcmVcbiAgICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2VzXG4gICAqL1xuICBzdGF0aWMgc2V0TWVzc2FnZXMobWVzc2FnZXMpIHtcbiAgICBWYXJDYWNoZS5tZXNzYWdlcyA9IE9iamVjdC5lbnRyaWVzKG1lc3NhZ2VzKVxuICAgICAgICAubWFwKChbaWQsIG1lc3NhZ2VdKSA9PiAoe2lkLCAuLi5tZXNzYWdlfSkpXG4gIH1cblxuICAgIHN0YXRpYyBtZXJnZUhlbHBlcih2YXJzLCBkaWZmKSB7XG4gICAgaWYgKHR5cGVvZiBkaWZmID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZGlmZiA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGVvZiBkaWZmID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGRpZmZcbiAgICB9XG4gICAgaWYgKGRpZmYgPT09IG51bGwgfHwgZGlmZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdmFyc1xuICAgIH1cblxuICAgIGxldCBvYmpJdGVyYXRvciA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGYob2JqW2ldKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgLy8gVGhpcyBzZWVtcyB0byBiZSBiZXN0IHByYWN0aWNlOiBodHRwczovL2dpdGh1Yi5jb20vZXNsaW50L2VzbGludC9pc3N1ZXMvNzA3MVxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZWZsZWN0XG4gICAgICAgICAgICBpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGF0dHIpKSB7XG4gICAgICAgICAgICAgIGYoYXR0cilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHZhcnNJdGVyYXRvciA9IG9iakl0ZXJhdG9yKHZhcnMpXG4gICAgbGV0IGRpZmZJdGVyYXRvciA9IG9iakl0ZXJhdG9yKGRpZmYpXG5cbiAgICAvLyBJbmZlciB0aGF0IHRoZSBkaWZmcyBpcyBhbiBhcnJheSBpZiB0aGUgdmFycyB2YWx1ZSBkb2Vzbid0IGV4aXN0IHRvIHRlbGwgdXMgdGhlIHR5cGUuXG4gICAgbGV0IGlzQXJyYXkgPSBmYWxzZVxuICAgIGlmICh2YXJzID09PSBudWxsKSB7XG4gICAgICBpZiAoIShkaWZmIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICAgIGlzQXJyYXkgPSBudWxsXG4gICAgICAgIGZvciAobGV0IGF0dHJpYnV0ZSBpbiBkaWZmKSB7XG4gICAgICAgICAgaWYgKCFkaWZmLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc0FycmF5ID09PSBudWxsKSB7XG4gICAgICAgICAgICBpc0FycmF5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoISh0eXBlb2YgYXR0cmlidXRlID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgICAgIGlzQXJyYXkgPSBmYWxzZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGF0dHJpYnV0ZS5sZW5ndGggPCAzIHx8IGF0dHJpYnV0ZS5jaGFyQXQoMCkgIT09ICdbJyB8fFxuICAgICAgICAgICAgICBhdHRyaWJ1dGUuY2hhckF0KGF0dHJpYnV0ZS5sZW5ndGggLSAxKSAhPT0gJ10nKSB7XG4gICAgICAgICAgICBpc0FycmF5ID0gZmFsc2VcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCB2YXJTdWJzY3JpcHQgPSBhdHRyaWJ1dGUuc3Vic3RyaW5nKDEsIGF0dHJpYnV0ZS5sZW5ndGggLSAxKVxuICAgICAgICAgIGlmICghcGFyc2VJbnQodmFyU3Vic2NyaXB0KS50b1N0cmluZygpID09PSB2YXJTdWJzY3JpcHQpIHtcbiAgICAgICAgICAgIGlzQXJyYXkgPSBmYWxzZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNZXJnZSBhcnJheXMuXG4gICAgaWYgKHZhcnMgaW5zdGFuY2VvZiBBcnJheSB8fCBpc0FycmF5KSB7XG4gICAgICBsZXQgbWVyZ2VkID0gW11cbiAgICAgIHZhcnNJdGVyYXRvcihmdW5jdGlvbihhdHRyKSB7XG4gICAgICAgIG1lcmdlZC5wdXNoKGF0dHIpXG4gICAgICB9KVxuICAgICAgZGlmZkl0ZXJhdG9yKGZ1bmN0aW9uKHZhclN1YnNjcmlwdCkge1xuICAgICAgICBsZXQgc3Vic2NyaXB0ID1cbiAgICAgICAgICAgIHBhcnNlSW50KHZhclN1YnNjcmlwdC5zdWJzdHJpbmcoMSwgdmFyU3Vic2NyaXB0Lmxlbmd0aCAtIDEpKVxuICAgICAgICBsZXQgZGlmZlZhbHVlID0gZGlmZlt2YXJTdWJzY3JpcHRdXG4gICAgICAgIHdoaWxlIChzdWJzY3JpcHQgPj0gbWVyZ2VkLmxlbmd0aCkge1xuICAgICAgICAgIG1lcmdlZC5wdXNoKG51bGwpXG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VkW3N1YnNjcmlwdF0gPSBWYXJDYWNoZS5tZXJnZUhlbHBlcihtZXJnZWRbc3Vic2NyaXB0XSwgZGlmZlZhbHVlKVxuICAgICAgfSlcbiAgICAgIHJldHVybiBtZXJnZWRcbiAgICB9XG5cbiAgICAvLyBNZXJnZSBkaWN0aW9uYXJpZXMuXG4gICAgbGV0IG1lcmdlZCA9IHt9XG4gICAgdmFyc0l0ZXJhdG9yKGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgIGlmIChkaWZmW2F0dHJdID09PSBudWxsIHx8IGRpZmZbYXR0cl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtZXJnZWRbYXR0cl0gPSB2YXJzW2F0dHJdXG4gICAgICB9XG4gICAgfSlcbiAgICBkaWZmSXRlcmF0b3IoZnVuY3Rpb24oYXR0cikge1xuICAgICAgbWVyZ2VkW2F0dHJdID0gVmFyQ2FjaGUubWVyZ2VIZWxwZXIodmFycyAhPT0gbnVsbCA/IHZhcnNbYXR0cl0gOiBudWxsLFxuICAgICAgICAgIGRpZmZbYXR0cl0pXG4gICAgfSlcbiAgICByZXR1cm4gbWVyZ2VkXG4gIH1cblxuICBzdGF0aWMgY2xlYXJVc2VyQ29udGVudCgpIHtcbiAgICBWYXJDYWNoZS5kaWZmcyA9IHVuZGVmaW5lZFxuICAgIFZhckNhY2hlLnZhcmlhYmxlcyA9IG51bGxcbiAgICBWYXJDYWNoZS52YXJpYW50cyA9IFtdXG4gICAgVmFyQ2FjaGUudmFyaWFudERlYnVnSW5mbyA9IHt9XG4gICAgVmFyQ2FjaGUubWVyZ2VkID0gdW5kZWZpbmVkXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1ZhckNhY2hlLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX01hcC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uKCl7XG4gIHZhciB0b3BpY3MgPSB7fVxuXG4gIHJldHVybiB7XG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbih0b3BpYywgbGlzdGVuZXIpIHtcbiAgICAgIGlmKCF0b3BpY3MuaGFzT3duUHJvcGVydHkuY2FsbCh0b3BpY3MsIHRvcGljKSkgdG9waWNzW3RvcGljXSA9IFtdXG5cbiAgICAgIHZhciBpbmRleCA9IHRvcGljc1t0b3BpY10ucHVzaChsaXN0ZW5lcikgLSAxXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZGVsZXRlIHRvcGljc1t0b3BpY11baW5kZXhdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHB1Ymxpc2g6IGZ1bmN0aW9uKHRvcGljLCBpbmZvKSB7XG4gICAgICBpZighdG9waWNzLmhhc093blByb3BlcnR5LmNhbGwodG9waWNzLCB0b3BpYykpIHJldHVyblxuXG4gICAgICB0b3BpY3NbdG9waWNdLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBpdGVtKGluZm8gIT0gdW5kZWZpbmVkID8gaW5mbyA6IHt9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pKClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FdmVudHMuanMiLCIvKipcbiAqIEFqYXggZnVuY3Rpb25zIGZyb206XG4gKlxuICogUGFyc2UgSmF2YVNjcmlwdCBTREtcbiAqIFZlcnNpb246IDEuMS41XG4gKiBCdWlsdDogTW9uIE9jdCAwMSAyMDEyIDE3OjU3OjEzXG4gKiBodHRwOi8vcGFyc2UuY29tXG4gKlxuICogQ29weXJpZ2h0IDIwMTIgUGFyc2UsIEluYy5cbiAqIFRoZSBQYXJzZSBKYXZhU2NyaXB0IFNESyBpcyBmcmVlbHkgZGlzdHJpYnV0YWJsZSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxubGV0IHJlcXVlc3RRdWV1ZSA9IFtdXG5sZXQgbmV0d29ya1RpbWVvdXRTZWNvbmRzID0gMTBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0d29yayB7XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBuZXR3b3JrIHRpbWVvdXQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWNvbmRzIFRoZSB0aW1lb3V0IGluIHNlY29uZHMuXG4gICAqL1xuICBzdGF0aWMgc2V0TmV0d29ya1RpbWVvdXQoc2Vjb25kcykge1xuICAgIG5ldHdvcmtUaW1lb3V0U2Vjb25kcyA9IHNlY29uZHNcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGFuIGFqYXggcmVxdWVzdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCBUaGUgaHR0cCBtZXRob2QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBvcGVuLlxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheUJ1ZmZlcnxCbG9ifERvY3VtZW50fEZvcm1EYXRhfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHNlbnQgaW4gYm9keS5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gc3VjY2VzcyBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBzdWNjZXNzLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBlcnJvciBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBlcnJvci5cbiAgICogQHBhcmFtIHtib29sZWFufSBxdWV1ZWQgV2hldGhlciB0aGUgcmVxdWVzdCBzaG91bGQgYmUgcXVldWVkIG9yIGltbWVkaWF0ZWx5IHNlbnQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3BsYWluVGV4dF0gV2hldGhlciB0aGUgcmVzcG9uc2Ugc2hvdWxkIGJlIHJldHVybmVkIGFzIHBsYWluIHRleHQgb3IganNvbi5cbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIHN0YXRpYyBhamF4KG1ldGhvZCwgdXJsLCBkYXRhLCBzdWNjZXNzLCBlcnJvciwgcXVldWVkLCBwbGFpblRleHQpIHtcbiAgICBpZiAocXVldWVkKSB7XG4gICAgICBpZiAoTmV0d29yay5ydW5uaW5nUmVxdWVzdCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgICAgIHJldHVybiBOZXR3b3JrLmVucXVldWVSZXF1ZXN0KGFyZ3VtZW50cylcbiAgICAgIH1cbiAgICAgIE5ldHdvcmsucnVubmluZ1JlcXVlc3QgPSB0cnVlXG4gICAgfVxuXG4gICAgLyoqIEBuYW1lc3BhY2UgWERvbWFpblJlcXVlc3QgKiovXG4gICAgLyoqIEBuYW1lc3BhY2UgbG9jYXRpb24gKiovXG4gICAgaWYgKHR5cGVvZiBYRG9tYWluUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChsb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHA6JyAmJiB1cmwuaW5kZXhPZignaHR0cHM6JykgPT09IDApIHtcbiAgICAgICAgdXJsID0gYGh0dHA6JHt1cmwuc3Vic3RyaW5nKDYpfWBcbiAgICAgIH1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICAgIHJldHVybiBSZWZsZWN0LmFwcGx5KE5ldHdvcmsuYWpheElFOCwgbnVsbCwgYXJndW1lbnRzKVxuICAgIH1cblxuICAgIGxldCBoYW5kbGVkID0gZmFsc2VcblxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGhhbmRsZWQgPSB0cnVlXG5cbiAgICAgICAgbGV0IHJlc3BvbnNlXG4gICAgICAgIGxldCByYW5DYWxsYmFjayA9IGZhbHNlXG4gICAgICAgIGlmIChwbGFpblRleHQpIHtcbiAgICAgICAgICByZXNwb25zZSA9IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IobnVsbCwgeGhyKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwKVxuICAgICAgICAgICAgcmFuQ2FsbGJhY2sgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyYW5DYWxsYmFjaykge1xuICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzcG9uc2UsIHhocilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IocmVzcG9uc2UsIHhocilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocXVldWVkKSB7XG4gICAgICAgICAgTmV0d29yay5ydW5uaW5nUmVxdWVzdCA9IGZhbHNlXG4gICAgICAgICAgTmV0d29yay5kZXF1ZXVlUmVxdWVzdCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L3BsYWluJykgLy8gQXZvaWQgcHJlLWZsaWdodC5cbiAgICB4aHIuc2VuZChkYXRhKVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWhhbmRsZWQpIHtcbiAgICAgICAgeGhyLmFib3J0KClcbiAgICAgIH1cbiAgICB9LCBuZXR3b3JrVGltZW91dFNlY29uZHMgKiAxMDAwKVxuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYW4gYWpheCByZXF1ZXN0IGZvciBJRTguXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgVGhlIGh0dHAgbWV0aG9kLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gb3Blbi5cbiAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXlCdWZmZXJ8QmxvYnxEb2N1bWVudHxGb3JtRGF0YX0gZGF0YSBUaGUgZGF0YSB0byBiZSBzZW50IGluIGJvZHkuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1Y2Nlc3MgQSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gc3VjY2Vzcy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZXJyb3IgQSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gZXJyb3IuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcXVldWVkIFdoZXRoZXIgdGhlIHJlcXVlc3Qgc2hvdWxkIGJlIHF1ZXVlZCBvciBpbW1lZGlhdGVseSBzZW50LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBsYWluVGV4dCBXaGV0aGVyIHRoZSByZXNwb25zZSBzaG91bGQgYmUgcmV0dXJuZWQgYXMgcGxhaW4gdGV4dCBvciBqc29uLlxuICAgKi9cbiAgc3RhdGljIGFqYXhJRTgobWV0aG9kLCB1cmwsIGRhdGEsIHN1Y2Nlc3MsIGVycm9yLCBxdWV1ZWQsIHBsYWluVGV4dCkge1xuICAgIGxldCB4ZHIgPSBuZXcgWERvbWFpblJlcXVlc3QoKVxuICAgIHhkci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxldCByZXNwb25zZVxuICAgICAgbGV0IHJhbkNhbGxiYWNrID0gZmFsc2VcbiAgICAgIGlmIChwbGFpblRleHQpIHtcbiAgICAgICAgcmVzcG9uc2UgPSB4ZHIucmVzcG9uc2VUZXh0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4ZHIucmVzcG9uc2VUZXh0KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBlcnJvcihudWxsLCB4ZHIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMClcbiAgICAgICAgICByYW5DYWxsYmFjayA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFyYW5DYWxsYmFjaykge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICBzdWNjZXNzKHJlc3BvbnNlLCB4ZHIpXG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKVxuICAgICAgfVxuICAgICAgaWYgKHF1ZXVlZCkge1xuICAgICAgICBOZXR3b3JrLnJ1bm5pbmdSZXF1ZXN0ID0gZmFsc2VcbiAgICAgICAgTmV0d29yay5kZXF1ZXVlUmVxdWVzdCgpXG4gICAgICB9XG4gICAgfVxuICAgIHhkci5vbmVycm9yID0geGRyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgZXJyb3IobnVsbCwgeGRyKVxuICAgICAgICB9XG4gICAgICB9LCAwKVxuICAgICAgaWYgKHF1ZXVlZCkge1xuICAgICAgICBOZXR3b3JrLnJ1bm5pbmdSZXF1ZXN0ID0gZmFsc2VcbiAgICAgICAgTmV0d29yay5kZXF1ZXVlUmVxdWVzdCgpXG4gICAgICB9XG4gICAgfVxuICAgIHhkci5vbnByb2dyZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgfVxuICAgIHhkci5vcGVuKG1ldGhvZCwgdXJsKVxuICAgIHhkci50aW1lb3V0ID0gbmV0d29ya1RpbWVvdXRTZWNvbmRzICogMTAwMFxuICAgIHhkci5zZW5kKGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgcmVxdWVzdCB0byB0aGUgcmVxdWVzdCBxdWV1ZS5cbiAgICogQHBhcmFtIHtBcmd1bWVudHN9IHJlcXVlc3RBcmd1bWVudHMgVGhlIHJlcXVlc3QgYXJndW1lbnRzIGZyb20gdGhlIGluaXRpYWwgbWV0aG9kIGNhbGwuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdGF0aWMgZW5xdWV1ZVJlcXVlc3QocmVxdWVzdEFyZ3VtZW50cykge1xuICAgIHJlcXVlc3RRdWV1ZS5wdXNoKHJlcXVlc3RBcmd1bWVudHMpXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgcmVxdWVzdCBmcm9tIHRoZSByZXF1ZXN0IHF1ZXVlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3RhdGljIGRlcXVldWVSZXF1ZXN0KCkge1xuICAgIGxldCBhcmdzID0gcmVxdWVzdFF1ZXVlLnNoaWZ0KClcbiAgICBpZiAoYXJncykge1xuICAgICAgUmVmbGVjdC5hcHBseShOZXR3b3JrLmFqYXgsIG51bGwsIGFyZ3MpXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTmV0d29yay5qcyIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19NYXBDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheVNvbWUgPSByZXF1aXJlKCcuL19hcnJheVNvbWUnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19lcXVhbEFycmF5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fdG9Tb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9lcS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0J1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGRlZXAgY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlXG4gKiBlcXVpdmFsZW50LlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBzdXBwb3J0cyBjb21wYXJpbmcgYXJyYXlzLCBhcnJheSBidWZmZXJzLCBib29sZWFucyxcbiAqIGRhdGUgb2JqZWN0cywgZXJyb3Igb2JqZWN0cywgbWFwcywgbnVtYmVycywgYE9iamVjdGAgb2JqZWN0cywgcmVnZXhlcyxcbiAqIHNldHMsIHN0cmluZ3MsIHN5bWJvbHMsIGFuZCB0eXBlZCBhcnJheXMuIGBPYmplY3RgIG9iamVjdHMgYXJlIGNvbXBhcmVkXG4gKiBieSB0aGVpciBvd24sIG5vdCBpbmhlcml0ZWQsIGVudW1lcmFibGUgcHJvcGVydGllcy4gRnVuY3Rpb25zIGFuZCBET01cbiAqIG5vZGVzIGFyZSBjb21wYXJlZCBieSBzdHJpY3QgZXF1YWxpdHksIGkuZS4gYD09PWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uaXNFcXVhbChvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBvYmplY3QgPT09IG90aGVyO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNFcXVhbCh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFcXVhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNFcXVhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0xlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogSGFuZGxlcyBJbi1hcHAgbWVzc2FnZSBmaWx0ZXJpbmdcbiAqL1xuaW1wb3J0IFZhckNhY2hlIGZyb20gJy4vVmFyQ2FjaGUnXG5cbi8qKiBwcml2YXRlXG4gKiByZXR1cm4gdHJ1ZSBpZiBtZXNzYWdlIHBhc3Mgb25lIHRyaWdnZXIvdmVyYiBjb25kaXRpb25cbiAqIGlmIG5vIHRyaWdnZXIsIHJldHVybiBmYWxzZSBhcyBpbiBhbmRyb2lkXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zXG4gKiAvLyBAcGFyYW0ge29iamVjdH0gbWVzc2FnZVxuICogLy8gQHBhcmFtIHtvYmplY3Q/fSBtZXNzYWdlLndoZW5UcmlnZ2Vyc1xuICogQHJldHVybiB7ZnVuY3Rpb24oe29iamVjdH0pOntib29sZWFufX1cbiAqL1xuY29uc3QgZmlsdGVyQnlUcmlnZ2VycyA9IChwYXJhbXM9e30pID0+IChtZXNzYWdlKSA9PiB7XG4gIGNvbnN0IHRyaWdnZXJzID0gbWVzc2FnZS53aGVuVHJpZ2dlcnMgJiYgbWVzc2FnZS53aGVuVHJpZ2dlcnMuY2hpbGRyZW5cbiAgaWYoIXBhcmFtcy50cmlnZ2VycyB8fCAhdHJpZ2dlcnMpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGxldCBmaWx0ZXJlZEJ5VHJpZ2dlcnMgPSB0cmlnZ2Vycy5maWx0ZXIoKHRyaWdnZXIpID0+IChcbiAgICBwYXJhbXMudHJpZ2dlcnMuaW5jbHVkZXModHJpZ2dlci5zdWJqZWN0KSlcbiAgKVxuXG4gIGlmICghZmlsdGVyZWRCeVRyaWdnZXJzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGNvbnN0IHZlcmJGaWx0ZXIgPSBmaWx0ZXJCeVZlcmJzKHBhcmFtcylcbiAgaWYoIXZlcmJGaWx0ZXIpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBmaWx0ZXJlZEJ5VHJpZ2dlcnMgPSBmaWx0ZXJlZEJ5VHJpZ2dlcnMuZmlsdGVyKHZlcmJGaWx0ZXIpXG5cbiAgcmV0dXJuIGZpbHRlcmVkQnlUcmlnZ2Vycy5sZW5ndGhcbn1cblxuLyoqIHByaXZhdGVcbiAqIHJldHVybiB0cnVlIGlmIHRyaWdnZXIgcGFzcyB2ZXJiL25vdW4vb2JqZWN0cyBjb25kaXRpb25cbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXNcbiAqIC8vIEBwYXJhbSB7b2JqZWN0fSB0cmlnZ2VyXG4gKiAvLyBAcGFyYW0ge3N0cmluZ30gdHJpZ2dlci52ZXJiXG4gKiBAcmV0dXJuIHtmdW5jdGlvbih7b2JqZWN0fSk6e2Jvb2xlYW59fVxuICovXG5jb25zdCBmaWx0ZXJCeVZlcmJzID0gKHBhcmFtcykgPT4gKHRyaWdnZXIpID0+IHtcbiAgaWYodHJpZ2dlci52ZXJiID09PSAnJykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgY29uc3QgZXZhbHVhdG9yID0gdHJpZ2dlclZlcmJFdmFsdWF0b3JzW3RyaWdnZXIudmVyYl1cbiAgcmV0dXJuIGV2YWx1YXRvcih0cmlnZ2VyLCBwYXJhbXMubm91biwgcGFyYW1zLm9iamVjdHMpXG59XG5cbi8qKiBwcml2YXRlXG4gKiByZXR1cm4gdHJ1ZSBpZiBtZXNzYWdlIHBhc3MgYWxsIGxpbWl0c1xuICogQHBhcmFtIHtudW1iZXJ9IG5vd1xuICogLy8gQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2VcbiAqIEByZXR1cm4ge2Z1bmN0aW9uKHtvYmplY3R9KTp7Ym9vbGVhbn19XG4gKi9cbmNvbnN0IGZpbHRlckJ5TGltaXRzID0gKG5vdykgPT4gKG1lc3NhZ2UpID0+IHtcbiAgY29uc3QgbGltaXRzID0gbWVzc2FnZS53aGVuTGltaXRzICYmIG1lc3NhZ2Uud2hlbkxpbWl0cy5jaGlsZHJlblxuICBpZighbGltaXRzIHx8IGxpbWl0cy5sZW5ndGggPCAxKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gbGltaXRzLmV2ZXJ5KChsaW1pdCkgPT4ge1xuICAgICAgY29uc3QgdmVyYkV2YWx1YXRvciA9IGxpbWl0VmVyYkV2YWx1YXRvcnNbbGltaXQudmVyYl1cbiAgICAgIGlmICghdmVyYkV2YWx1YXRvcikge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHJldHVybiB2ZXJiRXZhbHVhdG9yKG1lc3NhZ2UuaWQsIGxpbWl0Lm5vdW4sIGxpbWl0Lm9iamVjdHNbMF0sIG5vdylcbiAgICB9XG4gIClcbn1cblxuLyoqIHByaXZhdGVcbiAqIHJldHVybiB0aGUgYW1vdW50IG9mIG9jY3VyZW5jZSBvZiBtZXNzYWdlVmlldyBzaW5jZSAnc2luY2UnXG4gKiBAcGFyYW0ge251bWJlcn0gc2luY2VcbiAqIC8vIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlVmlld1xuICogLy8gQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2VWaWV3LnRcbiAqIEByZXR1cm4ge2Z1bmN0aW9uKHtudW1iZXJ9LCB7b2JqZWN0fSk6IHtudW1iZXJ9fVxuICovXG5jb25zdCBjb3VudE1lc3NhZ2VWaWV3c0J5TGltaXQgPSAoc2luY2UpID0+IChpdGVyYXRvciwgbWVzc2FnZVZpZXcpID0+IHtcbiAgaWYobWVzc2FnZVZpZXcudCA+IHNpbmNlKSB7XG4gICAgaXRlcmF0b3IrPTFcbiAgfVxuICByZXR1cm4gaXRlcmF0b3Jcbn1cbi8qKiBwcml2YXRlXG4gKiByZXR1cm4gdHJ1ZSBpZiBubyBsaW1pdHMgYXJlIGRlZmluZWQgb3IgaWYgbm93IGlzIGluIHRoZSByYW5nZVxuICogQHBhcmFtIHtudW1iZXJ9IG5vd1xuICogLy8gQHBhcmFtIHtvYmplY3R9IGxpbWl0VGltZVxuICogLy8gQHBhcmFtIHtvYmplY3Q/fSBsaW1pdFRpbWUuc3RhcnRUaW1lXG4gKiAvLyBAcGFyYW0ge29iamVjdD99IGxpbWl0VGltZS5lbmRUaW1lXG4gKiBAcmV0dXJuIHtmdW5jdGlvbigge29iamVjdH0pOntCb29sZWFufX1cbiAqL1xuY29uc3QgZmlsdGVyQnlMaW1pdFRpbWVzID0gKG5vdykgPT4gKGxpbWl0VGltZSkgPT4ge1xuICByZXR1cm4gKCFsaW1pdFRpbWUuc3RhcnRUaW1lIHx8IGxpbWl0VGltZS5zdGFydFRpbWUgPCBub3cpICYmXG4gICAgKCFsaW1pdFRpbWUuZW5kVGltZSB8fCBsaW1pdFRpbWUuZW5kVGltZSA+IG5vdyApXG59XG5cbi8qKiBwcml2YXRlXG4gKiBwcm92aWRlIGV2YWx1YXRvcnMgZm9yIGZpbHRlckJ5VmVyYnNcbiAqL1xuY29uc3QgdHJpZ2dlclZlcmJFdmFsdWF0b3JzID0ge1xuICB0cmlnZ2VyczogKHRyaWdnZXIsIG5vdW4pID0+IHtcbiAgICByZXR1cm4gbm91biA9PT0gdHJpZ2dlci5ub3VuXG4gIH0sXG4gIHRyaWdnZXJzV2l0aFBhcmFtZXRlcjogKHRyaWdnZXIsIG5vdW4sIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBub3VuID09PSB0cmlnZ2VyLm5vdW4gJiYgcGFyYW1zLnBhcmFtVmFsdWUgPT09IHRyaWdnZXIub2JqZWN0c1twYXJhbXMucGFyYW1OYW1lXVxuICB9LFxuICBjaGFuZ2VzVG86ICh0cmlnZ2VyLCBub3VuLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbm91biA9PT0gdHJpZ2dlci5ub3VuICYmIHBhcmFtcy50byA9PT0gdHJpZ2dlci5vYmplY3RzWzBdXG4gIH0sXG4gIGNoYW5nZXNGcm9tVG86ICh0cmlnZ2VyLCBub3VuLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbm91biA9PT0gdHJpZ2dlci5ub3VuICYmXG4gICAgICBwYXJhbXMuZnJvbSA9PT0gdHJpZ2dlci5vYmplY3RzWzBdICYmXG4gICAgICBwYXJhbXMudG8gPT09IHRyaWdnZXIub2JqZWN0c1sxXVxuICB9XG59XG5cbi8qKiBwcml2YXRlXG4gKiBwcm92aWRlIGV2YWx1YXRvcnMgZm9yIGZpbHRlckJ5TGltaXRcbiAqL1xuY29uc3QgbGltaXRWZXJiRXZhbHVhdG9ycyA9IHtcbiAgbGltaXRVc2VyOiAobWVzc2FnZUlkLCBtYXhWaWV3KSA9PiB7XG4gICAgcmV0dXJuIFZhckNhY2hlLmdldE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZCkubGVuZ3RoIDwgbWF4Vmlld1xuICB9LFxuICBsaW1pdE1vbnRoOiAobWVzc2FnZUlkLCBtYXhWaWV3LCBhbW91bnQsIG5vdykgPT4ge1xuICAgIGNvbnN0IHNpbmNlID0gbm93IC0gYW1vdW50ICogMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gICAgcmV0dXJuIFZhckNhY2hlLmdldE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZClcbiAgICAgIC5yZWR1Y2UoIGNvdW50TWVzc2FnZVZpZXdzQnlMaW1pdChzaW5jZSksIDApIDwgbWF4Vmlld1xuICB9LFxuICBsaW1pdFdlZWs6IChtZXNzYWdlSWQsIG1heFZpZXcsIGFtb3VudCwgbm93KSA9PiB7XG4gICAgY29uc3Qgc2luY2UgPSBub3cgLSBhbW91bnQgKiA3ICogMjQgKiA2MCAqIDYwICogMTAwMFxuICAgIHJldHVybiBWYXJDYWNoZS5nZXRNZXNzYWdlVmlldyhtZXNzYWdlSWQpXG4gICAgICAucmVkdWNlKCBjb3VudE1lc3NhZ2VWaWV3c0J5TGltaXQoc2luY2UpLCAwKSA8IG1heFZpZXdcbiAgfSxcbiAgbGltaXREYXk6IChtZXNzYWdlSWQsIG1heFZpZXcsIGFtb3VudCwgbm93KSA9PiB7XG4gICAgY29uc3Qgc2luY2UgPSBub3cgLSBhbW91bnQgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gICAgcmV0dXJuIFZhckNhY2hlLmdldE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZClcbiAgICAgIC5yZWR1Y2UoIGNvdW50TWVzc2FnZVZpZXdzQnlMaW1pdChzaW5jZSksIDApIDwgbWF4Vmlld1xuICB9LFxuICBsaW1pdEhvdXI6IChtZXNzYWdlSWQsIG1heFZpZXcsIGFtb3VudCwgbm93KSA9PiB7XG4gICAgY29uc3Qgc2luY2UgPSBub3cgLSBhbW91bnQgKiA2MCAqIDYwICogMTAwMFxuICAgIHJldHVybiBWYXJDYWNoZS5nZXRNZXNzYWdlVmlldyhtZXNzYWdlSWQpXG4gICAgICAucmVkdWNlKCBjb3VudE1lc3NhZ2VWaWV3c0J5TGltaXQoc2luY2UpLCAwKSA8IG1heFZpZXdcbiAgfSxcbiAgbGltaXRNaW51dGU6IChtZXNzYWdlSWQsIG1heFZpZXcsIGFtb3VudCwgbm93KSA9PiB7XG4gICAgY29uc3Qgc2luY2UgPSBub3cgLSBhbW91bnQgKiA2MCAqIDEwMDBcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0TWVzc2FnZVZpZXcobWVzc2FnZUlkKVxuICAgICAgLnJlZHVjZSggY291bnRNZXNzYWdlVmlld3NCeUxpbWl0KHNpbmNlKSwgMCkgPCBtYXhWaWV3XG4gIH0sXG4gIGxpbWl0U2Vjb25kOiAobWVzc2FnZUlkLCBtYXhWaWV3LCBhbW91bnQsIG5vdykgPT4ge1xuICAgIGNvbnN0IHNpbmNlID0gbm93IC0gYW1vdW50ICogMTAwMFxuICAgIHJldHVybiBWYXJDYWNoZS5nZXRNZXNzYWdlVmlldyhtZXNzYWdlSWQpXG4gICAgICAucmVkdWNlKCBjb3VudE1lc3NhZ2VWaWV3c0J5TGltaXQoc2luY2UpLCAwKSA8IG1heFZpZXdcbiAgfSxcbiAgbGltaXRTZXNzaW9uOiAobWVzc2FnZUlkLCBtYXhWaWV3KSA9PiB7XG4gICAgcmV0dXJuIFZhckNhY2hlLmdldE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZCwgdHJ1ZSkubGVuZ3RoIDwgbWF4Vmlld1xuICB9LFxufVxuLyoqXG4gKiBQcm92aWRlIGZpbHRlcmluZyBsb2dpYyBmb3IgbWVzc2FnZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uTWFuYWdlciB7XG5cbiAgLyoqIHB1YmxpY1xuICAgKiByZXR1cm4gYW4gYXJyYXkgb2YgZmlsdGVyZWQgbWVzc2FnZVxuICAgKiBAcGFyYW0ge2FycmF5fSBtZXNzYWdlc1xuICAgKiBAcGFyYW0ge3N0cmluZyB8IHN0cmluZ1tdIHwgP30gdHJpZ2dlcnNcbiAgICogQHBhcmFtIHtzdHJpbmc/fSB2ZXJiXG4gICAqIEBwYXJhbSB7c3RyaW5nP30gbm91blxuICAgKiBAcGFyYW0ge29iamVjdD99IHBhcmFtc1xuICAgKiBAcGFyYW0ge3N0cmluZz99IHBhcmFtcy5mcm9tXG4gICAqIEBwYXJhbSB7c3RyaW5nP30gcGFyYW1zLnRvXG4gICAqIEBwYXJhbSB7c3RyaW5nP30gcGFyYW1zLnBhcmFtVmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmc/fSBwYXJhbXMucGFyYW1OYW1lXG4gICAqIEByZXR1cm4ge2FycmF5fVxuICAgKi9cbiAgc3RhdGljIGZpbHRlck1lc3NhZ2VzKG1lc3NhZ2VzLCB0cmlnZ2Vycz0nJywgdmVyYiwgbm91biwgcGFyYW1zKSB7XG4gICAgaWYoIUFycmF5LmlzQXJyYXkodHJpZ2dlcnMpKSB7XG4gICAgICB0cmlnZ2VycyA9IFt0cmlnZ2Vyc11cbiAgICB9XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBtZXNzYWdlcy5maWx0ZXIoZmlsdGVyQnlUcmlnZ2VycyhcbiAgICAgICAge1xuICAgICAgICAgIHRyaWdnZXJzOiB0cmlnZ2Vyc1xuICAgICAgICB9XG4gICAgICApKVxuICAgICAgLmZpbHRlcihmaWx0ZXJCeUxpbWl0cyhub3cpKVxuICAgICAgLmZpbHRlcihmaWx0ZXJCeUxpbWl0VGltZXMobm93KSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eSlcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWN0aW9uTWFuYWdlci5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5jb25zdCBkYXRhQnJvd3NlciA9IFt7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnQ2hyb21lJyxcbiAgaWRlbnRpdHk6ICdDaHJvbWUnXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnT21uaVdlYicsXG4gIHZlcnNpb25TZWFyY2g6ICdPbW5pV2ViLycsXG4gIGlkZW50aXR5OiAnT21uaVdlYidcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudmVuZG9yLFxuICBzdWJTdHJpbmc6ICdBcHBsZScsXG4gIGlkZW50aXR5OiAnU2FmYXJpJyxcbiAgdmVyc2lvblNlYXJjaDogJ1ZlcnNpb24nXG59LCB7XG4gIHByb3A6IHdpbmRvdy5vcGVyYSxcbiAgaWRlbnRpdHk6ICdPcGVyYScsXG4gIHZlcnNpb25TZWFyY2g6ICdWZXJzaW9uJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci52ZW5kb3IsXG4gIHN1YlN0cmluZzogJ2lDYWInLFxuICBpZGVudGl0eTogJ2lDYWInXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnZlbmRvcixcbiAgc3ViU3RyaW5nOiAnS0RFJyxcbiAgaWRlbnRpdHk6ICdLb25xdWVyb3InXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnRmlyZWZveCcsXG4gIGlkZW50aXR5OiAnRmlyZWZveCdcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudmVuZG9yLFxuICBzdWJTdHJpbmc6ICdDYW1pbm8nLFxuICBpZGVudGl0eTogJ0NhbWlubydcbn0sIHsgLy8gZm9yIG5ld2VyIE5ldHNjYXBlICg2KylcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdOZXRzY2FwZScsXG4gIGlkZW50aXR5OiAnTmV0c2NhcGUnXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnTVNJRScsXG4gIGlkZW50aXR5OiAnRXhwbG9yZXInLFxuICB2ZXJzaW9uU2VhcmNoOiAnTVNJRSdcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdHZWNrbycsXG4gIGlkZW50aXR5OiAnTW96aWxsYScsXG4gIHZlcnNpb25TZWFyY2g6ICdydidcbn0sIHsgLy8gZm9yIG9sZGVyIE5ldHNjYXBlICg0LSlcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdNb3ppbGxhJyxcbiAgaWRlbnRpdHk6ICdOZXRzY2FwZScsXG4gIHZlcnNpb25TZWFyY2g6ICdNb3ppbGxhJ1xufV1cblxuY29uc3QgZGF0YU9TID0gW3tcbiAgc3RyaW5nOiBuYXZpZ2F0b3IucGxhdGZvcm0sXG4gIHN1YlN0cmluZzogJ1dpbicsXG4gIGlkZW50aXR5OiAnV2luZG93cydcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IucGxhdGZvcm0sXG4gIHN1YlN0cmluZzogJ01hYycsXG4gIGlkZW50aXR5OiAnTWFjIE9TJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIHN1YlN0cmluZzogJ2lQaG9uZScsXG4gIGlkZW50aXR5OiAnaU9TJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci5wbGF0Zm9ybSxcbiAgc3ViU3RyaW5nOiAnTGludXgnLFxuICBpZGVudGl0eTogJ0xpbnV4J1xufV1cblxuLy8gQnJvd3NlciBkZXRlY3Rpb24uIFNvdXJjZTogaHR0cDovL3d3dy5xdWlya3Ntb2RlLm9yZy9qcy9kZXRlY3QuaHRtbFxuLyoqXG4gKiBIZWxwZXIgY2xhc3MgdG8gZGV0ZWN0IHdoaWNoIGJyb3dzZXIgY2xpZW50IGlzIHVzaW5nLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcm93c2VyRGV0ZWN0b3Ige1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIG9iamVjdCB3aXRoIGN1cnJlbnQgYnJvd3NlciBzZXR0aW5ncy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYnJvd3NlciA9IHRoaXMuX3NlYXJjaFN0cmluZyhkYXRhQnJvd3NlcikgfHwgJ1Vua25vd24gQnJvd3NlcidcbiAgICB0aGlzLnZlcnNpb24gPSB0aGlzLl9zZWFyY2hWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8XG4gICAgICAgIHRoaXMuX3NlYXJjaFZlcnNpb24obmF2aWdhdG9yLmFwcFZlcnNpb24pIHx8ICdVbmtub3duIFZlcnNpb24nXG4gICAgdGhpcy5PUyA9IHRoaXMuX3NlYXJjaFN0cmluZyhkYXRhT1MpIHx8ICdVbmtub3duIE9TJ1xuICB9XG5cbiAgLyoqXG4gICAqIE1hdGNoZXMgdGhlIGNsaWVudCdzIHN5c3RlbSB0byB0aGUgcHJlZGVmaW5lZCBzeXN0ZW0gbGlzdC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgVGhlIGRhdGEgb2JqZWN0IHRvIHNjYW4uXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGZvdW5kIGlkZW50aXR5IHN0cmluZy5cbiAgICovXG4gIF9zZWFyY2hTdHJpbmcoZGF0YSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGRhdGFTdHJpbmcgPSBkYXRhW2ldLnN0cmluZ1xuICAgICAgbGV0IGRhdGFQcm9wID0gZGF0YVtpXS5wcm9wXG4gICAgICB0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcgPSBkYXRhW2ldLnZlcnNpb25TZWFyY2ggfHwgZGF0YVtpXS5pZGVudGl0eVxuICAgICAgaWYgKGRhdGFTdHJpbmcpIHtcbiAgICAgICAgaWYgKGRhdGFTdHJpbmcuaW5kZXhPZihkYXRhW2ldLnN1YlN0cmluZykgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGFbaV0uaWRlbnRpdHlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkYXRhUHJvcCkge1xuICAgICAgICByZXR1cm4gZGF0YVtpXS5pZGVudGl0eVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyB0aGUgY3VycmVudCB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBzeXN0ZW0uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhU3RyaW5nIFRoZSBkYXRhIG9iamVjdCB0byBzY2FuLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBmb3VuZCBudW1iZXIuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2VhcmNoVmVyc2lvbihkYXRhU3RyaW5nKSB7XG4gICAgaWYgKCFkYXRhU3RyaW5nKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgbGV0IGluZGV4ID0gZGF0YVN0cmluZy5pbmRleE9mKHRoaXMudmVyc2lvblNlYXJjaFN0cmluZylcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoZGF0YVN0cmluZy5zdWJzdHJpbmcoaW5kZXggKyB0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcubGVuZ3RoICsgMSkpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Ccm93c2VyRGV0ZWN0b3IuanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vQ29uc3RhbnRzJ1xuaW1wb3J0IEFyZ3NCdWlsZGVyIGZyb20gJy4vQXJnc0J1aWxkZXInXG5pbXBvcnQgU29ja2V0SW9DbGllbnQgZnJvbSAnLi9Tb2NrZXRJb0NsaWVudCdcbmltcG9ydCBWYXJDYWNoZSBmcm9tICcuL1ZhckNhY2hlJ1xuaW1wb3J0IExlYW5wbHVtUmVxdWVzdCBmcm9tICcuL0xlYW5wbHVtUmVxdWVzdCdcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJ1xuaW1wb3J0IGV2ZW50cyBmcm9tICcuL0V2ZW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhbnBsdW1Tb2NrZXQge1xuXG4gIHN0YXRpYyBzb2NrZXRIb3N0ID0gJ2Rldi5sZWFucGx1bS5jb20nXG5cbiAgc3RhdGljIGNvbm5lY3QoKSB7XG4gICAgaWYgKCFXZWJTb2NrZXQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdZb3VyIGJyb3dzZXIgZG9lc25cXCd0IHN1cHBvcnQgV2ViU29ja2V0cy4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGNsaWVudCA9IG5ldyBTb2NrZXRJb0NsaWVudCgpXG4gICAgbGV0IGF1dGhTZW50ID0gZmFsc2VcbiAgICBjbGllbnQub25vcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWF1dGhTZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogQ29ubmVjdGVkIHRvIGRldmVsb3BtZW50IHNlcnZlci4nKVxuICAgICAgICBsZXQgYXJncyA9IHt9XG4gICAgICAgIGFyZ3NbQ29uc3RhbnRzLlBBUkFNUy5BUFBfSURdID0gTGVhbnBsdW1SZXF1ZXN0LmFwcElkXG4gICAgICAgIGFyZ3NbQ29uc3RhbnRzLlBBUkFNUy5ERVZJQ0VfSURdID0gTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkXG4gICAgICAgIGNsaWVudC5zZW5kKCdhdXRoJywgYXJncylcbiAgICAgICAgYXV0aFNlbnQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIGNsaWVudC5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogU29ja2V0IGVycm9yJywgZXZlbnQpXG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKiBAcGFyYW0gYXJnc1tdLmVtYWlsXG4gICAgICovXG4gICAgY2xpZW50Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50LCBhcmdzKSB7XG4gICAgICBpZiAoZXZlbnQgPT09ICd1cGRhdGVWYXJzJykge1xuICAgICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5HRVRfVkFSUyxcbiAgICAgICAgICAgIG5ldyBBcmdzQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklOQ0xVREVfREVGQVVMVFMsIGZhbHNlKSwge1xuICAgICAgICAgICAgICBxdWV1ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgICAgICAgICByZXNwb25zZTogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgZ2V0VmFyc1Jlc3BvbnNlID0gTGVhbnBsdW1SZXF1ZXN0LmdldExhc3RSZXNwb25zZShyZXNwb25zZSlcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gZ2V0VmFyc1Jlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUlNdXG4gICAgICAgICAgICAgICAgbGV0IHZhcmlhbnRzID0gZ2V0VmFyc1Jlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUklBTlRTXVxuICAgICAgICAgICAgICAgIGxldCBhY3Rpb25NZXRhZGF0YSA9IGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5BQ1RJT05fTUVUQURBVEFdXG4gICAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsKHZhbHVlcywgVmFyQ2FjaGUuZGlmZnMpKSB7XG4gICAgICAgICAgICAgICAgICBWYXJDYWNoZS5hcHBseURpZmZzKHZhbHVlcywgdmFyaWFudHMsIGFjdGlvbk1ldGFkYXRhKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAnZ2V0VmFyaWFibGVzJykge1xuICAgICAgICBWYXJDYWNoZS5zZW5kVmFyaWFibGVzKClcbiAgICAgICAgY2xpZW50LnNlbmQoJ2dldENvbnRlbnRSZXNwb25zZScsIHtcbiAgICAgICAgICAndXBkYXRlZCc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09ICdnZXRBY3Rpb25zJykge1xuICAgICAgICAvLyBVbnN1cHBvcnRlZCBpbiBKYXZhU2NyaXB0IFNESy5cbiAgICAgICAgY2xpZW50LnNlbmQoJ2dldENvbnRlbnRSZXNwb25zZScsIHtcbiAgICAgICAgICAndXBkYXRlZCc6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAncmVnaXN0ZXJEZXZpY2UnKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICAgICAgICBhbGVydChgWW91ciBkZXZpY2UgaGFzIGJlZW4gcmVnaXN0ZXJlZCB0byAke2FyZ3NbMF0uZW1haWx9LmApXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAndHJpZ2dlcicpIHtcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3dlYnNvY2tldC90cmlnZ2VyJywge1xuICAgICAgICAgIGFyZ3NcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgY2xpZW50Lm9uY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogRGlzY29ubmVjdGVkIHRvIGRldmVsb3BtZW50IHNlcnZlci4nKVxuICAgICAgYXV0aFNlbnQgPSBmYWxzZVxuICAgIH1cbiAgICBjbGllbnQuY29ubmVjdChMZWFucGx1bVNvY2tldC5zb2NrZXRIb3N0KVxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFjbGllbnQuY29ubmVjdGVkICYmICFjbGllbnQuY29ubmVjdGluZykge1xuICAgICAgICBjbGllbnQuY29ubmVjdChMZWFucGx1bVNvY2tldC5zb2NrZXRIb3N0KVxuICAgICAgfVxuICAgIH0sIDUwMDApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MZWFucGx1bVNvY2tldC5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5cbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9Db25zdGFudHMnXG5pbXBvcnQgQXJnc0J1aWxkZXIgZnJvbSAnLi9BcmdzQnVpbGRlcidcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJ1xuaW1wb3J0IExvY2FsU3RvcmFnZU1hbmFnZXIgZnJvbSAnLi9Mb2NhbFN0b3JhZ2VNYW5hZ2VyJ1xuaW1wb3J0IExlYW5wbHVtUmVxdWVzdCBmcm9tICcuL0xlYW5wbHVtUmVxdWVzdCdcblxuY29uc3QgQVBQTElDQVRJT05fU0VSVkVSX1BVQkxJQ19LRVkgPVxuICAgICdCSW5XUHBXbnRmUjM5cmdYU1AwNHBxZG1FZERHYTUwejZ6cWJNdnh5eEpDd3pYSXVTcFNoOEM4ODgtQ2ZKODJXRUxsN1hlOGNqQScgK1xuICAgICduZkN0LTN2SzBDaTY4J1xuXG5sZXQgaXNTdWJzY3JpYmVkID0gZmFsc2VcbmxldCBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uID0gbnVsbFxuXG4vKipcbiAqIFB1c2ggTWFuYWdlciBoYW5kbGVzIHRoZSByZWdpc3RyYXRpb24gYW5kIHN1YnNjcmlwdGlvbiBmb3Igd2ViIHB1c2guXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1c2hNYW5hZ2VyIHtcbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHdlYiBwdXNoIGlzIHN1cHBvcnRlZCBpbiB0aGUgYnJvd3Nlci5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiBzdXBwb3J0ZWQsIGVsc2UgZmFsc2UuXG4gICAqL1xuICBzdGF0aWMgaXNXZWJQdXNoU3VwcG9ydGVkKCkge1xuICAgIHJldHVybiBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIgJiYgJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvciAmJlxuICAgICAgICAnUHVzaE1hbmFnZXInIGluIHdpbmRvd1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoZSBicm93c2VyIGlzIHN1YnNjcmliZWQgdG8gd2ViIHB1c2ggbm90aWZpY2F0aW9ucy5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gVHJ1ZSBpZiBzdWJzY3JpYmVkLCBlbHNlIGZhbHNlLlxuICAgKi9cbiAgc3RhdGljIGlzV2ViUHVzaFN1YnNjcmliZWQoKSB7XG4gICAgaWYgKCFQdXNoTWFuYWdlci5pc1dlYlB1c2hTdXBwb3J0ZWQoKSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHJlc29sdmUoZmFsc2UpXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gUHVzaE1hbmFnZXIuZ2V0U2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbigpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8qKiBAbmFtZXNwYWNlIHJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlciBUaGUgcHVzaCBtYW5hZ2VyIG9iamVjdCBvZiB0aGUgYnJvd3Nlci4gKiovXG4gICAgICAgICAgICAgIC8qKiBAbmFtZXNwYWNlIHJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24gKiovXG4gICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKVxuICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzU3Vic2NyaWJlZCA9IHN1YnNjcmlwdGlvbiAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgUHVzaE1hbmFnZXIudXBkYXRlTmV3U3Vic2NyaXB0aW9uT25TZXJ2ZXIoc3Vic2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaXNTdWJzY3JpYmVkKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGZvciBXZWJQdXNoLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgc2VydmljZVdvcmtlclVybCBUaGUgdXJsIHRoYXQgc2VydmVzIHRoZSBzZXJ2aWNlIHdvcmtlclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbiB5b3VyIGRvbWFpbi5cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrICAgICAgICAgVGhlIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCB3aXRoIHJlc3VsdC5cbiAgICogQHJldHVybiB7b2JqZWN0fSBub3RoaW5nXG4gICAqL1xuICBzdGF0aWMgcmVnaXN0ZXIoc2VydmljZVdvcmtlclVybCwgY2FsbGJhY2spIHtcbiAgICBpZiAoIVB1c2hNYW5hZ2VyLmlzV2ViUHVzaFN1cHBvcnRlZCgpKSB7XG4gICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IFB1c2ggbWVzc2FnaW5nIGlzIG5vdCBzdXBwb3J0ZWQuJylcbiAgICAgIHJldHVybiBjYWxsYmFjayhmYWxzZSlcbiAgICB9XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoXG4gICAgICAgIHNlcnZpY2VXb3JrZXJVcmwgPyBzZXJ2aWNlV29ya2VyVXJsIDogJy9zdy5taW4uanMnLCBudWxsKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgICBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uID0gcmVnaXN0cmF0aW9uXG5cbiAgICAgICAgICBsZXQgc2VydmljZVdvcmtlclxuICAgICAgICAgIGlmIChyZWdpc3RyYXRpb24uaW5zdGFsbGluZykge1xuICAgICAgICAgICAgc2VydmljZVdvcmtlciA9IHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nXG4gICAgICAgICAgfSBlbHNlIGlmIChyZWdpc3RyYXRpb24ud2FpdGluZykge1xuICAgICAgICAgICAgc2VydmljZVdvcmtlciA9IHJlZ2lzdHJhdGlvbi53YWl0aW5nXG4gICAgICAgICAgfSBlbHNlIGlmIChyZWdpc3RyYXRpb24uYWN0aXZlKSB7XG4gICAgICAgICAgICBzZXJ2aWNlV29ya2VyID0gcmVnaXN0cmF0aW9uLmFjdGl2ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghc2VydmljZVdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgc3Vic2NyaWJlID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gU2V0IHRoZSBpbml0aWFsIHN1YnNjcmlwdGlvbiB2YWx1ZVxuICAgICAgICAgICAgc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKVxuICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICBpc1N1YnNjcmliZWQgPSAhKHN1YnNjcmlwdGlvbiA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICBpZiAoaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIFB1c2hNYW5hZ2VyLnVwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyKHN1YnNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhpc1N1YnNjcmliZWQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZXJ2aWNlV29ya2VyLnN0YXRlID09PSAnYWN0aXZhdGVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmliZSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VydmljZVdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdzdGF0ZWNoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5zdGF0ZSAhPT0gJ2FjdGl2YXRlZCcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN1YnNjcmliZSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBTZXJ2aWNlIFdvcmtlciBFcnJvcjogJywgZXJyb3IpXG4gICAgICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRoZSB1c2VyKGJyb3dzZXIpIHRvIHB1c2guXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFJlc29sdmVzIGlmIHN1YnNjcmlwdGlvbiBzdWNjZXNzZnVsLCBvdGhlcndpc2UgcmVqZWN0cy5cbiAgICovXG4gIHN0YXRpYyBzdWJzY3JpYmVVc2VyKCkge1xuICAgIGNvbnN0IGFwcGxpY2F0aW9uU2VydmVyS2V5ID0gUHVzaE1hbmFnZXIudXJsQjY0VG9VaW50OEFycmF5KEFQUExJQ0FUSU9OX1NFUlZFUl9QVUJMSUNfS0VZKVxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIC8qKiBAbmFtZXNwYWNlIHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuc3Vic2NyaWJlIFN1YnNjcmliZSB0byBwdXNoLiAqKi9cbiAgICAgIHJldHVybiBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLnN1YnNjcmliZSh7XG4gICAgICAgIHVzZXJWaXNpYmxlT25seTogdHJ1ZSxcbiAgICAgICAgYXBwbGljYXRpb25TZXJ2ZXJLZXlcbiAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgIFB1c2hNYW5hZ2VyLnVwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyKHN1YnNjcmlwdGlvbilcbiAgICAgICAgICAgICAgaXNTdWJzY3JpYmVkID0gdHJ1ZVxuICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShpc1N1YnNjcmliZWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KGBMZWFucGx1bTogRmFpbGVkIHRvIHN1YnNjcmliZSB0aGUgdXNlcjogJHtlcnJ9YClcbiAgICAgICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgdGhlIHVzZXIoYnJvd3NlcikgZnJvbSBwdXNoLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXNvbHZlcyBpZiB1bnN1YnNjcmliZWQsIG90aGVyd2lzZSByZWplY3RzLlxuICAgKi9cbiAgc3RhdGljIHVuc3Vic2NyaWJlVXNlcigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgUHVzaE1hbmFnZXIuaXNXZWJQdXNoU3Vic2NyaWJlZCgpLnRoZW4oKHN1YnNjcmliZWQpID0+IHtcbiAgICAgICAgaWYgKCFzdWJzY3JpYmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoKVxuICAgICAgICB9XG5cbiAgICAgICAgc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAvKiogQG5hbWVzcGFjZSBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLnVuc3Vic2NyaWJlIFVuc3Vic2NyaWJlIHRvXG4gICAgICAgICAgICAgICAgICogIHB1c2guICoqL1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiByZWplY3QoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICByZWplY3QoYExlYW5wbHVtOiBFcnJvciB1bnN1YnNjcmliaW5nOiAke2Vycm9yfWApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oc3VjY2Vzcykge1xuICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiByZWplY3QoKVxuICAgICAgICAgICAgfSlcbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICByZXR1cm4gcmVqZWN0KClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBvYmplY3QgZnJvbSBicm93c2VyLlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IFJldHVybnMgdGhlIHJlZ2lzdHJhdGlvbiBvciBudWxsLlxuICAgKi9cbiAgc3RhdGljIGdldFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbikge1xuICAgICAgICByZXNvbHZlKHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogQG5hbWVzcGFjZSBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5nZXRSZWdpc3RyYXRpb24gUmV0cmlldmVzIHRoZSAgcHVzaCByZWdpc3RyYXRpb25cbiAgICAgICAgICogZnJvbSB0aGUgYnJvd3Nlci4gKiovXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmdldFJlZ2lzdHJhdGlvbigpLnRoZW4oKHJlZ2lzdHJhdGlvbikgPT4ge1xuICAgICAgICAgIHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24gPSByZWdpc3RyYXRpb25cbiAgICAgICAgICByZXNvbHZlKHJlZ2lzdHJhdGlvbilcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEVuY29kZXMgYSBiYXNlNjQgdXJsIHN0cmluZyB0byBhbiB1aW50OCBhcnJhcnkuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gYmFzZTY0U3RyaW5nIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7VWludDhBcnJheX0gICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHN0YXRpYyB1cmxCNjRUb1VpbnQ4QXJyYXkoYmFzZTY0U3RyaW5nKSB7XG4gICAgY29uc3QgcGFkZGluZyA9ICc9Jy5yZXBlYXQoKDQgLSBiYXNlNjRTdHJpbmcubGVuZ3RoICUgNCkgJSA0KVxuICAgIGNvbnN0IGJhc2U2NCA9IChiYXNlNjRTdHJpbmcgKyBwYWRkaW5nKVxuICAgICAgICAucmVwbGFjZSgvLS9nLCAnKycpXG4gICAgICAgIC5yZXBsYWNlKC9fL2csICcvJylcblxuICAgIGNvbnN0IHJhd0RhdGEgPSB3aW5kb3cuYXRvYihiYXNlNjQpXG4gICAgY29uc3Qgb3V0cHV0QXJyYXkgPSBuZXcgVWludDhBcnJheShyYXdEYXRhLmxlbmd0aClcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmF3RGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgb3V0cHV0QXJyYXlbaV0gPSByYXdEYXRhLmNoYXJDb2RlQXQoaSlcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dEFycmF5XG4gIH1cblxuICAvKipcbiAgICogW3ByZXBhcmVTdWJzY3JpcHRpb24gZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge29iamVjdH0gc3Vic2NyaXB0aW9uIFRoZSByYXcgc3Vic2NyaXB0aW9uIGZyb20gYnJvd3Nlci5cbiAgICogQHBhcmFtICB7ZnVuY3Rpb259IHN1YnNjcmlwdGlvbi5nZXRLZXkgVGhlIHN1YnNjcmlwdGlvbiBrZXkuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gc3Vic2NyaXB0aW9uLmVuZHBvaW50IFRoZSBzdWJzY3JpcHRpb24ga2V5LlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBzdWJzY3JpcHRpb24gb2JqZWN0IHRvIGJlIHNlbnQgdG8gc2VydmVyLlxuICAgKi9cbiAgc3RhdGljIHByZXBhcmVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgbGV0IGtleSA9IHN1YnNjcmlwdGlvbi5nZXRLZXkgPyBzdWJzY3JpcHRpb24uZ2V0S2V5KCdwMjU2ZGgnKSA6ICcnXG4gICAgbGV0IGF1dGggPSBzdWJzY3JpcHRpb24uZ2V0S2V5ID8gc3Vic2NyaXB0aW9uLmdldEtleSgnYXV0aCcpIDogJydcbiAgICAvLyBub2luc3BlY3Rpb24gRVM2TW9kdWxlc0RlcGVuZGVuY2llc1xuICAgIGxldCBrZXlBc2NpaSA9IGJ0b2EoUmVmbGVjdC5hcHBseShTdHJpbmcuZnJvbUNoYXJDb2RlLCBudWxsLCBuZXcgVWludDhBcnJheShrZXkpKSlcbiAgICAvLyBub2luc3BlY3Rpb24gRVM2TW9kdWxlc0RlcGVuZGVuY2llc1xuICAgIGxldCBhdXRoQXNjaWkgPSBidG9hKFJlZmxlY3QuYXBwbHkoU3RyaW5nLmZyb21DaGFyQ29kZSwgbnVsbCwgbmV3IFVpbnQ4QXJyYXkoYXV0aCkpKVxuICAgIHJldHVybiB7XG4gICAgICBlbmRwb2ludDogc3Vic2NyaXB0aW9uLmVuZHBvaW50LFxuICAgICAga2V5OiBrZXlBc2NpaSxcbiAgICAgIGF1dGg6IGF1dGhBc2NpaVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgbmV3IHN1YnNjcmlwdGlvbiBvYmplY3QgdG8gdGhlIExlYW5wbHVtIHNlcnZlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHN1YnNjcmlwdGlvbiBUaGUgc3Vic2NyaXB0aW9uLlxuICAgKi9cbiAgc3RhdGljIHVwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyKHN1YnNjcmlwdGlvbikge1xuICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgIGxldCBwcmVwYXJlZFN1YnNjcmlwdGlvbiA9IFB1c2hNYW5hZ2VyLnByZXBhcmVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKVxuICAgICAgbGV0IHByZXBhcmVkU3Vic2NyaXB0aW9uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocHJlcGFyZWRTdWJzY3JpcHRpb24pXG4gICAgICBsZXQgZXhpc3RpbmdTdWJzY3JpcHRpb25TdHJpbmcgPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoXG4gICAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5QVVNIX1NVQlNDUklQVElPTilcbiAgICAgIGlmICghaXNFcXVhbChleGlzdGluZ1N1YnNjcmlwdGlvblN0cmluZywgcHJlcGFyZWRTdWJzY3JpcHRpb25TdHJpbmcpKSB7XG4gICAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuUFVTSF9TVUJTQ1JJUFRJT04sXG4gICAgICAgICAgICBwcmVwYXJlZFN1YnNjcmlwdGlvblN0cmluZylcbiAgICAgICAgUHVzaE1hbmFnZXIuc2V0U3Vic2NyaXB0aW9uKHByZXBhcmVkU3Vic2NyaXB0aW9uU3RyaW5nKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHRoZSBzdWJzY3JpcHRpb24gdG8gdGhlIExlYW5wbHVtIHNlcnZlci5cbiAgICogQHBhcmFtIHtTdHJpbmcvT2JqZWN0fSBzdWJzY3JpcHRpb24gVGhlIHN1YnNjcmlwdGlvbiBzdHJpbmcuXG4gICAqL1xuICBzdGF0aWMgc2V0U3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbikge1xuICAgIGlmICghc3Vic2NyaXB0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuU0VUX0RFVklDRV9BVFRSSUJVVEVTLFxuICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKS5hZGQoQ29uc3RhbnRzLlBBUkFNUy5XRUJfUFVTSF9TVUJTQ1JJUFRJT04sXG4gICAgICAgICAgICBzdWJzY3JpcHRpb24pLCB7XG4gICAgICAgICAgcXVldWVkOiBmYWxzZSxcbiAgICAgICAgICBzZW5kTm93OiB0cnVlXG4gICAgICAgIH1cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9QdXNoTWFuYWdlci5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vQ29uc3RhbnRzJ1xuaW1wb3J0IEludGVybmFsU3RhdGUgZnJvbSAnLi9JbnRlcm5hbFN0YXRlJ1xuaW1wb3J0IEFyZ3NCdWlsZGVyIGZyb20gJy4vQXJnc0J1aWxkZXInXG5pbXBvcnQgQnJvd3NlckRldGVjdG9yIGZyb20gJy4vQnJvd3NlckRldGVjdG9yJ1xuaW1wb3J0IFB1c2hNYW5hZ2VyIGZyb20gJy4vUHVzaE1hbmFnZXInXG5pbXBvcnQgQWN0aW9uTWFuYWdlciBmcm9tICcuL0FjdGlvbk1hbmFnZXInXG5pbXBvcnQgTG9jYWxTdG9yYWdlTWFuYWdlciBmcm9tICcuL0xvY2FsU3RvcmFnZU1hbmFnZXInXG5pbXBvcnQgVmFyQ2FjaGUgZnJvbSAnLi9WYXJDYWNoZSdcbmltcG9ydCBMZWFucGx1bVJlcXVlc3QgZnJvbSAnLi9MZWFucGx1bVJlcXVlc3QnXG5pbXBvcnQgTGVhbnBsdW1Tb2NrZXQgZnJvbSAnLi9MZWFucGx1bVNvY2tldCdcbmltcG9ydCBldmVudHMgZnJvbSAnLi9FdmVudHMnXG5cbmxldCBfYnJvd3NlckRldGVjdG9yID0gbmV3IEJyb3dzZXJEZXRlY3RvcigpXG5cbi8qKlxuICogQHByZXNlcnZlIExlYW5wbHVtIEphdmFzY3JpcHQgU0RLLlxuICogQ29weXJpZ2h0IDIwMTYsIExlYW5wbHVtLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogWW91IG1heSBub3QgZGlzdHJpYnV0ZSB0aGlzIHNvdXJjZSBjb2RlIHdpdGhvdXQgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uXG4gKiBmcm9tIExlYW5wbHVtLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWFucGx1bSB7XG5cbiAgc3RhdGljIHNldEFwaVBhdGgoYXBpUGF0aCkge1xuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LmFwaVBhdGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBMZWFucGx1bVJlcXVlc3QuYXBpUGF0aCA9IGFwaVBhdGhcbiAgfVxuXG4gIHN0YXRpYyBzZXRFbWFpbChlbWFpbCkge1xuICAgIExlYW5wbHVtLl9lbWFpbCA9IGVtYWlsXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgbmV0d29yayB0aW1lb3V0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Vjb25kcyBUaGUgdGltZW91dCBpbiBzZWNvbmRzLlxuICAgKi9cbiAgc3RhdGljIHNldE5ldHdvcmtUaW1lb3V0KHNlY29uZHMpIHtcbiAgICBMZWFucGx1bVJlcXVlc3Quc2V0TmV0d29ya1RpbWVvdXQoc2Vjb25kcylcbiAgfVxuXG4gIHN0YXRpYyBzZXRWYXJpYW50RGVidWdJbmZvRW5hYmxlZCh2YXJpYW50RGVidWdJbmZvRW5hYmxlZCkge1xuICAgIEludGVybmFsU3RhdGUuc2V0VmFyaWFudERlYnVnSW5mb0VuYWJsZWQodmFyaWFudERlYnVnSW5mb0VuYWJsZWQpXG4gIH07XG5cbiAgc3RhdGljIGdldFZhcmlhbnREZWJ1Z0luZm8oKSB7XG4gICAgcmV0dXJuIFZhckNhY2hlLmdldFZhcmlhbnREZWJ1Z0luZm8oKVxuICB9O1xuXG4gIHN0YXRpYyBzZXRBcHBJZEZvckRldmVsb3BtZW50TW9kZShhcHBJZCwgYWNjZXNzS2V5KSB7XG4gICAgTGVhbnBsdW1SZXF1ZXN0LmFwcElkID0gYXBwSWRcbiAgICBMZWFucGx1bVJlcXVlc3QuY2xpZW50S2V5ID0gYWNjZXNzS2V5XG4gICAgSW50ZXJuYWxTdGF0ZS5kZXZNb2RlID0gdHJ1ZVxuICB9XG5cbiAgc3RhdGljIHNldEFwcElkRm9yUHJvZHVjdGlvbk1vZGUoYXBwSWQsIGFjY2Vzc0tleSkge1xuICAgIExlYW5wbHVtUmVxdWVzdC5hcHBJZCA9IGFwcElkXG4gICAgTGVhbnBsdW1SZXF1ZXN0LmNsaWVudEtleSA9IGFjY2Vzc0tleVxuICAgIEludGVybmFsU3RhdGUuZGV2TW9kZSA9IGZhbHNlXG4gIH1cblxuICBzdGF0aWMgc2V0U29ja2V0SG9zdChob3N0KSB7XG4gICAgTGVhbnBsdW1Tb2NrZXQuc29ja2V0SG9zdCA9IGhvc3RcbiAgfVxuXG4gIHN0YXRpYyBzZXREZXZpY2VJZChkZXZpY2VJZCkge1xuICAgIExlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZCA9IGRldmljZUlkXG4gIH1cblxuICBzdGF0aWMgc2V0QXBwVmVyc2lvbih2ZXJzaW9uTmFtZSkge1xuICAgIExlYW5wbHVtUmVxdWVzdC52ZXJzaW9uTmFtZSA9IHZlcnNpb25OYW1lXG4gIH1cblxuICBzdGF0aWMgc2V0RGV2aWNlTmFtZShkZXZpY2VOYW1lKSB7XG4gICAgTGVhbnBsdW0uX2RldmljZU5hbWUgPSBkZXZpY2VOYW1lXG4gIH1cblxuICBzdGF0aWMgc2V0RGV2aWNlTW9kZWwoZGV2aWNlTW9kZWwpIHtcbiAgICBMZWFucGx1bS5fZGV2aWNlTW9kZWwgPSBkZXZpY2VNb2RlbFxuICB9XG5cbiAgc3RhdGljIHNldFN5c3RlbU5hbWUoc3lzdGVtTmFtZSkge1xuICAgIExlYW5wbHVtLl9zeXN0ZW1OYW1lID0gc3lzdGVtTmFtZVxuICB9XG5cbiAgc3RhdGljIHNldFN5c3RlbVZlcnNpb24oc3lzdGVtVmVyc2lvbikge1xuICAgIExlYW5wbHVtLl9zeXN0ZW1WZXJzaW9uID0gc3lzdGVtVmVyc2lvblxuICB9XG5cbiAgc3RhdGljIHNldFZhcmlhYmxlcyh2YXJpYWJsZXMpIHtcbiAgICBWYXJDYWNoZS5zZXRWYXJpYWJsZXModmFyaWFibGVzKVxuICB9XG5cbiAgc3RhdGljIHNldFJlcXVlc3RCYXRjaGluZyhiYXRjaEVuYWJsZWQsIGNvb2xkb3duU2Vjb25kcykge1xuICAgIExlYW5wbHVtUmVxdWVzdC5iYXRjaEVuYWJsZWQgPSBiYXRjaEVuYWJsZWRcbiAgICBMZWFucGx1bVJlcXVlc3QuYmF0Y2hDb29sZG93biA9IGNvb2xkb3duU2Vjb25kc1xuICB9XG5cbiAgc3RhdGljIGdldFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0VmFyaWFibGVzKClcbiAgfVxuXG4gIHN0YXRpYyBnZXRWYXJpYWJsZSguLi5hcmdzKSB7XG4gICAgbGV0IGN1cnJlbnQgPSBMZWFucGx1bS5nZXRWYXJpYWJsZXMoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgY3VycmVudCA9IGN1cnJlbnRbYXJnc1tpXV1cbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRcbiAgfVxuXG4gIHN0YXRpYyBnZXRWYXJpYW50cygpIHtcbiAgICByZXR1cm4gVmFyQ2FjaGUudmFyaWFudHMgfHwgW11cbiAgfVxuXG4gIHN0YXRpYyBnZXRNZXNzYWdlcygpIHtcbiAgICByZXR1cm4gVmFyY2FjaGUuZ2V0TWVzc2FnZXMoKSB8fCBbXVxuICB9XG5cbiAgc3RhdGljIGFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBJbnRlcm5hbFN0YXRlLmFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyKGhhbmRsZXIpXG4gIH1cblxuICBzdGF0aWMgYWRkVmFyaWFibGVzQ2hhbmdlZEhhbmRsZXIoaGFuZGxlcikge1xuICAgIEludGVybmFsU3RhdGUuYWRkVmFyaWFibGVzQ2hhbmdlZEhhbmRsZXIoaGFuZGxlcilcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVTdGFydFJlc3BvbnNlSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgSW50ZXJuYWxTdGF0ZS5yZW1vdmVTdGFydFJlc3BvbnNlSGFuZGxlcihoYW5kbGVyKVxuICB9XG5cbiAgc3RhdGljIHJlbW92ZVZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBJbnRlcm5hbFN0YXRlLnJlbW92ZVZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpXG4gIH1cblxuICBzdGF0aWMgZm9yY2VDb250ZW50VXBkYXRlKGNhbGxiYWNrKSB7XG4gICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuR0VUX1ZBUlMsXG4gICAgICBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklOQ0xVREVfREVGQVVMVFMsIGZhbHNlKVxuICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklOQ0xVREVfVkFSSUFOVF9ERUJVR19JTkZPLCBJbnRlcm5hbFN0YXRlLnZhcmlhbnREZWJ1Z0luZm9FbmFibGVkKSwge1xuICAgICAgICBxdWV1ZWQ6IGZhbHNlLFxuICAgICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgICByZXNwb25zZTogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgbGV0IGdldFZhcnNSZXNwb25zZSA9IExlYW5wbHVtUmVxdWVzdC5nZXRMYXN0UmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgIGxldCBpc1N1Y2Nlc3MgPSBMZWFucGx1bVJlcXVlc3QuaXNSZXNwb25zZVN1Y2Nlc3MoZ2V0VmFyc1Jlc3BvbnNlKTtcbiAgICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgICAgICBWYXJDYWNoZS5hcHBseURpZmZzKFxuICAgICAgICAgICAgICBnZXRWYXJzUmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuVkFSU10sXG4gICAgICAgICAgICAgIGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJJQU5UU10sXG4gICAgICAgICAgICAgIGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5BQ1RJT05fTUVUQURBVEFdKVxuICAgICAgICAgICAgVmFyQ2FjaGUudmFyaWFudERlYnVnSW5mbyA9IGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJJQU5UX0RFQlVHX0lORk9dXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soaXNTdWNjZXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgc3RhdGljIHN0YXJ0KHVzZXJJZCwgdXNlckF0dHJpYnV0ZXMsIGNhbGxiYWNrKSB7XG4gICAgLy8gT3ZlcmxvYWRzLlxuICAgIGlmICh0eXBlb2YgdXNlcklkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJJZFxuICAgICAgdXNlckF0dHJpYnV0ZXMgPSB7fVxuICAgICAgdXNlcklkID0gbnVsbFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHVzZXJJZCA9PT0gJ29iamVjdCcgJiYgdXNlcklkICE9PSBudWxsICYmXG4gICAgICAgIHVzZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJBdHRyaWJ1dGVzXG4gICAgICB1c2VyQXR0cmlidXRlcyA9IHVzZXJJZFxuICAgICAgdXNlcklkID0gbnVsbFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHVzZXJBdHRyaWJ1dGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJBdHRyaWJ1dGVzXG4gICAgICB1c2VyQXR0cmlidXRlcyA9IHt9XG4gICAgfVxuICAgIExlYW5wbHVtUmVxdWVzdC51c2VySWQgPSB1c2VySWRcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIExlYW5wbHVtLmFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyKGNhbGxiYWNrKVxuICAgIH1cblxuICAgIFZhckNhY2hlLm9uVXBkYXRlID0gZnVuY3Rpb24oKXtcbiAgICAgIEludGVybmFsU3RhdGUudHJpZ2dlclZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycygpXG4gICAgfVxuXG4gICAgbGV0IGFyZ3MgPSBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVVNFUl9BVFRSSUJVVEVTLCBKU09OLnN0cmluZ2lmeSh1c2VyQXR0cmlidXRlcykpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5DT1VOVFJZLCBDb25zdGFudHMuVkFMVUVTLkRFVEVDVClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlJFR0lPTiwgQ29uc3RhbnRzLlZBTFVFUy5ERVRFQ1QpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5DSVRZLCBDb25zdGFudHMuVkFMVUVTLkRFVEVDVClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkxPQ0FUSU9OLCBDb25zdGFudHMuVkFMVUVTLkRFVEVDVClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlNZU1RFTV9OQU1FLCBMZWFucGx1bS5fc3lzdGVtTmFtZSB8fCBfYnJvd3NlckRldGVjdG9yLk9TKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuU1lTVEVNX1ZFUlNJT04sIChMZWFucGx1bS5fc3lzdGVtVmVyc2lvbiB8fCAnJykudG9TdHJpbmcoKSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkJST1dTRVJfTkFNRSwgX2Jyb3dzZXJEZXRlY3Rvci5icm93c2VyKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQlJPV1NFUl9WRVJTSU9OLCBfYnJvd3NlckRldGVjdG9yLnZlcnNpb24udG9TdHJpbmcoKSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkxPQ0FMRSwgQ29uc3RhbnRzLlZBTFVFUy5ERVRFQ1QpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5ERVZJQ0VfTkFNRSwgTGVhbnBsdW0uX2RldmljZU5hbWUgfHxcbiAgICAgICAgICAgIGAke19icm93c2VyRGV0ZWN0b3IuYnJvd3Nlcn0gJHtfYnJvd3NlckRldGVjdG9yLnZlcnNpb259YClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkRFVklDRV9NT0RFTCwgTGVhbnBsdW0uX2RldmljZU1vZGVsIHx8ICdXZWIgQnJvd3NlcicpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkNMVURFX0RFRkFVTFRTLCBmYWxzZSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklOQ0xVREVfVkFSSUFOVF9ERUJVR19JTkZPLCBJbnRlcm5hbFN0YXRlLnZhcmlhbnREZWJ1Z0luZm9FbmFibGVkKTtcblxuICAgIC8vIElzc3VlIHJlcXVlc3QuXG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuU1RBUlQsIGFyZ3MsIHtcbiAgICAgIHF1ZXVlZDogdHJ1ZSxcbiAgICAgIHNlbmROb3c6IHRydWUsXG4gICAgICByZXNwb25zZTogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgSW50ZXJuYWxTdGF0ZS5oYXNTdGFydGVkID0gdHJ1ZVxuICAgICAgICBsZXQgc3RhcnRSZXNwb25zZSA9IExlYW5wbHVtUmVxdWVzdC5nZXRMYXN0UmVzcG9uc2UocmVzcG9uc2UpXG4gICAgICAgIGlmIChMZWFucGx1bVJlcXVlc3QuaXNSZXNwb25zZVN1Y2Nlc3Moc3RhcnRSZXNwb25zZSkpIHtcbiAgICAgICAgICBJbnRlcm5hbFN0YXRlLnN0YXJ0U3VjY2Vzc2Z1bCA9IHRydWVcbiAgICAgICAgICBpZiAoSW50ZXJuYWxTdGF0ZS5kZXZNb2RlKSB7XG4gICAgICAgICAgICBsZXQgbGF0ZXN0VmVyc2lvbiA9IHN0YXJ0UmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuTEFURVNUX1ZFUlNJT05dXG4gICAgICAgICAgICBpZiAobGF0ZXN0VmVyc2lvbikge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQSBuZXdlciB2ZXJzaW9uIG9mIExlYW5wbHVtLCAke2xhdGVzdFZlcnNpb259LCBpcyBhdmFpbGFibGUuIEdvIHRvYCArXG4gICAgICAgICAgICAgICAgICAnbGVhbnBsdW0uY29tIHRvIGRvd25sb2FkIGl0LicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBMZWFucGx1bVNvY2tldC5jb25uZWN0KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBWYXJDYWNoZS5hcHBseURpZmZzKFxuICAgICAgICAgICAgICBzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUlNdLFxuICAgICAgICAgICAgICBzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUklBTlRTXSxcbiAgICAgICAgICAgICAgc3RhcnRSZXNwb25zZVtDb25zdGFudHMuS0VZUy5BQ1RJT05fTUVUQURBVEFdKTtcbiAgICAgICAgICBWYXJDYWNoZS52YXJpYW50RGVidWdJbmZvID0gc3RhcnRSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJJQU5UX0RFQlVHX0lORk9dXG4gICAgICAgICAgVmFyQ2FjaGUudG9rZW4gPSBzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlRPS0VOXVxuICAgICAgICAgIFZhckNhY2hlLnNldE1lc3NhZ2VzKHN0YXJ0UmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuTUVTU0FHRVNdKVxuICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdzdGFydC9tZXNzYWdlcycsIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBMZWFucGx1bS5nZXRGaWx0ZXJlZFJlc3VsdHMoXG4gICAgICAgICAgICAgICAgVmFyQ2FjaGUuZ2V0TWVzc2FnZXMoKSxcbiAgICAgICAgICAgICAgICBbJ3N0YXJ0JywgJ3Jlc3VtZSddXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBJbnRlcm5hbFN0YXRlLnN0YXJ0U3VjY2Vzc2Z1bCA9IGZhbHNlXG4gICAgICAgICAgVmFyQ2FjaGUubG9hZERpZmZzKClcbiAgICAgICAgfVxuICAgICAgICBJbnRlcm5hbFN0YXRlLnRyaWdnZXJTdGFydEhhbmRsZXJzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIC8qKlxuICAgKiByZXR1cm4gYW4gYXJyYXkgb2YgZmlsdGVyZWQgbWVzc2FnZVxuICAgKiBAcGFyYW0ge0FycmF5fSBtZXNzYWdlcyAtIHRoZSBtZXNzYWdlIHJlc3BvbnNlIHN0b3JlZCBpbiBWYXJjYWNoZVxuICAgKiBAcGFyYW0ge1N0cmluZyB8IFN0cmluZ1tdIHwgP30gdHJpZ2dlcnMgLSB0aGUgdHJpZ2dlcihzKSB3ZSB3YW50IHRvIGNoZWNrIGFnYWluc3RcbiAgICogQHBhcmFtIHtTdHJpbmc/fSB2ZXJiIC0gYWRkaXRpb25hbCBwYXJhbWV0ZXJcbiAgICogQHBhcmFtICB7U3RyaW5nP30gbm91biAtIGFkZGl0aW9uYWwgcGFyYW1ldGVyXG4gICAqIEBwYXJhbSAge09iamVjdD99IHBhcmFtcyAtIG5lY2Vzc2FyeSBmb3Igc29tZSBldmVudFxuICAgKiBAcGFyYW0gIHtudW1iZXI/fSBwYXJhbXMuZnJvbSAtIG5lY2Vzc2FyeSBmb3Igc29tZSBldmVudFxuICAgKiBAcGFyYW0gIHtudW1iZXI/fSBwYXJhbXMudG8gLSBuZWNlc3NhcnkgZm9yIHNvbWUgZXZlbnRcbiAgICogQHBhcmFtICB7c3RyaW5nP30gcGFyYW1zLnBhcmFtVmFsdWUgLSBuZWNlc3NhcnkgZm9yIHNvbWUgZXZlbnRcbiAgICogQHBhcmFtICB7c3RyaW5nP30gcGFyYW1zLk5hbWUgLSBuZWNlc3NhcnkgZm9yIHNvbWUgZXZlbnRcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgZ2V0RmlsdGVyZWRSZXN1bHRzKCBtZXNzYWdlcywgdHJpZ2dlcnM9JycsIHZlcmI9JycsIG5vdW49JycsIHBhcmFtcz17fSkge1xuICAgIGlmKCFtZXNzYWdlcykge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICAgIHJldHVybiBBY3Rpb25NYW5hZ2VyLmZpbHRlck1lc3NhZ2VzKG1lc3NhZ2VzLCB0cmlnZ2VycywgdmVyYiwgbm91biwgcGFyYW1zKVxuICB9XG4gIHN0YXRpYyBzdGFydEZyb21DYWNoZSh1c2VySWQsIHVzZXJBdHRyaWJ1dGVzLCBjYWxsYmFjaykge1xuICAgIC8vIE92ZXJsb2Fkcy5cbiAgICBpZiAodHlwZW9mIHVzZXJJZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSB1c2VySWRcbiAgICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEFzc2lnbm1lbnRcbiAgICAgIHVzZXJBdHRyaWJ1dGVzID0ge31cbiAgICAgIHVzZXJJZCA9IG51bGxcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB1c2VySWQgPT09ICdvYmplY3QnICYmIHVzZXJJZCAhPT0gbnVsbCAmJlxuICAgICAgICB1c2VySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2FsbGJhY2sgPSB1c2VyQXR0cmlidXRlc1xuICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkQXNzaWdubWVudFxuICAgICAgdXNlckF0dHJpYnV0ZXMgPSB1c2VySWRcbiAgICAgIHVzZXJJZCA9IG51bGxcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB1c2VyQXR0cmlidXRlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSB1c2VyQXR0cmlidXRlc1xuICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkQXNzaWdubWVudFxuICAgICAgdXNlckF0dHJpYnV0ZXMgPSB7fVxuICAgIH1cbiAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gdXNlcklkXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBMZWFucGx1bS5hZGRTdGFydFJlc3BvbnNlSGFuZGxlcihjYWxsYmFjaylcbiAgICB9XG5cbiAgICBJbnRlcm5hbFN0YXRlLmhhc1N0YXJ0ZWQgPSB0cnVlXG4gICAgSW50ZXJuYWxTdGF0ZS5zdGFydFN1Y2Nlc3NmdWwgPSB0cnVlXG4gICAgaWYgKEludGVybmFsU3RhdGUuZGV2TW9kZSkge1xuICAgICAgTGVhbnBsdW1Tb2NrZXQuY29ubmVjdCgpXG4gICAgfVxuICAgIFZhckNhY2hlLmxvYWREaWZmcygpXG4gICAgSW50ZXJuYWxTdGF0ZS50cmlnZ2VyU3RhcnRIYW5kbGVycygpXG4gIH1cblxuICBzdGF0aWMgc3RvcCgpIHtcbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5TVE9QLCB1bmRlZmluZWQsIHtcbiAgICAgIHNlbmROb3c6IHRydWUsXG4gICAgICBxdWV1ZWQ6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIHBhdXNlU2Vzc2lvbigpIHtcbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5QQVVTRV9TRVNTSU9OLCB1bmRlZmluZWQsIHtcbiAgICAgIHNlbmROb3c6IHRydWUsXG4gICAgICBxdWV1ZWQ6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIHJlc3VtZVNlc3Npb24oKSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuUkVTVU1FX1NFU1NJT04sIHVuZGVmaW5lZCwge1xuICAgICAgc2VuZE5vdzogdHJ1ZSxcbiAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgcGF1c2VTdGF0ZSgpIHtcbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5QQVVTRV9TVEFURSwgdW5kZWZpbmVkLCB7XG4gICAgICBxdWV1ZWQ6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIHJlc3VtZVN0YXRlKCkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlJFU1VNRV9TVEFURSwgdW5kZWZpbmVkLCB7XG4gICAgICBxdWV1ZWQ6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIHNldFVzZXJJZCh1c2VySWQpIHtcbiAgICBMZWFucGx1bS5zZXRVc2VyQXR0cmlidXRlcyh1c2VySWQpXG4gIH1cblxuICBzdGF0aWMgc2V0VXNlckF0dHJpYnV0ZXModXNlcklkLCB1c2VyQXR0cmlidXRlcykge1xuICAgIGlmICh1c2VyQXR0cmlidXRlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHVzZXJJZCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdXNlckF0dHJpYnV0ZXMgPSB1c2VySWRcbiAgICAgICAgdXNlcklkID0gdW5kZWZpbmVkXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB1c2VySWQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogc2V0VXNlckF0dHJpYnV0ZXMgZXhwZWN0cyBhIHN0cmluZyBvciBhbiAnICtcbiAgICAgICAgICAgICdvYmplY3QnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuU0VUX1VTRVJfQVRUUklCVVRFUyxcbiAgICAgICAgbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5VU0VSX0FUVFJJQlVURVMsXG4gICAgICAgICAgICAgICAgdXNlckF0dHJpYnV0ZXMgPyBKU09OLnN0cmluZ2lmeSh1c2VyQXR0cmlidXRlcykgOiB1bmRlZmluZWQpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuTkVXX1VTRVJfSUQsIHVzZXJJZCksIHtcbiAgICAgICAgICBxdWV1ZWQ6IHRydWVcbiAgICAgICAgfSlcbiAgICBpZiAodXNlcklkKSB7XG4gICAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gdXNlcklkXG4gICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlVTRVJfSUQsIExlYW5wbHVtUmVxdWVzdC51c2VySWQpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldEZpbGVVcmwoZmlsZU5hbWUpIHtcbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgcmV0dXJuIExlYW5wbHVtUmVxdWVzdFxuICAgICAgICAuZ2VuZXJhdGVSZXF1ZXN0VXJsKFxuICAgICAgICAgIENvbnN0YW50cy5NRVRIT0RTLkRPV05MT0FEX0ZJTEUsXG4gICAgICAgICAgbmV3IEFyZ3NCdWlsZGVyKCkuYWRkKENvbnN0YW50cy5QQVJBTVMuRklMRU5BTUUsIGZpbGVOYW1lKVxuICAgICAgICApXG4gIH1cblxuICBzdGF0aWMgdHJhY2tNZXNzYWdlKGV2ZW50LCBtZXNzYWdlSWQpIHtcbiAgICBpZihldmVudCA9PT0gJycpIHtcbiAgICAgIFZhckNhY2hlLmFkZE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZCkgLy8gdHJhY2sgdmlldyB0cmFjayBldmVudCBpcyAnJyBha2EgJ1ZpZXcnXG4gICAgfVxuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5UUkFDSyxcbiAgICAgICAgbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5FVkVOVCwgZXZlbnQpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuTUVTU0FHRV9JRCwgbWVzc2FnZUlkKSwge1xuICAgICAgICAgICAgcXVldWVkOiB0cnVlXG4gICAgICAgIH0pXG4gIH1cblxuICBzdGF0aWMgdHJhY2soZXZlbnQsIHZhbHVlLCBpbmZvLCBwYXJhbXMpIHtcbiAgICAvLyBPdmVybG9hZHMuXG4gICAgLy8gb2JqZWN0ICYmICFudWxsICYmICF1bmRlZmluZWQgLT4gcGFyYW1zXG4gICAgLy8gc3RyaW5nIC0+IGluZm8sIHBhcmFtc1xuICAgIC8vICosIG9iamVjdCAmJiAhbnVsbCAmJiAhdW5kZWZpbmVkIC0+IHZhbHVlLCBwYXJhbXNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMgPSB2YWx1ZVxuICAgICAgaW5mbyA9IHVuZGVmaW5lZFxuICAgICAgdmFsdWUgPSB1bmRlZmluZWRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmFtcyA9IGluZm9cbiAgICAgIGluZm8gPSB2YWx1ZVxuICAgICAgdmFsdWUgPSB1bmRlZmluZWRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbmZvID09PSAnb2JqZWN0JyAmJiBpbmZvICE9PSBudWxsICYmIGluZm8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zID0gaW5mb1xuICAgICAgaW5mbyA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGV2ZW50cy5wdWJsaXNoKCd0cmFjaycsIHtcbiAgICAgIGV2ZW50LFxuICAgICAgcGFyYW1zXG4gICAgfSlcblxuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlRSQUNLLFxuICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkVWRU5ULCBldmVudClcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5WQUxVRSwgdmFsdWUgfHwgMC4wKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklORk8sIGluZm8pXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuUEFSQU1TLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKSwge1xuICAgICAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgICAgICB9KVxuICB9XG5cbiAgc3RhdGljIGFkdmFuY2VUbyhzdGF0ZSwgaW5mbywgcGFyYW1zKSB7XG4gICAgLy8gT3ZlcmxvYWRzLlxuICAgIC8vIHN0cmluZ3xudWxsfHVuZGVmaW5lZCwgKiAtPiBpbmZvLCBwYXJhbXNcbiAgICAvLyBvYmplY3QgJiYgIW51bGwgJiYgIXVuZGVmaW5lZCAtPiBwYXJhbXNcbiAgICBpZiAodHlwZW9mIGluZm8gPT09ICdvYmplY3QnICYmIGluZm8gIT09IG51bGwgJiYgaW5mbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMgPSBpbmZvXG4gICAgICBpbmZvID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuQURWQU5DRSxcbiAgICAgICAgbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuU1RBVEUsIHN0YXRlKVxuICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkZPLCBpbmZvKVxuICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5QQVJBTVMsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpLCB7XG4gICAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB3ZWIgcHVzaCBpcyBzdXBwb3J0ZWQgaW4gdGhlIGJyb3dzZXIuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IFRydWUgaWYgc3VwcG9ydGVkLCBlbHNlIGZhbHNlLlxuICAgKi9cbiAgc3RhdGljIGlzV2ViUHVzaFN1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gUHVzaE1hbmFnZXIuaXNXZWJQdXNoU3VwcG9ydGVkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHdlYiBwdXNoIGlzIHN1YnNjcmliZWQuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFJlc29sdmVzIGlmIHRydWUsIHJlamVjdHMgaWYgZmFsc2UuXG4gICAqL1xuICBzdGF0aWMgaXNXZWJQdXNoU3Vic2NyaWJlZCgpIHtcbiAgICByZXR1cm4gUHVzaE1hbmFnZXIuaXNXZWJQdXNoU3Vic2NyaWJlZCgpXG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgdGhlIGJyb3dzZXIgZm9yIHdlYiBwdXNoLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgc2VydmljZVdvcmtlclVybCBUaGUgdXJsIG9uIHlvdXIgc2VydmVyIHRoYXQgaG9zdHMgdGhlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9zdy5taW4uanMgc2VydmljZSB3b3JrZXIganMgZmlsZS5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gICAgICAgICAgICAgICAgICAgUmVzb2x2ZXMgaWYgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwsXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyd2lzZSBmYWlscy5cbiAgICovXG4gIHN0YXRpYyByZWdpc3RlckZvcldlYlB1c2goc2VydmljZVdvcmtlclVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoUHVzaE1hbmFnZXIuaXNXZWJQdXNoU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgcmV0dXJuIFB1c2hNYW5hZ2VyLnJlZ2lzdGVyKHNlcnZpY2VXb3JrZXJVcmwsIChpc1N1YnNjcmliZWQpID0+IHtcbiAgICAgICAgICBpZiAoaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gUHVzaE1hbmFnZXIuc3Vic2NyaWJlVXNlcigpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVqZWN0KCdMZWFucGx1bTogV2ViUHVzaCBpcyBub3Qgc3VwcG9ydGVkLicpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVycyB0aGUgYnJvd3NlciBmb3JtIHdlYiBwdXNoLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAgICAgICAgICAgIFJlc29sdmVzIG9uIHN1Y2Nlc3MsIG90aGVyd2lzZSByZWplY3RzLlxuICAgKi9cbiAgc3RhdGljIHVucmVnaXN0ZXJGcm9tV2ViUHVzaCgpIHtcbiAgICByZXR1cm4gUHVzaE1hbmFnZXIudW5zdWJzY3JpYmVVc2VyKClcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgY2FjaGVkIHZhbHVlcyBmb3IgbWVzc2FnZXMsIHZhcmlhYmxlcyBhbmQgdGVzdCBhc3NpZ25tZW50cy5cbiAgICogVXNlIHNwYXJpbmdseSBhcyBpZiB0aGUgYXBwIGlzIHVwZGF0ZWQsIHlvdSdsbCBoYXZlIHRvIGRlYWwgd2l0aCBwb3RlbnRpYWxseVxuICAgKiBpbmNvbnNpc3RlbnQgc3RhdGUgb3IgdXNlciBleHBlcmllbmNlLlxuICAgKi9cbiAgc3RhdGljIGNsZWFyVXNlckNvbnRlbnQoKSB7XG4gICAgVmFyQ2FjaGUuY2xlYXJVc2VyQ29udGVudCgpXG4gIH1cblxuICAvKipcbiAgICogR2V0IHB1Yi9zdWIgZXZlbnRzIG1hbmFnZXIuXG4gICAqXG4gICAqIEBSZXR1cm4geyBwdWJsaXNoOiAodG9waWMsIGFyZ3MpID0+IHt9LCBzdWJzY3JpYmU6ICh0b3BpYywgY2FsbGJhY2spID0+IHt9IH1cbiAgICovXG4gIHN0YXRpYyBnZXRFdmVudHMoKSB7XG4gICAgcmV0dXJuIGV2ZW50c1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGVhbnBsdW0uanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuXG5pbXBvcnQgUmVxdWVzdCBmcm9tICcuL05ldHdvcmsnXG5cbi8qKlxuICogU29ja2V0LmlvIDEuMCBjbGllbnQgY2xhc3MuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvY2tldElvQ2xpZW50IHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGEgbmV3IFNvY2tldElvQ2xpZW50LCBub3QgY29ubmVjdGVkIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlXG4gICAgdGhpcy5jb25uZWN0aW5nID0gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25uZWN0cyB0byB0aGUgZ2l2ZW4gc29ja2V0SG9zdC5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBzb2NrZXRIb3N0IFRoZSBob3N0IHRvIGNvbm5lY3QgdG8uXG4gICAqL1xuICBjb25uZWN0KHNvY2tldEhvc3QpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC10aGlzXG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5jb25uZWN0aW5nID0gdHJ1ZVxuICAgIFJlcXVlc3QuYWpheCgnUE9TVCcsIGBodHRwczovLyR7c29ja2V0SG9zdH0vc29ja2V0LmlvLzFgLCAnJyxcbiAgICAgICAgZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgIGxldCBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKVxuICAgICAgICAgIGxldCBzZXNzaW9uID0gcGFydHNbMF1cbiAgICAgICAgICBsZXQgaGVhcnRiZWF0ID0gcGFyc2VJbnQocGFydHNbMV0pIC8gMiAqIDEwMDBcbiAgICAgICAgICBzZWxmLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoYHdzczovLyR7c29ja2V0SG9zdH0vc29ja2V0LmlvLzEvd2Vic29ja2V0LyR7c2Vzc2lvbn1gKVxuICAgICAgICAgIGxldCBoZWFydGJlYXRJbnRlcnZhbCA9IG51bGxcbiAgICAgICAgICBzZWxmLnNvY2tldC5vbm9wZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuY29ubmVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgc2VsZi5jb25uZWN0aW5nID0gZmFsc2VcbiAgICAgICAgICAgIGlmIChzZWxmLm9ub3Blbikge1xuICAgICAgICAgICAgICBzZWxmLm9ub3BlbigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWFydGJlYXRJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBzZWxmLnNvY2tldC5zZW5kKCcyOjo6JylcbiAgICAgICAgICAgIH0sIGhlYXJ0YmVhdClcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi5zb2NrZXQub25jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5jb25uZWN0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChoZWFydGJlYXRJbnRlcnZhbClcbiAgICAgICAgICAgIGlmIChzZWxmLm9uY2xvc2UpIHtcbiAgICAgICAgICAgICAgc2VsZi5vbmNsb3NlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi5zb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlUGFydHMgPSBldmVudC5kYXRhLnNwbGl0KCc6JylcbiAgICAgICAgICAgIGxldCBjb2RlID0gcGFyc2VJbnQobWVzc2FnZVBhcnRzWzBdKVxuICAgICAgICAgICAgaWYgKGNvZGUgPT09IDIpIHtcbiAgICAgICAgICAgICAgc2VsZi5zb2NrZXQuc2VuZCgnMjo6JylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gNSkge1xuICAgICAgICAgICAgICBsZXQgbWVzc2FnZUlkID0gbWVzc2FnZVBhcnRzWzFdXG4gICAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlUGFydHMuc2xpY2UoMykuam9pbignOicpKVxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZUV2ZW50ID0gZGF0YS5uYW1lXG4gICAgICAgICAgICAgIGxldCBhcmdzID0gZGF0YS5hcmdzXG4gICAgICAgICAgICAgIGlmIChtZXNzYWdlSWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNvY2tldC5zZW5kKGA2Ojo6JHttZXNzYWdlSWR9YClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoc2VsZi5vbm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm9ubWVzc2FnZShtZXNzYWdlRXZlbnQsIGFyZ3MpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gNykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU29ja2V0IGVycm9yOiAke2V2ZW50LmRhdGF9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi5zb2NrZXQub25lcnJvciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBzZWxmLnNvY2tldC5jbG9zZSgpXG4gICAgICAgICAgICBpZiAoc2VsZi5vbmVycm9yKSB7XG4gICAgICAgICAgICAgIHNlbGYub25lcnJvcihldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIG51bGwsIGZhbHNlLCB0cnVlIC8vIG51bGwsIHF1ZXVlZCwgcGxhaW5UZXh0XG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGdpdmVuIGV2ZW50IHdpdGggYXJndW1lbnRzIHRvIHRoZSBzZXJ2ZXIuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBldmVudC5cbiAgICogQHBhcmFtICB7Kn0gYXJncyBBcmd1bWVudHMgdG8gc2VuZC5cbiAgICovXG4gIHNlbmQobmFtZSwgYXJncykge1xuICAgIGlmICghdGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogU29ja2V0IGlzIG5vdCBjb25uZWN0ZWQuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgYXJnc0pzb24gPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBuYW1lLFxuICAgICAgYXJnc1xuICAgIH0pXG4gICAgdGhpcy5zb2NrZXQuc2VuZChgNTo6OiR7YXJnc0pzb259YClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NvY2tldElvQ2xpZW50LmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhVmlldztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX0hhc2guanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19Qcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpLFxuICAgIHNldENhY2hlQWRkID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVBZGQnKSxcbiAgICBzZXRDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX3NldENhY2hlSGFzJyk7XG5cbi8qKlxuICpcbiAqIENyZWF0ZXMgYW4gYXJyYXkgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIHVuaXF1ZSB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU2V0Q2FjaGUodmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzID09IG51bGwgPyAwIDogdmFsdWVzLmxlbmd0aDtcblxuICB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHRoaXMuYWRkKHZhbHVlc1tpbmRleF0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxubW9kdWxlLmV4cG9ydHMgPSBTZXRDYWNoZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1NldENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgc3RhY2tDbGVhciA9IHJlcXVpcmUoJy4vX3N0YWNrQ2xlYXInKSxcbiAgICBzdGFja0RlbGV0ZSA9IHJlcXVpcmUoJy4vX3N0YWNrRGVsZXRlJyksXG4gICAgc3RhY2tHZXQgPSByZXF1aXJlKCcuL19zdGFja0dldCcpLFxuICAgIHN0YWNrSGFzID0gcmVxdWlyZSgnLi9fc3RhY2tIYXMnKSxcbiAgICBzdGFja1NldCA9IHJlcXVpcmUoJy4vX3N0YWNrU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1N0YWNrLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fVWludDhBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2Vha01hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1dlYWtNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlQdXNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5zb21lYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlTb21lKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5U29tZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5U29tZS5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzRXF1YWxEZWVwID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWxEZWVwJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aGljaCBzdXBwb3J0cyBwYXJ0aWFsIGNvbXBhcmlzb25zXG4gKiBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gVW5vcmRlcmVkIGNvbXBhcmlzb25cbiAqICAyIC0gUGFydGlhbCBjb21wYXJpc29uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgIWlzT2JqZWN0TGlrZShvdGhlcikpKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXI7XG4gIH1cbiAgcmV0dXJuIGJhc2VJc0VxdWFsRGVlcCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGJhc2VJc0VxdWFsLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNFcXVhbC5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgZXF1YWxCeVRhZyA9IHJlcXVpcmUoJy4vX2VxdWFsQnlUYWcnKSxcbiAgICBlcXVhbE9iamVjdHMgPSByZXF1aXJlKCcuL19lcXVhbE9iamVjdHMnKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIGNvbXBhcmlzb25zIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIGNvbXBhcmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbERlZXAob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgb2JqSXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuICAgICAgb2JqVGFnID0gb2JqSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvYmplY3QpLFxuICAgICAgb3RoVGFnID0gb3RoSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvdGhlcik7XG5cbiAgb2JqVGFnID0gb2JqVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvYmpUYWc7XG4gIG90aFRhZyA9IG90aFRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb3RoVGFnO1xuXG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgaXNCdWZmZXIob2JqZWN0KSkge1xuICAgIGlmICghaXNCdWZmZXIob3RoZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9iaklzQXJyID0gdHJ1ZTtcbiAgICBvYmpJc09iaiA9IGZhbHNlO1xuICB9XG4gIGlmIChpc1NhbWVUYWcgJiYgIW9iaklzT2JqKSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICByZXR1cm4gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKVxuICAgICAgPyBlcXVhbEFycmF5cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKVxuICAgICAgOiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gIH1cbiAgaWYgKCEoYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHKSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG5cbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICByZXR1cm4gZXF1YWxGdW5jKG9ialVud3JhcHBlZCwgb3RoVW53cmFwcGVkLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHJldHVybiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWxEZWVwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBhIGBjYWNoZWAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBjYWNoZUhhcyhjYWNoZSwga2V5KSB7XG4gIHJldHVybiBjYWNoZS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5JyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgKG9iamVjdC5ieXRlT2Zmc2V0ICE9IG90aGVyLmJ5dGVPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IG9iamVjdC5idWZmZXI7XG4gICAgICBvdGhlciA9IG90aGVyLmJ1ZmZlcjtcblxuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgIWVxdWFsRnVuYyhuZXcgVWludDhBcnJheShvYmplY3QpLCBuZXcgVWludDhBcnJheShvdGhlcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIENvZXJjZSBib29sZWFucyB0byBgMWAgb3IgYDBgIGFuZCBkYXRlcyB0byBtaWxsaXNlY29uZHMuXG4gICAgICAvLyBJbnZhbGlkIGRhdGVzIGFyZSBjb2VyY2VkIHRvIGBOYU5gLlxuICAgICAgcmV0dXJuIGVxKCtvYmplY3QsICtvdGhlcik7XG5cbiAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09IG90aGVyLm5hbWUgJiYgb2JqZWN0Lm1lc3NhZ2UgPT0gb3RoZXIubWVzc2FnZTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncywgcHJpbWl0aXZlcyBhbmQgb2JqZWN0cyxcbiAgICAgIC8vIGFzIGVxdWFsLiBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbiAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgdmFyIGNvbnZlcnQgPSBtYXBUb0FycmF5O1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHO1xuICAgICAgY29udmVydCB8fCAoY29udmVydCA9IHNldFRvQXJyYXkpO1xuXG4gICAgICBpZiAob2JqZWN0LnNpemUgIT0gb3RoZXIuc2l6ZSAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgICAgIH1cbiAgICAgIGJpdG1hc2sgfD0gQ09NUEFSRV9VTk9SREVSRURfRkxBRztcblxuICAgICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gICAgICB2YXIgcmVzdWx0ID0gZXF1YWxBcnJheXMoY29udmVydChvYmplY3QpLCBjb252ZXJ0KG90aGVyKSwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gICAgICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIGlmIChzeW1ib2xWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xWYWx1ZU9mLmNhbGwob2JqZWN0KSA9PSBzeW1ib2xWYWx1ZU9mLmNhbGwob3RoZXIpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZXF1YWxCeVRhZy5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIG9iamVjdHMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIG9ialByb3BzID0gZ2V0QWxsS2V5cyhvYmplY3QpLFxuICAgICAgb2JqTGVuZ3RoID0gb2JqUHJvcHMubGVuZ3RoLFxuICAgICAgb3RoUHJvcHMgPSBnZXRBbGxLZXlzKG90aGVyKSxcbiAgICAgIG90aExlbmd0aCA9IG90aFByb3BzLmxlbmd0aDtcblxuICBpZiAob2JqTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBpbmRleCA9IG9iakxlbmd0aDtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIGlmICghKGlzUGFydGlhbCA/IGtleSBpbiBvdGhlciA6IGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsIGtleSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgaWYgKHN0YWNrZWQgJiYgc3RhY2suZ2V0KG90aGVyKSkge1xuICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICB9XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgb2JqZWN0KTtcblxuICB2YXIgc2tpcEN0b3IgPSBpc1BhcnRpYWw7XG4gIHdoaWxlICgrK2luZGV4IDwgb2JqTGVuZ3RoKSB7XG4gICAga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2tleV07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgb2JqVmFsdWUsIGtleSwgb3RoZXIsIG9iamVjdCwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihvYmpWYWx1ZSwgb3RoVmFsdWUsIGtleSwgb2JqZWN0LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoIShjb21wYXJlZCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyAob2JqVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhvYmpWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSlcbiAgICAgICAgICA6IGNvbXBhcmVkXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNraXBDdG9yIHx8IChza2lwQ3RvciA9IGtleSA9PSAnY29uc3RydWN0b3InKTtcbiAgfVxuICBpZiAocmVzdWx0ICYmICFza2lwQ3Rvcikge1xuICAgIHZhciBvYmpDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICBvdGhDdG9yID0gb3RoZXIuY29uc3RydWN0b3I7XG5cbiAgICAvLyBOb24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbC5cbiAgICBpZiAob2JqQ3RvciAhPSBvdGhDdG9yICYmXG4gICAgICAgICgnY29uc3RydWN0b3InIGluIG9iamVjdCAmJiAnY29uc3RydWN0b3InIGluIG90aGVyKSAmJlxuICAgICAgICAhKHR5cGVvZiBvYmpDdG9yID09ICdmdW5jdGlvbicgJiYgb2JqQ3RvciBpbnN0YW5jZW9mIG9iakN0b3IgJiZcbiAgICAgICAgICB0eXBlb2Ygb3RoQ3RvciA9PSAnZnVuY3Rpb24nICYmIG90aEN0b3IgaW5zdGFuY2VvZiBvdGhDdG9yKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsT2JqZWN0cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2VxdWFsT2JqZWN0cy5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0QWxsS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0U3ltYm9scy5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcblxuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZSA9PSAnbnVtYmVyJyB8fFxuICAgICAgKHR5cGUgIT0gJ3N5bWJvbCcgJiYgcmVJc1VpbnQudGVzdCh2YWx1ZSkpKSAmJlxuICAgICAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzSW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc0tleWFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNNYXNrZWQuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwVG9BcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcFRvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbm9kZVV0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19vdmVyQXJnLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUFkZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zZXRDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0NsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0RlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0hhcy5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja1NldC5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL3N0dWJBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL3N0dWJGYWxzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=