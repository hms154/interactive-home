import React from 'react';
import Thing from './thing';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'

describe('<Thing />', () => {
    it('should have a name when created', () => {
        const tree = renderer.create(
            <Thing name = "light 1" />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    
    })
    it('should display "On" when props.value is true', () => {
        const thing = shallow(
            <Thing name = "light 1" value={true} />
        );

        expect(thing.text()).toBe('light 1: On');
    });
    it('should display "Off" when value props.value is false', () => {
        const thing = shallow(
            <Thing name = "light 1" value={false} />
        );

        expect(thing.text()).toBe('light 1: Off');
    });
})