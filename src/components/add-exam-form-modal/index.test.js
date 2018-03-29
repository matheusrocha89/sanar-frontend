import React from 'react';
import renderer from 'react-test-renderer';

import AddExamFormModal from './';


describe('AddExamFormModal', () => {
  it('renders correctly', () => {
    const show = false;
    const handleClose = jest.fn();
    const addNewExam = jest.fn();
    const tree = renderer
      .create(<AddExamFormModal show={show} handleClose={handleClose} addNewExam={addNewExam} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
