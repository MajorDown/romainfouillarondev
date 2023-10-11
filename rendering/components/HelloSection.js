const HelloSection = () => {
  return /*html*/ `
        <section id="helloSection">
            <h2>A propos de moi...</h2>
            <img class="profil" src="images/profil.jpg" alt="photo" width=300>
            <p id="description">
                consectetur nisi nostrum. Fugit, aperiam voluptates a, blanditiis suscipit, 
                reprehenderit autem sunt quia perspiciatis omnis tempore similique sequi 
                laboriosam illum nulla accusamus dolorum facere fuga earum inventore corporis 
                maiores et minima libero? Cumque consectetur atque possimus voluptatum 
                molestias? Saepe voluptate optio unde? Non molestiae doloribus dolores. 
                Expedita ducimus atque omnis corrupti dolorem minima veritatis officia possimus
            </p>
            <div id="technoList">
                <img src="/images/icons/html.png" alt="html5" />
                <img src="/images/icons/css.png" alt="css3" />
                <img src="/images/icons/javascript.png" alt="javascript" />
                <img src="/images/icons/typescript.png" alt="typescript" />
                <img src="/images/icons/react.png" alt="react" />
                <img src="/images/icons/next.js.png" alt="next.js" />
                <img src="/images/icons/node.js.png" alt="node.js" />
                <img src="/images/icons/express.png" alt="express" />
                <img src="/images/icons/mongodb.png" alt="mongoDB" />
                <img src="/images/icons/php.png" alt="php" />
                <img src="/images/icons/sql.png" alt="sql" />
                <img src="/images/icons/wordpress.png" alt="wordpress" />
                <img src="/images/icons/react-native.png" alt="react-native" />
            </div>
            <p class="centeredText">Vous voulez en savoir plus sur moi ?</p>
            <nav>
            <a class="linkBtn" href="#">Mes outils</a>
            <a class="linkBtn" href="#">Mon Portfolio</a>
            <a class="linkBtn" href="#">Mes passions</a>
            </nav>
        </section>
    `;
};

module.exports = HelloSection;
