import { useState } from 'react'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import './App.css'
import WhatWeOffer from './Components/WhatWeOffer'
import WhyThrimaa from './Components/WhyThrimaa'
import {HashRouter , Route ,Routes} from 'react-router-dom';
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Blogs from './Components/Blogs'
import Contact from './Components/Contact'
import WebDev from './Components/WebDev'
import GameDev from './Components/GameDev'
import ARDev from './Components/ARDev'
import Services from './Components/Services'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  return(
   <div>
    <HashRouter>
    <ScrollToTop>
    <Nav />
    <Routes>
    <Route path='/' exact element={[ <Hero /> , <WhatWeOffer /> , <WhyThrimaa />]} />
    <Route path='/portfolio' element={[ <Portfolio />]} />
    <Route path='/blogs' element={[ <Blogs />]} />
    <Route path='/services' element={[ <Services />]} />
    <Route path='/about' element={[ <About />]} />
    <Route path='/contact' element={[ <Contact />]} />
    <Route path='/web-developments' element={[ <WebDev />]} />
    <Route path='/game-developments' element={[ <GameDev />]} />
    <Route path='/ar-developments' element={[ <ARDev />]} />
    </Routes>
    <Footer />
    </ScrollToTop>
    </HashRouter>

 


   
   </div> 
  )
}

export default App
