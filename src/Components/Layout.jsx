import bgimage from '../assets/bg.jpg';

import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen bg-cover bg-center text-white' style={{ backgroundImage: `url(${bgimage})` }}>
      <div className='bg-black/60 backdrop:blur-sm '>
        {children}
      </div>
    </div>


  )
}

export default Layout
