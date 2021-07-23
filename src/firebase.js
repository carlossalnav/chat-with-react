import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCHYp-mfpzh2DbxlLvpKgNhvgape7v0SKY",
    authDomain: "firechat-609f9.firebaseapp.com",
    projectId: "firechat-609f9",
    storageBucket: "firechat-609f9.appspot.com",
    messagingSenderId: "122958299555",
    appId: "1:122958299555:web:667a7b9a2c1c7abbf31a16"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};