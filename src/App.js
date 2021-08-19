
import {NavBar, NavItem} from './lib';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
        <NavBar><NavItem to={'/'}>Home</NavItem></NavBar>
    </Router>
  );
}

export default App;
