RDB.add({
  "id": "2026-11-sailpoint-2027-identity-predictions",
  "vendor": "sailpoint",
  "title": "2027 Identity Security Predictions",
  "title_ru": "SailPoint: прогнозы по безопасности идентичностей на 2027 год",
  "url": "https://www.helpnetsecurity.com/2026/11/27/sailpoint-2027-ai-identity-security-predictions-report/",
  "pdf_url": "",
  "published": "2026-11-27",
  "date_precision": "day",
  "added": "2026-11-28",
  "type": "forecast",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "tags": [
    "прогноз",
    "идентичность",
    "ИИ-агенты",
    "неперсональные учётные записи"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "tldr": "SailPoint прогнозирует, что в 2027 году регуляторы, советы директоров и страховщики потребуют доказательств управления автономными ИИ-агентами. Основа — исследование Horizons of Identity Security 2026–2027: 79% компаний уже используют агентов в продакшене, но лишь 2% внедрили для них средства защиты идентичностей.",
  "summary": "Прогнозы опираются на пятое ежегодное исследование SailPoint Horizons of Identity Security 2026–2027. Ключевой разрыв — «40:1»: 79% предприятий запустили ИИ-агентов в продакшене, а специализированные средства контроля их идентичностей есть лишь у 2%. Человеческий доступ защищён у 67% компаний, агентный — управляется у 24%; агенты составляют 22% неперсональных учётных записей, машинных идентичностей в 45 раз больше, чем человеческих. SailPoint ожидает крупный сбой цепочки поставок по вине агента с избыточными правами («авторизованный сбой»), обязательный стандарт управления агентами в США, рост атак через MCP-коннекторы и сторонние зависимости, а также смещение атак на API-ключи, OAuth-токены и машинные секреты по мере роста доли passkey (более 45% входов людей в 2027 году).",
  "key_findings": [
    "79% предприятий используют ИИ-агентов в продакшене, а средства защиты идентичностей для них внедрили только 2% («разрыв 40:1»).",
    "Агенты составляют 22% неперсональных учётных записей; машинных идентичностей в 45 раз больше, чем человеческих.",
    "Прогноз: крупная публичная компания понесёт многомиллиардный сбой цепочки поставок из-за агентов с избыточными правами.",
    "Ожидается рост атак через подключения агентов и сторонние зависимости, включая MCP-коннекторы.",
    "С ростом passkey (более 45% входов людей) атакующие сместятся на API-ключи, OAuth-токены и машинные секреты."
  ],
  "stats": [
    {
      "value": "79%",
      "label": "компаний с ИИ-агентами в продакшене"
    },
    {
      "value": "2%",
      "label": "с защитой идентичностей агентов"
    },
    {
      "value": "45:1",
      "label": "машинных идентичностей к человеческим"
    }
  ],
  "recommendations": [
    "Вести реестр агентов: владелец, права, действия на всём жизненном цикле.",
    "Выдавать агентам доступ «точно вовремя» под задачу вместо постоянных привилегий.",
    "Не позволять агентам менять собственные права и отключать мониторинг; проверять идентичность и цель перед вызовами API."
  ],
  "why_it_matters": "Агентный ИИ быстро становится крупнейшим классом неуправляемых учётных записей; прогноз задаёт ориентиры для программ IAM на 2027 год.",
  "source_note": "Сайт SailPoint недоступен из среды сборщика; выжимка по публикации Help Net Security от 27.11.2026. Прогнозы — мнение вендора; методология исследования Horizons в публикации не раскрыта.",
  "en": {
    "tldr": "SailPoint predicts that in 2027 regulators, boards and insurers will demand proof that organisations govern autonomous AI agents. It draws on its Horizons of Identity Security 2026-2027 research: 79% of enterprises run agents in production, but only 2% have identity security controls built for them.",
    "summary": "The predictions build on SailPoint's fifth annual Horizons of Identity Security 2026-2027 research. The key gap is '40:1': 79% of enterprises have AI agents in production, while only 2% have purpose-built identity controls for them. 67% have secured human access and 24% govern agentic access; agents make up 22% of non-human accounts, and machine identities outnumber human ones 45 to 1. SailPoint expects a major supply chain disruption caused by over-privileged agents (an 'Authorized Outage'), a mandatory US governance standard for agents, more attacks via MCP connectors and third-party dependencies, and a shift of attacks to API keys, OAuth tokens and machine secrets as passkeys grow (over 45% of human logins in 2027).",
    "key_findings": [
      "79% of enterprises run AI agents in production, but only 2% have identity security controls for them (a '40:1 gap').",
      "Agents make up 22% of non-human accounts; machine identities outnumber human ones 45 to 1.",
      "Prediction: a major public company will suffer a multibillion-dollar supply chain disruption caused by over-privileged agents.",
      "More attacks are expected through agent connections and third-party dependencies, including MCP connectors.",
      "As passkeys grow (over 45% of human logins), attackers will shift to API keys, OAuth tokens and machine secrets."
    ],
    "stats": [
      {
        "value": "79%",
        "label": "enterprises with AI agents in production"
      },
      {
        "value": "2%",
        "label": "with identity controls for agents"
      },
      {
        "value": "45:1",
        "label": "machine-to-human identity ratio"
      }
    ],
    "recommendations": [
      "Maintain an agent inventory: owner, permissions and actions across the lifecycle.",
      "Grant agents just-in-time, task-scoped access instead of standing privileges.",
      "Prevent agents from changing their own permissions or disabling monitoring; verify identity and purpose before API calls."
    ],
    "why_it_matters": "Agentic AI is fast becoming the largest class of ungoverned accounts; the predictions set reference points for 2027 IAM programmes.",
    "source_note": "SailPoint's website was unreachable from the collector environment; summary based on Help Net Security's article of 27 November 2026. Predictions are vendor opinion; the Horizons methodology is not disclosed in the article."
  }
});
