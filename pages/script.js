"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExampleApp = (function (_React$Component) {
  _inherits(ExampleApp, _React$Component);

  function ExampleApp(props) {
    _classCallCheck(this, ExampleApp);

    _get(Object.getPrototypeOf(ExampleApp.prototype), "constructor", this).call(this, props);

    this.state = {
      value: 706,
      value4: {
        min: 0.51,
        max: 2
      },
      value5: {
        min: 5,
        max: 50
      },
      value3: 10,
      value2: {
        min: 0.51,
        max: 2
      }
    };
  }

  _createClass(ExampleApp, [{
    key: "render",
    value: function render() {
      var _this = this;

      return React.createElement(
        "form",
        { className: "form" },
        React.createElement(InputRange, {
          maxValue: 1000,
          minValue: 0,
          value: this.state.value,
          onChange: function (value) {
            return _this.setState({ value: value });
          },
          onChangeComplete: function (value) {
            return console.log(value);
          } }),
        React.createElement(InputRange, {
          maxValue: 3,
          minValue: 0,
          formatLabel: function (value) {
            return value + " %";
          },
          value: this.state.value4,
          onChange: function (value) {
            return _this.setState({ value4: value });
          },
          onChangeComplete: function (value) {
            return console.log(value);
          } }),
        React.createElement(InputRange, {
          maxValue: 140,
          minValue: 0,
          formatLabel: function (value) {
            return value + " руб";
          },
          value: this.state.value5,
          onChange: function (value) {
            return _this.setState({ value5: value });
          },
          onChangeComplete: function (value) {
            return console.log(value);
          } }),
       
      );
    }
  }]);

  return ExampleApp;
})(React.Component);

ReactDOM.render(React.createElement(ExampleApp, null), document.getElementById('app'));