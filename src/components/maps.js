import React, { Component } from 'react';
import './maps.css';

class Maps extends Component {

    // shouldComponentUpdate() {
    //     return false;
    // }
    constructor() {
        super();
        this.markers = [];
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps !== this.props) {
            this._setOptions(
                nextProps.lat,
                nextProps.lng,
                nextProps.zoom
            );
        }

    }

    componentDidMount() {

        this.geocoder = new window.google.maps.Geocoder();
        this.renderMap();
    }

    _setOptions(lat, lng, zoom) {
        let mapOptions = {
            center: { lat, lng },
            zoom
        };

        console.log('this.map:', this._map);
        this._map.setOptions(mapOptions);

        this.setMarkers(this._map);
    }

    setMarkers(_map) {

        if (this.props.addresses === undefined) {
            return;
        }
        if (this.markers.length > 0) {

            for (let i = 0; i < this.markers.length; i++) {
                this.markers[i].setMap(null);
            }
            this.markers = [];
        }
        //window.google.maps.event.addListenerOnce(this._map, 'tilesloaded', () => {
        for (let i = 0; i < this.props.addresses.length; ++i) {
            const fulladress = this.props.addresses[i].name + ' ' + this.props.addresses[i].address + ' ' + this.props.addresses[i].zipcode + ' ' + this.props.addresses[i].city;
            this.geocoder.geocode({
                address: fulladress,
                region: 'NL'
            }, (result, status) => {
                if (status === 'OK' && result.length > 0) {
                    const marker = new window.google.maps.Marker({
                        position: result[0].geometry.location,
                        map: _map
                    });

                    this.markers.push(marker);
                }

            })
        }
        //});
    }

    renderMap() {

        let mapOptions = {
            center: { lat: this.props.lat, lng: this.props.lng },
            zoom: this.props.zoom
        }
        this._map = new window.google.maps.Map(this._mapelement, mapOptions);

        this.setMarkers(this._map);


    }

    render() {
        return (
            <div className="Map" id="map" ref={m => this._mapelement = m} />
        );
    }
}

export default Maps;
