import React from "react";
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';
import img6 from '../img/6.jpg';
import img7 from '../img/7.jpg';
import img8 from '../img/8.jpg';
import img9 from '../img/9.jpg';
import img10 from '../img/10.jpg';
import img11 from '../img/11.jpg';


const Gallery = (props) => {
    return(
        <div className ='gallery' id ='gallery'>
            <img className='gallery__img gallery__img--1' src={img1} alt='img1'></img>
            <img className='gallery__img gallery__img--2' src={img2} alt='img2'></img>
            <img className='gallery__img gallery__img--3' src={img3} alt='img3'></img>
            <img className='gallery__img gallery__img--4' src={img4} alt='img4'></img>
            <img className='gallery__img gallery__img--5' src={img5} alt='img5'></img>
            <img className='gallery__img gallery__img--6' src={img6} alt='img6'></img>
            <img className='gallery__img gallery__img--7' src={img7} alt='img7'></img>
            <img className='gallery__img gallery__img--8' src={img8} alt='img8'></img>
            <img className='gallery__img gallery__img--9' src={img9} alt='img9'></img>
            <img className='gallery__img gallery__img--10' src={img10} alt='img10'></img>
            <img className='gallery__img gallery__img--11' src={img11} alt='img11'></img>
            
        </div>
    )
}

export default Gallery;