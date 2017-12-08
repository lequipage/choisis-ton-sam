import React from 'react';

// import './Register.scss';
// import Google from './Google';
// import Facebook from './Facebook';
import callApi from '../../callApi';

import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  errorMessage = () => {
    const { errorMessage } = this.state;
    if(errorMessage) {
      return <p style={{ color: "red" }}>Identifiants incorrect</p>
    }
    return "";
  }

  handleSubmit(event) {
    const { handle } = this.props;
    const { email, password } = this.state;
    const data = {
      email,
      password,
    };
    event.preventDefault();
    callApi.canLogin(data)
      .then((response) => {
        if (response) { handle(response); }
        else {
          this.setState({
            errorMessage: true,
          });
        }
      });
  }
  render() {
    return (
      <form className="login" onSubmit={this.handleSubmit}>
        <h3 className="login__title">Se connecter</h3>
        <label htmlFor="email">
          Email :
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password :
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Se connecter" />
        {this.errorMessage()}
      </form>
    );
  }
}

export default Login;
