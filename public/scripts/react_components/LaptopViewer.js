/**
 * Composant React pour encadrer un screenshot avec un visuel de laptop
 */

const LaptopViewer = ({ screen, angle }) => {
  return (
    <div className={`laptopViewer ${angle}`}>
      <img
        className="laptopViewerContainer"
        src="images/icons/laptop.png"
        alt="laptop"
        width="700"
        height="368"
      />
      <img
        className="laptopViewerContent"
        src={screen}
        alt={"laptop screenshot"}
        width="568"
        height="300"
      />
    </div>
  );
};
