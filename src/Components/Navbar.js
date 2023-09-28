import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    const [isMobile,setIsMobile]=useState([]);
  return (
    <nav className='navbar'>
        <h1 className='logo'>logo</h1>
        <ul className={isMobile?"nav-links-mob":"nav-links"} onClick={()=>setIsMobile(false)}>
            <Link to='/' className='home'><li>Home</li></Link>
            <Link to='/todolist' className='todolist'><li>Todolist</li></Link>
            <Link to='/signup' className='signup'><li>SignUp</li></Link>
            </ul>
            <button className='mob-menu-icon' onClick={()=>setIsMobile(!isMobile)}>
                {isMobile?<h1>x</h1>:<h1>=</h1>}
            </button>
    </nav>
  )
}

export default Navbar