import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Navbar, Nav } from 'react-bootstrap';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import SearchPage from '../search-component/search.component';
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <>
        {/* <div className='header'> */}
        {/* <NavLink className='logo-container' to="/"> */}
        {/* <Logo className='logo' /> */}
        {/* <h2>Gift Shop</h2> */}
        {/* </NavLink> */}

        {/* <div className='options'>
            <SearchPage className='searchbox' />
            <NavLink exact activeClassName='active' className='option' to='/' > POČETNA </NavLink>
            <NavLink exact activeClassName='active' className='option' to='/shop' > SHOP </NavLink>
            <NavLink exact activeClassName='active' className='option ' to='/contact'> KONTAKT </NavLink>

            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}> ODJAVA </div>
                    : (
                        <NavLink className='option' to='/signin' > PRIJAVA </NavLink>
                    )
            }
            <CartIcon />

        </div>
        {
            hidden ? null :
                <CartDropdown />
        } */}

        {/* <div className='resolution'> */}

        <Navbar bg="white" expand="lg">
            <Navbar.Brand href="#home">
                <NavLink className='logo-container' to="/">
                    {/* <Logo className='logo' /> */}
                    <h2>Gift Shop</h2>
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <SearchPage className='searchbox' />
            <CartIcon />
            {
                hidden ? null :
                    <CartDropdown />
            }
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink exact activeClassName='active' className='option' to='/' > POČETNA </NavLink>
                    <NavLink exact activeClassName='active' className='option' to='/shop' > SHOP </NavLink>
                    <NavLink exact activeClassName='active' className='option' to='/contact' > KONTAKT </NavLink>
                    {
                        currentUser ?
                            <div className='option' onClick={() => auth.signOut()}> ODJAVA </div>
                            : (
                                <NavLink className='option' to='/signin' > PRIJAVA </NavLink>
                            )
                    }
                    <CartIcon />
                </Nav>
                {/* <Form  */}
            </Navbar.Collapse>
        </Navbar>


        {/* <SearchPage className='searchbox' />
            <NavDropdown id="navbarScrollingDropdown" title="">
                <NavDropdown.Item href="#action3"><NavLink exact activeClassName='active' className='option' to='/' > POČETNA </NavLink></NavDropdown.Item>
                <NavDropdown.Item href="#action4"><NavLink exact activeClassName='active' className='option' to='/shop' > SHOP </NavLink></NavDropdown.Item>
                <NavDropdown.Item href="#action5"><NavLink exact activeClassName='active' className='option ' to='/contact'> KONTAKT </NavLink></NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}> ODJAVA </div>
                    : (
                        <NavLink className='option' to='/signin' > PRIJAVA </NavLink>
                    )
            }
                </NavDropdown.Item>
            </NavDropdown>
            <CartIcon />
            {
            hidden ? null :
                <CartDropdown />
        } */}
        {/* </div> */}
        {/* </div> */}
    </>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);