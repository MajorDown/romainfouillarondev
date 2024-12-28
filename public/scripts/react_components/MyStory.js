/**
 * Composant React pour afficher mon histoire
 */

const MyStory = () => {
  return (
    <section id="myStory" className="mySection">
      <h2>...Mais qui suis-je...?</h2>
      <article className="r2">
        <p>
          J'ai fais mes classes dans les métiers de l'alimentation, plus
          particulièrement les produits de la mer, un domaine dans lequel j'ai
          acquis une certaine expertise au travers des années, jusqu'a des
          postes de management.
        </p>
        <p>
          J'ai également été enseignant dans la musique, la guitare, pour
          ensuite me tourner de manière plus spécifique dans les métiers du son
          : calage de systèmes analogiques ou numériques, enregistrement et
          mixage studio / live... Je me suis fais plaisir.
        </p>
        <p>
          Passionné depuis tout jeune par le monde du web, j'ai finalement fini
          par sauter le pas en mettant à profil mes connaissances et mon
          expérience pour proposer des solutions concrètes auprès des types
          d'entreprises dont je connais bien les problématiques.
        </p>
        <p>
          Enfin, je me concidère comme quelqu'un de fasciné par la nature,
          l'histoire et la sociologie. Et par conséquent, la question écologique
          impact également mes décisions au sein de mon activité : choix des
          technologies, des frameworks, des hébergements, du type de
          prestations...
        </p>
        <div id="myPassions">
          <ReadableIcon
            className="passion"
            src="/images/icons/passions/cook.png"
            alt="Cuisine, expériences culinaires"
            width={64}
            height={64}
          />
          <ReadableIcon
            className="passion"
            src="/images/icons/passions/nature.png"
            alt="Nature, écologie, Permaculture"
            width={64}
            height={64}
          />
          <ReadableIcon
            className="passion"
            src="/images/icons/passions/history.png"
            alt="Histoire, archéologie"
            width={64}
            height={64}
          />
          <ReadableIcon
            className="passion"
            src="/images/icons/passions/music.png"
            alt="Musique, sonorisation"
            width={64}
            height={64}
          />
          <ReadableIcon
            className="passion"
            src="/images/icons/passions/bushcraft.png"
            alt="Randonnée, buschraft"
            width={64}
            height={64}
          />
        </div>
      </article>
    </section>
  );
};
