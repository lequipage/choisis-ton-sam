import React from 'react';
import './Actions.scss';
import Header from './Header';
import Box from '../../components/Box';
import Create from '../Create';
// import './Home.scss';

const Actions = () => (
  <div className="actions">
    <Header />
    <div className="actions-list">
      <Box type="create" color="green" description="Créer ta soirée et invite tout tes amis"/>
      <Box type="current" color="red" description="Tiens toi informé de la soirée en cours, de qui est le sam, ou se trouve l'endroit" />
      <Box type="past"  color="blue" description="Si jamais tu as oublier qui était le sam à la derniere soirée, et qui était le souyon"/>
    </div>
  </div>
);

export default Actions;
