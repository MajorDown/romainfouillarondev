const RevisionSection = () => {
  return /*html*/ `
        <section id="revisionSection">
            <h2>Votre site web a besoin d'être révisé ?</h2>
            <div class="sectionContent">
                <div class="content r1">
                    <p>Il est très courant de vouloir remettre son site au gout du jour, qu'il s'agisse de modifier certains aspects, certaines informations, ou alors d'une refonte totale.</p>
                    <p>En travaillant avec un designer UI/UX, Je vous propose de pouvoir repenser le projet de A à Z afin d'atteindre vos objectif</p>
                </div>
                <img src="/images/icons/revision.png" alt="revision">
            </div>
            <p class="whatICanDo">Ce que je peux réaliser pour vous :</p>
            <div class="sectionContent">
                <div class="content r2">
                    <h3>Le Design</h3>
                    <p>Au delà de la logique graphique du site, son identité visuelle doit être facilement reconnaissable, mais surtout ethétiquement agréable. minimaliste ou sophistiqué, coloré ou sobre...</p>
                </div>
                <div class="content r1">
                    <h3>La charte graphique</h3>
                    <p>Rien n'a plus d'impact sur un site web qu'un design cohérent et compréhensible. Ou puis-je cliquer, comment hierarchiser les infos... on en discute ?</p>
                </div>
                <div class="content r2">
                    <h3>Le contenu</h3>
                    <p>Au delà du référencement SEO, un contenu de qualité se doit de répondre aux interrogations des visiteurs : prestations, prix, positionnement, politique de confidentialité...</p>
                </div>
            </div>
        </section>
    `;
};

module.exports = RevisionSection;
