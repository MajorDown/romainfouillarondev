const NavSection = () => {
  return /*html*/ `
      <section id="navSection">
          <nav>
            <div class="comeToLeft come1st"><a href="#projectSection">Un nouveau projet en tête ?</a></div>
            <div class="comeToRight come2nd"><a href="#revisionSection">Votre site web a besoin d'être révisé ?</a></div>
            <div class="comeToLeft come3rd"><a href="#devSection">Besoin de créer une application ?</a></div>
            <div class="comeToRight come4th"><a href="#seoSection">Votre référencement doit évoluer ?</a></div>
            <div class="comeToLeft come5th"><a href="#debugSection">Des bugs à rectifier ?</a></div>
          </nav>
          <div id="callToContact">
            <p>Vous avez frappé à la bonne porte !</p>
            <a class="linkBtn" href="#projectSection">Contactez-moi</a>
            <p>Et discutons de vos projets</p>
          </div>         
      </section>
      `;
};

module.exports = NavSection;
