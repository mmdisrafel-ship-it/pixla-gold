/* Profile demo: edit local display name. Authentication needs a backend. */
const edit = document.querySelector("#edit-profile-btn");
const name = document.querySelector("#profile-name");
const handle = document.querySelector("#profile-handle");
if (name && localStorage.getItem("pixla_profile_name")) name.textContent = localStorage.getItem("pixla_profile_name");
if (handle && localStorage.getItem("pixla_profile_handle")) handle.textContent = localStorage.getItem("pixla_profile_handle");
edit?.addEventListener("click", () => {
  const nextName = prompt("Display name:", name?.textContent || "Creator");
  if (!nextName?.trim()) return;
  const nextHandle = prompt("Username:", handle?.textContent || "@creator");
  if (nextHandle === null) return;
  name.textContent = nextName.trim();
  handle.textContent = nextHandle.trim() || "@creator";
  localStorage.setItem("pixla_profile_name", name.textContent);
  localStorage.setItem("pixla_profile_handle", handle.textContent);
});
document.querySelector("#about-btn")?.addEventListener("click", () => document.querySelector("#about-section")?.scrollIntoView({behavior:"smooth"}));
document.querySelector("#profile-create-btn")?.addEventListener("click", () => alert("Frontend demo only. A real post upload needs a backend and file storage."));
document.querySelector("#view-activity")?.addEventListener("click", () => alert("Activity history is demo content in this frontend."));
document.querySelectorAll("[data-profile-tab]").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll("[data-profile-tab]").forEach(tab => tab.classList.toggle("active", tab === button));
  const title = document.querySelector("#profile-tab-title");
  const tab = button.dataset.profileTab;
  if (title) title.textContent = ({overview:"A little progress goes a long way.",mycontent:"Your creative archive.",redemptions:"Your reward requests.",settings:"Make this space yours."})[tab] || "Your Pixla space.";
  if (tab === "settings") alert("Frontend-only demo. Secure login and account settings need a backend.");
}));
