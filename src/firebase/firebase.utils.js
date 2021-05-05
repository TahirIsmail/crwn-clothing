/*
 {
    apiKey: "AIzaSyDjsb993yA_UIfqyIEnmrRjanjTU_3dKbo",
    authDomain: "crwndb-01.firebaseapp.com",
    projectId: "crwndb-01",
    storageBucket: "crwndb-01.appspot.com",
    messagingSenderId: "724989343427",
    appId: "1:724989343427:web:9b8c390e28938490761476",
    measurementId: "G-56JGNT0LQJ"
  }
  Project public-facing name=project-724989343427
*/
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
  apiKey: "AIzaSyDjsb993yA_UIfqyIEnmrRjanjTU_3dKbo",
  authDomain: "crwndb-01.firebaseapp.com",
  projectId: "crwndb-01",
  storageBucket: "crwndb-01.appspot.com",
  messagingSenderId: "724989343427",
  appId: "1:724989343427:web:9b8c390e28938490761476",
  measurementId: "G-56JGNT0LQJ"
};
export const createUserProfDocument = async(userAuth,additionalStore) => {
  if (!userAuth) return;
  const userReference = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userReference.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();
    try {
      await userReference.set({
        displayName,
        email,
        createdDate,
        ...additionalStore
      })
    }
    catch(error) {
      console.log("Error Creating users", error.message); 
    }
  }
  return userReference;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
