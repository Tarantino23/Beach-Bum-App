import React, { Component } from 'react'
import ImageMain from '../pieces/ImageMain'
import UserConfirmDataList from '../pieces/UserConfirmDataList'

class UserConfirmDataContainer extends Component {
  constructor(props){
    super(props);
  }

  createAccount = e => {
    e.preventDefault();
    //destructure field values from props
    const { values : { username, password, firstName, lastName, email }} = this.props;
    //store values in const to send
    const data = { username, password, firstName, lastName, email };
    //assign http request options
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    };
    //send fetch request to api
    fetch('/api/signup', requestOptions)
      .then((data) => console.log(data))
      .catch(err => console.log(err))
  }
  
  render() {
    const { values, prevStep } = this.props;
    return (
     <>
      <h3>Please confirm your information is correct</h3>
      <UserConfirmDataList 
      values={values}
      />
      <button onClick={ this.createAccount } >Create Account</button>
      <button onClick={ prevStep } >Edit Information</button>
      <ImageMain/>
     </>

    )
  }
}

export default UserConfirmDataContainer
