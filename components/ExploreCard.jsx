'use client';

import { motion } from 'framer-motion';
import React from 'react';

import styles from '../styles';
import { fadeIn } from '../utils/motion';
// expolring the products component in the landing page 
const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
  // when loading them they will fade in from left to right in specific delay time  
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
    // on click activate the id 
  >
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      // while the card is not clicked and not active text would be rotated and in white etc.
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      // else if id is active the title would be in light purple with ash buttom background
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
       
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-purple-200">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
