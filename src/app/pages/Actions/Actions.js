import React from 'react';
import './Actions.scss';
import Header from './Header';
import Box from '../../components/Box';
import Create from '../Create';
// import './Home.scss';

const Actions = () => (
  <div id="home" className="home">
    <Header />
    <Box type="create" />
    <Box type="current" />
    <Box type="past" />
    <Create />
  </div>
);

export default Actions;
