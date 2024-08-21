import "../Food/Food.css";
import { useState, useEffect } from'react';


export default function Food ({ id }) {

    const [ oneSecond, setOneSecond ] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3005/food/${id}`)
        .then(response => response.json())
        .then(res => setOneSecond(res))
        .catch(err => console.error(err))
    },[]);

    useEffect(() => {
        console.log(oneSecond)
    },[oneSecond]);

    return (
        <div className="oneSecond-main-container">  
            <img className="oneSecond-image" src={oneSecond.img} alt="food image" />
            <div className="oneSecond-names-container">
                <p className="oneSecond-name">{oneSecond.name}</p>
                <p className="oneSecond-restaurant">{oneSecond.restaurant_name}</p>
                <img className="fork-icon" src="/fork-in-diagonal.svg" alt="fork icon" />
            </div>
        </div>
    )
}