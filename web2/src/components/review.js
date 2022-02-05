import React from 'react';
import '../scss/review.scss';
import img from '../img/Profile pic.png';
import svg from '../img/feature.svg';

const Review = ()=>{
    return(
        <div className='review'>
            <svg className='review__svg'>
                    <use xlinkHref ={`${svg}#icon-radio-checked`}></use>
                </svg>
            <div className='review__sec'>
            <p className='review__para'>
            Nullam tincidunt, velit ac molestie tincidunt, 
            metus nibh euismod ipsum, 
            quis elementum enim ante pharetra sapien. 
            Curabitur ut nisl fermentum odio posuere vehicula.
            </p>
            <div className='review__detail'>
                <img className='review__img' src={img} alt='reviewer_pic'></img>
                <div className='review__name'>
                    <h3>Anit Dhadve</h3>
                    <p>4.5 star</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Review;