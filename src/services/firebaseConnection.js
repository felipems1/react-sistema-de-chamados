import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyF1HM3jWGaa_pGJanLyBwryZC8YpNiG0",
  authDomain: "sist-chamados.firebaseapp.com",
  projectId: "sist-chamados",
  storageBucket: "sist-chamados.appspot.com",
  messagingSenderId: "108649742811",
  appId: "1:108649742811:web:c0ac985626c5114ed7e7fe",
  measurementId: "G-QWWMCRVRRV",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
