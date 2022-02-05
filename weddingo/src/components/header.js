import React from 'react';
import '../sass/header.scss';
import img from '../img/1751088.svg';

const Header =(props)=>{
    return(
        <div className='header'>
            <div className='header__top'>
                <div className='header__top-logo'>Weddingo</div>
                <ul className='header__top-ul'>
                    <li className='header__top-list'>
                        <a className='header__top-list-item' href='#story'>Bride & Groom</a></li>
                        <li className='header__top-list'>
                        <a className='header__top-list-item' href='#sugarbox'>Sugarbox</a></li>    
                    <li className='header__top-list'><a className='header__top-list-item' href='#haldi'>Haldi</a></li>
                    <li className='header__top-list'><a className='header__top-list-item' href='#gallery'>Gallery</a></li>
                    <li className='header__top-list'><a className='header__top-list-item' href='#footer'>Contact Us</a></li>
                    
                </ul>
            </div>
            <div className='header__bottom'>
            <diV className='header__bottom-sec'>
            <div className='header__bottom-sec-items'>
                <img className='header__bottom-sec-img' src={img} alt='design'></img>
                <div className='header__bottom-sec-detail'>
                <h4>march 15 2021</h4>
                <h1>Rupesh  &  Maya</h1>
                <h4>we got married</h4>
                </div>
                
            </div>
            </diV>    
            
            </div>
            
        </div>
    )
}

export default Header;