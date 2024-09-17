import React from 'react';
import logo from '../../assets/logo/LOGO.png';
import Nav from '../Nav';
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
