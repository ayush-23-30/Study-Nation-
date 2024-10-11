import mongoose from "mongoose";
import otpMailSender from "../utils/mailSender.js";

const otpSchema = new mongoose.Schema({
  email : {
    type : String, 
    required : true
  },
  otp : {
    type : String, required : true
  }, 
  createdAt : {
    type : Date,
    default : Date.now(), 
    expires : 5*60
  }
}, {
  timestamps : true
})

// we want otp before making a creation [pre middle Ware]

 async function sendVerficationEmail (email , otp){
  try {
    const mailResponse = otpMailSender(email , "Verfication Email from  Study Nation", otp); 

  } catch (error) {
    console.error("error occured while sending a OTP ", error.message );
  }
 }

 otpSchema.pre("save", async function (next){
  await sendVerficationEmail(this.email,  this.otp); 
  next(); 
 })

export const Otp = mongoose.model("Otp", otpSchema)

// there are two things pre & post if you need a middleware run after making DB storage then, you use post middleware if you want before creation then you need a pre middleware