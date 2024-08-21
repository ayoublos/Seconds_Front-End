import "../Foods/Foods.css";
import { useState, useEffect } from 'react';

//COMPONENTS
import Food from '../Food/Food.jsx';



export default function Foods() {

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
    

    //RESTAURANTS ARRAY
    useEffect(() => {
        fetch("http://localhost:3005/restaurant")
        .then(response => response.json())
        .then(res => setRestaurants(res))
        .catch(err => console.error(err))
    },[])


    //SECONDS ARRAY
    useEffect(() => {
        setSeconds(foods.filter(food => food.seconds === true))
    },[foods]);

    //-------------------------TESTING PURPOSES---------------------------------
    useEffect(() => {
        console.log(foods,"Foods Array")
    }, [foods])

    useEffect(() => {
        console.log(restaurants, "Restaurants Array")
    }, [restaurants])

    useEffect(() => {
        console.log(seconds, "Seconds Array")
    }, [seconds])
    //--------------------------------------------------------------------------


    return (
        <>
            <p className="seconds-title">Your Seconds</p>
            {foods.filter(food => food.seconds === true).map(second => {
                return (
                   <Food id={second.id} key={second.id} />
                )
            })}     
        </>
    )
}