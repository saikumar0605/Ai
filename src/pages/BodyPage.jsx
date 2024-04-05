import {Route,Routes} from 'react-router-dom';
import Youtube from './components/Youtube';
import Projects from './components/Projects';
import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';

function BodyPage() {
  return (
    
      <Routes>
        <Route path="/Ai" element={<Home />} />
        <Route path="/Ai/Projects" element={<Projects />} />
        <Route path="/Ai/Youtube" element={<Youtube/>}/>
        <Route path='/Ai/Contact' element={<Contact/>}/>
        <Route path='/Ai/Blog' element={<Blog/>} />
      </Routes>
  )
}

export default BodyPage
