import styled from 'styled-components';
import defaultTheme from '../defaultTheme';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary};
`;

Nav.defaultProps = defaultTheme;

const Ul = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 32px;
  
  list-style: none;
  
  width: 100%;
  max-width: 900px;
`;

const NavBar = ({children}) => {
  return (
    <Nav>
      <Ul>
        {children}
      </Ul>
    </Nav>
  )
}

export default NavBar;
