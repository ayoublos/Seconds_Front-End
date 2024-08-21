import "../Foods/Foods.css";
import { useState, useEffect } from 'react';

//COMPONENTS
import Food from '../Food/Food.jsx';



export default function Foods({listHeader}) {

    const [ restaurants, setRestaurants ] = useState([]);
    const [ foods, setFoods ] = useState([]);
    const [ seconds, setSeconds ] = useState([]);

    //FOODS ARRAY
    useEffect(() => {
        fetch("http://localhost:3005/food")
        .then(response => response.json())
        .then(res => setFoods(res))
        .catch(err => console.error(err))
    },[])
    
    return (
        <>
            <p className="foods-title">{listHeader}</p>
            {foods.map(food => {
                return (
                   <Food id={food.id} key={food.id} />
                )
            })}     
        </>
    )
}