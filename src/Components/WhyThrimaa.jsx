import React from 'react'
import { motion } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

const WhyThrimaa = () => {
  return (
    <motion.div className='WhyThrimaa'
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
        >Why Thrimaa Interactive</motion.h1>
        <hr />
        <motion.div className='cards2'
            variants={{
            hidden: { opacity: 0, y: -20 },
            visible
            }}
        >
            <div className='card2 card1'>
                <div className='container'>
                <img src="" alt="" />
                </div>
                <div className='details2'>
                    <p>Friendly Team</p>
                </div>
            </div>
            <div className='card2 card2'>
                <div className='container'>
                <img src="" alt="" />
                </div>
                <div className='details2'>
                    <p>Available 24/7</p>
                </div>
            </div>
            <div className='card2 card3'>
                <div className='container'>
                <img src="" alt="" />
                </div>
                <div className='details2'>
                    <p>Changers and customizations are acceptable</p>
                </div>  
            </div>
            <div className='card2 card4'>
                <div className='container'>
                <img src="" alt="" />
                </div>
                <div className='details2'>
                    <p>English and Sinhala speaking team</p>
                </div>
            </div>
            <div className='card2 card5'>
                <div className='container'>
                <img src="" alt="" />
                </div>
                <div className='details2'>
                    <p>On time delivery</p>
                </div>
            </div>
            <div className='card2 card6'>
                <div className='container'>
                <img src="" alt="" />
                </div>
                <div className='details2'>
                    <p>Technical advice from experties</p>
                </div>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default WhyThrimaa