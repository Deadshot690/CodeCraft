// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  "projectId": "studio-2966886969-113dc",
  "appId": "1:227757932645:web:a4aec5d5de91ca6692068c",
  "apiKey": "AIzaSyBEDtKWSHo7lmraBTFvr325gz6qsdRbZVg",
  "authDomain": "studio-2966886969-113dc.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "227757932645"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
