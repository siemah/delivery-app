import firebase from '../../config/firebaseConfig';

const user = {

  register({ email, password }) {
    return firebase.auth()
      .createUserWithEmailAndPassword( email, password );
  },
  setUserProfile(user, displayName, photoURL="") {
    return user.updateProfile({
      displayName,
      photoURL,
    })
  }

}
export default user; 