import React from 'react'
import Image from 'next/image'
import Facebook from '../photos/facebook.png'
import Instagram from '../photos/instagram.png'
import Youtube from '../photos/youtube.png'

export const Footer = () => {
  return (
    <footer className='footerContainer'>
        <div className='footerTopDiv'>
        <div className="footerLeftDiv">
            <h2>Contact Info</h2>
            <p>Phone: 850-261-5855</p>
            <p>Email: church@church.com</p>
            <p>Address: 4289 Berryhill Rd, Pace, FL 32571</p>
        </div>
        <div className="footerMiddleDiv">
            <h2>Service Times</h2>
            <p>Wednesday: 6:00PM</p>
            <p>Sunday: 10:00AM</p>
        </div>
        <div className="footerRightDiv">
            <h2>Socials</h2>
            <a href='https://www.facebook.com/mytogetherchurch' target='_blank' rel="noreferrer" style={{marginRight: '1rem'}}>
            <Image src={Facebook} alt='facebook' />
            </a>
            <a href='https://www.instagram.com/my_together_church/' target='_blank' rel="noreferrer" style={{marginRight: '1rem'}}>
            <Image src={Instagram} alt='instagram' />
            </a>
            <a href='https://www.youtube.com/channel/UC-kZi2y7hf3I43EffbZXQCg' target='_blank' rel="noreferrer">
            <Image src={Youtube} alt='youtube'/>
            </a>
        </div>
        </div>
        <div className="footerBottomDiv mb-4">
            <h2 className='fs-6'>© 2022 Together Church. All rights reserved.</h2>
        </div>
    </footer>
  )
}
