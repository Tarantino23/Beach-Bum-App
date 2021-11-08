import React, { Component } from 'react'

class SearchFieldContainer extends Component {
  
  search = e => {
    e.preventDefault();
    //assign array to const
    const results = [];
    //iterate over state, filter key/value pairs with a truthy value
    for (const key in this.props.beachOptions) {
      if (this.props.beachOptions[key] === true) {
        results.push(key);
      }
    }
    //send the data(array) in json
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(results)
    };
    //make fetch request to api/search
    fetch('/api/search', requestOptions)
      .then((data) => console.log(data))
      //catch any errors
      .catch(err => console.log(err)) 
  }
  
  render() {
    const { handleCheckboxChange } = this.props;
    const { Surf, Accessible, Barbecue_Allowed, Bathroom, Bicycle_and_Skate_Path, Boardwalk, Concession_Stand, Performance_Pavilion } = this.props.beachOptions; 

    return (
      <>
        <form className="checkbox-form">
          <div>
            <input onChange={ handleCheckboxChange('Accessible') } type="checkbox" value={ Accessible }/>
            <label className="checkbox-label"> Wheelchair Accessible </label>
          </div>
          <div>
            <input onChange={ handleCheckboxChange('Barbecue_Allowed') } type="checkbox" value={ Barbecue_Allowed }/>
            <label className="checkbox-label"> Barbecue Allowed </label>
          </div>
          <div>
            <input onChange={ handleCheckboxChange('Bathroom') } type="checkbox" value={ Bathroom }/>
            <label className="checkbox-label"> Bathroom </label>
          </div>
          <div>
            <input onChange={ handleCheckboxChange('Bicycle_and_Skate_Path') } type="checkbox" value={ Bicycle_and_Skate_Path }/>
            <label className="checkbox-label"> Bicycle & Skate Path </label>
          </div>
          <div>
            <input onChange={ handleCheckboxChange('Boardwalk') } type="checkbox" value={ Boardwalk }/>
            <label className="checkbox-label"> Boardwalk </label>
          </div>
          <div>
            <input onChange={ handleCheckboxChange('Concession_Stand') } type="checkbox" value={ Concession_Stand }/>
            <label className="checkbox-label"> Concession Stand </label>
          </div>
          <div>
            <input onChange={ handleCheckboxChange('Performance_Pavilion') } type="checkbox" value={ Performance_Pavilion }/>
            <label className="checkbox-label"> Performance Pavilion </label>
          </div>
          <div>
            <input onChange={ handleCheckboxChange('Surf') } type="checkbox" value={ Surf }/>
            <label className="checkbox-label"> Surfing </label>
          </div>
          <button onClick={ this.search } className="search-btn"> Search </button>
        </form>
      </>
    )
  }
}



export default SearchFieldContainer
