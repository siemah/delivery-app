import React, { useState } from 'react'

import InputField from '../widgets/InputField'
import Button from '../widgets/Button'

const CREDENTIALS = {
  fname: null,
  lname: null,
  email: null,
  password: null,
  confPassword: null,
}

export default function Register() {
  const [credentials, setCredentials] = useState(CREDENTIALS);
  const onChange = ({target}) => setCredentials(state => ({...state, [target.name]: target.value}))
  const onSubmit = e => {
    e.preventDefault();
    console.table(credentials);
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
