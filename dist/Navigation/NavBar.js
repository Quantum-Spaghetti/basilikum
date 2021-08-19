"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _defaultTheme = _interopRequireDefault(require("../defaultTheme"));

var _react = _interopRequireDefault(require("react"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Nav = _styledComponents.default.nav(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  background-color: ", ";\n"])), props => props.theme.colors.primary);

Nav.defaultProps = _defaultTheme.default;

const Ul = _styledComponents.default.ul(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  gap: 32px;\n  \n  list-style: none;\n  \n  width: 100%;\n  max-width: 900px;\n"])));

const NavBar = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(Nav, null, /*#__PURE__*/_react.default.createElement(Ul, null, children));
};

var _default = NavBar;
exports.default = _default;