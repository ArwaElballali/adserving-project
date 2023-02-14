'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles';
import { navVariants } from '../utils/motion';
export const Navbar = () => {
  // drop down menu in the navbar
  const [dropdownOpen, setdropdownOpen] = useState(false);
  
  const handleClick = () => {
    setdropdownOpen(!dropdownOpen);
    // change the drop down state (open if closed/close if opened)
  };
  
  return(
  <motion.nav
  // to show when hovering over
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`} 
  >
    <div className="absolute w-[50%] inset-0 gradient-01"/>
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`} 
    >
      {/* not active image */}
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        Adserve
      </h2>
      <div
          onClick={() => handleClick(!dropdownOpen)}
          // when on click opens or closes the navbar
          class="overflow-hidden rounded-full w-8 h-8 flex justify-center items-center
          hover:cursor-pointer
          ">
        <a class="close-navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"></a>
        <img
                src="/menu.svg"
                alt="menu"
                className="w-[24px] h-[24px] object-contain"
              />
      </div>
      
      
      <div
      // defined styling in styles
          class={`${dropdownOpen ? `top-full opacity-90 visible` : 'top-[110%] invisible opacity-0'} absolute right-12 z-40 mt-2 w-30 rounded border-[.5px] border-light bg-white py-5 shadow-card transition-all`}>
           <a
              href="/"
              class="block py-2 px-5 text-base font-semibold text-body-color hover:bg-purple-900  hover:bg-opacity-5 hover:text-info"
          >
              Home
          </a>
          {/* home page */}
          <a
              href="/indexproduct"
              class="block py-2 px-5 text-base font-semibold text-body-color hover:bg-purple-900 hover:bg-opacity-5 hover:text-primary"
          >
              Products
          </a>
          {/* products page */}
          <a
              href="#explore"
              class="block py-2 px-5 text-base font-semibold text-body-color hover:bg-purple-900 hover:bg-opacity-5 hover:text-primary"
          >
              Explore
          </a>
          {/* explore section */}
          <a
              href="#about"
              class="block py-2 px-5 text-base font-semibold text-body-color hover:bg-purple-900  hover:bg-opacity-5 hover:text-info"
          >
              About
          </a>
          {/* about section */}
          <a
              href="#GetStarted"
              class="block py-2 px-5 text-base font-semibold text-body-color hover:bg-purple-900  hover:bg-opacity-5 hover:text-info"
          >
              Get Started
          </a>
         {/* get started section */}
      </div>
      
    </div>
  </motion.nav>
);

};

export default Navbar;

