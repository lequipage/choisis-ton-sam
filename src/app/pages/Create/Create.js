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
      address: '',
      city: '',
      cp: '',
      userList: [],
      currentEmail: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
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
      <div className="formWrap">
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
            <label htmlFor="address">
              Adresse :
              <input
                name="address"
                type="text"
                value={this.state.address}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label htmlFor="city">
              City :
              <input
                name="city"
                type="text"
                value={this.state.city}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label htmlFor="cp">
              Code Postal :
              <input
                name="cp"
                type="text"
                value={this.state.cp}
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
