import React from "react";
import img from '../img/feature.svg';

const Features = (props) => {
    return(
        <div className ='features' id='features'>
            <div className="feature">
            <svg className='feature__icon'>
                <use xlinkHref={`${img}#icon-music`}></use>
            </svg>
            <h4 className='feature__head'>Rhythmic Environment</h4>
            <p className='feature__para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pellentesque commodo laoreet pellentesque. 
                Suspendisse risus diam, venila ice Lorem ipsum commodo laoreet pellentesque.</p>
            </div>
            <div className="feature">
            <svg className='feature__icon'>
                <use xlinkHref={`${img}#icon-earth`}></use>
            </svg>
            <h4 className='feature__head'>World's Best Luxury Homes</h4>
            <p className='feature__para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pellentesque commodo laoreet pellentesque. 
                Suspendisse risus diam, venila ice</p>
            </div>
            <div className="feature">
            <svg className='feature__icon'>
                <use xlinkHref={`${img}#icon-book`}></use>
            </svg>
            <h4 className='feature__head'>Photobook of Beautiful Homes</h4>
            <p className='feature__para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pellentesque commodo laoreet pellentesque. 
                Suspendisse risus diam, venila ice</p>
            </div>
            <div className="feature">
            <svg className='feature__icon'>
                <use xlinkHref={`${img}#icon-trophy`}></use>
            </svg>
            <h4 className='feature__head'>People Choice Award</h4>
            <p className='feature__para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pellentesque commodo laoreet pellentesque. 
                Suspendisse risus diam, venila ice</p>
            </div>
            <div className="feature">
            <svg className='feature__icon'>
                <use xlinkHref={`${img}#icon-rocket`}></use>
            </svg>
            <h4 className='feature__head'>Feel the Ride</h4>
            <p className='feature__para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pellentesque commodo laoreet pellentesque. 
                Suspendisse risus diam, venila ice</p>
            </div>
            <div className="feature">
            <svg className='feature__icon'>
                <use xlinkHref={`${img}#icon-cart`}></use>
            </svg>
            <h4 className='feature__head'>Purchase Your Dream Home</h4>
            <p className='feature__para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pellentesque commodo laoreet pellentesque. 
                Suspendisse risus diam, venila ice laoreet pellentesque. 
                Suspendisse risus diam</p>
            </div>
        </div>
    )
}

export default Features;