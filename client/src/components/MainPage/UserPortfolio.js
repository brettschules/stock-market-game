import React, { Component } from 'react';

export default class UserPortfolio extends Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <h1>{this.props.equityInfo.symbol}</h1>
        <p>{this.props.equityInfo.price}</p>
      </div>
    )
  }
}
