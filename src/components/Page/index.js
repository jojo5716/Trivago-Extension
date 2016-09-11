import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FilterHotels from '../FilterHotels';
import Hotel from '../Hotel';
import Map from '../Map';


import './style.less';

class Page extends Component {

    constructor(props) {
        super();

        let trivagoResult = props.hotels || this.doScrappingToTrivagoResult();
        this.trivagoResultCopy = this.copyObject(trivagoResult);

        this.state = {
            trivagoResult
        };
    }

    copyObject(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    doScrappingToTrivagoResult() {
        return [
                {
                    name: 'Tryp Palma Bellver',
                    photo: 'http://imgec.trivago.com/itemimages/37/12/37125_v8_isq.jpeg',
                    price: '174',
                    otherPrices: [],
                    rate: '8',
                    category: 'r2d2'
                },
                {
                    name: 'Saratoga',
                    photo: 'http://imgec.trivago.com/itemimages/37/12/37125_v8_isq.jpeg',
                    price: '174€',
                    otherPrices: [{name: 'Booking.com', price: '300€'}],
                    rate: '8',
                    category: 'darkvader'
                }
            ]
    }

    handlerOnChangeSearch(text) {
        let TrivagoResultCopyOfCopy = this.copyObject(this.trivagoResultCopy);
        let trivagoResult;

        if (text.length >= 3) {
            trivagoResult = this.handlerFilterHotels(text)
        } else {
            trivagoResult = TrivagoResultCopyOfCopy;
        }

        this.setState({
            trivagoResult
        });
    }

    handlerFilterHotels(textToFilter, filterBy='name') {
        let TrivagoResultCopyOfCopy = this.copyObject(this.trivagoResultCopy);

        let trivagoResult = TrivagoResultCopyOfCopy.filter((item) => {
            if (item[filterBy].indexOf(textToFilter) != -1) {
                return item;
            }
        });

        return trivagoResult;
    }

    handlerOnClickCharacter(character) {
        this.setState({
            trivagoResult: this.handlerFilterHotels(character, 'rates')
        });
    }

    render() {

        return (
            <div id='extensionContainer'>
                <FilterHotels
                    onChange={this.handlerOnChangeSearch.bind(this)}
                    onClick={this.handlerOnClickCharacter.bind(this)}
                />
                <Map hotels={this.state.trivagoResult}/>
                <Hotel hotels={this.state.trivagoResult}/>
            </div>
        );
    }
}

chrome.storage.local.get('TrivagoHotels', function (result) {
    ReactDOM.render(<Page hotels={ result.TrivagoHotels } />,
        document.getElementById('page-container'));
});
