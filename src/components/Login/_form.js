import React, {useState} from 'react';

export default function Form(){
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = (evt) => {
    evt.preventDefault()
    console.log(evt.target.value);
  }

  return(
    <section>
      <h2>Sup</h2>

      <form onSubmit={(evt) => submitForm(evt)}>
        <input name='username' value='' placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
        <input name='' value='' placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
        <input name='' value='' placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
        <button> Login </button>
      </form>
    </section>
  )
}
