import React, { Component } from 'react'
import UserCreateImage from './UserCreateImage'
import UserDataForm from './UserDataForm'

export class UserDataContainer extends Component {
  constructor(props){
    super(props);
  }

  createAccount = e => {
    e.preventDefault();
    //destructure field values from props
    const { username, password, firstName, lastName, email } = this.props;
    //store values in const to send
    const data = { username, password, firstName, lastName, email };
    //assign http request options
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JOSN.stringify(data)
    };
    //send fetch request to api
    fetch('/api/signup', requestOptions)
      .then((data) => console.log(data))
      .catch(err => console.log(err))
  }
  
  render() {
    
    return (
     <>
      <UserDataForm 
      createAccount={ this.createAccount }/>
      <UserCreateImage />
     </>
    )
  }
}

export default UserDataContainer
