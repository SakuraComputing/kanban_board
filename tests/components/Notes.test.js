import React from 'react';
import {shallow} from "enzyme/build/index";
import Note from '../../app/components/Note';

describe('Note Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Note />);
    });

    it('should exist', () => {
        expect(wrapper).toBeTruthy();
    });

    it('should render the form correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
