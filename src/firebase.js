import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

// Link to your firebase database
// https://console.firebase.google.com/u/0/project/customer-search-6d153/database/customer-search-6d153-default-rtdb/data

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK1ao9Uyy5IPwjskZHNfKE3W8Is_QkNdg",
  authDomain: "customer-search-6d153.firebaseapp.com",
  projectId: "customer-search-6d153",
  storageBucket: "customer-search-6d153.firebasestorage.app",
  messagingSenderId: "666494682926",
  appId: "1:666494682926:web:19ef1c1dd0ae59f9ee5cbf"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);