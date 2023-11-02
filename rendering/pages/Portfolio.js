const Head = require("../components/Head");
const Background = require("../components/background");
const Header = require("../components/Header");
const MyTools = require("../components/MyTools");
const Footer = require("../components/Footer");
const MyPortfolio = require("../components/MyPortfolio");

const portfolioImages = {
  les_pierres_folles_laptop: {
    url: "/images/portfolio/les_pierres_folles_laptop.jpg",
    alt: "Les Pierres Folles",
  },
  les_pierres_folles_mobile: {
    url: "/images/portfolio/les_pierres_folles_mobile.jpg",
    alt: "les Pierres Folles",
  },
};

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
                ${MyPortfolio()}
            </main>
            ${Footer()}
            <script defer src="/scripts/linkScrollConfig.js"></script>
            <script defer src="/scripts/hoverItem.js"></script>
            </body>
    </html>
    `;
};

module.exports = Portfolio;
