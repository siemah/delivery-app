import userApi from '../../utils/data/user';

/**
 * @name register action
 * register for new user account and create one
 * @param {Object} credentials contain a list of new user details(email, password & ..)
 * @param {Function} cb callback function called after register action succeeds
 */
export const register = (credentials, cb=null) => async (dispatch, getState) => {
  let { email, password, fname, lname, confPassword } = credentials;
  if ( password !== confPassword ) {
    dispatch({ type: 'POST_REJECTED_REGISTER', payload: { message: 'Password and confirmation don\'t seem the same'} })
  } else {
    try {
      let { user } = await userApi.register({ email, password });
      await userApi.setUserProfile(user, `${fname} ${lname}`);
      dispatch({ type: 'POST_FULLFILED_REGISTER', payload: { user } });
      if( cb ) cb();
    } catch ({ message }) {
      dispatch({ type: 'POST_REJECTED_REGISTER', payload: { message } });      
    }
  }

}

/**
 * @name login action
 * sign in user to his account
 * @param {Object} credentials contain an email & password to authenticate
 * @param {Function} cb callback function called after register action succeeds
 */
export const login = (credentials, cb=null) => async (dispatch, getState) => {
  try {
    let { user } = await userApi.login(credentials);
    let { displayName, email, photoURL, emailVerified, refreshToken, uid } = user;
    
    if (user) dispatch({ type: 'POST_FULLFILED_LOGIN', payload: { uid, displayName, email, photoURL, emailVerified, refreshToken } });
    if(cb) cb();
  } catch (error) {
    console.log(error.message)
    dispatch({type: 'POST_REJECTED_LOGIN', payload: { message: error.message}})
  }
}