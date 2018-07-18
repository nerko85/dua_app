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
var _jsxFileName = "/Users/Nermin/Desktop/duaApp/components/Container/DuaContainer.js";

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
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, iusto!",
        favourite: false // category: undefined,
        // source: undefined,
        // chain: undefined

      }]
    };
    _this.changeFav = _this.changeFav.bind(_assertThisInitialized(_this));
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
    value: function handleChange(e) {
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
      var _this2 = this;

      var duas = this.state.duas;
      var novo = duas.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Duas, {
          key: index,
          title: item.title,
          content: item.body,
          favourite: item.favourite,
          changeFav: _this2.changeFav,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        });
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
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
      lineNumber: 93
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    type: "text",
    name: "title",
    onChange: props.change,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
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

  function Duas(props) {
    var _this3;

    _classCallCheck(this, Duas);

    _this3 = _possibleConstructorReturn(this, (Duas.__proto__ || Object.getPrototypeOf(Duas)).call(this, props));
    _this3.favHandler = _this3.favHandler.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(Duas, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          content = _props.content,
          favourite = _props.favourite;
      var proba = favourite ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Icon */], {
        type: "star",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Icon */], {
        type: "star-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["b" /* Col */], {
        lg: {
          span: 5
        },
        className: "test",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
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
            lineNumber: 120
          }
        }, " ", favourite ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Icon */], {
          type: "star",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Icon */], {
          type: "star-o",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        })),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "proba",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
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
  }]);

  return Duas;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })

})
//# sourceMappingURL=4.0c02c8918ec64f2ef0fe.hot-update.js.map