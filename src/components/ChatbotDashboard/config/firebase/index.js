import firebase from 'firebase'

const firebaseConfig = {
    // Paste Firebase API keys here
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const storage = firebase.storage()

export { db, storage }
