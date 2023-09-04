import mongoose from 'mongoose';

export async function connect(){
    try{
       mongoose.connect(process.env.MONGO_URI!);
       const connection = mongoose.connection;
       connection.on('connected',() => {
           console.log('connection succesfull');
       })

       connection.on('error',(err)=>{
          console.log('Error in connecting: ' + err.message);
       })
    }
    catch{
        console.log("Something went wrong!");
    }
}