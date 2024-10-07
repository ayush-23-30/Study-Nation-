import mongoose from "mongoose";

const SubSectionSchema = new mongoose.Schema({
   title : {
    type : String, 

   }, 
   timeDuration : {
    type : String
   }, 
   videoUrl : {
    type : String
   }
},{
  timestamps : true
})

export const SubSection = mongoose
.model("SubSection", SubSectionSchema)