import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
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
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }
        <div className='total'>
            <span> UKUPNO: {total} KM</span>
        </div>
        
    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems:selectCartItems, 
    total: selectCartTotal
});


export default connect(mapStateToProps)(CheckoutPage);