import { values } from 'lodash';

export const selectAllPokemon = (state) => {
  return values(state.entities.pokemon);
};


export const selectSinglePokemon = (state,id) => {
  return state.entities.pokemon[id];
};

export const selectItems = (state) => {
  return Object.keys(state.entities.items).map(id => {
    return state.entities.items[id];
  });
};

export const selectItem = (state,id) => {
  return state.entities.items[id];
};
