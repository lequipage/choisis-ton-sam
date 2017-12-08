import React from 'react';

import homeBack from 'images/00_bg.png';
// import './Home.scss';

const Header = props => (
  <header className="home__header" style={{ backgroundImage: `url(${homeBack})` }}>
    <div className="home__block">
      <h1>Choisis ton SAM</h1>
      {props.children}
    </div>
  </header>
);

export default Header;
