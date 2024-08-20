import './MobileNav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function MobileNav() {
  return (
    <div className='mobile-nav'>
      <Link to='food'><h2>Foods</h2></Link>
      <Link to='food/new'><h2>Add New Food</h2></Link>
      <Link to='seconds'><h2>Seconds</h2></Link>
    </div>
  )
}
