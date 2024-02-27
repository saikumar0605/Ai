
import Navbar from "./pages/Navbar"
import Footer from "./pages/Footer";
import BodyPage from "./pages/BodyPage";


function App() {

  return (
    <div className='min-h-screen flex flex-col bg-stone-200 font-protest'>

        <div className="min-h-screen flex flex-col">
          <Navbar />
          <BodyPage />
          <Footer />
        </div>
      
    </div>

  )
}

export default App
