webpackHotUpdate(4,{

/***/ "./components/Duas/Duas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\dua_app\\components\\Duas\\Duas.js";

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
      var proba = favourite ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Icon */], {
        type: "star",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Icon */], {
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
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["b" /* Col */], {
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
            lineNumber: 18
          }
        }, " ", favourite ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Icon */], {
          type: "star",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Icon */], {
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
      }, content))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["g" /* Modal */], {
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

/***/ })

})
//# sourceMappingURL=4.41d33c099c3ca458a301.hot-update.js.map