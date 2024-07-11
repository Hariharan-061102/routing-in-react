import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderComponent() {
  return (
    <div className='head-top'>
        <NavLink to='/' className='nav-link'>Home</NavLink>
        <NavLink to='/About' className='nav-link'>About</NavLink>
        <NavLink to='/Departments' className='nav-link'>Departments</NavLink>
        <NavLink to='/Event' className='nav-link'>Event</NavLink>

    </div>
  )
}
