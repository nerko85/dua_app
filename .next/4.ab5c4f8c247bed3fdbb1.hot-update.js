webpackHotUpdate(4,{

/***/ "./components/Forms/SearchComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
var _jsxFileName = "/Users/Nermin/Desktop/duaApp/components/Forms/SearchComponent.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var Search = __WEBPACK_IMPORTED_MODULE_1_antd__["d" /* Input */].Search;

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

/***/ })

})
//# sourceMappingURL=4.ab5c4f8c247bed3fdbb1.hot-update.js.map