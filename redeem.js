/* Static product cards are written in redeem.html; JS only filters them. */
const cardsOnPage = [...document.querySelectorAll("#product-grid .product-card")];
const search = document.querySelector("#product-search");
let category = "All";
function filterCards() {
  const q = (search?.value || "").trim().toLowerCase();
  cardsOnPage.forEach(card => {
    const categoryOk = category === "All" || card.dataset.category === category;
    const searchOk = (card.dataset.name || "").includes(q);
    card.hidden = !(categoryOk && searchOk);
  });
}
document.querySelector("#category-tabs")?.addEventListener("click", event => {
  const tab = event.target.closest("button[data-category]");
  if (!tab) return;
  category = tab.dataset.category;
  document.querySelectorAll("#category-tabs button").forEach(button => button.classList.toggle("active", button === tab));
  filterCards();
});
search?.addEventListener("input", filterCards);
document.querySelectorAll(".product-heart").forEach(button => button.addEventListener("click", () => {
  const saved = button.textContent.trim() === "♥";
  button.textContent = saved ? "♡" : "♥";
  button.setAttribute("aria-pressed", String(!saved));
}));
