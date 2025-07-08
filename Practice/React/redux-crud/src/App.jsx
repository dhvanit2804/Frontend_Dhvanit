import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Read from './component/Read'
import Navbar from './component/Navbar'
import Create from './component/Create'
import Update from './component/Update'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Read />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Update />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App