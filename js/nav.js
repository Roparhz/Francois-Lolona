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
// const toggleMenu = document.querySelector(‘.toggle-menu’);
// const menu = document.querySelector(‘#menu’);
// toggleMenu.addEventListener(‘click’, function () {
//     const open = JSON.parse(toggleMenu.getAttribute(‘aria-expanded’));
//     toggleMenu.setAttribute(‘aria-expanded’, !open);
//     menu.hidden = !menu.hidden;
//     if( !menu.hidden ) {
//         menu.addEventListener(‘transitionend’, function(e) { /* Déclenche la prise de focus sur le premier lien du menu après la fin de la transition */
//             if(e.target != menu) return;
//             menu.querySelector(‘a’).focus();
//         })
//         document.body.classList.add(‘no-scroll’);
//         toggleMenu.setAttribute(‘aria-label’, ‘Close menu’);
//         /* Piégeage du focus à l’intérieur du menu après le dernier lien, on retourne sur le bouton d’ouverture/fermeture du menu */
//         const menuLinks = menu.querySelectorAll(‘a’);
//         menu.addEventListener(‘keydown’, function(e){
//             if(e.key===‘Tab’ || e.keyCode === 9) {
//                 if (document.activeElement === menuLinks[menuLinks.length - 1]) {
//                     toggleMenu.focus();
//                     e.preventDefault();
//                 }
//             }
//         })
//     } else {
//         document.body.classList.remove(‘no-scroll’);
//         toggleMenu.setAttribute(‘aria-label’, ‘Open menu’);
//     }
// })















