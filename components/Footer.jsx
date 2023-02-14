'use client';
import React from 'react';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
  // motion styles and animation in /utils/motion
    // to show when hovering over
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    // styling constants used in footer and navbar defined in styles to not repeat them again
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            Adserve
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 Arwa. All rights reserved.
          </p>

          <div className="flex gap-4">
            {/* socials is an array of object defined in constants/index.js and here we map on them to display the name and url image of the social media */}
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
