import { useState } from 'react'
import Header from './Website/Coman/Header'
import Home from './Website/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Website/Pages/About'
import Services from './Website/Pages/Services'
import Blog from './Website/Pages/Blog'
import Contact from './Website/Pages/Contact'
import Features from './Website/Pages/Features'
import Car from './Website/Pages/Car'
import Team from './Website/Pages/Team'
import Testimonial from './Website/Pages/Testimonial'
import Notfound from './Website/Pages/Notfound'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/features' element={<Features />} />
      <Route path='/car' element={<Car />} />
      <Route path='/team' element={<Team />} />
      <Route path='/testimonial' element={<Testimonial />} />
      <Route path='*' element={<Notfound />} />
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
