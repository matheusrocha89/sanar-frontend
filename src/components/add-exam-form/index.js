import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
} from 'react-bootstrap';

import './styles.css';


class AddExamForm extends Component {
  static propTypes = {
    addNewExam: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      profession: '',
      institution: '',
      exam: '',
      valid: false,
      errorMessage: '',
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      const exam = {
        id: uuid().substring(1, 6),
        profissao: this.state.profession,
        instituto: this.state.institution,
      };
      this.props.addNewExam(exam);
      this.props.handleClose();
    }

  }

  validateForm = () => {
    if (this.state.profession.length === 0) {
      this.setState({ errorMessage: '*Campo profissão é obrigatório' });
      return false;
    }

    this.setState({ errorMessage: '' });
    return true;
  }

  handleChangeProfession = (event) => this.setState({ profession: event.target.value });
  handleChangeIntitution = (event) => this.setState({ institution: event.target.value });
  handleChangeExam = (event) => this.setState({ exam: event.target.value });

  render() {
    return (
      <form>
        {!!this.state.errorMessage && (
          <div className="AddExamForm-error-message">
            <p>{this.state.errorMessage}</p>
          </div>
        )}
        <FormGroup controlId="profession">
          <ControlLabel>Profissão*: </ControlLabel>
          <FormControl
            type="text"
            value={this.state.profession}
            onChange={this.handleChangeProfession}
            maxLength={70}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Instituto: </ControlLabel>
          <FormControl
            type="text"
            value={this.state.institution}
            onChange={this.handleChangeIntitution}
            maxLength={170}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Prova: </ControlLabel>
          <FormControl
            type="file"
            value={this.state.exam}
            onChange={this.handleChangeExam}
          />
        </FormGroup>

        <div className="AddExamForm-buttons">
          <Button
            onClick={this.onSubmit}
            type="submit"
            bsStyle="success"
          >
            Cadastrar
          </Button>
        </div>
      </form>
    );
  }
}


export default AddExamForm;
