 import firebase from 'firebase/compat/app'
 import 'firebase/compat/auth'
 import 'firebase/compat/firestore' 
  
  
  const firebaseConfig={
  apiKey: "AIzaSyAxlr4SUSLCbE-b3TZH1I4SlSsKTs_YA58",
  authDomain: "codedeck-183d8.firebaseapp.com",
  projectId: "codedeck-183d8",
  storageBucket: "codedeck-183d8.appspot.com",
  messagingSenderId: "392396497535",
  appId: "1:392396497535:web:7169788800df000baf954a",
  measurementId: "G-LJKPM5751W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  const auth = firebaseApp.auth()

  export {db,auth};