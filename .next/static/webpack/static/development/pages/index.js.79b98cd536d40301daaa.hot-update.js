webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.jsx");
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Image */ "./components/Image.jsx");
var _jsxFileName = "/Users/siosaiafonua/Desktop/article/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleUpdateImage", function () {
      console.log("Event Handler Called");
    });

    _this.state = {
      articles: [],
      images: [],
      content: [],
      isLoaded: false
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("https://interview-project-17987.herokuapp.com/api/article").then(function (res) {
        return res.json();
      }).then(function (json) {
        _this2.setState({
          isLoaded: true,
          articles: json,
          images: json.map(function (article) {
            var myImages = {
              images: article.images
            };
            return myImages;
          }),
          content: json.map(function (article) {
            var myContent = {
              content: article.content
            };
            return myContent;
          })
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      // console.log(this.state.articles);
      // console.log(this.state.images);
      // console.log(this.state.content);
      var _this$state = this.state,
          isLoaded = _this$state.isLoaded,
          articles = _this$state.articles;

      if (!isLoaded) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, " Loading... ");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }), this.state.articles.map(function (article) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
            key: article.url,
            title: article.title,
            mainUrl: article.images.map(function (i) {
              return i.mainUrl;
            }),
            thumbNail: article.images.map(function (j) {
              return j.thumbNail;
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          });
        }));
      }
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.79b98cd536d40301daaa.hot-update.js.map