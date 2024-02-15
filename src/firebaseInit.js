// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUO5R0r634S4smY6XKFw-y0EMz934uRVI",
  authDomain: "photofolio-2f8f1.firebaseapp.com",
  projectId: "photofolio-2f8f1",
  storageBucket: "photofolio-2f8f1.appspot.com",
  messagingSenderId: "766572461087",
  appId: "1:766572461087:web:547ffa311b7f3b5849a92a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);