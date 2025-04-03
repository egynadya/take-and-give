"use client";

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex flex-wrap items-center justify-between w-full px-4 py-3 bg-white shadow-sm">
      <div className="flex items-center">
        <Link href="/" className="logo text-yellow-500 font-bold">
          Take & Give
        </Link>
      </div>
      
      <div className="flex items-center mt-2 w-full md:w-auto md:mt-0 order-3 md:order-2">
        <div className="search-container w-full">
          <input 
            type="text" 
            placeholder="Search for items..." 
            className="search-input w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-2 order-2 md:order-3">
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
          Sign Up
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">
          Log In
        </button>
        <span className="ml-2">🇬🇧</span>
      </div>
    </header>
  );
};

export default Header;
