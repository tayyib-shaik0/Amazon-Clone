import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD-NaYmw5OljqOWdojkBdKFLQm04Levq7M",
    authDomain: "clone-7ea6d.firebaseapp.com",
    databaseURL: "https://clone-7ea6d.firebaseio.com",
    projectId: "clone-7ea6d",
    storageBucket: "clone-7ea6d.appspot.com",
    messagingSenderId: "990666719282",
    appId: "1:990666719282:web:6c58b766e2a84fcf5b7c2b",
    measurementId: "G-BBS3B3HJ97",
});

const auth = firebase.auth();

export { auth };