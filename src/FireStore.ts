// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { 
  getFirestore,
  Firestore,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU0WWxUvJb2bXkKqWO_jwEqscOA4HLG54",
  authDomain: "cis371-project-6.firebaseapp.com",
  projectId: "cis371-project-6",
  storageBucket: "cis371-project-6.appspot.com",
  messagingSenderId: "112206906730",
  appId: "1:112206906730:web:f7a0e04cec8bfdbd309113"
};

// Initialize Firebase
const app : FirebaseApp = initializeApp(firebaseConfig);
export const db : Firestore = getFirestore(app);

