import firebase from 'firebase'; 

 var firebaseConfig = {
    apiKey: "AIzaSyARGoK-F-5012woW3sPnlaahb_6HfG9F3Q",
    authDomain: "school-attendance-110fd.firebaseapp.com",
    databaseURL: "https://school-attendance-110fd-default-rtdb.firebaseio.com",
    projectId: "school-attendance-110fd",
    storageBucket: "school-attendance-110fd.appspot.com",
    messagingSenderId: "220551397264",
    appId: "1:220551397264:web:bfe06731d46b634351fd15"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();