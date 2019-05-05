const initialState = {
  fname: null,
  lname: null,
  email: null,
}

export const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case 'POST_REGISTER_INIT':
    return {
      ...state, 
      ...payload,
    }

  default:
    return state;
  }
}
