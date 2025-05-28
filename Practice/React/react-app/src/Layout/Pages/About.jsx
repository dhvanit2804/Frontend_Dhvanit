import React from 'react'
import Header from '../Coman/Header'
import { NavLink } from 'react-router-dom'
import Footer from '../../Bootstrap/Footer'

function About() {
  return (
    <div>
        <Header />
        <h1>This is About Page</h1>
        <ul className="nav bg-dark">
  
  <li className="nav-item">
    <NavLink className="nav-link" to="/about/about1">About1</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/about/about2">About2</NavLink>
  </li>
  
</ul>
<br />
<Footer />

    </div>
  )
}

export default About