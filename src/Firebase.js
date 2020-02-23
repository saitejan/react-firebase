import * as firebase from 'firebase';
// import firestore from 'firebase/firestore'

// const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyBf1X2UdMC6g5564uUU3IExyHrQLe9hVr8",
  authDomain: "react-firebase-90ece.firebaseapp.com",
  databaseURL: "https://react-firebase-90ece.firebaseio.com",
    projectId: "react-firebase-90ece",
    storageBucket: "react-firebase-90ece.appspot.com",
    messagingSenderId: "64293360301",
    appId: "1:64293360301:web:aff26698d261b4572e6c24",
    measurementId: "G-VS3DEN544T"
};
firebase.initializeApp(config);

firebase.firestore().settings({});

export default firebase;