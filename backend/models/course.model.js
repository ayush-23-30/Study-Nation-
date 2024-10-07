import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  courseName : {
    type : String, 
    required : true,
  }, 
  courseDescription : {
    type : String, 
    required : true,
  }, 
  instructor : {
    type : mongoose.Schema.Types.ObjectId, 
    ref : "User", 
    required : true
  },  
  whatYouWillLearn : {
    type : String, 

  }, 
  courseContent : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : "Section"
  }], 
  ratingAndReviews : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "RatingAndReview"
    }
  ], 
  prices : {
    type : Number, 

  }, 
  thumbNail : {
    type : String,
  },
  tags : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Tag",
    }
  ], 
  studentEnrolled : [
    {
      type : mongoose.Schema.Types.ObjectId,
      required : true,
      ref : "User"
    }
  ]

},{
  timestamps : true
}) 

export const Course = mongoose
.model("Course", courseSchema)