import React from 'react'
import Aheader from '../AComan/Aheader'
import Header from '../../Website/Coman/Header'
import Navdata from '../AComan/Navdata'

const DashBoard = () => {
  return (
    <>
    <Aheader />
    <Navdata title="Dashboard" name="Dashboard" />
    <div>
      <h1>Hello This is Admin Dashboar</h1>
    </div>
    </>
  )
}

export default DashBoard