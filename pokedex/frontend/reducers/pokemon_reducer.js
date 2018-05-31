import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

 const pokemonReducer = (state = {}, action) => {

  switch(action.type) {
  case (RECEIVE_ALL_POKEMON):
    return action.pokemon;
  case (RECEIVE_POKEMON):
    const newState = merge({}, state);
    const newPokemon = {
      [action.payload.pokemon.id]: action.payload.pokemon
    };
    return merge(newState,newPokemon);
  default:
      return state;
  }
};
export default pokemonReducer;
