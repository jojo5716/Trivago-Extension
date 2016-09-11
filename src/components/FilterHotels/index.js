import React, { Component } from 'react';
import './style.less';

export default class FilterHotels extends Component {

    onChange(event) {
        this.props.onChange(event.target.value);
    }

    onClick(character) {
        this.props.onClick(character);
    }

    render() {
        return (
            <div id="filterHotels" className="extensionContainer__selectMenu">
                
                <div className="filterHotels__search">
                    <input
                        type="text"
                        name="search"
                        placeholder="Which is the hotel name?"
                        onChange={this.onChange.bind(this)}
                    />
                    <h1>The best hotels in Palma de Mallorca ( 164 founds.)</h1>
                </div>

                <div className="filterHotels__characters">
                    <div className="darkVader" onClick={() => this.onClick('darkvader')}>
                        <span>Excellent</span>
                    </div>

                    <div className="r2d2" onClick={() => this.onClick('r2d2')}>
                        <span>Very good</span>
                    </div>

                    <div className="pilot" onClick={() => this.onClick('pilot')}>
                        <span>Good</span>
                    </div>

                    <div className="c3po" onClick={() => this.onClick('c3po')}>
                        <span>Ok</span>
                    </div>

                    <div className="kylo" onClick={() => this.onClick('kylo')}>
                        <span>Poor</span>
                    </div>
                </div>

            </div>
        );
    }
}
