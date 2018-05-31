import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({poke}) => {
  let dir = (poke.id % 2 === 0) ? 'left' : 'right';
  return( <marquee direction={dir}>
      <li className='pokemon-index-item'>
        <img className='pokemon-thumbnail' src={poke.image_url}></img>
        <Link to={`/pokemon/${poke.id}`} replace >{poke.name}</Link>
      </li>
    </marquee>);
}

export default PokemonIndexItem;
