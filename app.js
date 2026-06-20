// ===================================================================
// APP — navigation, rendu de la page d'accueil et des modules
// ===================================================================

const MODULE_ORDER = ["pronomi", "tempi", "congiuntivo", "condizionale"];

function buildNav(){
  const nav = document.getElementById("navlinks");
  nav.innerHTML = MODULE_ORDER.map(key =>
    `<button data-key="${key}" onclick="showView('${key}')">${MODULES[key].title}</button>`
  ).join("");
}

function renderHome(){
  const cards = MODULE_ORDER.map((key, i) => {
    const m = MODULES[key];
    return `<div class="mod-card" onclick="showView('${key}')">
      <span class="num">0${i+1}</span>
      <h3>${m.title}</h3>
      <p>${m.cardDesc}</p>
      <span class="tag">${EXERCISES[key] ? EXERCISES[key].length : 0} esercizi</span>
    </div>`;
  }).join("");

  return `<div class="view active" id="view-home">
    <div class="home-hero">
      <span class="eyebrow">Grammatica B1 / B2</span>
      <h1>Il tuo <em>quaderno</em><br>di grammatica italiana</h1>
      <p class="lede">Pronoms compléments, temps verbaux, congiuntivo et condizionale — règles, tableaux de conjugaison et exercices auto-corrigés.</p>
    </div>
    <div class="quaderno">${cards}</div>
  </div>`;
}

function renderModuleView(key){
  const m = MODULES[key];
  return `<div class="view" id="view-${key}">
    <div class="mod-header">
      <span class="eyebrow">${m.eyebrow}</span>
      <h2>${m.title}</h2>
      <p>${m.tagline}</p>
    </div>
    ${m.render()}
    ${renderExercises(key)}
  </div>`;
}

function showView(key){
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.querySelectorAll("nav.modlinks button").forEach(b => b.classList.remove("active"));

  if(key === "home"){
    document.getElementById("view-home").classList.add("active");
  } else {
    document.getElementById(`view-${key}`).classList.add("active");
    const btn = document.querySelector(`nav.modlinks button[data-key="${key}"]`);
    if(btn) btn.classList.add("active");
  }
  window.scrollTo({top:0, behavior:"instant"});
}

function init(){
  buildNav();
  const main = document.getElementById("main");
  main.innerHTML = renderHome() + MODULE_ORDER.map(renderModuleView).join("");
}

document.addEventListener("DOMContentLoaded", init);
