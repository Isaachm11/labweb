import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAO1LHGB6R5LK2CZ5pcS008N-lxl96leNU",
  authDomain: "covid-games-lw-bad28.firebaseapp.com",
  projectId: "covid-games-lw-bad28",
  storageBucket: "covid-games-lw-bad28.appspot.com",
  messagingSenderId: "921889934190",
  appId: "1:921889934190:web:2b85e62584f9117c054f7f",
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
