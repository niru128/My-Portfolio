import bgimage from '../assets/bg.jpg';

import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='h-full bg-cover bg-center text-white ' style={{ backgroundImage: `url(${bgimage})` }}>
  <div className='bg-black/60 backdrop-blur-sm min-h-screen'>
    {children}
  </div>
</div>






  )
}

export default Layout
