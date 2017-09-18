import React, { Component } from 'react';
import './maps.css';

class Maps extends Component {

    constructor() {
        super();
        this.markers = [];
    }

    componentDidMount() {

        this.geocoder = new window.google.maps.Geocoder();
        this.renderMap();
    }

    setOptions(lat, lng, zoom) {
        let mapOptions = {
            center: { lat, lng },
            zoom
        };
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

        for (let i = 0; i < this.props.addresses.length; ++i) {
            const data = this.props.addresses[i];
            const fulladress = data.name + ' ' + data.address + ' ' + data.zipcode + ' ' + data.city;
            this.geocoder.geocode({
                address: fulladress,
                region: 'NL'
            }, (result, status) => {
                if (status === 'OK' && result.length > 0) {
                    const marker = new window.google.maps.Marker({
                        position: result[0].geometry.location,
                        map: _map
                    });

                    marker.addListener('click', () => this.clickMarker(marker, data) );
              

                    this.markers.push(marker);
                }

            })
        }
    }

    clickMarker(marker, data) {
        this._map.setZoom(14);
        this._map.setCenter(marker.getPosition());
        console.log('clickMarker data: ', data);

        this.props.onClick({item:data});
    }

    renderMap() {

        let mapOptions = {
            center: { lat: this.props.lat, lng: this.props.lng },
            zoom: this.props.zoom,
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false
          
            
            
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
