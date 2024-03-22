import React from 'react'
import '../App.css'
import { motion } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

const Footer = () => {
  return (
  <motion.div
    initial="hidden"
    animate="visible"
    exit={{ opacity: 0, transition: { duration: 1 } }}
    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
  >
    <motion.div className='footer'
      variants={{
      hidden: { opacity: 0, y: -20 },
      visible
      }}
    >
        <div className='copyright'>Copyright © 2024 by <a href='https://thrimaa.com/'>Thrimaa Interactive® </a>| All Rights Reserved.</div>
    </motion.div>
  </motion.div>
  )
}

export default Footer