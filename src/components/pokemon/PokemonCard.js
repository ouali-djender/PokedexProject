import React, { Component } from 'react'
import styled from 'styled-components';
// Import de Link pour transformer les cases en lien. Quand l'utilisateur cliquera
// sur le pokemon l'utilisateur se vera rediriger sur une autre page 
// ou il y aura les capacités du pokemon affichés dessus.
import { Link } from 'react-router-dom';

import spinner from '../pokemon/spinner.gif';

// Sprite est égal à l'image stylisée. Défini la taille de l'image dans les cases
const Sprite = styled.img`
    width : 5em,
    height : 5em,
    display: none
`;

// Défini les animations dans les case si le curseur passe dessus. 
// Problème : Cela ne fonctionne pas correctement comme dans le tuto.

const Card = styled.div`
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadox: 0 14px 20px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0,22);
    }
    -moz-user-select: none;
    -website-user-select: none;
    user-select: none;
    -o-user-select: none;
`;


export default class PokemonCard extends Component {

    // Accès aux données de l'objet Pokemon 
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex:'',
        imageLoading: true,
        toManyRequests: false
    };
    // Monter les infos dans le DOM
    componentDidMount() {
        const { name, url } = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonIndex}.svg`
        console.log(imageUrl);
        this.setState({
            name,
            imageUrl,
            pokemonIndex
        });
    }

    render() {

        // Dans le return avec la balise <Link> j'englobe toute les cartes pour qu'elle devienne 
        // des liens afin de pouvoir cliquez dessus.
        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <Link to={`pokemon/${this.state.pokemonIndex}`}>
                <Card className="card avatar-background">
                        <h5 className="card-header">{this.state.pokemonIndex}</h5>
                            {this.state.imageLoading ? (
                                <img src={spinner} alt="" style={{width:'5em', height: '5em'}}
                                className="card-img-top rounded mx-auto d-block mt-2"/>
                            ) : null}
                        <Sprite 
                            className="card-img-top rounded mx-auto mt-2"
                            onLoad={() => this.setState({ imageLoading: false })}
                            onError={() => this.setState({ toManyRequests: true })}
                            src={this.state.imageUrl}
                            style = {
                                this.state.toManyRequests ? {display: 'none'} :
                                this.state.imageLoading ? null: {display : 'block'} 
                            }
                        />
                        {this.state.toManyRequests ? (
                            <h6 className="mx-auto">
                                <span className="badge badge-danger mt-2">To many Requests</span>
                            </h6>
                        ) : null}
                        <div className="card-body mx-auto">
                            <h6 className="card-title">{this.state.name.toLowerCase().split(" ").map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}</h6>
                        </div>
                </Card>
                </Link>
                
            </div>
        )
    }
}
