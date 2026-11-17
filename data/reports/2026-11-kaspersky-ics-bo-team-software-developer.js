RDB.add({
  "id": "2026-11-kaspersky-ics-bo-team-software-developer",
  "vendor": "kaspersky-ics",
  "title": "«Лаборатория Касперского» раскрыла многомесячную кибератаку на разработчика ПО в России",
  "title_ru": "BO Team месяцами находилась в сети российского разработчика ПО: риск атаки на цепочку поставок",
  "url": "https://safe.cnews.ru/news/line/2026-11-09_laboratoriya_kasperskogo",
  "pdf_url": "",
  "published": "2026-11-09",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "apt",
  "lang": "ru",
  "importance": 3,
  "tier": "case",
  "tags": [
    "цепочка поставок",
    "Россия",
    "хактивизм",
    "разработка ПО",
    "IR"
  ],
  "sectors": [
    "ИТ и разработка"
  ],
  "regions": [
    "Россия"
  ],
  "tldr": "Kaspersky ICS CERT помогла остановить многомесячную атаку BO Team на российского разработчика ПО: атакующие добрались до исходного кода и сервера подписи сборок — возможной целью было внедрение кода в продукты для атаки на клиентов.",
  "summary": "Разработчик обратился в ICS CERT, заметив подозрительную активность. По рекомендациям экспертов компания лишила атакующих доступа; вредоносную рассылку обнаружили вовремя, утечки учётных данных не произошло. BO Team ранее отнесена «Лабораторией Касперского» к проукраинским хактивистам.",
  "key_findings": [
    "BO Team несколько месяцев находилась в инфраструктуре разработчика ПО.",
    "Доступ к исходному коду и серверу подписи сборок.",
    "Вероятная цель — атака на клиентов через продукты (цепочка поставок).",
    "Атака остановлена до завершения; утечки учётных данных нет."
  ],
  "stats": [],
  "actors": [
    "BO Team"
  ],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1195.002",
      "name": "Compromise Software Supply Chain"
    },
    {
      "id": "T1553.002",
      "name": "Code Signing"
    }
  ],
  "recommendations": [
    "Изолировать серверы сборки и подписи кода, вести журнал всех операций подписи.",
    "Контролировать доступ к репозиториям исходного кода и выявлять аномальные выгрузки.",
    "Заказчикам ПО — проверять обновления и подписи поставщиков."
  ],
  "why_it_matters": "Почти состоявшаяся атака на цепочку поставок через российского разработчика.",
  "source_note": "Выжимка по публикациям CNews, Anti-Malware, CISOClub; технический отчёт — на сайте Kaspersky ICS CERT.",
  "en": {
    "title": "BO Team spent months in a Russian software developer's network: supply-chain attack risk",
    "tldr": "Kaspersky ICS CERT helped stop a months-long BO Team attack on a Russian software developer: the attackers reached the source code and the build-signing server — a possible goal was injecting code into products to attack customers.",
    "summary": "The developer contacted ICS CERT after noticing suspicious activity. Following the experts' recommendations, the company cut off the attackers' access; a malicious mailing was detected in time and no credentials were leaked. Kaspersky previously classified BO Team as pro-Ukrainian hacktivists.",
    "key_findings": [
      "BO Team spent several months in the software developer's infrastructure.",
      "Access to source code and the build-signing server.",
      "Likely goal: attacking customers through products (supply chain).",
      "The attack was stopped before completion; no credentials leaked."
    ],
    "stats": [],
    "recommendations": [
      "Isolate build and code-signing servers and log all signing operations.",
      "Control access to source code repositories and detect anomalous downloads.",
      "Software customers should verify vendors' updates and signatures."
    ],
    "why_it_matters": "A near-successful supply-chain attack via a Russian software developer.",
    "source_note": "Summary based on articles in CNews, Anti-Malware and CISOClub; the technical report is on the Kaspersky ICS CERT website."
  }
});
