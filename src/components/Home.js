import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="font-family-karla">
      <nav class="bg-gray-100">
        <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
        <div class="flex space-x-4">
        <div>
          <a href="#" class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
          <a href="home" class="bg-black text-white font-bold text-xl p-4">Paw</a>
          </a>

          
        </div>
        <div class="hidden md:flex items-center space-x-1">
          <Link to="/blogs" class="py-5 px-3 text-gray-700 hover:text-gray-900">Blogs</Link>
          <Link to="/chats" class="py-5 px-3 text-gray-700 hover:text-gray-900">Chat</Link>
        </div>
      </div>

        <div class="hidden md:flex items-center space-x-1">
          <Link to="/login" class="py-5 px-3">Login</Link>
          <Link to="/signup" class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</Link>
        </div>
        <div class="md:hidden flex items-center">
        <button class="mobile-menu-button">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        </div>
        </div>
        </div>
        <div class="mobile-menu hidden md:hidden">
          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Blog</a>
          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Chat</a>
        </div>
      </nav>
      <div class="py-32 text-center">
        <h2 class="font-extrabold text-4xl">Home Page!</h2>
      </div>
    </div>
  );
}

export default Home;