import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import HeroAnimation from '../assets/animations/HeroAnimation.json'
import Lottie from 'lottie-react'
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

function Hero() {
  return (
    <motion.div className='hero'
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <motion.h1 className='topline'
        variants={{
        hidden: { opacity: 0, y: -20 },
        visible
        }}
      >
        <span>Crafting immersive experiences through<br></br></span>
        <span className='typewriter'>
        <Typewriter
            words={['Web Developments', 'Game Developments', 'Augmented Reality']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={60}
            delaySpeed={2700}
          />
        </span>
      <motion.p
        variants={{
        hidden: { opacity: 0, y: -20 },
        visible
        }}
      >Thrimaa Interactive: The Gateway to Digital Creativity.</motion.p>
      <NavLink to="/portfolio" onClick={() => this.handleClick('portfolio')}>
      <button className='heroBtn' 
      ><span>View our portfolio</span></button>
      </NavLink>
      </motion.h1>
      <motion.div className='animation-div'
        variants={{
        hidden: { opacity: 0, y: -20 },
        visible
        }}
      >
        <Lottie className='animation' animationData={HeroAnimation} />
      </motion.div>

    </motion.div>
  )
}

export default Hero