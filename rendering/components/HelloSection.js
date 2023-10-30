const HelloSection = () => {
  return /*html*/ `
        <section id="helloSection">
            <h2>A propos de moi...</h2>
            <img class="profil" src="images/profil.jpg" alt="photo">
            <p id="description">
                Spécialiste des technologies Javascript / Node.js, 
                Je suis toujours en quète des dernières mises à jours et
                tendances du moment. <br />
                Vous souhaitez en savoir plus ?
            </p>
            <nav>
                <a class="linkBtn" href="/portfolio">Mes outils</a>
                <a class="linkBtn" href="/portfolio">Mon Portfolio</a>
                <a class="linkBtn" href="/portfolio">Mes passions</a>
            </nav>
        </section>
    `;
};

module.exports = HelloSection;
