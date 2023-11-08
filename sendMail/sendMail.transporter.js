const nodemailer = require("nodemailer");

/**
 * Module de configuration du transporter Nodemailer.
 * @typedef {import('nodemailer/lib/smtp-transport').Transporter} Transporter
 */

/**
 * Crée et configure un transporteur Nodemailer pour envoyer des e-mails.
 * @type {Transporter}
 */
const transporter = nodemailer.createTransport({
  host: "mail.gmx.com",
  port: 587,
  auth: {
    user: process.env.NODEMAILER_MAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

module.exports = transporter;
