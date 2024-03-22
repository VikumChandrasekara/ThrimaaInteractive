import React from 'react'
import Lottie from 'lottie-react'
import GD from '../assets/animations/GD.json'
import AR from '../assets/animations/AR.json'
import Web from '../assets/animations/Web.json'
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

const WhatWeOffer = () => {
  return (
<motion.div
    initial="hidden"
    animate="visible"
    exit={{ opacity: 0, transition: { duration: 1 } }}
    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
>
    <motion.div className='WhatWeOffer'
        variants={{
        hidden: { opacity: 0, y: -20 },
        visible
        }}
    >
        <motion.h1  
            variants={{
            hidden: { opacity: 0, y: -20 },
            visible
            }}
        >What We Offer</motion.h1>
        <hr />
    <div className='cards'>
        <motion.div className={`card card1`}
        variants={itemVariants}
        >
            <NavLink  to={'/ThrimaaInteractive/web-developments'} onClick={() => this.handleClick('services')}>
                <div className='container'>
                <Lottie className='icon1' animationData={Web} />
                </div>
                <div className='details'>
                    <h3>Web Developments</h3>
                    <p>We specialize in crafting interactive, user-friendly websites that captivate audiences. As a premier web development company, we lead with innovation and creativity to deliver exceptional online experiences</p>
                </div>
                </NavLink>
        </motion.div>
        <motion.div className='card card2'
         variants={itemVariants}
        >
            <NavLink  to={'/ThrimaaInteractive/game-developments'} onClick={() => this.handleClick('services')}>
                <div className='container'>
                <Lottie className='icon1' animationData={GD} />
                </div>
                <div className='details'>
                    <h3>Game Developments</h3>
                    <p>Our expertise extends to developing billion-dollar game concepts. With creativity and precision, we craft immersive experiences that redefine gaming</p>
                </div>
            </NavLink>
        </motion.div>
        <motion.div className='card card3'
         variants={itemVariants}
        >
            <NavLink  to={'/ThrimaaInteractive/ar-developments'} onClick={() => this.handleClick('services')}>
                <div className='container'>
                <Lottie className='icon1' animationData={AR} />
                </div>
                <div className='details'>
                    <h3>Augmented Reality</h3>
                    <p>Unlocking the potential of augmented reality, we create interactive applications that bridge the virtual and real worlds seamlessly</p>
                </div>
            </NavLink>
        </motion.div>
        </div>
    </motion.div>
</motion.div>
  )
}

export default WhatWeOffer