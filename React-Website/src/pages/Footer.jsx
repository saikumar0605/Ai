import React from 'react'

function Footer() {
  return (
      <footer className="bg-stone-950 text-white p-4">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
        {/* Brand */}
        <div className="p-4 flex flex-col md:flex-row items-center">
          <span className="font-bold text-xl">SAI KUMAR REDDY</span>
          <span className="mt-2 md:mt-0 md:ml-4">Call Me: (123) 456-7890</span>
          <span className='mt-2 md:mt-0 md:ml-4'>Mail me: email@email.com</span>
        </div>
        
        {/* Links */}
        <div className="p-4 flex flex-col md:flex-row flex-wrap justify-center items-center gap-4">
          <a href="#" className="hover:text-sky-200">Link 1</a>
          <a href="#" className="hover:text-sky-200">Link 2</a>
          <a href="#" className="hover:text-sky-200">Link 3</a>
          <a href="#" className="hover:text-sky-200">Link 4</a>
          <a href="#" className="hover:text-sky-200">Link 5</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer