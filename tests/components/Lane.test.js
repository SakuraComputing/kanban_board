import React from 'react';
import { shallow } from 'enzyme';
import Lane from '../../app/components/Lane';


describe('Lane Component', () => {
    let wrapper, lane;

    beforeEach(() => {
        lane = [jest.fn()];
        wrapper = shallow(<Lane lane={lane}/>);
    });

    it('should exist', () => {
        expect(wrapper).toBeTruthy();
    });

    it('should render the form correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
