// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "codecraft-quest-2rdg9",
  "appId": "1:335794390716:web:7dd32e52eebcd70ac9f2b9",
  "apiKey": "AIzaSyBteDYnffWafda7KRL3MeS8cAIC8Zapkhk",
  "authDomain": "codecraft-quest-2rdg9.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "335794390716"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
