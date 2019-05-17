import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'


console.log('process.env.VERSION', process.env.VERSION); // custom
console.log('process.env.PLATFORM', process.env.PLATFORM); // custm
console.log('process.env.NODE_ENV', process.env.NODE_ENV); // by webpack

ReactDOM.render(<App />, document.getElementById('app'));