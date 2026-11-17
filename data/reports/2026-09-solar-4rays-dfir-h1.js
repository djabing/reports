RDB.add({
  "id": "2026-09-solar-4rays-dfir-h1",
  "vendor": "solar",
  "title": "Solar 4RAYS: хроники DFIR в первом полугодии 2026 года",
  "title_ru": "Solar 4RAYS: хроники расследований инцидентов, I полугодие 2026",
  "url": "https://rt-solar.ru/solar-4rays/blog/6954/",
  "pdf_url": "",
  "published": "2026-09-04",
  "date_precision": "day",
  "added": "2026-10-16",
  "type": "landscape",
  "lang": "ru",
  "importance": 3,
  "tier": "key",
  "tags": [
    "DFIR",
    "APT",
    "промышленность",
    "веб-уязвимости",
    "полугодовой"
  ],
  "sectors": [
    "Промышленность",
    "Госсектор",
    "ИТ",
    "Телеком"
  ],
  "regions": [
    "Россия"
  ],
  "tldr": "Промышленность — 31% расследованных инцидентов (+11 п.п. за год); 58% проникновений — через уязвимости веб-приложений. Среди профессиональных группировок «аномальное затишье»: всего 4 известных кластера против 18 за 2025 год.",
  "summary": "Отчёт центра Solar 4RAYS по десяткам расследований инцидентов в российских частных и государственных организациях. Фокус атакующих смещается с госсектора на промышленность; главный вектор — уязвимости в популярном российском ПО и open source. Затишье в первом полугодии авторы связывают с возможной цикличностью: группировки действуют скрытно в начале года и активизируются во втором полугодии.",
  "key_findings": [
    "Промышленность — 31% инцидентов (+11 п.п. к I полугодию 2025); доля госсектора снизилась на 14,5 п.п., но это всё ещё каждый пятый инцидент.",
    "Шпионаж — главная выявленная цель (31,6%); почти в половине случаев цель не установлена, потому что атаки остановлены рано.",
    "Уязвимости веб-приложений — 58% первичных проникновений (46% годом ранее); атакуют популярное российское ПО и open source.",
    "Атак через подрядчиков в I полугодии не зафиксировано — тренд 2025 года прервался.",
    "Активны лишь 4 известные группировки: Fairy Trickster, GOFFEE, NGC5081, Partisan Zmiy (32% инцидентов); 68% не атрибутированы.",
    "Доля «коротких» атак (до недели) снизилась с 32% до 26%; ни одного успешного инцидента в энергетике (год назад — 12%)."
  ],
  "stats": [
    {
      "value": "31%",
      "label": "инцидентов — промышленность"
    },
    {
      "value": "58%",
      "label": "входов через веб-уязвимости"
    },
    {
      "value": "4",
      "label": "активные группировки (18 за 2025)"
    },
    {
      "value": "68%",
      "label": "инцидентов без атрибуции"
    }
  ],
  "actors": [
    "Fairy Trickster",
    "GOFFEE",
    "NGC5081",
    "Partisan Zmiy"
  ],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    }
  ],
  "recommendations": [
    "Приоритизировать патчинг и WAF для публичных веб-приложений, особенно на российском и open source ПО.",
    "Готовиться к росту активности APT во втором полугодии: проверить готовность SOC и IR.",
    "Быстро привлекать DFIR при подозрениях — ранняя остановка атаки резко снижает ущерб."
  ],
  "why_it_matters": "Один из немногих отчётов с реальной статистикой расследований в России — с конкретными группировками и векторами.",
  "source_note": "Выжимка по полному тексту отчёта в блоге Solar 4RAYS.",
  "en": {
    "title": "Solar 4RAYS: incident investigation chronicles, H1 2026",
    "tldr": "Manufacturing accounted for 31% of investigated incidents (+11 pp year on year); 58% of intrusions came through web application vulnerabilities. Professional groups show an 'abnormal lull': only 4 known clusters versus 18 in 2025.",
    "summary": "Solar 4RAYS report on dozens of incident investigations at Russian private and public organisations. Attackers' focus is shifting from government to manufacturing; the main vector is vulnerabilities in popular Russian software and open source. The authors attribute the first-half lull to possible cyclicality: groups operate stealthily early in the year and become more active in the second half.",
    "key_findings": [
      "Manufacturing — 31% of incidents (+11 pp vs H1 2025); government's share fell by 14.5 pp but is still one in five incidents.",
      "Espionage is the main identified goal (31.6%); in almost half of cases the goal was not established because attacks were stopped early.",
      "Web application vulnerabilities — 58% of initial intrusions (46% a year earlier); popular Russian software and open source are targeted.",
      "No attacks via contractors were recorded in H1 — the 2025 trend was broken.",
      "Only 4 known groups were active: Fairy Trickster, GOFFEE, NGC5081, Partisan Zmiy (32% of incidents); 68% unattributed.",
      "The share of 'short' attacks (under a week) fell from 32% to 26%; no successful incidents in energy (12% a year ago)."
    ],
    "stats": [
      {
        "value": "31%",
        "label": "of incidents — manufacturing"
      },
      {
        "value": "58%",
        "label": "of entries via web vulnerabilities"
      },
      {
        "value": "4",
        "label": "active groups (18 in 2025)"
      },
      {
        "value": "68%",
        "label": "of incidents unattributed"
      }
    ],
    "recommendations": [
      "Prioritise patching and WAF for public web applications, especially Russian and open-source software.",
      "Prepare for increased APT activity in the second half: check SOC and IR readiness.",
      "Bring in DFIR quickly when compromise is suspected — stopping an attack early sharply reduces damage."
    ],
    "why_it_matters": "One of the few reports with real investigation statistics from Russia — with specific groups and vectors.",
    "source_note": "Summary based on the full text of the report on the Solar 4RAYS blog."
  }
});
