import { useState } from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
    const [hamburger, setHamburger] = useState(false);
    return (
        <nav className=" bg-stone-950 text-white h-14 pt-2">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex justify-between flex-1 space-x-4">
                        <div>
                            <a href="/#saikumarreddy" className="flex items-center py-2 px-2 text-white hover:text-stone-500">
                                <span className="font-bold text-xl ">SAI KUMAR REDDY</span>
                            </a>
                        </div>
                        {/* Primary Navbar items */}
                        <div className="hidden md:flex items-center space-x-1">
                            <Link to="/" className="py-3 px-3 hover:text-stone-500">Home</Link>
                            <Link to="/Projects" className="py-3 px-3 hover:text-stone-500">Projects</Link>
                            <Link to="/Youtube" className="py-3 px-3 hover:text-stone-500">Youtube</Link>
                            <Link to="/Blog" className="py-3 px-3 hover:text-stone-500">Blogs</Link>
                            <Link to="/Contact" className="py-3 px-3 hover:text-stone-500">Contact</Link>
                        </div>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setHamburger(!hamburger)} className="mobile-menu-button text-4xl">
                            {hamburger ? "✕" : "▤"}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`${hamburger ? 'absolute' : 'hidden'} md:hidden min-w-full bg-stone-900 text-center mobileViewHam`}>
                <Link to="/" className="block py-2 px-4 text-md  text-center active:bg-stone-400 hover:bg-stone-500">Home</Link>
                <Link to="/Projects" className="block py-2 px-4 text-md  text-center active:bg-stone-400 hover:bg-stone-500">Projects</Link>
                <Link to="/Youtube" className="block py-2 px-4 text-md  text-center active:bg-stone-400 hover:bg-stone-500">Youtube</Link>
                <Link to="/Blog" className="block py-2 px-4 text-md text-center active:bg-stone-400 hover:bg-stone-500">Blogs</Link>
                <Link to="/Contact" className="block py-2 px-4 text-md  text-center active:bg-stone-400 hover:bg-stone-500">Contact</Link>
            </div>

        </nav>

    )
}


export default Navbar