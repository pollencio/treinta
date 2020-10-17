import { auth } from 'services/firebase'

// AUTHENTICATION

export const login = ({ email, password }) => (async) => {
  return auth.signInWithEmailAndPassword(email, password)
}

export const logout = () => (async) => {
  return auth.signOut()
}

export const signin = ({ email, password }) => (async) => {
  return auth.createUserWithEmailAndPassword(email, password)
}

export const sendPasswordLink = ({ email }) => (async) => {
  return auth.sendPasswordResetEmail(email)
}
