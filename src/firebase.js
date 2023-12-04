// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr-e9GulgsQgzUL53YEvKXtpx_emWr1_I",
  authDomain: "cote-plane.firebaseapp.com",
  projectId: "cote-plane",
  storageBucket: "cote-plane.appspot.com",
  messagingSenderId: "654275657599",
  appId: "1:654275657599:web:11ff4afd22b31364a3e44a",
  measurementId: "G-BLTM5DP467",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
export const db = getFirestore(app);
