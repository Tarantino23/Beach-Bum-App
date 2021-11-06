import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UserCreate from './components/UserCreate';
import WelcomePage from './components/WelcomePage';

export class App extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/UserCreate' element={<UserCreate/>}/>
          <Route path='/WelcomePage' element={<WelcomePage/>}/>
        </Routes>
      </BrowserRouter>
    )
  };
};

export default App
