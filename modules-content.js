// ===================================================================
// CONTENU DES MODULES — données structurées, rendues par app.js
// ===================================================================

const MODULES = {};

// ---------------------------------------------------------------
// MODULE 1 — PRONOMS COMPLÉMENTS DIRECTS ET INDIRECTS
// ---------------------------------------------------------------
MODULES.pronomi = {
  title: "Pronomi complemento",
  eyebrow: "Modulo 1 · Pronomi",
  tagline: "Diretti, indiretti, combinati — la pièce la plus piégeuse de la grammaire italienne pour un francophone.",
  cardDesc: "Pronoms COD, COI, et leurs formes combinées (me lo, te la, glielo...)",
  render: () => `
    <section class="block">
      <h3>Pronomi diretti (COD)</h3>
      <p>Ils remplacent un complément d'objet direct (sans préposition) : <em>vedo il libro</em> → <em>lo vedo</em>.</p>
      <div class="pron-grid">
        <div class="pron-cell"><div class="who">io → me</div><div class="form">mi</div></div>
        <div class="pron-cell"><div class="who">tu → toi</div><div class="form">ti</div></div>
        <div class="pron-cell"><div class="who">lui → le</div><div class="form">lo</div></div>
        <div class="pron-cell"><div class="who">lei → la</div><div class="form">la</div></div>
        <div class="pron-cell"><div class="who">noi → nous</div><div class="form">ci</div></div>
        <div class="pron-cell"><div class="who">voi → vous</div><div class="form">vi</div></div>
        <div class="pron-cell"><div class="who">loro (m) → les</div><div class="form">li</div></div>
        <div class="pron-cell"><div class="who">loro (f) → les</div><div class="form">le</div></div>
      </div>
      <p class="note">Piège fréquent : <em>lo</em> et <em>la</em> s'élident devant une voyelle ou un <em>h</em> muet → <em>l'ho visto</em>, pas <em>lo ho visto</em>. <em>Li</em> et <em>le</em> ne s'élident jamais.</p>
      <ul class="examples">
        <li><span class="it">Compro <strong>il pane</strong>.</span> → <span class="it"><strong>Lo</strong> compro.</span> <span class="fr">J'achète le pain. → Je l'achète.</span></li>
        <li><span class="it">Conosco <strong>Maria</strong>.</span> → <span class="it"><strong>La</strong> conosco.</span> <span class="fr">Je connais Maria. → Je la connais.</span></li>
        <li><span class="it">Hai visto <strong>i miei genitori</strong>?</span> → <span class="it"><strong>Li</strong> hai visti?</span> <span class="fr">As-tu vu mes parents ? → Les as-tu vus ?</span></li>
      </ul>
      <p class="note">Au passé composé, le participe passé s'accorde avec <em>lo, la, li, le</em> : <em>l'ho vista</em> (et non <em>visto</em>) si <em>l'</em> = Maria.</p>

      <h3>Pronomi indiretti (COI)</h3>
      <p>Ils remplacent un complément introduit par <em>a</em> : <em>scrivo a Marco</em> → <em>gli scrivo</em>.</p>
      <div class="pron-grid">
        <div class="pron-cell"><div class="who">a me</div><div class="form">mi</div></div>
        <div class="pron-cell"><div class="who">a te</div><div class="form">ti</div></div>
        <div class="pron-cell"><div class="who">a lui</div><div class="form">gli</div></div>
        <div class="pron-cell"><div class="who">a lei</div><div class="form">le</div></div>
        <div class="pron-cell"><div class="who">a noi</div><div class="form">ci</div></div>
        <div class="pron-cell"><div class="who">a voi</div><div class="form">vi</div></div>
        <div class="pron-cell"><div class="who">a loro</div><div class="form">gli</div></div>
      </div>
      <p class="note">Au pluriel, <em>gli</em> remplace l'ancien <em>loro</em> dans l'italien parlé moderne : <em>do loro il libro</em> (formel, après le verbe) devient en pratique <em>gli do il libro</em>.</p>
      <ul class="examples">
        <li><span class="it">Telefono <strong>a Luca</strong>.</span> → <span class="it"><strong>Gli</strong> telefono.</span> <span class="fr">Je téléphone à Luca. → Je lui téléphone.</span></li>
        <li><span class="it">Scrivo <strong>a Anna</strong>.</span> → <span class="it"><strong>Le</strong> scrivo.</span> <span class="fr">J'écris à Anna. → Je lui écris.</span></li>
      </ul>

      <h3>Pronomi combinati</h3>
      <p>Quand un COI et un COD se rencontrent dans la même phrase, le COI passe en <em>me, te, se, ce, ve</em> et précède le COD. <em>Gli</em> et <em>le</em> fusionnent toujours en <em>glie-</em>.</p>
      <div class="tbl-wrap">
        <table class="conj">
          <caption>Combinaisons COI + COD</caption>
          <thead><tr><th>COI</th><th>+ lo</th><th>+ la</th><th>+ li</th><th>+ le</th><th>+ ne</th></tr></thead>
          <tbody>
            <tr><td class="pron">mi</td><td><span class="end">me lo</span></td><td><span class="end">me la</span></td><td><span class="end">me li</span></td><td><span class="end">me le</span></td><td><span class="end">me ne</span></td></tr>
            <tr><td class="pron">ti</td><td><span class="end">te lo</span></td><td><span class="end">te la</span></td><td><span class="end">te li</span></td><td><span class="end">te le</span></td><td><span class="end">te ne</span></td></tr>
            <tr><td class="pron">gli / le</td><td><span class="end">glielo</span></td><td><span class="end">gliela</span></td><td><span class="end">glieli</span></td><td><span class="end">gliele</span></td><td><span class="end">gliene</span></td></tr>
            <tr><td class="pron">ci</td><td><span class="end">ce lo</span></td><td><span class="end">ce la</span></td><td><span class="end">ce li</span></td><td><span class="end">ce le</span></td><td><span class="end">ce ne</span></td></tr>
            <tr><td class="pron">vi</td><td><span class="end">ve lo</span></td><td><span class="end">ve la</span></td><td><span class="end">ve li</span></td><td><span class="end">ve le</span></td><td><span class="end">ve ne</span></td></tr>
          </tbody>
        </table>
      </div>
      <ul class="examples">
        <li><span class="it">Do <strong>il libro a Marco</strong>.</span> → <span class="it"><strong>Glielo</strong> do.</span> <span class="fr">Je donne le livre à Marco. → Je le lui donne.</span></li>
        <li><span class="it">Mi presti <strong>la macchina</strong>?</span> → <span class="it"><strong>Me la</strong> presti?</span> <span class="fr">Tu me prêtes la voiture ? → Tu me la prêtes ?</span></li>
      </ul>

      <h3>Position du pronom</h3>
      <p>Le pronom précède généralement le verbe conjugué, mais se colle (enclise) à l'infinitif, au gérondif, à l'impératif (2e pers.) et à <em>ecco</em>.</p>
      <ul class="examples">
        <li><span class="it">Voglio veder<strong>lo</strong>.</span> <span class="fr">Je veux le voir.</span></li>
        <li><span class="it">Dim<strong>mi</strong> la verità!</span> <span class="fr">Dis-moi la vérité !</span></li>
        <li><span class="it">Eccolo!</span> <span class="fr">Le voilà !</span></li>
      </ul>
    </section>
  `
};

// ---------------------------------------------------------------
// MODULE 2 — LES TEMPS VERBAUX (indicatif)
// ---------------------------------------------------------------
MODULES.tempi = {
  title: "I tempi verbali",
  eyebrow: "Modulo 2 · Temps",
  tagline: "Présent, passé composé, imparfait, futur — formation et emploi.",
  cardDesc: "Conjugaisons et usages des temps de l'indicatif",
  render: () => `
    <section class="block">
      <h3>Presente indicativo</h3>
      <p>Base de toute conjugaison italienne : trois groupes selon la terminaison de l'infinitif (-are, -ere, -ire).</p>
      <div class="tbl-wrap">
        <table class="conj">
          <caption>Parlare · Vedere · Dormire (présent)</caption>
          <thead><tr><th>Pronome</th><th>parlare</th><th>vedere</th><th>dormire</th></tr></thead>
          <tbody>
            <tr><td class="pron">io</td><td class="root">parl<span class="end">o</span></td><td class="root">ved<span class="end">o</span></td><td class="root">dorm<span class="end">o</span></td></tr>
            <tr><td class="pron">tu</td><td class="root">parl<span class="end">i</span></td><td class="root">ved<span class="end">i</span></td><td class="root">dorm<span class="end">i</span></td></tr>
            <tr><td class="pron">lui/lei</td><td class="root">parl<span class="end">a</span></td><td class="root">ved<span class="end">e</span></td><td class="root">dorm<span class="end">e</span></td></tr>
            <tr><td class="pron">noi</td><td class="root">parl<span class="end">iamo</span></td><td class="root">ved<span class="end">iamo</span></td><td class="root">dorm<span class="end">iamo</span></td></tr>
            <tr><td class="pron">voi</td><td class="root">parl<span class="end">ate</span></td><td class="root">ved<span class="end">ete</span></td><td class="root">dorm<span class="end">ite</span></td></tr>
            <tr><td class="pron">loro</td><td class="root">parl<span class="end">ano</span></td><td class="root">ved<span class="end">ono</span></td><td class="root">dorm<span class="end">ono</span></td></tr>
          </tbody>
        </table>
      </div>
      <p class="note">Verbes en -ire à élargissement : <em>finire</em> insère <em>-isc-</em> sauf à <em>noi/voi</em> → <em>finisco, finisci, finisce, finiamo, finite, finiscono</em>.</p>

      <h3>Passato composto vs imperfetto</h3>
      <p>Les deux passés les plus utilisés à l'oral, mais avec des fonctions différentes : le <em>passato composto</em> raconte un fait ponctuel et achevé, l'<em>imperfetto</em> décrit une situation, une habitude, un décor.</p>
      <div class="usage-grid">
        <div class="usage-card"><span class="lbl">Passato composto</span><p>Action ponctuelle, achevée, avec un début et une fin perçus</p><div class="ex">Ieri ho mangiato la pizza.</div></div>
        <div class="usage-card"><span class="lbl">Imperfetto</span><p>Habitude, description, action en cours interrompue par une autre</p><div class="ex">Quando ero piccolo, mangiavo sempre la pizza il venerdì.</div></div>
      </div>
      <div class="tbl-wrap">
        <table class="conj">
          <caption>Imperfetto · parlare / vedere / dormire</caption>
          <thead><tr><th>Pronome</th><th>parlare</th><th>vedere</th><th>dormire</th></tr></thead>
          <tbody>
            <tr><td class="pron">io</td><td class="root">parl<span class="end">avo</span></td><td class="root">ved<span class="end">evo</span></td><td class="root">dorm<span class="end">ivo</span></td></tr>
            <tr><td class="pron">tu</td><td class="root">parl<span class="end">avi</span></td><td class="root">ved<span class="end">evi</span></td><td class="root">dorm<span class="end">ivi</span></td></tr>
            <tr><td class="pron">lui/lei</td><td class="root">parl<span class="end">ava</span></td><td class="root">ved<span class="end">eva</span></td><td class="root">dorm<span class="end">iva</span></td></tr>
            <tr><td class="pron">noi</td><td class="root">parl<span class="end">avamo</span></td><td class="root">ved<span class="end">evamo</span></td><td class="root">dorm<span class="end">ivamo</span></td></tr>
            <tr><td class="pron">voi</td><td class="root">parl<span class="end">avate</span></td><td class="root">ved<span class="end">evate</span></td><td class="root">dorm<span class="end">ivate</span></td></tr>
            <tr><td class="pron">loro</td><td class="root">parl<span class="end">avano</span></td><td class="root">ved<span class="end">evano</span></td><td class="root">dorm<span class="end">ivano</span></td></tr>
          </tbody>
        </table>
      </div>
      <p class="note">Verbe irrégulier fréquent : <em>essere</em> à l'imperfetto → <em>ero, eri, era, eravamo, eravate, erano</em>.</p>

      <h3>Futuro semplice</h3>
      <div class="tbl-wrap">
        <table class="conj">
          <caption>Futuro semplice · parlare / vedere / dormire</caption>
          <thead><tr><th>Pronome</th><th>parlare</th><th>vedere</th><th>dormire</th></tr></thead>
          <tbody>
            <tr><td class="pron">io</td><td class="root">parler<span class="end">ò</span></td><td class="root">vedr<span class="end">ò</span></td><td class="root">dormir<span class="end">ò</span></td></tr>
            <tr><td class="pron">tu</td><td class="root">parler<span class="end">ai</span></td><td class="root">vedr<span class="end">ai</span></td><td class="root">dormir<span class="end">ai</span></td></tr>
            <tr><td class="pron">lui/lei</td><td class="root">parler<span class="end">à</span></td><td class="root">vedr<span class="end">à</span></td><td class="root">dormir<span class="end">à</span></td></tr>
            <tr><td class="pron">noi</td><td class="root">parler<span class="end">emo</span></td><td class="root">vedr<span class="end">emo</span></td><td class="root">dormir<span class="end">emo</span></td></tr>
            <tr><td class="pron">voi</td><td class="root">parler<span class="end">ete</span></td><td class="root">vedr<span class="end">ete</span></td><td class="root">dormir<span class="end">ete</span></td></tr>
            <tr><td class="pron">loro</td><td class="root">parler<span class="end">anno</span></td><td class="root">vedr<span class="end">anno</span></td><td class="root">dormir<span class="end">anno</span></td></tr>
          </tbody>
        </table>
      </div>
      <p class="note">Les verbes en -are et -ere partagent les mêmes terminaisons au futur ; seul le radical change. <em>Essere</em> → <em>sarò</em>, <em>avere</em> → <em>avrò</em>, <em>andare</em> → <em>andrò</em> (radicaux irréguliers à mémoriser).</p>
    </section>
  `
};

// ---------------------------------------------------------------
// MODULE 3 — IL CONGIUNTIVO
// ---------------------------------------------------------------
MODULES.congiuntivo = {
  title: "Il congiuntivo",
  eyebrow: "Modulo 3 · Congiuntivo",
  tagline: "Le mode du doute, de l'opinion et de l'incertitude — la grande peur des francophones.",
  cardDesc: "Formation et emploi du subjonctif présent et passé",
  render: () => `
    <section class="block">
      <h3>Formation — congiuntivo presente</h3>
      <p>Attention au piège : au congiuntivo presente, les trois personnes du singulier (io, tu, lui/lei) ont <strong>la même terminaison</strong> à l'intérieur d'un même groupe. C'est pour cela qu'on garde souvent le sujet à l'écrit (<em>che io parli</em>) pour lever l'ambiguïté.</p>
      <div class="tbl-wrap">
        <table class="conj">
          <caption>Congiuntivo presente · parlare / vedere / dormire</caption>
          <thead><tr><th>Pronome</th><th>parlare</th><th>vedere</th><th>dormire</th></tr></thead>
          <tbody>
            <tr><td class="pron">che io</td><td class="root">parl<span class="end">i</span></td><td class="root">ved<span class="end">a</span></td><td class="root">dorm<span class="end">a</span></td></tr>
            <tr><td class="pron">che tu</td><td class="root">parl<span class="end">i</span></td><td class="root">ved<span class="end">a</span></td><td class="root">dorm<span class="end">a</span></td></tr>
            <tr><td class="pron">che lui/lei</td><td class="root">parl<span class="end">i</span></td><td class="root">ved<span class="end">a</span></td><td class="root">dorm<span class="end">a</span></td></tr>
            <tr><td class="pron">che noi</td><td class="root">parl<span class="end">iamo</span></td><td class="root">ved<span class="end">iamo</span></td><td class="root">dorm<span class="end">iamo</span></td></tr>
            <tr><td class="pron">che voi</td><td class="root">parl<span class="end">iate</span></td><td class="root">ved<span class="end">iate</span></td><td class="root">dorm<span class="end">iate</span></td></tr>
            <tr><td class="pron">che loro</td><td class="root">parl<span class="end">ino</span></td><td class="root">ved<span class="end">ano</span></td><td class="root">dorm<span class="end">ano</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="tbl-wrap">
        <table class="conj">
          <caption>Verbes irréguliers fréquents · congiuntivo presente</caption>
          <thead><tr><th>Pronome</th><th>essere</th><th>avere</th><th>andare</th><th>fare</th></tr></thead>
          <tbody>
            <tr><td class="pron">che io</td><td class="irr"><span class="end">sia</span></td><td class="irr"><span class="end">abbia</span></td><td class="irr">v<span class="end">ada</span></td><td class="irr">f<span class="end">accia</span></td></tr>
            <tr><td class="pron">che tu</td><td class="irr"><span class="end">sia</span></td><td class="irr"><span class="end">abbia</span></td><td class="irr">v<span class="end">ada</span></td><td class="irr">f<span class="end">accia</span></td></tr>
            <tr><td class="pron">che lui/lei</td><td class="irr"><span class="end">sia</span></td><td class="irr"><span class="end">abbia</span></td><td class="irr">v<span class="end">ada</span></td><td class="irr">f<span class="end">accia</span></td></tr>
            <tr><td class="pron">che noi</td><td class="irr">s<span class="end">iamo</span></td><td class="irr">abb<span class="end">iamo</span></td><td class="irr">and<span class="end">iamo</span></td><td class="irr">fac<span class="end">ciamo</span></td></tr>
            <tr><td class="pron">che voi</td><td class="irr">s<span class="end">iate</span></td><td class="irr">abb<span class="end">iate</span></td><td class="irr">and<span class="end">iate</span></td><td class="irr">fac<span class="end">ciate</span></td></tr>
            <tr><td class="pron">che loro</td><td class="irr"><span class="end">siano</span></td><td class="irr">abb<span class="end">iano</span></td><td class="irr">v<span class="end">adano</span></td><td class="irr">f<span class="end">acciano</span></td></tr>
          </tbody>
        </table>
      </div>

      <h3>Congiuntivo passato</h3>
      <p>Auxiliaire (<em>essere</em> ou <em>avere</em>) au congiuntivo presente + participe passé. Utilisé quand l'action subordonnée précède celle de la principale.</p>
      <ul class="examples">
        <li><span class="it">Penso che <strong>abbia già mangiato</strong>.</span> <span class="fr">Je pense qu'il a déjà mangé.</span></li>
        <li><span class="it">Credo che <strong>siano partiti</strong> ieri.</span> <span class="fr">Je crois qu'ils sont partis hier.</span></li>
      </ul>

      <h3>Quand utiliser le congiuntivo</h3>
      <p>Le congiuntivo s'emploie presque toujours dans une subordonnée introduite par <em>che</em>, après un verbe ou une expression de la principale qui exprime une <strong>opinion, un doute, un sentiment ou une volonté</strong> — jamais un fait certain.</p>
      <div class="usage-grid">
        <div class="usage-card"><span class="lbl">Opinion</span><p>penso che, credo che, mi sembra che</p><div class="ex">Penso che sia una buona idea.</div></div>
        <div class="usage-card"><span class="lbl">Doute / incertitude</span><p>dubito che, non sono sicuro che</p><div class="ex">Dubito che lui venga stasera.</div></div>
        <div class="usage-card"><span class="lbl">Sentiment</span><p>ho paura che, sono felice che, mi dispiace che</p><div class="ex">Ho paura che piova domani.</div></div>
        <div class="usage-card"><span class="lbl">Volonté / souhait</span><p>voglio che, spero che, desidero che</p><div class="ex">Spero che tu stia bene.</div></div>
        <div class="usage-card"><span class="lbl">Après certaines conjonctions</span><p>affinché, benché, a meno che, prima che, sebbene</p><div class="ex">Benché sia tardi, usciamo lo stesso.</div></div>
        <div class="usage-card"><span class="lbl">Superlatifs / négation absolue</span><p>il migliore che, l'unico che, nessuno che</p><div class="ex">È il film più bello che abbia mai visto.</div></div>
      </div>
      <p class="note">Avec les verbes de certitude (<em>sapere che, essere sicuro che, è vero che</em>), on garde l'indicatif : <em>Sono sicuro che <u>ha</u> ragione</em> (pas <em>abbia</em>), car ici il n'y a pas de doute exprimé.</p>
    </section>
  `
};

// ---------------------------------------------------------------
// MODULE 4 — IL CONDIZIONALE
// ---------------------------------------------------------------
MODULES.condizionale = {
  title: "Il condizionale",
  eyebrow: "Modulo 4 · Condizionale",
  tagline: "Pour la politesse, l'hypothèse et le souhait — présent et passé.",
  cardDesc: "Formation et emploi du conditionnel présent et passé",
  render: () => `
    <section class="block">
      <h3>Formation — condizionale presente</h3>
      <p>Le radical est identique à celui du futur (y compris les irrégularités), mais les terminaisons changent.</p>
      <div class="tbl-wrap">
        <table class="conj">
          <caption>Condizionale presente · parlare / vedere / dormire</caption>
          <thead><tr><th>Pronome</th><th>parlare</th><th>vedere</th><th>dormire</th></tr></thead>
          <tbody>
            <tr><td class="pron">io</td><td class="root">parler<span class="end">ei</span></td><td class="root">vedr<span class="end">ei</span></td><td class="root">dormir<span class="end">ei</span></td></tr>
            <tr><td class="pron">tu</td><td class="root">parler<span class="end">esti</span></td><td class="root">vedr<span class="end">esti</span></td><td class="root">dormir<span class="end">esti</span></td></tr>
            <tr><td class="pron">lui/lei</td><td class="root">parler<span class="end">ebbe</span></td><td class="root">vedr<span class="end">ebbe</span></td><td class="root">dormir<span class="end">ebbe</span></td></tr>
            <tr><td class="pron">noi</td><td class="root">parler<span class="end">emmo</span></td><td class="root">vedr<span class="end">emmo</span></td><td class="root">dormir<span class="end">emmo</span></td></tr>
            <tr><td class="pron">voi</td><td class="root">parler<span class="end">este</span></td><td class="root">vedr<span class="end">este</span></td><td class="root">dormir<span class="end">este</span></td></tr>
            <tr><td class="pron">loro</td><td class="root">parler<span class="end">ebbero</span></td><td class="root">vedr<span class="end">ebbero</span></td><td class="root">dormir<span class="end">ebbero</span></td></tr>
          </tbody>
        </table>
      </div>
      <p class="note">Mêmes radicaux irréguliers que le futur : <em>essere</em> → <em>sarei</em>, <em>avere</em> → <em>avrei</em>, <em>andare</em> → <em>andrei</em>, <em>potere</em> → <em>potrei</em>, <em>volere</em> → <em>vorrei</em>.</p>

      <h3>Condizionale passato</h3>
      <p>Auxiliaire au condizionale presente + participe passé. Exprime un fait qui aurait dû/pu se produire dans le passé, ou un futur dans le passé (discours indirect).</p>
      <ul class="examples">
        <li><span class="it">Sarei venuto, ma ero malato.</span> <span class="fr">Je serais venu, mais j'étais malade.</span></li>
        <li><span class="it">Ha detto che <strong>sarebbe arrivata</strong> alle 8.</span> <span class="fr">Elle a dit qu'elle arriverait à 8h.</span></li>
      </ul>

      <h3>Quand utiliser le condizionale</h3>
      <div class="usage-grid">
        <div class="usage-card"><span class="lbl">Politesse / demande adoucie</span><p>Vorrei, potrebbe, mi piacerebbe</p><div class="ex">Vorrei un caffè, per favore.</div></div>
        <div class="usage-card"><span class="lbl">Conseil</span><p>dovresti, sarebbe meglio</p><div class="ex">Dovresti studiare di più.</div></div>
        <div class="usage-card"><span class="lbl">Hypothèse incertaine</span><p>forse, probabilmente + condizionale</p><div class="ex">Sarebbe interessante saperlo.</div></div>
        <div class="usage-card"><span class="lbl">Futur dans le passé</span><p>discours rapporté au passé</p><div class="ex">Pensavo che avrebbe chiamato.</div></div>
        <div class="usage-card"><span class="lbl">Information non confirmée</span><p>registre journalistique</p><div class="ex">Il ministro si sarebbe dimesso.</div></div>
      </div>

      <h3>Periodo ipotetico : se + congiuntivo / condizionale</h3>
      <p>La structure de phrase hypothétique la plus testée à l'examen : pour une hypothèse irréelle ou peu probable au présent, on combine <em>se</em> + congiuntivo imperfetto avec le condizionale presente dans la principale.</p>
      <ul class="examples">
        <li><span class="it">Se <strong>avessi</strong> tempo, <strong>verrei</strong> con te.</span> <span class="fr">Si j'avais le temps, je viendrais avec toi.</span></li>
        <li><span class="it">Se <strong>fossi</strong> in te, <strong>parlerei</strong> con lui.</span> <span class="fr">Si j'étais toi, je lui parlerais.</span></li>
      </ul>
      <p class="note">Pour une hypothèse irréelle dans le passé : <em>se</em> + congiuntivo trapassato + condizionale passato. <em>Se avessi saputo, sarei venuto.</em> (Si j'avais su, je serais venu.)</p>
    </section>
  `
};
