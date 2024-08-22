import React from 'react'
import { useState, useEffect } from 'react';

// COMPONENTS
import Foods from '../Components/Foods/Foods.jsx';

export default function FoodIndex() {

  

  return (
    <div>
      <p className="foods-title">All Food</p>
      <Foods />
    </div>
  )
}
