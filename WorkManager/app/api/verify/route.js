//app/api/verify.....
import { signUpModel } from "@/models/signUpModel";
import jwt from "jsonwebtoken";
import { connect } from "mongoose";
import { NextResponse } from "next/server";

connect()

export async function GET(request) {
  try {
    // fetch the token from request.nextUrl.searchParams.get()
    const token = request.nextUrl.searchParams.get("token");
    console.log("tokenHere "+token);

    // check if the token existed
    if(!token){
        return NextResponse.json({
            success:false,
            message:"Token not found"
        })
    }

    // decode the token 
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decode: "+decoded);
    const {email} = decoded;
    console.log("email: "+email);

    // get the user and update isVerified to true...
   await signUpModel.findOneAndUpdate({email},{isVerified:true})

    return NextResponse.json({
      success: true,
      message: "User is verified succesfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Error while verifying the user",
      error:error.message
    });
  }
}
