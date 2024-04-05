import {Route,Routes} from 'react-router-dom';
import Youtube from './components/Youtube';
import Projects from './components/Projects';
import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';

function BodyPage() {
  return (
    
      <Routes>
        <Route path="/ai" element={<Home />} />
        <Route path="/ai/Projects" element={<Projects />} />
        <Route path="/ai/Youtube" element={<Youtube/>}/>
        <Route path='/ai/Contact' element={<Contact/>}/>
        <Route path='/ai/Blog' element={<Blog/>} />
      </Routes>
  )
}

export default BodyPage
