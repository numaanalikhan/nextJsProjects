import nodemailer  from  "nodemailer"




export const sendVerificaitonMail = async(toEmail)=>{

// create the transport
const auth = nodemailer.createTransport({
    service:"gmail",
    secure:true,
    port:465,
    auth:{
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS
    }
})

// the receiver
const receiver = {
    from: "numaanalikhan99@gmail.com",
    to : toEmail,
    subject: "email verification",
    text: " this email will expire with in two hours"
}


// now use sendMail method
try {
    await auth.sendMail(receiver)
    return {
        success:true,
        message:"Email Verification Sent to Mail"
    }
} catch (error) {
    console.log(error)
    return {
        success: false,
        message:"Error while sending Verification Email"
    }
}

// send mail has other parameter،//// eroor and emailResponse
}