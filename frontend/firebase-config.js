// Your web app's Firebase configuration

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhO3eL704XJtXj_ZhkLlLtKS9zQMeBGp4",
  authDomain: "personal-41a8c.firebaseapp.com",
  projectId: "personal-41a8c",
  storageBucket: "personal-41a8c.appspot.com",
  messagingSenderId: "214324024618",
  appId: "1:214324024618:web:d6b74e8e9890192f22fa53",
  measurementId: "G-X1C5J0JWZL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
