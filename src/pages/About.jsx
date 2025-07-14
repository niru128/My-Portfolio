  import React from 'react';
  import ProfilePic from '../assets/image.png'
  import { FaMapMarkerAlt, FaUniversity, FaDownload, FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaCalendarAlt, FaBook, FaGit } from 'react-icons/fa';

  import { SiLeetcode } from "react-icons/si";

  const About = () => {

    return (

      <>


        <div className='h-full flex flex-col md:flex-row gap-6 px-4 py-6  text-white max-w-pxl mx-auto'>
          {/* Left section */}

          <div className='w-full md:w-1/4 md:h-[calc(100vh-5rem)]  flex flex-col items-center justify-start gap-6  md:top-16 px-2 py-2 '>
          
            <img src={ProfilePic} alt='Profile' className='w-40 h-40 rounded-full object-cover border-4 border-indigo-300' />

            <div><p className='font-extrabold text-4xl text-blue-500'>Niranjan C B</p></div>

            <div className='text-center justify-start'>
              <p className='flex items-center  gap-4 text-lg font-bold'><FaUniversity className='text-blue-500' /> AMC Engineering College </p>
              <p className='flex items-center  gap-4 text-md'><FaBook className='text-amber-600' />Computer Science and Engineering</p>
              <p className='flex items-center  gap-4 text-md'><FaCalendarAlt />2021 - 2025</p>
              <p className='flex  items-center  gap-4 text-lg'><FaMapMarkerAlt className='text-red-600' /> Bengaluru, india</p>
              <p className='flex  items-center  gap-4 text-lg'><FaGithub /><a href='https://github.com/niru128' className='hover:text-gray-500 ' target='_blank'> Github</a></p>
              <p className='flex  items-center  gap-4 text-lg'><FaLinkedin className='text-blue-300' /> <a href='https://www.linkedin.com/in/niranjan2609' target='_blank' className='hover:text-gray-500'>LinkedIn</a></p>
              <p className='flex  items-center  gap-4 text-lg'><SiLeetcode className="text-green-900 text-1xl"/><a href='https://leetcode.com/u/_Niru_2002/' target='_blank' className='hover:text-gray-500'>LeetCode</a></p>
              <p className='flex  items-center  gap-4 text-lg'><FaEnvelope className='text-blue-700' /> <a href='mailto:nirubasavaraj2002@gmail.com' className='hover:text-gray-500'>nirubasavaraj2002@gmail.com</a> </p>
              <p className='flex  items-center  gap-4 text-lg'><FaPhone />+91 8792262852</p>
            </div>
          </div>

          {/* Right content */}
          <div className='w-full md:w-3/4 flex flex-col overflow-y-auto max-h-[calc(100vh-5rem)] pr-4 space-y-10 custom-scroll'>


            <div>
              <h2 className='text-3xl font-extrabold text-blue-400 mb-4 underline'>About me</h2>
              <p className='leading-relaxed'>I'm <span className='font-bold'>Niranjan C B</span> a passionate full-stack developer with expertise in Java, Python, and the MERN stack. I enjoy building scalable web applications and real-time systems with a focus on performance and user experience. My interests span across web development, AI/ML integration, and Generative AI. I thrive in collaborative environments and love turning ideas into functional digital products. Always eager to learn and grow, I stay up to date with the latest technologies and trends. </p>
            </div>

            <div>
              <h2 className='text-3xl font-extrabold text-blue-400 mb-4 underline'>Professional Experience</h2>
              <ul className='list-disc list-inside space-y-1 text-base'>
                <li className='text-amber-300 font-bold'>Network Security Engineer Intern at <a href='https://www.linkedin.com/company/v5-techsol-india-llp/' target='_blank' className='text-white hover:text-blue-600 hover:underline transition-all duration-300'>V5 TechSol Pvt LLP</a> (Sept 2024 - Jan 2025)</li>
              </ul> 

            </div>

            <div>
              <h2 className='text-3xl font-extrabold text-blue-400 mb-4 underline'>Skills</h2>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "Java", "Python", "React", "Node.js", "MongoDB", "Express", "Tailwind", "Socket.IO", "JWT", "ShadCN", "SQL", "NoSQL", "CSS3", "HTML5", "Streamlit", "TensorFlow", "Scikit-learn", "matplotlib", "Machine Learning", "Object Oriented Programming", "Computer Networks", "Database Management System", "Data structures and Algorithms", "Postman", "MongoDB Atlas", "FrontEnd Development", "Backend development", "ES6"].map(skill => (
                  <span
                    key={skill}
                    className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-bold shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className='text-3xl font-extrabold text-blue-400 mb-4 underline'>Certifications</h3>
              <ul className='list-disc list-inside space-y-1 text-base'>

                <li className=' text-amber-300 font-bold'><a href='/Certificates/MERN.pdf' target='_blank' className='hover:text-blue-600 hover:underline transition-all duration-300'>Full stack development - Udemy</a></li>
                <li className=' text-amber-300 font-bold'><a href='/Certificates/J  avaudemy.pdf' target='_blank' className='hover:text-blue-600 hover:underline transition-all duration-300'>Java Complete bootcamp - Udemy</a></li>
                <li className=' text-amber-300 font-bold'><a href='/Certificates/cloud.pdf' target='_blank' className='hover:text-blue-600 hover:underline transition-all duration-300'>Cloud Security fundamentals - Palo Alto Networks</a></li>
                <li className=' text-amber-300 font-bold'><a href='/Certificates/network.pdf' target='_blank' className='hover:text-blue-600 hover:underline transition-all duration-300'>Network Security Fundamentals - Palo Alto Networks</a></li>
                <li className=' text-amber-300 font-bold'><a href='/Certificates/cyber.pdf' target='_blank' className='hover:text-blue-600 hover:underline transition-all duration-300'>Cyber Security Fundamentals - Palo Alto Networks</a></li>

              </ul>
            </div>

            <div>
              <h2 className='text-3xl font-extrabold text-blue-400 mb-4 underline'>RESUME</h2>
              <a href='' download className='inline-flex gap-1 p-3 items-center hover:bg-indigo-600 text-white font-semibold rounded-full shadow transition-all duration-300'><FaDownload />Download Resume</a>
            </div>

          </div>


        </div>
      </>
    )
  }

  export default About
