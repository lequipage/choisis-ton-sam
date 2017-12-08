import React from 'react';

// import Header from './Header';
import Map from '../../components/Map';
import callApi from '../../callApi';
// import './Home.scss';

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
      <div className="create">
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
          <label htmlFor="email">
            <input type="email" name="email" value={currentEmail} onChange={this.handleChange}/>
          </label>
          <button onClick={this.addParticpant}>Ajouter un participant</button>
          <ul>
            {this.listUser()}
          </ul>
          <input type="submit" />
        </form>
      </div>
    );
  }
}


export default Create;
