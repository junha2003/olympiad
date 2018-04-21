import firebase from 'firebase';
import 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCFN4SPno8VydRXlQoiVtuuW8fqXs9fwpc",
    authDomain: "olympiad-60a11.firebaseapp.com",
    databaseURL: "https://olympiad-60a11.firebaseio.com",
    projectId: "olympiad-60a11",
    storageBucket: "olympiad-60a11.appspot.com",
    messagingSenderId: "182940494375"
  };
firebase.initializeApp(config);

const db = firebase.firestore();

export {db, firebase};