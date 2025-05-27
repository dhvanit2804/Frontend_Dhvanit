import React, { useContext } from 'react'
import { data } from './ChildA'

function ChildD() {
    const {name, setname} = useContext(data)

  return (
    <div>
        <h1>This is Child D</h1>

        <h1>Hello Name: {name}</h1>
        <button onClick={()=>setname("Meet")}>Change Name</button>
    </div>
  )
}

export default ChildD