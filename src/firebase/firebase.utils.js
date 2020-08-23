import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBWz46ieXvMFFLN3xL22WSrUR1Lc3plRqE",
  authDomain: "crwn-db-5c883.firebaseapp.com",
  databaseURL: "https://crwn-db-5c883.firebaseio.com",
  projectId: "crwn-db-5c883",
  storageBucket: "crwn-db-5c883.appspot.com",
  messagingSenderId: "568541821467",
  appId: "1:568541821467:web:08ae13beafdd02b90b96be",
  measurementId: "G-8NQD0K8CBS",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
