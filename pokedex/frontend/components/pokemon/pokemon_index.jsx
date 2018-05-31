import React from 'react';
import PokemonIndexItem from './pokemon_index_item';


class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }
  render() {
    const pokes = this.props.pokemon.map(poke=> {
      return <PokemonIndexItem poke={poke} key={poke.id}/>;
    });

    return(
      <ul>
        {pokes}
      </ul>
    );
  }
}

export default PokemonIndex;
