import React from 'react'
import Header from './Header';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className='flex flex-col items-center justify-center antialiased bg-black border-neutral-900 text-neutral-100'>
        <Header/>
        {children}
    </div>
  )
}

export default Layout