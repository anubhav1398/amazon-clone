import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxZ47_LZTWaixSzuWjgOEq2E3vP7v0MU0",
  authDomain: "challenge-6bce5.firebaseapp.com",
  projectId: "challenge-6bce5",
  storageBucket: "challenge-6bce5.appspot.com",
  messagingSenderId: "228592380138",
  appId: "1:228592380138:web:f6592736be015d1d328f93",
  measurementId: "G-2YLQW0SPGC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
