import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBHYb7pj9L8gmv6HFu1eR-OOH7QMyspy9c",
  authDomain: "pawfection-f9f6e.firebaseapp.com",
  databaseURL: "https://pawfection-f9f6e-default-rtdb.firebaseio.com",
  projectId: "pawfection-f9f6e",
  storageBucket: "pawfection-f9f6e.appspot.com",
  messagingSenderId: "521662961796",
  appId: "1:521662961796:web:ed7085793e0a5f27070ad1",
  measurementId: "G-W1BMCL3SY3"
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

export default app;

export const db = getFirestore(app);
