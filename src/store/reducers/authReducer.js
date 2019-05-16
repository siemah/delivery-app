const initialState = {
  fname: null,
  lname: null,
  email: null,
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
      user: payload.user,
    }
  case 'POST_REJECTED_REGISTER': 
    return {
      ...state,
      message: payload.message,
    }

  default:
    return state;
  }
}
