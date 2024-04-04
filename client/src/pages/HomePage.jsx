import React from 'react'
import NavbarComp from '../components/NavbarComp'
import { Outlet } from 'react-router-dom'
import FooterComp from '../components/FooterComp'

const HomePage = () => {
  return (
    <div >
        <NavbarComp/>
        <Outlet/>
        <FooterComp/>
    </div>
  )
}

export default HomePage