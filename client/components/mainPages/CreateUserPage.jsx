import React, { Component } from 'react';
import Header from '../pieces/Header';
import ImageMain from '../pieces/ImageMain';
import UserDataContainer from '../containers/UserDataContainer';
import UserConfirmDataContainer from '../containers/UserConfirmDataContainer'

export class CreateUserPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      //declare the state to use in this app
      step: 0,
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      favorites: [],
    }
  }
  //create two functions to increment or decrement the step in state(change render)
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  }
  
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }

  //create function to handle change of input fields
  handleChange = input => e => {
    this.setState({[input] : e.target.value })
  }

  render() {
    //pull values from state, store in one object, pass down as props
    const { username, password, firstName, lastName, email } = this.state;
    const values = { username, password, firstName, lastName, email };
    const { step } = this.state;

    switch(step){
      //case 1 - user fills out forms; case 2 - user confirms & submits or goes back to edit
      case 0: 
        return (
          <>
            <Header />
            <UserDataContainer 
            values={ values }
            handleChange={ this.handleChange }
            nextStep={ this.nextStep }
            />
        </>
        )
      case 1:
        return (
          <>
            <Header />
            <UserConfirmDataContainer
            values={ values }
            prevStep={ this.prevStep }
            />
          </>
        )
    }
    
  }
}

export default CreateUserPage
