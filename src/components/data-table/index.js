import React, { Component } from 'react';
import {
  Table,
} from 'react-bootstrap';

import Data from '../../data';


class DataTable extends Component {
  renderRow = (item) => (
    <tr>
      <td>{item.id}</td>
      <td>{item.profissao}</td>
      <td>{item.instituto}</td>
    </tr>
  );

  renderRows = () => Data.map(this.renderRow);

  render() {
    const rows = this.renderRows();

    return (
      <Table stripped bordered condensed hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Profissão</th>
            <th>Instituto</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    );
  }
}


export default DataTable;
