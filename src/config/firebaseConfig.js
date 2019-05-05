// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB65j-iV8LzmuPTTiUK9-yfp0w6Js1-z30",
  authDomain: "delivery-app-eb9de.firebaseapp.com",
  databaseURL: "https://delivery-app-eb9de.firebaseio.com",
  projectId: "delivery-app-eb9de",
  storageBucket: "delivery-app-eb9de.appspot.com",
  messagingSenderId: "334172576924",
  appId: "1:334172576924:web:efe3783b1886b5c5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);