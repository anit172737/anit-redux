import React from 'react';
import '../scss/header.scss';
import img from '../img/search.svg';

const Header = () => {
    return(
        <div className='header'>
            <h1 className='header__logo'>CA</h1>
            <div className='search'>
            <input type='text' className='search__bar' placeholder='search' />
            <button className='search__bar--btn'>
                <img className='search__bar--btn-1' src={img} alt='searchBtn'></img>
            </button>
            </div>
            <h1 className='header__tab'>Tour Guide</h1>
            <h1 className='header__tab'>About Us</h1>
            <h1 className='header__tab'>Contact Us</h1>
        </div>
    )
}

export default Header;