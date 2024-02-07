import React from 'react'
import {Route,Routes} from 'react-router-dom';
import About from './components/About';
import Youtube from './components/Youtube';
import Projects from './components/Projects';
import Home from './components/Home';
import Contact from './components/Contact';

function BodyPage() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Youtube" element={<Youtube/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
  )
}

export default BodyPage