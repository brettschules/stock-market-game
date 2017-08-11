import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Auth from './authorize'
import AuthAdapter from './authAdapter'
import MainComponent from './containers/MainComponent'
import Login from './containers/WelcomePage/LoginForm'


export default class Name extends Component{
  state = {
    auth: {
      isLoggedIn: false,
      user: ''
    }
  }

  onLogin(loginParams) {
    debugger
    AuthAdapter.login(loginParams)
    .then(res => {
      if(res.error){
        console.log("do nothing")
      }else{
        localStorage.setItem('jwt', res.token)
        this.setState({
          auth:{
            isLoggedIn: true,
            user: res.username,
            name: res.name
          }
        })
      }
    })
  }

  // handleLogout(){
  //   localStorage.clear()
  //   this.setState({auth: {
  //     isLoggedIn: false,
  //     user: ''
  //   }})
  // }
  // <Route path='/' render={()=> <Nav onLogout={this.handleLogout.bind(this)} /> } />


  render(){
    return(
      <Router>
        <div>
            <Route path='/Profile' component={Auth(MainComponent)} />
            <Route path='/login' render={()=> this.state.auth.isLoggedIn ? <Redirect to="/Profile"/> : <Login onSendLogin={this.onLogin.bind(this)}/> } />
        </div>
      </Router>
    )
  }
}
