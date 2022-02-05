import React from 'react';
import '../scss/sidebar.scss';
import img from '../img/feature.svg';

const Sidebar = (props)=>{
    return(
        <div className='sidebar'>
            <div className='sidebar__sec'>
            <button className='sidebar__item'>
                <svg className='sidebar__img'>
                    <use xlinkHref={`${img}#icon-home3`}></use>
                </svg>
                <h1 className='sidebar__name'>Home</h1>
            </button>

            <button className='sidebar__item'>
                <svg className='sidebar__img'>
                    <use xlinkHref={`${img}#icon-airplane`}></use>
                </svg>
                <h1 className='sidebar__name'>Tourist Plan</h1>
            </button>

            <button className='sidebar__item'>
                <svg className='sidebar__img'>
                    <use xlinkHref={`${img}#icon-file-picture`}></use>
                </svg>
                <h1 className='sidebar__name'>Tour Gallery</h1>
            </button>
            </div>
            <div className='sidebar__footer'>
                <h4>CreativeAni.com</h4>
                <p>©2021-22</p>
            </div>
            
        </div>
    )
}

export default Sidebar;