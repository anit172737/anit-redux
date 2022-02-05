import React from 'react';
import img from '../img/Profile pic.png';

const Realtors = (props) => {
    return(
        <div className='realtors' id='realtors'>
        <h1 className='realtors__head'>Top Realtors</h1>
        <div className='realtors__column'>
            <div className='realtors__detail realtors__detail--1'>
            <img className='realtors__img' src={img} alt='realtorsImage'></img>
            <div className="realtors__info">
                <h4 className='realtors__info--name'>Anit Dhadve</h4>
                <p className='realtors__info--sec'>120 Houses</p>
            </div>
            </div> 

            <div className='realtors__detail realtors__detail--2'>
            <img className='realtors__img' src={img} alt='realtorsImage'></img>
            <div className="realtors__info">
                <h4 className='realtors__info--name'>Anit Dhadve</h4>
                <p className='realtors__info--sec'>120 Houses</p>
            </div>
            </div> 

            <div className='realtors__detail realtors__detail--3'>
            <img className='realtors__img' src={img} alt='realtorsImage'></img>
            <div className="realtors__info">
                <h4 className='realtors__info--name'>Anit Dhadve</h4>
                <p className='realtors__info--sec'>120 Houses</p>
            </div>
            </div> 
        </div>
        </div>
    )
    
}

export default Realtors;