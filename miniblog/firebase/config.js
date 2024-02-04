// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDk5d3VJzSRChVpPjKR7KP3bfv41pUxMWo",
  authDomain: "miniblog-51bcc.firebaseapp.com",
  projectId: "miniblog-51bcc",
  storageBucket: "miniblog-51bcc.appspot.com",
  messagingSenderId: "488269013313",
  appId: "1:488269013313:web:fee8068b6052c832ab81c0",
  measurementId: "G-22GB26PNJ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export {db};