webpackHotUpdate(4,{

/***/ "./components/HijriCalendar/HijriCalendar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HijriCalendar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\dua_app\\components\\HijriCalendar\\HijriCalendar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var HijriCalendar =
/*#__PURE__*/
function (_Component) {
  _inherits(HijriCalendar, _Component);

  function HijriCalendar(props) {
    var _this;

    _classCallCheck(this, HijriCalendar);

    _this = _possibleConstructorReturn(this, (HijriCalendar.__proto__ || Object.getPrototypeOf(HijriCalendar)).call(this, props));
    _this.state = {
      prayers: []
    };
    _this.dateCellRender = _this.dateCellRender.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HijriCalendar, [{
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
      var month = now.getMonth() + 2;
      console.log(month);
      var endpoint = "http://api.aladhan.com/v1/calendar?latitude=44.206583&longitude=17.906376&method=2&month=".concat(month, "&year=").concat(year);
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
    key: "getListData",
    value: function getListData(value) {
      var listData;

      switch (value.date()) {
        case 8:
          listData = [{
            type: 'warning',
            content: 'This is warning event.'
          }, {
            type: 'success',
            content: 'This is usual event.'
          }];
          break;

        case 10:
          listData = [{
            type: 'warning',
            content: 'This is warning event.'
          }, {
            type: 'success',
            content: 'This is usual event.'
          }, {
            type: 'error',
            content: 'This is error event.'
          }];
          break;

        case 15:
          listData = [{
            type: 'warning',
            content: 'This is warning event'
          }, {
            type: 'success',
            content: 'This is very long usual event。。....'
          }, {
            type: 'error',
            content: 'This is error event 1.'
          }, {
            type: 'error',
            content: 'This is error event 2.'
          }, {
            type: 'error',
            content: 'This is error event 3.'
          }, {
            type: 'error',
            content: 'This is error event 4.'
          }];
          break;

        default:
      }

      return listData || [];
    }
  }, {
    key: "dateCellRender",
    value: function dateCellRender(value) {
      var listData = this.getListData(value);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "events",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, listData.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          key: item.content,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["a" /* Badge */], {
          status: item.type,
          text: item.content,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }));
      }));
    }
  }, {
    key: "getMonthData",
    value: function getMonthData(value) {
      if (value.month() === 8) {
        return 1394;
      }
    }
  }, {
    key: "monthCellRender",
    value: function monthCellRender(value) {
      var num = getMonthData(value);
      return num ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "notes-month",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, num), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "Backlog number")) : null;
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.prayers);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["b" /* Calendar */], {
        dateCellRender: this.dateCellRender,
        monthCellRender: this.monthCellRender,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }));
    }
  }]);

  return HijriCalendar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ })

})
//# sourceMappingURL=4.54699f688edb2cd02d61.hot-update.js.map