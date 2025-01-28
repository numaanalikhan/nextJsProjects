import { connectDb, signUpModel } from "@/models/signUpModel"
import { NextResponse } from "next/server"
import jwt from 'jsonwebtoken'
connectDb()

export async function POST(request){
    // get the data FROM raw/body
    var {email,password} =await request.json()
    try {
        // check weather the email is existed...
        const user = await signUpModel.findOne({email})
        console.log(user)
        if(!user.email){
            throw new Error("user not found")
        }
        
        // check is the pass existed
        const isPass = password === user.password // either true || false
       if(!isPass){
        throw new Error("wrong pass")
       }

       //if both are existed then create a token.... and send it in response as cookie

       const token = jwt.sign("authToken","secret key")

       const response = NextResponse.json({
        message:"successfully logged in",
        token:token
       })

       response.cookies.set("authtoken",token).value()
       
        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:error.message || "error"
        })
        
    }
}