import React from 'react';
import { Link, Route } from 'react-router-dom';
import PokemonItem from './pokemon_item';
import ItemDetailContainer from './item_detail_container';

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
    const itemRenders = items.map((item,i)=> <PokemonItem key={i} item={item}/>);
    const moves = pokemon.moves.map((move,i)=> {
      return <li key={i}><strong>{move}</strong></li>;
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
            <ul className='items-container'>
              {itemRenders}

            </ul>
            <Route path={`/pokemon/${pokemon.id}/item/:item_id`} component={ItemDetailContainer} />
          </li>
        </ul>
      </div>
    );
  }
}
