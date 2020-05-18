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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./context/contexts/projects.context.js":
/*!**********************************************!*\
  !*** ./context/contexts/projects.context.js ***!
  \**********************************************/
/*! exports provided: ProjectsContext, ProjectsActions, ProjectsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsContext", function() { return ProjectsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsActions", function() { return ProjectsActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsProvider", function() { return ProjectsProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ "./context/actions/types.js");
/* harmony import */ var _reducers_projects_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/projects.reducer */ "./context/reducers/projects.reducer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 //currently uses react-toastify to show error data from server response as notifcation


const ProjectsContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const ProjectsActions = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const ProjectsProvider = props => {
  const initState = {
    projects: [],
    project: {},
    projectsMsg: '',
    loading: true
  };
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducers_projects_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], initState);

  const getProjects = async () => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/projects', {
        headers: {
          Accept: 'application/json'
        }
      });
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_1__["GET_PROJECTS"],
        payload: res.data
      });
    } catch (e) {
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_1__["GET_PROJECTS_FAILED"],
        payload: e.response.data
      });
    }
  };

  const getProject = async projectURL => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/api/projects/${projectURL}`);
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_1__["GET_PROJECT"],
        payload: res.data
      });
    } catch (e) {
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_1__["GET_PROJECT_FAILED"],
        payload: e.response.data
      });
    }
  };

  const addProject = async project => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/api/projects/new', project);
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_1__["ADD_PROJECT"],
        payload: res.data
      });
    } catch (err) {
      react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error(err.response.data.msg);
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_1__["ADD_FAILED"],
        payload: err.response.data
      });
    }
  };

  const editProject = async (projectURL, project) => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(`/api/projects/${projectURL}`, project);
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_1__["EDIT_PROJECT"],
        payload: res.data
      });
    } catch (err) {
      react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error(err.response.data.msg);
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_1__["EDIT_FAILED"],
        payload: err.response.data
      });
    }
  };

  const deleteProject = async projectURL => {
    try {
      await axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(`/api/projects/${projectURL}`);
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_1__["DELETE_PROJECT"],
        payload: projectURL
      });
    } catch (err) {
      react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error(err.response.data.msg);
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_1__["DELETE_FAILED"],
        payload: err.response.data
      });
    }
  };

  const clearProjectMsg = () => {
    dispatch({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_MSG"]
    });
  };

  const clearProject = () => {
    dispatch({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_PROJECT"]
    });
  };

  const loadingProject = () => dispatch({
    type: _actions_types__WEBPACK_IMPORTED_MODULE_1__["PROJECT_LOADING"]
  });

  const actions = {
    getProjects,
    getProject,
    addProject,
    editProject,
    deleteProject,
    clearProjectMsg,
    clearProject,
    loadingProject
  };
  return __jsx(ProjectsContext.Provider, {
    value: state
  }, __jsx(ProjectsActions.Provider, {
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

/***/ "./context/reducers/projects.reducer.js":
/*!**********************************************!*\
  !*** ./context/reducers/projects.reducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./context/actions/types.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const reducer = (state, action) => {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_PROJECTS"]:
      return _objectSpread({}, state, {
        projects: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_PROJECT"]:
      return _objectSpread({}, state, {
        project: action.payload,
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["PROJECT_LOADING"]:
      return _objectSpread({}, state, {
        loading: true
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["ADD_PROJECT"]:
      return _objectSpread({}, state, {
        projects: [...state.projects, action.payload]
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["DELETE_PROJECT"]:
      return _objectSpread({}, state, {
        projects: state.projects.filter(project => project.url !== action.payload)
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["EDIT_PROJECT"]:
      return _objectSpread({}, state, {
        projects: state.projects.map(project => project._id === action.payload._id ? action.payload : project)
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_MSG"]:
      return _objectSpread({}, state, {
        projectsMsg: ""
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_PROJECT"]:
      return _objectSpread({}, state, {
        project: {},
        loading: true
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_PROJECT_FAILED"]:
      return _objectSpread({}, state, {
        project: {},
        projectsMsg: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_PROJECTS_FAILED"]:
      return _objectSpread({}, state, {
        projects: [],
        projectsMsg: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["EDIT_FAILED"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["DELETE_FAILED"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["ADD_FAILED"]:
      return _objectSpread({}, state, {
        projectsMsg: action.payload
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

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_contexts_projects_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/contexts/projects.context */ "./context/contexts/projects.context.js");
/* harmony import */ var _context_contexts_auth_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/contexts/auth.context */ "./context/contexts/auth.context.js");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/reset.css */ "./styles/reset.css");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_custom_theme_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/_custom_theme.scss */ "./styles/_custom_theme.scss");
/* harmony import */ var _styles_custom_theme_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_theme_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_quill_editor_custom_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/quill_editor_custom.css */ "./styles/quill_editor_custom.css");
/* harmony import */ var _styles_quill_editor_custom_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_quill_editor_custom_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











react_toastify__WEBPACK_IMPORTED_MODULE_9__["toast"].configure({
  hideProgressBar: true,
  autoClose: 3000,
  transition: react_toastify__WEBPACK_IMPORTED_MODULE_9__["Slide"]
}); // import 'react-quill/dist/quill.snow.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({
  Component,
  pageProps
}) {
  _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["fab"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faUserPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCog"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faSignOutAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faHome"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faNewspaper"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faExternalLinkAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPenSquare"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faTrash"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faLink"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faAt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faSmile"]);
  return __jsx(_context_contexts_projects_context__WEBPACK_IMPORTED_MODULE_1__["ProjectsProvider"], null, __jsx(_context_contexts_auth_context__WEBPACK_IMPORTED_MODULE_2__["AuthProvider"], null, __jsx(Component, pageProps)));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/_custom_theme.scss":
/*!***********************************!*\
  !*** ./styles/_custom_theme.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/quill_editor_custom.css":
/*!****************************************!*\
  !*** ./styles/quill_editor_custom.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/reset.css":
/*!**************************!*\
  !*** ./styles/reset.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map