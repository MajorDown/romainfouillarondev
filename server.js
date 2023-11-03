// IMPORTS
const express = require("express");
const server = express();
require("dotenv").config();
const port = process.env.PORT;
const Accueil = require("./rendering/pages/Accueil");
const Portfolio = require("./rendering/pages/Portfolio");
const Contact = require("./rendering/pages/Contact");

// MIDDLEWARES
server.use(express.static("./public"));

// ROUTES

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
