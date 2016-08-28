import React, { Component } from 'react';
import './style.less';

export default class Map extends Component {
    constructor(props) {
        super();

        this.state = {};
    }

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoiam9qbzU3MTYiLCJhIjoiY2lzZWw1eXNmMDAyMjJvcGZ0Y2dpaDVxdyJ9.NiMU0PBGmVISuOpcq5I53A';
        var map = new mapboxgl.Map({
            container: 'Map',
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [-79.4512, 43.6568],
            zoom: 13
        });

    }

    render() {
        return (
            <div id="Map"></div>
        );
    }
}


