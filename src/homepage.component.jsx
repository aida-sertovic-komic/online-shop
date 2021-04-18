import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className="menu-item">
                <div className="content">
                    <h1 className='title'>NAKIT</h1>
                    <span className='subtitle'>NARUČI</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className='title'>TORBE</h1>
                    <span className='subtitle'>NARUČI</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className='title'>ŠEŠIRI</h1>
                    <span className='subtitle'>NARUČI</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className='title'>NAOČALE</h1>
                    <span className='subtitle'>NARUČI</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className='title'>PARFEMI</h1>
                    <span className='subtitle'>NARUČI</span>
                </div>
            </div>
        </div>
    </div>
);
export default HomePage;
