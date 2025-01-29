### just implemented nodemailer ie. sending email  commit...
 when the app/signup api is hit
  1. destructure the request.json()
  2. use validation for the signup 
  3. check if email existed
  4. check password validation
  5. hash the password
  6. save the data in the db.
     nodemailer::
    7. call the sendMailVerfication(..toEamil..)

  sendMailVerification takes a parameter of email to whom we want to send.
in helpers/sendMail.js
... we import the node mailer package
... we make a fuction
... Three Steps:::
    create transport, receiver, sendMail

-------The above is used to generate a just verification_________________________

### email verfication....

