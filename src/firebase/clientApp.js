import firebase from 'firebase/app';
import 'firebase/auth'; // If you need it
import 'firebase/firestore'; // If you need it
// import 'firebase/storage' // If you need it

const clientCredentials = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);

  firebase.firestore();
}

export default firebase;
