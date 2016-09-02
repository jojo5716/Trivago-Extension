import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FilterHotels from '../FilterHotels';
import Hotel from '../Hotel';
import Map from '../Map';

import './style.less';

class Page extends Component {

    constructor() {
        super();

        this.state = {
            hotels: [
                {
                    name: 'Tryp Palma Bellver',
                    photo: 'http://imgec.trivago.com/itemimages/37/12/37125_v8_isq.jpeg',
                    price: '174',
                    discount: '40',
                    priceBeforeDiscount: '200',
                    otherPrices: [],
                    rate: '80',
                    comments: '1977',
                    category: '4'
                },
                {
                    name: 'Saratoga',
                    photo: 'http://imgec.trivago.com/itemimages/37/12/37125_v8_isq.jpeg',
                    price: '174',
                    discount: '40',
                    priceBeforeDiscount: '200',
                    otherPrices: [],
                    rate: '80',
                    comments: '1977',
                    category: '4'
                }
            ]
        };


    }

    doScrappingToTrivagoResult() {

    }

    render() {
        return (
            <div id='extensionContainer'>
                <FilterHotels/>
                <h1>The best hotels in Palma de Mallorca ( 164 founds.)</h1>
                <Map/>
                <Hotel hotels={ this.state.hotels}/>
            </div>
        );
    }
}


ReactDOM.render(<Page/>, document.getElementById('page-container'));


