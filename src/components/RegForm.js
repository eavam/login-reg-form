import React from 'react'
import PropTypes from 'prop-types'
import {
  RaisedButton,
  Dialog,
  TextField,
  SelectField,
  MenuItem
} from 'material-ui'

const RegForm = ({ open, handleClose, changeFields, submit, gender }) => {
  return (
    <Dialog
      title="Регистрация"
      modal={false}
      open={open}
      onRequestClose={handleClose}>
      <div className="flex-column">
        <TextField
          floatingLabelText="Имя"
          name="name"
          onChange={changeFields}
        />
        <TextField
          floatingLabelText="Фамилия"
          name="lastName"
          onChange={changeFields}
        />
        <TextField
          floatingLabelText="Логин"
          name="Reg"
          onChange={changeFields}
        />
        <TextField
          floatingLabelText="Возраст"
          name="age"
          onChange={changeFields}
        />
        <SelectField
          floatingLabelText="Пол"
          value={gender.val}
          onChange={gender.change}>
          <MenuItem value="m" primaryText="М" />
          <MenuItem value="f" primaryText="Ж" />
        </SelectField>
      </div>
      <div className="flex-row">
        <RaisedButton label="Отправить" primary={true} onClick={submit} />
      </div>
    </Dialog>
  )
}

RegForm.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  changeFields: PropTypes.func,
  submit: PropTypes.func,
  gender: PropTypes.shape({
    change: PropTypes.func,
    val: PropTypes.string
  })
}

export default RegForm
