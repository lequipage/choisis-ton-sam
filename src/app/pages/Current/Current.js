import React from 'react';
// import './Current.scss';
import Background from 'images/bg_la_soiree_passe_.png';
import avatar1 from 'images/avatar_1.png';
import avatar2 from 'images/avatar_2.png';
import avatar3 from 'images/avatar_3.png';
import avatar4 from 'images/bg_la_soiree_passe_.png';

const avatarArray = {
  1: avatar1,
  2: avatar2,
  3: avatar3,
  4: avatar4
}

class Current extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: [],
      currentEmail: ''
    };
  }
  render() {
    const { currentEmail } = this.state;
    return (
      <div className="Current">
          <div className="eventList__chooseSAM">
              <button>
                Choisir le Sam aléatoirement
              </button>
            </div>

            <div
              className="eventList__apis">
              <div
                className="eventList__apis--meteo">
                <h3>Météo</h3>

              </div>
              <div
                className="eventList__apis--meteo">
                <h3>Map</h3>

              </div>
            </div>
          </div>
    );
  }
}
export default Current;
