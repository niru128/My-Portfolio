import React from 'react'
import ProfilePic from '../assets/image.png'
import { FaMapMarkerAlt, FaUniversity, FaDownload, FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaCalendarAlt, FaBook, FaGit } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";


const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-8 overflow-auto">
      <div className="w-full max-w-2xl bg-black/40 backdrop-blur-md rounded-xl p-8 shadow-lg flex flex-col md:flex-row gap-8 text-white">

        {/* Left: Profile image and name */}
        <div className="flex flex-col items-center text-center md:w-1/3">
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-indigo-300"
          />
          <p className="font-extrabold text-3xl text-blue-500 mt-4">Niranjan C B</p>
        </div>

        {/* Right: Contact details */}
        <div className="flex flex-col gap-3 md:w-2/3">
          <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-red-600" /> Bengaluru, India</p>
          <p className="flex items-center gap-3"><FaGithub /><a href="https://github.com/niru128" target="_blank" className="hover:text-gray-400">GitHub</a></p>
          <p className="flex items-center gap-3"><FaLinkedin className="text-blue-400" /><a href="https://www.linkedin.com/in/niranjan2609" target="_blank" className="hover:text-gray-400">LinkedIn</a></p>
          <p className="flex items-center gap-3"><SiLeetcode className="text-green-700" /><a href="https://leetcode.com/u/_Niru_2002/" target="_blank" className="hover:text-gray-400">LeetCode</a></p>
          <p className="flex items-center gap-3"><FaEnvelope className="text-blue-300" /><a href="mailto:nirubasavaraj2002@gmail.com" className="hover:text-gray-400">nirubasavaraj2002@gmail.com</a></p>
          <p className="flex items-center gap-3"><FaPhone /> +91 8792262852</p>
        </div>

      </div>
    </div>

  )
}

export default Contact
