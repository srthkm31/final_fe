import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';

const HamburgerSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="z-50 p-2 text-white bg-neutral-800 rounded focus:outline-none"
      >
        <Menu size={28} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-neutral-900 text-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* Menu Items */}
        <div className='flex flex-col justify-between gap-[610px]'>
            <div className="flex flex-col space-y-4 px-6">
                <a href="analysis" className="hover:text-lime-400 transition p-2 text-center bg-neutral-800">Analysis</a>
                <a href="chatBot" className="hover:text-lime-400 transition p-2 text-center bg-neutral-800">ChatBot</a>
                <a href="basic-terms" className="hover:text-lime-400 transition p-2 text-center bg-neutral-800">Basic Terms</a>
                <a href="about" className="hover:text-lime-400 transition p-2 text-center bg-neutral-800">About</a>
            </div>
            <div className='text-center text-2xl font-bold pr-4'>
                FinanceAI
            </div>
        </div>
        
      </div>
    </>
  );
};

export default HamburgerSidebar;
