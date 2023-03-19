import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJwJ86HnJvb9btNk7bMoCikAzJTJtoams",
  authDomain: "pawfection-9bab1.firebaseapp.com",
  projectId: "pawfection-9bab1",
  storageBucket: "pawfection-9bab1.appspot.com",
  messagingSenderId: "308496294860",
  appId: "1:308496294860:web:5e64badb100587e7fa7369"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {

  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const db = getFirestore(app);

export default app;
