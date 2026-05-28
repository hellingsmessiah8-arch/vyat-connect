import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, where } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBIj_BPp2i7DrvUR9TfELr5EJExUQPiLMk",
  authDomain: "vytat-connect.firebaseapp.com",
  projectId: "vytat-connect",
  storageBucket: "vytat-connect.firebasestorage.app",
  messagingSenderId: "49660048994",
  appId: "1:49660048994:web:91516e1efb10c62603033b",
  measurementId: "G-FT5YXSLY95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, collection, addDoc, getDocs, query, orderBy, where };
