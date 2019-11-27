import React, { useState } from 'react';
import Form from './_form'

function Login(){
  const [username, getUsername] = useState('');
  const [password, getPassword] = useState('');

  return (
    <section>
      <h1> Login </h1>
      <Form />
    </section>
  )
}
export default Login;
