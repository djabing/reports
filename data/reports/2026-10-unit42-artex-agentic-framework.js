RDB.add({
  "id": "2026-10-unit42-artex-agentic-framework",
  "vendor": "unit42",
  "title": "ARTEX Agentic AI Framework Used to Abuse Exposed APIs and Probe Identity Providers",
  "title_ru": "Агентный фреймворк ARTEX используется для атак на открытые API и провайдеров идентификации",
  "url": "https://github.com/PaloAltoNetworks/Unit42-timely-threat-intel/blob/main/2026-10-30-activity-using-ARTEX-agentic-AI.txt",
  "pdf_url": "",
  "published": "2026-10-30",
  "date_precision": "day",
  "added": "2026-11-15",
  "type": "ai",
  "lang": "en",
  "importance": 2,
  "tier": "case",
  "tags": [
    "ИИ",
    "агентные атаки",
    "API",
    "OAuth",
    "IoC"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Unit 42 фиксирует (24.09–27.10.2026) активность открытого мультиагентного пентест-фреймворка ARTEX: разведка через source maps и OpenAPI, атаки на IdP/OAuth, а при неудаче — злоупотребление открытыми API.",
  "summary": "ARTEX — автономный мультиагентный пентест-фреймворк, опубликованный в июле 2026 и закрытый 8 октября после 12 000+ форков. Его используют несколько несвязанных групп, поэтому сам факт применения ARTEX не указывает на конкретного актора. Удачные случаи: самостоятельная регистрация учётной записи в продакшн-приложении (~40 минут) и чтение ~50 МБ данных через API, неаутентифицированная запись в хранилище документов dev-API. Успешной компрометации учётных записей IdP не наблюдалось.",
  "key_findings": [
    "ARTEX опубликован в июле 2026 и закрыт 8 октября после 12 000+ форков.",
    "Плейбук: JS source maps, OpenAPI-спецификации, runtime-конфиги → атаки на IdP/OAuth → открытые API.",
    "Регистрация аккаунта за ~40 минут и выгрузка ~50 МБ данных через API продакшн-приложения.",
    "700+ отклонённых попыток доступа к внутренним приложениям за IAP; пачки по 1–14 запросов с паузами 25–31 с.",
    "Признаки ИИ-оператора: «подумал — сделал», самокоррекция по HTTP 422, проверка результата повторным чтением."
  ],
  "stats": [
    {
      "value": "12 000+",
      "label": "форков ARTEX"
    },
    {
      "value": "~40 мин",
      "label": "до регистрации аккаунта"
    },
    {
      "value": "~50 МБ",
      "label": "выгружено через API"
    },
    {
      "value": "700+",
      "label": "отклонённых попыток к IAP"
    }
  ],
  "actors": [],
  "malware": [
    "ARTEX",
    "Sub2API"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1595",
      "name": "Active Scanning"
    },
    {
      "id": "T1110.003",
      "name": "Password Spraying"
    },
    {
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    },
    {
      "id": "T1136",
      "name": "Create Account"
    }
  ],
  "recommendations": [
    "Не публиковать source maps и OpenAPI-спецификации внутренних API в продакшне.",
    "Отключить или ограничить самостоятельную регистрацию в бизнес-приложениях; требовать авторизацию на всех операциях записи.",
    "Детектировать связку «загрузка /openapi.json → вызов непубличного API через секунды» и запись с немедленным повторным GET.",
    "Сканировать интернет-периметр на заголовок realm=\"ARTEX\" и проверять IoC из отчёта (без слепой блокировки)."
  ],
  "why_it_matters": "Практическая детектирующая логика против агентных фреймворков, которые после утечки в открытый доступ стали массовым инструментом.",
  "source_note": "Выжимка по оперативной публикации Unit 42 на GitHub (Unit42-timely-threat-intel).",
  "en": {
    "tldr": "Unit 42 tracked (24 Sep – 27 Oct 2026) activity of the open multi-agent pentest framework ARTEX: reconnaissance via source maps and OpenAPI, attacks on IdP/OAuth and, on failure, abuse of exposed APIs.",
    "summary": "ARTEX is an autonomous multi-agent pentest framework published in July 2026 and taken down on 8 October after 12,000+ forks. It is used by several unrelated groups, so ARTEX use alone does not point to a specific actor. Successful cases: self-registration of an account in a production application (~40 minutes) and reading ~50 MB of data via the API, and unauthenticated writes to a dev API document store. No successful compromise of IdP accounts was observed.",
    "key_findings": [
      "ARTEX was published in July 2026 and taken down on 8 October after 12,000+ forks.",
      "Playbook: JS source maps, OpenAPI specs, runtime configs → attacks on IdP/OAuth → exposed APIs.",
      "Account registration in ~40 minutes and ~50 MB of data exfiltrated via a production application's API.",
      "700+ rejected access attempts to internal applications behind IAP; bursts of 1–14 requests with 25–31 s pauses.",
      "Signs of an AI operator: 'think — act', self-correction on HTTP 422, verifying results by re-reading."
    ],
    "stats": [
      {
        "value": "12,000+",
        "label": "ARTEX forks"
      },
      {
        "value": "~40 min",
        "label": "to account registration"
      },
      {
        "value": "~50 MB",
        "label": "exfiltrated via API"
      },
      {
        "value": "700+",
        "label": "rejected IAP attempts"
      }
    ],
    "recommendations": [
      "Do not publish source maps and OpenAPI specs of internal APIs in production.",
      "Disable or restrict self-registration in business applications; require authorisation on all write operations.",
      "Detect the pattern 'fetch /openapi.json → call a non-public API seconds later' and writes immediately followed by a GET.",
      "Scan the internet perimeter for the realm=\"ARTEX\" header and check the report's IoCs (without blind blocking)."
    ],
    "why_it_matters": "Practical detection logic against agentic frameworks that became a mass tool after leaking into the open.",
    "source_note": "Summary based on Unit 42's timely publication on GitHub (Unit42-timely-threat-intel)."
  }
});
