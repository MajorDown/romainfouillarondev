/**
 * Composant React pour mapper et afficher les projets
 */
const MyPortfolio = () => {
  return (
    <section id="myPortfolio" className="mySection">
      <h2>Mon Portfolio</h2>
      {projectsList.map((project, index) => (
        <article key={index} className="r1">
          <h3>{project.name}</h3>
          <p className="projectDescription">{project.description}</p>
          <p>Technos utilisées : {project.used}</p>
          <div className="projectScreenshot">
            {project.pictures.image1.view === "laptop" && (
              <LaptopViewer screen={project.pictures.image1.src} angle="up" />
            )}
            {project.pictures.image1.view === "mobileY" && (
              <MobileViewer
                screen={project.pictures.image1.src}
                orientation={"portrait"}
                angle="up"
              />
            )}
            {project.pictures.image1.view === "mobileX" && (
              <MobileViewer
                screen={project.pictures.image1.src}
                orientation={"landscape"}
                angle="up"
              />
            )}
            {project.pictures.image2.view === "laptop" && (
              <LaptopViewer screen={project.pictures.image2.src} angle="down" />
            )}
            {project.pictures.image2.view === "mobileY" && (
              <MobileViewer
                screen={project.pictures.image2.src}
                orientation={"portrait"}
                angle="down"
              />
            )}
            {project.pictures.image2.view === "mobileX" && (
              <MobileViewer
                screen={project.pictures.image2.src}
                orientation={"landscape"}
                angle="down"
              />
            )}
          </div>
          <ul className="projectLinks">
            {project.url != "" && (
              <li>
                <a className="linkBtn" target="_blank" href={project.url}>
                  Lien vers le projet
                </a>
              </li>
            )}
            <li>
              <a className="linkBtn" target="_blank" href={project.repo}>
                Lien vers le repo' Github
              </a>
            </li>
          </ul>
        </article>
      ))}
    </section>
  );
};
