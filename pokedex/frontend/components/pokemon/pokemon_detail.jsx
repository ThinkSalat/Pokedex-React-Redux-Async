import React from 'react';
import { Link } from 'react-router-dom';

export default class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemon_id);
  }

 componentWillReceiveProps(newProps) {
   if(newProps.match.params.pokemon_id !== this.props.match.params.pokemon_id){
   this.props.requestSinglePokemon(newProps.match.params.pokemon_id);
   }
 }

  render() {
    if (!this.props.pokemon) return null;
    if (!this.props.pokemon.moves) return null;
    if (!this.props.items) return null;
    
    const items = this.props.items;
    const pokemon = this.props.pokemon;
    const itemRenders = items.map(item=>{
      return(
        <li>
          <ul>
            <li>{item.name}</li>
            <li>Happiness: {item.happiness}</li>
            <li>Price: {item.price}</li>
        </ul>
      </li>
      );
    });
    const moves = pokemon.moves.map(move=> {
      return <li key={move}>{move}</li>;
    });
    return(
      <div className='pokemon-detail'>
        <Link to="/" replace >Back to All Pokemon </Link>
        <h1>{pokemon.name}</h1>
        <img  src={pokemon.image_url}></img>
        <ul>
          <li><h4> {pokemon.poke_type} type pokemon!</h4></li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          <li>Moves:
            <ul>
              {moves}
            </ul>
          </li>
          <li>Items:
            <ul>
              {itemRenders}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
