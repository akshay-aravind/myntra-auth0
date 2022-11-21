import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth,signInWithRedirect } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqiVSIDzRdUgR2VUj77f4DvJxVClMyO6E",
  authDomain: "myntra-feec7.firebaseapp.com",
  projectId: "myntra-feec7",
  storageBucket: "myntra-feec7.appspot.com",
  messagingSenderId: "804249339234",
  appId: "1:804249339234:web:1c46f34c57e95c80c3d83b",
  measurementId: "G-XQT1GS8RFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export { auth, provider , signInWithRedirect }


