import React, { Component } from 'react';
import './style.less';

export default class Hotel extends Component {
    constructor() {
        super();
    }

    renderHotelCard(hotelData, index){
        return (
            <div className="hotels__hotelCard" key={index}>
                <div className="hotels__hotelCard__data">
                    <img src={hotelData.photo}/>

                    <div className="hotels__hotelCard__basicData">
                        <span className="hotels__hotelCard__basicData__title">{hotelData.name}</span>
                        <span className="hotels__hotelCard__basicData__category">{hotelData.category}</span>
                    </div>

                    <div className="hotels__hotelCard__rateData">
                        <span className="hotels__hotelCard__rateData__title">{hotelData.rate} / 100</span>
                        <span className="hotels__hotelCard__rateData__category">{hotelData.comments}</span>
                    </div>

                    <div className="hotels__hotelCard__otherPrices">
                        <ul>
                            <li>
                                <span className="hotels__hotelCard__otherPrices__name">Booking</span>
                                <span className="hotels__hotelCard__otherPrices__price">250€</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="hotels__hotelCard__finalPrice">
                    <span className="hotels__hotelCard_finalPrice__price">{hotelData.price}</span>
                </div>

            </div>
        );
    }

    render() {
        console.log(this.props.hotels);
        return (
            <div id="hotels">
                { this.props.hotels.map(this.renderHotelCard.bind(this)) }
            </div>
        );
    }
}