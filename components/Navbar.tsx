import React from 'react'
import Link from 'next/Link'
import Image from 'next/image'
import logo from '../photos/logo.svg'
import HamburgerMenu from '../photos/hamburger.png'
import {useState} from 'react'

export const Navbar = () => {

  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)

  const openHamburgerMenu = () => {
    setHamburgerMenuOpen(prevToggle => !prevToggle)
  }
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <div onClick={openHamburgerMenu} className='position-absolute hamburger'><Image src={HamburgerMenu} alt="hamburger menu" /></div>
        <a href='/' className='navLogo'>
        <Image src={logo} alt="church logo" />
        </a>
    <ul className={`navbar-nav justify-content-lg-around ${hamburgerMenuOpen === true ? 'open': 'closed'}`}>
        <Link  className='nav-link' href='/about'><li className='nav-item'>About</li></Link>
        <Link className='navLink' href='/media'><li>Media</li></Link>
        <Link href='/'><li>MMXXII</li></Link>
        <Link className='navLink' href='/connect'><li>Connect</li></Link>
        <Link className='navLink' href='/give'><li onClick={openHamburgerMenu}>Give</li></Link>
      </ul>
    </nav>
  )
}
