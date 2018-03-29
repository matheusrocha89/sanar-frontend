import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import SubHeader from './';


describe('SubHeader', () => {
  it('renders correctly', () => {
    const addNewExam = jest.fn();
    const tree = renderer.create(<SubHeader addNewExam={addNewExam} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Hide modal', () => {
    const addNewExam = jest.fn();
    const comp = shallow(<SubHeader addNewExam={addNewExam} />);
    comp.instance().handleClose();
    expect(comp.state().showModal).toBeFalsy();
  });

  it('Shows modal', () => {
    const addNewExam = jest.fn();
    const comp = shallow(<SubHeader addNewExam={addNewExam} />);
    comp.instance().handleShow();
    expect(comp.state().showModal).toBeTruthy();
  });
});
