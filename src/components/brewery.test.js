import React from 'react';
import { shallow } from 'enzyme';
import Brewery from './brewery';

describe('<Brewery />', () => {
    it('renders brewery information', () => {

        const json = {
            name: "Brouwerij Dampegheest",
            address: "Achterweg 22",
            zipcode: "1906 AG",
            city: "Limmen",
            open: ["Friday", "Saturday", "Sunday"]
        }

        const component = shallow(
            <Brewery data={json} />
        );

        expect(component).toMatchSnapshot();


    });

});