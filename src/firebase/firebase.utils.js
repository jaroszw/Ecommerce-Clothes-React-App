import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC8pUU8d2O6qkRRQRW0yYVcNLsFcN9Y9MU',
  authDomain: 'ecommerceclth.firebaseapp.com',
  projectId: 'ecommerceclth',
  storageBucket: 'ecommerceclth.appspot.com',
  messagingSenderId: '635410647550',
  appId: '1:635410647550:web:4da45f6fdc111fa2f018af',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    try {
      userRef.set({
        displayName: userAuth.displayName,
        createdDate: new Date(),
        email: userAuth.email,
        ...additionalData,
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
