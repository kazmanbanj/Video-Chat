import firebase from 'firebase';

let firebaseConfig = {
    apiKey: process.env.VUE_APP_apiKey,
    authDomain: process.env.VUE_APP_authDomain,
    projectId: process.env.VUE_APP_projectId,
    storageBucket: process.env.VUE_APP_storageBucket,
    messagingSenderId: process.env.VUE_APP_messagingSenderId,
    appId: process.env.VUE_APP_appId,
    measurementId: process.env.VUE_APP_measurementId
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAnalytics = firebase.analytics();

export default firebaseApp.firestore();