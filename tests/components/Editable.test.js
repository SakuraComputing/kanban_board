import React from 'react';
import { shallow } from 'enzyme';

import Editable from '../../app/components/Editable';


describe('Editable Component', () => {
  let wrapper, editing, value, onValueClick, onEdit, onDelete;


  beforeEach(() => {

    editing = jest.fn();
    value = jest.fn();
    onValueClick =  jest.fn();
    onEdit = jest.fn();
    onDelete = jest.fn();


    wrapper = shallow(<Editable
      editing={editing}
      value={value}
      onValueClick={onValueClick}
      onEdit={onEdit}
      onDelete={onDelete}

    />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render the form correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
