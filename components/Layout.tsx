import React, { FC } from 'react'
import { Footer } from './Footer';
import { Navbar } from './Navbar'

interface LayoutProps {
    children: React.ReactNode;
 }

export const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className='layoutContainer'>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}
