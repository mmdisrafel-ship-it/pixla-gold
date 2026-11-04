/* Home interactions kept small; all reel and content markup lives in HTML. */
document.querySelector("#load-more")?.addEventListener("click", () => {
  document.querySelector("#reels-row")?.scrollBy({left: 320, behavior: "smooth"});
});
document.querySelectorAll(".reel-play").forEach((button, index) => {
  button.addEventListener("click", () => {
    const card = button.closest(".reel-card");
    const media = card?.querySelector("video");
    if (media) media.play();
    else card?.scrollIntoView({behavior:"smooth", inline:"center", block:"nearest"});
  });
});
document.querySelectorAll(".follow-btn").forEach(button => button.addEventListener("click", () => {
  const following = button.classList.toggle("following");
  button.textContent = following ? "✓ Following" : "＋ Follow";
}));
