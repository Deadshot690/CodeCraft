// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  "projectId": "studio-2966886969-113dc",
  "appId": "1:227757932645:web:fe3138d25ef775db92068c",
  "apiKey": "AIzaSyBEDtKWSHo7lmraBTFvr325gz6qsdRbZVg",
  "authDomain": "studio-2966886969-113dc.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "227757932645"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const auth = getAuth(app);
export const db = getFirestore(app);