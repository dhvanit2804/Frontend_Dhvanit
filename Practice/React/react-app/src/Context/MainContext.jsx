import React from 'react'
import ChildA from './UseContext/ChildA'

function MainContext() {
  return (
    <div className='container'>
        <h1>This is MainContext</h1>
        <ChildA />
    </div>
  )
}

export default MainContext