import React from 'react';
import cat from '../img/cat.jpg';

const Cat = (props)=>{
    
    return(
        <div>
            <img src={cat} alt='catimage' 
            style={{position:'absolute', 
            left:props.state.x, 
            top:props.state.y, 
            height:'10rem', 
            width:'10rem'}}></img>
        </div>
    )
}

export default Cat;