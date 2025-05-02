// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCd6wuCOWPNPManidEmYIe5ZP2n3qnG_as",
    authDomain: "si-gercab-new.firebaseapp.com",
    projectId: "si-gercab-new",
    storageBucket: "si-gercab-new.firebasestorage.app",
    messagingSenderId: "1058128473155",
    appId: "1:1058128473155:web:818010ba77f2dbd6a0b8f6",
    measurementId: "G-TV9VPDMZTC"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };