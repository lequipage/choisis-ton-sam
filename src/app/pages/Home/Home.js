import React from 'react';

import Header from './Header';
import Register from '../../components/Register';
import Login from '../../components/Login';
// import './Home.scss';

const Home = () => (
  <div id="home" className="home">
    <Header />
    <Register />
    <Login />
  </div>
);

export default Home;
