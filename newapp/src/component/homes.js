import React from "react";
import '../css/homes.scss';
import img from '../img/feature.svg';
import home1 from '../img/home1.jpg';
import home2 from '../img/home2.jpg';
import home3 from '../img/home3.jpg';
import home4 from '../img/home4.jpg';
import home5 from '../img/home5.jpg';
import home6 from '../img/home6.jpg';


const Home = (props) => {
    return(
        <div className ='home' id='homes'>
            <div className='home__sec' >
                <img className='home__img home__img--1' src={home1} alt='home1'></img>
                <div className='home__name'>Sealand</div>
                <div className='home__detail--sec'>
                    <div className='home__detail'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-key`}></use>
                        </svg>
                        <h4 className='home__detail--name'>₹ 200,000</h4>
                    </div>
                    <div className='home__detail'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-users`}></use>
                        </svg>
                        <h4 className='home__detail--name'>5 rooms</h4>
                    </div>
                    <div className='home__detail'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-location2`}></use>
                        </svg>
                        <h4 className='home__detail--name'>usa</h4>
                    </div>
                    <div className='home__detail'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-star-full`}></use>
                        </svg>
                        <h4 className='home__detail--name'>1</h4>
                    </div>
                </div>
                <div className='home__footer'>Buy now</div>
            </div>

            <div className='home__sec' >
                <img className='home__img home__img--2' src={home2} alt='home2'></img>
                <div className='home__name'>Sealand</div>
                <div className='home__detail--sec'>
                    <div className='home__detail'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-key`}></use>
                        </svg>
                        <h4 className='home__detail--name'>₹ 200,000</h4>
                    </div>
                    <div className='home__detail'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-users`}></use>
                        </svg>
                        <h4 className='home__detail--name'>5 rooms</h4>
                    </div>
                    <div className='home__detail'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-location2`}></use>
                        </svg>
                        <h4 className='home__detail--name'>usa</h4>
                    </div>
                    <div className='home__detail'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-star-full`}></use>
                        </svg>
                        <h4 className='home__detail--name'>1</h4>
                    </div>
                </div>
                <div className='home__footer'>Buy now</div>
            </div>

            <div className='home__sec' >
                <img className='home__img home__img--3' src={home3} alt='home3'></img>
                <div className='home__name'>Sealand</div>
                <div className='home__detail--sec'>
                    <div className='home__detail'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-key`}></use>
                        </svg>
                        <h4 className='home__detail--name'>₹ 200,000</h4>
                    </div>
                    <div className='home__detail'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-users`}></use>
                        </svg>
                        <h4 className='home__detail--name'>5 rooms</h4>
                    </div>
                    <div className='home__detail'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-location2`}></use>
                        </svg>
                        <h4 className='home__detail--name'>usa</h4>
                    </div>
                    <div className='home__detail'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-star-full`}></use>
                        </svg>
                        <h4 className='home__detail--name'>1</h4>
                    </div>
                </div>
                <div className='home__footer'>Buy now</div>
            </div>

            <div className='home__sec' >
                <img className='home__img home__img--4' src={home4} alt='home4'></img>
                <div className='home__name'>Sealand</div>
                <div className='home__detail--sec'>
                    <div className='home__detail'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-key`}></use>
                        </svg>
                        <h4 className='home__detail--name'>₹ 200,000</h4>
                    </div>
                    <div className='home__detail'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-users`}></use>
                        </svg>
                        <h4 className='home__detail--name'>5 rooms</h4>
                    </div>
                    <div className='home__detail'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-location2`}></use>
                        </svg>
                        <h4 className='home__detail--name'>usa</h4>
                    </div>
                    <div className='home__detail'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-star-full`}></use>
                        </svg>
                        <h4 className='home__detail--name'>1</h4>
                    </div>
                </div>
                <div className='home__footer'>Buy now</div>
            </div>

            <div className='home__sec' >
                <img className='home__img home__img--5' src={home5} alt='home5'></img>
                <div className='home__name'>Sealand</div>
                <div className='home__detail--sec'>
                    <div className='home__detail'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-key`}></use>
                        </svg>
                        <h4 className='home__detail--name'>₹ 200,000</h4>
                    </div>
                    <div className='home__detail'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-users`}></use>
                        </svg>
                        <h4 className='home__detail--name'>5 rooms</h4>
                    </div>
                    <div className='home__detail'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-location2`}></use>
                        </svg>
                        <h4 className='home__detail--name'>usa</h4>
                    </div>
                    <div className='home__detail'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-star-full`}></use>
                        </svg>
                        <h4 className='home__detail--name'>1</h4>
                    </div>
                </div>
                <div className='home__footer'>Buy now</div>
            </div>

            <div className='home__sec'>
                <img className='home__img home__img--6' src={home6} alt='home6'></img>
                <div className='home__name'>Sealand</div>
                <div className='home__detail--sec'>
                    <div className='home__detail--1'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-key`}></use>
                        </svg>
                        <h4 className='home__detail--name'>₹ 200,000</h4>
                    </div>
                    <div className='home__detail--2'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-users`}></use>
                        </svg>
                        <h4 className='home__detail--name'>₹ 200,000</h4>
                    </div>
                    <div className='home__detail--3'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-location2`}></use>
                        </svg>
                        <h4 className='home__detail--name'>₹ 200,000</h4>
                    </div>
                    <div className='home__detail--4'>
                        <svg className='home__detail--img'>
                            <use xlinkHref={`${img}#icon-star-full`}></use>
                        </svg>
                        <h4 className='home__detail--name'>₹ 200,000</h4>
                    </div>
                </div>
                <div className='home__footer'>Buy now</div>
            </div>
        </div>
    )
}

export default Home;