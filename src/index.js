import React from 'react';
import ReactDOM from 'react-dom';
import RouterApp from './containers/RouterApp';

console.log(`%c process.env.VERSION ${process.env.VERSION} `, 'color: white; background-color: #1DBF5E;'); // custom
console.log(`%c process.env.PLATFORM ${process.env.PLATFORM} `, 'color: white; background-color: #1DBF5E;'); // custom
console.log(`%c process.env.NODE_ENV ${process.env.NODE_ENV} `, 'color: white; background-color: #1DBF5E;'); // by webpack

ReactDOM.render(<RouterApp />, document.getElementById('app'));
