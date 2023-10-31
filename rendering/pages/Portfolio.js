const Head = require("../components/Head");
const Background = require("../components/background");
const Header = require("../components/Header");
const MyTools = require("../components/MyTools");
const Footer = require("../components/Footer");
const FrontScripts = require("../components/FrontScripts");

const Portfolio = () => {
  return /*html*/ `
    <!DOCTYPE html>
    <html lang="fr">
        ${Head()}
        <body>
            ${Background()}
            ${Header()}
            <main>
                ${MyTools()}
            </main>
            ${Footer()}
            <script defer src="/scripts/linkScrollConfig.js"></script>
            <script defer src="/scripts/hoverItem.js"></script>
            </body>
    </html>
    `;
};

module.exports = Portfolio;
