#!/usr/bin/env node
/* Проверка данных портала Cyber Outlook перед публикацией.
   Запуск из корня репозитория:  node tools/check.js
   Код выхода 0 — всё в порядке, 1 — есть ошибки (список в выводе). */
"use strict";
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
global.window = {};
global.RDB = { items: [], add(r){ this.items.push(r); } };
require(path.join(ROOT, "data/vendors.js"));
require(path.join(ROOT, "data/manifest.js"));
require(path.join(ROOT, "data/legal.js"));
require(path.join(ROOT, "data/labels_en.js"));
const L = window.RDB_LEGAL || {};
const LBL = window.RDB_LABELS_EN || {};
const CYR = /[А-Яа-яЁё]/;
const hostOf = u => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch(e){ return ""; } };
const hostIn = (h, list) => (list || []).some(d => h === d || h.endsWith("." + d));

const errors = [], warns = [];
const V = window.RDB_VENDORS || {}, M = window.RDB_MANIFEST || {};
const TYPES = ["landscape","ransomware","apt","vulnerabilities","ai","industry","forecast","ics","mobile","phishing","other"];
const GROUPS = ["intl","kasp","main","comp"];
const TIERS = ["key","analytics","case"];

if (!M.updated || isNaN(Date.parse(M.updated))) errors.push("manifest: некорректное поле updated");
if (!M.build) errors.push("manifest: нет поля build");

const ids = (M.reports || []).map(r => r.id);
const dup = ids.filter((x, i) => ids.indexOf(x) !== i);
if (dup.length) errors.push("manifest: дубли id: " + [...new Set(dup)].join(", "));

for (const m of M.reports || []){
  const f = path.join(ROOT, "data/reports", m.id + ".js");
  if (!fs.existsSync(f)){ errors.push(`manifest: нет файла для ${m.id}`); continue; }
  try { require(f); } catch(e){ errors.push(`${m.id}: файл не загружается — ${e.message}`); }
}
const files = fs.readdirSync(path.join(ROOT, "data/reports")).filter(f => f.endsWith(".js")).map(f => f.slice(0, -3));
for (const f of files) if (!ids.includes(f)) errors.push(`файл ${f}.js не указан в manifest.js`);

const urls = {};
for (const r of RDB.items){
  const id = r.id || "(без id)";
  const e = s => errors.push(`${id}: ${s}`);
  const mf = (M.reports || []).find(x => x.id === r.id);
  if (!mf) e("id в файле не совпадает с manifest");
  for (const k of ["vendor","title","url","published","added","type","lang","tldr","summary"]) if (!r[k]) e(`нет поля ${k}`);
  for (const k of ["tags","sectors","regions","key_findings","stats","recommendations","actors","malware","cves","ttps"]) if (!Array.isArray(r[k])) e(`поле ${k} должно быть массивом`);
  if (!V[r.vendor]) e(`вендор «${r.vendor}» не найден в data/vendors.js`);
  if (!TYPES.includes(r.type)) e(`неизвестный type «${r.type}»`);
  if (r.tier && !TIERS.includes(r.tier)) e(`неизвестный tier «${r.tier}»`);
  if (!/^\d{4}(-\d{2}(-\d{2})?)?$/.test(r.published || "")) e(`published «${r.published}» не в формате ГГГГ[-ММ[-ДД]]`);
  const prec = (r.published || "").split("-").length === 3 ? "day" : (r.published || "").split("-").length === 2 ? "month" : "year";
  if (r.date_precision && r.date_precision !== prec) e(`date_precision «${r.date_precision}» не соответствует published «${r.published}»`);
  if (!/^https?:\/\//.test(r.url || "")) e("url должен начинаться с http(s)://");
  if (r.pdf_url && !/^https?:\/\//.test(r.pdf_url)) e("pdf_url должен начинаться с http(s)://");
  if ((r.stats || []).some(s => !s.value || !s.label)) e("в stats у каждого элемента нужны value и label");
  if (r.url){ const u = r.url.replace(/[#?].*$/, "").replace(/\/$/, ""); if (urls[u]) warns.push(`${id}: тот же url, что у ${urls[u]}`); else urls[u] = id; }
  for (const u of [r.url, r.pdf_url].filter(Boolean)){
    const h = hostOf(u);
    const b = (L.blocked_sources || []).find(b => b.id === r.vendor || hostIn(h, b.domains));
    if (b) e(`источник запрещён (data/legal.js): ${b.name} — ${b.status}`);
    if (hostIn(h, L.avoid_media)) e(`ссылка на издание из стоп-листа data/legal.js (avoid_media): ${h}`);
  }
  const text = JSON.stringify([r.title, r.title_ru, r.tldr, r.summary, r.key_findings, r.recommendations, r.why_it_matters, r.actors, r.malware, r.tags, r.en]);
  for (const m of L.marked_mentions || []) if (new RegExp(m.pattern, "i").test(text)) warns.push(`${id}: есть упоминание, к которому интерфейс добавит сноску — «${m.note}»`);
  const g = r.group || (V[r.vendor] || {}).group || "main";
  if (!GROUPS.includes(g)) e(`неизвестный раздел «${g}»`);
  // английская версия нужна каждому отчёту: её показывает английский интерфейс
  if (!r.en) e("нет английской версии (поле en) — она нужна для английского интерфейса");
  else {
    for (const k of ["tldr","summary","why_it_matters"]) if (!r.en[k]) e(`en.${k} пусто`);
    for (const k of ["key_findings","recommendations","stats"])
      if ((r.en[k] || []).length !== (r[k] || []).length) e(`en.${k}: ${ (r.en[k]||[]).length } элементов, а в русской версии ${ (r[k]||[]).length }`);
    if (r.lang !== "en" && !r.en.title) e("для отчёта не на английском нужно en.title — английское название");
    if (r.source_note && !r.en.source_note) e("нет en.source_note — английского перевода source_note");
    for (const k of ["title","tldr","summary","why_it_matters","source_note"]) if (r.en[k] && CYR.test(r.en[k])) e(`en.${k} содержит кириллицу`);
    for (const k of ["key_findings","recommendations"]) if ((r.en[k] || []).some(x => CYR.test(x))) e(`en.${k} содержит кириллицу`);
    if ((r.en.stats || []).some(x => CYR.test(x.value + x.label))) e("en.stats содержит кириллицу");
  }
  for (const k of ["tags","sectors","regions","actors","malware"])
    for (const t of r[k] || []) if (CYR.test(t) && !LBL[t]) e(`${k}: «${t}» — нет перевода в data/labels_en.js`);
}
for (const [id, v] of Object.entries(V)){
  if ((L.blocked_sources || []).some(b => b.id === id || hostIn(String(v.domain || "").replace(/^www\./, ""), b.domains)))
    errors.push(`vendors.js: «${id}» — запрещённый источник по data/legal.js, удалите запись`);
  if (!v.name || !v.domain || !/^#[0-9A-Fa-f]{6}$/.test(v.color || "")) errors.push(`vendors.js: у «${id}» нужны name, domain и color (#RRGGBB)`);
  if (!fs.existsSync(path.join(ROOT, "data/logos", id + ".png"))) warns.push(`нет логотипа data/logos/${id}.png (будет иконка сайта или инициалы)`);
}

const count = {}; for (const r of RDB.items){ const g = r.group || (V[r.vendor] || {}).group || "main"; count[g] = (count[g] || 0) + 1; }
console.log(`Отчётов: ${RDB.items.length} · по разделам: ${JSON.stringify(count)} · build: ${M.build}`);
warns.forEach(w => console.log("ПРЕДУПРЕЖДЕНИЕ: " + w));
errors.forEach(x => console.log("ОШИБКА: " + x));
if (errors.length){ console.log(`\nНайдено ошибок: ${errors.length}`); process.exit(1); }
console.log("Ошибок нет.");
