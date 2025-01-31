import connectDb from "@/utils/db";
import mongoose from "mongoose";
connectDb()
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    }
},{timestamps:true})

const postModel = mongoose.models.post ||  mongoose.model("post",postSchema)

export default postModel