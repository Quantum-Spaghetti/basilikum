import {GlobalStyle, NavBar, NavItem} from './lib';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <NavBar>
        <NavItem to={'/'}>Home</NavItem>
        <NavItem to={'/blog'}>Blog</NavItem>
      </NavBar>

    </Router>
  );
}

export default App;
