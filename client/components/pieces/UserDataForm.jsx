import React, { Component } from 'react'

class UserDataForm extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { username, password, firstName, lastName, email } = this.props.values;
    const { handleChange, nextStep } = this.props;
    return (
      <>
        <form className="user-data-form">
          <input defaultValue={ username } onChange={handleChange('username')} className="user-input-fields" type="text" label="Username" placeholder="Username" />
          <input defaultValue={ password } onChange={handleChange('password')} className="user-input-fields" type="text" label="Password" placeholder="Password"/>
          <input defaultValue={ firstName } onChange={handleChange('firstName')} className="user-input-fields" type="text" label="First Name" placeholder="First Name"/>
          <input defaultValue={ lastName } onChange={handleChange('lastName')} className="user-input-fields" type="text" label="Last Name" placeholder="Last Name" />
          <input defaultValue={ email } onChange={handleChange('email')} className="user-input-fields" type="text" label="Email" placeholder="Email"/>
          <button onClick={ nextStep } className="continue-btn">Continue</button>
        </form>
      </>
    )
  }
}

export default UserDataForm
