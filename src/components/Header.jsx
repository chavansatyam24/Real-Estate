import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  
   return (
    <div className="h-screen bg-cover bg-center flex items-center w-full relative"
      id="Header"
    >
      
      <video
        src="/house.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      
     

      
      <Navbar />

      
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white z-10">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl inline-block max-w-3xl font-semibold pt-20 drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)]">
          Explore homes that fit your dream
        </h2>

        <div className="space-x-6 mt-16">
          <a
            href="#Projects"
            className="rounded-md relative px-12 py-4 font-semibold text-white bg-gradient-to-r from-[#2abfff] to-[#0071FF] overflow-hidden group"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-150 ease-in-out">
              Projects
            </span>
            <span className="absolute left-0 top-0 w-0 h-full rounded-sm bg-gradient-to-r from-[#ffee00] to-[#ffb300] -z-10 transition-all duration-150 ease-in-out group-hover:w-full"></span>
          </a>

          <a
            href="#Contact"
            className="rounded-md relative px-12 py-4 font-semibold text-white bg-gradient-to-r from-[#2abfff] to-[#0071FF] overflow-hidden group"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-150 ease-in-out">
              Contact Us
            </span>
            <span className="absolute left-0 top-0 w-0 h-full rounded-sm bg-gradient-to-r from-[#ffee00] to-[#ffb300] -z-10 transition-all duration-150 ease-in-out group-hover:w-full"></span>
          </a>
        </div>
      </div>

     
     
    </div>
  );
};

export default Header;
