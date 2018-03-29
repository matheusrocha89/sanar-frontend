import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import { AddExamFormModal } from '../';
import './styles.css';


class SubHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleClose = () => this.setState({ showModal: false });
  handleShow = () => this.setState({ showModal: true });

  render() {
    const { addNewExam } = this.props;

    return (
      <div className="SubHeader clearfix">
        <div className="SubHeader-title-wrapper">
          <h4>Provas</h4>
        </div>
        <div className="SubHeader-add-button-wrapper">
          <Button bsStyle="success" onClick={this.handleShow}>Novo</Button>
        </div>
        <AddExamFormModal
          show={this.state.showModal}
          addNewExam={addNewExam}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}


export default SubHeader;
