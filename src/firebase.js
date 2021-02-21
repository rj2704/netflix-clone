import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBmhFA8zgM6DAW8QZ_4Kwe2FlMZSFLOPyU",
    authDomain: "netflix-clone-e4e6d.firebaseapp.com",
    projectId: "netflix-clone-e4e6d",
    storageBucket: "netflix-clone-e4e6d.appspot.com",
    messagingSenderId: "555593151120",
    appId: "1:555593151120:web:b1b0316f4e17494a8c1e15"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;