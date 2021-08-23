import styled from 'styled-components';
import defaultTheme from "../defaultTheme";
import React from 'react';

const StyledButton = styled.button`
  border-radius: 0;
  border: none;
  padding: 16px 64px;
  cursor: pointer;
  font-family: ${props => props.theme.font};
  font-size: ${props => props.theme.sizes.xs};
  background-color: ${props => props.theme.colors.primary};
`;

StyledButton.defaultProps = defaultTheme;

export default function Button({
                                 onClick,
                                 text
                               }) {
  return (
    <StyledButton onClick={onClick}>{text}</StyledButton>
  );
}
