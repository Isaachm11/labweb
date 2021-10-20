import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0vXo7ZLUXjUZIWrx0f19jOVgW6GAOPqo",
  authDomain: "labweb-83446.firebaseapp.com",
  // databaseURL: "https://servicio-14be9.firebaseio.com",
  projectId: "labweb-83446",
  storageBucket: "labweb-83446.appspot.com",
  messagingSenderId: "253043733975",
  appId: "1:253043733975:web:1ef82e9fcb1f40bd7c8792"
};

let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }
  return null;
}
