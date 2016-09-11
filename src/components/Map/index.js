import React, { Component } from 'react';

import './style.less';

export default class Map extends Component {
    constructor() {
        super();

        this.firstCoordenate = [];
        this.positionCharacters = {
            'darkvader': '-180px -105px',
            'r2d2': '-97px -35px',
            'pilot': '-350px -34px',
            'c3po': '-180px -32px',
            'kylo': '-350px -106px'
        };
    }
    returnJSONCoordenates(hotels) {
        let jsonCoordenates = [];

        for (let i = 0; i <= hotels.length; i++) {
            const hotel = hotels[i];

            if ( i === 0) {
                this.firstCoordenate = [parseFloat(hotel.longitude, 10), parseFloat(hotel.latitude, 10)];
            }

            if ( hotel !== undefined) {
                jsonCoordenates.push({
                    "type": "Feature",
                    "properties": {
                        "message": "Baz",
                        "iconSize": [60, 60]
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            parseFloat(hotel.longitude, 10), parseFloat(hotel.latitude, 10)
                        ]
                    },
                    "positionImage": this.positionCharacters[hotel.rates]

                });
            }
        }

        return jsonCoordenates;
    }

    setMap() {
        // Clean current map
        const mapContainer = document.getElementById('map');
        mapContainer.textContent = '';

        mapboxgl.accessToken = 'pk.eyJ1Ijoiam9qbzU3MTYiLCJhIjoiY2lzZWw1eXNmMDAyMjJvcGZ0Y2dpaDVxdyJ9.NiMU0PBGmVISuOpcq5I53A';
        const geojson = {
            "type": "FeatureCollection",
            "features": this.returnJSONCoordenates(this.props.hotels)
        };

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v9',
            center: this.firstCoordenate,
            zoom: 14
        });

        // add markers to map
        geojson.features.forEach(function(marker) {
            // create a DOM element for the marker
            let el = document.createElement('div');
            el.className = 'marker';
            el.style.backgroundImage = 'url(https://d13yacurqjgara.cloudfront.net/users/763/screenshots/2425404/star-wars.png';
            el.style.backgroundPosition = marker.positionImage;
            el.style.backgroundSize = '423px 267px';
            el.style.borderRadius = '999px';
            el.style.width = marker.properties.iconSize[0] + 'px';
            el.style.height = marker.properties.iconSize[1] + 'px';

            // add marker to map
            new mapboxgl.Marker(el, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]})
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        });

        //map.setLayoutProperty('country-label-lg', 'text-field', '{name_english}');

    }

    componentDidMount() {
        this.setMap();
    }

    componentDidUpdate() {
        this.setMap();
    }

    render() {
        return (
            <div id="map"></div>
        );
    }
}


