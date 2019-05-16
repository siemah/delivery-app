import userApi from '../../utils/data/user';

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