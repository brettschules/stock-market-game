import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react'


export default class UserPortfolio extends Component {
  constructor(){
    super()
  }

  accordion = () => {
    let acc = document.getElementsByClassName("accordion");
    console.log(acc.length, "acc")

    for (let i = 0; i < acc.length; i++) {
      console.log(i, "acc")
      acc[i].onclick = function(){
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none"
        } else {
          panel.style.display = "block"
        }
      }
    }
  }

  render(){
    this.accordion()
    return(
      <div>
        <button className="accordion">{this.props.equityInfo.symbol}   {this.props.equityInfo.price}</button>
          <div className="panel">
            <p>Testing</p>
          </div>
      </div>
    )
  }
}

// <div>
//   <h1>{this.props.equityInfo.symbol}</h1>
//   <p>{this.props.equityInfo.price}</p>
// </div>
