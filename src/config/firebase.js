import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCP3KPGHvguV-3dJpJsEAb9DdxVsBzXa6A",
  authDomain: "fir-project-aa20a.firebaseapp.com",
  projectId: "fir-project-aa20a",
  storageBucket: "fir-project-aa20a.firebasestorage.app",
  messagingSenderId: "1014187855146",
  appId: "1:1014187855146:web:8c757982de32945e1aa253",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
