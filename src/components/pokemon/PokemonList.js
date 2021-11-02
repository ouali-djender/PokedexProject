import React, { Component } from 'react';

import PokemonCard from './PokemonCard';
// Client HTTP pour utiliser les données de l'API
import axios from 'axios';

export default class PokemonList extends Component {

    // URL de l'API PokéAPI. L'objet Pokemon store the data of the request
    state = {
        url : "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0",
        pokemon : null
    }
    // On va monter les datas de l'API sur l'application dans le DOM
    async componentDidMount() {
        // On réalise la requête sur l'API PokeAPI en utilisant l'objet URL
        const res = await axios.get(this.state.url);
        // Mise à jour de l'état de l'objet Pokemon qui contiendra les données de l'API
        this.setState( { pokemon : res.data['results'] })
        
    }

    render() {
        // On test si l'objet pokemon ets bien rempli sinon on met loading pokemon s'il y a rien dedans.
        return (
            <React.Fragment>
            {this.state.pokemon ? (
                <div className="row">
                    {this.state.pokemon.map(pokemon => (
                        <PokemonCard
                            key={pokemon.name}
                            name={pokemon.name}
                            url={pokemon.url}
                        />
                    ))}
            </div>
            ) : (
                <h1> Loading Pokemon </h1>
            )}
            </React.Fragment>
        )
    }
}

