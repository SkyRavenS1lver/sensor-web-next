// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6WXLL3Sym3ENfPo9_YaIn5CoOCv4RFnc",
  authDomain: "sensor-web-da2ad.firebaseapp.com",
  databaseURL: "https://sensor-web-da2ad-default-rtdb.firebaseio.com",
  projectId: "sensor-web-da2ad",
  storageBucket: "sensor-web-da2ad.appspot.com",
  messagingSenderId: "789387599423",
  appId: "1:789387599423:web:71e868beec780c98c7e28a",
  measurementId: "G-R2H43DLXL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database}