import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth, signInWithGoogle  } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
     
  const onLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigate("/home")
          console.log(user);
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
      });
      
  }

  return (
    <>
    <div class="bg-white font-family-karla h-screen">
    <div class="w-full flex flex-wrap">
      <div class="w-full md:w-1/2 flex flex-col">
        <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
          <a href="home" class="bg-black text-white font-bold text-xl p-4">Paw</a>
        </div>
        <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p class="text-center text-3xl">Welcome.</p>
          <form class="flex flex-col pt-3 md:pt-8">
            <div class="flex flex-col pt-4">
              <label for="email" class="text-lg">Email</label>
              <input type="email" id="email" placeholder="your@email.com" value={email} onChange={(e)=>setEmail(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="flex flex-col pt-4">
            <label for="password" class="text-lg">Password</label>
            <input type="password" id="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            {/* <input type="submit" value="Log In" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" /> */}
            <button onClick={onLogin} class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8">Log In</button>
            <button onClick={signInWithGoogle} class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8">
                  Continue with Google
              </button>
            {/* </div> */}
          </form>
          <div class="text-center pt-12 pb-12">
            <p>Don't have an account? <a href="Signup" class="underline font-semibold">Register here.</a></p>
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

export default Login;