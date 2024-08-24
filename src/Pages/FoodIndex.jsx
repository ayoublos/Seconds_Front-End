import React from 'react'
import { useState, useEffect } from 'react';

// COMPONENTS
import Foods from '../Components/Foods/Foods.jsx';

export default function FoodIndex() {

  return (
    <div>
      <Foods
        listHeader={"All Food"}
        limit={0}
        onlySeconds={false}
      />
    </div>
  )
}
