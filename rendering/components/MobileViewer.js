const MobileViewer = (img, orientation) => {
  let mobileOrientation = "images/icons/mobileY.png";
  if (orientation && orientation === "landscape")
    mobileOrientation = "images/icons/mobileX.png";
  if (img.url && img.alt) {
    return /*html*/ `
                <div class="mobileViewer">
                    <img class="mobileViewerContainer" src=${mobileOrientation} alt="mobile" width="300" height="569"/>
                    <img class="mobileViewerContent" src="${img.url}" alt="${img.alt}" width="280" height="470"/>
                </div>
            `;
  }
};

module.exports = MobileViewer;
