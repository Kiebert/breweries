import React from 'react';
import { shallow } from 'enzyme';
import Details from './details';

describe('<Details />', () => {
    it('renders Details information', () => {

        const json = {
            name: "Brouwerij Dampegheest",
            address: "Achterweg 22",
            zipcode: "1906 AG",
            city: "Limmen",
            open: ["Friday", "Saturday", "Sunday"]
        }

        const component = shallow(
            <Details item={json} />
        );

        expect(component).toMatchSnapshot();


    });

});