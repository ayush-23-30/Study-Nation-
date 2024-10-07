import mongoose from "mongoose";


const SectionSchema = new mongoose.Schema({
   sectionName : {
    type : String,
   }, 
   SubSection : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "SubSection", 
      required : true
    }
   ]
},{
  timestamps : true
})

export const Section = mongoose
.model("Section", SectionSchema)