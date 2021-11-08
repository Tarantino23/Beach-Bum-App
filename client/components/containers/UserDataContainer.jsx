import React, { Component } from 'react'
import UserCreateImage from '../pieces/ImageMain'
import UserDataForm from '../pieces/UserDataForm'

class UserDataContainer extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const { values, nextStep, handleChange } = this.props;
    return (
     <>
      <h3>Please fill out completely</h3>
      <UserDataForm 
      values={ values }
      nextStep={ nextStep }
      handleChange={ handleChange }
      />
      <UserCreateImage />
     </>
    )
  }
}

export default UserDataContainer
