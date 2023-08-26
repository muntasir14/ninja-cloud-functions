// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-functions.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";

import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZOkBy9GpuP7SkhUo5bDcsEuzXJb5yF-E",
  authDomain: "ninja-cloud-functions-790c4.firebaseapp.com",
  projectId: "ninja-cloud-functions-790c4",
  storageBucket: "ninja-cloud-functions-790c4.appspot.com",
  messagingSenderId: "581800349622",
  appId: "1:581800349622:web:2fc888b3780b4ed5a0fb17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { functions, httpsCallable, auth, firestore, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,  getDatabase, ref, set }