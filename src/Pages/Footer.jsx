import React from 'react';
import { Link } from 'react-scroll';
import footerLogo from '../img/brLogoTraYell.png'

const Footer = () => {
    return (
        <div className='footer'>
            {/* <Link to="header" smooth={true} duration={2000}><img className='footerLogo' src={footerLogo} alt="" /></Link>  */}
            <img className='footerLogo' src={footerLogo} alt="" />
            <p className='footerTxt'>Brandon De La Rosa 2023. All Rights Reserved</p>
        </div>
    );
};

export default Footer;