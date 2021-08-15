import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXEA5OB0Qf03qgCZuaheBNoBo--j0rBDs",
  authDomain: "crwn-clothes-588b4.firebaseapp.com",
  projectId: "crwn-clothes-588b4",
  storageBucket: "crwn-clothes-588b4.appspot.com",
  messagingSenderId: "291105868550",
  appId: "1:291105868550:web:a12c4777e52be3150e6c87",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
