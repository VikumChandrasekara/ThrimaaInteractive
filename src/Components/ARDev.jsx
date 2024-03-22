import React from 'react'
import ARApps from '../assets/icons/ARApps.png'
import webXR from '../assets/icons/webXR.png'
import arGames from '../assets/icons/arGames.png'
import unity from '../assets/icons/unity.png'
import csharp from '../assets/icons/cSharp.png'
import blender from '../assets/icons/blender.png'
import kotlin from '../assets/icons/kotlin.png'
import webXRLogo from '../assets/icons/webXRLogo.png'
import sceneview from '../assets/icons/sceneview.png'
import arCore from '../assets/icons/arCore.png'
import arFoundation from '../assets/icons/arFoundation.png'
import { motion } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

const ARDev = () => {
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
    >Evolving Augmented Realities:<br></br><span>Where Innovation Transcends into <span className='webDev'>Augmented Reality (AR) Development</span> Mastery</span></motion.h1>
      <motion.p
        variants={{
        hidden: { opacity: 0, y: -20 },
        visible
        }}
      >Augmenting Reality Realms: Tailoring Immersive Experiences for Users, Innovators, and Industry Leaders with Next-Generation 
        Technology and Seamless Integration</motion.p>
    <motion.div className='dcards'
      variants={{
      hidden: { opacity: 0, y: -20 },
      visible
      }}
    >
      <div className='dcard dcard1'>
        <div className='dIcon'>
          <img src={ARApps} alt="" />
        </div>
        Android/IOS AR Apps
      </div>
      <div className='dcard dcard2'>
        <div className='dIcon'>
          <img src={webXR} alt="" />
        </div>
        WebXR Applications
      </div>
      <div className='dcard dcard3'>
      <div className='dIcon'>
        <img src={arGames} alt="" />
        </div>
        AR Games
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
          <img src={unity} alt="" />
        </div>
        Unity 3D
      </div>
      <div className='dcard dcard2'>
        <div className='dIcon'>
          <img src={kotlin} alt="" />
        </div>
        Kotlin
      </div>
      <div className='dcard dcard3'>
      <div className='dIcon'>
        <img src={csharp} alt="" />
        </div>
        C#
      </div>
      <div className='dcard dcard4'>
      <div className='dIcon'>
        <img src={webXRLogo} alt="" />
      </div>
        WebXR
      </div>
      <div className='dcard dcard5'>
      <div className='dIcon'>
        <img src={sceneview} alt="" />
      </div>
        Sceneview
      </div>
      <div className='dcard dcard6'>
        <div className='dIcon'>
          <img src={arCore} alt="" />
        </div>
        AR Core
      </div>
      <div className='dcard dcard7'>
        <div className='dIcon'>
          <img src={arFoundation} alt="" />
        </div>
        AR Foundation
      </div>
      <div className='dcard dcard8'>
      <div className='dIcon'>
        <img src={blender} alt="" />
        </div>
        Blender
      </div>
    </motion.div>
    </div>
  </motion.div>
  )
}

export default ARDev