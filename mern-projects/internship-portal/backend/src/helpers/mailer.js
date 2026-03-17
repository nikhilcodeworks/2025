const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const User = require("../database/Models/user");

const sendEmail = async (email, userId) => {
  try {
    console.log(userId);
    const hashedToken = await bcrypt.hash(userId.toString(), 10);
    console.log(hashedToken);

    await User.findByIdAndUpdate(userId, {
      forgotPasswordToken: hashedToken,
      forgotPasswordTokenExpiry: Date.now() + 30 * 60 * 1000,
    });

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.AUTH_GMAIL,
        pass: process.env.GMAIL_PASS,
      },
    });

    // creating mail options
    const mailOptions = {
      from: `Gourab Das <gourabd714@gmail.com>`,
      to: email,
      subject: "Reset your password",
      html: `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Password Reset</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
              }
              .email-container {
                  background-color: #ffffff;
                  width: 90%;
                  max-width: 600px;
                  margin: 20px auto;
                  padding: 30px;
                  border-radius: 8px;
                  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
              }
              h2 {
                  color: #333333;
              }
              p {
                  color: #555555;
                  line-height: 1.6;
              }
              a.button {
                  display: inline-block;
                  padding: 12px 24px;
                  background-color: #007bff;
                  color: #ffffff;
                  border-radius: 5px;
                  text-decoration: none;
                  font-weight: bold;
                  margin-top: 20px;
              }
              a.button:hover {
                  background-color: #0056b3;
              }
              .footer {
                  margin-top: 30px;
                  color: #888888;
                  font-size: 12px;
                  text-align: center;
              }
          </style>
      </head>
      <body>
          <div class="email-container">
              <h2>Reset Your Password</h2>
              <p>Hi,</p>
              <p>We received a request to reset your password. Click the button below to proceed:</p>
              <a href="${
                process.env.FRONTEND_DOMAIN
              }/forgotpassword?token=${hashedToken}" class="button">Reset Password</a>
              <p>If the button doesn't work, copy and paste this link into your browser:</p>
              <p>${
                process.env.FRONTEND_DOMAIN
              }/forgotpassword?token=${hashedToken}</p>
              <p>If you did not request a password reset, you can safely ignore this email.</p>
              <div class="footer">
                  <p>Thank you for using our service!</p>
                  <p>&copy; ${new Date().getFullYear()} TEN Internships. All rights reserved.</p>
              </div>
          </div>
      </body>
      </html>
      `,
    };

    const mailResponse = await transporter.sendMail(mailOptions);

    return mailResponse;
  } catch (err) {
    console.error("An error occured = ", err);
  }
};

module.exports = { sendEmail };
