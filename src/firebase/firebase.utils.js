import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { batch } from 'react-redux';

const config = {
  apiKey: "AIzaSyC8pUU8d2O6qkRRQRW0yYVcNLsFcN9Y9MU",
  authDomain: "ecommerceclth.firebaseapp.com",
  projectId: "ecommerceclth",
  storageBucket: "ecommerceclth.appspot.com",
  messagingSenderId: "635410647550",
  appId: "1:635410647550:web:4da45f6fdc111fa2f018af",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // const collectionRef = firestore.collection(`collections`);
  // const collectionSnap = await collectionRef.get();
  // collectionSnap.docs.map((doc) => console.log(doc.data()));

  if (!snapShot.exists) {
    try {
      userRef.set({
        displayName: userAuth.displayName,
        createdDate: new Date(),
        email: userAuth.email,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};

// export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
//   const collectionRef = await firestore.collection(collectionKey);

//   const batch = firestore.batch();

//   objectToAdd.forEach((obj) => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//     // newDocRef.set(obj);
//   });
//   return await batch.commit()
// };

export const convertCollectionSnapshotToMap = (colections) => {
  const transformedCollections = colections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routName: encodeURI(title.toLowerCase()),
      items,
      title,
      id: doc.id,
    };
  });

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
// export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;
