import React, { Component } from 'react';
import Header from '../pieces/Header';
import ImageContainer from '../containers/ImageContainer';
import Sidebar from '../pieces/Sidebar';
import { LoginContainer } from '../containers/LoginContainer';
import { Link } from 'react-router-dom';

// Create Beach Bums Header Component
    // Separate file
// Create Login/UserSignUp Component
// Create Main Image Container (logo)
// Create Sidebar w/ Description

export class LandingPage extends Component {
  
    render() {
      return (
        <>
        <main>
          <Header />
          <LoginContainer />
          <Link to="/createUser">Create Account</Link>
          <ImageContainer />
          <Sidebar />
        </main>
        </>
      )
    };
  };






export default LandingPage;