import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    gender : {
      type : String, 
    }, 
    dateOfbirth : {
      type : String
    }, 
    about : {
      type : String, 
      trim : true,
    },
    contctNumber : {
      type : Number, 
      trim : true
    } 
  },
  {
    timestamps: true,
  }
);


export const Profile = mongoose.model("Profile",profileSchema); 