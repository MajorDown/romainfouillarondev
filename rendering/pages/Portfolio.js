const Head = require("../components/Head");
const Background = require("../components/background");
const Header = require("../components/Header");
const Footer = require("../components/Footer");
const ReactApp = require("../components/ReactApp");

const scripts = [
  "/scripts/react_components/MyTools.js",
  "/scripts/react_components/SectionSelector.js",
];

const Portfolio = () => {
  return /*html*/ `
    <!DOCTYPE html>
    <html lang="fr">
        ${Head()}
        <body>
            ${Background()}
            <a id="backToAccueil" href="/"><img src="/images/icons/home.png" alt="return">Retour à l'accueil</a>
            ${Header()}
            <main>
                <div id="sectionSelector"></div>
            </main>
                ${Footer()}
                ${ReactApp(scripts)}
            <script defer src="/scripts/hoverItem.js"></script>
            </body>
    </html>
    `;
};

module.exports = Portfolio;
