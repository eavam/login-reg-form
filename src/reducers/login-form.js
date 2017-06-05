import * as actionTypes from '../constants.js'

const initialState = {
  loginFromOpen: false,
  fields: {}
}

const loginForm = (state = initialState, action) => {
  switch (action.type) {

  case actionTypes.RECEIVE_LOGIN:
    return {
      ...state
    }

  case actionTypes.SUCCESS_LOGIN:
    return {
      ...state,
      loginFromOpen: false,
      fields: {}
    }
  
  case actionTypes.FAILURE_LOGIN:
    return {
      ...state,
      loginFromOpen: false,
    }

  case actionTypes.TOGGLE_LOGIN:
    return {
      ...state,
      loginFromOpen: !state.loginFromOpen
    }

  case actionTypes.CHANGE_FIELDS_LOGIN:
    return {
      ...state,
      fields: {
        ...state.fields,
        ...action.payload
      }
    }

  default:
    return state
  }
}

export default loginForm