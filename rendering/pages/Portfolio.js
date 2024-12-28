const Head = require("../components/Head");
const Background = require("../components/Background");
const Header = require("../components/Header");
const Footer = require("../components/Footer");
const ReactApp = require("../components/ReactApp");

const scripts = [
  "/scripts/data/siteData.js",
  "/scripts/react_components/MobileViewer.js",
  "/scripts/react_components/LaptopViewer.js",
  "/scripts/react_components/MyStory.js",
  "/scripts/react_components/MyTools.js",
  "/scripts/react_components/MyPortfolio.js",
  "/scripts/react_components/SectionSelector.js",
  "/scripts/react_components/ReadableIcon.js",
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
        </body>
        ${ReactApp(scripts)}
    </html>
    `;
};

module.exports = Portfolio;
