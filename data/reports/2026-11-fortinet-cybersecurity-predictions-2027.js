RDB.add({
  "id": "2026-11-fortinet-cybersecurity-predictions-2027",
  "vendor": "fortinet",
  "title": "Cybersecurity Predictions for 2027: Emerging Threats and Evolving Defensive Priorities",
  "title_ru": "Прогнозы FortiGuard Labs на 2027 год: новые угрозы и приоритеты защиты",
  "url": "https://www.fortinet.com/blog/industry-trends/issues-shaping-cybersecurity-in-2027-predictions-from-fortiguard-labs",
  "pdf_url": "https://www.fortinet.com/content/dam/fortinet/assets/threat-reports/threat-report-predictions-2027.pdf",
  "published": "2026-11-18",
  "date_precision": "day",
  "added": "2026-11-19",
  "type": "forecast",
  "lang": "en",
  "importance": 2,
  "tier": "key",
  "tags": [
    "прогноз",
    "2027",
    "ИИ-агенты",
    "агентные атаки",
    "киберпреступность"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "FortiGuard Labs ждёт в 2027 году атак на ИИ-агентов ради их законных полномочий: коннекторы, расширения, память агентов и системы извлечения контекста становятся точками компрометации. Отчёт отделяет лабораторные демонстрации от реальных кампаний.",
  "summary": "Прогноз на 12–18 месяцев (17 страниц, 11 прогнозов) с разбором того, какие прогнозы на 2026 год подтвердились. Это сценарии для планирования, а не статистика распространённости угроз. Главная тема — ИИ-агенты, которым компании дают доступ к почте, документам и бизнес-приложениям: перехват их полномочий позволит красть данные, менять записи и запускать транзакции. Отдельно — подмена данных, на которых ИИ в SecOps принимает решения, и специализация криминального рынка вокруг доступа к ИИ.",
  "key_findings": [
    "Атаки на ИИ-агентов ради доступа к данным и бизнес-системам через их законные полномочия.",
    "Коннекторы, расширения, память агентов и системы извлечения контекста — потенциальные точки компрометации и закрепления.",
    "Попытки подменять данные и свидетельства, на которых ИИ в SecOps основывает решения.",
    "Специализация рынка: продажа украденного доступа к платным моделям и посредники, объединяющие ИИ-инструменты, удешевят подготовку атак.",
    "Лабораторные демонстрации (например, распространение ИИ-червя в тестовой сети) не доказывают массового применения таких инструментов."
  ],
  "stats": [
    {
      "value": "11",
      "label": "прогнозов"
    },
    {
      "value": "12–18 мес.",
      "label": "горизонт прогноза"
    },
    {
      "value": "17",
      "label": "страниц"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Инвентаризировать полномочия ИИ-агентов, их коннекторы и интеграции; обеспечить журналирование действий и возможность быстро отозвать права.",
    "Понимать, как полномочия передаются между пользователями, агентами и связанными сервисами.",
    "Защищать источники телеметрии и проверять автоматические действия ИИ в SOC.",
    "Использовать прогнозы как сценарии планирования, без допущений о массовости неподтверждённых угроз."
  ],
  "why_it_matters": "Трезвый прогноз крупного вендора: фокус смещается с «ИИ-вредоносов» на злоупотребление полномочиями ИИ-агентов внутри компании.",
  "source_note": "Сайт Fortinet из среды сбора недоступен; выжимка по описанию отчёта и обзорам (SecurityBrief, iTWire), число страниц и прогнозов — по PDF.",
  "en": {
    "tldr": "FortiGuard Labs expects attacks on AI agents in 2027 aimed at their legitimate permissions: connectors, extensions, agent memory and context retrieval systems become points of compromise. The report separates lab demonstrations from real campaigns.",
    "summary": "A 12–18 month forecast (17 pages, 11 predictions) that also reviews which 2026 predictions materialised. These are planning scenarios, not statistics on threat prevalence. The main theme is AI agents that companies give access to email, documents and business applications: hijacking their permissions would let criminals steal data, alter records and trigger transactions. Separate sections cover tampering with the data on which AI in SecOps bases decisions, and specialisation of the criminal market around AI access.",
    "key_findings": [
      "Attacks on AI agents to reach data and business systems through their legitimate permissions.",
      "Connectors, extensions, agent memory and context retrieval systems are potential points of compromise and persistence.",
      "Attempts to tamper with the data and evidence on which AI in SecOps bases decisions.",
      "Market specialisation: resale of stolen access to paid models and brokers bundling AI tools will make attack preparation cheaper.",
      "Lab demonstrations (e.g. an AI worm spreading in a test network) do not prove mass criminal use of such tools."
    ],
    "stats": [
      {
        "value": "11",
        "label": "predictions"
      },
      {
        "value": "12–18 mo.",
        "label": "forecast horizon"
      },
      {
        "value": "17",
        "label": "pages"
      }
    ],
    "recommendations": [
      "Inventory AI agents' permissions, connectors and integrations; ensure their actions are logged and rights can be revoked quickly.",
      "Understand how authority flows between users, agents and connected services.",
      "Protect telemetry sources and verify automated AI actions in the SOC.",
      "Use the predictions as planning scenarios without assuming unconfirmed threats are widespread."
    ],
    "why_it_matters": "A sober forecast from a major vendor: the focus shifts from 'AI malware' to abuse of AI agents' permissions inside the company.",
    "source_note": "The Fortinet website was not reachable from the collection environment; summary based on the report description and coverage (SecurityBrief, iTWire); page and prediction counts from the PDF."
  }
});
