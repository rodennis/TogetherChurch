import React from 'react'
import Image from 'next/image'
import AboutBanner from '../photos/pastorPreaching.svg'
import DownArrow from '../photos/downArrow.svg'
import { Link } from 'react-scroll'

const about = () => {
  return (
    <div className='aboutContainer'>
        <div className='aboutBannerDiv'>
            <Image src={AboutBanner} alt='pastor preaching banner'/>
            <div>
            <h2>About Us</h2>
            <Link to="test" smooth={true} duration={1000} className='downArrowLink'>
            <Image src={DownArrow} alt='downward arrow'/>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default about