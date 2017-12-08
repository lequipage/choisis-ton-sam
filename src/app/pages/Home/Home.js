import React from 'react';

import Modal from 'react-modal';
import Header from './Header';
import Register from '../../components/Register';
import Login from '../../components/Login';

import party from 'images/creer_ta_soiree.png';
import invite from 'images/invite_tes_amis.png';
import sam from 'images/choissiez_votre_sam.png';
import './Home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connectOpen: false,
      registerOpen: false,
    };
  }

  openConnect = () => {
    this.setState({ connectOpen: true })
  }
  openRegister = () => {
    this.setState({ registerOpen: true })
  }
  closeConnect = () => {
    this.setState({ connectOpen: false })
  }
  closeRegister = () => {
    this.setState({ registerOpen: false })
  }

  render() {
    const { connectOpen, registerOpen } = this.state;
    const { handle } = this.props;
    return (
      <div id="home" className="home">
        <Header>
          <button className="home__connect" onClick={this.openConnect}>Se connecter</button>
          <button className="home__register" onClick={this.openRegister}>S'inscrire</button>
          <Modal isOpen={connectOpen} onRequestClose={this.closeConnect}>
            <Login handle={handle}/>
          </Modal>
          <Modal isOpen={registerOpen} onRequestClose={this.closeRegister}>
            <Register handle={handle}/>
          </Modal>
        </Header>
        <div className="home__concept">
          <div>
            <h2 className="concept__title">Le concept</h2>
            <p className="concept__paragraph">Le concept est simple. Il suffit de s'inscrire et de suivre la procédure</p>
          </div>
          <div className="home__list">
            <div>
              <img src={party} />
              <h3>Créer ta soirée</h3>
              <p>Choisis la date et le lieu</p>
            </div>
            <div>
              <img src={invite} />
              <h3>Créer ta soirée</h3>
              <p>Choisis la date et le lieu</p>
            </div>
            <div>
              <img src={sam} />
              <h3>Créer ta soirée</h3>
              <p>Choisis la date et le lieu</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
