import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKFVjp5vtD44Pzv6KV_hdossdK2RYwoXY",
  authDomain: "slack-21408.firebaseapp.com",
  projectId: "slack-21408",
  storageBucket: "slack-21408.appspot.com",
  messagingSenderId: "1039502398399",
  appId: "1:1039502398399:web:352ecf643d987c8308470a",
  measurementId: "G-LQXY3PVFTV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
