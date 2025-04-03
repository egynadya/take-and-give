"use client";

import React from 'react';
import Header from './components/layout/Header';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">Give and receive items for free, no limitations</h1>
              <p className="text-lg mb-6">
                Take & Give connects people who want to give away items they no longer need with those who could use them. No restrictions, no virtual credits, just a community of sharing.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600">
                  Browse Items
                </button>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
                  Get Started
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <p className="text-gray-500">Hero Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <p className="text-gray-500">Item Image</p>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Item Title</h3>
                  <p className="text-gray-600 text-sm mb-2">Location • 2.5 km away</p>
                  <p className="text-gray-500 text-sm">Posted 2 days ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
