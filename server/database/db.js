import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        console.log('inside conn db');
        const url = process.env.MONGO_URL;
      const conn = await mongoose.connect(url);
    console.log(`database connect successfully ${conn.connection.host}`);
    }catch(error){
        console.log('error while connection', error.message);
    }
}
export default connectDB;