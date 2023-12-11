const ReadableIcon = ({ src, alt, width, height }) => {
  const [isHover, setIsHover] = React.useState[false];
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
      <img src={src} alt={alt} width={"100%"} height={"100%"} />
      {isHover && (
        <p
          className="hoverItem"
          style={{
            position: "absolute",
            bottom: "-5px",
            left: "-5px",
            borderRadius: "10px",
            border: "2px white solid",
          }}
        >
          {alt}
        </p>
      )}
    </div>
  );
};
