RDB.add({
  "id": "2026-11-google-cloud-security-forecast-2027",
  "vendor": "google",
  "title": "Cloud CISO Perspectives: Our security forecast for 2027",
  "title_ru": "Прогноз Google Cloud по безопасности на 2027 год",
  "url": "https://cloud.google.com/blog/products/identity-security/cloud-ciso-perspectives-our-security-forecast-2027",
  "pdf_url": "",
  "published": "2026-11-10",
  "date_precision": "day",
  "added": "2026-11-15",
  "type": "forecast",
  "lang": "en",
  "importance": 3,
  "tier": "key",
  "tags": [
    "прогноз",
    "2027",
    "ИИ-агенты",
    "Zero Trust",
    "supply chain"
  ],
  "sectors": [
    "Все отрасли",
    "Облачные сервисы"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Google Cloud и Mandiant прогнозируют 2027 год: каждый ИИ-агент — отдельная идентичность с минимальными правами, Zero Trust опускается до уровня транзакций, злоумышленники «отравляют» MCP-инструменты и библиотеки ИИ-ассистентов.",
  "summary": "CISO Google Cloud Крис Бетц с руководителями Google Threat Intelligence и Mandiant подводят итоги 2026 года и дают прогноз. Поиск и исправление уязвимостей LLM-агентами стали массовой практикой. Атакующие сжимают полгода разведки в часы, отравляют open source, MCP-инструменты и внешние библиотеки, используемые ассистентами для кода, а вымогатели переключаются на быструю массовую кражу данных — включая веса моделей, навыки агентов, библиотеки промптов и облачные GPU (LLMJacking). Упомянуты злоупотребления агентными фреймворками ARTEX, Hexstrike и CAIRN с сентября, а также ботнет XCPE (1,3 млн+ ТВ-приставок).",
  "key_findings": [
    "Каждый автономный агент должен быть полноценной идентичностью со своими учётными данными и минимальными правами.",
    "Zero Trust предлагается расширить до уровня отдельных транзакций.",
    "Злоумышленники сжимают «шесть месяцев разведки в часы» (Сандра Джойс, GTIG).",
    "Отравление open source, MCP-инструментов и библиотек, используемых ИИ-ассистентами.",
    "LLMJacking: кража весов моделей, навыков агентов, библиотек промптов и GPU-мощностей.",
    "Ставка на одного «универсального» агента для защиты предприятия в 2027 году провалится."
  ],
  "stats": [
    {
      "value": "1,3 млн+",
      "label": "ТВ-приставок в ботнете XCPE"
    },
    {
      "value": "часы",
      "label": "вместо 6 месяцев разведки"
    },
    {
      "value": "3",
      "label": "агентных фреймворка в атаках (ARTEX, Hexstrike, CAIRN)"
    }
  ],
  "actors": [],
  "malware": [
    "XCPE",
    "ARTEX",
    "Hexstrike",
    "CAIRN"
  ],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Сделать непрерывный red teaming агентных систем обязательным условием до вывода в продакшн.",
    "Вести неизменяемый журнал решений агентов: входы, рассуждения, вызовы инструментов, решения политик.",
    "Управлять моделями, правами агентов, цепочкой поставок и облаком в единой модели управления.",
    "Использовать команды специализированных агентов с центральным координатором и поэтапной автономией.",
    "Переориентировать аналитиков SOC с разбора алертов на задание правил и проверку автоматических действий."
  ],
  "why_it_matters": "Задаёт повестку на 2027 год: безопасность ИИ-агентов становится вопросом управления идентичностями, а не только защиты моделей.",
  "source_note": "Выжимка по блогу Google Cloud (рассылка Cloud CISO Perspectives); отдельного PDF-отчёта на странице нет.",
  "en": {
    "tldr": "Google Cloud and Mandiant forecast 2027: every AI agent is a separate identity with least privilege, Zero Trust goes down to the transaction level, and attackers poison MCP tools and AI-assistant libraries.",
    "summary": "Google Cloud CISO Chris Betz, with leaders of Google Threat Intelligence and Mandiant, reviews 2026 and gives a forecast. Finding and fixing vulnerabilities with LLM agents has become mainstream. Attackers compress six months of reconnaissance into hours, poison open source, MCP tools and external libraries used by coding assistants, and ransomware operators are switching to fast mass data theft — including model weights, agent skills, prompt libraries and cloud GPUs (LLMJacking). Abuse of the agentic frameworks ARTEX, Hexstrike and CAIRN since September is mentioned, as is the XCPE botnet (1.3M+ TV boxes).",
    "key_findings": [
      "Every autonomous agent should be a full identity with its own credentials and least privilege.",
      "Zero Trust should be extended to the level of individual transactions.",
      "Attackers compress 'six months of reconnaissance into hours' (Sandra Joyce, GTIG).",
      "Poisoning of open source, MCP tools and libraries used by AI assistants.",
      "LLMJacking: theft of model weights, agent skills, prompt libraries and GPU capacity.",
      "Betting on a single 'universal' agent to defend the enterprise in 2027 will fail."
    ],
    "stats": [
      {
        "value": "1.3M+",
        "label": "TV boxes in the XCPE botnet"
      },
      {
        "value": "hours",
        "label": "instead of 6 months of reconnaissance"
      },
      {
        "value": "3",
        "label": "agentic frameworks in attacks (ARTEX, Hexstrike, CAIRN)"
      }
    ],
    "recommendations": [
      "Make continuous red teaming of agentic systems a prerequisite for production.",
      "Keep an immutable log of agent decisions: inputs, reasoning, tool calls, policy decisions.",
      "Govern models, agent permissions, supply chain and cloud in a single governance model.",
      "Use teams of specialised agents with a central coordinator and staged autonomy.",
      "Refocus SOC analysts from alert triage to setting rules and reviewing automated actions."
    ],
    "why_it_matters": "Sets the agenda for 2027: AI agent security becomes a matter of identity governance, not just model protection.",
    "source_note": "Summary based on the Google Cloud blog (Cloud CISO Perspectives newsletter); there is no separate PDF report on the page."
  }
});
