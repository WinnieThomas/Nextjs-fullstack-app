"use client"
import React from 'react';
import {useRouter} from 'next/navigation';
import Link from 'next/link'
import axios from 'axios';


const loginPage = () => {
  const[user,setUser] = React.useState({
    email:" ",
    password: " ",
  });

  const onLogin = async() =>{

  };

  return (
    <div>
      <h1>Login</h1>
      <hr/>
      <label htmlFor='email'>Email</label>
      <input id='email'
      type='text' placeholder='Email'
      value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
      <label htmlFor='password'>Password</label>
      <input id='password'
      type='password' placeholder='password'
      value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
      <button onClick={onLogin}>Login</button>

    </div>
  )
}

export default loginPage;