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
import Aheader from './Admin/AComan/Aheader'
import DashBoard from './Admin/APages/DashBoard'
import Blogmange from './Admin/APages/Blogmange'
import Blogadd from './Admin/APages/Blogadd'
import Carmanage from './Admin/APages/Carmanage'
import Caradd from './Admin/APages/Caradd'
import { ToastContainer } from 'react-toastify'
import Alogin from './Admin/APages/Alogin'
import Login from './Website/Pages/Login'

function App() {

  return (
    <>
    <BrowserRouter>
     <ToastContainer />
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
      <Route path='/login' element={<Login />} />


      {/* Admin */}
      <Route path='/dash' element={<DashBoard />} />
      <Route path='/blogmanage' element={<Blogmange />} />
      <Route path='/blogadd' element={<Blogadd />} />
      <Route path='/carmanage' element={<Carmanage />} />
      <Route path='/caradd' element={<Caradd />} />
      <Route path='/alogin' element={<Alogin />} />


    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
