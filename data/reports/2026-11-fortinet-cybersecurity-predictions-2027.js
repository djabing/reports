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
    "киберпреступность",
    "эксплуатация уязвимостей"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "FortiGuard Labs: главная тема 2027 года — доверенный доступ. На горизонте 12–18 месяцев атакующие всё чаще будут перехватывать ИИ-агентов, чтобы действовать их законными полномочиями, а доступ к платным ИИ-моделям станет криминальным товаром. Окно от раскрытия уязвимости до эксплуатации сократится до часов.",
  "summary": "Отчёт на 17 страницах: проверка прогнозов на 2026 год, 11 прогнозов о действиях атакующих и 5 приоритетов защиты. Авторы явно разделяют наблюдаемую активность, продемонстрированные в лабораториях возможности и долгосрочные сценарии. Агент может корректно пройти аутентификацию и остаться в рамках прав, выполняя при этом инструкции злоумышленника из документа, письма или веб-страницы, поэтому одной проверки идентичности агента недостаточно. По оценке FortiGuard Labs, 34 из 208 записей MITRE ATLAS (около шестой части) описывают перехват агента или злоупотребление его доступом. Отдельно — «ИИ-брокеры», объединяющие криминальные сервисы, дистилляция возможностей ведущих моделей в небольшие криминальные модели, атаки на свидетельства, на которых строит решения ИИ в SecOps, на память агентов и на коннекторы к бизнес-системам.",
  "key_findings": [
    "ИИ-агенты станут новой инсайдерской угрозой: перехват агента не требует кражи учётных данных или классической уязвимости — достаточно вредоносных инструкций в документе, письме или на веб-странице.",
    "34 из 208 техник и подтехник MITRE ATLAS (около 1/6) описывают перехват агента или злоупотребление его легитимным доступом (оценка FortiGuard Labs; это не частота атак).",
    "Доступ к платным ИИ-сервисам станет криминальным товаром: кража ключей и учётных записей для использования моделей за счёт жертвы и перепродажи; «ИИ-брокеры» будут продавать наборы возможностей для разных этапов атак.",
    "Окно эксплуатации продолжит сокращаться: для критичных уязвимостей в 2026 году — 24–48 часов, к 2027 году нужно уметь закрывать экспонированные уязвимости в течение часов.",
    "Новые цели: свидетельства, на которых принимает решения ИИ в SecOps, память агентов (для закрепления), коннекторы и расширения ИИ (как цепочка поставок).",
    "Лабораторные демонстрации — например, адаптивный ИИ-червь в тестовой сети — не доказывают массового применения; скоординированные «рои» агентов на периферии — долгосрочный сценарий, а не прогноз на 2027 год."
  ],
  "stats": [
    {
      "value": "11",
      "label": "прогнозов о действиях атакующих"
    },
    {
      "value": "34 из 208",
      "label": "записей MITRE ATLAS — о перехвате агентов"
    },
    {
      "value": "24–48 ч",
      "label": "окно эксплуатации критичных уязвимостей"
    },
    {
      "value": "12–18 мес.",
      "label": "горизонт прогноза"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Проверять идентичность агентов и контролировать делегированные полномочия: минимальные права, без общих учётных данных, с журналом действий и проверенной возможностью быстро отозвать доступ.",
    "Выявлять «теневых» агентов, подключённых сотрудниками к почте, браузерам, репозиториям и облаку.",
    "Измерять операционную готовность под окно в часы: закрывать или ограничивать экспонированные уязвимости до выхода патча, обеспечить круглосуточное реагирование.",
    "Приоритизировать уязвимости по данным о реальной эксплуатации и экспозиции; защищать ключи ИИ-сервисов и отслеживать аномальные расходы на модели."
  ],
  "why_it_matters": "Трезвый прогноз крупного вендора: фокус смещается с «ИИ-вредоносов» на злоупотребление полномочиями ИИ-агентов и доступом к ИИ-ресурсам, а отчёт честно отделяет подтверждённое от гипотетического.",
  "source_note": "Выжимка по полному тексту PDF-отчёта FortiGuard Labs и блогу Fortinet от 18.11.2026.",
  "en": {
    "tldr": "FortiGuard Labs: the central 2027 theme is trusted access. Over the next 12–18 months attackers will increasingly hijack AI agents to act under their legitimate permissions, and access to paid AI models will become a criminal commodity. The window from vulnerability disclosure to exploitation will shrink to hours.",
    "summary": "A 17-page report: a review of the 2026 predictions, 11 adversary predictions and 5 defensive priorities. The authors explicitly separate observed activity, capabilities demonstrated in labs and longer-term scenarios. An agent can authenticate correctly and stay within its permissions while carrying out an attacker's instructions embedded in a document, email or web page, so verifying agent identity alone is not enough. By FortiGuard Labs' count, 34 of 208 MITRE ATLAS entries (about one sixth) describe agent hijacking or misuse of its access. Separate predictions cover 'AI brokers' consolidating criminal services, distillation of leading models' capabilities into small criminal models, and attacks on the evidence AI SecOps relies on, on agent memory and on connectors to business systems.",
    "key_findings": [
      "AI agents will become a new insider threat: hijacking an agent needs no stolen credentials or classic vulnerability — malicious instructions in a document, email or web page are enough.",
      "34 of 208 MITRE ATLAS techniques and sub-techniques (about 1/6) describe agent hijacking or misuse of legitimate access (FortiGuard Labs' assessment; not a measure of attack frequency).",
      "Access to paid AI services will become a criminal commodity: theft of keys and accounts to use models at the victim's expense and for resale; 'AI brokers' will sell bundles of capabilities for different attack stages.",
      "The exploitation window will keep shrinking: 24–48 hours for critical vulnerabilities in 2026; by 2027 organisations need to mitigate exposed vulnerabilities within hours.",
      "New targets: the evidence AI SecOps bases decisions on, agent memory (for persistence), and AI connectors and extensions (as a supply chain).",
      "Lab demonstrations — e.g. an adaptive AI worm in a test network — do not prove mass use; coordinated agent 'swarms' at the edge are a longer-term scenario, not a 2027 forecast."
    ],
    "stats": [
      {
        "value": "11",
        "label": "adversary predictions"
      },
      {
        "value": "34 of 208",
        "label": "MITRE ATLAS entries on agent hijacking"
      },
      {
        "value": "24–48 h",
        "label": "exploitation window for critical vulnerabilities"
      },
      {
        "value": "12–18 mo.",
        "label": "forecast horizon"
      }
    ],
    "recommendations": [
      "Verify agent identity and control delegated authority: least privilege, no shared credentials, action logging and a tested ability to revoke access quickly.",
      "Discover 'shadow' agents that employees connect to email, browsers, repositories and cloud.",
      "Measure operational readiness against an hours-long window: close or restrict exposed vulnerabilities before the patch is out and ensure round-the-clock response.",
      "Prioritise vulnerabilities by evidence of real exploitation and exposure; protect AI service keys and monitor anomalous model spend."
    ],
    "why_it_matters": "A sober forecast from a major vendor: the focus shifts from 'AI malware' to abuse of AI agents' permissions and AI resource access, and the report honestly separates confirmed from hypothetical.",
    "source_note": "Summary based on the full text of the FortiGuard Labs PDF report and Fortinet's blog post of 18 Nov 2026."
  }
});
