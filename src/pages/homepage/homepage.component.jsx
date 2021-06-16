import React from 'react';
import Slider from '../../components/slider/slider.component';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <Slider />
        <Directory />
    </div>
);
export default HomePage;
