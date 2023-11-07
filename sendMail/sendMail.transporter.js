require("dotenv").config();
const nodemailer = require("nodemailer");

// TRANSPORTER NODEMAILER
const transporter = nodemailer.createTransport({
  host: "mail.gmx.com",
  port: 587,
  auth: {
    user: process.env.NODEMAILER_MAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

module.exports = transporter;
