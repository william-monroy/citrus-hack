import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDxH-vR6oQsCn81zYfD_lPl2nsX3XAqPNg",
  authDomain: "chatapp-6508a.firebaseapp.com",
  projectId: "chatapp-6508a",
  storageBucket: "chatapp-6508a.appspot.com",
  messagingSenderId: "563836181901",
  appId: "1:563836181901:web:f3684172fbcbc2683b31c4",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
