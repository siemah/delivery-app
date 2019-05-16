import React, { useState, } from 'react';
import { connect } from 'react-redux'

import InputField from '../widgets/InputField';
import Button from '../widgets/Button';

import { register } from '../../store/actions/authActions';

const CREDENTIALS = {
  fname: null,
  lname: null,
  email: null,
  password: null,
  confPassword: null,
}

const RegisterPage = ({ register, history, }) => {

  const [ credentials, setCredentials ] = useState(CREDENTIALS);
  const onChange = ({target}) => setCredentials(state => ({...state, [target.name]: target.value}))
  const doneRegister = () => {
    history.push('/');
  }

  const onSubmit = e => {
    e.preventDefault();
    register(credentials, doneRegister);
  }

  return (
    <form onSubmit={onSubmit}>
      <InputField onChange={onChange} name='fname' label='First name' /><br />
      <InputField onChange={onChange} name='lname' label='Last name' /><br />
      <InputField onChange={onChange} name='email' type='email' label='Email' /><br />
      <InputField onChange={onChange} name='password' type='password' label='Password' /><br />
      <InputField onChange={onChange} name='confPassword' type='password' label='Password Confirmation' /><br />
      <Button type='submit'>Register</Button>
    </form>
  )
}

const mapStateToProps = ({ user }, ownProps) => {
  return {
    user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials,cb=null) => dispatch(register(credentials, cb)),
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( RegisterPage );