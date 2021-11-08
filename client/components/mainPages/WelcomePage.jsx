import React, { Component } from 'react';
import Header from '../pieces/Header';
import UserProfileContainer from '../containers/UserProfileContainer';
import SearchFieldContainer from '../containers/SearchFieldContainer';
import FavoriteBeachesContainer from '../containers/FavoriteBeachesContainer';

class WelcomePage extends Component {
  constructor(props){
    super(props);
    this.state={
      step: 3,
      Surf: false,
      Accessible: false,
      Barbecue_Allowed: false,
      Bathroom: false,
      Bicycle_and_Skate_Path: false,
      Boardwalk: false,
      Concession_Stand: false,
      Performance_Pavilion: false
    }
  }
  
  search = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })

    //send the GET request with the options 
  }
  
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }
  handleCheckboxChange = input => e => {
    this.setState({ [input] : e.target.checked })
  }
  render(){
    const { Surf, Accessible, Barbecue_Allowed, Bathroom,Bicycle_and_Skate_Path, Boardwalk, Concession_Stand, Performance_Pavilion } = this.state;
    const beachOptions = { Surf, Accessible, Barbecue_Allowed, Bathroom,Bicycle_and_Skate_Path, Boardwalk, Concession_Stand, Performance_Pavilion }
    const { step } = this.state;
  //header, display container with logout button, search container, favorites container
    switch(step){

      case 3:
        return (
          <>
            <Header />
            <UserProfileContainer />
            <SearchFieldContainer handleCheckboxChange={ this.handleCheckboxChange } search={ this.search }
            beachOptions={ beachOptions }/>
            <FavoriteBeachesContainer />
          </>
        )
      case 4:
        return (
          <>
            <Header />
            <UserProfileContainer />
            <DisplayResultsContainer prevStep={ this.prevStep }/>
            <FavoriteBeachesContainer />
          </>
        )

    }
  }
}
export default WelcomePage