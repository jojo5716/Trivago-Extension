import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FilterHotels from '../FilterHotels';
import Hotel from '../Hotel';
import Map from '../Map';

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
                    category: '4'
                }
            ]
    }

    handlerOnChangeSearch(text) {
        let TrivagoResultCopyOfCopy = this.copyObject(this.trivagoResultCopy);

        if (text.length >= 3) {
            let trivagoResult = TrivagoResultCopyOfCopy.map((item) => {
                if(item.name.indexOf(text) != -1 && item != undefined){
                    return item;
                }
            });

            console.log(trivagoResult);

            this.setState({
                trivagoResult
            });


        } else {
            console.log(TrivagoResultCopyOfCopy);

            this.setState({
                trivagoResult: TrivagoResultCopyOfCopy
            });
        }
    }

    render() {

        return (
            <div id='extensionContainer'>
                <FilterHotels onChange={this.handlerOnChangeSearch.bind(this)} />
                <Map/>
                <Hotel hotels={ this.state.trivagoResult}/>
            </div>
        );
    }
}


ReactDOM.render(<Page/>, document.getElementById('page-container'));
