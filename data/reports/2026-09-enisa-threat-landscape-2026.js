RDB.add({
  "id": "2026-09-enisa-threat-landscape-2026",
  "vendor": "enisa",
  "title": "ENISA Threat Landscape 2026",
  "title_ru": "Ландшафт угроз ENISA 2026",
  "url": "https://www.enisa.europa.eu/publications/enisa-threat-landscape-2026",
  "pdf_url": "https://www.enisa.europa.eu/sites/default/files/2026-09/ENISA%20Threat%20Landscape%202026_Final.pdf",
  "published": "2026-09-22",
  "date_precision": "day",
  "added": "2026-11-15",
  "type": "landscape",
  "lang": "en",
  "importance": 3,
  "tier": "key",
  "tags": [
    "годовой",
    "ЕС",
    "DDoS",
    "supply chain",
    "NIS2"
  ],
  "sectors": [
    "Госсектор",
    "Все отрасли"
  ],
  "regions": [
    "Европа"
  ],
  "tldr": "Ежегодный обзор агентства ЕС по кибербезопасности: 8257 инцидентов 2025 года. По количеству доминируют DDoS (51%), но наибольший краткосрочный ущерб несут вымогатели и компрометация поставщиков; шпионаж — главная долгосрочная угроза.",
  "summary": "ENISA анализирует 8257 инцидентов, зафиксированных с января по декабрь 2025 года по открытым источникам и данным государств — членов ЕС. Ключевая тема — цифровые зависимости, которые делают риск системным. Низкоимпактные DDoS дают половину всех случаев, но реальный ущерб связан с финансово мотивированными атаками и компрометацией поставщиков. Отмечен рост компрометации библиотек и npm-пакетов (кампания Shai-Hulud). По данным одного из обзоров, 73% вредоносных событий затрагивали «существенные» и «важные» субъекты по NIS2.",
  "key_findings": [
    "8257 инцидентов за 2025 год в базе отчёта.",
    "DDoS — 51% зафиксированных случаев, в основном низкоимпактные.",
    "Вымогатели и компрометация поставщиков — наибольший краткосрочный ущерб.",
    "Кибершпионаж — главная долгосрочная угроза.",
    "Рост атак через библиотеки и npm-пакеты (Shai-Hulud)."
  ],
  "stats": [
    {
      "value": "8257",
      "label": "инцидентов проанализировано"
    },
    {
      "value": "51%",
      "label": "случаев — DDoS"
    },
    {
      "value": "73%",
      "label": "событий — субъекты NIS2 (по обзору)"
    }
  ],
  "actors": [],
  "malware": [
    "Shai-Hulud"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1498",
      "name": "Network Denial of Service"
    },
    {
      "id": "T1195.001",
      "name": "Compromise Software Dependencies and Development Tools"
    },
    {
      "id": "T1486",
      "name": "Data Encrypted for Impact"
    }
  ],
  "recommendations": [
    "Картировать зависимости от поставщиков ИТ и облачных сервисов как источник системного риска.",
    "Безопасно использовать пакетные менеджеры: фиксация версий, проверка целостности, задержка обновлений.",
    "Готовить план устойчивости к DDoS, но приоритизировать защиту от вымогателей."
  ],
  "why_it_matters": "Официальная европейская точка отсчёта для регуляторики (NIS2, CRA): полезна для обоснования бюджета и приоритетов.",
  "source_note": "Выжимка по материалам ENISA и аналитическим обзорам (CSA, King & Spalding и др.).",
  "en": {
    "tldr": "The EU cybersecurity agency's annual review: 8,257 incidents in 2025. DDoS dominates by count (51%), but ransomware and supplier compromise cause the most short-term damage; espionage is the main long-term threat.",
    "summary": "ENISA analyses 8,257 incidents recorded from January to December 2025 using open sources and data from EU Member States. The key theme is digital dependencies that make risk systemic. Low-impact DDoS makes up half of all cases, but real damage comes from financially motivated attacks and supplier compromise. Compromised libraries and npm packages are on the rise (the Shai-Hulud campaign). According to one review, 73% of malicious events affected 'essential' and 'important' entities under NIS2.",
    "key_findings": [
      "8,257 incidents in 2025 in the report's dataset.",
      "DDoS — 51% of recorded cases, mostly low impact.",
      "Ransomware and supplier compromise cause the most short-term damage.",
      "Cyber espionage is the main long-term threat.",
      "Rising attacks via libraries and npm packages (Shai-Hulud)."
    ],
    "stats": [
      {
        "value": "8,257",
        "label": "incidents analysed"
      },
      {
        "value": "51%",
        "label": "of cases are DDoS"
      },
      {
        "value": "73%",
        "label": "events hit NIS2 entities (per a review)"
      }
    ],
    "recommendations": [
      "Map dependencies on IT and cloud providers as a source of systemic risk.",
      "Use package managers securely: version pinning, integrity checks, delayed updates.",
      "Prepare a DDoS resilience plan, but prioritise ransomware protection."
    ],
    "why_it_matters": "The official European baseline for regulation (NIS2, CRA): useful for justifying budget and priorities."
  }
});
