import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import App from '../App';

const About = () => <h1>ABOUT</h1>;
const Links = () => (
  <nav>
    <Link to="/">Main</Link>
    <br />
    <Link to="/about">About</Link>
  </nav>
);
const RouterApp = () => (
  <Router>
    <div>
      <Links />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route render={() => <h1>Page Not Found</h1>} />
      </Switch>
    </div>
  </Router>
);
export default RouterApp;
