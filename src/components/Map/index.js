import React, { Component } from 'react';

import './style.less';

export default class Map extends Component {
    constructor(props) {
        super();

        this.state = {};
    }

    componentDidMount() {
        let script = document.createElement('script');
        script.src = 'http://maps.google.com/maps/api/js';
        script.onload = () => {
            new GMaps({
                div: '#map',
                lat: -12.043333,
                lng: -77.028333
            });
        };

        document.getElementsByTagName('head')[0].appendChild(script);
    }

    render() {
        return (
            <div id="map"></div>
        );
    }
}


