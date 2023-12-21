/**
 * Composant React pour afficher l'icone et son information au survol de la souris.
 */

const ReadableIcon = ({ className, src, alt, width, height }) => {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <div
      className="readableIcon"
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      style={{
        position: "relative",
        width: `${width}`,
        height: `${height}`,
      }}
    >
      <img
        className={className}
        src={src}
        alt={alt}
        width={"100%"}
        height={"100%"}
      />
      {isHover && (
        <p
          className="hoverItem"
          style={{
            position: "absolute",
            top: "-35px",
            left: "-20px",
            color: "#1E1E1E",
            backgroundColor: "white",
            borderRadius: "10px",
            border: "2px white solid",
            padding: "5px",
          }}
        >
          {alt}
        </p>
      )}
    </div>
  );
};
