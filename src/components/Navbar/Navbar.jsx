import React from 'react'
import './Navbar.css'
import Logo from "./../../images/Logo.png"
export default function Navbar() {
  return (
    <>
      <nav>
       <div className='Logo1'>
        <img src={Logo} alt="" />
       </div>
       <div>
        <ul>
          <li>Pochemu u nas</li>
          <li>Menyu Burgerov</li>
          <li>Oformleniye Zakaza</li>
        </ul>
       </div>
       <div className='knopka'>
        <button>$</button>
       </div>
      </nav>
    </>
  )
}
