import connectDb from "@/utils/db";
import postModel from "@/models/postSchema";
import { NextResponse } from "next/server";

connectDb()

export async function POST(request){
    var {title,desc,img,content,username} = await request.json();

    const post = new postModel({
            title,desc,img,content,username
        })
        post.save();
        return NextResponse.json({
            success:true,
            message:"post created successfully",
            post
        })
}