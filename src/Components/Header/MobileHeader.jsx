import React from 'react'
import { Link } from'react-router-dom'

export default function MobileHeader() {
  return (
    <div>
      <h2>Mobile Header</h2>
      <Link to='/about'>About</Link>
    </div>
  )
}
