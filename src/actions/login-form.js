import axios from 'axios'
import {
  TOGGLE_LOGIN,
  CHANGE_FIELDS_LOGIN,
  SUCCESS_LOGIN,
  RECEIVE_LOGIN,
  FAILURE_LOGIN
} from '../constants.js'

function successLogin() {
  return {
    type: SUCCESS_LOGIN
  }
}

function receiveLogin() {
  return {
    type: RECEIVE_LOGIN
  }
}

function failureLogin() {
  return {
    type: FAILURE_LOGIN
  }
}

export function toggleLoginForm() {
  return {
    type: TOGGLE_LOGIN
  }
}

export function changeFieldsLogin(event, newValue) {
  return {
    type: CHANGE_FIELDS_LOGIN,
    payload: {
      [event.target.name]: newValue
    }
  }
}

export function submitLoginForm() {
  return (dispatch, getState) => {
    const { fields } = getState().loginForm
    dispatch(receiveLogin())
    axios({
      url: 'https://reqres.in/api/login',
      method: 'POST',
      data: {
        email: fields.login,
        password: fields.password
      }
    })
      .then(data => {
        if (data.status === 200) {
          dispatch(successLogin())
        } else {
          dispatch(failureLogin())
        }
      })
      .catch(error => dispatch(failureLogin()))
  }
}
