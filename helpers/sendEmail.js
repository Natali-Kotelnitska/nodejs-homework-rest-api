const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async data => {
  // data = {to,subject,html}
  try {
    const msg = { ...data, from: 'natalishvajka@gmail.com' };
    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = sendEmail;

/* перевірка чи надсилається msg/email
const email = {
  to: 'natali.shvajka@meta.ua',
  from: 'natalishvajka@gmail.com', // Use the email address or domain you verified above
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail
  .send(email)
  .then(() => console.log('Email send'))
  .catch(error => console.log(error.message));
*/
