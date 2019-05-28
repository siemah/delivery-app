import firebase from '../../config/firebaseConfig';

const user = {

  /**
   * @name register 
   * send a register request to firebase backend
   * @param {Object} param0 credentials to log in
   */
  register({ email, password }) {
    return firebase.auth()
      .createUserWithEmailAndPassword( email, password );
  },
  /**
   * @name setUserProfile
   * update a user profile details just a displayname and photo url link
   * @param {Object} user an object contain some function about updating a user account & ..
   * @param {String} displayName a name displayed 
   * @param {String} photoURL link address to user profile photo
   */
  setUserProfile(user, displayName, photoURL="") {
    return user.updateProfile({
      displayName,
      photoURL,
    })
  },
  /**
   * @name login 
   * check if user has a right credentials to login
   * @param {Object} param0 list of credentials to let user login
   */
  login({email, password}) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  /**
   * @name authObserver
   * check the current state of user
   * @param {Function} cb callback function called when request sended @see firebase doc
   */
  authObserver(cb){
    return firebase.auth().onAuthStateChanged(cb);
  },
  sendEmailVerification: (user) => user.sendEmailVerification(),

}
export default user; 