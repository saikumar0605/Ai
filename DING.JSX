import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
        {/* Brand */}
        <div className="p-4 flex flex-col md:flex-row items-center">
          <span className="font-bold text-xl">BrandName</span>
          <span className="mt-2 md:mt-0 md:ml-4">Call us: (123) 456-7890</span>
        </div>
        
        {/* Links */}
        <div className="p-4 flex flex-wrap justify-center items-center gap-4">
          <a href="#" className="hover:underline">Link 1</a>
          <a href="#" className="hover:underline">Link 2</a>
          <a href="#" className="hover:underline">Link 3</a>
          <a href="#" className="hover:underline">Link 4</a>
          <a href="#" className="hover:underline">Link 5</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
