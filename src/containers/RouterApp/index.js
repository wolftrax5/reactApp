import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './RouterApp.scss';
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
    <div className="core-container ">
      <header id="core-header">
        <h1>My APP</h1>
      </header>
      <aside id="core-aside">
        <Links />
      </aside>
      <section id="core-section">
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route render={() => <h1>Page Not Found</h1>} />
        </Switch>
      </section>
      <footer id="core-footer">Footer</footer>
    </div>
  </Router>
);
export default RouterApp;
