import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

import { AddExamForm } from '../';


class AddExamFormModal extends Component {
  static propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func.isRequired,
    addNewExam: PropTypes.func.isRequired,
  };

  static defaultProps = {
    show: false,
  };

  render() {
    const { show, handleClose, addNewExam } = this.props;
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Prova</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AddExamForm addNewExam={addNewExam} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    );
  }
}


export default AddExamFormModal;
