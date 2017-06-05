import React from 'react'
import PropTypes from 'prop-types'
import { RaisedButton, FlatButton, Dialog, TextField } from 'material-ui'

const LoginForm = ({ open, handleClose, changeFields, submit }) => {
  return (
    <Dialog
      title="Введите свой логин и пароль"
      modal={false}
      open={open}
      onRequestClose={handleClose}>
      <div className="flex-column">
        <TextField
          floatingLabelText="Логин"
          name="login"
          onChange={changeFields}
        />
        <TextField
          floatingLabelText="Пароль"
          name="password"
          type="password"
          onChange={changeFields}
        />
      </div>
      <div className="flex-row">
        <FlatButton label="Восстановить пароль" />
        <RaisedButton label="Отправить" primary={true} onClick={submit} />
      </div>
    </Dialog>
  )
}

LoginForm.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  changeFields: PropTypes.func,
  submit: PropTypes.func
}

export default LoginForm
