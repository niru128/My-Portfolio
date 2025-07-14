import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const location = useLocation();
  const current = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className='bg-white dark:bg-gray-900 shadow-md px-6 py-4 sticky top-0 z-50'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-2xl text-indigo-500'>Niranjan C B</h1>

        {/* Hamburger icon for small screens */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-white'>
            {isOpen ? <HiX className='w-6 h-6' /> : <HiMenuAlt3 className='w-6 h-6' />}
          </button>
        </div>

        {/* Desktop navigation links */}
        <div className='hidden md:flex space-x-10'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-bold transition-colors duration-200 ${
                current === item.path
                  ? 'text-amber-300 underline'
                  : 'text-gray-700 dark:text-gray-300 hover:text-amber-300 hover:underline'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className='md:hidden mt-4 space-y-2'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block font-bold px-4 py-2 transition-colors duration-200 ${
                current === item.path
                  ? 'text-amber-300 underline'
                  : 'text-gray-700 dark:text-gray-300 hover:text-amber-300 hover:underline'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
