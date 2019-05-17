const initialState = {
  displayName: null,
  email: null,
  photoURL: null,
  emailVerified: null, 
  refreshToken: null,
  uid: null,
}

export const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case 'POST_INIT_REGISTER':
      return {
        ...state, 
        ...payload,
      }
    case 'POST_FULLFILED_REGISTER': 
      return {
        ...state,
        ...payload,
      }
    case 'POST_REJECTED_REGISTER': 
      return {
        ...state,
        message: payload.message,
      }
    
    case 'POST_INIT_LOGIN':
      return {
        ...state, 
        ...payload,
      }
    case 'POST_FULLFILED_LOGIN': 
      return {
        ...state,
        ...payload,
      }
    case 'POST_REJECTED_LOGIN': 
      return {
        ...state,
        message: payload.message,
      }

    default:
      return state;
  }
}
