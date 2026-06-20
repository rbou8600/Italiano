// ===================================================================
// EXERCICES — données + logique de correction
// Chaque exercice a un type: 'mcq' (QCM), 'fill' (trou), 'transform' (phrase à transformer)
// ===================================================================

const EXERCISES = {};

EXERCISES.pronomi = [
  { type: "mcq", q: "Compro il giornale. ___ leggo subito.", options: ["Lo", "La", "Li", "Gli"], answer: "Lo" },
  { type: "mcq", q: "Telefono a Marta. ___ telefono ogni giorno.", options: ["La", "Le", "Lo", "Gli"], answer: "Le" },
  { type: "fill", q: "Do il regalo a mio fratello → ___ do il regalo.", answer: "gli" },
  { type: "fill", q: "Vedo i miei amici stasera → ___ vedo stasera.", answer: "li" },
  { type: "mcq", q: "Mi presti la macchina? — Sì, ___ presto.", options: ["te la", "te lo", "me la", "glielo"], answer: "te la" },
  { type: "fill", q: "Do il libro a Marco → ___ do. (combinato)", answer: "glielo" },
  { type: "transform", q: "Réécris en remplaçant le complément souligné par un pronom : Conosco molto bene Paolo e Anna.", hint: "Pluriel masculin/mixte → li", answer: ["li conosco molto bene"] },
  { type: "transform", q: "Réécris : Scrivo una lettera a mia nonna.", hint: "a mia nonna → le", answer: ["le scrivo una lettera"] },
];

EXERCISES.tempi = [
  { type: "fill", q: "Io (parlare, presente) ___ italiano ogni giorno.", answer: "parlo" },
  { type: "fill", q: "Noi (dormire, presente) ___ poco durante la settimana.", answer: "dormiamo" },
  { type: "mcq", q: "Quando ero piccolo, ___ sempre al mare in estate.", options: ["sono andato", "andavo", "andrò", "vada"], answer: "andavo" },
  { type: "mcq", q: "Ieri sera ___ un film molto bello.", options: ["guardavo", "ho guardato", "guarderò", "guardi"], answer: "ho guardato" },
  { type: "fill", q: "Domani (essere, futuro) ___ una bella giornata.", answer: "sarà" },
  { type: "fill", q: "L'anno prossimo (andare, futuro) ___ in Italia.", answer: "andrò" },
  { type: "transform", q: "Mets cette phrase au passato composto : Mangio una pizza con i miei amici.", hint: "presente → passato composto", answer: ["ho mangiato una pizza con i miei amici"] },
  { type: "transform", q: "Mets cette phrase à l'imperfetto pour décrire une habitude : Vado in palestra ogni mattina.", hint: "habitude passée", answer: ["andavo in palestra ogni mattina"] },
];

EXERCISES.congiuntivo = [
  { type: "mcq", q: "Penso che lui ___ ragione.", options: ["ha", "abbia", "avrebbe", "aveva"], answer: "abbia" },
  { type: "mcq", q: "Sono sicuro che lei ___ la verità. (certitude → indicatif)", options: ["dica", "dice", "direbbe", "dicesse"], answer: "dice" },
  { type: "fill", q: "Credo che tu (avere, congiuntivo) ___ ragione.", answer: "abbia" },
  { type: "fill", q: "Spero che voi (stare, congiuntivo) ___ bene.", answer: "stiate" },
  { type: "mcq", q: "Benché ___ tardi, usciamo lo stesso.", options: ["è", "sia", "sarebbe", "fosse"], answer: "sia" },
  { type: "fill", q: "È il film più bello che io (vedere, congiuntivo passato) ___ mai.", answer: "abbia visto" },
  { type: "transform", q: "Transforme avec 'Penso che...' : Marco arriva domani.", hint: "indicatif → congiuntivo presente", answer: ["penso che marco arrivi domani"] },
  { type: "transform", q: "Transforme avec 'Dubito che...' : Loro sanno la verità.", hint: "sapere → sappiano", answer: ["dubito che loro sappiano la verità"] },
];

EXERCISES.condizionale = [
  { type: "mcq", q: "___ un caffè, per favore. (demande polie)", options: ["Voglio", "Vorrei", "Volevo", "Volessi"], answer: "Vorrei" },
  { type: "fill", q: "Tu (dovere, condizionale) ___ studiare di più.", answer: "dovresti" },
  { type: "mcq", q: "Se avessi tempo, ___ con te.", options: ["vengo", "venivo", "verrei", "sia venuto"], answer: "verrei" },
  { type: "fill", q: "Se fossi in te, (parlare, condizionale) ___ con lui.", answer: "parlerei" },
  { type: "mcq", q: "Ha detto che ___ alle 8. (futur dans le passé)", options: ["arriva", "arriverà", "sarebbe arrivata", "arrivasse"], answer: "sarebbe arrivata" },
  { type: "fill", q: "Se avessi saputo, (venire, condizionale passato) ___.", answer: "sarei venuto" },
  { type: "transform", q: "Transforme en hypothèse irréelle présente : Se ho tempo, vengo. → avec 'avessi'", hint: "se + congiuntivo imperfetto, + condizionale presente", answer: ["se avessi tempo, verrei"] },
  { type: "transform", q: "Transforme en conseil poli avec 'dovresti' : Devi riposarti di più.", hint: "indicatif → conditionnel de conseil", answer: ["dovresti riposarti di più"] },
];

// -------------------------------------------------------------
// MOTEUR DE RENDU ET CORRECTION DES EXERCICES
// -------------------------------------------------------------

function normalize(str){
  return str.trim().toLowerCase()
    .replace(/[.!?]/g,"")
    .replace(/\s+/g," ");
}

function renderExercises(modKey){
  const items = EXERCISES[modKey];
  if(!items) return "";
  let html = `<div class="exo-block" id="exo-${modKey}">
    <div class="exo-head">
      <h4>Esercizi</h4>
      <span class="score-pill" id="score-${modKey}"></span>
    </div>
    <p class="exo-sub">QCM, trous à compléter et phrases à transformer. Clique sur « Correggi » pour vérifier tes réponses.</p>`;

  items.forEach((it, i) => {
    const id = `${modKey}-${i}`;
    html += `<div class="q" data-idx="${i}">`;
    if(it.type === "mcq"){
      html += `<p class="qtext">${i+1}. ${it.q}</p><div class="opt-row">`;
      it.options.forEach(opt => {
        html += `<button class="opt" data-val="${opt}" onclick="selectOpt('${id}', this, '${opt.replace(/'/g,"\\'")}')">${opt}</button>`;
      });
      html += `</div>`;
    } else if(it.type === "fill"){
      html += `<p class="qtext">${i+1}. ${it.q}</p>
        <input type="text" class="fill" id="${id}" placeholder="…" autocomplete="off">`;
    } else if(it.type === "transform"){
      html += `<p class="qtext">${i+1}. ${it.q}</p>
        <input type="text" class="transform-input" id="${id}" placeholder="Scrivi la frase qui…" autocomplete="off">
        <div class="feedback-line" id="fb-${id}"></div>`;
    }
    html += `</div>`;
  });

  html += `<div class="exo-actions">
      <button class="check-btn" onclick="checkExercises('${modKey}')">Correggi</button>
      <button class="reset-btn" onclick="resetExercises('${modKey}')">Ricomincia</button>
    </div>
  </div>`;
  return html;
}

window.__selections = window.__selections || {};

function selectOpt(id, btn, val){
  const row = btn.parentElement;
  row.querySelectorAll(".opt").forEach(o => o.classList.remove("selected"));
  btn.classList.add("selected");
  window.__selections[id] = val;
}

function checkExercises(modKey){
  const items = EXERCISES[modKey];
  let correct = 0;
  items.forEach((it, i) => {
    const id = `${modKey}-${i}`;
    if(it.type === "mcq"){
      const row = document.querySelector(`#exo-${modKey} .q[data-idx="${i}"] .opt-row`);
      const sel = window.__selections[id];
      row.querySelectorAll(".opt").forEach(o => {
        o.classList.remove("correct","incorrect");
        if(o.dataset.val === it.answer) o.classList.add("correct");
        else if(o.dataset.val === sel && sel !== it.answer) o.classList.add("incorrect");
      });
      if(sel === it.answer) correct++;
    } else if(it.type === "fill"){
      const input = document.getElementById(id);
      const ok = normalize(input.value) === normalize(it.answer);
      input.classList.remove("correct","incorrect");
      input.classList.add(ok ? "correct" : "incorrect");
      if(ok) correct++;
      else input.title = `Risposta corretta: ${it.answer}`;
    } else if(it.type === "transform"){
      const input = document.getElementById(id);
      const fb = document.getElementById(`fb-${id}`);
      const ok = it.answer.map(normalize).includes(normalize(input.value));
      input.classList.remove("correct","incorrect");
      input.classList.add(ok ? "correct" : "incorrect");
      fb.classList.add("show");
      fb.classList.remove("ok","bad");
      if(ok){ fb.classList.add("ok"); fb.textContent = "Esatto!"; correct++; }
      else { fb.classList.add("bad"); fb.textContent = `Risposta proposta: "${it.answer[0]}"`; }
    }
  });
  const pill = document.getElementById(`score-${modKey}`);
  pill.textContent = `${correct} / ${items.length}`;
  pill.classList.add("show");
}

function resetExercises(modKey){
  const container = document.getElementById(`exo-${modKey}`);
  container.querySelectorAll(".opt").forEach(o => o.classList.remove("selected","correct","incorrect"));
  container.querySelectorAll("input").forEach(inp => { inp.value=""; inp.classList.remove("correct","incorrect"); inp.title=""; });
  container.querySelectorAll(".feedback-line").forEach(f => f.classList.remove("show"));
  const pill = document.getElementById(`score-${modKey}`);
  pill.classList.remove("show");
  Object.keys(window.__selections).forEach(k => { if(k.startsWith(modKey+"-")) delete window.__selections[k]; });
}
