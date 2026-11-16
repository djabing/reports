#!/usr/bin/env node
/* Быстрая проверка портала в браузере (Playwright + Chromium).
   Запуск из корня репозитория:  node tools/smoke.js
   Код выхода 0 — портал открывается без ошибок во всех разделах, 1 — есть проблемы. */
"use strict";
const path = require("path");
const { chromium, devices } = require("playwright");
const URL = "file://" + path.resolve(__dirname, "..", "index.html");

(async () => {
  const problems = [];
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1300, height: 1000 } });
  p.setDefaultTimeout(5000);
  p.on("pageerror", e => problems.push("JS: " + e.message));
  for (const sec of ["international", "international/en", "kaspersky", "vendors", "competitors"]){
    await p.goto(URL + "#/" + sec); await p.reload(); await p.waitForTimeout(600);
    const n = await p.locator("article.card").count();
    console.log(`#/${sec}: ${n} карточек`);
    if (!n) problems.push(`раздел #/${sec} пуст`);
  }
  await p.goto(URL + "#/international"); await p.reload(); await p.waitForTimeout(600);
  await p.locator("article.card").first().click(); await p.waitForTimeout(300);
  if (!(await p.locator("#reader.on .r-h1").count())) problems.push("не открывается карточка отчёта");
  const ctx = await b.newContext({ ...devices["iPhone 13"] });
  const m = await ctx.newPage(); m.on("pageerror", e => problems.push("JS (mobile): " + e.message));
  await m.goto(URL); await m.waitForTimeout(600);
  const [sw, w] = await m.evaluate(() => [document.documentElement.scrollWidth, innerWidth]);
  if (sw > w) problems.push(`на телефоне страница шире экрана (${sw} > ${w})`);
  await b.close();
  problems.forEach(x => console.log("ПРОБЛЕМА: " + x));
  if (problems.length) process.exit(1);
  console.log("Браузерная проверка пройдена.");
})().catch(e => { console.log("ПРОБЛЕМА: " + e.message); process.exit(1); });
