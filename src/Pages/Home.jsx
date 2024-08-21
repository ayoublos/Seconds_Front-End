import React from 'react'
import { Outlet } from'react-router-dom'
import { useState, useEffect } from 'react';

//COMPONENTS
import Seconds from '../Components/Seconds';

export default function Home() {

  return (
    <div>
      <Outlet />
      <Seconds />
    </div>
  )
}
