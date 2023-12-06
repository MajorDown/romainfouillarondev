const MobileViewer = ({ screen, orientation, angle }) => {
  if (orientation && orientation === "portrait") {
    return (
      <div className={`mobileViewerY ${angle}`}>
        <img
          className="mobileViewerYContainer"
          src={"images/icons/mobileY.png"}
          alt="mobile"
          width="300"
          height="569"
        />
        <img
          className="mobileViewerYContent"
          src={screen}
          alt="screenShot"
          width="280"
          height="470"
        />
      </div>
    );
  } else if (orientation === "landscape") {
    return (
      <div className={`mobileViewerX ${angle}`}>
        <img
          className="mobileViewerXContainer"
          src={"images/icons/mobileX.png"}
          alt="mobile"
          width="569"
          height="300"
        />
        <img
          className="mobileViewerXContent"
          src={screen}
          alt="screenshot"
          width="470"
          height="280"
        />
      </div>
    );
  }
};
