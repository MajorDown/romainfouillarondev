const getHashSection = () => {
  const hash = window.location.hash;
  return hash ? hash.substring(1) : null;
};

/**
 * Composant React pour séléctionner la section à afficher.
 */
const SectionSelector = () => {
  const [section, setSection] = React.useState(getHashSection() || "Projects");

  const changeSection = (newSection) => {
    window.location.hash = newSection;
    setSection(newSection);
  };

  return (
    <div id="sectionSelector">
      <div id="sectionSelectorTab">
        <button
          className={section === "Projects" ? "actived" : ""}
          onClick={() => changeSection("Projects")}
          disabled={section === "Projects" ? true : false}
        >
          Mon Portfolio
        </button>
        <button
          className={section === "Tools" ? "actived" : ""}
          onClick={() => changeSection("Tools")}
          disabled={section === "Tools" ? true : false}
        >
          Mes Outils
        </button>
        <button
          className={section === "Story" ? "actived" : ""}
          onClick={() => changeSection("Story")}
          disabled={section === "Story" ? true : false}
        >
          Qui suis-je...?
        </button>
      </div>
      <div>
        {section === "Tools" && <MyTools />}
        {section === "Projects" && <MyPortfolio />}
        {section === "Story" && <MyStory />}
      </div>
    </div>
  );
};

const sectionSelectorDiv = document.getElementById("sectionSelector");
const root = ReactDOM.createRoot(sectionSelectorDiv);
root.render(<SectionSelector />);
