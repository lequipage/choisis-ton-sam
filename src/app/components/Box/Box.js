import React from 'react';
import currentImg from 'images/encours.png';
import pastImg from 'images/soireepasse.png';
import plusImg from 'images/plus.png';
import './Box.scss';
import PropTypes from 'prop-types';

// import Header from './Header';
// import Register from '../../components/Register';
// import Login from '../../components/Login';
// import './Box.scss';
const returnBox = (type) => {
  switch(type){
    case "current":
    return "Voir les soirées en cours";
    case "past":
    return "Voir les soirées passées";
    case "create":
    return "Créé votre soirée";
  }
}
const returnImgSrc = (type) => {
  switch(type){
    case "current":
    return currentImg;
    case "past":
    return pastImg;
    case "create":
    return plusImg;
  }
}
const Box = props => (
  <div>
    <img src={returnImgSrc(props.type)} />
    <h2>{returnBox(props.type)}</h2>
    <p>{props.description}</p>
    <div className="buttonContainer">
      <button className={props.color}>-></button>
    </div>
  </div>
);

Box.propTypes = {
  type: PropTypes.string.isRequired,
};
export default Box;
