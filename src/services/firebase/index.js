import { firebase } from '@firebase/app'
import { FirebaseConfig } from './config'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize firebase app
firebase.initializeApp(FirebaseConfig)

// Export database references
const db = firebase.firestore()
export const usersRef = db.collection('users')

// Export auth reference
export const auth = firebase.auth()
