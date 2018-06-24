import React from 'react';
import ReactDOM from 'react-dom';
import main from '../app/Index';

describe('Index', () => {

    it('should have a function main', () => {
       // expect(main).toBe(typeof 'function');
        expect(main).toBeDefined();
    });
    it('renders without crashing', () => {
        main();
    });
});