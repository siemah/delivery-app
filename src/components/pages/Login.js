import React, { useState, } from 'react';
import { connect } from 'react-redux'

import InputField from '../widgets/InputField';
import Button from '../widgets/Button';

//import { login } from '../../store/actions/authActions';

const CREDENTIALS = {
  email: null,
  password: null,
}

const LoginPage = ({ login, history, }) => {

  const [credentials, setCredentials] = useState(CREDENTIALS);
  const onChange = ({ target }) => setCredentials(state => ({ ...state, [target.name]: target.value }))
  const doneLogin = () => {
    history.push('/');
  }

  const onSubmit = e => {
    e.preventDefault();
    //login(credentials, doneLogin);
  }

  return (
    <form onSubmit={onSubmit}>
      <InputField onChange={onChange} name='email' type='email' label='Email' /><br />
      <InputField onChange={onChange} name='password' type='password' label='Password' /><br />
      <Button type='submit'>Login</Button>
    </form>
  )
}

const mapStateToProps = ({ user }) => {
  return {
    user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //login: (credentials, cb = null) => dispatch(login(credentials, cb)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);