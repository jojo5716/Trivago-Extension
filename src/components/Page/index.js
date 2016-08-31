import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '../Header';
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
                <Header/>
                <FilterHotels/>
                <h1>The best hotels in Palma de Mallorca ( 164 founds.)</h1>
                <Map/>
                <Hotel hotels={ this.state.hotels}/>
            </div>
        );
    }
}



(() => {

    let newContainer = document.createElement('div');
    newContainer.setAttribute("id", "app-wrapper");

    let mainContainer = document.getElementsByClassName('main-wrap')[0];
    mainContainer.textContent = '';
    mainContainer.appendChild(newContainer);

    ReactDOM.render(<Page/>, newContainer);
    
})();
