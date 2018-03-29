import React from 'react';
import {
  Navbar
} from 'react-bootstrap';

import logo from '../../assets/logo-editora-sanar.jpg';


const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <img src={logo} alt="logo" />
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
);


export default Header;
