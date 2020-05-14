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

/***/ "./components/admin/Login.js":
/*!***********************************!*\
  !*** ./components/admin/Login.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useInputState */ "./hooks/useInputState.js");
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _context_contexts_auth_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/contexts/auth.context */ "./context/contexts/auth.context.js");
/* harmony import */ var _styles_components_login_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/components/login.module.scss */ "./styles/components/login.module.scss");
/* harmony import */ var _styles_components_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_components_login_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Login = () => {
  const [user, handleChange] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_2__["default"])('');
  const [alert, showAlert] = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__["default"])(true);
  const {
    authMsgs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_contexts_auth_context__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]);
  const {
    loginUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_contexts_auth_context__WEBPACK_IMPORTED_MODULE_4__["AuthActions"]);

  const handleSubmit = async e => {
    e.preventDefault();
    await loginUser(user);
    !alert && showAlert();
  };

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: `${_styles_components_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.login__form}`
  }, authMsgs && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "justify-content-md-center"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 5
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
    variant: "warning"
  }, authMsgs))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "justify-content-md-center"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx("h4", {
    className: _styles_components_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.login__header
  }, "Login"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "d-flex justify-content-center"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 5
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: handleSubmit
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "formBasicEmail"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    className: _styles_components_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.login__label
  }, "Username"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    size: "lg",
    type: "text",
    name: "username",
    value: user.username || '',
    onChange: handleChange
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    className: "text-muted"
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "formBasicPassword"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    className: _styles_components_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.login__label
  }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    size: "lg",
    type: "password",
    name: "password",
    value: user.password || '',
    onChange: handleChange
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "lg",
    variant: "primary",
    type: "submit",
    block: true
  }, "Login")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./context/actions/types.js":
/*!**********************************!*\
  !*** ./context/actions/types.js ***!
  \**********************************/
/*! exports provided: GET_PROJECTS, GET_PROJECT, ADD_PROJECT, ADD_FAILED, DELETE_PROJECT, DELETE_FAILED, EDIT_PROJECT, EDIT_FAILED, CLEAR_MSG, GET_PROJECT_FAILED, GET_PROJECTS_FAILED, CLEAR_PROJECT, PROJECT_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, AUTH_SUCCESS, CLEAR_MSGS, LOGOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROJECTS", function() { return GET_PROJECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROJECT", function() { return GET_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PROJECT", function() { return ADD_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FAILED", function() { return ADD_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_PROJECT", function() { return DELETE_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FAILED", function() { return DELETE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_PROJECT", function() { return EDIT_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_FAILED", function() { return EDIT_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_MSG", function() { return CLEAR_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROJECT_FAILED", function() { return GET_PROJECT_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROJECTS_FAILED", function() { return GET_PROJECTS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_PROJECT", function() { return CLEAR_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECT_LOADING", function() { return PROJECT_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ERROR", function() { return AUTH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ERROR", function() { return LOGIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_SUCCESS", function() { return AUTH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_MSGS", function() { return CLEAR_MSGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
//portfolio projects
const GET_PROJECTS = "GET_PROJECTS";
const GET_PROJECT = "GET_PROJECT";
const ADD_PROJECT = "ADD_PROJECT";
const ADD_FAILED = "ADD_FAILED";
const DELETE_PROJECT = "DELETE_PROJECT";
const DELETE_FAILED = "DELETE_FAILED";
const EDIT_PROJECT = "EDIT_PROJECT";
const EDIT_FAILED = "EDIT_FAILED";
const CLEAR_MSG = "CLEAR_MSG";
const GET_PROJECT_FAILED = "GET_PROJECT_FAILED";
const GET_PROJECTS_FAILED = "GET_PROJECTS_FAILED";
const CLEAR_PROJECT = "CLEAR_PROJECT";
const PROJECT_LOADING = "PROJECT_LOADING"; //auth

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

  const handleQuillChange = value => {
    setValue(prev => _objectSpread({}, prev, {
      description: value
    }));
  };

  const handleFileChange = e => {
    e.persist();
    setValue(prev => _objectSpread({}, prev, {
      projectImg: e.target.files[0]
    }));
  };

  const reset = init => {
    setValue(init);
  };

  const currentData = init => {
    setValue(init);
  };

  return [newValue, handleChange, handleQuillChange, reset, handleFileChange, currentData];
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
/* harmony import */ var _context_contexts_auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/contexts/auth.context */ "./context/contexts/auth.context.js");
/* harmony import */ var _components_admin_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/admin/Login */ "./components/admin/Login.js");
/* harmony import */ var _styles_pages_login_page_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/pages/login_page.module.scss */ "./styles/pages/login_page.module.scss");
/* harmony import */ var _styles_pages_login_page_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_login_page_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const index = () => {
  const {
    checkAuth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_contexts_auth_context__WEBPACK_IMPORTED_MODULE_3__["AuthActions"]);
  const {
    isAuthenticated
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_contexts_auth_context__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]);
  isAuthenticated && next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/admin/dashboard');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    checkAuth();
  }, []);
  return __jsx("div", {
    className: _styles_pages_login_page_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.login_page
  }, __jsx("div", {
    className: _styles_pages_login_page_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.login_page__header_container
  }, __jsx("h5", {
    className: _styles_pages_login_page_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.login_page__header
  }, "Dominic Cattell", __jsx("span", {
    className: _styles_pages_login_page_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.login_page__sub_heading
  }, "CMS"))), __jsx(_components_admin_Login__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./styles/components/login.module.scss":
/*!*********************************************!*\
  !*** ./styles/components/login.module.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"login__label": "login_login__label__25HWy",
	"login__header": "login_login__header__1kF5O"
};

/***/ }),

/***/ "./styles/pages/login_page.module.scss":
/*!*********************************************!*\
  !*** ./styles/pages/login_page.module.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"login_page__header_container": "login_page_login_page__header_container__1hZTi",
	"login_page__header": "login_page_login_page__header__1nZEk",
	"login_page__sub_heading": "login_page_login_page__sub_heading__d3ejE"
};

/***/ }),

/***/ 4:
/*!************************************!*\
  !*** multi ./pages/admin/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\users\domin\documents\domcattell\site\pages\admin\index.js */"./pages/admin/index.js");


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