'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./PicrContentEditable.css');

var style = {
  'container': 'PicrContentEditable__container--32j',
  'field': 'PicrContentEditable__field--3Td'
};

var PicrContentEditable = function (_Component) {
  _inherits(PicrContentEditable, _Component);

  function PicrContentEditable() {
    _classCallCheck(this, PicrContentEditable);

    return _possibleConstructorReturn(this, (PicrContentEditable.__proto__ || Object.getPrototypeOf(PicrContentEditable)).apply(this, arguments));
  }

  _createClass(PicrContentEditable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          fieldClassName = _props.fieldClassName,
          value = _props.value,
          onChange = _props.onChange,
          type = _props.type,
          customElement = _props.customElement,
          restProps = _objectWithoutProperties(_props, ['className', 'fieldClassName', 'value', 'onChange', 'type', 'customElement']);

      var Field = customElement || type;
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(className, style.container) },
        _react2.default.createElement(Field, _extends({}, restProps, {
          ref: function ref(node) {
            _this2.input = node;
          },
          className: (0, _classnames2.default)(fieldClassName, style.field),
          onChange: onChange,
          value: value || ''
        })),
        _react2.default.createElement(
          'span',
          { className: style.text },
          value,
          '\xA0'
        )
      );
    }
  }]);

  return PicrContentEditable;
}(_react.Component);

PicrContentEditable.propTypes = {
  className: _propTypes2.default.string,
  fieldClassName: _propTypes2.default.string,
  customElement: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  type: _propTypes2.default.oneOf(['input', 'textarea']),
  onChange: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.string.isRequired
};
PicrContentEditable.defaultProps = {
  className: '',
  customElement: null,
  fieldClassName: '',
  type: 'input'
};
exports.default = PicrContentEditable;