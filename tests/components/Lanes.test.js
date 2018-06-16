import React from 'react';
import { shallow } from 'enzyme';
import Lanes from '../../app/components/Lanes';


describe('Lanes Component', () => {
    let wrapper, lanes;

    beforeEach(() => {
        lanes = [jest.fn()];
        wrapper = shallow(<Lanes lanes={lanes}/>);
    });

    it('should exist', () => {
        expect(wrapper).toBeTruthy();
    });

    it('should render the form correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
