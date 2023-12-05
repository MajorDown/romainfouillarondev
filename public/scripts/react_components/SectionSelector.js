/**
 * Composant React pour séléctionner la section à afficher.
 */
const SectionSelector = () => {
  const [section, setSection] = React.useState("myTools");

  return (
    <div>
      <p>SectionSelection</p>
      <button onClick={() => setSection("myPortfolio")}>Mon Portfolio</button>
      <button onClick={() => setSection("myTools")}>Mes Outils</button>
      <button onClick={() => setSection("myStory")}>Qui suis-je...?</button>
      <div>
        {section === "myTools" && <MyTools />}
        {section === "myPortfolio" && <p>myPortfolio</p>}
        {section === "myStory" && <p>myStory</p>}
      </div>
    </div>
  );
};

const sectionSelectorDiv = document.getElementById("sectionSelector");
const root = ReactDOM.createRoot(sectionSelectorDiv);
root.render(<SectionSelector />);
