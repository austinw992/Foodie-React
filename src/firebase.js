//older version of firebase. the newer firebase has different import functions
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwjXv2n4hXjXrC2YAB4GUO9kwkLJoNenU",
    authDomain: "foodie-f5421.firebaseapp.com",
    databaseURL: "https://foodie-f5421-default-rtdb.firebaseio.com/",
    projectId: "foodie-f5421",
    storageBucket: "foodie-f5421.appspot.com",
    messagingSenderId: "523608664498",
    appId: "1:523608664498:web:e2254e6933229e9208dcab",
    measurementId: "G-401LML7XFS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

//always export the variable
export default database;