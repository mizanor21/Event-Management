// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhgE3Wr3_wc-xVAThc7pvN7KYnsV-AorY",
  authDomain: "event-8370d.firebaseapp.com",
  projectId: "event-8370d",
  storageBucket: "event-8370d.appspot.com",
  messagingSenderId: "1014253334606",
  appId: "1:1014253334606:web:2f594f3d7f222e5c57d31f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
