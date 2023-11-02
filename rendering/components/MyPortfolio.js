const LaptopViewer = require("./LaptopViewer");
const MobileViewer = require("./MobileViewer");

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

const MyPortfolio = () => {
  return /*html*/ `
        <h2>Quelques projets</h2>
        <section id="myPortfolio" class="mySection">
            <article class="r1">
                <h3>Les Pierres Folles</h3>
                <p class="projectDescription">Une application de référencement des dolmen, 
                menhirs et autre mégalithes de France. Elle offre une API complète pour 
                consulter et contribuer à la base de donnée.</p>
                <div class="projectScreenshot">
                    ${LaptopViewer(portfolioImages.les_pierres_folles_laptop)}
                    ${MobileViewer(
                      portfolioImages.les_pierres_folles_mobile
                    )}                      
                </div>
                <ul class="projectLinks">
                    <li><a class="linkBtn" target="_blank" href="https://lespierresfolles.com">Le site web</a></li>
                    <li><a class="linkBtn" target="_blank" href="https://github.com/MajorDown/lespierresfolles">Le repo' Github</a></li>
                </ul>
            </article>
        </section>
    `;
};

module.exports = MyPortfolio;
