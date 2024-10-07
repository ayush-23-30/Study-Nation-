import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();

const connectionWithDb = async ()=>{
  mongoose.connect(process.env.MONGO_URL)
  .then(()=>{
    console.log("Connection is compeleted");
    
  }).catch((err)=>{
    console.log("Mongo Db connection not established", err.message);
    process.exit(1); 
  })
}