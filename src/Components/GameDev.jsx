import React from 'react'
import Game2d from '../assets/icons/game2d.png'
import Game3d from '../assets/icons/game3d.png'
import mobileGame from '../assets/icons/mobileGame.png'
import fps from '../assets/icons/fps.png'
import hcGames from '../assets/icons/hcGames.png'
import unity from '../assets/icons/unity.png'
import csharp from '../assets/icons/cSharp.png'
import pixijs from '../assets/icons/pixijs.png'
import unreal from '../assets/icons/unreal.png'
import construct from '../assets/icons/construct.png'
import javascript from '../assets/icons/js.png'
import blender from '../assets/icons/blender.png'
import illustrator from '../assets/icons/illustrator.png'
import photoshop from '../assets/icons/photoshop.png'
import { motion } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

const GameDev = () => {
  return (
    <motion.div className='dev'
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
    <motion.h1 
      variants={{
      hidden: { opacity: 0, y: -20 },
      visible
      }}
    className='dHeading'>Forging Virtual Realms:<br></br><span>Where Innovation Meets <span className='webDev'>Game Development</span> Mastery</span></motion.h1>
      <motion.p
        variants={{
        hidden: { opacity: 0, y: -20 },
        visible
        }}
      >Elevating Game Realms: Crafting Tailored Experiences for Gamers, Indie Studios, and AAA Titles with Cutting-Edge 
        Technology and Seamless Integration</motion.p>
    <motion.div className='dcards'
      variants={{
      hidden: { opacity: 0, y: -20 },
      visible
      }}
    >
      <div className='dcard dcard1'>
        <div className='dIcon'>
          <img src={Game2d} alt="" />
        </div>
        2D platformer Games
      </div>
      <div className='dcard dcard2'>
        <div className='dIcon'>
          <img src={Game3d} alt="" />
        </div>
        3D Games
      </div>
      <div className='dcard dcard3'>
      <div className='dIcon'>
        <img src={mobileGame} alt="" />
        </div>
        Mobile Games
      </div>
      <div className='dcard dcard4'>
      <div className='dIcon'>
        <img src={fps} alt="" />
      </div>
        FPS Games
      </div>
      <div className='dcard dcard5'>
      <div className='dIcon'>
        <img src={hcGames} alt="" />
      </div>
      Hyper Casual Games
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
        Unity 2D/3D
      </div>
      <div className='dcard dcard2'>
        <div className='dIcon'>
          <img src={csharp} alt="" />
        </div>
        C#
      </div>
      <div className='dcard dcard3'>
      <div className='dIcon'>
        <img src={pixijs} alt="" />
        </div>
        Pixijs
      </div>
      <div className='dcard dcard4'>
      <div className='dIcon'>
        <img src={unreal} alt="" />
      </div>
        Unreal Engine
      </div>
      <div className='dcard dcard5'>
      <div className='dIcon'>
        <img src={construct} alt="" />
      </div>
        Construct
      </div>
      <div className='dcard dcard6'>
        <div className='dIcon'>
          <img src={javascript} alt="" />
        </div>
        Javascript
      </div>
      <div className='dcard dcard7'>
        <div className='dIcon'>
          <img src={blender} alt="" />
        </div>
        Blender 3D
      </div>
      <div className='dcard dcard8'>
      <div className='dIcon'>
        <img src={illustrator} alt="" />
        </div>
        Adobe Illustrator
      </div>
      <div className='dcard dcard9'>
      <div className='dIcon'>
        <img src={photoshop} alt="" />
      </div>
        Adobe Photoshop
      </div>
    </motion.div>
    </div>
  </motion.div>
  )
}

export default GameDev