import React, { Component } from 'react';

import { Header, DataTable, SubHeader, Footer } from '../';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <SubHeader />
          <DataTable />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

