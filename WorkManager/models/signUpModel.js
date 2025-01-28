import mongoose from "mongoose";

const signUpSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  surName: String,
  // profilePhoto: {
  //   data: Buffer,
  //   contentType: String,
  //   about: String,
  // }
  gender: {
    type: String,
    enum: ["male", "female"], //these are predefied list of options.. for ex: enum of days[sun,mon,tue....,sat]
    // can defined multiple constant,
    required: true,
  },
  email: { type: String, unique: true, required: true },
  password: String,
  about: { type: String },
});

export const signUpModel =
  mongoose.models.signUp || mongoose.model("signUp", signUpSchema);

export const connectDb = async () => {
  if (mongoose.connections[0].readyState) {
    // Already connected
    return;
  }

  console.log("Connecting to MongoDB...");
  await mongoose.connect(process.env.MONGO_DB_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    dbName: "Hitesh's_Middleware", // Make sure to specify your DB name here
  });
  console.log("MongoDB connected successfully");
};
