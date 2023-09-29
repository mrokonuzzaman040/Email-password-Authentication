// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn-VCMxoAturSILohUWzoWhrns8oUulZI",
  authDomain: "email-pass-pratice.firebaseapp.com",
  projectId: "email-pass-pratice",
  storageBucket: "email-pass-pratice.appspot.com",
  messagingSenderId: "281539395021",
  appId: "1:281539395021:web:3bd825d69d125277209884",
  measurementId: "G-CG6PQBG6V7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;