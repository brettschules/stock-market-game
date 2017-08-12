import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {Login} from '../../actions/WelcomePage/index'

class LoginForm extends Component {
  constructor(){
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // this.props.onSendLogin(this.state)
    this.props.Login(this.state)
    this.setState({username: '', password: ''})
  }

  render(){
    return(
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
          </label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange}/>
          <label>
            Password
          </label>
          <input type="text" name="password" value={this.state.password} onChange={this.handleOnChange}/>
          <button type="submit">Login </button>
        </form>
    )
  }
}
export default connect(null, {Login})(LoginForm)
