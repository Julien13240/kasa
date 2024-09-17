import React from 'react';
import logo from "../../assets/logo/logo_footer.png"
import "./footer.scss"
const Footer = () => {
  return (
    <div className='container'>
      <footer className="footer">
        <img src={logo} alt="" className="footer__logo" />
        <p className="footer__text-copyright">
          © 2020 Kasa. All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer;