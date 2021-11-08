import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/mainPages/LandingPage';
import CreateUserPage from './components/mainPages/CreateUserPage';
import WelcomePage from './components/mainPages/WelcomePage';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/createUser' element={<CreateUserPage />}/>
          <Route path='/welcomePage' element={<WelcomePage />}/>
        </Routes>
      </BrowserRouter>
    )
  };
};

export default App
