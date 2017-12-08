import React from 'react';
import ReactDOM from 'react-dom';

import './App.scss';
import Home from './pages/Home/Home';
import Actions from './pages/Actions/Actions';

class App extends React.Component {
  state = {
    isConnected: false,
  }

  returnRoute = () => {
    const { isConnected } = this.state;
    if(isConnected)
      return <Actions />
    return <Home />
  }

  render() {
    return(
      <div className="packit">
        {this.returnRoute()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
