import React, { useState } from 'react'

function Navbar() {
  const [hamburger, setHamburger] = useState(false);
  return (
   <nav className=" bg-stone-950 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex justify-between flex-1 space-x-4">
                        <div>
                            <a href="/" className="flex items-center py-5 px-2 text-white hover:text-stone-500">
                                <span className="font-bold text-xl ">SAI KUMAR REDDY</span>
                            </a>
                        </div>
                        {/* Primary Navbar items */}
                        <div className="hidden md:flex items-center space-x-1">
                            <a href="/" className="py-5 px-3 hover:text-stone-500">Home</a>
                            <a href="/Projects" className="py-5 px-3 hover:text-stone-500">Projects</a>
                            <a href="Youtube" className="py-5 px-3 hover:text-stone-500">Youtube</a>
                            <a href="/Contact" className="py-5 px-3 hover:text-stone-500">Contact</a>
                        </div>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setHamburger(!hamburger)} className="mobile-menu-button">
                            {hamburger? "✕" : "▤"}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`${hamburger? 'block' : 'hidden'} md:hidden`}>
                <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-sky-200 text-center">Home</a>
                <a href="/Projects" className="block py-2 px-4 text-sm hover:bg-stone-500 hover:text-sky-200 text-center">Projects</a>
                <a href="/Youtube" className="block py-2 px-4 text-sm hover:bg-stone-500 hover:text-sky-200 text-center">Youtube</a>
                <a href="/Contact" className="block py-2 px-4 text-sm hover:bg-stone-500 hover:text-sky-200 text-center">Contact</a>

            </div>
        </nav>
  )
}

export default Navbar