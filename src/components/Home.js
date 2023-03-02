import React from 'react';
import { Link } from "react-router-dom";

function home() {
  return (
    <div>
      <div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>
    <header class="bg-green-600 p-4 flex justify-between items-center">
        <div class="flex items-center">
            <img src="https://cdn1.iconfinder.com/data/icons/adventure-outline-1/64/Adventure-Line-17-256.png" class="mr-2" width="50" alt="Logo" />
            <a href="#" class="inline-block p-2 text-green-200 mr-2 hover:text-green-100">Home</a>
            <a href="#" class="inline-block p-2 text-green-200 hover:text-green-100">About</a>
        </div>

        <div class="right">
            <Link to="/login" class="inline-block p-2 text-green-200 mr-2 hover:text-green-100">Login</Link>
            <Link to="/signup" class="inline-block py-2 px-6 text-green-800 bg-yellow-300 rounded hover:text-green-900 hover:bg-yellow-200 transition ease-in duration-150">Sign up</Link>
        </div>
    </header>


    <section class="md:flex justify-between px-10 py-20 bg-green-100">
        <div class="md:w-1/2 md:mb-0 mb-7">
            <h2 class="md:text-5xl text-3xl mb-3 text-red-600">Welcome to pet city!</h2>
            <p class="mb-3">Enjoy your day with pets.</p>

            <a href="#" class="inline-block py-3 px-6 text-lg bg-gray-700 text-gray-300 rounded mr-2">Learn more</a>
            <a href="#" class="inline-block py-3 px-6 text-lg bg-yellow-500 text-yellow-100 rounded hover:bg-yellow-400 ">Get started</a>
        </div>

        <div class="md:w-1/2">
            <img class="w-full rounded shadow-2xl" src="https://images.pexels.com/photos/3726314/pexels-photo-3726314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="poppy" />
        </div>
    </section>


    <section class="features py-16 px-10 bg-gray-100 text-gray-800 text-center">
        <p class="mb-16 text-4xl">Featured Pets</p>
        <div class="md:flex">
            <div class="mr-2 md:mt-8 mt-0">
                <img class="w-full rounded mb-4 border-solid border-2 border-gary-200" src="https://images.pexels.com/photos/3726314/pexels-photo-3726314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p>Cute Pet!</p>
            </div>
            <div class="mr-2">
                <img class="w-full rounded mb-4 border-solid border-2 border-gary-200" src="https://images.pexels.com/photos/3726314/pexels-photo-3726314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p>Cute Pet!</p>
            </div>
            <div class="mr-2  md:mt-8 mt-0">
                <img class="w-full rounded mb-4 border-solid border-2 border-gary-200" src="https://images.pexels.com/photos/3726314/pexels-photo-3726314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p>Cute Pet!</p>
            </div>
            <div class="mr-2">
                <img class="w-full rounded mb-4 border-solid border-2 border-gary-200" src="https://images.pexels.com/photos/3726314/pexels-photo-3726314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p>Cute Pet!</p>

                <button class="btn-primary">Go Ahead </button>
            </div>
        </div>
    </section>
    
    </div>
  );
}

export default home;