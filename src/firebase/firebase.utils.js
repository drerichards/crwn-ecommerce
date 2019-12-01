import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import {
    FIREBASE_CONFIG
} from '../keys'

firebase.initializeApp(FIREBASE_CONFIG)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const createUserProfile = async (userAuth, data) => {
    if (!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const {
            displayName,
            email,
            photoURL
        } = userAuth
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

export const convertCollectionsSnapshotToMap = collections => {
    const transformedColl = collections.docs.map(doc => {
        const {
            title,
            items
        } = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transformedColl.reduce((accum, collection) => {
        accum[collection.title.toLowerCase()] = collection
        return accum
    }, {})
}


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase