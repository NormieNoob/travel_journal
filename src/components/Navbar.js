import React from 'react'
import globeImg from '../images/Globe.png'

function Navbar() {
  return (
    <nav className='navbar'>
      <img src={globeImg} alt='Globe image' />
      <h3>my travel journal.</h3>
    </nav>
  )
}

export default Navbar
