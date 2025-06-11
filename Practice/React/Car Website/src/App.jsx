import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <>
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
