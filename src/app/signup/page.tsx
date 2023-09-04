"use client"
import React from 'react';
import {useRouter} from 'next/navigation';
import Link from 'next/link'
import {axios} from 'axios';


const signup = () => {
  const[user,setUser] = React.useState({
    email:" ",
    password: " ",
    username: " ",
  });

  const onSignup = async() =>{

  };

  return (
    <div>
      <h1>Sign up</h1>
      <hr/>
      <label htmlFor='username'>Username</label>
      <input id='username'
      type='text' placeholder='Username'
      value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}/>
      <label htmlFor='email'>Email</label>
      <input id='email'
      type='text' placeholder='Email'
      value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
      <label htmlFor='password'>Password</label>
      <input id='password'
      type='password' placeholder='password'
      value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
      <button onClick={onSignup}>Signup</button>

    </div>
  )
}

export default signup;
