import "../Foods/Foods.css";
import { useState, useEffect } from 'react';

//COMPONENTS
import Food from '../Food/Food.jsx';



export default function Foods({
  listHeader
  , limit
  , onlySeconds
}) {

    const [ restaurants, setRestaurants ] = useState([]);
    const [ foods, setFoods ] = useState([]);
    const [ seconds, setSeconds ] = useState([]);

    //FOODS ARRAY
    useEffect(() => {
        fetch("http://localhost:3005/food")
          .then(response => response.json())
          .then(res => {
            setFoods(res)
            setSeconds(res.filter(food => food.seconds === true))
          })
          .catch(err => console.error(err))
    },[])
    
    return (
        <>
            <p className="foods-title">{listHeader}</p>
            {(onlySeconds ? seconds : foods).map(food => {
                return (
                   <Food id={food.id} key={food.id} />
                )
              }).slice(0, limit ? limit : foods.length)
            }
        </>
    )
}