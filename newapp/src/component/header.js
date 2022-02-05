import React from 'react';

const Header = (props) =>{
    return(
    <div className='header' id = 'header'>
        <h1 className='header__head'>HOMO</h1>
        <div className='header__center'>
        <h3 className='header__para'>"This is the new era of precious homes. 
        you gonna love it"</h3>
        <a className='header__button' href='#features'>Read More</a>
        </div>
        
        <div className='header__footer'>
            <caption className='header__footer--cap'>Sponsors</caption>
            <div className='header__sponsors'>
            <h4 className='header__sponsors--1'>MOTOROLA</h4>
            <h4 className='header__sponsors--2'>OYO</h4>
            <h4 className='header__sponsors--3'>NIKE</h4>
            <h4 className='header__sponsors--4'>Adidas</h4>
            </div>
            
        </div>
        
    </div>
    )  
}

export default Header;