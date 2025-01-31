import userModel from "@/models/userSchema"
import connectDb from "@/utils/db"
import { NextResponse } from "next/server"

connectDb()

export async function POST(request) {
    const {name,email,password} = await request.json()

    const user = new userModel({
        name,email,password
    })
    user.save()

    return NextResponse.json({
        success:true,
        message:"user registered successfully",
        user
    })
}