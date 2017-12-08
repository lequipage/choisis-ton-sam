import React from 'react';

import PropTypes from 'prop-types';

// import Header from './Header';
// import Register from '../../components/Register';
// import Login from '../../components/Login';
// import './Box.scss';

const Box = props => (
  <div className="box">
    {props.type}
  </div>
);

Box.propTypes = {
  type: PropTypes.string.isRequired,
};
export default Box;
