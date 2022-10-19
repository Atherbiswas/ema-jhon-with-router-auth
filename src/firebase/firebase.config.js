// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWSiBGqB6DCVQyyS4FaY1qhPI3Ea1212M",
  authDomain: "ema-jhon-router-auth-app.firebaseapp.com",
  projectId: "ema-jhon-router-auth-app",
  storageBucket: "ema-jhon-router-auth-app.appspot.com",
  messagingSenderId: "345440902795",
  appId: "1:345440902795:web:46b10ccecba0cbf1167e8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;