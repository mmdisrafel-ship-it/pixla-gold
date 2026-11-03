/* Shared mobile menu only. Page navigation uses regular HTML links. */
const menu = document.querySelector("#mobile-menu");
const nav = document.querySelector(".navbar");
if (menu && nav) menu.addEventListener("click", () => nav.classList.toggle("open"));
