import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBT-Jp1K7D8S3VH-AUVDoUriEjYw6seZEM",
  authDomain: "fir-login-aaec3.firebaseapp.com",
  projectId: "fir-login-aaec3",
  storageBucket: "fir-login-aaec3.appspot.com",
  messagingSenderId: "804145518662",
  appId: "1:804145518662:web:f4e29b479be5a12031d247",
  measurementId: "G-4L7T386EDC"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
