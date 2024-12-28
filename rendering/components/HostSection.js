const HostSection = () => {
  return /*html*/ `
        <section id="hostSection" class="serviceSection">
            <div class="titleAndReturn">
                <h2>Un problème avec votre hébergement ?</h2>
                <a href="#header">retour<img src="/images/icons/back.png" alt="return to top"/></a>
            </div>
            <div class="sectionContent">
                <img class="sectionIcon" src="/images/icons/host.png" alt="host">
                <div class="content r1">
                    <p>Il est parfois difficile de s'y retrouver parmis toutes les enseignes et toutes les offres d'hébergement proposées.</p>
                    <p>Hebergement partagé ou dédié, cloud ou VPS sont autant de termes qui peuvent porter à confusion et vous pousser à l'erreur.</p>
                    <p>Ensemble, nous déterminerons la meilleure solution d'hébergement pour votre projet.</p>
                </div>
            </div>
            <p class="whatICanDo">Ce que je peux gérer pour vous :</p>
            <div class="sectionContent">
                <div class="content r1">
                    <h3>Hébergement mutualisé</h3>
                    <p>La solution la plus économique. Votre site web est hébergé sur le même serveur que d'autres sites web. Ideal pour les sites web de petite taille ou à faible trafic.</p>
                </div>
                <div class="content r2">
                <h3>Hébergement dédié</h3>
                <p>Location d'un serveur physique complet pour votre site web. Idéal pour les sites web de grandes tailles ou à trafic élevé.</p>
                <p>Pour tutoyer les étoiles.</p>
                </div>
            </div>
            <div class="sectionContent">
                <div class="content r2">
                    <h3>Serveur Privé Virtuel (VPS)</h3>
                    <p>Une division virtuelle d'un serveur physique. Chaque VPS dispose de ses propres ressources, telles que la mémoire, le processeur et le stockage. Idéal pour les sites web de taille moyenne ou à trafic modéré.</p>
                </div>
                <div class="content r1">
                    <h3>solution "Cloud"</h3>
                    <p>Utilise des ressources informatiques distribuées sur plusieurs serveurs. Idéal pour les sites web dynamiques ou à besoins variables.</p>
                </div>
            </div>             
        </section>
    `;
};

module.exports = HostSection;
