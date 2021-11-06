import React, { Component } from 'react';
import Header from './Header';
import UserCreateImage from './UserCreateImage';
import UserDataContainer from './UserDataContainer';

export class UserCreate extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  // nextStep = () => {
  //   const { step } = this.state;
  //   this.setState({
  //     step: step + 1
  //   })
  // }

  // prevStep = () => {
  //   const { step } = this.state;
  //   this.setState({
  //     step: step - 1
  //   })
  // }

  handleChange = input => e => {
    this.setState({[input] : e.target.value })
  }
  
  render() {
    const { username, password, firstName, lastName, email } = this.state;
    const values = { username, password, firstName, lastName, email };
    // const { step } = this.state;
        return (
          <>
            <Header />
            <UserDataContainer 
            handleChange={this.handleChange}
            values={values}
            />
          </>
        )
    
  }
}

export default UserCreate
