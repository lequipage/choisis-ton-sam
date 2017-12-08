import React from 'react';
import ReactDOM from 'react-dom';

import './App.scss';
import Home from './pages/Home/Home';
import Actions from './pages/Actions/Actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: true,
    };
    this.handle = this.handle.bind(this);

  }

  handle = (connected) => {
    this.setState({
      isConnected: connected,
    })
  }

  returnRoute = () => {
    const { isConnected } = this.state;
    if(isConnected)
      return <Actions />
    return <Home handle={(connected) => { this.handle(connected)}}/>
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
