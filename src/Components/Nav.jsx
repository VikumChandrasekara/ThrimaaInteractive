import React, { Component } from 'react'
import logo from '../assets/images/ThrimaaInteractiveLogo.png'
import arrow from '../assets/icons/down.png'
import '../App.css'
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

class Nav extends Component {
    state = { clicked: false, activeLink: '' };

    handleClick = (link) => {
      if (this.state.activeLink !== link) {
        this.setState({ clicked: false, activeLink: link });
      } else {
        this.setState({ clicked: !this.state.clicked });
      } 
    };

render() {
    return (
        <>
        <motion.nav id='nav' 
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
            <motion.img src = {logo} alt='thrimaa-interactive-logo'  variants={itemVariants}/>
            <motion.ul id='box' className={this.state.clicked ? "#box active" : "#box"}
             variants={itemVariants}
            >
                <li> <NavLink
                exact="true"
                className={`nav-link ${this.state.activeLink === 'home' ? 'active' : ''}`}
                to={'/'}
                onClick={() => this.handleClick('home')}
              >
                Home
              </NavLink></li>
                <li><NavLink
                className={`nav-link ${this.state.activeLink === 'services' ? 'active' : ''}`}
                to={'/services'}
                onClick={() => this.handleClick('services')}
              >
                Services
              </NavLink></li>
                <li><NavLink
                className={`nav-link ${this.state.activeLink === 'portfolio' ? 'active' : ''}`}
                to={'/portfolio'}
                onClick={() => this.handleClick('portfolio')}
              >
                Portfolio
              </NavLink></li>
                <li><NavLink
                className={`nav-link ${this.state.activeLink === 'blogs' ? 'active' : ''}`}
                to={'/blogs'}
                onClick={() => this.handleClick('blogs')}
              >
                Blogs
              </NavLink></li>
                <li><NavLink
                className={`nav-link ${this.state.activeLink === 'about' ? 'active' : ''}`}
                to={'/about'}
                onClick={() => this.handleClick('about')}
              >
                About
              </NavLink></li>
            </motion.ul>
            <motion.div variants={itemVariants}>
            <div className="vl">
            </div>
            </motion.div>
            <motion.div  variants={itemVariants}>
            <NavLink to='/contact' onClick={() => this.handleClick('contact')}>
            <button className={`msgButton ${this.state.activeLink === 'contact' ? 'active' : ''}`}>
              <span>Leave a Message</span>
            </button>
          </NavLink>
          </motion.div>
          <div className='mobile' onClick={() => this.handleClick('mobile')}>
            <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </motion.nav>
        </>
      );
    }
}
export default Nav