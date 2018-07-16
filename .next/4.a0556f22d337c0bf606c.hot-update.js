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
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\newProject\\dua-react-app\\components\\Container\\DuaContainer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var DuaWrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(DuaWrapper, _Component);

  function DuaWrapper() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, DuaWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = DuaWrapper.__proto__ || Object.getPrototypeOf(DuaWrapper)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
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
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, iusto!",
          favourite: false // category: undefined,
          // source: undefined,
          // chain: undefined

        }]
      }
    }), _temp));
  }

  _createClass(DuaWrapper, [{
    key: "onHandleChange",
    value: function onHandleChange(e) {
      var value = e.target.value;
      var duas = this.state.duas;
      var results = duas.filter(function (dua) {
        var regex = new RegExp(value, 'gi');
        return dua.title.match(regex) || dua.body.match(regex);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var duas = this.state.duas;
      var novo = duas.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Duas, {
          key: index,
          title: item.title,
          content: item.body,
          favourite: item.favourite,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        });
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, novo);
    }
  }]);

  return DuaWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



var FormComponent = function FormComponent(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    type: "text",
    name: "title",
    onChange: props.change,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, "Submit Dua"));
}; // const Duas = props => {
//     return (
//         <Col lg={{ span: 5}} className={css.test}>
//             <Card title={props.title} style={{ width: 300 }} extra={<a href="#"><Icon type="star-o" /></a>} >
//                 <p>{props.content}</p>
//             </Card>
//         </Col>    
//     );
// };


var Duas =
/*#__PURE__*/
function (_Component2) {
  _inherits(Duas, _Component2);

  function Duas() {
    _classCallCheck(this, Duas);

    return _possibleConstructorReturn(this, (Duas.__proto__ || Object.getPrototypeOf(Duas)).apply(this, arguments));
  }

  _createClass(Duas, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          content = _props.content,
          favourite = _props.favourite;
      var proba = favourite.forEach(function (element) {
        if (element === true) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Icon */], {
            type: "star",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            }
          });
        } else {
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Icon */], {
            type: "star-o",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            }
          });
        }
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["b" /* Col */], {
        lg: {
          span: 5
        },
        className: __WEBPACK_IMPORTED_MODULE_2__DuaContainer_css___default.a.test,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["a" /* Card */], {
        title: title,
        style: {
          width: 300
        },
        extra: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, favourite ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Icon */], {
          type: "star",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Icon */], {
          type: "star-o",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        })),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, content)));
    }
  }]);

  return Duas;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ })

})
//# sourceMappingURL=4.a0556f22d337c0bf606c.hot-update.js.map