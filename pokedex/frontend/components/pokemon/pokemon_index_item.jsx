import React from 'react';

const PokemonIndexItem = ({poke}) => {
  let dir = (poke.id % 2 === 0) ? 'left' : 'right';
  return( <marquee direction={dir}>
      <li className='pokemon-index-item'>
        <img className='pokemon-thumbnail' src={poke.image_url}></img>
        <h1> {poke.name} </h1>
      </li>
    </marquee>);
}

export default PokemonIndexItem;
