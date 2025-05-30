import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Notfound() {

    const redirect = useNavigate()

    const backhome=()=>{
        redirect("/")
    }

  return (
    <div>
        <h1 className='text-danger text-center fs-1 my-5'>404 Not Found Page</h1>
        <Link to="/" className='btn btn-info'>Back to home</Link>
        <button onClick={backhome} className='btn btn-success'>Back to Home</button>
    </div>
  )
}

export default Notfound