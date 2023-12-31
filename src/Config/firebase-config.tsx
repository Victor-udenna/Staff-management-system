import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDMjIVHQswxON4by9RkizQOlc34Aidennc',
  authDomain: 'staffee-b211f.firebaseapp.com',
  projectId: 'staffee-b211f',
  storageBucket: 'staffee-b211f.appspot.com',
  messagingSenderId: '13727640612',
  appId: '1:13727640612:web:be7eb01b03e613659c7cb1',
  measurementId: 'G-BMZL4XZ5GC',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()
