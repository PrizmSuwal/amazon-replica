import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0Y--AF1-3HTVR6oEAFP63H9Cpluu5VbE",
  authDomain: "clone-a844a.firebaseapp.com",
  databaseURL: "https://clone-a844a.firebaseio.com",
  projectId: "clone-a844a",
  storageBucket: "clone-a844a.appspot.com",
  messagingSenderId: "547876111438",
  appId: "1:547876111438:web:8dc6dd96b3366695ecaf1f",
  measurementId: "G-QBYL2KQHZT"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};