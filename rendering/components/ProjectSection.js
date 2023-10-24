const ProjectSection = () => {
  return /*html*/ `
    <section id="projectSection" class="serviceSection">
        <h2>Un nouveau projet en tête ?</h2>
        <div class="sectionContent">
            <img class="sectionIcon" src="/images/icons/project.png" alt="project">
            <div class="content r1">
                <p>Dans le monde d'aujourd'hui, diriger une entreprise sans présence significative sur le web, c'est comme parler dans un micro débranché devant une salle de 500 personnes : les chances d'être entendu sont beaucoup plus minces.</p>
                <p>Chaque projet est unique. C'est la raison pour laquelle il m'est apparu nécessaire de maitriser tout les types possibles de service web.</p>
            </div>
        </div>
        <p class="whatICanDo">Ce que je peut réaliser pour vous :</p>
        <div class="sectionContent">
            <div class="content r1">
                <h3>un Site vitrine</h3>
                <p>indispensable pour toute entreprise souhaitant un référencement optimal sur Google. Sans parler de l'image de marque...</p>
            </div>
            <div class="content r2">
                <h3>un Site E-Commerce</h3>
                <p>Si vous souhaitez que votre buziness s'affranchisse des distances... Une boutique en ligne semble incontournable. </p>
            </div>
            <div class="content r1">
                <h3>un Blog</h3>
                <p>Parfois, on a ressent juste le besoin de partager l'actualité de son entreprise, ou de sa passion... pourquoi pas vous ?</p>
            </div>
        </div>
        <div class="sectionContent">
            <div class="content r1">
                <h3>une API</h3>
                <p>une API, ou "interface de programmation d'application", est un service qui  fais parfois des miracles : base de donnée, authentification, automatisation des mails... tout deviens possible !</p> 
            </div>        
            <div class="content r2">
                <h3>un réseau social</h3>
                <p>Les projets de sites communautaires sont devenus une solution idéale pour la communication au sein d'entreprises ayant un grand nombre de salariés</p>
            </div>      
        </div>
        <div class="sectionContent">
            <div class="content r2">
                <h3>... Et l'hébergement ? Et la maintenance ?</h3>
                <p>Avoir un site web, c'est bien. Et pouvoir être assuré de son bon fonctionnement... c'est pas mal, aussi.</p>
                <p>C'est pourquoi je propose également de m'occuper de la gestion et de la maintenance de votre site.</p>
                <p>Hébergement partagé, dédié ou VPS, sous Linux ou Windows Server, si cette partie vous fais peur... Pas de problême ! je prend le relais.</p> 
            </div>            
        </div>
    </section>
    `;
};

module.exports = ProjectSection;
