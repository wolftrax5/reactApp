import React from 'react';
import PropTypes from 'prop-types';

const Foo = ({ text }) => (
  <div>
    <p>I am Foo! Pleasure to meet you. {text}</p>
  </div>
);
Foo.propTypes = {
  text: PropTypes.string,
};
export default Foo;
