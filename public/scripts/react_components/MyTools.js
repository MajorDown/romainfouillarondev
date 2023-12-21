/**
 * Composant React pour mapper et afficher les technos et les tools
 */
const MyTools = () => {
  return (
    <section id="myTools" className="mySection">
      <h2>Mes Outils</h2>
      <article className="r1">
        <h3>Mes technos' de prédilection</h3>
        <div id="myTechnos">
          {technosList.map((techno, index) => (
            <ReadableIcon
              key={index}
              className="technoIcon"
              src={techno.src}
              alt={techno.name}
              width={64}
              height={64}
            />
          ))}
        </div>
      </article>
      <article className="r2">
        <h3>Mon attirail de Travail</h3>
        <div id="myMachine">
          {toolsList.map((tool, index) => (
            <ReadableIcon
              key={index}
              className="technoIcon"
              src={tool.src}
              alt={tool.name}
              width={64}
              height={64}
            />
          ))}
        </div>
      </article>
    </section>
  );
};
