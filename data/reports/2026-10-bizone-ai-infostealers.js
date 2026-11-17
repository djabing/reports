RDB.add({
  "id": "2026-10-bizone-ai-infostealers",
  "vendor": "bizone",
  "title": "AI-powered infostealers: Bee Stealer and AVENGER",
  "title_ru": "ИИ-инфостилеры: как Bee Stealer и AVENGER составляют досье на жертв",
  "url": "https://cisoclub.ru/bi-zone-ii-nachal-sostavljat-dose-na-polzovatelej-skomprometirovannyh-ustrojstv",
  "pdf_url": "",
  "published": "2026-10-16",
  "date_precision": "day",
  "added": "2026-11-15",
  "type": "ai",
  "lang": "ru",
  "importance": 2,
  "tier": "case",
  "tags": [
    "ИИ",
    "инфостилеры",
    "даркнет",
    "MaaS",
    "профилирование"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Россия",
    "СНГ"
  ],
  "tldr": "BI.ZONE открыла серию исследований теневых площадок материалом об ИИ-инфостилерах: Bee Stealer и AVENGER используют LLM для автоматического профилирования жертв по украденным данным.",
  "summary": "Первое исследование новой серии BI.ZONE о подпольном рынке посвящено инфостилерам со встроенной ИИ-аналитикой. Bee Stealer и AVENGER применяют LLM, чтобы автоматически разбирать украденные с устройства данные и составлять досье на пользователя — это упрощает отбор ценных жертв для дальнейших атак. В сентябре 2026 на теневых площадках зафиксированы уже два таких предложения.",
  "key_findings": [
    "Bee Stealer и AVENGER используют LLM для автоматического профилирования жертв.",
    "ИИ строит досье на пользователя по данным со скомпрометированного устройства.",
    "В сентябре 2026 — два предложения инфостилеров с ИИ-профилированием на теневых площадках.",
    "Исследование открывает серию BI.ZONE о подпольном рынке киберугроз."
  ],
  "stats": [
    {
      "value": "2",
      "label": "предложения ИИ-стилеров в сентябре"
    }
  ],
  "actors": [],
  "malware": [
    "Bee Stealer",
    "AVENGER"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1555",
      "name": "Credentials from Password Stores"
    },
    {
      "id": "T1539",
      "name": "Steal Web Session Cookie"
    },
    {
      "id": "T1005",
      "name": "Data from Local System"
    }
  ],
  "recommendations": [
    "Запретить сохранение корпоративных паролей в браузерах; использовать менеджеры паролей.",
    "Сокращать время жизни сессионных cookie и токенов.",
    "Мониторить утечки учётных данных сотрудников в логах стилеров."
  ],
  "why_it_matters": "ИИ ускоряет монетизацию логов стилеров: злоумышленники быстрее находят самых ценных жертв среди тысяч заражений.",
  "source_note": "Выжимка по публикации CISOClub и анонсам BI.ZONE.",
  "en": {
    "title": "AI infostealers: how Bee Stealer and AVENGER build dossiers on victims",
    "tldr": "BI.ZONE opened a series of underground-market studies with a piece on AI infostealers: Bee Stealer and AVENGER use LLMs to profile victims automatically from stolen data.",
    "summary": "The first study in BI.ZONE's new underground-market series covers infostealers with built-in AI analytics. Bee Stealer and AVENGER use LLMs to automatically parse data stolen from a device and build a dossier on the user — making it easier to select valuable victims for further attacks. Two such offers were already seen on underground forums in September 2026.",
    "key_findings": [
      "Bee Stealer and AVENGER use LLMs to profile victims automatically.",
      "AI builds a user dossier from data on the compromised device.",
      "September 2026 — two offers of infostealers with AI profiling on underground forums.",
      "The study opens BI.ZONE's series on the cyber-threat underground market."
    ],
    "stats": [
      {
        "value": "2",
        "label": "AI stealer offers in September"
      }
    ],
    "recommendations": [
      "Prohibit storing corporate passwords in browsers; use password managers.",
      "Shorten the lifetime of session cookies and tokens.",
      "Monitor stealer logs for leaked employee credentials."
    ],
    "why_it_matters": "AI speeds up the monetisation of stealer logs: attackers find the most valuable victims among thousands of infections faster.",
    "source_note": "Summary based on a CISOClub article and BI.ZONE announcements."
  }
});
