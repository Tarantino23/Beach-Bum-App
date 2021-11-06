import React, { Component } from 'react';
import Header from './Header';
import ImageContainer from './ImageContainer';
import Sidebar from './Sidebar';
import Login from './Login';
import { Link } from 'react-router-dom';

// Create Beach Bums Header Component
    // Separate file
// Create Login/UserSignUp Component
// Create Main Image Container (logo)
// Create Sidebar w/ Description

export class LandingPage extends Component {
    constructor (props) {
      super(props);
    }
  
    render() {
      return (
        <>
        <main>
          <Header />
          <Login />
          <ImageContainer />
          <Sidebar />
          <Link to="/UserCreate">Create Account</Link>
        </main>
        </>
      )
    };
  };






export default LandingPage;