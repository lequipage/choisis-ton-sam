import React from 'react';
import './Current.scss';
import Background from 'images/bg_la_soiree_passe_.png';

const avatarArray = {
  1: 'avatar_1.png',
  2: 'avatar_2.png',
  3: 'avatar_3.png',
  4: 'avatar_4.png'
}

const Current = () => (
  <div classNale="Current">
    <div id="eventList"
    className="eventList"
    style={{backgroundImage: "url(" + Background + ")"}}
    >
      <h1>Soirée nuit de l&#39;info</h1>
      <h2>
      Créé par <b>fk_id_user_owner</b>
      - A lieu le date_start
      - A <u><b>adresse</b></u>
      </h2>
      <div className="container">
        <h3 className="eventList__title">
          Invités
        </h3>
        <ul>
          <li>
            <div
            className="eventList__avatar">
              test
            </div>
            <div
            className="eventList__info">
              <div
              className="eventList__info--name">
                Michel
              </div>
            </div>
            <div
            className="eventList__cta">
              <button>
                Mettre en SAM
              </button>
            </div>
          </li>
        </ul>
      </div>

      <div
      className="eventList__chooseSAM">
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
    <div className="sendInvit">
      <h2>Invitez d&#39;autres amis</h2>
      <p>Si il vous manque Caroline, Michel ou un pigeon pour conduire</p>

      <div
      className="sendInvit__input">
        <input
          type="text"
          name="email"
          />

        <input
          type="hidden"
          name="fk_id_user_owner"
          value="fk_id_user_owner" //@todo
          />

        <input
          type="hidden"
          name="event_name"
          value="event_name" //@todo
          />
      </div>
    </div>
  </div>
);

export default Current;
