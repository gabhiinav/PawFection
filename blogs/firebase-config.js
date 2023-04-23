import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
