import {
  NavBar,
  NavItem,
  Section,
  Card,
  Button,
  Display1,
  GlobalStyle
} from './lib';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar>
        <NavItem to={'/'}>Home</NavItem>
        <NavItem to={'/blog'}>Blog</NavItem>
      </NavBar>

      <Section>
        <Card>
          <Display1>Hello World!</Display1>
          <Button text={'Click Me!'}/>
        </Card>
      </Section>
    </Router>
  );
}

export default App;
