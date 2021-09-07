import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import defaultTheme from "../defaultTheme";

const StyledButton = styled(Link)`
  border-radius: 0;
  border: none;
  padding: 16px 64px;
  cursor: pointer;
  font-family: ${props => props.theme.font};
  font-size: ${props => props.theme.sizes.xs};
  color: ${props => props.theme.colors.quaternary};
  background-color: ${props => props.theme.colors.primary};
  text-decoration: none;
`;

StyledButton.defaultProps = defaultTheme;

export default function LinkButton({
                                     className,
                                     to,
                                     text
                                   }) {
  return (
    <StyledButton className={className} to={to}>{text}</StyledButton>
  );
}
