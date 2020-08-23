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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
