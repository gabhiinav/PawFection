import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAJwJ86HnJvb9btNk7bMoCikAzJTJtoams",
  authDomain: "pawfection-9bab1.firebaseapp.com",
  projectId: "pawfection-9bab1",
  storageBucket: "pawfection-9bab1.appspot.com",
  messagingSenderId: "308496294860",
  appId: "1:308496294860:web:5e64badb100587e7fa7369"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app , auth };