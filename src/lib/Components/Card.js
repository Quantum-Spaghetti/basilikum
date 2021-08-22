import styled from 'styled-components';
import defaultTheme from '../defaultTheme';

const Article = styled.article`
  padding: 4px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 300ms;
  
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

Article.defaultProps = defaultTheme;

export default function Card({children}) {
  return (
    <Article>
      {children}
    </Article>
  );
}
