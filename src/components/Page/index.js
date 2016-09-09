import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FilterHotels from '../FilterHotels';
import Hotel from '../Hotel';
import Map from '../Map';

import  Scrapping  from '../../scrapping';

import './style.less';

class Page extends Component {

    constructor() {
        super();
        let trivagoResult = this.doScrappingToTrivagoResult();
        this.trivagoResultCopy = this.copyObject(trivagoResult);

        this.state = {
            trivagoResult
        };

    }

    copyObject(obj){
        return JSON.parse(JSON.stringify(obj));
    }

    doScrappingToTrivagoResult() {
        return [
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
                    category: 'darkvader'
                }
            ]
    }

    handlerOnChangeSearch(text) {
        let TrivagoResultCopyOfCopy = this.copyObject(this.trivagoResultCopy);

        if (text.length >= 3) {
            let trivagoResult = this.handlerFilterHotels(text);

            this.setState({
                trivagoResult
            });


        } else {
            this.setState({
                trivagoResult: TrivagoResultCopyOfCopy
            });
        }
    }

    handlerFilterHotels(textToFilter, filterBy='name') {
        let TrivagoResultCopyOfCopy = this.copyObject(this.trivagoResultCopy);

        let trivagoResult = TrivagoResultCopyOfCopy.filter((item) => {
            if(item[filterBy].indexOf(textToFilter) != -1 && item != undefined){
                return item;
            }
        });

        return trivagoResult;
    }

    handlerOnClickCharacter(character) {
        let trivagoResult = this.handlerFilterHotels(character, 'category');

        this.setState({
            trivagoResult
        });
    }
    render() {

        return (
            <div id='extensionContainer'>
                <FilterHotels
                    onChange={this.handlerOnChangeSearch.bind(this)}
                    onClick={this.handlerOnClickCharacter.bind(this)}
                />
                <Map/>
                <Hotel hotels={ this.state.trivagoResult}/>
            </div>
        );
    }
}

window.addEventListener('message', function (e) {
    Scrapping.doScraping(window.top.document)
});

ReactDOM.render(<Page/>, document.getElementById('page-container'));
