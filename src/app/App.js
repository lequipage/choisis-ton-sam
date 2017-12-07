import React from 'react';
import ReactDOM from 'react-dom';

import './App.scss';
import Home from './pages/Home/Home';

const App = () => (
  <div className="packit">
    <Home />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
