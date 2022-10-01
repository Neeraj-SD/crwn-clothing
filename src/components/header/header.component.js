import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss'
import Logo from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <img className='logo' src={Logo} alt='crwn logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            ) : (
                <Link className='option' to='/signIn' >SIGN IN</Link>

            )

            }
        </div>
    </div>
)

export default Header