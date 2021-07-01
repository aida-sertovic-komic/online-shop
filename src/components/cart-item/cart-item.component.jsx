import React from 'react';
import { Link } from 'react-router-dom';
import './cart-item.styles.scss';

const CartItem = ({item: {id, imageUrl, price, name, quantity }}) => (
    <div className='cart-item'>
         <Link to={`/product/${id}`}><img src= {imageUrl} alt='item' /></Link>
        <div className="item-details">
            <span className='name'>{name}</span>
            <span className='price'>
                {quantity} x {price} KM </span>
        </div>
    </div>
);

export default CartItem;