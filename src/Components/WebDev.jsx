import React from 'react'
import monitor from '../assets/icons/monitor.png'
import rocket from '../assets/icons/rocket.png'
import portfolio from '../assets/icons/portfolio.png'
import onlineShopping from '../assets/icons/online-shopping.png'
import blogging from '../assets/icons/blogging.png'
import html from '../assets/icons/html.png'
import react from '../assets/icons/react.png'
import node from '../assets/icons/nodejs.png'
import mysql from '../assets/icons/mysql.png'
import php from '../assets/icons/php.png'
import mongo from '../assets/icons/mongo.png'
import express from '../assets/icons/express.png'
import firebase from '../assets/icons/firebase.png'
import javascript from '../assets/icons/js.png'
import tailwind from '../assets/icons/Tailwind.png'
import { motion } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

const dev = () => {
  return (
    <motion.div className='dev'
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <motion.h1 className='dHeading'
        variants={{
        hidden: { opacity: 0, y: -20 },
        visible
        }}
      >Crafting Digital Worlds:<br></br><span>Where Innovation Meets <span className='webDev'>Web Development</span> Excellence</span></motion.h1>
        <motion.p
          variants={{
          hidden: { opacity: 0, y: -20 },
          visible
          }}
        >Sri Lanka's premier web development experts. Crafting bespoke sites for businesses, startups, 
            e-commerce, blogging, portfolios, and WordPress websites with top-notch SEO integration.</motion.p>
      <motion.div className='dcards'
        variants={{
        hidden: { opacity: 0, y: -20 },
        visible
        }}
      >
        <div className='dcard dcard1'>
          <div className='dIcon'>
            <img src={monitor} alt="" />
          </div>
          Buisiness Website
        </div>
        <div className='dcard dcard2'>
          <div className='dIcon'>
            <img src={rocket} alt="" />
          </div>
          Startup Website
        </div>
        <div className='dcard dcard3'>
        <div className='dIcon'>
          <img src={portfolio} alt="" />
          </div>
          Portfolio Website
        </div>
        <div className='dcard dcard4'>
        <div className='dIcon'>
          <img src={onlineShopping} alt="" />
        </div>
          E-Com Website
        </div>
        <div className='dcard dcard5'>
        <div className='dIcon'>
          <img src={blogging} alt="" />
        </div>
          Blogging Website
        </div>
      </motion.div>
      <div className='dTechStack'>
        <hr />
        <motion.h1
          variants={{
          hidden: { opacity: 0, y: -20 },
          visible
          }}
        >Tech Stack</motion.h1>
        <hr />
        <motion.div className='dcards'
          variants={{
          hidden: { opacity: 0, y: -20 },
          visible
          }}
        >
        <div className='dcard dcard1'>
          <div className='dIcon'>
            <img src={html} alt="" />
          </div>
         HTML5/CSS
        </div>
        <div className='dcard dcard2'>
          <div className='dIcon'>
            <img src={react} alt="" />
          </div>
          Reactjs
        </div>
        <div className='dcard dcard3'>
        <div className='dIcon'>
          <img src={tailwind} alt="" />
          </div>
          Tailwind CSS
        </div>
        <div className='dcard dcard4'>
        <div className='dIcon'>
          <img src={node} alt="" />
        </div>
          Nodejs
        </div>
        <div className='dcard dcard5'>
        <div className='dIcon'>
          <img src={mysql} alt="" />
        </div>
          My SQL
        </div>
        <div className='dcard dcard6'>
          <div className='dIcon'>
            <img src={php} alt="" />
          </div>
         PHP
        </div>
        <div className='dcard dcard7'>
          <div className='dIcon'>
            <img src={mongo} alt="" />
          </div>
          MongoDB
        </div>
        <div className='dcard dcard8'>
        <div className='dIcon'>
          <img src={express} alt="" />
          </div>
          Expressjs
        </div>
        <div className='dcard dcard9'>
        <div className='dIcon'>
          <img src={firebase} alt="" />
        </div>
          Firebase
        </div>
        <div className='dcard dcard10'>
        <div className='dIcon'>
          <img src={javascript} alt="" />
        </div>
          Javascript
        </div>
      </motion.div>
      </div>
    </motion.div>
  )
}

export default dev