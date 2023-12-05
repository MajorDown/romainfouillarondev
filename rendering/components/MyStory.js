const MyStory = () => {
  return /*html*/ `
        <section id="myStory" class="mySection">
            <h2>...Mais qui suis-je...?</h2>
            <article class="r2">
                <p>J'ai fais mes classes dans les métiers de l'alimentation, plus particulièrement les produits de la mer,
                un domaine dans lequel j'ai acquis une certaine expertise au travers des années, jusqu'a des postes de management.</p>
                <p>J'ai également été enseignant dans la musique, la guitare, pour ensuite me tourner 
                de manière plus spécifique dans les métiers du son : calage de systèmes analogiques ou numériques,
                enregistrement et mixage studio / live... Je me suis fais plaisir.</p>
                <p>Passionné depuis tout jeune par le monde du web, j'ai finalement fini par sauter le pas 
                en mettant à profil mes connaissances et mon expérience pour proposer des solutions concrètes auprès des types d'entreprises
                dont je connais bien les problématiques.</p>
                <p>Enfin, je me concidère comme quelqu'un de fasciné par la nature, l'histoire et la sociologie. Et par conséquent, 
                la question écologique impact également mes décisions au sein de mon activité : choix des technologies, des framework, 
                des hébergements, du type de prestations...</p>
                <div id="myPassions">
                    <img class="passion" src="/images/icons/passions/Cook.png" alt="Cuisine, expériences culinaires"/>
                    <img class="passion" src="/images/icons/passions/nature.png" alt="Nature, écologie, Permaculture"/>
                    <img class="passion" src="/images/icons/passions/history.png" alt="Histoire, archéologie"/>
                    <img class="passion" src="/images/icons/passions/music.png" alt="Musique, sonorisation"/>
                    <img class="passion" src="/images/icons/passions/bushcraft.png" alt="Randonnée, buschraft"/>
                </div>
            </article>
        </section>    
    `;
};

module.exports = MyStory;
