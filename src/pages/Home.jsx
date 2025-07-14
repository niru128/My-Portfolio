import React from 'react'
import { Link } from 'react-router-dom'

import myImage from '../assets/image.png'

const Home = () => {
  return (
    <>
      

      <div className='h-[91.1vh] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4 '>

        

        <img src={myImage} alt='Niranjan C B' className='w-75 h-75 rounded-full object-cover border-4 border-indigo-500 shadow-lg ' />

        <h1 className='text-4xl font-bold mt-4 mb-4 md:text-6xl text-amber-300 drop-shadow-md'>Hey!!, I'm Niranjan C B👋</h1>
        <p className='text-lg md:text-xl max-w-xl font-semibold'>A passionate Full Stack Developer building modern, performant, and user-focused web apps.</p>

        <Link to='/about'><button className='bg-yellow-500 px-4 py-3 rounded-full mt-4 duration-300 transition-discrete text-black font-extrabold hover:bg-yellow-300 hover:cursor-pointer'  >Know more about me</button></Link>

        


      </div>
    </>
  )
}

export default Home
