import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDwvQUR1ddkSq3zB2b7w8PwZ_0o9b9zVUc',
    authDomain: 'fb-clone-34dda.firebaseapp.com',
    databaseURL: 'https://fb-clone-34dda.firebaseio.com',
    projectId: 'fb-clone-34dda',
    storageBucket: 'fb-clone-34dda.appspot.com',
    messagingSenderId: '741132525164',
    appId: '1:741132525164:web:1d746692dbb13ec2734249',
    measurementId: 'G-KXFK44QFGV'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
