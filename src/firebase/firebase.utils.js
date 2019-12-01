import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import {FIREBASE_CONFIG} from '../keys'

firebase.initializeApp(FIREBASE_CONFIG)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const createUserProfile = async (userAuth, data) => {
    if(!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    
    if (!snapShot.exists) {
      const {displayName, email, photoURL} = userAuth
      const createdAt = new Date()

      try {
          await userRef.set({
              displayName,
              email,
              photoURL,
              createdAt,
              ...data
          })
      } catch (error) {
          throw error
      }
    }
    return userRef
}

export const addCollAndDocs = async (collKey, objectsToAdd) => {
    const collRef = firestore.collection(collKey)
    
    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
        const newDocRef = collRef.doc()
        batch.set(newDocRef, obj)
    });

    return await batch.commit()
}

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase