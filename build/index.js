module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // identity function for calling harmony imports with the correct context
  /******/
  /******/ /******/ __webpack_require__.i = function(value) {
    return value;
  }; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        /******/ configurable: false,
        /******/ enumerable: true,
        /******/ get: getter
        /******/
      });
      /******/
    }
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 1));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function(module, exports) {
      module.exports = require("react");

      /***/
    },
    /* 1 */
    /***/ function(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = (function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();

      var _react = __webpack_require__(0);

      var _react2 = _interopRequireDefault(_react);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return call && (typeof call === "object" || typeof call === "function")
          ? call
          : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof superClass
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          Object.setPrototypeOf
            ? Object.setPrototypeOf(subClass, superClass)
            : (subClass.__proto__ = superClass);
      }

      var ReactGrid = (function(_React$Component) {
        _inherits(ReactGrid, _React$Component);

        function ReactGrid() {
          _classCallCheck(this, ReactGrid);

          return _possibleConstructorReturn(
            this,
            (ReactGrid.__proto__ || Object.getPrototypeOf(ReactGrid)).apply(
              this,
              arguments
            )
          );
        }

        _createClass(ReactGrid, [
          {
            key: "render",
            value: function render() {
              return _react2.default.createElement(
                "div",
                { class: "reactPivot", "data-reactid": ".0.4.0" },
                _react2.default.createElement(
                  "div",
                  {
                    class: "reactPivot-dimensions",
                    "data-reactid": ".0.4.0.0"
                  },
                  _react2.default.createElement(
                    "select",
                    { "data-reactid": ".0.4.0.0.0:0" },
                    _react2.default.createElement("option", {
                      "data-reactid": ".0.4.0.0.0:0.0"
                    }),
                    _react2.default.createElement(
                      "option",
                      { "data-reactid": ".0.4.0.0.0:0.1:0" },
                      "First Name"
                    ),
                    _react2.default.createElement(
                      "option",
                      { "data-reactid": ".0.4.0.0.0:0.1:1" },
                      "Last Name"
                    ),
                    _react2.default.createElement(
                      "option",
                      { "data-reactid": ".0.4.0.0.0:0.1:2" },
                      "State"
                    ),
                    _react2.default.createElement(
                      "option",
                      { "data-reactid": ".0.4.0.0.0:0.1:3" },
                      "Business"
                    ),
                    _react2.default.createElement(
                      "option",
                      { "data-reactid": ".0.4.0.0.0:0.1:4" },
                      "Transaction Type"
                    )
                  ),
                  _react2.default.createElement(
                    "select",
                    { "data-reactid": ".0.4.0.0.1" },
                    _react2.default.createElement(
                      "option",
                      { value: "", "data-reactid": ".0.4.0.0.1.0" },
                      "Sub Dimension..."
                    ),
                    _react2.default.createElement(
                      "option",
                      { "data-reactid": ".0.4.0.0.1.1:0" },
                      "First Name"
                    ),
                    _react2.default.createElement(
                      "option",
                      { "data-reactid": ".0.4.0.0.1.1:1" },
                      "Last Name"
                    ),
                    _react2.default.createElement(
                      "option",
                      { "data-reactid": ".0.4.0.0.1.1:2" },
                      "State"
                    ),
                    _react2.default.createElement(
                      "option",
                      { "data-reactid": ".0.4.0.0.1.1:3" },
                      "Business"
                    ),
                    _react2.default.createElement(
                      "option",
                      { "data-reactid": ".0.4.0.0.1.1:4" },
                      "Transaction Type"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { class: "reactPivot-csvExport", "data-reactid": ".0.4.0.2" },
                  _react2.default.createElement(
                    "button",
                    { "data-reactid": ".0.4.0.2.0" },
                    "Export CSV"
                  )
                ),
                _react2.default.createElement("span", {
                  "data-reactid": ".0.4.0.3"
                }),
                _react2.default.createElement(
                  "div",
                  { class: "reactPivot-results", "data-reactid": ".0.4.0.4" },
                  _react2.default.createElement(
                    "table",
                    { class: "", "data-reactid": ".0.4.0.4.0" },
                    _react2.default.createElement(
                      "thead",
                      { "data-reactid": ".0.4.0.4.0.0" },
                      _react2.default.createElement(
                        "tr",
                        { "data-reactid": ".0.4.0.4.0.0.0" },
                        _react2.default.createElement(
                          "th",
                          {
                            style: "cursor:pointer;",
                            "data-reactid": ".0.4.0.4.0.0.0.0"
                          },
                          _react2.default.createElement("span", {
                            "data-reactid": ".0.4.0.4.0.0.0.0.0"
                          }),
                          _react2.default.createElement(
                            "span",
                            { "data-reactid": ".0.4.0.4.0.0.0.0.1" },
                            "First Name"
                          )
                        ),
                        _react2.default.createElement(
                          "th",
                          {
                            style: "cursor:pointer;",
                            "data-reactid": ".0.4.0.4.0.0.0.1",
                            class: "alignRight"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              class: "reactPivot-hideColumn",
                              "data-reactid": ".0.4.0.4.0.0.0.1.0"
                            },
                            "\xD7"
                          ),
                          _react2.default.createElement(
                            "span",
                            { "data-reactid": ".0.4.0.4.0.0.0.1.1" },
                            "Count"
                          )
                        ),
                        _react2.default.createElement(
                          "th",
                          {
                            style: "cursor:pointer;",
                            "data-reactid": ".0.4.0.4.0.0.0.2",
                            class: "alignRight asc"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              class: "reactPivot-hideColumn",
                              "data-reactid": ".0.4.0.4.0.0.0.2.0"
                            },
                            "\xD7"
                          ),
                          _react2.default.createElement(
                            "span",
                            { "data-reactid": ".0.4.0.4.0.0.0.2.1" },
                            "Amount"
                          )
                        ),
                        _react2.default.createElement(
                          "th",
                          {
                            class: "alignRight",
                            style: "cursor:pointer;",
                            "data-reactid": ".0.4.0.4.0.0.0.3"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              class: "reactPivot-hideColumn",
                              "data-reactid": ".0.4.0.4.0.0.0.3.0"
                            },
                            "\xD7"
                          ),
                          _react2.default.createElement(
                            "span",
                            { "data-reactid": ".0.4.0.4.0.0.0.3.1" },
                            "Avg Amount"
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      "tbody",
                      { "data-reactid": ".0.4.0.4.0.1" },
                      _react2.default.createElement(
                        "tr",
                        {
                          class: "reactPivot-level-0",
                          "data-reactid":
                            ".0.4.0.4.0.1.$First Name\xFFVaughn\xFF"
                        },
                        _react2.default.createElement(
                          "td",
                          {
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFVaughn\xFF.$First Name\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFVaughn\xFF.$First Name\xFF.0"
                            },
                            "Vaughn"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFVaughn\xFF.$First Name\xFF.1"
                            },
                            " "
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              class: "reactPivot-solo",
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFVaughn\xFF.$First Name\xFF.2"
                            },
                            _react2.default.createElement(
                              "a",
                              {
                                style: "cursor:pointer;",
                                "data-reactid":
                                  ".0.4.0.4.0.1.$First Name\xFFVaughn\xFF.$First Name\xFF.2.0"
                              },
                              "solo"
                            )
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFVaughn\xFF.$Count\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFVaughn\xFF.$Count\xFF.0"
                            },
                            "3"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFVaughn\xFF.$Count\xFF.1"
                            },
                            " "
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFVaughn\xFF.$Amount\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFVaughn\xFF.$Amount\xFF.0"
                            },
                            "$1634.36"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFVaughn\xFF.$Amount\xFF.1"
                            },
                            " "
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFVaughn\xFF.$Avg Amount\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFVaughn\xFF.$Avg Amount\xFF.0"
                            },
                            "$544.79"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFVaughn\xFF.$Avg Amount\xFF.1"
                            },
                            " "
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "tr",
                        {
                          class: "reactPivot-level-0",
                          "data-reactid":
                            ".0.4.0.4.0.1.$First Name\xFFAnnette\xFF"
                        },
                        _react2.default.createElement(
                          "td",
                          {
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFAnnette\xFF.$First Name\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFAnnette\xFF.$First Name\xFF.0"
                            },
                            "Annette"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFAnnette\xFF.$First Name\xFF.1"
                            },
                            " "
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              class: "reactPivot-solo",
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFAnnette\xFF.$First Name\xFF.2"
                            },
                            _react2.default.createElement(
                              "a",
                              {
                                style: "cursor:pointer;",
                                "data-reactid":
                                  ".0.4.0.4.0.1.$First Name\xFFAnnette\xFF.$First Name\xFF.2.0"
                              },
                              "solo"
                            )
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFAnnette\xFF.$Count\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFAnnette\xFF.$Count\xFF.0"
                            },
                            "3"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFAnnette\xFF.$Count\xFF.1"
                            },
                            " "
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFAnnette\xFF.$Amount\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFAnnette\xFF.$Amount\xFF.0"
                            },
                            "$1903.75"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFAnnette\xFF.$Amount\xFF.1"
                            },
                            " "
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFAnnette\xFF.$Avg Amount\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFAnnette\xFF.$Avg Amount\xFF.0"
                            },
                            "$634.58"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFAnnette\xFF.$Avg Amount\xFF.1"
                            },
                            " "
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "tr",
                        {
                          class: "reactPivot-level-0",
                          "data-reactid":
                            ".0.4.0.4.0.1.$First Name\xFFJuston\xFF"
                        },
                        _react2.default.createElement(
                          "td",
                          {
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFJuston\xFF.$First Name\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFJuston\xFF.$First Name\xFF.0"
                            },
                            "Juston"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFJuston\xFF.$First Name\xFF.1"
                            },
                            " "
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              class: "reactPivot-solo",
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFJuston\xFF.$First Name\xFF.2"
                            },
                            _react2.default.createElement(
                              "a",
                              {
                                style: "cursor:pointer;",
                                "data-reactid":
                                  ".0.4.0.4.0.1.$First Name\xFFJuston\xFF.$First Name\xFF.2.0"
                              },
                              "solo"
                            )
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFJuston\xFF.$Count\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFJuston\xFF.$Count\xFF.0"
                            },
                            "6"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFJuston\xFF.$Count\xFF.1"
                            },
                            " "
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFJuston\xFF.$Amount\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFJuston\xFF.$Amount\xFF.0"
                            },
                            "$3045.16"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFJuston\xFF.$Amount\xFF.1"
                            },
                            " "
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFJuston\xFF.$Avg Amount\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFJuston\xFF.$Avg Amount\xFF.0"
                            },
                            "$507.53"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFJuston\xFF.$Avg Amount\xFF.1"
                            },
                            " "
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "tr",
                        {
                          class: "reactPivot-level-0",
                          "data-reactid":
                            ".0.4.0.4.0.1.$First Name\xFFPrice\xFF"
                        },
                        _react2.default.createElement(
                          "td",
                          {
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFPrice\xFF.$First Name\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFPrice\xFF.$First Name\xFF.0"
                            },
                            "Price"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFPrice\xFF.$First Name\xFF.1"
                            },
                            " "
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              class: "reactPivot-solo",
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFPrice\xFF.$First Name\xFF.2"
                            },
                            _react2.default.createElement(
                              "a",
                              {
                                style: "cursor:pointer;",
                                "data-reactid":
                                  ".0.4.0.4.0.1.$First Name\xFFPrice\xFF.$First Name\xFF.2.0"
                              },
                              "solo"
                            )
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFPrice\xFF.$Count\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFPrice\xFF.$Count\xFF.0"
                            },
                            "6"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFPrice\xFF.$Count\xFF.1"
                            },
                            " "
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFPrice\xFF.$Amount\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFPrice\xFF.$Amount\xFF.0"
                            },
                            "$3075.37"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFPrice\xFF.$Amount\xFF.1"
                            },
                            " "
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFPrice\xFF.$Avg Amount\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFPrice\xFF.$Avg Amount\xFF.0"
                            },
                            "$512.56"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFPrice\xFF.$Avg Amount\xFF.1"
                            },
                            " "
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "tr",
                        {
                          class: "reactPivot-level-0",
                          "data-reactid":
                            ".0.4.0.4.0.1.$First Name\xFFSkylar\xFF"
                        },
                        _react2.default.createElement(
                          "td",
                          {
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFSkylar\xFF.$First Name\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFSkylar\xFF.$First Name\xFF.0"
                            },
                            "Skylar"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFSkylar\xFF.$First Name\xFF.1"
                            },
                            " "
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              class: "reactPivot-solo",
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFSkylar\xFF.$First Name\xFF.2"
                            },
                            _react2.default.createElement(
                              "a",
                              {
                                style: "cursor:pointer;",
                                "data-reactid":
                                  ".0.4.0.4.0.1.$First Name\xFFSkylar\xFF.$First Name\xFF.2.0"
                              },
                              "solo"
                            )
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFSkylar\xFF.$Count\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFSkylar\xFF.$Count\xFF.0"
                            },
                            "6"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFSkylar\xFF.$Count\xFF.1"
                            },
                            " "
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFSkylar\xFF.$Amount\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFSkylar\xFF.$Amount\xFF.0"
                            },
                            "$3728.87"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFSkylar\xFF.$Amount\xFF.1"
                            },
                            " "
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFSkylar\xFF.$Avg Amount\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFSkylar\xFF.$Avg Amount\xFF.0"
                            },
                            "$621.48"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFSkylar\xFF.$Avg Amount\xFF.1"
                            },
                            " "
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "tr",
                        {
                          class: "reactPivot-level-0",
                          "data-reactid":
                            ".0.4.0.4.0.1.$First Name\xFFPeyton\xFF"
                        },
                        _react2.default.createElement(
                          "td",
                          {
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFPeyton\xFF.$First Name\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFPeyton\xFF.$First Name\xFF.0"
                            },
                            "Peyton"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFPeyton\xFF.$First Name\xFF.1"
                            },
                            " "
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              class: "reactPivot-solo",
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFPeyton\xFF.$First Name\xFF.2"
                            },
                            _react2.default.createElement(
                              "a",
                              {
                                style: "cursor:pointer;",
                                "data-reactid":
                                  ".0.4.0.4.0.1.$First Name\xFFPeyton\xFF.$First Name\xFF.2.0"
                              },
                              "solo"
                            )
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFPeyton\xFF.$Count\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFPeyton\xFF.$Count\xFF.0"
                            },
                            "9"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFPeyton\xFF.$Count\xFF.1"
                            },
                            " "
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFPeyton\xFF.$Amount\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFPeyton\xFF.$Amount\xFF.0"
                            },
                            "$5075.07"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFPeyton\xFF.$Amount\xFF.1"
                            },
                            " "
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFPeyton\xFF.$Avg Amount\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFPeyton\xFF.$Avg Amount\xFF.0"
                            },
                            "$563.90"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFPeyton\xFF.$Avg Amount\xFF.1"
                            },
                            " "
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "tr",
                        {
                          class: "reactPivot-level-0",
                          "data-reactid":
                            ".0.4.0.4.0.1.$First Name\xFFFrancisco\xFF"
                        },
                        _react2.default.createElement(
                          "td",
                          {
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFFrancisco\xFF.$First Name\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFFrancisco\xFF.$First Name\xFF.0"
                            },
                            "Francisco"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFFrancisco\xFF.$First Name\xFF.1"
                            },
                            " "
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              class: "reactPivot-solo",
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFFrancisco\xFF.$First Name\xFF.2"
                            },
                            _react2.default.createElement(
                              "a",
                              {
                                style: "cursor:pointer;",
                                "data-reactid":
                                  ".0.4.0.4.0.1.$First Name\xFFFrancisco\xFF.$First Name\xFF.2.0"
                              },
                              "solo"
                            )
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFFrancisco\xFF.$Count\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFFrancisco\xFF.$Count\xFF.0"
                            },
                            "12"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFFrancisco\xFF.$Count\xFF.1"
                            },
                            " "
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFFrancisco\xFF.$Amount\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFFrancisco\xFF.$Amount\xFF.0"
                            },
                            "$5932.94"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFFrancisco\xFF.$Amount\xFF.1"
                            },
                            " "
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFFrancisco\xFF.$Avg Amount\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFFrancisco\xFF.$Avg Amount\xFF.0"
                            },
                            "$494.41"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFFrancisco\xFF.$Avg Amount\xFF.1"
                            },
                            " "
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "tr",
                        {
                          class: "reactPivot-level-0",
                          "data-reactid": ".0.4.0.4.0.1.$First Name\xFFJose\xFF"
                        },
                        _react2.default.createElement(
                          "td",
                          {
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFJose\xFF.$First Name\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFJose\xFF.$First Name\xFF.0"
                            },
                            "Jose"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFJose\xFF.$First Name\xFF.1"
                            },
                            " "
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              class: "reactPivot-solo",
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFJose\xFF.$First Name\xFF.2"
                            },
                            _react2.default.createElement(
                              "a",
                              {
                                style: "cursor:pointer;",
                                "data-reactid":
                                  ".0.4.0.4.0.1.$First Name\xFFJose\xFF.$First Name\xFF.2.0"
                              },
                              "solo"
                            )
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFJose\xFF.$Count\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFJose\xFF.$Count\xFF.0"
                            },
                            "15"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFJose\xFF.$Count\xFF.1"
                            },
                            " "
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFJose\xFF.$Amount\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFJose\xFF.$Amount\xFF.0"
                            },
                            "$7658.90"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFJose\xFF.$Amount\xFF.1"
                            },
                            " "
                          )
                        ),
                        _react2.default.createElement(
                          "td",
                          {
                            class: "alignRight",
                            "data-reactid":
                              ".0.4.0.4.0.1.$First Name\xFFJose\xFF.$Avg Amount\xFF"
                          },
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFJose\xFF.$Avg Amount\xFF.0"
                            },
                            "$510.59"
                          ),
                          _react2.default.createElement(
                            "span",
                            {
                              "data-reactid":
                                ".0.4.0.4.0.1.$First Name\xFFJose\xFF.$Avg Amount\xFF.1"
                            },
                            " "
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement("span", {
                    "data-reactid": ".0.4.0.4.1"
                  })
                )
              );
            }
          }
        ]);

        return ReactGrid;
      })(_react2.default.Component);

      exports.default = ReactGrid;

      /***/
    }
    /******/
  ]
);
