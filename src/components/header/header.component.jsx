import React from 'react';
import  { NavLink } from 'react-router-dom';
import {connect} from  'react-redux';
import { createStructuredSelector } from 'reselect';

import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropown/cart-dropdown.component';
import  { selectCartHidden } from '../../redux/cart/cart.selectors';
import  { selectCurrentUser } from '../../redux/user/user.selector';
import './header.styles.scss';

const Header =  ({ currentUser, hidden }) => (
    <div className='header'>
        <NavLink className='logo-container' to="/">
            {/* <Logo className='logo' /> */}
            <h2>Gift Shop</h2>
        </NavLink>
        
        <div className='options'>
            <NavLink exact activeClassName='active' className='option' to='/shop' > SHOP </NavLink>
            <NavLink  exact activeClassName='active' className='option ' to='/contact'> CONTACT </NavLink>
            {
                currentUser ? 
                <div className='option' onClick= { () => auth.signOut()}> SIGN OUT </div>
                : (
                <NavLink className='option' to='/signin' > SIGN IN </NavLink> 
                )
            }
            <CartIcon />
            
        </div>
        {
            hidden ? null :
            <CartDropdown />}
    </div>
);

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);