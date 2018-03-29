import React from 'react';
import renderer from 'react-test-renderer';

import DataTable from './';


describe('DataTable', () => {
  it('renders correctly', () => {
    const data = [
      { id: 1, profissao: 'test', instituto: 'test' },
      { id: 2, 'profissao': 'test', instituto: 'test' },
    ];
    const tree = renderer.create(<DataTable data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
