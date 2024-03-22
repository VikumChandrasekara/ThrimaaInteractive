import { useState } from 'react'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import './App.css'
import WhatWeOffer from './Components/WhatWeOffer'
import WhyThrimaa from './Components/WhyThrimaa'
import {BrowserRouter , Route ,Routes} from 'react-router-dom';
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
    <BrowserRouter >
    <ScrollToTop>
    <Nav />
    <Routes>
    <Route path='/ThrimaaInteractive' element={[ <Hero /> , <WhatWeOffer /> , <WhyThrimaa />]} />
    <Route path='/ThrimaaInteractive/portfolio' element={[ <Portfolio />]} />
    <Route path='/ThrimaaInteractive/blogs' element={[ <Blogs />]} />
    <Route path='/ThrimaaInteractive/services' element={[ <Services />]} />
    <Route path='/ThrimaaInteractive/about' element={[ <About />]} />
    <Route path='/ThrimaaInteractive/contact' element={[ <Contact />]} />
    <Route path='/ThrimaaInteractive/web-developments' element={[ <WebDev />]} />
    <Route path='/ThrimaaInteractive/game-developments' element={[ <GameDev />]} />
    <Route path='/ThrimaaInteractive/ar-developments' element={[ <ARDev />]} />
    </Routes>
    <Footer />
    </ScrollToTop>
    </BrowserRouter>

 


   
   </div> 
  )
}

export default App
