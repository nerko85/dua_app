module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Container/DuaContainer.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Container/DuaContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuaWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DuaContainer_css__ = __webpack_require__("./components/Container/DuaContainer.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DuaContainer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__DuaContainer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Forms_SearchComponent__ = __webpack_require__("./components/Forms/SearchComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Duas_Duas__ = __webpack_require__("./components/Duas/Duas.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HijriCalendar_HijriCalendar__ = __webpack_require__("./components/HijriCalendar/HijriCalendar.js");
var _jsxFileName = "/home/abdurahman/Desktop/dua_app/components/Container/DuaContainer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


 // import css from'./DuaContainer.css'






var DuaWrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(DuaWrapper, _Component);

  function DuaWrapper(props) {
    var _this;

    _classCallCheck(this, DuaWrapper);

    _this = _possibleConstructorReturn(this, (DuaWrapper.__proto__ || Object.getPrototypeOf(DuaWrapper)).call(this, props));
    _this.state = {
      duas: [{
        // id:undefined,
        title: 'Nermin',
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, iusto!",
        favourite: true // category: undefined,
        // source: undefined,
        // chain: undefined

      }, {
        // id:undefined,
        title: 'Eso Ibada',
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, iusto!",
        favourite: false // category: undefined,
        // source: undefined,
        // chain: undefined

      }, {
        // id:undefined,
        title: 'Shalilalalaj',
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, iusto!",
        favourite: false // category: undefined,
        // source: undefined,
        // chain: undefined

      }, {
        // id:undefined,
        title: 'Sumeja',
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, iusto! Test",
        favourite: false // category: undefined,
        // source: undefined,
        // chain: undefined

      }],
      results: []
    };
    _this.changeFav = _this.changeFav.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DuaWrapper, [{
    key: "changeFav",
    value: function changeFav(item) {
      var duas = this.state.duas; // console.log(duas)

      var changed = duas.map(function (element) {
        if (element.title === item.title) {
          element.favourite = !element.favourite;
        }

        return element;
      });
      this.setState({
        duas: changed
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      // const value = e.target.value;
      var duas = this.state.duas;
      var results = duas.filter(function (dua) {
        var regex = new RegExp(value, 'gi');
        return dua.title.match(regex) || dua.body.match(regex);
      });

      if (value) {
        this.setState({
          results: results
        });
      } else {
        this.setState({
          results: []
        });
      }
    } // fetch(){
    //     const now = new Date();
    //     const year = now.getFullYear();
    //     const month = now.getMonth() + 2;
    //     console.log(month)
    //     const endpoint = `http://api.aladhan.com/v1/calendar?latitude=44.206583&longitude=17.906376&method=2&month=${month}&year=${year}`;
    //     fetch(endpoint).then(blob => blob.json()).then(resp => this.setState({
    //         prayers: resp.data
    //     }))
    // }
    // componentDidMount(){
    //     this.fetch()
    // }

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          duas = _state.duas,
          results = _state.results;
      var test = results === undefined || results.length == 0 ? duas : results;
      var novo = test.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Duas_Duas__["a" /* default */], {
          key: index,
          title: item.title,
          content: item.body,
          favourite: item.favourite,
          changeFav: _this2.changeFav,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        });
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__HijriCalendar_HijriCalendar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Forms_SearchComponent__["a" /* default */], {
        handleChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
        type: "flex",
        justify: "space-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, novo));
    }
  }]);

  return DuaWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./components/Duas/Duas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
var _jsxFileName = "/home/abdurahman/Desktop/dua_app/components/Duas/Duas.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Duas =
/*#__PURE__*/
function (_Component) {
  _inherits(Duas, _Component);

  function Duas(props) {
    var _this;

    _classCallCheck(this, Duas);

    _this = _possibleConstructorReturn(this, (Duas.__proto__ || Object.getPrototypeOf(Duas)).call(this, props));
    _this.favHandler = _this.favHandler.bind(_assertThisInitialized(_this));
    _this.state = {
      modalVisible: false
    };
    return _this;
  }

  _createClass(Duas, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          title = _props.title,
          content = _props.content,
          favourite = _props.favourite;
      var proba = favourite ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
        type: "star",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
        type: "star-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {
        lg: {
          span: 6
        },
        className: "gutter-row",
        onClick: function onClick() {
          return _this2.setVisible(true);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
        title: title,
        style: {
          width: 300
        },
        extra: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          href: "#",
          onClick: this.favHandler,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }, " ", favourite ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
          type: "star",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
          type: "star-o",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        })),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "proba",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, content))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Modal"], {
        title: title,
        wrapClassName: "vertical-center-modal",
        visible: this.state.modalVisible,
        onOk: function onOk() {
          return _this2.setVisible(false);
        },
        onCancel: function onCancel() {
          return _this2.setVisible(false);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, content)));
    }
  }, {
    key: "favHandler",
    value: function favHandler(e) {
      e.preventDefault();
      var changeFav = this.props.changeFav;
      changeFav(this.props); // console.log(this)
    }
  }, {
    key: "setVisible",
    value: function setVisible(modalVisible) {
      this.setState({
        modalVisible: modalVisible
      });
    }
  }]);

  return Duas;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Duas);

/***/ }),

/***/ "./components/Forms/SearchComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
var _jsxFileName = "/home/abdurahman/Desktop/dua_app/components/Forms/SearchComponent.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var Search = __WEBPACK_IMPORTED_MODULE_1_antd__["Input"].Search;

var SearchComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchComponent, _Component);

  function SearchComponent(props) {
    var _this;

    _classCallCheck(this, SearchComponent);

    _this = _possibleConstructorReturn(this, (SearchComponent.__proto__ || Object.getPrototypeOf(SearchComponent)).call(this, props));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SearchComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Search, {
        placeholder: "input search text",
        enterButton: "Search",
        size: "large",
        onSearch: function onSearch(value) {
          return _this2.onSearch(value);
        },
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      });
    }
  }, {
    key: "onSearch",
    value: function onSearch(value) {
      console.log(value);
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      var handleChange = this.props.handleChange;
      e.preventDefault();
      var value = e.target.value;
      handleChange(value); // console.log(e.target.value)
    }
  }]);

  return SearchComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SearchComponent);

/***/ }),

/***/ "./components/HijriCalendar/HijriCalendar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HijriCalendar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd__);

var _jsxFileName = "/home/abdurahman/Desktop/dua_app/components/HijriCalendar/HijriCalendar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var Option = __WEBPACK_IMPORTED_MODULE_2_antd__["Select"].Option;

var HijriCalendar =
/*#__PURE__*/
function (_Component) {
  _inherits(HijriCalendar, _Component);

  function HijriCalendar(props) {
    var _this;

    _classCallCheck(this, HijriCalendar);

    _this = _possibleConstructorReturn(this, (HijriCalendar.__proto__ || Object.getPrototypeOf(HijriCalendar)).call(this, props));
    _this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      day: new Date().getUTCDay(),
      data: []
    };
    _this.handleAddYear = _this.handleAddYear.bind(_assertThisInitialized(_this));
    _this.handleReduceYear = _this.handleReduceYear.bind(_assertThisInitialized(_this));
    _this.handleChangeMonth = _this.handleChangeMonth.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HijriCalendar, [{
    key: "handleAddYear",
    value: function () {
      var _handleAddYear = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.setState(function (prevState) {
                  return {
                    year: prevState.year + 1
                  };
                });

              case 2:
                this.fetch();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function handleAddYear() {
        return _handleAddYear.apply(this, arguments);
      };
    }()
  }, {
    key: "handleReduceYear",
    value: function () {
      var _handleReduceYear = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.setState(function (prevState) {
                  return {
                    year: prevState.year - 1
                  };
                });

              case 2:
                this.fetch();

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function handleReduceYear() {
        return _handleReduceYear.apply(this, arguments);
      };
    }()
  }, {
    key: "handleChangeMonth",
    value: function () {
      var _handleChangeMonth = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(value) {
        var months;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                months = this.state.months;
                _context3.next = 3;
                return this.setState({
                  month: months.indexOf(value) + 1
                });

              case 3:
                this.fetch();

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function handleChangeMonth(_x) {
        return _handleChangeMonth.apply(this, arguments);
      };
    }()
  }, {
    key: "fetch",
    value: function (_fetch) {
      function fetch() {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(function () {
      var _this2 = this;

      var _state = this.state,
          year = _state.year,
          month = _state.month;
      var endpoint = "http://api.aladhan.com/v1/calendar?latitude=44.206583&longitude=17.906376&method=2&month=".concat(month, "&year=").concat(year);
      fetch(endpoint).then(function (blob) {
        return blob.json();
      }).then(function (resp) {
        return _this2.setState({
          data: resp.data
        });
      });
    })
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetch();
    }
  }, {
    key: "render",
    value: function render() {
      var _state2 = this.state,
          year = _state2.year,
          months = _state2.months,
          month = _state2.month,
          data = _state2.data;
      var gridStyle = {
        width: "25%",
        height: "140px",
        textAlign: "center",
        isActive: "background-color"
      };
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Select"], {
        defaultValue: months[month - 1],
        style: {
          width: 120
        },
        onChange: this.handleChangeMonth,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, months.map(function (month) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Option, {
          key: month,
          value: month,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, month);
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Button"].Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Button"], {
        type: "primary",
        onClick: this.handleReduceYear,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Icon"], {
        type: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), "Previous Year"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Button"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, year), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Button"], {
        type: "primary",
        onClick: this.handleAddYear,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Next Year", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Icon"], {
        type: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Card"], {
        title: "Calendar ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, data.map(function (info) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Card"].Grid, {
          style: gridStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }, info.date.gregorian.day, ". ", info.date.gregorian.month.en, ", ", info.date.gregorian.weekday.en, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }), "Hijri Year: ", info.date.hijri.year, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }), info.date.hijri.day, ". ", info.date.hijri.month.en, " / ", info.date.hijri.month.ar, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }), info.date.hijri.weekday.en, " / ", info.date.hijri.weekday.ar, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }), info.date.hijri.holidays);
      })));
    }
  }]);

  return HijriCalendar;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),

/***/ "./components/Layout/Header/Navigation.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Layout/Header/Navigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation_css__ = __webpack_require__("./components/Layout/Header/Navigation.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Navigation_css__);
var _jsxFileName = "/home/abdurahman/Desktop/dua_app/components/Layout/Header/Navigation.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Navigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        current: 'mail'
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        console.log('click ', e);

        _this.setState({
          current: e.key
        });
      }
    }), _temp));
  }

  _createClass(Navigation, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Menu"], {
        onClick: this.handleClick,
        selectedKeys: [this.state.current],
        mode: "horizontal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Menu"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "Home"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Menu"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "About"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Menu"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "Contact"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Menu"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "Log in"))));
    }
  }]);

  return Navigation;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Navigation);

/***/ }),

/***/ "./components/Layout/Master.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Layout/Master.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_Navigation__ = __webpack_require__("./components/Layout/Header/Navigation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Sidebar_Sidebar__ = __webpack_require__("./components/Layout/Sidebar/Sidebar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Master_css__ = __webpack_require__("./components/Layout/Master.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Master_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Master_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd__);
var _jsxFileName = "/home/abdurahman/Desktop/dua_app/components/Layout/Master.js";



 // import Footer from './Footer/Footer'




var Header = __WEBPACK_IMPORTED_MODULE_5_antd__["Layout"].Header,
    Content = __WEBPACK_IMPORTED_MODULE_5_antd__["Layout"].Content,
    Footer = __WEBPACK_IMPORTED_MODULE_5_antd__["Layout"].Footer;

var Master = function Master(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Dua application"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/_next/static/style.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "../node_modules/antd/dist/antd.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.7.0/antd.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Sidebar_Sidebar__["a" /* default */], {
    style: {
      height: "100vh",
      position: 'fixed',
      top: '0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header_Navigation__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Content, {
    style: {
      margin: '24px 16px',
      padding: 24,
      background: '#fff',
      minHeight: 280
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, props.children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Footer, {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "Ant Design \xA92016 Created by Ant UED"))));
};

/* harmony default export */ __webpack_exports__["a"] = (Master); //style={{ width: "100vw", position:'fixed', top:'0', margin:"0 0 0 200px"}}

/***/ }),

/***/ "./components/Layout/Sidebar/Sidebar.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Layout/Sidebar/Sidebar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Sidebar_css__ = __webpack_require__("./components/Layout/Sidebar/Sidebar.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Sidebar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Sidebar_css__);
var _jsxFileName = "/home/abdurahman/Desktop/dua_app/components/Layout/Sidebar/Sidebar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Sider = __WEBPACK_IMPORTED_MODULE_1_antd__["Layout"].Sider;

var Sidebar =
/*#__PURE__*/
function (_Component) {
  _inherits(Sidebar, _Component);

  function Sidebar() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Sidebar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        collapsed: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggle", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          collapsed: !_this.state.collapsed
        });
      }
    }), _temp));
  }

  _createClass(Sidebar, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Sider, {
        trigger: null,
        collapsible: true,
        collapsed: this.state.collapsed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"], {
        theme: "dark",
        mode: "inline",
        defaultSelectedKeys: ['4'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {
        key: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
        type: "user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "nav-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "nav 1")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {
        key: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
        type: "video-camera",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "nav-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "nav 2")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {
        key: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
        type: "upload",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "nav-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "nav 3")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {
        key: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
        type: "user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "nav-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "nav 4"))));
    }
  }]);

  return Sidebar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Sidebar);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout_Master__ = __webpack_require__("./components/Layout/Master.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Container_DuaContainer__ = __webpack_require__("./components/Container/DuaContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd__);
var _jsxFileName = "/home/abdurahman/Desktop/dua_app/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout_Master__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Container_DuaContainer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "antd":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map