function linkScrollConfig() {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
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
  });
}

linkScrollConfig();
