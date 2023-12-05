/**
 * Calcule le temps écoulé en mois à partir d'une chaîne de caractères au format MM/YYYY.
 * @param {string} dateString - Chaîne de caractères au format MM/YYYY.
 * @returns {string} - Une chaîne de caractères indiquant le temps écoulé en années et mois.
 * @throws {Error} - Lance une erreur si le format du dateString est incorrect.
 */
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

/**
 * Crée un élément d'information au survol d'un élément et l'attache à la souris.
 * @param {Event} event - L'événement de survol.
 */
function getHoverItem(event) {
  const item = document.createElement("div");
  item.classList.add("hoverItem");
  item.style.position = "absolute";
  item.style.backgroundColor = "white";
  item.style.border = "solid 2px black";
  item.style.borderRadius = "20px";
  item.innerHTML += `${event.target.attributes.alt.nodeValue}`;
  if (event.target.attributes.hoverdata)
    item.innerHTML += ` : ${getPassedTime(
      event.target.attributes.hoverdata.nodeValue
    )}`;
  event.target.addEventListener("mousemove", (event) => {
    item.style.top = event.clientY - 30 + window.scrollY + "px";
    item.style.left = event.clientX + 20 + window.scrollX + "px";
  });
  document.body.appendChild(item);
}

/**
 * Ajoute des éléments réactifs au survol à tous les éléments avec la classe spécifiée.
 * @param {string} className - La classe des éléments réactifs au survol.
 */
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
      console.log(event);
    });
  });
}

/**
 * Fais clignoter l'élément spécifié en ID.
 * @param {string} ID de l'élément clignotant.
 * @param {number} temps de clignotant en milliseconde.
 */
function blink(id, time) {
  const titleUnderscore = document.getElementById(id);
  setInterval(() => {
    titleUnderscore.classList.toggle("blink");
  }, time);
}

blink("titleUnderscore", 700);

// Initialisation des éléments réactifs au survol avec les classes "technoIcon" et "passion"
setHoverElements("technoIcon");
setHoverElements("passion");
