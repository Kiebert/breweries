import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './listitem';

const item = {
    name: 'test'
}

describe('<ListItem />', () => {
    it('renders correctly', () => {


        const component = shallow(
            <ListItem item={item} />
        );
        expect(component).toMatchSnapshot();

    });

    it('should handle `click`', () => {
        const fakeHandler = jest.fn();
        const render = shallow(<ListItem item={item} onClick={fakeHandler} />);

        render.simulate('click');

        expect(fakeHandler).toBeCalled();
    });

});