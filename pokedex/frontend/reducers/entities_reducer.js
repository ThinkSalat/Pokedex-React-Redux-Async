import {combineReducers} from 'redux';
import pokemonReducer from './pokemon_reducer';
import itemReducer from './item_reducer';


 export const entitiesReducer = combineReducers({
   pokemon: pokemonReducer,
   item: itemReducer

 });
