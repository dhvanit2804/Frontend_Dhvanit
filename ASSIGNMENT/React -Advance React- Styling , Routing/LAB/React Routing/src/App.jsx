import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <h1 className='text-4xl bg-red-600'>Hello</h1>
    <button className='m-3 bg-amber-500'>Click Me</button>
   </div>
  )
}

export default App
