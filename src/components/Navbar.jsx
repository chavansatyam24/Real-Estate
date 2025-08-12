import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div>
      {/* Navbar container */}
      <div className='fixed top-0 left-0 w-full z-10 bg-black/70 backdrop-blur-sm'>
        <div className='container mx-0 flex justify-between items-center py-4 px-6 md:px-20 lg:px-18'>
          {/* Logo */}
          <img src={assets.logo} alt="Logo" />

          {/* Desktop Menu */}
          <ul className='hidden md:flex gap-10 text-white justify-center items-center drop-shadow-[0_3px_4px_rgba(0,0,0,0.9)]'>
            <a href='#Header' className='cursor-pointer hover:text-gray-300 underline underline-offset-4 decoration-1 font-light'>Home</a>
            <a href='#About' className='cursor-pointer hover:text-gray-300 underline underline-offset-4 decoration-1 font-light'>About</a>
            <a href='#Projects' className='cursor-pointer hover:text-gray-300 underline underline-offset-4 decoration-1 font-light'>Projects</a>
            <a href='#Testimonials' className='cursor-pointer hover:text-gray-300 underline underline-offset-4 decoration-1 font-light'>Testimonials</a>
          </ul>

          {/* Mobile Menu Icon */}
          <img
            onClick={() => setShowMobileMenu(true)}
            src={assets.menu_icon}
            className='md:hidden w-7 cursor-pointer'
            alt="Menu"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className='fixed md:hidden w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all z-20'>
          <div className='flex justify-end p-6 cursor-pointer'>
            <img
              src={assets.cross_icon}
              className='w-6'
              onClick={() => setShowMobileMenu(false)}
              alt="Close"
            />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <a onClick={() => setShowMobileMenu(false)} href='#Header' className='px-4 py-2 rounded-full inline-block'>Home</a>
            <a onClick={() => setShowMobileMenu(false)} href='#About' className='px-4 py-2 rounded-full inline-block'>About</a>
            <a onClick={() => setShowMobileMenu(false)} href='#Projects' className='px-4 py-2 rounded-full inline-block'>Projects</a>
            <a onClick={() => setShowMobileMenu(false)} href='#Testimonials' className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
