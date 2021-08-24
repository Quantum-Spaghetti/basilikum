import styled from 'styled-components';
import React from 'react';

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, ${props => props.dimensions.width});
  grid-auto-rows: ${props => props.dimensions.height};
  gap: ${props => props.gap};
  width: 100%;
`;

export default function Grid({
                               className,
                               children,
                               columns = '3',
                               dimensions = {
                                 width: '300px',
                                 height: '300px'
                               },
                               gap
                             }) {
  return (
    <Section className={className} dimensions={dimensions} columns={columns}
             gap={gap}>{children}</Section>
  );
}
