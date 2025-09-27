const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASS,
  },
});

//Send confirmation email to user
const sendConfirmationEmail = async (userEmail, userName) => {
  await transporter.sendMail({
    from: `"Jobsta" <${process.env.ADMIN_EMAIL}>`,
    to: userEmail,
    subject: "Welcome to Jobsta",
    html: `
      <h2>Hello ${userName},</h2>
      <p>Thank you for signing up on <strong>Jobsta</strong>!</p>
      <p>We've received your details and will match you with opportunities based on your preferences.</p>
      <p>Stay tuned — we'll be in touch soon.</p>
      <br/>
      <p>– The Jobsta Team</p>
    `,
  });
};

module.exports = {
  sendConfirmationEmail,
};