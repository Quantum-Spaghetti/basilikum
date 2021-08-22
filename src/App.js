import {GlobalStyle} from './lib/Utils';
import {NavBar, NavItem} from './lib/Navigation';
import {Card, Button} from './lib/Components';
import {Section} from './lib/Layout';
import {Display1} from './lib/Typography';
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
