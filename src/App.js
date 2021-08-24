import {GlobalStyle, Grid, NavBar, NavItem,} from './lib';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <NavBar>
        <NavItem to={'/'}>Home</NavItem>
        <NavItem to={'/blog'}>Blog</NavItem>
      </NavBar>

      <Grid gap={'16px'}>
        <div style={{background: 'red', width: '100%', height: '100%'}}></div>
        <div
          style={{background: 'yellow', width: '100%', height: '100%'}}></div>
        <div style={{background: 'green', width: '100%', height: '100%'}}></div>
        <div style={{background: 'red', width: '100%', height: '100%'}}></div>
        <div
          style={{background: 'yellow', width: '100%', height: '100%'}}></div>
        <div style={{background: 'green', width: '100%', height: '100%'}}></div>
      </Grid>

    </Router>
  );
}

export default App;
