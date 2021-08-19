import styled from 'styled-components';
import defaultTheme from '../defaultTheme';
import {Link as A} from 'react-router-dom';
import React from 'react';

const Li = styled.li`
  padding: 8px 0;
`;

const Link = styled(A)`
  text-decoration: none;
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.colors.secondary};
`;

Link.defaultProps = defaultTheme;

const NavItem = ({to, children}) => {
  return (
    <Li>
      <Link to={to}>{children}</Link>
    </Li>
  );
};

export default NavItem;
