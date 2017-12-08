import React from 'react';
import avatarSrc from 'images/avatar_1.png';

// import Header from './Header';
import BoxList from '../../components/BoxList';
import callApi from '../../callApi';
import './Past.scss';

class Past extends React.Component {
  render() {
    return (
      <div className="pastList">
      <h1>Tes soirées passées</h1>
      <p>Retrouve ici toutes les soirée passées depuis la création de ton compte</p>
        <BoxList className="boxList" color="green"/>
      </div>
    );
  }
}


export default Past;
