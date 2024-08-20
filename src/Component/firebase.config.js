// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHd23PhbpejNH0_tX86aFLbdXbzNIlmlA",
  authDomain: "signup-15acf.firebaseapp.com",
  projectId: "signup-15acf",
  storageBucket: "signup-15acf.appspot.com",
  messagingSenderId: "197652245649",
  appId: "1:197652245649:web:84c32f66b8ae641059e330",
  measurementId: "G-QVG82Y7XNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
