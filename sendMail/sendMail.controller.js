require("dotenv").config();
const transporter = require("./sendMail.transporter");

const controller = (req, res) => {
  const { mail, name, message } = req.body;
  const mailToSend = {
    from: process.env.NODEMAILER_MAIL,
    to: process.env.DESTINATION_MAIL,
    subject: `romainfouillarondev ~> nouveau message de ${name}`,
    html: `<p>nouveau message sur le site romainfouillarondev.fr</p>
        <p>de la part de : ${name}</p>
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
};

module.exports = controller;
