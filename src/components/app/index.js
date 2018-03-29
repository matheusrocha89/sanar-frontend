import React, { Component } from 'react';

import { Header, DataTable, SubHeader } from '../';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SubHeader />
        <DataTable />
      </div>
    );
  }
}

export default App;

