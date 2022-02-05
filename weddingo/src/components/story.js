import React from 'react';
import '../sass/story.scss';
import groom from '../img/groom.JPG';
import bride from '../img/bride.jpg';

const Story =(props)=>{
    return(
        <div className='story'>
            <div className='story__title'>
                <p className='story__title-sec'><h2 className='story__title-name'>About Bride & Groom</h2></p>
            </div>
            <div className='story__groom'>
                <div className='story__groom-detail story__groom-detail-1'>
                    <span className='story__groom-quo'>&ldquo;</span> 
                    <p className='story__groom-para'>My name is Rupesh. 
                    By profession I'm a Graphics Designer.
                    My favourite game is Cricket and I really like to play Cricket as well.
                    </p>
                    </div>
                <img className='story__groom-img' src={groom} alt='groom-img'></img>
            </div>
            
            <div className='story__groom'>
                <div className='story__groom-detail story__groom-detail-2'>
                <span className='story__groom-quo'>&ldquo;</span>
                    <p className='story__groom-para'>My name is Maya.
                    I work as a Accountant at LeafTech Private Limited.
                    I like to explore new things, also I like to travel and visit new places.
                    </p>
                    </div>
                <img className='story__groom-img story__brideImg' src={bride} alt='bride-img'></img>
            </div>
        </div>
    )
}

export default Story;