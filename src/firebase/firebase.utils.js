import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCaJCpCWfWU9IhDZdSBjADHTr0ETH4lq1k",
    authDomain: "crwn-db-b7fb2.firebaseapp.com",
    databaseURL: "https://crwn-db-b7fb2.firebaseio.com",
    projectId: "crwn-db-b7fb2",
    storageBucket: "crwn-db-b7fb2.appspot.com",
    messagingSenderId: "476926460841",
    appId: "1:476926460841:web:bc9fda3ab7c0b02561bab8",
    measurementId: "G-PC08B9MLBT"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase