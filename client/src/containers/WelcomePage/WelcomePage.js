import React, { Component } from 'react';
import LoginFormModal from './LoginFormModal'

export default class Name extends Component{
  constructor(){
    super()
    this.state = {
      openLoginFormModal: false
    }
  }

  render(){
    return(
      <div>
        <h1>Welcome To The StockMarket Game!!!</h1>
        <div>
        </div>
      </div>

    )
  }
}
