import styled from 'styled-components';
import defaultTheme from '../defaultTheme';
import {Link as A} from 'react-router-dom';

const Li = styled.li`
  padding: 8px;
`;

const Link = styled(A)`
  text-decoration: none;
  font-family: ${props => props.theme.font};
  font-size: ${props => props.theme.sizes.sm};
  color: ${props => props.theme.colors.secondary};
  
  transition: color 200ms ease-in;
  
  ${Li}:hover & {
    color: ${props => props.theme.colors.tertiary};
  }
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
