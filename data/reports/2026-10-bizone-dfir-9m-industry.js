RDB.add({
  "id": "2026-10-bizone-dfir-9m-industry",
  "vendor": "bizone",
  "title": "За девять месяцев 2026 года 60% расследованных кибератак пришлось на промышленность",
  "title_ru": "BI.ZONE DFIR: 60% расследованных атак за 9 месяцев 2026 — на промышленность",
  "url": "https://bi.zone/news/za-devyat-mesyatsev-2026-goda-60-rassledovannykh-kiberatak-prishlos-na-promyshlennost/",
  "pdf_url": "",
  "published": "2026-10-12",
  "date_precision": "day",
  "added": "2026-10-16",
  "type": "industry",
  "lang": "ru",
  "importance": 3,
  "tier": "analytics",
  "tags": [
    "промышленность",
    "DFIR",
    "подрядчики",
    "ERP",
    "периметр"
  ],
  "sectors": [
    "Промышленность"
  ],
  "regions": [
    "Россия"
  ],
  "tldr": "По расследованиям BI.ZONE DFIR за январь–сентябрь 2026 года промышленность стала самой атакуемой отраслью: 60% инцидентов. Основные точки входа — уязвимости периметра (особенно ERP) и подрядчики.",
  "summary": "Статистика команды реагирования BI.ZONE DFIR по расследованным инцидентам. Промышленность долго была вне фокуса атакующих, накопив устаревшие системы и уязвимые бизнес-приложения, а простой производства делает её финансово привлекательной целью. Авторы подчёркивают: цифра отражает выборку расследований BI.ZONE, а не весь рынок.",
  "key_findings": [
    "60% расследованных атак — на производственные компании, от товаров массового спроса до узкоспециализированной продукции.",
    "60% точек входа — уязвимости и ошибки настройки на периметре.",
    "Векторы: уязвимости ERP-систем — 30%, сетевое оборудование (маршрутизаторы, шлюзы) — 10%, корпоративная почта и рабочие инструменты — 10%.",
    "20% случаев связаны с уязвимостями или компрометацией подрядчиков и поставщиков.",
    "Причины уязвимости отрасли: низкие ИТ-бюджеты, длинный жизненный цикл оборудования, высокая цена простоя."
  ],
  "stats": [
    {
      "value": "60%",
      "label": "расследованных атак — на промышленность"
    },
    {
      "value": "30%",
      "label": "входов через уязвимости ERP"
    },
    {
      "value": "20%",
      "label": "инцидентов через подрядчиков"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    },
    {
      "id": "T1199",
      "name": "Trusted Relationship"
    }
  ],
  "recommendations": [
    "Проверить обновления и настройки ERP-систем, периметрального сетевого оборудования и почты.",
    "Ужесточить контроль доступа подрядчиков к внутренним системам.",
    "Сегментировать сети, регулярно делать резервные копии и тестировать восстановление.",
    "Отработать сценарии реагирования на инциденты."
  ],
  "why_it_matters": "Сходится с данными Solar 4RAYS: промышленность в России стала главной мишенью. Хороший аргумент для бюджета ИБ производственной компании — цена простоя выше цены обслуживания.",
  "source_note": "Выжимка по полному тексту публикации BI.ZONE.",
  "en": {
    "title": "BI.ZONE DFIR: 60% of attacks investigated in 9 months of 2026 targeted manufacturing",
    "tldr": "According to BI.ZONE DFIR investigations for January–September 2026, manufacturing became the most attacked industry: 60% of incidents. The main entry points are perimeter vulnerabilities (especially ERP) and contractors.",
    "summary": "Statistics from the BI.ZONE DFIR team on investigated incidents. Manufacturing was long outside attackers' focus and has accumulated legacy systems and vulnerable business applications, while production downtime makes it a financially attractive target. The authors stress that the figure reflects BI.ZONE's investigation sample, not the whole market.",
    "key_findings": [
      "60% of investigated attacks targeted manufacturers, from consumer goods to highly specialised products.",
      "60% of entry points were perimeter vulnerabilities and misconfigurations.",
      "Vectors: ERP vulnerabilities — 30%, network equipment (routers, gateways) — 10%, corporate email and work tools — 10%.",
      "20% of cases involved vulnerabilities or compromise of contractors and suppliers.",
      "Why the industry is vulnerable: low IT budgets, long equipment life cycles, high cost of downtime."
    ],
    "stats": [
      {
        "value": "60%",
        "label": "of investigated attacks — manufacturing"
      },
      {
        "value": "30%",
        "label": "of entries via ERP vulnerabilities"
      },
      {
        "value": "20%",
        "label": "of incidents via contractors"
      }
    ],
    "recommendations": [
      "Check updates and configuration of ERP systems, perimeter network equipment and email.",
      "Tighten control over contractor access to internal systems.",
      "Segment networks, back up regularly and test recovery.",
      "Rehearse incident response scenarios."
    ],
    "why_it_matters": "Consistent with Solar 4RAYS data: manufacturing has become the main target in Russia. A good argument for a manufacturer's security budget — downtime costs more than maintenance.",
    "source_note": "Summary based on the full text of the BI.ZONE publication."
  }
});
