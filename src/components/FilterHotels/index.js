import React, { Component } from 'react';
import './style.less';

export default class FilterHotels extends Component {

    render() {
        return (
            <div id="filterHotels" className="extensionContainer__selectMenu">
                <input type="text" name="search" placeholder="Find your hotel"/>
                <select>
                    <option>
                        Order by: Best price
                    </option>
                </select>
            </div>
        );
    }
}
