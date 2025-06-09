import { useState } from 'react'
import Task1 from './Lists, Keys/Task1'
import Task2 from './Lists, Keys/Task2'
import Question1 from './hooks/Question1'
import Question2 from './hooks/Question2'

function App() {

  return (
    <>
      <div className='container mt-5'>
        <h1>Hello This is My React APP</h1>
        {/* <Task1 />
        <Task2 /> */}
        {/* <Question1 /> */}
        <Question2 />
      </div>
    </>
  )
}

export default App
