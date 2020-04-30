module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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

/***/ "./components/admin/AdminNavbar.js":
/*!*****************************************!*\
  !*** ./components/admin/AdminNavbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_admin_navbar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/components/admin_navbar.module.scss */ "./styles/components/admin_navbar.module.scss");
/* harmony import */ var _styles_components_admin_navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_admin_navbar_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modals_NewProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/NewProjects */ "./components/modals/NewProjects.js");
/* harmony import */ var _context_contexts_auth_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/contexts/auth.context */ "./context/contexts/auth.context.js");
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _layout_DashboardButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/DashboardButton */ "./components/layout/DashboardButton.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const AdminNavbar = () => {
  const {
    logout
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_contexts_auth_context__WEBPACK_IMPORTED_MODULE_4__["AuthActions"]);
  const [newProject, toggleNewProject] = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_5__["default"])(false);
  return __jsx("nav", {
    className: _styles_components_admin_navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.navbar
  }, __jsx("div", {
    className: _styles_components_admin_navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.navbar__header
  }, __jsx("h4", {
    className: _styles_components_admin_navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.navbar__header__title
  }, "Dashboard")), __jsx("div", {
    className: _styles_components_admin_navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.navbar__controls
  }, __jsx(_layout_DashboardButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: "large"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "home"
  })), __jsx(_layout_DashboardButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: "large",
    onClick: toggleNewProject
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "newspaper"
  })), __jsx(_layout_DashboardButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: "large"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "cog"
  })), __jsx(_layout_DashboardButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: logout,
    style: "large"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "sign-out-alt"
  })), __jsx(_modals_NewProjects__WEBPACK_IMPORTED_MODULE_3__["default"], {
    show: newProject,
    toggle: toggleNewProject
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AdminNavbar);

/***/ }),

/***/ "./components/admin/AdminPages.js":
/*!****************************************!*\
  !*** ./components/admin/AdminPages.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_admin_pages_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/components/admin_pages.module.scss */ "./styles/components/admin_pages.module.scss");
/* harmony import */ var _styles_components_admin_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_admin_pages_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AdminPages = () => {
  return __jsx("div", {
    className: _styles_components_admin_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pages
  }, __jsx("h5", {
    className: _styles_components_admin_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pages__header
  }, "Pages"), __jsx("ul", {
    className: _styles_components_admin_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pages__list
  }, __jsx("li", {
    className: _styles_components_admin_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pages__list__item
  }, __jsx("a", {
    className: _styles_components_admin_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pages__link,
    target: "_blank",
    href: "/home"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: _styles_components_admin_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pages__icon,
    icon: "home"
  }), "Home")), __jsx("li", {
    className: _styles_components_admin_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pages__list__item
  }, __jsx("a", {
    className: _styles_components_admin_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pages__link,
    target: "_blank",
    href: "#"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: _styles_components_admin_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pages__icon,
    icon: "at"
  }), "Contact")), __jsx("li", {
    className: _styles_components_admin_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pages__list__item
  }, __jsx("a", {
    className: _styles_components_admin_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pages__link,
    target: "_blank",
    href: "#"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: _styles_components_admin_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pages__icon,
    icon: "smile"
  }), "About")), __jsx("li", {
    className: _styles_components_admin_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pages__list__item
  }, __jsx("a", {
    className: _styles_components_admin_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pages__link,
    target: "_blank",
    href: "https://www.linkedin.com/in/dominic-cattell-0717bb1a4"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: _styles_components_admin_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pages__icon,
    icon: ['fab', 'linkedin']
  }), "Linkedin")), __jsx("li", {
    className: _styles_components_admin_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pages__list__item
  }, __jsx("a", {
    className: _styles_components_admin_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pages__link,
    target: "_blank",
    href: "https://github.com/domcattell"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: _styles_components_admin_pages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pages__icon,
    icon: ['fab', 'github']
  }), "Github"))));
};

/* harmony default export */ __webpack_exports__["default"] = (AdminPages);

/***/ }),

/***/ "./components/admin/AdminProject.js":
/*!******************************************!*\
  !*** ./components/admin/AdminProject.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_admin_project_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/components/admin_project.module.scss */ "./styles/components/admin_project.module.scss");
/* harmony import */ var _styles_components_admin_project_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_admin_project_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_DashboardButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/DashboardButton */ "./components/layout/DashboardButton.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const AdminProject = props => {
  return __jsx("div", {
    className: _styles_components_admin_project_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project
  }, __jsx("img", {
    className: _styles_components_admin_project_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project__bg,
    src: props.img,
    alt: "project image"
  }), __jsx("div", {
    className: _styles_components_admin_project_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project__toolbar
  }, __jsx(_layout_DashboardButton__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "link"
  }), __jsx("h5", {
    className: _styles_components_admin_project_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project__header
  }, props.title)), __jsx("div", {
    className: _styles_components_admin_project_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project__toolbar__controls
  }, __jsx(_layout_DashboardButton__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "pen-square"
  })), __jsx(_layout_DashboardButton__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "trash"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (AdminProject);

/***/ }),

/***/ "./components/admin/AdminProjects.js":
/*!*******************************************!*\
  !*** ./components/admin/AdminProjects.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_contexts_projects_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/contexts/projects.context */ "./context/contexts/projects.context.js");
/* harmony import */ var _layout_DashboardButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/DashboardButton */ "./components/layout/DashboardButton.js");
/* harmony import */ var _admin_AdminPages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin/AdminPages */ "./components/admin/AdminPages.js");
/* harmony import */ var _admin_AdminProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin/AdminProject */ "./components/admin/AdminProject.js");
/* harmony import */ var _styles_components_admin_projects_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/components/admin_projects.module.scss */ "./styles/components/admin_projects.module.scss");
/* harmony import */ var _styles_components_admin_projects_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_components_admin_projects_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const AdminProjects = () => {
  const {
    getProjects
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_contexts_projects_context__WEBPACK_IMPORTED_MODULE_1__["ProjectsActions"]);
  const {
    projects
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_contexts_projects_context__WEBPACK_IMPORTED_MODULE_1__["ProjectsContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getProjects();
  }, []);
  return __jsx("div", {
    className: _styles_components_admin_projects_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.projects
  }, __jsx(_admin_AdminPages__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx("div", {
    className: _styles_components_admin_projects_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.projects__container,
    id: _styles_components_admin_projects_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.scrollbar
  }, __jsx("div", {
    className: _styles_components_admin_projects_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.projects__header
  }, __jsx("h5", {
    className: _styles_components_admin_projects_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.projects__title
  }, "Projects"), __jsx(_layout_DashboardButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: "alternative"
  }, "+ New Project")), projects.map(project => __jsx(_admin_AdminProject__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: project._id,
    title: project.title,
    img: project.projectImg
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (AdminProjects);

/***/ }),

/***/ "./components/admin/TextEditor.js":
/*!****************************************!*\
  !*** ./components/admin/TextEditor.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //only load Quill on client side. depends on document, if not present on SSR then will not load

const ReactQuill = false ? undefined : () => false;

const TextEditor = props => {
  const modules = {
    toolbar: [[{
      header: [1, 2, 3, 4, 5, false]
    }], ['bold', 'italic', 'underline', 'code-block'], [{
      list: 'ordered'
    }, {
      list: 'bullet'
    }], ['link'], ['clean']]
  };
  const formats = ['header', 'bold', 'italic', 'underline', 'code-block', 'list', 'bullet', 'indent', 'link'];
  return __jsx("div", {
    className: "text-editor"
  }, __jsx(ReactQuill, {
    theme: "snow",
    modules: modules,
    formats: formats,
    value: props.value,
    onChange: props.onChange,
    placeholder: "Enter description..."
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TextEditor);

/***/ }),

/***/ "./components/layout/DashboardButton.js":
/*!**********************************************!*\
  !*** ./components/layout/DashboardButton.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_layout_dashboard_button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/layout/dashboard_button.module.scss */ "./styles/layout/dashboard_button.module.scss");
/* harmony import */ var _styles_layout_dashboard_button_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_dashboard_button_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const DashboardButton = props => {
  const style = () => {
    const classStyle = props.style;

    switch (classStyle) {
      case 'large':
        return _styles_layout_dashboard_button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.large;
        break;

      case 'alternative':
        return _styles_layout_dashboard_button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.alternative;
        break;

      default:
        return _styles_layout_dashboard_button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.small;
    }
  };

  return __jsx("button", {
    onClick: props.onClick,
    className: style()
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardButton);

/***/ }),

/***/ "./components/modals/NewProjects.js":
/*!******************************************!*\
  !*** ./components/modals/NewProjects.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_TextEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin/TextEditor */ "./components/admin/TextEditor.js");
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useInputState */ "./hooks/useInputState.js");
/* harmony import */ var _context_contexts_projects_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/contexts/projects.context */ "./context/contexts/projects.context.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const NewProjects = props => {
  const [project, handleChange, handleDesc, resetForm, fileChange] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_3__["default"])({});
  const {
    addProject
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_contexts_projects_context__WEBPACK_IMPORTED_MODULE_4__["ProjectsActions"]);

  const handleSubmit = e => {
    e.preventDefault();
    const form_data = new FormData(newProjectForm);
    form_data.set('description', project.description);
    addProject(form_data);
  };

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    size: "lg",
    show: props.show,
    onHide: props.toggle,
    centered: true,
    style: {
      zIndex: '9999'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
    id: "new-project"
  }, "New Portfolio Project")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    id: "newProjectForm",
    onSubmit: handleSubmit
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    name: "title",
    value: project.title || '',
    onChange: handleChange,
    type: "text",
    placeholder: "Title"
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    name: "code",
    value: project.code || '',
    onChange: handleChange,
    type: "text",
    placeholder: "Source Link"
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    name: "demo",
    value: project.demo || '',
    onChange: handleChange,
    type: "text",
    placeholder: "Demo Link"
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, null, __jsx(_admin_TextEditor__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: project.description || '',
    onChange: handleDesc
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, null, __jsx("input", {
    type: "file",
    name: "projectImg",
    onChange: fileChange
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    type: "submit"
  }, "Submit")))));
};

/* harmony default export */ __webpack_exports__["default"] = (NewProjects);

/***/ }),

/***/ "./context/actions/types.js":
/*!**********************************!*\
  !*** ./context/actions/types.js ***!
  \**********************************/
/*! exports provided: GET_PROJECTS, GET_PROJECT, ADD_PROJECT, ADD_FAILED, DELETE_PROJECT, DELETE_FAILED, EDIT_PROJECT, EDIT_FAILED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, AUTH_SUCCESS, CLEAR_MSGS, LOGOUT */
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
const EDIT_FAILED = "EDIT_FAILED"; //auth

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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ProjectsContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const ProjectsActions = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const ProjectsProvider = props => {
  const initState = {
    projects: [],
    project: null,
    projectsMsg: null
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
      console.log(e);
    }
  };

  const addProject = async project => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/api/projects/new', project);
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_1__["ADD_PROJECT"],
        payload: res.data
      });
    } catch (e) {
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_1__["ADD_FAILED"],
        payload: e.response.data
      });
    }
  };

  const actions = {
    getProjects,
    addProject
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
        project: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["ADD_PROJECT"]:
      return _objectSpread({}, state, {
        projects: [...state.projects, action.payload]
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["DELETE_PROJECT"]:
      return _objectSpread({}, state, {
        projects: state.projects.filter(project => project.id != action.payload)
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["EDIT_PROJECT"]:
      return _objectSpread({}, state, {
        projects: state.projects.map(project => project.id == action.payload.id ? action.payload : project)
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

  const reset = () => {
    setValue(init);
  };

  return [newValue, handleChange, handleQuillChange, reset, handleFileChange];
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

/***/ "./pages/admin/dashboard.js":
/*!**********************************!*\
  !*** ./pages/admin/dashboard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HOC_auth_hoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../HOC/auth.hoc */ "./HOC/auth.hoc.js");
/* harmony import */ var _components_admin_AdminNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/admin/AdminNavbar */ "./components/admin/AdminNavbar.js");
/* harmony import */ var _components_admin_AdminProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/admin/AdminProjects */ "./components/admin/AdminProjects.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const dashboard = () => {
  return __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, __jsx(_components_admin_AdminNavbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_components_admin_AdminProjects__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_auth_hoc__WEBPACK_IMPORTED_MODULE_1__["default"])(dashboard));

/***/ }),

/***/ "./styles/components/admin_navbar.module.scss":
/*!****************************************************!*\
  !*** ./styles/components/admin_navbar.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"navbar": "admin_navbar_navbar__1-aCF",
	"navbar__header": "admin_navbar_navbar__header__3qBJi",
	"navbar__header__title": "admin_navbar_navbar__header__title__BNqk8"
};

/***/ }),

/***/ "./styles/components/admin_pages.module.scss":
/*!***************************************************!*\
  !*** ./styles/components/admin_pages.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"pages": "admin_pages_pages__3Au4t",
	"pages__header": "admin_pages_pages__header__3iJ6I",
	"pages__list": "admin_pages_pages__list__3s_qX",
	"pages__link": "admin_pages_pages__link__2308e",
	"pages__icon": "admin_pages_pages__icon__3sWxi"
};

/***/ }),

/***/ "./styles/components/admin_project.module.scss":
/*!*****************************************************!*\
  !*** ./styles/components/admin_project.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"project": "admin_project_project__P8jpa",
	"project__bg": "admin_project_project__bg__p6TCE",
	"project__header": "admin_project_project__header__23JjW",
	"project__toolbar": "admin_project_project__toolbar__1ij_o",
	"project__toolbar__controls": "admin_project_project__toolbar__controls__2VcCW"
};

/***/ }),

/***/ "./styles/components/admin_projects.module.scss":
/*!******************************************************!*\
  !*** ./styles/components/admin_projects.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"scrollbar": "admin_projects_scrollbar__2WKAV",
	"projects": "admin_projects_projects__1nCRS",
	"projects__container": "admin_projects_projects__container__2k7-K",
	"projects__header": "admin_projects_projects__header__2dYjJ",
	"projects__title": "admin_projects_projects__title__2_unE"
};

/***/ }),

/***/ "./styles/layout/dashboard_button.module.scss":
/*!****************************************************!*\
  !*** ./styles/layout/dashboard_button.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"large": "dashboard_button_large__1OaKD",
	"alternative": "dashboard_button_alternative__NuMdE",
	"small": "dashboard_button_small__1wwgT"
};

/***/ }),

/***/ 4:
/*!****************************************!*\
  !*** multi ./pages/admin/dashboard.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\domin\Documents\domcattell\site\pages\admin\dashboard.js */"./pages/admin/dashboard.js");


/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

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
//# sourceMappingURL=dashboard.js.map