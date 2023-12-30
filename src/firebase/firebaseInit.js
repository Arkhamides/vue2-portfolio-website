import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAV9DeH1MI1K-ThT22RXlKuYTGugdRJOfM",
    authDomain: "joe-archondis.firebaseapp.com",
    databaseURL: "https://joe-archondis-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "joe-archondis",
    storageBucket: "joe-archondis.appspot.com",
    messagingSenderId: "887837789432",
    appId: "1:887837789432:web:01405a86bf8bf845a2ff0d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();