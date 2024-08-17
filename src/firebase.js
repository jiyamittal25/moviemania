// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL4urNbfQi5g12OThzoe0jeehYUDDqX6g",
  authDomain: "netflix-react-92462.firebaseapp.com",
  projectId: "netflix-react-92462",
  storageBucket: "netflix-react-92462.appspot.com",
  messagingSenderId: "581592449472",
  appId: "1:581592449472:web:2cfef996196dafe4494825"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
