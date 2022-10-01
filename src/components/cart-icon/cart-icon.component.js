import React from 'react';

import './cart-icon.styles.scss'
import { ReactComponent as Icon } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux';

const CartIcon = ({ toggleCart }) => (
    <div className='cart-icon' onClick={toggleCart} >
        <Icon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)