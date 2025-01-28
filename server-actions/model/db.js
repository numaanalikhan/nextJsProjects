// to do schema

import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    toDo:String
})

export const todoModel = mongoose.model("todo",todoSchema)


export const connectDb = async () => {
    if (mongoose.connections[0].readyState) {
      // Already connected
      return;
    }
  
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_DB_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      dbName: "toDo", // Make sure to specify your DB name here
    });
    console.log("MongoDB connected successfully");
  };