import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import '../sass/sugarbox.scss';
import img1 from '../img/sugarbox/1.jpeg';
import img2 from '../img/sugarbox/2.jpeg';
import img3 from '../img/sugarbox/3.jpeg';
import img4 from '../img/sugarbox/4.jpeg';
import img5 from '../img/sugarbox/5.jpeg';
import img6 from '../img/sugarbox/6.jpeg';
import img7 from '../img/sugarbox/7.jpeg';
import img8 from '../img/sugarbox/8.jpeg';
import img9 from '../img/sugarbox/9.jpeg';
import img10 from '../img/sugarbox/10.jpeg';
import img11 from '../img/sugarbox/11.jpeg';
import img12 from '../img/sugarbox/12.jpeg';
import img13 from '../img/sugarbox/13.jpeg';
import img14 from '../img/sugarbox/14.jpeg';
import img15 from '../img/sugarbox/15.jpeg';
import img16 from '../img/sugarbox/16.jpeg';
import img17 from '../img/sugarbox/17.jpeg';
import img18 from '../img/sugarbox/18.jpeg';


class Sugarbox extends React.Component{
    render(){
        const properties = { 
            showBullets : true,
            showFullscreenButton: true,
             thumbnailPosition:'left',
             infinite: true,
            items : [
                {
                    original: img1,
                    thumbnail: img1,
                    originalWidth: '100vw'
                },
                {
                    original: img2,
                    thumbnail: img2,
                    originalWidth: '100vw'
                },
                {
                    original: img3,
                    thumbnail: img3,
                    originalWidth: '100vw'
                },
                {
                    original: img4,
                    thumbnail: img4,
                    originalWidth: '100vw'
                },
                {
                    original: img5,
                    thumbnail: img5,
                    originalWidth: '100vw'
                },
                {
                    original: img6,
                    thumbnail: img6,
                    originalWidth: '100vw'
                },
                {
                    original: img7,
                    thumbnail: img7,
                    originalWidth: '100vw'
                },
                {
                    original: img8,
                    thumbnail: img8,
                    originalWidth: '100vw'
                },
                {
                    original: img9,
                    thumbnail: img9,
                    originalWidth: '100vw'
                },
                {
                    original: img10,
                    thumbnail: img10,
                    originalWidth: '100vw'
                },
                {
                    original: img11,
                    thumbnail: img11,
                    originalWidth: '100vw'
                },
                {
                    original: img12,
                    thumbnail: img12,
                    originalWidth: '100vw'
                },
                {
                    original: img13,
                    thumbnail: img13,
                    originalWidth: '100vw'
                },
                {
                    original: img14,
                    thumbnail: img14,
                    originalWidth: '100vw'
                },
                {
                    original: img15,
                    thumbnail: img15,
                    originalWidth: '100vw'
                },
                {
                    original: img16,
                    thumbnail: img16,
                    originalWidth: '100vw'
                },
                {
                    original: img17,
                    thumbnail: img17,
                    originalWidth: '100vw'
                },
                {
                    original: img18,
                    thumbnail: img18,
                    originalWidth: '100vw'
                },

            
        ]
        }

        return(
            <div className='sugarbox'>
                <div className='sugarbox__title'>
                <p className='sugarbox__title-sec'>
                    <h2 className='sugarbox__title-name'>Sugarbox Ceremony</h2>
                </p>
                </div>
                <div className='sugarbox__gallery'>
                <ImageGallery {...properties}/>
                </div>
                
            </div>
        )
    }
    
}

export default Sugarbox;