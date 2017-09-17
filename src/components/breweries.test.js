import React from 'react';
import { shallow } from 'enzyme';
import Breweries from './breweries';

describe('<Breweries />', () => {
    it('renders long list', () => {

        const breweriesJson = [
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
            },
            {
                "name": "Brouwerij de Molen",
                "address": "Overtocht 43",
                "zipcode": "2411 BT",
                "city": "Bodegraven",
                "open": [
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ]
            },
            {
                "name": "Leidsch Bier",
                "address": "Flevoweg 35a",
                "zipcode": "2318 BX",
                "city": "Leiden",
                "open": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ]
            },
            {
                "name": "Stadsbrouwerij De Pelgrim",
                "address": "Aelbrechtskolk 12",
                "zipcode": "3024 RE",
                "city": "Rotterdam",
                "open": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ]
            },
            {
                "name": "Brouwerij Het Anker",
                "address": "Guido Gezellelaan 49",
                "zipcode": "2800",
                "city": "Mechelen, Belgi\u00eb",
                "open": [
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ]
            },
            {
                "name": "Brouwerij 't IJ",
                "address": "Funenkade 7",
                "zipcode": "1018 AL",
                "city": "Amsterdam",
                "open": [
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ]
            },
            {
                "name": "Dorpsbrouwerij de Maar",
                "address": "Maar 2",
                "zipcode": "6454 AM",
                "city": "Jabeek",
                "open": [
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ]
            },
            {
                "name": "Texelse Bierbrouwerij",
                "address": "Schilderweg 214",
                "zipcode": "1792 CK",
                "city": "Oudeschild",
                "open": [
                    "Thursday",
                    "Friday",
                    "Saturday"
                ]
            },
            {
                "name": "Maximus",
                "address": "Pratumplaats 2A",
                "zipcode": "3454 NA",
                "city": "Utrecht (De Meern)",
                "open": [
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ]
            }
        ];

        const component = shallow(
            <Breweries items={breweriesJson} />
        );

        expect(component).toMatchSnapshot();


    });
    it('renders 1 item', () => {

        const breweriesJson = [
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
            }
        ];

        const component = shallow(
            <Breweries items={breweriesJson} />
        );

        expect(component).toMatchSnapshot();


    });
});