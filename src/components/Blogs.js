import React from 'react'
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <>
        <div class="font-family-karla relative h-full w-full bg-[url('../public/images/collage.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <nav class="bg-gray-100">
        <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
        <div class="flex space-x-4">
        <div>
          <div class="flex items-center py-5 px-2">
          <a href="home" class="bg-black text-white font-bold text-xl p-4">Paw</a>
          </div>  
        </div>
        <div class="hidden md:flex items-center space-x-1">
          <a href="#" class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Blog</a>
        </div>
        </div>
        </div>
        </div>
        </nav>
        </div>
    </>
  )
}

export default Blogs