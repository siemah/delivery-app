import firebase from '../../config/firebaseConfig';

const user = {

  async register({ email, password }) {
    try {
      firebase.auth()
        .createUserWithEmailAndPassword( email, password );
    } catch (error) {
      throw new Error()
    }
  }

}
export default user; 