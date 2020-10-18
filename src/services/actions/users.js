import { auth } from 'services/firebase'

// AUTHENTICATION

export const login = ({ email, password }) => {
  return auth.signInWithEmailAndPassword(email, password)
}

export const logout = () => {
  return auth.signOut()
}

export const signup = ({ email, password, name }) => {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => user.updateProfile({ displayName: name.split(' ')[0] }))
}

export const sendPasswordLink = ({ email }) => {
  return auth.sendPasswordResetEmail(email)
}
