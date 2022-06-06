import React from 'react'
import Link from 'next/Link'
import Image from 'next/image'
import logo from '../photos/logo.svg'

export const Navbar = () => {
  return (
    <ul className='navList'>
        <div className="navLogo">
        <Link href='/'>
        <Image src={logo} alt="" />
        </Link>
        </div>
        <li><Link className='navLink' href='/about'>About</Link></li>
        <li><Link className='navLink' href='/media'>Media</Link></li>
        <li className='navLink'><Link href={'/'}>MMXXII</Link></li>
        <li><Link className='navLink' href='/connect'>Connect</Link></li>
        <li><Link className='navLink' href='/give'>Give</Link></li>
      </ul>
  )
}
