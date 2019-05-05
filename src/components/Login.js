import React, { useState } from 'react'
import InputField from './widgets/InputField'

export default function Login() {
  
  const [credentials, setCredentials ] = useState({
    fname: null,
    lname: null,
    email: null,
    password: null,
  });

  return (
    <form>
      <InputField label='First Name' />
    </form>
  )
}
