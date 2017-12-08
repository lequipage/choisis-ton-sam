import React from 'react';
import avatarSrc from 'images/avatar_1.png';
import './BoxList.scss';
import PropTypes from 'prop-types';

// import Header from './Header';
// import Register from '../../components/Register';
// import Login from '../../components/Login';
// import './Box.scss';

const BoxList = props => (
  <div className="boxList">
    <img src={avatarSrc} />
    <h2>Soirée 67</h2>
    <ul>
      <li>Role : </li>
      <li>Date</li>
      <li>Adresse</li>
    </ul>
    <div className="buttonContainer">
      <button className={props.color}>En détails</button>
    </div>
  </div>
);

export default BoxList;
