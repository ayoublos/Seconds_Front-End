import React from 'react'
import { Outlet } from'react-router-dom'
import { useState, useEffect } from 'react';

//COMPONENTS
import Foods from '../Components/Foods/Foods';

export default function Home() {

  return (
    <div>
      <Foods
        listHeader={"Your Seconds"}
        limit={3}
        onlySeconds={true}/>
    </div>
  )
}

