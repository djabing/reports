RDB.add({
  "id": "2026-11-cloudsek-silent-lynx-exposed-server",
  "vendor": "cloudsek",
  "title": "Off the Rails: Inside an Exposed Silent Lynx Server",
  "title_ru": "Сошли с рельсов: открытый сервер группировки Silent Lynx",
  "url": "https://www.cloudsek.com/blog/off-the-rails-inside-an-exposed-silent-lynx-server",
  "pdf_url": "",
  "published": "2026-11-11",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "apt",
  "lang": "en",
  "importance": 3,
  "tier": "case",
  "tags": [
    "APT",
    "Центральная Азия",
    "ИИ-агент",
    "шпионаж",
    "железные дороги"
  ],
  "sectors": [
    "Госсектор",
    "Транспорт",
    "Оборона"
  ],
  "regions": [
    "Таджикистан",
    "Узбекистан",
    "Туркменистан"
  ],
  "tldr": "CloudSEK нашла открытый сервер Silent Lynx с данными за апрель–октябрь 2026: группа имела доступ к сети железных дорог Таджикистана, собрала 2000+ оборонных документов и использовала ИИ-агента Hermes на моделях DeepSeek.",
  "summary": "Открытая директория на VPS (порт 8088, без аутентификации) содержала более десятка гигабайт: ВПО, скомпрометированные учётные данные, украденные правительственные документы и журналы операций. Доступ к национальной железнодорожной сети Таджикистана сохранялся с середины августа как минимум до 10 октября 2026. Также скомпрометирована геопространственная платформа в Узбекистане, найдены фишинговые приманки для Туркменистана. ИИ-агент Hermes (в основном DeepSeek) помогал в разведке, сборе данных и заметании следов. Связь с Казахстаном оценена со средней уверенностью; связь с правительством Казахстана не установлена.",
  "key_findings": [
    "Открытый сервер Silent Lynx с данными операций апреля–октября 2026.",
    "Доступ к сети железных дорог Таджикистана с середины августа до как минимум 10 октября.",
    "Собрано более 2000 оборонных правительственных документов.",
    "Скомпрометирована геопространственная платформа в Узбекистане; приманки против Туркменистана.",
    "ИИ-агент Hermes на моделях DeepSeek — разведка, сбор данных, зачистка следов."
  ],
  "stats": [
    {
      "value": "2000+",
      "label": "оборонных документов"
    },
    {
      "value": "~2 мес.",
      "label": "доступа к сети железных дорог"
    },
    {
      "value": "7 мес.",
      "label": "журналов операций"
    }
  ],
  "actors": [
    "Silent Lynx"
  ],
  "malware": [
    "Hermes (ИИ-агент)"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1566.001",
      "name": "Spearphishing Attachment"
    },
    {
      "id": "T1005",
      "name": "Data from Local System"
    },
    {
      "id": "T1070",
      "name": "Indicator Removal"
    }
  ],
  "recommendations": [
    "Госорганам Центральной Азии — проверить IoC из отчёта CloudSEK.",
    "Мониторить обращения к LLM-API из инфраструктуры как возможный признак ИИ-агентов атакующих.",
    "Сегментировать сети транспортной инфраструктуры от офисных."
  ],
  "why_it_matters": "Один из первых задокументированных случаев APT-кампании, где ИИ-агент участвовал в операциях, — по журналам самих атакующих.",
  "source_note": "Выжимка по блогу CloudSEK и обзорам (The Record, ITNerd).",
  "en": {
    "tldr": "CloudSEK found an exposed Silent Lynx server with data from April–October 2026: the group had access to Tajikistan's railway network, collected 2,000+ defence documents and used the Hermes AI agent running on DeepSeek models.",
    "summary": "An open directory on a VPS (port 8088, no authentication) held more than ten gigabytes: malware, compromised credentials, stolen government documents and operation logs. Access to Tajikistan's national railway network was maintained from mid-August until at least 10 October 2026. A geospatial platform in Uzbekistan was also compromised, and phishing lures for Turkmenistan were found. The Hermes AI agent (mostly DeepSeek) helped with reconnaissance, data collection and covering tracks. A link to Kazakhstan was assessed with medium confidence; no link to the government of Kazakhstan was established.",
    "key_findings": [
      "Exposed Silent Lynx server with operation data from April–October 2026.",
      "Access to Tajikistan's railway network from mid-August until at least 10 October.",
      "More than 2,000 government defence documents collected.",
      "A geospatial platform in Uzbekistan compromised; lures against Turkmenistan.",
      "Hermes AI agent on DeepSeek models — reconnaissance, data collection, trace cleanup."
    ],
    "stats": [
      {
        "value": "2,000+",
        "label": "defence documents"
      },
      {
        "value": "~2 mo.",
        "label": "of railway network access"
      },
      {
        "value": "7 mo.",
        "label": "of operation logs"
      }
    ],
    "recommendations": [
      "Central Asian government bodies should check the IoCs in the CloudSEK report.",
      "Monitor LLM API calls from infrastructure as a possible sign of attackers' AI agents.",
      "Segment transport infrastructure networks from office networks."
    ],
    "why_it_matters": "One of the first documented APT campaigns in which an AI agent took part in operations — based on the attackers' own logs.",
    "source_note": "Summary based on the CloudSEK blog and coverage (The Record, ITNerd)."
  }
});
