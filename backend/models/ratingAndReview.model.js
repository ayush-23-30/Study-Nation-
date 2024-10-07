import mongoose from "mongoose";

const ratingAndReviewsSchema = new mongoose.Schema({
  user : {
    type : mongoose.Schema.Types.ObjectId, 
    ref : "User"
  },
  rating : {
    type : String,
    required : true
  }, 
  reviews : {
    type : String, 
    required : true
  }
}, {
  timestamps : true
})

export const RatingAndReview = mongoose.model("RatingAndReview", ratingAndReviewsSchema)