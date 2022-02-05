import React from "react";
import img from '../img/agriculture-barley-field-beautiful-close-up-207247.jpg';
import image from '../img/beach-bench-boardwalk-clouds-462024.jpg';

const StoryPic = (props) => {
    return(
        <div className ='storyPic' id='story'>
            <img className='storyPic__image--1' src={img} alt='img_1'></img>
            <img className='storyPic__image--2' src={image} alt='img_2'></img>
        </div>
    )
}

export default StoryPic;