import firebase from 'firebase/app';
import '/firebase/firestore'


const firebaseConfig = firebase.intializeApp({
    apiKey: "AIzaSyA3ZWzmoKiAbjYLNNo-dKhBoBHA0IG4vag",
    authDomain: "todoist-react-app.firebaseapp.com",
    databaseURL: "https://todoist-react-app.firebaseio.com",
    projectId: "todoist-react-app",
    storageBucket: "todoist-react-app.appspot.com",
    messagingSenderId: "706163251859",
    appId: "1:706163251859:web:e74761579557ac17c40b66"
});

export { firebaseConfig as firebase };