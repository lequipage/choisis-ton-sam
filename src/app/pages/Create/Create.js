import React from 'react';

// import Header from './Header';
import Map from '../../components/Map';
// import './Home.scss';

class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    const { currentEmail } = this.state;
    return (
      <div className="create">
        <form>
          <input type="text" name="name" />
          <input type="date" name="date" />
          <input type="place" name="place" />
          <Map />
        </form>
        <label htmlFor="email">
          <input type="email" name="email" value={currentEmail} onChange={this.handleChange}/></label>
        <button onClick={this.addParticpant}>Ajouter un participant</button>
        <ul>
          {this.listUser()}
        </ul>
      </div>
    );
  }
}


export default Create;
