'use client';
import React,{useState} from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import Link from 'next/link';



const ProfilePage = () => {
  const router= useRouter();
  const [data,setData] = useState('null');
  
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

  const getUserDetails = async() => {
    const res = await axios.get('/api/users/me');
    console.log(res.data.user._id);
    setData(res.data.user.username);
  }


  return (
    <div>
      <h1>Profile Page</h1>
      <hr />
      <h2 className="p-1 rounded bg-green-500">{data === 'null' ? "No user data" : <Link href={`/profile/${data}`}>{data}
            </Link>}</h2>
      <button onClick={logout}>logout</button>
      <button
        onClick={getUserDetails}
        className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >GetUser Details</button>
    </div>
  );
}

export default ProfilePage;
