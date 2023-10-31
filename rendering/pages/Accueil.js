const Head = require("../components/Head");
const Background = require("../components/background");
const Header = require("../components/Header");
const NavSection = require("../components/NavSection");
const HelloSection = require("../components/HelloSection");
const ProjectSection = require("../components/ProjectSection");
const RevisionSection = require("../components/RevisionSection");
const DevSection = require("../components/DevSection");
const SeoSection = require("../components/SeoSection");
const HostSection = require("../components/HostSection");
const Footer = require("../components/Footer");
const FrontScripts = require("../components/FrontScripts");

const Accueil = () => {
  return /*html*/ `
    <!DOCTYPE html>
    <html lang="fr">
        ${Head()}
        <body>
            ${Background()}
            ${Header()}
            <main>
                ${NavSection()}
                ${HelloSection()}
                ${ProjectSection()}
                ${RevisionSection()}
                ${DevSection()}
                ${SeoSection()}
                ${HostSection()}
            </main>
            ${Footer()}
            <script defer src="/scripts/linkScrollConfig.js"></script>
        </body>
    </html>
    `;
};

module.exports = Accueil;
