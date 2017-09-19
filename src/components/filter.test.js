import React from 'react';
import { shallow } from 'enzyme';
import Filter from './filter';

describe('<Filter />', () => {
    it('renders correctly', () => {


        const component = shallow(
            <Filter />
        );
        expect(component).toMatchSnapshot();

    });

});