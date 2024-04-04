"use client";
import React from 'react'
import { Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';
const NavbarComp = () => {
  return (
    <div>
        <Navbar fluid rounded>
      <Navbar.Brand >
        <Link to="/"><img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /></Link> 
      
      </Navbar.Brand>
      <div className="flex md:order-2">
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse >
        {/* <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About Us</Navbar.Link>
        <Navbar.Link href="#">Contact US</Navbar.Link>
        <Navbar.Link href="/login">Login</Navbar.Link>
        <Navbar.Link href="#">Register</Navbar.Link> */}
        <Link to="/">HOME</Link>
        <Link to="/">CONTACT US</Link>
        <Link to="/">ABOUT US</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/register">REGISTER</Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default NavbarComp


