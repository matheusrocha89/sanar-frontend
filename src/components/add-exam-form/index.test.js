import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import uuid from 'uuid/v1';

import AddExamForm from './';


jest.mock('uuid/v1', () => jest.fn(() => '1234567'));


describe('AddExamForm', () => {
  it('renders correctly', () => {
    const handleClose = jest.fn();
    const addNewExam = jest.fn();
    const tree = renderer
      .create(<AddExamForm addNewExam={addNewExam} handleClose={handleClose} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with errorMessage', () => {
    const handleClose = jest.fn();
    const addNewExam = jest.fn();
    const comp = shallow(<AddExamForm addNewExam={addNewExam} handleClose={handleClose} />);
    comp.setState({ errorMessage: 'Text' });
    expect(comp.find('.AddExamForm-error-message')).toHaveLength(1);
    expect(comp.find('.AddExamForm-error-message p').text()).toEqual('Text');
  });

  it('test error message when form not valid', () => {
    const handleClose = jest.fn();
    const addNewExam = jest.fn();
    const comp = shallow(<AddExamForm addNewExam={addNewExam} handleClose={handleClose} />);
    comp.instance().validateForm();
    expect(comp.state().errorMessage).toEqual('*Campo profissão é obrigatório');
  });

  it('calls addNewExam and handleClose when form is valid', () => {
    const handleClose = jest.fn();
    const addNewExam = jest.fn();
    const event = { preventDefault: jest.fn() };
    const expectedId = '12345';

    const comp = shallow(<AddExamForm addNewExam={addNewExam} handleClose={handleClose} />);
    comp.setState({
      profession: 'abc',
      institution: 'abc',
    });
    comp.instance().onSubmit(event);

    expect(event.preventDefault).toHaveBeenCalledTimes(1);
    expect(handleClose).toHaveBeenCalledTimes(1);
    expect(addNewExam).toHaveBeenCalledWith({
      id: expectedId,
      profissao: 'abc',
      instituto: 'abc',
    });
  });
});
