import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Youtube from './components/Youtube';
import Projects from './components/Projects';
import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';

function BodyPage() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Youtube" element={<Youtube/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Blog' element={<Blog/>} />
      </Routes>
  )
}

export default BodyPage