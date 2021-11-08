import React, { Component } from 'react'

class SearchFieldContainer extends Component {
  
  render() {
    const { handleCheckboxChange, search} = this.props;
    const { Surf, Accessible, Barbecue_Allowed, Bathroom, Bicycle_and_Skate_Path, Boardwalk, Concession_Stand, Performance_Pavilion } = this.props.beachOptions; 
    return (
      <>
        <form>
          <div>
            <input type="checkbox" value={}/>
          </div>
        </form>
      </>
    )
  }
}

export default SearchFieldContainer
