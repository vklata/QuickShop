// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACUlHnc8W6Jyiocd-1YroaU1r325q7jIc",
  authDomain: "myfristproject-8b339.firebaseapp.com",
  projectId: "myfristproject-8b339",
  storageBucket: "myfristproject-8b339.appspot.com",
  messagingSenderId: "2607827607",
  appId: "1:2607827607:web:b9d202baeeb8b24d67b7d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;
