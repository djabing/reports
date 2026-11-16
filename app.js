/* Регистратор отчётов: каждый файл data/reports/<id>.js вызывает RDB.add({...}) */
window.RDB = { items: [], add(r){ if (r && r.id) this.items.push(r); } };

(function(){
"use strict";

/* ---------- справочники ---------- */
const TYPES = {
  landscape:      { name: "Ландшафт угроз",        c: "#4f6bed" },
  ransomware:     { name: "Вымогатели",            c: "#e0453a" },
  apt:            { name: "APT и кампании",        c: "#8b5cf6" },
  vulnerabilities:{ name: "Уязвимости",            c: "#d98a12" },
  ai:             { name: "ИИ и угрозы",           c: "#0fa3a3" },
  industry:       { name: "Отраслевой",            c: "#2f9e5b" },
  forecast:       { name: "Прогноз",               c: "#c2549a" },
  ics:            { name: "АСУ ТП / OT",           c: "#7a6a2f" },
  mobile:         { name: "Мобильные угрозы",      c: "#3d8bd9" },
  phishing:       { name: "Фишинг и мошенничество",c: "#e06a2c" },
  other:          { name: "Другое",                c: "#7b8496" }
};
/* Разделы библиотеки. Группа берётся из отчёта (r.group), иначе из справочника вендоров, иначе "main". */
const GROUPS = {
  main: { name: "Вендоры ИБ",              hint: "аналитика ИБ-вендоров и исследовательских центров" },
  kasp: { name: "Kaspersky",               hint: "исследования «Лаборатории Касперского»: Securelist, GReAT, ICS CERT, GERT, Digital Footprint Intelligence" },
  intl: { name: "Международная аналитика", hint: "консалтинг, аналитические агентства, международные организации и флагманские годовые исследования" },
  comp: { name: "Конкуренты",              hint: "Positive Technologies и аффилированные компании, F6 — отдельно от основной ленты" }
};
const TAB_HINT = { intl: "консалтинг, агентства, регуляторы", kasp: "GReAT, ICS CERT, GERT, Securelist", main: "аналитика других ИБ-вендоров" };
const SLUG = { intl: "international", kasp: "kaspersky", main: "vendors", comp: "competitors" };
const BY_SLUG = Object.fromEntries(Object.entries(SLUG).map(([k, v]) => [v, k]));
/* Подписи читалки на английском (для англ. версии международных отчётов) */
const EN_UI = { "Коротко": "TL;DR", "Ключевые цифры": "Key figures", "О чём отчёт": "About the report", "Главные выводы": "Key findings",
  "Почему это важно": "Why it matters", "Что сделать · чек-лист": "What to do · checklist", "Открыть оригинал ↗": "Open original ↗" };
/* Значимость отчёта (поле r.tier) */
const TIERS = {
  key:       { name: "Ключевые отчёты",      short: "Ключевой отчёт", hint: "флагманские годовые и полугодовые обзоры, крупные исследования" },
  analytics: { name: "Регулярная аналитика", short: "Аналитика",      hint: "квартальная статистика, опросы, дайджесты" },
  case:      { name: "Исследования и кейсы", short: "Кейс",           hint: "разборы отдельных кампаний, атак и уязвимостей" }
};
const tierOf = r => TIERS[r.tier] ? r.tier : "analytics";
const MONTHS = ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"];
const MONTHS_G = ["янв","фев","мар","апр","мая","июн","июл","авг","сен","окт","ноя","дек"];
const DAY = 864e5;

/* ---------- хранилище (только удобства зрителя) ---------- */
const store = {
  get(k, d){ try { const v = localStorage.getItem("ibr:"+k); return v == null ? d : JSON.parse(v); } catch(e){ return d; } },
  set(k, v){ try { localStorage.setItem("ibr:"+k, JSON.stringify(v)); } catch(e){} }
};
let readSet = new Set(store.get("read", []));
let favSet  = new Set(store.get("fav", []));
let notes   = store.get("notes", {});
let todos   = store.get("todos", {});

/* ---------- состояние ---------- */
const S = {
  group: "intl",                           // портал всегда открывается на «Международной аналитике»
  lang: store.get("lang", "ru") === "en" ? "en" : "ru",   // язык выжимок международных отчётов
  view: ["all","new","unread","fav"].includes(store.get("view", "all")) ? store.get("view", "all") : "all",   // all | new | unread | fav
  tier: null,                             // key | analytics | case
  type: null, vendor: null, tag: null,
  q: "",
  sort: store.get("sort", "date"),
  layout: store.get("layout", "cards"),
  kb: -1, open: null
};
let ALL = [], LIST = [], POOL = [];

/* ---------- утилиты ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
const safeUrl = u => /^https?:\/\//i.test(u || "") ? u : "";
const norm = s => String(s || "").toLowerCase().replace(/ё/g, "е");
function vendorOf(r){
  const V = window.RDB_VENDORS || {};
  const v = V[r.vendor] || {};
  return {
    id: r.vendor || "unknown",
    name: v.name || r.vendor_name || r.vendor || "Неизвестно",
    domain: v.domain || r.vendor_domain || (safeUrl(r.url) ? new URL(r.url).hostname : ""),
    color: v.color || r.vendor_color || "#7b8496"
  };
}
function enOn(){ return S.lang === "en" && S.group === "intl"; }
/* Английская версия выжимки: оригинальное название + поля из r.en */
function loc(r){
  if (!r || !enOn() || !r.en) return r;
  const e = r.en;
  return Object.assign({}, r, { title_ru: r.title, tldr: e.tldr || r.tldr, summary: e.summary || r.summary,
    key_findings: e.key_findings || r.key_findings, stats: e.stats || r.stats, recommendations: e.recommendations || r.recommendations,
    why_it_matters: e.why_it_matters || r.why_it_matters, __en: true });
}
const T = s => (enOn() && EN_UI[s]) || s;
function groupOf(r){
  if (r.group && GROUPS[r.group]) return r.group;
  const g = ((window.RDB_VENDORS || {})[r.vendor] || {}).group;
  return GROUPS[g] ? g : "main";
}
function sortKey(r){
  const p = String(r.published || "");
  if (/^\d{4}-\d{2}-\d{2}$/.test(p)) return p;
  if (/^\d{4}-\d{2}$/.test(p)) return p + "-15";
  if (/^\d{4}$/.test(p)) return p + "-01-01";
  return "0000";
}
function fmtDate(r){
  const p = String(r.published || ""), m = p.split("-");
  if (r.date_precision === "day" || m.length === 3) return (+m[2]) + " " + MONTHS_G[+m[1]-1] + " " + m[0];
  if (m.length === 2) return MONTHS[+m[1]-1] + " " + m[0];
  return p || "дата не указана";
}
function isNew(r, days){ const a = Date.parse(r.added); return !isNaN(a) && (Date.now() - a) <= days * DAY; }
function plural(n, a, b, c){ const m10 = n % 10, m100 = n % 100; return m10 === 1 && m100 !== 11 ? a : (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20) ? b : c); }
function toast(t){ const el = $("#toast"); el.textContent = t; el.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove("on"), 1800); }

/* логотип: локальный файл data/logos/<vendor>.png → favicon Google → инициалы на брендовом цвете */
function logo(v){
  const ini = esc((v.name.match(/[A-Za-zА-Яа-я0-9]/g) || ["?"]).slice(0, 2).join("").toUpperCase());
  const local = "data/logos/" + encodeURIComponent(v.id) + ".png";
  return `<span class="logo"><img alt="" loading="lazy" src="${local}" data-d="${esc(v.domain)}" data-c="${esc(v.color)}" data-i="${ini}" onerror="window.__logoFail(this)"></span>`;
}
window.__logoFail = function(img){
  if (!img.dataset.t && img.dataset.d){ img.dataset.t = "1"; img.src = "https://www.google.com/s2/favicons?sz=128&domain=" + encodeURIComponent(img.dataset.d); return; }
  const box = img.parentNode; box.classList.add("fallback"); box.style.background = img.dataset.c;
  box.innerHTML = `<span class="ini">${img.dataset.i}</span>`;
};

/* ---------- загрузка ---------- */
function load(){
  const man = (window.RDB_MANIFEST && window.RDB_MANIFEST.reports) || [];
  if (!man.length) return Promise.resolve();
  return Promise.all(man.map(m => new Promise(res => {
    const s = document.createElement("script");
    s.src = "data/reports/" + encodeURIComponent(m.id) + ".js?v=" + (window.RDB_V || "");
    s.onload = s.onerror = res;
    document.head.appendChild(s);
  })));
}

/* ---------- фильтрация ---------- */
function haystack(r){
  if (!r.__h){
    const v = vendorOf(r);
    r.__h = norm([r.title, r.title_ru, r.tldr, r.summary, v.name, (TYPES[r.type]||{}).name,
      (r.tags||[]).join(" "), (r.actors||[]).join(" "), (r.malware||[]).join(" "), (r.cves||[]).join(" "),
      (r.sectors||[]).join(" "), (r.regions||[]).join(" "), (r.key_findings||[]).join(" "),
      (r.ttps||[]).map(t => t.id + " " + t.name).join(" "),
      r.en ? [r.en.tldr, r.en.summary, (r.en.key_findings||[]).join(" ")].join(" ") : ""].join(" "));
  }
  return r.__h;
}
function apply(){
  POOL = ALL.filter(r => groupOf(r) === S.group);
  let L = POOL.slice();
  if (S.view === "new") L = L.filter(r => isNew(r, 7));
  if (S.view === "unread") L = L.filter(r => !readSet.has(r.id));
  if (S.view === "fav") L = L.filter(r => favSet.has(r.id));
  if (S.tier) L = L.filter(r => tierOf(r) === S.tier);
  if (S.type) L = L.filter(r => (r.type || "other") === S.type);
  if (S.vendor) L = L.filter(r => r.vendor === S.vendor);
  if (S.tag) L = L.filter(r => (r.tags || []).some(t => norm(t) === norm(S.tag)));
  const terms = norm(S.q).split(/\s+/).filter(Boolean);
  if (terms.length) L = L.filter(r => { const h = haystack(r); return terms.every(t => h.includes(t)); });
  if (S.sort === "date") L.sort((a, b) => sortKey(b).localeCompare(sortKey(a)) || (b.added||"").localeCompare(a.added||""));
  if (S.sort === "added") L.sort((a, b) => (b.added||"").localeCompare(a.added||"") || sortKey(b).localeCompare(sortKey(a)));
  if (S.sort === "vendor") L.sort((a, b) => vendorOf(a).name.localeCompare(vendorOf(b).name, "ru") || sortKey(b).localeCompare(sortKey(a)));
  const TR = { key: 0, analytics: 1, case: 2 };
  if (S.sort === "importance") L.sort((a, b) => TR[tierOf(a)] - TR[tierOf(b)] || (b.importance||0) - (a.importance||0) || sortKey(b).localeCompare(sortKey(a)));
  LIST = L;
}

/* ---------- сайдбар ---------- */
function renderSide(){
  POOL = ALL.filter(r => groupOf(r) === S.group);
  const cnt = f => POOL.filter(f).length;
  const gc = g => ALL.filter(r => groupOf(r) === g).length;
  const views = [
    ["all",    "Все отчёты",     cnt(() => true)],
    ["new",    "Новые за 7 дней",cnt(r => isNew(r, 7))],
    ["unread", "Непрочитанные",  cnt(r => !readSet.has(r.id))],
    ["fav",    "Избранное",      cnt(r => favSet.has(r.id))]
  ];
  const icons = { all:"▤", new:"✦", unread:"◉", fav:"★" };
  let h = `<h4>Подборки</h4>` + views.map(([k, n, c]) =>
    `<button class="nav-item ${S.view===k?"on":""}" data-view="${k}"><span style="width:16px;text-align:center;color:var(--ink-3)">${icons[k]}</span><span class="nm">${n}</span><span class="cnt">${c}</span></button>`).join("");

  const kc = {}; POOL.forEach(r => { kc[tierOf(r)] = (kc[tierOf(r)]||0) + 1; });
  h += `<h4>Значимость</h4>` + Object.keys(TIERS).filter(t => kc[t]).map(t =>
    `<button class="nav-item tier-${t} ${S.tier===t?"on":""}" data-tier="${t}" title="${esc(TIERS[t].hint)}"><span class="tier-dot"></span><span class="nm">${TIERS[t].name}</span><span class="cnt">${kc[t]}</span></button>`).join("");

  const tc = {}; POOL.forEach(r => { const t = TYPES[r.type] ? r.type : "other"; tc[t] = (tc[t]||0) + 1; });
  h += `<h4>Тип отчёта</h4>` + Object.keys(TYPES).filter(t => tc[t]).map(t =>
    `<button class="nav-item ${S.type===t?"on":""}" data-type="${t}"><span class="sw" style="background:${TYPES[t].c}"></span><span class="nm">${TYPES[t].name}</span><span class="cnt">${tc[t]}</span></button>`).join("");

  const vc = {}; POOL.forEach(r => { vc[r.vendor] = (vc[r.vendor]||0) + 1; });
  const vids = Object.keys(vc).sort((a, b) => vc[b] - vc[a] || vendorOf({vendor:a}).name.localeCompare(vendorOf({vendor:b}).name));
  h += `<h4>${S.group === "intl" ? "Источники" : S.group === "kasp" ? "Команды" : "Вендоры"} · ${vids.length}</h4>` + vids.map(id => {
    const r0 = POOL.find(r => r.vendor === id), v = vendorOf(r0);
    return `<button class="nav-item ${S.vendor===id?"on":""}" data-vendor="${esc(id)}">${logo(v)}<span class="nm">${esc(v.name)}</span><span class="cnt">${vc[id]}</span></button>`;
  }).join("");

  const tg = {}; POOL.forEach(r => (r.tags||[]).forEach(t => { const k = norm(t); tg[k] = tg[k] || { t, n: 0 }; tg[k].n++; }));
  const tops = Object.values(tg).sort((a, b) => b.n - a.n).slice(0, 18);
  if (tops.length) h += `<h4>Темы</h4><div class="tagcloud">` + tops.map(x =>
    `<button class="chip ${S.tag && norm(S.tag)===norm(x.t)?"active":""}" data-tag="${esc(x.t)}">${esc(x.t)} <span style="opacity:.55">${x.n}</span></button>`).join("") + `</div>`;

  h += `<div class="hint" style="margin-top:26px"><span><span class="kbd">/</span> поиск</span><span><span class="kbd">j</span><span class="kbd">k</span> навигация</span><span><span class="kbd">Enter</span> открыть</span><span><span class="kbd">f</span> в избранное</span></div>`;
  const nc = gc("comp");
  if (nc && S.group !== "comp") h += `<button class="ghost-link" data-group="comp" title="${esc(GROUPS.comp.hint)}">${GROUPS.comp.name} · ${nc}</button>`;
  $("#side").innerHTML = h;
  $("#side").querySelectorAll(".logo").forEach(l => { l.style.width = "22px"; l.style.height = "22px"; l.style.fontSize = "22px"; l.style.borderRadius = "6px"; });
}

/* ---------- основная область ---------- */
function statsMini(r){
  const s = (r.stats || []).slice(0, 3);
  if (!s.length) return "";
  return `<div class="c-stats">` + s.map(x => `<div class="c-stat"><b>${esc(x.value)}</b><span>${esc(x.label)}</span></div>`).join("") + `</div>`;
}
function typeBadge(r){ const t = TYPES[r.type] || TYPES.other; return `<span class="type" style="--tc:${t.c}">${t.name}</span>`; }
function card(r, i){
  r = loc(r);
  const v = vendorOf(r), title = r.title_ru || r.title, orig = r.title_ru && r.title && r.title_ru !== r.title ? r.title : "";
  return `<article class="card ${readSet.has(r.id)?"read":""} ${S.kb===i?"kb":""}" data-i="${i}" style="--vc:${esc(v.color)}" tabindex="0">
    <div class="c-head">${logo(v)}<div><div class="c-vendor">${esc(v.name)}</div><div class="c-date">${esc(fmtDate(r))}</div></div>
      <div class="c-flags">${tierOf(r) === "key" ? `<span class="badge-key" title="${esc(TIERS.key.hint)}">КЛЮЧЕВОЙ</span>` : ""}${isNew(r, 2) ? `<span class="badge-new">НОВОЕ</span>` : ""}${(r.importance||0) >= 3 ? `<span class="imp" title="Важный отчёт">▲</span>` : ""}
      <button class="star ${favSet.has(r.id)?"on":""}" data-fav="${esc(r.id)}" title="В избранное (f)">${starSvg(favSet.has(r.id))}</button></div></div>
    <h3 class="c-title">${esc(title)}</h3>${orig ? `<div class="c-orig">${esc(orig)}</div>` : ""}
    <div class="c-tldr">${esc(r.tldr)}</div>
    ${statsMini(r)}
    <div class="c-foot">${typeBadge(r)}${(r.tags||[]).slice(0, 3).map(t => `<span class="chip">${esc(t)}</span>`).join("")}</div>
  </article>`;
}
function row(r, i){
  r = loc(r);
  const v = vendorOf(r);
  return `<div class="row ${readSet.has(r.id)?"read":""} ${S.kb===i?"kb":""}" data-i="${i}">
    ${logo(v)}<div class="r-vendor">${esc(v.name)}</div>
    <div style="min-width:0"><div class="r-title">${isNew(r,2)?`<span class="badge-new" style="margin-right:6px">НОВОЕ</span>`:""}${esc(r.title_ru || r.title)}</div><div class="r-tldr">${esc(r.tldr)}</div></div>
    <div class="r-type">${typeBadge(r)}</div><div class="r-date">${esc(fmtDate(r))}</div></div>`;
}
const starSvg = on => `<svg width="18" height="18" viewBox="0 0 24 24" fill="${on?"currentColor":"none"}" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/></svg>`;

function renderMain(){
  apply();
  const vendors = new Set(POOL.map(r => r.vendor)).size;
  const new7 = POOL.filter(r => isNew(r, 7)).length;
  const unread = POOL.filter(r => !readSet.has(r.id)).length;
  const G = GROUPS[S.group];
  const gc = g => ALL.filter(r => groupOf(r) === g).length;
  let h = S.group === "comp"
    ? `<div class="grp-head muted"><h2>${G.name}</h2><p>${G.hint}</p><button class="chip" data-group="intl">← К основной ленте</button></div>`
    : `<nav class="grp-tabs" role="tablist" aria-label="Раздел библиотеки">` + ["intl", "kasp", "main"].map(g =>
        `<button role="tab" aria-selected="${S.group===g}" class="grp-tab${S.group===g?" on":""}" data-group="${g}">
          <span class="t-top"><span class="t-name">${GROUPS[g].name}</span><span class="t-cnt">${gc(g)}</span></span>
          <span class="t-hint">${TAB_HINT[g]}</span></button>`).join("") + `</nav>` +
      `<div class="grp-sub"><p>${G.hint}</p>${S.group === "intl" ? `<div class="seg lang" role="group" aria-label="Язык выжимок">
          <button data-lang="ru" class="${S.lang==="ru"?"on":""}">Русский</button><button data-lang="en" class="${S.lang==="en"?"on":""}">English</button></div>` : ""}</div>`;
  h += `<section class="hero">
    <div class="kpi"><b>${POOL.length}</b><span>${plural(POOL.length,"отчёт","отчёта","отчётов")} в разделе</span></div>
    <div class="kpi accent"><b>${new7}</b><span>${plural(new7,"новый","новых","новых")} за 7 дней</span></div>
    <div class="kpi"><b>${vendors}</b><span>${S.group === "intl" ? plural(vendors,"источник","источника","источников") : S.group === "kasp" ? plural(vendors,"команда","команды","команд") : plural(vendors,"вендор","вендора","вендоров")}</span></div>
    <div class="kpi"><b>${unread}</b><span>не прочитано</span></div></section>`;

  const names = { all:"Все отчёты", new:"Новые за 7 дней", unread:"Непрочитанные", fav:"Избранное" };
  const act = [];
  if (S.tier && S.tier !== "key") act.push(`<button class="chip active" data-clear="tier">${TIERS[S.tier].name}<span class="x">✕</span></button>`);
  if (S.type) act.push(`<button class="chip active" data-clear="type">${TYPES[S.type].name}<span class="x">✕</span></button>`);
  if (S.vendor) act.push(`<button class="chip active" data-clear="vendor">${esc(vendorOf({vendor:S.vendor}).name)}<span class="x">✕</span></button>`);
  if (S.tag) act.push(`<button class="chip active" data-clear="tag">#${esc(S.tag)}<span class="x">✕</span></button>`);
  if (S.q) act.push(`<button class="chip active" data-clear="q">«${esc(S.q)}»<span class="x">✕</span></button>`);
  h += `<div class="toolbar"><span class="title">${S.tier === "key" ? TIERS.key.name : names[S.view]}</span><span class="chip">${LIST.length}</span>${act.join("")}<span class="spacer"></span>
    <button class="key-toggle ${S.tier==="key"?"on":""}" data-tier="key" aria-pressed="${S.tier==="key"}" title="${esc(TIERS.key.hint)}">★ Только ключевые</button>
    <select class="sel" id="sort" aria-label="Сортировка">
      <option value="date" ${S.sort==="date"?"selected":""}>По дате публикации</option>
      <option value="added" ${S.sort==="added"?"selected":""}>По дате добавления</option>
      <option value="importance" ${S.sort==="importance"?"selected":""}>По значимости</option>
      <option value="vendor" ${S.sort==="vendor"?"selected":""}>По вендору</option></select>
    <div class="seg"><button data-layout="cards" class="${S.layout==="cards"?"on":""}">Карточки</button><button data-layout="list" class="${S.layout==="list"?"on":""}">Список</button></div></div>`;

  if (!POOL.length){
    h += `<div class="empty"><b>Библиотека пока пуста</b>Запустите задачу «Сбор ИБ-отчётов» в Claude — она найдёт и добавит свежие отчёты.</div>`;
  } else if (!LIST.length){
    h += S.tier === "key" && !POOL.some(r => tierOf(r) === "key")
      ? `<div class="empty"><b>В этом разделе пока нет ключевых отчётов</b><button class="chip" data-tier="key">Показать все отчёты раздела</button></div>`
      : `<div class="empty"><b>Ничего не найдено</b>Измените фильтры или поисковый запрос.</div>`;
  } else {
    const groups = [];
    LIST.forEach((r, i) => {
      const key = S.sort === "vendor" ? vendorOf(r).name
        : S.sort === "importance" ? TIERS[tierOf(r)].name
        : S.sort === "added" ? "Добавлено " + (r.added || "—")
        : (() => { const k = sortKey(r); return r.date_precision === "year" ? k.slice(0,4) + " · дата не уточнена" : MONTHS[+k.slice(5,7)-1] + " " + k.slice(0,4); })();
      const g = groups[groups.length-1];
      if (!g || g.key !== key) groups.push({ key, items: [[r, i]] }); else g.items.push([r, i]);
    });
    groups.forEach(g => {
      h += `<div class="month">${esc(g.key)} <span style="font-family:var(--mono);font-weight:500">${g.items.length}</span></div>`;
      h += S.layout === "cards"
        ? `<div class="grid">${g.items.map(([r, i]) => card(r, i)).join("")}</div>`
        : `<div class="list">${g.items.map(([r, i]) => row(r, i)).join("")}</div>`;
    });
  }
  $("#main").innerHTML = h;
}

function render(){ renderSide(); renderMain(); writeHash(); }

/* ---------- адрес страницы: #/<раздел>[/en][/key][/<id отчёта>] ---------- */
function writeHash(){
  const parts = [SLUG[S.group]];
  if (enOn()) parts.push("en");
  if (S.tier === "key") parts.push("key");
  if (S.open !== null && LIST[S.open]) parts.push(LIST[S.open].id);
  const h = "#/" + parts.join("/");
  if (location.hash !== h) history.replaceState(null, "", h);
}
/* Разбор адреса. Старые ссылки вида #<id отчёта> тоже поддерживаются. */
function readHash(){
  const raw = decodeURIComponent(location.hash.slice(1));
  if (!raw) return {};
  if (raw[0] !== "/") return { id: raw };
  const p = raw.slice(1).split("/").filter(Boolean), out = {};
  if (BY_SLUG[p[0]]) out.group = BY_SLUG[p.shift()];
  if (p[0] === "en" || p[0] === "ru"){ out.lang = p.shift(); }
  else if (out.group === "intl") out.lang = "ru";
  if (p[0] === "key"){ out.tier = "key"; p.shift(); }
  if (p[0]) out.id = p[0];
  return out;
}
function applyHash(){
  const h = readHash();
  let r = h.id ? ALL.find(x => x.id === h.id) : null;
  S.group = r ? groupOf(r) : (h.group || S.group);
  if (h.lang) S.lang = h.lang;
  S.type = S.vendor = S.tag = null; S.view = "all"; S.open = null; S.tier = h.tier || null;
  $("#reader").classList.remove("on"); $("#scrim").classList.remove("on"); document.body.style.overflow = "";
  render();
  if (r){ const i = LIST.findIndex(x => x.id === r.id); if (i >= 0) openReader(i); }
}

/* ---------- читалка ---------- */
function chipList(arr, kind){
  if (!arr || !arr.length) return "";
  return `<div class="chips">` + arr.map(x => {
    if (kind === "ttp"){ const id = String(x.id||""); const path = id.replace(".", "/");
      return /^T\d{4}(\.\d{3})?$/.test(id) ? `<a class="chip mono" target="_blank" rel="noopener" href="https://attack.mitre.org/techniques/${path}/" title="${esc(x.name)}">${esc(id)} · ${esc(x.name)}</a>` : `<span class="chip">${esc(id)} ${esc(x.name)}</span>`; }
    if (kind === "cve") return /^CVE-\d{4}-\d+$/.test(x) ? `<a class="chip mono" target="_blank" rel="noopener" href="https://nvd.nist.gov/vuln/detail/${esc(x)}">${esc(x)}</a>` : `<span class="chip mono">${esc(x)}</span>`;
    return `<button class="chip" data-search="${esc(x)}" title="Найти все отчёты">${esc(x)}</button>`;
  }).join("") + `</div>`;
}
function openReader(i){
  const r = loc(LIST[i]); if (!r) return;
  S.open = i; S.kb = i;
  const v = vendorOf(r);
  if (!readSet.has(r.id)){ readSet.add(r.id); store.set("read", [...readSet]); }
  const url = safeUrl(r.url), pdf = safeUrl(r.pdf_url);
  const td = todos[r.id] || [];
  const meta = [
    ["Группировки", chipList(r.actors)], ["ВПО и инструменты", chipList(r.malware)],
    ["Отрасли", chipList(r.sectors)], ["Регионы", chipList(r.regions)]
  ].filter(x => x[1]);
  let h = `<div style="--vc:${esc(v.color)}">
    <div class="r-top">${logo(v)}<div><div class="v">${esc(v.name)}</div><div class="d">${esc(fmtDate(r))} · ${typeBadge(r)} · <span class="tier-label tier-${tierOf(r)}">${TIERS[tierOf(r)].short}</span> ${r.__en ? "· English version" : r.lang==="ru" ? "· на русском" : "· оригинал на английском"}</div></div></div>
    <h1 class="r-h1">${esc(r.title_ru || r.title)}</h1>
    ${r.title_ru && r.title && r.title !== r.title_ru ? `<div class="r-sub">${esc(r.title)}</div>` : ""}
    <div class="r-actions">
      ${url ? `<a class="btn primary" href="${esc(url)}" target="_blank" rel="noopener">${T("Открыть оригинал ↗")}</a>` : ""}
      ${pdf ? `<a class="btn" href="${esc(pdf)}" target="_blank" rel="noopener">PDF ↗</a>` : ""}
      <button class="btn ${favSet.has(r.id)?"on":""}" data-act="fav">${favSet.has(r.id)?"★ В избранном":"☆ В избранное"}</button>
      <button class="btn" data-act="unread">Отметить непрочитанным</button>
      <button class="btn" data-act="copy">Скопировать выжимку</button>
      <button class="btn" data-act="link">Скопировать ссылку</button>
    </div>
    <div class="tldr"><span class="lbl">${T("Коротко")}</span>${esc(r.tldr)}</div>
    ${(r.stats||[]).length ? `<div class="sec"><h3>${T("Ключевые цифры")}</h3><div class="stats">${r.stats.map(s => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("")}</div></div>` : ""}
    ${r.summary ? `<div class="sec"><h3>${T("О чём отчёт")}</h3><p>${esc(r.summary)}</p></div>` : ""}
    ${(r.key_findings||[]).length ? `<div class="sec"><h3>${T("Главные выводы")}</h3><ol class="find">${r.key_findings.map(f => `<li>${esc(f)}</li>`).join("")}</ol></div>` : ""}
    ${r.why_it_matters ? `<div class="sec"><h3>${T("Почему это важно")}</h3><div class="why">${esc(r.why_it_matters)}</div></div>` : ""}
    ${(r.recommendations||[]).length ? `<div class="sec"><h3>${T("Что сделать · чек-лист")}</h3><ul class="todo">${r.recommendations.map((x, k) => `<li class="${td[k]?"done":""}"><input type="checkbox" data-todo="${k}" ${td[k]?"checked":""}><span>${esc(x)}</span></li>`).join("")}</ul></div>` : ""}
    ${meta.length ? `<div class="sec"><h3>Кто, где, чем</h3><div class="meta-grid">${meta.map(m => `<div><h5>${m[0]}</h5>${m[1]}</div>`).join("")}</div></div>` : ""}
    ${(r.ttps||[]).length ? `<div class="sec"><h3>Техники MITRE ATT&amp;CK</h3>${chipList(r.ttps, "ttp")}</div>` : ""}
    ${(r.cves||[]).length ? `<div class="sec"><h3>Уязвимости</h3>${chipList(r.cves, "cve")}</div>` : ""}
    ${(r.tags||[]).length ? `<div class="sec"><h3>Темы</h3><div class="chips">${r.tags.map(t => `<button class="chip" data-tagopen="${esc(t)}">#${esc(t)}</button>`).join("")}</div></div>` : ""}
    <div class="sec"><h3>Мои заметки</h3><textarea class="note" id="note" placeholder="Выводы для своей организации, к кому передать, что проверить…">${esc(notes[r.id] || "")}</textarea></div>
    <div class="src">${esc(r.source_note || "")}${r.added ? ` · Добавлено в библиотеку: ${esc(r.added)}` : ""}</div>
    <div class="hint"><span><span class="kbd">←</span><span class="kbd">→</span> соседние отчёты</span><span><span class="kbd">f</span> избранное</span><span><span class="kbd">Esc</span> закрыть</span></div>
  </div>`;
  $("#rbody").innerHTML = h;
  $("#rbody").scrollTop = 0;
  $("#rpos").textContent = (i + 1) + " / " + LIST.length;
  $("#reader").classList.add("on"); $("#scrim").classList.add("on");
  document.body.style.overflow = "hidden";
  const note = $("#note");
  note.addEventListener("input", () => { notes[r.id] = note.value; if (!note.value) delete notes[r.id]; store.set("notes", notes); });
  renderSide();
  markRows();
  writeHash();
}
function closeReader(){
  S.open = null;
  $("#reader").classList.remove("on"); $("#scrim").classList.remove("on");
  document.body.style.overflow = "";
  renderMain();
  writeHash();
}
function markRows(){
  document.querySelectorAll("[data-i]").forEach(el => {
    const i = +el.dataset.i, r = LIST[i];
    el.classList.toggle("kb", i === S.kb);
    if (r) el.classList.toggle("read", readSet.has(r.id));
  });
}
function toggleFav(id){
  favSet.has(id) ? favSet.delete(id) : favSet.add(id);
  store.set("fav", [...favSet]);
  toast(favSet.has(id) ? "Добавлено в избранное" : "Убрано из избранного");
}
function copySummary(r){
  r = loc(r);
  const v = vendorOf(r);
  const t = [`${r.title_ru || r.title} — ${v.name}, ${fmtDate(r)}`, r.url || "", "", r.tldr || "", "",
    ...(r.key_findings||[]).map((f, k) => `${k+1}. ${f}`), "",
    ...((r.recommendations||[]).length ? ["Что сделать:", ...r.recommendations.map(x => "• " + x)] : [])].join("\n");
  (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => toast("Выжимка скопирована"), () => toast("Не удалось скопировать"));
}

/* ---------- события ---------- */
function setMenu(open){
  $("#side").classList.toggle("on", open);
  $("#scrim").classList.toggle("on", open || S.open !== null);
  document.body.style.overflow = open || S.open !== null ? "hidden" : "";
}
function setFilter(patch){
  Object.assign(S, patch); S.kb = -1;
  store.set("view", S.view);
  if ($("#side").classList.contains("on")) setMenu(false);
  render(); window.scrollTo({ top: 0, behavior: "smooth" });
}
document.addEventListener("click", e => {
  const t = e.target.closest("button,a,[data-i],textarea,input");
  if (!t) return;
  if (t.dataset.fav){ e.stopPropagation(); toggleFav(t.dataset.fav); render(); return; }
  if (t.dataset.group){ S.group = t.dataset.group; setFilter({ view: "all", type: null, vendor: null, tag: null }); return; }
  if (t.dataset.lang){ S.lang = t.dataset.lang; store.set("lang", S.lang); renderMain(); writeHash(); return; }
  if (t.dataset.tier){ setFilter({ tier: S.tier === t.dataset.tier ? null : t.dataset.tier }); return; }
  if (t.dataset.view){ setFilter({ view: t.dataset.view }); return; }
  if (t.dataset.type){ setFilter({ type: S.type === t.dataset.type ? null : t.dataset.type }); return; }
  if (t.dataset.vendor){ setFilter({ vendor: S.vendor === t.dataset.vendor ? null : t.dataset.vendor }); return; }
  if (t.dataset.tag){ setFilter({ tag: S.tag && norm(S.tag) === norm(t.dataset.tag) ? null : t.dataset.tag }); return; }
  if (t.dataset.clear){ const k = t.dataset.clear; if (k === "q"){ $("#q").value = ""; } setFilter({ [k]: k === "q" ? "" : null }); return; }
  if (t.dataset.layout){ S.layout = t.dataset.layout; store.set("layout", S.layout); renderMain(); return; }
  if (t.dataset.search){ closeReader(); $("#q").value = t.dataset.search; setFilter({ q: t.dataset.search, view: "all", type: null, vendor: null, tag: null }); return; }
  if (t.dataset.tagopen){ closeReader(); setFilter({ tag: t.dataset.tagopen, view: "all" }); return; }
  if (t.dataset.act){
    const r = LIST[S.open]; if (!r) return;
    if (t.dataset.act === "fav"){ toggleFav(r.id); openReader(S.open); }
    if (t.dataset.act === "unread"){ readSet.delete(r.id); store.set("read", [...readSet]); toast("Отмечено как непрочитанное"); renderSide(); markRows(); }
    if (t.dataset.act === "copy") copySummary(r);
    if (t.dataset.act === "link"){ writeHash(); (navigator.clipboard ? navigator.clipboard.writeText(location.href) : Promise.reject()).then(() => toast("Ссылка скопирована"), () => toast("Не удалось скопировать")); }
    return;
  }
  if (t.dataset.todo !== undefined){
    const r = LIST[S.open]; if (!r) return;
    const arr = todos[r.id] || []; arr[+t.dataset.todo] = t.checked; todos[r.id] = arr; store.set("todos", todos);
    t.closest("li").classList.toggle("done", t.checked); return;
  }
  if (t.matches("[data-i]") && !t.closest(".reader")) openReader(+t.dataset.i);
});
$("#scrim").onclick = () => { if ($("#side").classList.contains("on")) setMenu(false); else closeReader(); };
$("#rClose").onclick = closeReader;
$("#rPrev").onclick = () => S.open > 0 && openReader(S.open - 1);
$("#rNext").onclick = () => S.open < LIST.length - 1 && openReader(S.open + 1);
$("#menuBtn").onclick = () => setMenu(!$("#side").classList.contains("on"));
document.addEventListener("change", e => { if (e.target.id === "sort"){ S.sort = e.target.value; store.set("sort", S.sort); renderMain(); } });
let qt; $("#q").addEventListener("input", e => { clearTimeout(qt); qt = setTimeout(() => setFilter({ q: e.target.value.trim() }), 140); });

document.addEventListener("keydown", e => {
  const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
  if (e.key === "Escape"){
    if ($("#side").classList.contains("on")) setMenu(false);
    else if (S.open !== null) closeReader();
    else if (typing) document.activeElement.blur();
    return;
  }
  if (typing) return;
  if (e.key === "/"){ e.preventDefault(); $("#q").focus(); $("#q").select(); return; }
  if (S.open !== null){
    if (e.key === "ArrowLeft" || e.key === "k") $("#rPrev").click();
    if (e.key === "ArrowRight" || e.key === "j") $("#rNext").click();
    if (e.key === "f"){ toggleFav(LIST[S.open].id); openReader(S.open); }
    return;
  }
  if (e.key === "j" || e.key === "k"){
    S.kb = Math.max(0, Math.min(LIST.length - 1, S.kb + (e.key === "j" ? 1 : -1)));
    markRows();
    const el = document.querySelector(`[data-i="${S.kb}"]`); el && el.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
  if (e.key === "Enter" && S.kb >= 0) openReader(S.kb);
  if (e.key === "f" && S.kb >= 0){ toggleFav(LIST[S.kb].id); render(); }
});

/* тема */
function applyTheme(t){ if (t) document.documentElement.setAttribute("data-theme", t); else document.documentElement.removeAttribute("data-theme"); }
applyTheme(store.get("theme", null));
$("#themeBtn").onclick = () => {
  const dark = document.documentElement.getAttribute("data-theme") === "dark" ||
    (!document.documentElement.getAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
  const t = dark ? "light" : "dark"; applyTheme(t); store.set("theme", t);
};

/* старт */
function stamp(){
  const m = window.RDB_MANIFEST;
  if (!m || !m.updated){ $("#upd").innerHTML = ""; return; }
  const d = new Date(m.updated);
  const s = isNaN(d) ? m.updated : d.toLocaleString("ru-RU", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
  $("#upd").innerHTML = `<span class="dot"></span>Обновлено ${esc(s)}`;
  $("#upd").title = m.last_run_note || "";
}
load().then(() => {
  const seen = new Set();
  ALL = RDB.items.filter(r => !seen.has(r.id) && seen.add(r.id));
  stamp(); applyHash();
  window.addEventListener("hashchange", applyHash);
});
})();
