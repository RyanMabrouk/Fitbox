import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBVvf8-dPs9VPUsWNSe5B7UfkGe1v3Uk4M",
  authDomain: "fitbox-30091.firebaseapp.com",
  projectId: "fitbox-30091",
  storageBucket: "fitbox-30091.appspot.com",
  messagingSenderId: "713996396617",
  appId: "1:713996396617:web:f843bc22784bd9e4f1f798",
  measurementId: "G-G1HG7QYH0G"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
