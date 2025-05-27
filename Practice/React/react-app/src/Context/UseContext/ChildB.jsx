import React, { useContext } from 'react'
import { data } from './ChildA'

function ChildB() {

    const {form, setform} = useContext(data)

  return (
    <div>
        <h1>This is Child B</h1>

        <h1>Hello Count: {form.count}</h1>
        <button onClick={()=>setform({count: form.count + 1})}>Increment</button>
        <button className='ms-3' onClick={()=>setform({count: form.count - 1})}>Decrement</button>
    </div>
  )
}

export default ChildB