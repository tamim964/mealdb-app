import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props.cart)
    return (
        <div className='cart'>
            <h2>Cart</h2>
            <p>items: {props.cart}</p>
        </div>
    );
};

export default Cart;