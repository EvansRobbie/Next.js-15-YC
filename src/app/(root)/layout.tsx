import Navbar from '@/components/nav/navbar'
import React from 'react'

 const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
  
      <main
        className={`font-work-sans`}
      >
        <Navbar/>
        {children}
      </main>

  )
}

export default Layout
