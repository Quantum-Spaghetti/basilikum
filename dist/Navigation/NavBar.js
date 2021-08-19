var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
import defaultTheme from '../defaultTheme';
import React from 'react';
const Nav = styled.nav(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  background-color: ", ";\n"])), props => props.theme.colors.primary);
Nav.defaultProps = defaultTheme;
const Ul = styled.ul(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  gap: 32px;\n  \n  list-style: none;\n  \n  width: 100%;\n  max-width: 900px;\n"])));

const NavBar = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(Nav, null, /*#__PURE__*/React.createElement(Ul, null, children));
};

export default NavBar;