"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _defaultTheme = _interopRequireDefault(require("../defaultTheme"));

var _reactRouterDom = require("react-router-dom");

var _react = _interopRequireDefault(require("react"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Li = _styledComponents.default.li(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 8px 0;\n"])));

const Link = (0, _styledComponents.default)(_reactRouterDom.Link)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  text-decoration: none;\n  font-family: ", ";\n  color: ", ";\n"])), props => props.theme.font, props => props.theme.colors.secondary);
Link.defaultProps = _defaultTheme.default;

const NavItem = _ref => {
  let {
    to,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(Li, null, /*#__PURE__*/_react.default.createElement(Link, {
    to: to
  }, children));
};

var _default = NavItem;
exports.default = _default;