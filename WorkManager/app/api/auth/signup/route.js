import { connectDb } from "@/helpers/lib";
import { sendVerificaitonMail } from "@/helpers/sendMail";
import {  signUpModel } from "@/models/signUpModel";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
connectDb();

export async function POST(request) {
    // take all the inputs
    const { firstName, surName, gender, email, password, about } = await request.json();

    // now to implement validation
    // check empty strings
    if (!firstName || !surName || !gender || !email || !password || !about) {
        return NextResponse.json({
            success: "FAILED",
            message: "Empty Input Fields"
        });
    } else if (!/^[a-z A-Z]*$/.test(firstName)) {
        return NextResponse.json({
            success: "FAILED",
            message: "Invalid FirstName"
        });
    } else if (!/^[a-zA-Z]*$/.test(surName)) {
        return NextResponse.json({
            success: "FAILED",
            message: "Invalid SurName"
        });
    } else if (password.length < 6) {
        return NextResponse.json({
            success: "FAILED",
            message: "Password is too short"
        });
    }

    try {
        // Check if the user already exists
        const existingUser = await signUpModel.findOne({ email });
        // the below will only run when thre is user or else it skips this and create the user
        if (existingUser) {
            return NextResponse.json({
                success: "FAILED",
                message: "User with provided email already exists"
            });
        }

        //payload for authToken
        const authToken = {email}

        // now create the jwt token
        const verificationToken = jwt.sign(authToken,process.env.JWT_SECRET)    
        console.log(verificationToken);

        // Create new user
        const user = new signUpModel({
            firstName,
            surName,
            gender,
            email,
            password,
            about,
            verificationToken,
        });

        // Save user to the database
        await user.save();
        // now the verification link
        await sendVerificaitonMail(user.email,user.verificationToken);

        return NextResponse.json({
            success: "SUCCESS",
            message: "User created successfully"
        });

    } catch (err) {
        console.error(err);
        return NextResponse.json({
            success: "FAILED",
            message: "Error occurred while checking for existing user"
        });
    }
}
