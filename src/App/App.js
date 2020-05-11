import React from 'react';
import './App.scss';

import goatData from '../helpers/data/goatData';

class App extends React.Component {
  componentDidMount() {
    const goats = goatData.getGoats();
    console.error('goats:', goats);
  }

  render() {
    return (
      <div className="App">
        <h2 className="goat-title">Goats</h2>
        <button className="btn btn-info">TEST</button>
      </div>
    );
  }
}

export default App;
