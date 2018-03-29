import React from 'react';
import {
  Navbar
} from 'react-bootstrap';

import logo from '../../assets/logo-editora-sanar.jpg';
import './styles.css';


const Header = () => (
  <Navbar className="Header">
    <Navbar.Header>
      <Navbar.Brand className="Header-logo">
        <img src={logo} alt="logo" />
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
);


export default Header;
