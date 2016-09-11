import React, { Component } from 'react';
import './style.less';

export default class Hotel extends Component {
    constructor() {
        super();
    }

    renderRateStar(imgData, index) {
        return (
            <img className="hotels__hotelCard__basicData__category"
                 key={index}
                 src="data:image/svg+xml;charset=US-ASCII,&lt;svg%20xmlns%3D&quot;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&quot;%20width%3D&quot;13&quot;%20height%3D&quot;12&quot;%20viewBox%3D&quot;0%200%2013%2012&quot;&gt;&lt;path%20d%3D&quot;M11.983%2C5.211a0.667%2C0.667%2C0%2C0%2C0-.545-0.534l-3.6-.6L6.626%2C0.457a0.665%2C0.665%2C0%2C0%2C0-1.263%2C0L4.155%2C4.077l-3.6.6A0.666%2C0.666%2C0%2C0%2C0%2C.319%2C5.9L3.195%2C7.631%2C2.029%2C11.124a0.666%2C0.666%2C0%2C0%2C0%2C1.047.732L5.995%2C9.521l2.917%2C2.334a0.667%2C0.667%2C0%2C0%2C0%2C1.049-.732L8.8%2C7.629%2C11.671%2C5.9a0.662%2C0.662%2C0%2C0%2C0%2C.312-0.694h0v0Z&quot;%20fill%3D&quot;%23f6ab3f&quot;%2F&gt;&lt;%2Fsvg&gt;"/>
        );
    }

    renderOtherPrices(priceDate, index) {

        return (
            <li key={index}>
                <span className="hotels__hotelCard__otherPrices__name">
                    {priceDate.name}
                </span>
                <span className="hotels__hotelCard__otherPrices__price">
                    {priceDate.price}
                </span>
            </li>
        );
    }

    renderHotelCard(hotelData, index) {
        const classCategory = `hotels__hotelCard__finalPrice__image ${hotelData.rates}`;

        return (
            <div className="hotels__hotelCard" key={index}>
                <div className="hotels__hotelCard__data">
                    <img className="hotels__hotelCard__img" src={hotelData.photo}/>

                    <div className="hotels__hotelCard__basicData">
                        <span className="hotels__hotelCard__basicData__title">
                            {hotelData.name}
                            {hotelData.category.map(this.renderRateStar.bind(this))}
                        </span>
                    </div>

                    <div className="hotels__hotelCard__rateData">
                        <span className="hotels__hotelCard__rateData__title">Rating: {hotelData.rateInt} / 10</span>
                        <span className="hotels__hotelCard__rateData__category">{hotelData.comments}</span>
                    </div>

                    <div className="hotels__hotelCard__otherPrices">
                        <ul>
                            {hotelData.otherPrices.map(this.renderOtherPrices.bind(this))}
                        </ul>
                    </div>
                </div>

                <div className="hotels__hotelCard__finalPrice">
                    <div className={classCategory}></div>
                    <div className="hotels__hotelCard_finalPrice__price">{hotelData.price}</div>
                </div>

            </div>
        );
    }

    render() {

        if (this.props.hotels.length > 0) {
            return (
                <div id="hotels">
                    { this.props.hotels.map(this.renderHotelCard.bind(this)) }
                </div>
            );
        } else {
            return (
                <div>
                    <h1>No hotels found.</h1>
                </div>
            );
        }

    }
}