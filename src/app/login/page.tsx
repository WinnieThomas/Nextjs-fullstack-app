"use client";
import React,{useEffect} from 'react';
import {useRouter} from 'next/navigation';
import axios from 'axios';
import { toast } from "react-hot-toast";


const LoginPage = () => {
  const router = useRouter();
  const[user,setUser] = React.useState({
    email:" ",
    password:" ",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async() => {
      try{
        setLoading(true);
        const response = await axios.post('/api/users/login',user);
        console.log("Login success", response.data);
        toast.success("Login success");
        router.push('/profile');
      }
      catch(error:any){
         console.log("login failed",error.message);
         toast.error(error.message);
      }
      finally{
        setLoading(false);
        }
  };

  useEffect(()=>{
    if(user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
  } else{
      setButtonDisabled(true);
  }
  },[user]);

  return (
    <div>
      <h1>{loading ? "Processing" : "Login"}</h1>
      <hr />
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
  );
}

export default LoginPage;