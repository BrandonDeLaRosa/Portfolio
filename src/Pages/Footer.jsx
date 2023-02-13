import React from 'react';
import { Link } from 'react-scroll';
import footerLogo from '../img/brLogoTraYell.png'

const Footer = () => {
    return (
        <div className='footer'>
            <Link to="header" smooth={true} duration={2000}><img className='footerLogo' src={footerLogo} alt="" /></Link> 
            {/* <Link  className='link' to='contact' >{english ? "Contact" : "Contacto"}</Link> */}
            <h3 className='footerTxt'>Brandon De La Rosa 2023. All Rights Reserved</h3>
        </div>
    );
};

export default Footer;