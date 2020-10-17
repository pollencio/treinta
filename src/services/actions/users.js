import { auth } from 'services/firebase'

// AUTHENTICATION

export const login = ({ email, password }) => {
  return auth.signInWithEmailAndPassword(email, password)
}

export const logout = () => {
  return auth.signOut()
}

export const signup = ({ email, password }) => {
  return auth.createUserWithEmailAndPassword(email, password)
}

export const sendPasswordLink = ({ email }) => {
  return auth.sendPasswordResetEmail(email)
}
