import React, { createContext, useState } from 'react'
import ChildD from './ChildD'
import ChildB from './ChildB'

export const data = createContext()

function ChildA() {

    const [name, setname] = useState("Dhvanit")
    const [form, setform] = useState({
        count: 0
    })

  return (
    <div>
        <h1>This is Child A</h1>

        <data.Provider value={{name, setname, form, setform}}>
            <ChildD />
            <ChildB />
        </data.Provider>

    </div>
  )
}

export default ChildA