// Your web app's Firebase configuration

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxLPT1yWqToL5WQHAClu0QoYrU5ECfCHE",
  authDomain: "iedc-3e9fd.firebaseapp.com",
  projectId: "iedc-3e9fd",
  storageBucket: "iedc-3e9fd.appspot.com",
  messagingSenderId: "396346805565",
  appId: "1:396346805565:web:4c2c459b0f255052ee4954",
  measurementId: "G-SWWFQ0D9J1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
