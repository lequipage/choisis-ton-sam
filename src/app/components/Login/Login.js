import React from 'react';

// import './Register.scss';
// import Google from './Google';
// import Facebook from './Facebook';

const Register = () => (
  <div className="form-login">
    <h3>Se connecter</h3>
    <form>
      <input type="email" name="email" />
      <input type="password" name="password" />
    </form>
    {/* <Google />
    <Facebook /> */}
  </div>
);

export default Register;
