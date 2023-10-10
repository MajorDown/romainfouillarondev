// IMPORTS
const express = require("express");
const server = express();
require("dotenv").config();
const port = process.env.PORT;
const Accueil = require("./rendering/pages/Accueil");

// MIDDLEWARES
server.use(express.static("./public"));

// ROUTES

// ENDPOINTS
server.get("/", (req, res) => {
  console.log("server ~> requête vers la page d'accueil");
  res.send(Accueil());
});

// LANCER LE SERVEUR
server.listen(port, () =>
  console.log("server ~> lancement sur le port " + port)
);
