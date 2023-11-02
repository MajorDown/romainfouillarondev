const Head = require("../components/Head");
const Background = require("../components/background");
const Header = require("../components/Header");
const MyTools = require("../components/MyTools");
const Footer = require("../components/Footer");
const MyPortfolio = require("../components/MyPortfolio");

const Portfolio = () => {
  return /*html*/ `
    <!DOCTYPE html>
    <html lang="fr">
        ${Head()}
        <body>
            ${Background()}
            <a id="backToAccueil" href="/"><img src="/images/icons/return.png" alt="return">Retour à l'accueil</a>
            ${Header()}
            <main>
                ${MyTools()}
                ${MyPortfolio()}
            </main>
            ${Footer()}
            <script defer src="/scripts/hoverItem.js"></script>
            </body>
    </html>
    `;
};

module.exports = Portfolio;
