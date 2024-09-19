import React from 'react';

import Nav from '../Nav';

import logo from '../../assets/logo/LOGO.png';

import "./header.scss"

const Header = () => {
  return (
    <header className="header">

      <img className="logo" src={logo} alt="Logo" />

      <Nav className="nav-header" />
    </header>
  );
}

export default Header;
