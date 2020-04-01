module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./HOC/auth.hoc.js":
/*!*************************!*\
  !*** ./HOC/auth.hoc.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_contexts_auth_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/contexts/auth.context */ "./context/contexts/auth.context.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //a better approach to auth with next would be to use cookies
//and check if authenticated on the serverside first without
//using context, prevent a page flash, but for a personal project, this method fits fine

const WithAuth = AuthComponent => {
  return () => {
    const {
      checkAuth
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_contexts_auth_context__WEBPACK_IMPORTED_MODULE_1__["AuthActions"]);
    const {
      isAuthenticated
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_contexts_auth_context__WEBPACK_IMPORTED_MODULE_1__["AuthContext"]);
    const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      checkAuth();
      !isAuthenticated && router.replace('/admin');
    }, []);
    return __jsx("div", null, isAuthenticated ? __jsx(AuthComponent, null) : __jsx("h4", null, "Access denied"));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (WithAuth);

/***/ }),

/***/ "./context/actions/types.js":
/*!**********************************!*\
  !*** ./context/actions/types.js ***!
  \**********************************/
/*! exports provided: GET_PROJECTS, GET_PROJECT, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, AUTH_SUCCESS, CLEAR_MSGS, LOGOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROJECTS", function() { return GET_PROJECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROJECT", function() { return GET_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ERROR", function() { return AUTH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ERROR", function() { return LOGIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_SUCCESS", function() { return AUTH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_MSGS", function() { return CLEAR_MSGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
const GET_PROJECTS = "GET_PROJECTS";
const GET_PROJECT = "GET_PROJECT";
const AUTH_ERROR = "AUTH_ERROR";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";
const AUTH_SUCCESS = "AUTH_SUCCESS";
const CLEAR_MSGS = "CLEAR_MSGS";
const LOGOUT = "LOGOUT";

/***/ }),

/***/ "./context/contexts/auth.context.js":
/*!******************************************!*\
  !*** ./context/contexts/auth.context.js ***!
  \******************************************/
/*! exports provided: AuthContext, AuthActions, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActions", function() { return AuthActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/auth.reducer */ "./context/reducers/auth.reducer.js");
/* harmony import */ var _helpers_authToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/authToken */ "./helpers/authToken.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/types */ "./context/actions/types.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const AuthActions = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const AuthProvider = props => {
  const init = {
    loadingAuth: false,
    user: "",
    isAuthenticated: false,
    authMsgs: ""
  };
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], init);

  const checkAuth = async () => {
    if (localStorage.token) {
      Object(_helpers_authToken__WEBPACK_IMPORTED_MODULE_3__["default"])(localStorage.token);
    }

    ;

    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("http://localhost:3000/api/admin/user");
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_4__["AUTH_SUCCESS"],
        payload: res.data
      });
    } catch (e) {
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_4__["AUTH_ERROR"],
        payload: e.response.data
      });
    }

    ;
  };

  const loginUser = async user => {
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("http://localhost:3000/api/admin/login", user, config);
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_4__["LOGIN_SUCCESS"],
        payload: res.data
      });
    } catch (e) {
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_4__["LOGIN_ERROR"],
        payload: e.response.data
      });
    }

    ;
  };

  const logout = () => dispatch({
    type: _actions_types__WEBPACK_IMPORTED_MODULE_4__["LOGOUT"]
  });

  const clearMsgs = () => dispatch({
    type: _actions_types__WEBPACK_IMPORTED_MODULE_4__["CLEAR_MSGS"]
  });

  const actions = {
    checkAuth,
    loginUser,
    logout,
    clearMsgs
  };
  return __jsx(AuthContext.Provider, {
    value: state
  }, __jsx(AuthActions.Provider, {
    value: actions
  }, props.children));
};

/***/ }),

/***/ "./context/reducers/auth.reducer.js":
/*!******************************************!*\
  !*** ./context/reducers/auth.reducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./context/actions/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const reducer = (state, action) => {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"]:
      localStorage.setItem('token', action.payload);
      return _objectSpread({}, state, {
        loadingAuth: false,
        isAuthenticated: true
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["AUTH_SUCCESS"]:
      return _objectSpread({}, state, {
        loadingAuth: false,
        user: action.payload,
        isAuthenticated: true
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["AUTH_ERROR"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_ERROR"]:
      return _objectSpread({}, state, {
        loadingAuth: false,
        user: null,
        isAuthenticated: false,
        authMsgs: action.payload.msg
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["LOGOUT"]:
      localStorage.removeItem('token');
      return _objectSpread({}, state, {
        loadingAuth: false,
        user: null,
        isAuthenticated: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_MSGS"]:
      return _objectSpread({}, state, {
        authMsgs: null
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./helpers/authToken.js":
/*!******************************!*\
  !*** ./helpers/authToken.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 //sets header, recieved in the middleware 'checkAuth' serverside to validate 
//if token is valid or not

const authToken = token => {
  if (token) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['x-auth-token'];
  }

  ;
};

/* harmony default export */ __webpack_exports__["default"] = (authToken);

/***/ }),

/***/ "./hooks/useInputState.js":
/*!********************************!*\
  !*** ./hooks/useInputState.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const useInputState = init => {
  const {
    0: newValue,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(init);

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setValue(prev => _objectSpread({}, prev, {
      [name]: value
    }));
  };

  const reset = () => {
    setValue(init);
  };

  return [newValue, handleChange, reset];
};

/* harmony default export */ __webpack_exports__["default"] = (useInputState);

/***/ }),

/***/ "./hooks/useToggle.js":
/*!****************************!*\
  !*** ./hooks/useToggle.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useToggle = init => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(init);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
};

/* harmony default export */ __webpack_exports__["default"] = (useToggle);

/***/ }),

/***/ "./pages/admin/index.js":
/*!******************************!*\
  !*** ./pages/admin/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HOC_auth_hoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../HOC/auth.hoc */ "./HOC/auth.hoc.js");
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useInputState */ "./hooks/useInputState.js");
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _context_contexts_auth_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/contexts/auth.context */ "./context/contexts/auth.context.js");
/* harmony import */ var _styles_login_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/login.module.scss */ "./styles/login.module.scss");
/* harmony import */ var _styles_login_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_scss__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const index = props => {
  const [user, handleChange] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_4__["default"])('');
  const [alert, showAlert] = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_5__["default"])(true);
  const {
    checkAuth,
    loginUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_contexts_auth_context__WEBPACK_IMPORTED_MODULE_6__["AuthActions"]);
  const {
    isAuthenticated,
    authMsgs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_contexts_auth_context__WEBPACK_IMPORTED_MODULE_6__["AuthContext"]);

  const handleSubmit = async e => {
    e.preventDefault();
    await loginUser(user);
    !alert && showAlert();
  };

  isAuthenticated && next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/admin/dashboard');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    checkAuth();
    console.log("hhfdhdf");
  }, []);
  return __jsx("div", null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: _styles_login_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.login__form
  }, authMsgs && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
    show: alert,
    variant: "danger",
    onClose: showAlert,
    dismissible: true
  }, authMsgs), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx("h4", {
    className: "text-center"
  }, "Login")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: handleSubmit
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "formBasicEmail"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Username"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "Username",
    name: "username",
    value: user.username || '',
    onChange: handleChange
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    className: "text-muted"
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "formBasicPassword"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "password",
    placeholder: "Password",
    name: "password",
    value: user.password || '',
    onChange: handleChange
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    type: "submit"
  }, "Login"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./styles/login.module.scss":
/*!**********************************!*\
  !*** ./styles/login.module.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"login__form": "login_login__form__2u9So"
};

/***/ }),

/***/ 4:
/*!************************************!*\
  !*** multi ./pages/admin/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\domin\Documents\domcattell\site\pages\admin\index.js */"./pages/admin/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map