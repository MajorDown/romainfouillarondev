function getPassedTime(dateString) {
  const regex = /^[0-9]{2}[/][0-9]{4}$/;
  if (!regex.test(dateString)) {
    throw new Error("Le format du dateString est incorrect.");
  }
  function timeCalcul(date) {
    const [month, year] = date.split("/");
    const currentDate = new Date();
    const diffInMonths =
      (currentDate.getFullYear() - year) * 12 +
      (currentDate.getMonth() + 1 - month);
    return diffInMonths;
  }
  const months = timeCalcul(dateString);
  const years = Math.floor(months / 12);
  const restOfMonths = Math.floor(months % 12);
  let stringToReturn = "";
  stringToReturn += years > 0 ? `${years} an${years > 1 ? "s" : ""}` : "";
  stringToReturn += years > 0 && restOfMonths > 0 ? " et " : "";
  stringToReturn += restOfMonths > 0 ? `${restOfMonths} mois` : "";
  return stringToReturn;
}

function getHoverItem(event) {
  const item = document.createElement("div");
  item.classList.add("hoverItem");
  item.style.position = "absolute";
  item.style.top = event.clientY - 30;
  item.style.left = event.clientX + 20;
  item.style.zIndex = 20;
  item.style.padding = "10px";
  item.style.backgroundColor = "white";
  item.style.border = "solid 2px black";
  item.style.borderRadius = "20px";
  item.style.transition = "0.3s";
  if (event.target.attributes.hoverData.nodeValue) {
    item.innerHTML = `${
      event.target.attributes.alt.nodeValue
    } : ${getPassedTime(event.target.attributes.hoverData.nodeValue)}`;
  }
  event.target.addEventListener("mousemove", (event) => {
    item.style.top = event.clientY - 30 + "px";
    item.style.left = event.clientX + 20 + "px";
  });
  document.body.appendChild(item);
}

function setHoverElements(className) {
  document.querySelectorAll(`.${className}`).forEach((hoverableElement) => {
    hoverableElement.addEventListener("mouseover", (event) => {
      getHoverItem(event);
    });
    hoverableElement.addEventListener("mouseout", (event) => {
      document.querySelectorAll(".hoverItem").forEach((item) => {
        item.remove();
      });
    });
    hoverableElement.addEventListener("click", (event) => {
      getHoverItem(event);
      setTimeout(() => {
        document.querySelectorAll(".hoverItem").forEach((item) => {
          item.remove();
        });
      }, 5000);
    });
  });
}

setHoverElements("technoIcon");
