import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

const itemReducer = (state = {}, action) => {
  switch(action.type) {
  case (RECEIVE_POKEMON):
  return  state;//return pokemon items
  default:
    return state;
  }
};

export default itemReducer;
