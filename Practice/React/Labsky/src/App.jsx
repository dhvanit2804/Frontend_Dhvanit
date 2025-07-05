import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Website/Pages/Home'
import About from './Website/Pages/About'
import Service from './Website/Pages/Service'
import Features from './Website/Pages/Features'
import Notfound from './Website/Pages/Notfound'
import Contact from './Website/Pages/Contact'
import Team from './Website/Pages/Team'
import Testimonial from './Website/Pages/Testimonial'
import Appoinment from './Website/Pages/Appoinment'
import Blog from './Website/Pages/Blog'
import Dashboard from './Admin/Apages/Dashboard'
import Blogmanage from './Admin/Apages/Blogmanage'
import Blogadd from './Admin/Apages/Blogadd'
import Alogin from './Admin/Apages/Alogin'
import { ToastContainer } from 'react-toastify'
import Login from './Website/Pages/Login'
import Registration from './Website/Pages/Registration'
import Useredit from './Website/Pages/Useredit'

function App() {

  return (
    <>
      <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Service />} />
        <Route path='/features' element={<Features />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Notfound />} />
        <Route path='/team' element={<Team />} />
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path='/appoinment' element={<Appoinment />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Registration />} />
        <Route path='/edit' element={<Useredit />} />


        {/* Admin */}
      <Route path='/dash' element={<Dashboard />} />
      <Route path='/blogmanage' element={<Blogmanage />} />
      <Route path='/blogadd' element={<Blogadd />} />
      <Route path='/alogin' element={<Alogin />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
