import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RaisedButton } from 'material-ui'

import LoginForm from './components/LoginForm'
import RegForm from './components/RegForm'
import * as actionsLogin from './actions/login-form.js'
import * as actionsReg from './actions/reg-form.js'

const styleButton = {
  margin: 20
}

class App extends Component {
  render() {
    const {
      actionsLogin,
      actionsReg,
      loginFormOpen,
      regFormOpen,
      regFields
    } = this.props

    const gender = {
      change: actionsReg.changeFieldsGender,
      val: regFields.sex
    }

    return (
      <div>
        <RaisedButton
          style={styleButton}
          label="Войти"
          onClick={actionsLogin.toggleLoginForm}
        />
        <RaisedButton
          style={styleButton}
          label="Зарегистрироватся"
          primary={true}
          onClick={actionsReg.toggleRegForm}
        />
        <LoginForm
          open={loginFormOpen}
          handleClose={actionsLogin.toggleLoginForm}
          changeFields={actionsLogin.changeFieldsLogin}
          submit={actionsLogin.submitLoginForm}
        />
        <RegForm
          open={regFormOpen}
          handleClose={actionsReg.toggleRegForm}
          changeFields={actionsReg.changeFieldsReg}
          gender={gender}
          submit={actionsReg.submitRegForm}
        />
      </div>
    )
  }
}

App.propTypes = {
  loginFormOpen: PropTypes.bool,
  regFormOpen: PropTypes.bool,
  regFields: PropTypes.object,
  actionsLogin: PropTypes.shape({
    toggleLoginForm: PropTypes.func,
    changeFieldsLogin: PropTypes.func,
    submitLoginForm: PropTypes.func
  }),
  actionsReg: PropTypes.shape({
    changeFieldsGender: PropTypes.func,
    toggleRegForm: PropTypes.func,
    submitRegForm: PropTypes.func
  })
}

function mapStateToProps(state) {
  return {
    loginFormOpen: state.loginForm.loginFromOpen,
    regFormOpen: state.regForm.regFormOpen,
    regFields: state.regForm.fields
  }
}

function mapDispathToProps(dispath) {
  return {
    actionsLogin: bindActionCreators(actionsLogin, dispath),
    actionsReg: bindActionCreators(actionsReg, dispath)
  }
}

export default connect(mapStateToProps, mapDispathToProps)(App)
