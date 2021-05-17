import React from 'react';

import './checkout.styles.scss';

const CheckoutPage = () => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Proizvod</span>
            </div>
            <div className='header-block'>
                <span>Opis</span>
            </div>
            <div className='header-block'>
                <span>Količina</span>
            </div>
            <div className='header-block'>
                <span>Cijena</span>
            </div>
            <div className='header-block'>
                <span>Ukloni</span>
            </div>
        </div>
    </div>
);

export default CheckoutPage;