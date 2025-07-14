import React from 'react'
import { projects } from '../data/Projects.js'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  return (
    <>

    
    <h2 className='text-4xl font-extrabold px-4 py-6 text-shadow-white'>MY PROJECTS</h2>
    <div className='px-4 py-6 max-w-pxl mx-auto text-white '>
     <div className='h-[75vh] overflow-y-auto pr-2 custom-scroll'>

     
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 '>
        {projects.map((project,index)=>(
          <div key={index} className='bg-white/10 backdrop-blur p-5 rounded-xl shadow hover:scale-[1.02] transition-all duration-300 justify-between flex flex-col h-full'>
            <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-lg mb-4' />
            <h3 className='text-lg text-indigo-400'>{project.title}</h3>
            <p className='text-sm'>{project.description}</p>
            <div className='flex flex-wrap gap-2 mt-2'>
                {project.tech.map((tech,i)=>(
                  <span key={i} className='bg-indigo-700 text-white px-2 py-0.5 text-xs rounded-full'>{tech}</span>
                ))}
            </div>
            {
              project.github &&(
                <a href={project.github} target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline mt-2 inline-block '>View on GitHub</a>
              )
            }
          </div>
        )) }
        <div className='flex items-center'>
          <button className='bg-indigo-500 text-md text-white font-bold py-2 px-4  rounded-4xl hover:cursor-pointer hover:bg-indigo-950 transition-all duration-300'><a href='https://github.com/niru128?tab=repositories' target='_blank'>View more on Github</a></button>
        </div>
      </div>
      </div>
      


    </div>
    </>
  )
}

export default Projects
