"use client"
import React, { useEffect } from 'react';
import {useRouter} from 'next/navigation';
import Link from 'next/link'
import axios from 'axios';
import {toast} from 'react-hot-toast';


const signup = () => {
  const router = useRouter();
  const[user,setUser] = React.useState({
    email:" ",
    password: " ",
    username: " ",
  });
  const [buttondisabled,setButtonDisabled] = React.useState(false);
  const[isLoading,setIsLoading] = React.useState(false);
  const onSignup = async() =>{
    try{
       setIsLoading(true);
       const response = await axios.post('/api/users/signup',user)
       console.log("Signup Success",response.data);
       router.push('/login');
    } catch(error:any){
          console.log("Error",error.message);
          toast.error(error.message);
    }finally{
       setIsLoading(false);
    } 
  };

  useEffect(()=>{
     if(user.username.length>0 && user.password.length>0 && user.email.length>0){
         setButtonDisabled(false);
     }
     else
     setButtonDisabled(true);
  },[user]);

  return (
    <div>
      <h1>{isLoading ? "Loading..." : "Plaese signup!"}</h1>
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
      <button onClick={onSignup}>{buttondisabled ? "Signup" : "Fill to signup"}</button>
      <Link href="/login">Visit login page</Link>
    </div>
  )
}

export default signup;
