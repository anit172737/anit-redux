import React from 'react';
import '../scss/gallery.scss';

const Gallery = ()=>{
    return(
        <div className='gallery'>
                <div className='gallery--img-1'>
                    <h2 className='gallery--name'>England</h2>
                </div>
                <div className='gallery--img-2'>
                     <h2 className='gallery--name'>Russia</h2>
                </div>
                <div className='gallery--img-3'>
                    <h2 className='gallery--name'>Italy</h2>
                </div>
                <div className='gallery--img-4'>
                    <h2 className='gallery--name'>USA</h2>
                </div>
        </div>
    )
}

export default Gallery;