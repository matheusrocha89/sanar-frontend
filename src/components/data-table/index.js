import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
} from 'react-bootstrap';


class DataTable extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    data: [],
  };

  renderRow = (item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.profissao}</td>
      <td>{item.instituto}</td>
    </tr>
  );

  renderRows = () => this.props.data.map(this.renderRow);

  render() {
    const rows = this.renderRows();

    return (
      <Table stripped="true" bordered condensed hover responsive>
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
