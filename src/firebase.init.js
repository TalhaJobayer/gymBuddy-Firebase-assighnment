// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-bqh8wBlSrsP3Kj1jCOm5VIvvXXtwduY",
  authDomain: "gymbuddy-45dce.firebaseapp.com",
  projectId: "gymbuddy-45dce",
  storageBucket: "gymbuddy-45dce.appspot.com",
  messagingSenderId: "573784874764",
  appId: "1:573784874764:web:82e7cd49c3581472883329"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  const auth =getAuth(app)
  export default auth;
