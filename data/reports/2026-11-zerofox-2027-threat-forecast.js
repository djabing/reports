RDB.add({
  "id": "2026-11-zerofox-2027-threat-forecast",
  "vendor": "zerofox",
  "title": "2027 Threat Forecast — Plan for the Attackers You Can't See",
  "title_ru": "Прогноз угроз ZeroFox на 2027 год",
  "url": "https://www.zerofox.com/reports/2027-threat-forecast/",
  "pdf_url": "",
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
    "вымогатели",
    "брокеры доступа",
    "даркнет",
    "третьи стороны"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально",
    "Северная Америка"
  ],
  "tldr": "ZeroFox: около 718 инцидентов вымогательства в месяц в 2026 году против 573 в 2025-м (+25%). Публичных объявлений о продаже доступа стало меньше (с ~620 до ~370 в квартал), но торговля ушла в закрытые каналы — угроза не снизилась.",
  "summary": "Ежегодный прогноз ZeroFox Intelligence из пяти прогнозов. III квартал 2026 года — рекордный: не менее 2381 инцидента (+14% к прежнему максимуму), к концу октября 2026 год уже превзошёл весь 2025-й. После ликвидации форумов XSS, RAMP и LeakBase брокеры доступа перешли в закрытые каналы (чаще всего Tox); базовый доступ подешевел до менее $500, права администратора домена — около $8000. В 2027 году ожидаются сокращение окна от раскрытия уязвимости до массовой эксплуатации до часов, рост продаж сессионных токенов и доступа к поставщикам и интеграторам, а также атаки на корпоративных ИИ-агентов. Показатели — по наблюдениям ZeroFox и сайтам утечек, их нельзя напрямую переносить на Россию и СНГ.",
  "key_findings": [
    "~718 инцидентов вымогательства в месяц (январь–октябрь 2026) против ~573 в 2025 году.",
    "III квартал 2026 — рекорд: не менее 2381 инцидента; Qilin — около 15% (1104 из 7239), The Gentlemen — 935.",
    "Публичные объявления о продаже доступа: ~620 → ~370 в квартал; сделки ушли в закрытые каналы (Tox), базовый доступ дешевле $500, доступ администратора домена — ~$8000.",
    "Прогноз: окно от раскрытия уязвимости до массовой эксплуатации сократится до часов.",
    "Атаки на корпоративных ИИ-агентов и их учётные данные будут расти быстрее, чем применение созданного ИИ вредоносного ПО.",
    "Службы поддержки, SaaS-интеграции, сессии и доступ поставщиков — ключевые пути через доверенные связи (пример — кража OAuth-токенов Salesloft Drift, Gainsight, Klue)."
  ],
  "stats": [
    {
      "value": "~718",
      "label": "инцидентов вымогательства в месяц"
    },
    {
      "value": "+25%",
      "label": "к 2025 году"
    },
    {
      "value": "2381",
      "label": "инцидент в III кв. — рекорд"
    },
    {
      "value": "620 → 370",
      "label": "объявлений о продаже доступа в квартал"
    }
  ],
  "actors": [
    "Qilin",
    "The Gentlemen",
    "ShinyHunters"
  ],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Не полагаться только на мониторинг даркнета: проверять сохранённые сессии, токены интеграций и права внешней поддержки.",
    "Ужесточить проверку личности при сбросе паролей через службу поддержки.",
    "Сократить окно установки исправлений на периметре до часов.",
    "Учитывать, что часть заявлений на сайтах утечек будет непроверенной или преувеличенной."
  ],
  "why_it_matters": "Показывает, что снижение видимых сигналов в даркнете не означает снижения угрозы: атаки идут через доверенные связи и украденные сессии.",
  "source_note": "Полный отчёт — по форме на сайте ZeroFox (недоступен из среды сбора); выжимка по открытому обзору ZeroFox и публикации Help Net Security от 19.11.2026.",
  "en": {
    "tldr": "ZeroFox: about 718 ransomware and extortion incidents a month in 2026 versus 573 in 2025 (+25%). Public access-for-sale listings fell (from ~620 to ~370 a quarter), but trading moved into private channels — the threat has not decreased.",
    "summary": "ZeroFox Intelligence's annual forecast with five predictions. Q3 2026 set a record: at least 2,381 incidents (+14% over the previous high), and by the end of October 2026 had already surpassed all of 2025. After the takedowns of the XSS, RAMP and LeakBase forums, access brokers moved into private channels (most often Tox); basic access fell below $500, domain admin access is about $8,000. For 2027 ZeroFox expects the window from disclosure to mass exploitation to shrink to hours, more sales of session tokens and vendor/integrator access, and attacks on corporate AI agents. Figures reflect ZeroFox observations and leak sites and cannot be applied directly to Russia and the CIS.",
    "key_findings": [
      "~718 ransomware incidents per month (January–October 2026) vs ~573 in 2025.",
      "Q3 2026 was a record: at least 2,381 incidents; Qilin ~15% (1,104 of 7,239), The Gentlemen 935.",
      "Public access-for-sale listings: ~620 → ~370 per quarter; deals moved to private channels (Tox), basic access under $500, domain admin access ~$8,000.",
      "Forecast: the window from vulnerability disclosure to mass exploitation will shrink to hours.",
      "Attacks on corporate AI agents and their credentials will grow faster than use of AI-generated malware.",
      "Help desks, SaaS integrations, sessions and vendor access are key paths via trusted relationships (e.g. theft of Salesloft Drift, Gainsight and Klue OAuth tokens)."
    ],
    "stats": [
      {
        "value": "~718",
        "label": "ransomware incidents per month"
      },
      {
        "value": "+25%",
        "label": "vs 2025"
      },
      {
        "value": "2,381",
        "label": "incidents in Q3 — a record"
      },
      {
        "value": "620 → 370",
        "label": "access-for-sale listings per quarter"
      }
    ],
    "recommendations": [
      "Do not rely on dark web monitoring alone: review stored sessions, integration tokens and external support permissions.",
      "Tighten identity verification for help-desk password resets.",
      "Shorten the perimeter patching window to hours.",
      "Expect some leak-site claims to be unverified or exaggerated."
    ],
    "why_it_matters": "Shows that fewer visible dark web signals do not mean less threat: attacks come through trusted relationships and stolen sessions.",
    "source_note": "The full report is behind a form on the ZeroFox website (not reachable from the collection environment); summary based on ZeroFox's public overview and Help Net Security's article of 19 Nov 2026."
  }
});
