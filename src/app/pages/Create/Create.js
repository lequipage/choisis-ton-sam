import React from 'react';
import formBack from 'images/bg_soiree_passe_.png';
// import Header from './Header';
import Map from '../../components/Map';
import callApi from '../../callApi';
import './Create.scss';

class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      place: '',
      userList: [],
      currentEmail: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  listUser = () => {
    const { userList } = this.state;
    return userList.map(user => <li>{user}</li>);
  }

  addParticpant = () => {
    const { userList, currentEmail } = this.state;
    const newUserList = userList;
    newUserList.push(currentEmail);
    this.setState({
      userList: newUserList,
    })
  }

  handleChange(event) {
   this.setState({
     currentEmail: event.target.value
   });
  }

  handleSubmit(event) {
    const { name, date, place, userList } = this.state;
    const data = {
      name,
      date,
      place,
      userList,
    };
    event.preventDefault();
    callApi.submitEvent(data);
  }

  render() {
    const { currentEmail } = this.state;
    return (
      <div className="formWrap" style={{ backgroundImage: `url(${formBack})` }}>>
        <div className="create">
        <h1>Créer ta soirée</h1>
        <p>Créer ta soirée et invite tes amis pour pouvoir trouver un SAM</p>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">
              Name :
              <input
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label htmlFor="date">
              Date :
              <input
                name="date"
                type="date"
                value={this.state.date}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label htmlFor="place">
              Lieu :
              <input
                name="place"
                type="text"
                value={this.state.place}
                onChange={this.handleInputChange}
              />
            </label>
            <h2>Invitez des amis</h2>
            <div className="flexInput">
              <label htmlFor="email">
                <input type="email" name="email" value={currentEmail} onChange={this.handleChange}/>
              </label>
              <button className="buttonAdd" onClick={this.addParticpant}>+</button>
            </div>


            <ul>
              {this.listUser()}
            </ul>
            <input className="createSoiree" type="submit" value="Je crée ma soirée"/>
          </form>
        </div>
      </div>

    );
  }
}


export default Create;
