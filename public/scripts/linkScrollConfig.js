/**
 * Configuration des liens pour le défilement en douceur vers les ancres dans la page.
 */
function linkScrollConfig() {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    if (!link.classList.contains("linkBtn")) {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").split("#")[1];
        const target = document.getElementById(targetId);
        const targetPosition = target.getBoundingClientRect().top;
        window.scroll({
          top: targetPosition,
          left: 0,
          behavior: "smooth",
        });
      });
    }
  });
}

linkScrollConfig();
