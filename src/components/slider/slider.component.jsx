import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
'images/photo0.jpeg',
'images/photo1.jpeg',
'images/photo2.jpeg',
'images/photo4.jpeg',
];

const Slider = () => {
    return (
        <div className='slide-container'>
            <Slide>
                <div className='image-container'>
                    <img src={slideImages[0]} />
                </div>
            </Slide>
            
        </div>
    );
}

export default Slider;