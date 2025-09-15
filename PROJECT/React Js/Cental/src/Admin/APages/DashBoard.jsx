import React from 'react'
import Aheader from '../AComan/Aheader'
import Header from '../../Website/Coman/Header'
import Navdata from '../AComan/Navdata'

const DashBoard = () => {
  return (
    <>
    <Aheader />
    <Navdata title="Dashboard" name="Dashboard" />
    <div className='container'>
      <h1 className='text-center mt-2'>Hello Welcome to Admin Dashboard...</h1>
    </div>
    </>
  )
}

export default DashBoard