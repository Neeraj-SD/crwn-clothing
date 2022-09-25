import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss'
import Logo from '../../assets/crown.svg'

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <img className='logo' src={Logo} />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {/* <Link className='option' to='/shop'>SHOP</Link> */}
        </div>
    </div>
)

export default Header