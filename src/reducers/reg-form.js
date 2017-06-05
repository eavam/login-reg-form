import * as actionTypes from '../constants.js'

const initialState = {
  regFormOpen: false,
  fields: {}
}

const regForm = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.RECEIVE_REG:
    return {
      ...state
    }

  case actionTypes.SUCCESS_REG:
    return {
      ...state,
      regFormOpen: false,
      fields: {}
    }

  case actionTypes.FAILURE_REG:
    return {
      ...state,
      regFormOpen: false
    }

  case actionTypes.TOGGLE_REG:
    return {
      ...state,
      regFormOpen: !state.regFormOpen
    }

  case actionTypes.CHANGE_FIELDS_REG:
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

export default regForm
