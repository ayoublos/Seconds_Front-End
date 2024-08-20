import './App.css'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Pages/Home'
import MobileHeader from './Components/Header/MobileHeader.jsx'
import MobileNav from './Components/Footer/MobileNav.jsx'

export default function App() {
  return (
    <div className='view'>
      <header>
        <MobileHeader />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <footer>
        <div className='mobile-nav'>
          <MobileNav />
        </div>
      </footer>
    </div>
  )
}
