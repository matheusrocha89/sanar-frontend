import React, { Component } from 'react';

import { Header, DataTable } from '../';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DataTable />
      </div>
    );
  }
}

export default App;

