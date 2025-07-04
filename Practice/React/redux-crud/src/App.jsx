import React from 'react'
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Read from './component/Read'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Read />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App