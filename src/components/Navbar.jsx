'use client';
import React, { useState } from 'react';

const Navbar = () => {
''
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const textColor = "#FB6980";
  const navHeaderSytle = 'block py-2 px-3 md:p-0 text-slate-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 hover:text-white';
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-gray-200 bg-gray-50 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className={"self-center text-2xl font-semibold whitespace-nowrap text-[#fb6980]"}>LOGO</span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-solid-bg"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`w-full md:flex md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent border-gray-700 items-center">
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-gray-700 bg-black rounded md:bg-transparent md:text-gray-900" aria-current="page">HOME</a>
            </li>

            <li>
              <a href="#" className={navHeaderSytle}>DISCOVERY</a>
            </li>
            <li>
              <a href="#" className={navHeaderSytle}>PHATOS</a>
            </li>
            <li>
              <a href="#" className={navHeaderSytle}>CONTACT</a>
            </li>
            <li>
            <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar" />

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
