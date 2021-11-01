import React, { Component } from 'react';

import PokemonList from '../pokemon/PokemonList.js';
import SearchBar from '../search/SearchBar';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <SearchBar />
                    <PokemonList/>
                </div>
            </div>
        )
    }
}
