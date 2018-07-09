import React from 'react';
import { DropTarget } from 'react-dnd';
import { shallow } from 'enzyme';
import Note from '../../app/components/Note';


describe('Note Component', () => {
  let wrapper, id;

  beforeEach(() => {
    wrapper = shallow(<Note />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render the form correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should return id object when @DragSource is called', () => {
    
  });
});
