import firebase from '@firebase/app';
import '@firebase/storage';
import '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBra-msyDab5Vs_A2rF3s26gFzy319BgZs",
    authDomain: "firegram-aad2f.firebaseapp.com",
    projectId: "firegram-aad2f",
    storageBucket: "firegram-aad2f.appspot.com",
    messagingSenderId: "961565488373",
    appId: "1:961565488373:web:3ba9ab5660e3fefbc101bc"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };