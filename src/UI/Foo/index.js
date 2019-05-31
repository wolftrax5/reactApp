import React from 'react';
import PropTypes from 'prop-types';

import './Foo.scss';

const Foo = ({ text }) => (
  <div className='Foo'>
    <p>I am Foo! Pleasure to meet you. {text}</p>
  </div>
);
Foo.propTypes = {
  text: PropTypes.string,
};
export default Foo;
