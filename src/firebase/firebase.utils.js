import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyBnV-lj-3Ju4brm6eivt8RkMOi5NGw1nEY",
    authDomain: "crwn-clothing-f1f3a.firebaseapp.com",
    projectId: "crwn-clothing-f1f3a",
    storageBucket: "crwn-clothing-f1f3a.appspot.com",
    messagingSenderId: "739258108199",
    appId: "1:739258108199:web:d2f2974b774088f9fb4102"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)