import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import './Actions.scss';
import Header from './Header';
import Box from '../../components/Box';
import Create from '../Create';
import Past from '../Past';
// import './Home.scss';

const Actions = () => (
  <Router>
    <div className="actions">
      <Header />
      <div className="actions-list">
          <Link to="/create" className="box">
            <Box type="create" color="green" description="Créer ta soirée et invite tout tes amis" />
          </Link>
          <Link to="/current" className="box">
            <Box type="current" color="red" description="Tiens toi informé de la soirée en cours, de qui est le sam, ou se trouve l'endroit" />
          </Link>
          <Link to="/past" className="box">
            <Box type="past" color="blue" description="Si jamais tu as oublier qui était le sam à la derniere soirée, et qui était le souyon" />
          </Link>
          <Route path="/create" component={Create} />
          <Route path="/past" component={Past} />
      </div>
    </div>
  </Router>
);

export default Actions;
