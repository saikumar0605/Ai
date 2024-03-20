import { useEffect, useRef } from "react";
import Navbar from "./pages/Navbar"
import Footer from "./pages/Footer";
import BodyPage from "./pages/BodyPage";
import discord from "./assets/discord-6.svg";
import './App.css'


function App() {
  const iconRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (iconRef.current) {
        iconRef.current.style.animation = 'none'; // Reset animation
        setTimeout(() => {
          if (iconRef.current) {
            iconRef.current.style.animation = ''; // Reapply animation to trigger it
          }
        }, 10); // Timeout ensures the animation reset is processed by the browser
      }
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='min-h-screen flex flex-col bg-stone-200 font-protest'>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <BodyPage />
        <Footer />
      </div>
      <a href="https://discord.com/invite/ZpSZ8PmK" target="_blank" className=" fixed text-stone-900 bottom-0 right-0 m-16 md:m-16 p-3 bg-stone-100 border-stone-500 border-2 text-center rounded-xl">
       <div className="flex">
          <img ref={iconRef} src={discord} className="p-1 h-10 rotate-720 flex-1" />
       </div>
        Lets Chat
      </a>
    </div>

  )
}

export default App
