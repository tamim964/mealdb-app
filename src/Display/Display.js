import React from 'react';
import './Display.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Display = (props) => {
    const { strMealThumb, strMeal, strArea } = props.meal
    const { addToCart } = props
    return (
        <div className='single-meal'>
            <img className='image' src={strMealThumb} alt=''></img>
            <div>
                <h3>Name: {strMeal}</h3>
                <h5>Area: {strArea}</h5>
            </div>
            <button onClick={() => addToCart(strMeal)} className='btn-cart'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Display;