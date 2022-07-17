// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsvj2qAhFSFKpipFhmZei7n5oPcKKzDfk",
  authDomain: "sera-reactjs.firebaseapp.com",
  projectId: "sera-reactjs",
  storageBucket: "sera-reactjs.appspot.com",
  messagingSenderId: "611219793938",
  appId: "1:611219793938:web:0f66df89ec600c5c8a90cb",
  measurementId: "G-P1FKJXMM8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
