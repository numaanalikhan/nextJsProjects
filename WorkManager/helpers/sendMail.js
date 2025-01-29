import nodemailer  from  "nodemailer"

export  const sendVerificaitonMail = async(toEmail,verficationToken)=>{
    
// create the transport
const auth = nodemailer.createTransport({
    service:"gmail",
    secure:true,
    port:465,
    // its the gmail port number
    auth:{
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS
        // app.password
    }
})

const verficationUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/verify/?token=${verficationToken}`

// the receiver
const receiver = {
    from: "numaanalikhan99@gmail.com",
    to : toEmail,
    subject: "email verification",
    text: " this email will expire with in two hours",
    html:
   ` <div>
        <p>This is a Verifcation Mail for verifing the User</p>
        <p>Please click the link here to verfiy the email and user</p>
        <button><a href=${verficationUrl}>Click Here</a></button>
    </div>`
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