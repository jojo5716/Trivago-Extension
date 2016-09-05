import React, { Component } from 'react';

import './style.less';

export default class Map extends Component {
    constructor(props) {
        super();

        this.state = {};
    }

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoiam9qbzU3MTYiLCJhIjoiY2lzZWw1eXNmMDAyMjJvcGZ0Y2dpaDVxdyJ9.NiMU0PBGmVISuOpcq5I53A';
        var geojson = {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "message": "Baz",
                        "iconSize": [60, 60]
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            2.6497258371718146, 39.56007902046164
                        ]
                    }
                }
            ]
        };

        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v9',
            center: [2.6497258371718146, 39.56007902046164],
            zoom: 13
        });

// add markers to map
        geojson.features.forEach(function(marker) {
            // create a DOM element for the marker
            var el = document.createElement('div');
            el.className = 'marker';
            el.style.backgroundImage = 'url(https://d13yacurqjgara.cloudfront.net/users/763/screenshots/2425404/star-wars.png';
            el.style.backgroundPosition = '-179px -108px';
            el.style.backgroundSize = '423px 267px';
            el.style.borderRadius = '999px';
            el.style.width = marker.properties.iconSize[0] + 'px';
            el.style.height = marker.properties.iconSize[1] + 'px';

            el.addEventListener('click', function() {
                window.alert(marker.properties.message);
            });

            // add marker to map
            new mapboxgl.Marker(el, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]})
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        });
    }

    render() {
        return (
            <div id="map"></div>
        );
    }
}


