
import Navbar from "./pages/Navbar"
import Footer from "./pages/Footer";
import BodyPage from "./pages/BodyPage";

function App() {

  return (
    <div className='min-h-screen flex flex-col bg-stone-300'>
      <Navbar />
      <BodyPage />
      <Footer />
    </div>

  )
}

export default App
