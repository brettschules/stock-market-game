import React, { Component } from 'react';
import UserPortfolio from '../../components/MainPage/UserPortfolio';
import {FetchEquitesAlpha} from '../../actions/MainPage/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ReactInterval from 'react-interval';

class UserPortfolioBody extends Component{
  constructor(){
    super()
    this.state ={
      tickers: ["KO", "APU", "VZ", "BABA"]
    }
  }

  fetchEquitesAlpha() {
      this.state.tickers.map(ticker =>
        this.props.FetchEquitesAlpha(ticker)
      )
  }

  fetchEveryMinute = () => {

  }

  componentDidMount() {
    this.fetchEquitesAlpha()
  }

  render(){
    console.log(this.props.equityInfo, "dfsah")
    return(
      <div>
        <ReactInterval timeout={100000} enabled={true}
          callback={() => this.fetchEquitesAlpha()}
        />
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
