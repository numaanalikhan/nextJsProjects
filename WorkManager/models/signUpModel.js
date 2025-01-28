import mongoose from "mongoose";

const signUpSchema = new mongoose.Schema({
// first name
  firstName: { type: String, require: true },

//surname 
  surName: String,

// will be impemeted in future
  //
  // profilePhoto: {
  //   data: Buffer,
  //   contentType: String,
  //   about: String,
  // }

// gender 
  gender: {
    type: String,
    enum: ["male", "female"], //these are predefied list of options.. for ex: enum of days[sun,mon,tue....,sat]
    // can defined multiple constant,
    required: true,
  },

// email
  email: { type: String, unique: true, required: true },

// password
  password: String,

// about
  about: { type: String },

// flag isVerified
     isVerified:{
      type:Boolean,
      default:false
     },

// is verification token
     verificationToken:{
      type:String,
      default:null
     },

// time of creation
    createdAt:{
      type:Date,
      default: Date.now
    }     
});


export const signUpModel =
  mongoose.models.signUp || mongoose.model("signUp", signUpSchema);


