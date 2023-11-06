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
server.use(express.json());

// CONTROLLER NODEMAILER
const transporter = nodemailer.createTransport({
  host: "mail.gmx.com",
  port: 587,
  auth: {
    user: process.env.NODEMAILER_MAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

server.post("/api/send-email", (req, res) => {
  const { mail, name, message } = req.body;
  const mailToSend = {
    from: process.env.NODEMAILER_MAIL,
    to: process.env.DESTINATION_MAIL,
    subject: `romainfouillarondev ~> nouveau message de ${name}`,
    html: `<p>nouveau message sur le site romainfouillarondev.fr</p>
    <p>de la part de ${name}</p>
    <p>adresse mail: ${mail}</p>
    <p>"${message}"</p>`,
  };
  transporter.sendMail(mailToSend, (err, info) => {
    if (err) {
      res.status(500).send(err);
      console.log(`server ~> : error :`, err);
    } else {
      res.status(200).send(info);
      console.log(
        "server ~> un mail viens d'être envoyé à l'adresse ",
        process.env.DESTINATION_MAIL
      );
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
