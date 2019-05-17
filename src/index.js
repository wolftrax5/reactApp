import React from 'react';
import ReactDOM from 'react-dom';
import './mystyless.scss';

const App = () => {
  return (
    <div className='app'>
    <img 
   alt="worlftrax-green"
   src="/dist/images/wolftrax-green.jpg" className="app-header" 
/>
      <p>
        We are a most promising species, Mr. Spock, as predators go. Did you know that? I frequently
        have my doubts. I dont. Not any more. And maybe in a thousand years or so, we will be able
        to prove it.
      </p>
      <p>- Captain Kirk</p>
    </div>
  );
};

console.log('process.env.VERSION', process.env.VERSION); // custom
console.log('process.env.PLATFORM', process.env.PLATFORM); // custm
console.log('process.env.NODE_ENV', process.env.NODE_ENV); // by webpack

ReactDOM.render(<App />, document.getElementById('app'));