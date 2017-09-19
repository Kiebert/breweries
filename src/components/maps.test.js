import React from 'react';
import { shallow } from 'enzyme';
import Maps from './Maps';

describe('<Maps />', () => {
    it('renders correctly', () => {

        const addresses = [
            {
                "name": "Brouwerij Dampegheest",
                "address": "Achterweg 22",
                "zipcode": "1906 AG",
                "city": "Limmen",
                "open": [
                    "Friday",
                    "Saturday",
                    "Sunday"
                ]
            },
            {
                "name": "de naeckte brouwers",
                "address": "Weverij 5",
                "zipcode": "1185 ZE",
                "city": "Amstelveen",
                "open": [
                    "Wednesday"
                ]
            }
        ]
        const component = shallow(
            <Maps 
                addresses={addresses}
                zoom={7}
                ltn={52}
                lng={4} 
            />
        );
        expect(component).toMatchSnapshot();

    });

});