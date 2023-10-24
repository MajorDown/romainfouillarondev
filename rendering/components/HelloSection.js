const HelloSection = () => {
  return /*html*/ `
        <section id="helloSection">
            <h2>A propos de moi...</h2>
            <img class="profil" src="images/profil.jpg" alt="photo">
            <p id="description">
                Spécialiste des technologies Javascript / Node.js, 
                Je suis toujours en quète des dernières mises à jours et
                tendances du moment.
            </p>
            <div id="technoList">
                <img class="technoIcon" src="/images/icons/html.png" alt="html5" />
                <img class="technoIcon" src="/images/icons/css.png" alt="css3" />
                <img class="technoIcon" src="/images/icons/javascript.png" alt="javascript" />
                <img class="technoIcon" src="/images/icons/typescript.png" alt="typescript" />
                <img class="technoIcon" src="/images/icons/react.png" alt="react" />
                <img class="technoIcon" src="/images/icons/next.js.png" alt="next.js" />
                <img class="technoIcon" src="/images/icons/node.js.png" alt="node.js" />
                <img class="technoIcon" src="/images/icons/express.png" alt="express" />
                <img class="technoIcon" src="/images/icons/mongodb.png" alt="mongoDB" />
                <img class="technoIcon" src="/images/icons/php.png" alt="php" />
                <img class="technoIcon" src="/images/icons/sql.png" alt="sql" />
                <img class="technoIcon" src="/images/icons/wordpress.png" alt="wordpress" />
                <img class="technoIcon" src="/images/icons/react-native.png" alt="react-native" />
            </div>
            <p class="centeredText">Vous voulez en savoir plus ?</p>
            <nav>
                <a class="linkBtn" href="#">Mes outils</a>
                <a class="linkBtn" href="#">Mon Portfolio</a>
                <a class="linkBtn" href="#">Mes passions</a>
            </nav>
        </section>
    `;
};

module.exports = HelloSection;
