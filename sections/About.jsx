'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import React from 'react';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
// about section
const About = () => (
  
  <section className={`${styles.paddings} relative z-10`} id="about">
    {/* gradient effect */}
    <div className="gradient-02 z-0" />
    <motion.div
    // to show while in view  
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      {/* use typing text in components to style this title  */}
      <TypingText title="| About Adserve" textStyles="text-center" />

      <motion.p
      // paragraph fade up motion 
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        {/* paragraph */}
        <span className="font-extrabold text-white">Adserve</span> describes the technology and service that places 
        advertisements on Web sites, mobile apps, and Connected TVs. {' '}
        <span className="font-extrabold text-white">
        Ad serving technology companies 
        </span>{' '}
        provide software
         to Web sites and advertisers to  {' '}
        <span className="font-extrabold text-white">serve ads, count them, choose the ads</span> that will make the Web site or advertiser 
         the most money, and monitor the progress of different advertising campaigns.{' '}
        <span className="font-extrabold text-white">explore</span> what Adserve 
        can offer for your buisness by scrolling down
      </motion.p>
{/* arrow down fade up motion */}
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
