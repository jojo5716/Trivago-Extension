import React, { Component } from 'react';
import './style.less';

export default class FilterHotels extends Component {

    render() {
        return (
            <div id="filterHotels" className="extensionContainer__selectMenu">
                
                <div className="filterHotels__search">
                    <input type="text" name="search" placeholder="Find your hotel"/>
                    <h1>The best hotels in Palma de Mallorca ( 164 founds.)</h1>
                </div>

                <div className="filterHotels__characters">
                    <div className="darkVader">
                        <span>Excelente</span>
                    </div>

                    <div className="r2d2">
                        <span>Muy buena</span>
                    </div>

                    <div className="pilot">
                        <span>Buena</span>
                    </div>

                    <div className="chewbacca">
                        <span>Aceptable</span>
                    </div>

                    <div className="kylo">
                        <span>Regular</span>
                    </div>
                </div>

            </div>
        );
    }
}
