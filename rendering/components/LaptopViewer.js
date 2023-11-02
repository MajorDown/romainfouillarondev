const LaptopViewer = (img) => {
  if (img.url && img.alt) {
    return /*html*/ `
              <div class="laptopViewer">
                  <img class="laptopViewerContainer" src="images/icons/laptop.png" alt="laptop" width="700" height="368"/>
                  <img class="laptopViewerContent" src="${img.url}" alt="${img.alt}" width="568" height="300"/>
              </div>
          `;
  }
};

module.exports = LaptopViewer;
