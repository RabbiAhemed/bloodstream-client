// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDEKA-gGmDBPFQM0iJF6lj6BfONR1xnGEo",
  // authDomain: "bloodstreambd.firebaseapp.com",
  // projectId: "bloodstreambd",
  // storageBucket: "bloodstreambd.appspot.com",
  // messagingSenderId: "284104609089",
  // appId: "1:284104609089:web:7d9afa5d5d76b530a8e5c0",

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
