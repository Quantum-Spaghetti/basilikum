var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
import defaultTheme from '../defaultTheme';
import { Link as A } from 'react-router-dom';
import React from 'react';
const Li = styled.li(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 8px 0;\n"])));
const Link = styled(A)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  text-decoration: none;\n  font-family: ", ";\n  color: ", ";\n"])), props => props.theme.font, props => props.theme.colors.secondary);
Link.defaultProps = defaultTheme;

const NavItem = _ref => {
  let {
    to,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(Li, null, /*#__PURE__*/React.createElement(Link, {
    to: to
  }, children));
};

export default NavItem;