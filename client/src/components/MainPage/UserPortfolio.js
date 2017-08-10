import React, { Component } from 'react';
import { Modal, Header } from 'semantic-ui-react'

export default class UserPortfolio extends Component {
  constructor(){
    super()
    this.state = {
      moreInfoModal: true
    }
  }

  accordion = () => {
    let acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
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

  handleMoreInfoClick = () => {
    debugger
  }

  render(){
    this.accordion()
    return(
      <div>
        <button className="accordion">{this.props.equityInfo.symbol}   {this.props.equityInfo.price}</button>
          <div className="panel">
            <div className="number-of-shares">
              <p>Number of shares: </p>
            </div>
            <table>
              <tr>
                <th id="market-value">
                  Market Value:
                </th>
                <td id="more-info" onClick={this.handleMoreInfoClick}>
                  More Info
                </td>
              </tr>
            </table>
          </div>
      </div>
    )
  }
}
