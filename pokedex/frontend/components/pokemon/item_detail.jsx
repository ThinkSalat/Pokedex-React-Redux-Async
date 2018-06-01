import React from 'react';

export default class ItemDetail extends React.Component {
  render(){
    const item = this.props.item;
    return(
      <div>
        <h1>{item.name}</h1>
        <h1>Happiness: {item.happiness}</h1>
        <h1>Price: {item.price}</h1>
      </div>
    );
  }
}
