import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      phone: '',
      driver_licence: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label htmlFor="username">
          Pseudo :
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label htmlFor="email">
          Adresse mail :
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label htmlFor="password">
          Mot de passe :
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label htmlFor="phone">
          Numéro de téléphone :
          <input
            name="phone"
            type="phone"
            value={this.state.phone}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label htmlFor="driver_licence">
          Permis de conduire :
          <input
            name="driver_licence"
            type="checkbox"
            checked={this.state.driver_licence}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

export default Register;
