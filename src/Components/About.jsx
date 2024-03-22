import React from 'react'
import { motion } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

const About = () => {
  return (
    <motion.div
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
    <motion.div className='about'
        variants={{
        hidden: { opacity: 0, y: -60 },
        visible
        }}
    >
        <motion.h1
            variants={{
            hidden: { opacity: 0, y: -20 },
            visible
            }}
        >Who We Are</motion.h1>
        <hr />
        <motion.p
            variants={{
            hidden: { opacity: 0, y: -0.5 },
            visible
            }}
        >Thrimaa Interactive® is a dynamic and innovative company at the forefront of digital creativity. Specializing in interactive web design and development, game development, and augmented reality solutions, we pride ourselves on delivering top-notch services to our clients. With a team of experienced developers and designers, we strive to exceed expectations and ensure our clients' satisfaction is paramount.
            Our commitment to excellence extends beyond client relationships; we prioritize the well-being and work-life balance of our employees. By fostering a supportive and collaborative environment, we empower our team to unleash their creativity and bring innovative ideas to life.
            At Thrimaa Interactive, we believe in pushing the boundaries of what's possible in the digital realm. Our slogan, "Gateway to Digital Creativity," encapsulates our mission to revolutionize the industry with cutting-edge technologies and forward-thinking approaches. With a focus on creativity and innovation, we aim to redefine standards and leave a lasting impact on the digital landscape.</motion.p>
        <hr />
        <motion.h1
            variants={{
            hidden: { opacity: 0, y: -20 },
            visible
            }}
        >Gateway to Digital Creativity !</motion.h1>
        <hr />
        <motion.div className='cards2' variants={itemVariants}>
            <div className='card2 card1'>
                <div className='container'>
                </div>
                <div className='details'>
                    <h3>Vision</h3>
                    <p>"Our vision is to revolutionize digital experiences through innovative web design, game development, and augmented reality solutions, setting new standards of creativity and excellence in the industry"</p>
                </div>
            </div>
            <div className='card2 card2'>
                <div className='container'>
                </div>
                <div className='details'>
                    <h3>Mission</h3>
                    <p>"To empower clients with unparalleled interactive solutions while fostering a culture of creativity, employee well-being, and client satisfaction, guided by our motto: Gateway to Digital Creativity"</p>
                </div>
            </div>
        </motion.div>
    </motion.div>
    </motion.div>
  )
}

export default About