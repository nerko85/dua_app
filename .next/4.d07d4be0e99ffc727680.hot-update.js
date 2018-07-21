webpackHotUpdate(4,{

/***/ "./components/Container/DuaContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuaWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DuaContainer_css__ = __webpack_require__("./components/Container/DuaContainer.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DuaContainer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__DuaContainer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Forms_SearchComponent__ = __webpack_require__("./components/Forms/SearchComponent.js");
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\dua_app\\components\\Container\\DuaContainer.js";

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
      results: [],
      prayers: []
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
    }
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

      var now = new Date();
      var year = now.getFullYear();
      var month = now.getUTCFullYear();
      console.log(month);
      var endpoint = "http://api.aladhan.com/v1/calendar?latitude=51.508515&longitude=-0.1254872&method=2&month=".concat(month, "&year=").concat(year);
      fetch(endpoint).then(function (blob) {
        return blob.json();
      }).then(function (resp) {
        return _this2.setState({
          prayers: resp.data
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
      var _this3 = this;

      var _state = this.state,
          duas = _state.duas,
          results = _state.results,
          prayers = _state.prayers;
      console.log(prayers);
      var test = results === undefined || results.length == 0 ? duas : results;
      var novo = test.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Duas, {
          key: index,
          title: item.title,
          content: item.body,
          favourite: item.favourite,
          changeFav: _this3.changeFav,
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
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Forms_SearchComponent__["a" /* default */], {
        handleChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["h" /* Row */], {
        type: "flex",
        justify: "space-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, novo));
    }
  }]);

  return DuaWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



var Duas =
/*#__PURE__*/
function (_Component2) {
  _inherits(Duas, _Component2);

  function Duas(props) {
    var _this4;

    _classCallCheck(this, Duas);

    _this4 = _possibleConstructorReturn(this, (Duas.__proto__ || Object.getPrototypeOf(Duas)).call(this, props));
    _this4.favHandler = _this4.favHandler.bind(_assertThisInitialized(_this4));
    _this4.state = {
      modalVisible: false
    };
    return _this4;
  }

  _createClass(Duas, [{
    key: "render",
    value: function render() {
      var _this5 = this;

      var _props = this.props,
          title = _props.title,
          content = _props.content,
          favourite = _props.favourite;
      var proba = favourite ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Icon */], {
        type: "star",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Icon */], {
        type: "star-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["b" /* Col */], {
        lg: {
          span: 6
        },
        className: "gutter-row",
        onClick: function onClick() {
          return _this5.setVisible(true);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["a" /* Card */], {
        title: title,
        style: {
          width: 300
        },
        extra: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          href: "#",
          onClick: this.favHandler,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          }
        }, " ", favourite ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Icon */], {
          type: "star",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          }
        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Icon */], {
          type: "star-o",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          }
        })),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "proba",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, content))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["g" /* Modal */], {
        title: title,
        wrapClassName: "vertical-center-modal",
        visible: this.state.modalVisible,
        onOk: function onOk() {
          return _this5.setVisible(false);
        },
        onCancel: function onCancel() {
          return _this5.setVisible(false);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
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

/***/ })

})
//# sourceMappingURL=4.d07d4be0e99ffc727680.hot-update.js.map