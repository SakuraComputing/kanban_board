import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Editable from '../../app/components/Editable';


describe('Editable Component', () => {
  let wrapper, editing, value, onValueClick, onEdit, onDelete, defaultValue;


  beforeEach(() => {

    editing = jest.fn();
    value = jest.fn();
    onValueClick =  jest.fn();
    onEdit = jest.fn();
    onDelete = jest.fn();
    defaultValue = jest.fn();

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
  it('should return input on renderEdit', () => {
    const anonymous = () => ({ baz: foo2, boz: 1 });
    const returnInput = wrapper.instance().renderEdit();
    const test = <input
      autoFocus={true}
      defaultValue={defaultValue}
      onBlur={anonymous}
      onKeyPress={anonymous}
      type="text"
    />;
    expect(toJSON(returnInput)).toEqual(toJSON(test));
  });
  it('should display delete button when renderDelete is called', () => {
    const returnDelButton = wrapper.instance().renderDelete();
    const test = <button className="delete" onClick={onDelete}>x</button>;
    expect(returnDelButton).toEqual(test);
  })
});
