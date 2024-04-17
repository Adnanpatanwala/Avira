const sgMail = require('@sendgrid/mail');


const sendVerificationEmail = async({name,email,verificationToken,origin})=>{
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const emailBody = 'This is a test email. Click the link below:';
    const url = `https://${origin}/?name=${name}&verificationToken=${verificationToken}`;
const msg = {
  to: 'adnan.patanwala15542@sakec.ac.in',  
  from: 'adnanpatanwala786@gmail.com', 
  subject: 'Email Verification', 
  html: `<p>${emailBody} <a href="${url}">Click here to verify</a>.</p>`,

}
try {
    await sgMail.send(msg).then(()=>console.log('email sent'));
} catch (error) {
    console.log(error);
}
}
module.exports = sendVerificationEmail;