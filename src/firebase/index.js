import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCspEuRRfTLNyB2lHB6WdA_M6p-b-spD60",
  authDomain: "jc8nativefaiz.firebaseapp.com",
  databaseURL: "https://jc8nativefaiz.firebaseio.com",
  projectId: "jc8nativefaiz",
  storageBucket: "jc8nativefaiz.appspot.com",
  messagingSenderId: "507214386605",
  appId: "1:507214386605:web:f9b14fea772267cf"
};
// Initialize Firebase
export const Fire = firebase.initializeApp(firebaseConfig);
