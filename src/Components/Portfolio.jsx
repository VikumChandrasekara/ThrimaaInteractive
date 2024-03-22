import React from 'react'
import { motion } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

const Portfolio = () => {
  return (
    <motion.div className='blogs'
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
    >Portfolio Will Update Soon</motion.h1>
  </motion.div>
  )
}

export default Portfolio