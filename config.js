import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAej8bndXnUffPP9mGmthKtMpSF9DKJxgM",
    authDomain: "schoolsearch-753d0.firebaseapp.com",
    projectId: "schoolsearch-753d0",
    storageBucket: "schoolsearch-753d0.appspot.com",
    messagingSenderId: "304558161735",
    appId: "1:304558161735:web:b1aabcca478a63761ed662"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();