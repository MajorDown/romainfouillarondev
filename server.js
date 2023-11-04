// IMPORTS
const express = require("express");
const server = express();
const nodemailer = require("nodemailer");
require("dotenv").config();
const port = process.env.PORT;
const Accueil = require("./rendering/pages/Accueil");
const Portfolio = require("./rendering/pages/Portfolio");
const Contact = require("./rendering/pages/Contact");

// MIDDLEWARES
server.use(express.static("./public"));

// CONTROLLER NODEMAILER
const transporter = nodemailer.createTransport({
  host: "mail.gmx.com",
  port: 587,
  auth: {
    user: process.env.NODEMAILER_MAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

server.post("/send-email", (req, res) => {
  const { objet, message } = req.body;
  const mail = {
    from: "votre_adresse_email@gmx.com",
    to: process.env.NODEMAILER_MAIL,
    subject: objet,
    text: message,
  };
  transporter.sendMail(mail, (err, info) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(info);
    }
  });
});

// ENDPOINTS
server.get("/", (req, res) => {
  console.log("server ~> requête vers la page d'accueil");
  res.send(Accueil());
});
server.get("/portfolio", (req, res) => {
  console.log("server ~> requête vers la page 'portfolio'");
  res.send(Portfolio());
});
server.get("/contact", (req, res) => {
  console.log("server ~> requête vers la page 'contact'");
  res.send(Contact());
});

// LANCER LE SERVEUR
server.listen(port, () =>
  console.log("server ~> lancement sur le port " + port)
);
