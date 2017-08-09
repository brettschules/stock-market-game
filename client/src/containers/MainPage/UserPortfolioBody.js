import React, { Component } from 'react';
import UserPortfolio from '../../components/MainPage/UserPortfolio'
import {FetchEquitesAlpha} from '../../actions/MainPage/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class UserPortfolioBody extends Component{
  constructor(){
    super()
    this.state ={
      tickers: ["KO", "APU", "VZ"]
    }
  }

  fetchEquitesAlpha() {
      this.props.FetchEquitesAlpha('KO')
      this.props.FetchEquitesAlpha("VZ")
      this.props.FetchEquitesAlpha("AAPL")
      this.props.FetchEquitesAlpha("BABA")
  }

  componentDidMount() {
    this.fetchEquitesAlpha()
  }


  render(){
    console.log(this.props.equityInfo, "dfsah")
    return(
      <div>
        <h1>Hello</h1>
        {this.props.equityInfo.map(equity =>
          <UserPortfolio equityInfo={equity} />
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    equityInfo: state.equityInfo.equityInfo,
    loading: state.equityInfo.loading
  }
}

export default connect(mapStateToProps, {FetchEquitesAlpha})(UserPortfolioBody)
