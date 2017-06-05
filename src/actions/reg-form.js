import axios from 'axios'
import {
  TOGGLE_REG,
  CHANGE_FIELDS_REG,
  SUCCESS_REG,
  RECEIVE_REG,
  FAILURE_REG
} from '../constants.js'

function successReg() {
  return {
    type: SUCCESS_REG
  }
}

function receiveReg() {
  return {
    type: RECEIVE_REG
  }
}

function failureReg() {
  return {
    type: FAILURE_REG
  }
}

export function toggleRegForm() {
  return {
    type: TOGGLE_REG
  }
}

export function changeFieldsReg(event, newValue) {
  return {
    type: CHANGE_FIELDS_REG,
    payload: {
      [event.target.name]: newValue
    }
  }
}

export function changeFieldsGender(event, index, value) {
  return {
    type: CHANGE_FIELDS_REG,
    payload: {
      'sex': value
    }
  }
}

export function submitRegForm() {
  return (dispatch) => {

    dispatch(receiveReg())
    axios({
      url: 'https://reqres.in/api/register',
      method: 'POST',
      data: {
        'email': 'name',
        'password': 'pass'
      }
    })
    .then(data => {
      if(data.status === 201) {
        dispatch(successReg())
      } else {
        dispatch(failureReg())
      }
    })
    .catch(error => dispatch(failureReg()))

  }
}