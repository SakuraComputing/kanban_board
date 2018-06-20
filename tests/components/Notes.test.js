import React from 'react';
import {shallow} from "enzyme/build/index";
import Note from '../../app/components/Note';

describe('Note Component', () => {
    let wrapper, notes, onValueClick, onEdit, onDelete;

    beforeEach(() => {
        notes = {
            id: 1,
            editing: true,
            task: 'wibble'
        };
        onValueClick = jest.fn();
        onEdit = jest.fn();
        onDelete = jest.fn();
        wrapper = shallow(<Note notes={notes} onValueClick={onValueClick} onEdit={onEdit} onDelete={onDelete}/>);
    });

    it('should exist', () => {
        expect(wrapper).toBeTruthy();
    });

    it('should render the form correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
