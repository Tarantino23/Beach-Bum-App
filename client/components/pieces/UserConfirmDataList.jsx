import React, { Component } from 'react'

export class UserConfirmDataList extends Component {


  render() {
    const { username, password, firstName, lastName, email } = this.props.values;


    return (
      <>
        <ul className="user-data-list">
          <li>{ username }</li>
          <li>{ password }</li>
          <li>{ firstName }</li>
          <li>{ lastName }</li>
          <li>{ email }</li>
        </ul>
      </>
    )
  }
}

export default UserConfirmDataList
