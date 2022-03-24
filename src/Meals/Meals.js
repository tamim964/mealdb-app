import React, { useEffect, useState } from 'react';
import './Meals.css'
import Display from '../Display/Display';
import Cart from '../Cart/Cart';

const Meals = () => {
    const [meals, setMeals] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    const addToCart = (food) => {
        // console.log(food)
        if (!cart.includes(food)) {
            const newCart = [...cart, food]
            setCart(newCart)
        }
    }
    return (
        <div className='parent'>
            <div className='meal-container'>
                {
                    meals.map(meal => <Display key={meal.idMeal} meal={meal} addToCart={addToCart}></Display>)
                }
            </div>
            <div className='cart'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Meals;