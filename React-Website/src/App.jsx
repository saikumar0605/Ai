import { useEffect, useState } from "react";
import Navbar from "./pages/Navbar"
import Footer from "./pages/Footer";
import BodyPage from "./pages/BodyPage";
import gif from "./assets/gif1.gif";

function App() {

  const [isLoading, loader] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        loader(true);
      }, 400)
    }
  });



  return (
    <div className='min-h-screen flex flex-col bg-stone-300 font-protest'>
      {isLoading ? (
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <BodyPage />
          <Footer />
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <img src={gif} alt="Loading..." className=" w-fit h-48" />
        </div>
      )}
    </div>

  )
}

export default App
