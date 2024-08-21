import React from 'react'
import { useState, useEffect } from 'react';

// COMPONENTS
import Foods from '../Components/Foods/Foods.jsx';
import Food from '../Components/Food/Food.jsx';

export default function SecondsIndex() {

  const [ foods, setFoods ] = useState([]);

  //FOODS ARRAY
  useEffect(() => {
    fetch("http://localhost:3005/food")
    .then(response => response.json())
    .then(res => setFoods(res))
    .catch(err => console.error(err))
  },[]);

  return (
    <div>
      <p className="foods-title">Your Seconds</p>
      {foods.filter(food => food.seconds === true).map(second => {
          return (
            <Food id={second.id} key={second.id} />
          )
      })}  
    </div>
  )
}
