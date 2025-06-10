import { useState } from 'react'
import './index.css'

function App() {
  return (
   <div className="flex flex-col items-center mt-8">
    <h1 className='text-4xl bg-red-600 mb-6'>Hello</h1>
    <button className="px-4 py-2 bg-blue-500 text-white rounded mb-8">Click me</button>
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src="https://tse3.mm.bing.net/th?id=OIP.QBm98QR2ZHeEaYTgwHdBPgHaEo&pid=Api&P=0&h=180" alt="Card" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Lamborginhi</div>
        <p className="text-gray-700 text-base">
          This is a description for the car Lamborginhi. It is a high-performance sports car known for its speed and luxury features.
        </p>
      </div>
    </div>
   </div>
  )
}

export default App
