import "../Food/Food.css";
import { useState, useEffect } from'react';


export default function Food ({ id }) {

    const [ oneFood, setOneFood ] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3005/food/${id}`)
        .then(response => response.json())
        .then(res => setOneFood(res))
        .catch(err => console.error(err))
    },[]);

    useEffect(() => {
        console.log(oneFood)
    },[oneFood]);

    return (
        <div className="oneFood-main-container">  
            <img className="oneFood-image" src={oneFood.img} alt="food image" />
            <div className="oneFood-names-container">
                <p className="oneFood-name">{oneFood.name}</p>
                <p className="oneFood-restaurant">{oneFood.restaurant_name}</p>
                <img className="fork-icon" src="/fork-in-diagonal.svg" alt="fork icon" />
            </div>
        </div>
    )
}