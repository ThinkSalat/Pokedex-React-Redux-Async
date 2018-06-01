import React from 'react';
import { Link } from 'react-router-dom';

export default class PokemonItem extends React.Component {
  render() {
    const item = this.props.item;
    return(
      <li className='item-list-item'>
        <Link replace to={`/pokemon/${item.pokemon_id}/item/${item.id}`}>
          <img className='item-img' src={item.image_url}></img>
        </Link>
      </li>
    );
  }
}
