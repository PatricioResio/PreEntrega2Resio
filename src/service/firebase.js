import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCy7YOFJRjdYI_C59ByB6ZAffZWv2ixrNM",
  authDomain: "ecommerce-9d9d0.firebaseapp.com",
  projectId: "ecommerce-9d9d0",
  storageBucket: "ecommerce-9d9d0.appspot.com",
  messagingSenderId: "157141300009",
  appId: "1:157141300009:web:c61e02761a8067bb7bbd38"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);