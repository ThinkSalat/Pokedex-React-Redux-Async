import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({poke}) => {
  let dir = (poke.id % 2 === 0) ? 'left' : 'right';
  return(
      <li className='pokemon-index-item'>
        <Link to={`/pokemon/${poke.id}`} replace >
           <img className='pokemon-thumbnail' src={poke.image_url}></img>
        </Link>
      </li>
    );
}

export default PokemonIndexItem;
