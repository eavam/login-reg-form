import { combineReducers } from 'redux'
import loginForm from './login-form.js'
import regForm from './reg-form.js'

export default combineReducers({
  loginForm,
  regForm
})
