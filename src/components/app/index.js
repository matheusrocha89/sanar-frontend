import React, { Component } from 'react';

import { Header, DataTable, SubHeader, Footer } from '../';
import Data from '../../data';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
    };
  }

  addNewExam = (exam) => this.setState({
    data: [...this.state.data, exam],
  });

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-container container">
          <SubHeader addNewExam={this.addNewExam} />
          <DataTable data={this.state.data} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

