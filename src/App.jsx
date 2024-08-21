import './App.css'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import MobileHeader from './Components/Header/MobileHeader.jsx'
import FoodIndex from './Pages/FoodIndex.jsx'
import SecondsIndex from './Pages/SecondsIndex.jsx'
import NewFood from './Pages/NewFood.jsx'
import FoodShow from './Pages/FoodShow.jsx'
import EditFood from './Pages/EditFood.jsx'
import About from './Pages/About.jsx'
import FourOFour from './Pages/FourOFour.jsx'
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
          <Route path='/food' element={<FoodIndex />} />
          <Route path='/seconds' element={<SecondsIndex />} />
          <Route path='/food/new' element={<NewFood />} />
          <Route path='/food/:id' element={<FoodShow />} />
          <Route path='/food/:id/edit' element={<EditFood />} />
          <Route path='/about' element={<About />} />
      
          <Route path='*' element={<FourOFour/>} />
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
