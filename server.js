// IMPORTS
const express = require("express");
const server = express();
require("dotenv").config();
const port = process.env.PORT;
const Archiver = require("./archiver/Archiver");
const archive = new Archiver("./archive");
const Accueil = require("./rendering/pages/Accueil");
const Portfolio = require("./rendering/pages/Portfolio");
const Contact = require("./rendering/pages/Contact");
const controller = require("./sendMail/sendMail.controller");

// MIDDLEWARES
server.use(express.static("./public"));
server.use(express.json());

// ENDPOINTS
server.get("/", (req, res) => {
  console.log("server ~> requête vers la page d'accueil");
  archive.log(req.ip, ":", req.method, req.path);
  res.send(Accueil());
});
server.get("/portfolio", (req, res) => {
  console.log("server ~> requête vers la page 'portfolio'");
  archive.log(req.ip, ":", req.method, req.path);
  res.send(Portfolio());
});
server.get("/contact", (req, res) => {
  console.log("server ~> requête vers la page 'contact'");
  archive.log(req.ip, ":", req.method, req.path);
  res.send(Contact());
});
server.post("/api/send-email", (req, res) => {
  controller(req, res);
  archive.log(req.ip, ":", req.method, req.path, "~>", res.statusCode);
});

// LANCER LE SERVEUR
server.listen(port, () =>
  console.log("server ~> lancement sur le port " + port)
);
