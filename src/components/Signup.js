import React from 'react';

function signup() {
  return (
    <>
      <div class="bg-white font-family-karla h-screen">
        <div class="w-full flex flex-wrap">
          <div class="w-full md:w-1/2 flex flex-col">
            <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
                <a href="home" class="bg-black text-white font-bold text-xl p-4" alt="Logo">Paw</a>
            </div>

            <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
              <p class="text-center text-3xl">Join Us.</p>

              <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
                <div class="flex flex-col pt-4">
                  <label for="name" class="text-lg">Name</label>
                  <input type="text" id="name" placeholder="Anurag Goswami" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div class="flex flex-col pt-4">
                    <label for="email" class="text-lg">Email</label>
                    <input type="email" id="email" placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div class="flex flex-col pt-4">
                    <label for="password" class="text-lg">Password</label>
                    <input type="password" id="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                {/* <div class="flex flex-col pt-4">
                    <label for="confirm-password" class="text-lg">Confirm Password</label>
                    <input type="password" id="confirm-password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                </div> */}

                <input type="submit" value="Register" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
              </form>

              <div class="text-center pt-12 pb-12">
                    <p>Already have an account? <a href="login" class="underline font-semibold">Log in here.</a></p>
              </div>
            </div>
          </div>
          <div class="w-1/2 shadow-2xl">
            <img class="object-cover w-full h-screen hidden md:block" src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2462&q=80" alt="pet"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default signup;