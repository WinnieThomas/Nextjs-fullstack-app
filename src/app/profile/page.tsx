'use client';
import React from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';



const ProfilePage = () => {
  const router= useRouter();
  const logout=async() => {
    
    try{
       await axios.get('/api/users/logout');
       toast.success("Logout Success ");
       router.push('/login');
    }
    catch(error:any){
       console.log("error",error.message);
    }
  };
  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default ProfilePage;
