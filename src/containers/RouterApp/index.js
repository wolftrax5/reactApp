import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from '../App';

const About = () => <h1>ABOUT</h1>;
const Links = () => (
  <nav>
    <Link to="/">Main</Link>
    <br/>
    <Link to="/about">About</Link>
  </nav>
);
const RouterApp = () => (
  <Router>
    <Links />
    <Route exact path="/" component={App} />
    <Route path="/about" component={About} />
  </Router>
);
export default RouterApp;
