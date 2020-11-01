import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCb4oG5jjfuRl2BFJ-fg-Od1rJTtkdN1fk",
  authDomain: "messageclone-b8546.firebaseapp.com",
  databaseURL: "https://messageclone-b8546.firebaseio.com",
  projectId: "messageclone-b8546",
  storageBucket: "messageclone-b8546.appspot.com",
  messagingSenderId: "877324057916",
  appId: "1:877324057916:web:d41401e95cfa2a890b7239",
  measurementId: "G-9XMJ9J94DC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
