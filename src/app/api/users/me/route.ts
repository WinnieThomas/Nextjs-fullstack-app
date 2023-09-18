import {connect} from '@/dbConfig/dbConfig';
import getTokenData from '@/helpers/getTokenData';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';

connect();


export async function GET(request:NextRequest){
    try{
      const userId = getTokenData(request);
      const userData = await User.findById(userId).select("-password");
      return NextResponse.json({
         message:"User found",
         user: userData,
      });
      
    }
    catch(error:any){
        return NextResponse.json({error:error.message},{status:400});
    }

}