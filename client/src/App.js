import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Auth from './authorize'
import AuthAdapter from './authAdapter'
import MainComponent from './containers/MainComponent'
import WelcomePage from './containers/WelcomePage/WelcomePage'
import Login from './containers/WelcomePage/LoginFormModal'
import { connect } from 'react-redux'


class App extends Component{

  handleLogout = () => {
    localStorage.clear()
    this.setState({auth: {
      isLoggedIn: false,
      user: ''
    }})
  }

  render(){
    return(
      <Router>
        <div>
           <Route path='/' render={() => <WelcomePage onLogout={this.handleLogout} /> } />
            <Route path='/Profile' component={Auth(MainComponent)}  />
            <Route path='/login' render={()=> this.props.isLoggedIn ? <Redirect to="/Profile" /> : <Login /> } />
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.postLogin.auth.isLoggedIn
  }
}

export default connect(mapStateToProps, null)(App)
