const Head = require("../components/Head");
const Background = require("../components/background");
const Header = require("../components/Header");
const ContactForm = require("../components/ContactForm");
const Footer = require("../components/Footer");
const ReactApp = require("../components/ReactApp");

const scripts = ["/scripts/react_components/SendMail.js"];

const Contact = () => {
  return /*html*/ `
    <!DOCTYPE html>
    <html lang="fr">
        ${Head()}
        <body>
            ${Background()}
            <a id="backToAccueil" href="/"><img src="/images/icons/home.png" alt="return">Retour à l'accueil</a>
            ${Header()}
            <main>
                ${ContactForm()}
            </main>
            ${Footer()}
            </body>
            ${ReactApp(scripts)}
    </html>
    `;
};

module.exports = Contact;
