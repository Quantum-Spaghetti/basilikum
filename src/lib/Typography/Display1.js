import styled from 'styled-components';
import defaultTheme from "../defaultTheme";

const Display = styled.h1`
  font-family: ${props => props.theme.font};
  font-size: ${props => props.theme.sizes.xxl};
  margin: 0 0 16px;
`;

Display.defaultProps = defaultTheme;

export default function Display1({children}) {
  return (
    <Display>{children}</Display>
  );
}
