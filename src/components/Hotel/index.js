import React, { Component } from 'react';
import './style.less';

export default class Hotel extends Component {
    constructor() {
        super();
    }
    
    renderHotelCard(hotelData, index){
        if(hotelData === undefined){
            return null;
        }

        return (
            <div className="hotels__hotelCard" key={index}>
                <div className="hotels__hotelCard__data">
                    <img className="hotels__hotelCard__img" src={hotelData.photo}/>

                    <div className="hotels__hotelCard__basicData">
                        <span className="hotels__hotelCard__basicData__title">
                            {hotelData.name}
                            <img className="hotels__hotelCard__basicData__category" src='data:image/svg+xml;charset=US-ASCII,<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"13"%20height%3D"12"%20viewBox%3D"0%200%2013%2012"><path%20d%3D"M11.983%2C5.211a0.667%2C0.667%2C0%2C0%2C0-.545-0.534l-3.6-.6L6.626%2C0.457a0.665%2C0.665%2C0%2C0%2C0-1.263%2C0L4.155%2C4.077l-3.6.6A0.666%2C0.666%2C0%2C0%2C0%2C.319%2C5.9L3.195%2C7.631%2C2.029%2C11.124a0.666%2C0.666%2C0%2C0%2C0%2C1.047.732L5.995%2C9.521l2.917%2C2.334a0.667%2C0.667%2C0%2C0%2C0%2C1.049-.732L8.8%2C7.629%2C11.671%2C5.9a0.662%2C0.662%2C0%2C0%2C0%2C.312-0.694h0v0Z"%20fill%3D"%23f6ab3f"%2F><%2Fsvg>'/>
                        </span>
                    </div>

                    <div className="hotels__hotelCard__rateData">
                        <span className="hotels__hotelCard__rateData__title">Muy bien - {hotelData.rate} / 100</span>
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
                    <div className="hotels__hotelCard__finalPrice__image"></div>
                    <div className="hotels__hotelCard_finalPrice__price">{hotelData.price}€</div>
                </div>

            </div>
        );
    }

    render() {
        return (
            <div id="hotels">
                { this.props.hotels.map(this.renderHotelCard.bind(this)) }
            </div>
        );
    }
}