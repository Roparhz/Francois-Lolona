const toggleMenu = document.querySelector(".toggle-menu");
const menu = document.querySelector("#menu");

toggleMenu.addEventListener("click", function () {
  const open = JSON.parse(toggleMenu.getAttribute("aria-expanded"));
  toggleMenu.setAttribute("aria-expanded", !open);
  menu.hidden = !menu.hidden;

  if (!menu.hidden) {
    menu.addEventListener("transitionend", function (e) {
      if (e.target != menu) return;
      menu.querySelector("a").focus();
    });
    document.body.classList.add("no-scroll");
    toggleMenu.setAttribute("aria-label", "Close menu");
  } else {
    document.body.classList.remove("no-scroll");
    toggleMenu.setAttribute("aria-label", "Open menu");
  }
});
