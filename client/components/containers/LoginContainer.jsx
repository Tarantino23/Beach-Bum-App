import React, { Component } from 'react'

export class LoginContainer extends Component {
  render() {
    return (
      <div className="login-container">
        <h4> Enter username and password</h4>
        <form method="POST" action="/api/login">
          <input className="username" name="username" type="text" placeholder="username"></input>
          <input className="password" name="password" type="password" placeholder="password"></input>
          <input className="login-btn" type="submit" value="login"></input>
        </form>
      </div>
    )
  }
}

export default LoginContainer