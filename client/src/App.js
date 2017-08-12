import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Auth from './authorize'
import MainComponent from './containers/MainComponent'
import WelcomePage from './containers/WelcomePage'
import Login from './containers/WelcomePage/LoginFormModal'
import { connect } from 'react-redux'
import NavBar from './NavBar'


class App extends Component{

  render(){
    return(
      <div>
      <NavBar />
      <Router>
        <div>
           <Route exact path='/' render={() => <WelcomePage /> } />
            <Route exact path='/profile' component={Auth(MainComponent)}  />
            <Route exact path='/login' render={()=> this.props.isLoggedIn ? <Redirect to="/Profile" /> : <Login /> } />
        </div>
      </Router>
      </div>
    )

  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.postLogin.auth.isLoggedIn
  }
}

export default connect(mapStateToProps, null)(App)
