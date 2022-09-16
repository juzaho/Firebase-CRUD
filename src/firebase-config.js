// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTRehEJuwl89Bo3DYrrSbujnVUvJzh__o",
  authDomain: "react-firebase-crud-7a23c.firebaseapp.com",
  projectId: "react-firebase-crud-7a23c",
  storageBucket: "react-firebase-crud-7a23c.appspot.com",
  messagingSenderId: "988951897526",
  appId: "1:988951897526:web:83b0f98b8030cea3cfcd17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);