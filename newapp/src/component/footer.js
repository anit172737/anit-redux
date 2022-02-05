import React from "react";

const Footer = (props) => {
    return(
        <div className ='footer'>
            <a href='#header' className='footer__elements'>About Us</a>
            <a href='#header' className='footer__elements'>Header</a>
            <a href='#realtors' className='footer__elements'>Realtors</a>
            <a href='#features' className='footer__elements'>Features</a>
            <a href='#story' className='footer__elements'>Story</a>
            <a href='#homes' className='footer__elements'>Homes</a>
            <a href='#gallery' className='footer__elements'>Gallery</a>
        </div>
    )
}

export default Footer;