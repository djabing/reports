RDB.add({
  "id": "2026-10-qualys-patch-tuesday-october",
  "vendor": "qualys",
  "title": "Microsoft Patch Tuesday, October 2026 Security Update Review",
  "title_ru": "Разбор октябрьского Patch Tuesday 2026",
  "url": "https://blog.qualys.com/vulnerabilities-threat-research/2026/10/13/microsoft-patch-tuesday-october-2026-security-update-review",
  "pdf_url": "",
  "published": "2026-10-13",
  "date_precision": "day",
  "added": "2026-10-15",
  "type": "vulnerabilities",
  "lang": "en",
  "importance": 2,
  "tier": "case",
  "tags": [
    "patch tuesday",
    "Microsoft",
    "уязвимости",
    "ежемесячный"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Октябрьский Patch Tuesday закрыл рекордные 1 118 уязвимостей; Microsoft впервые сгруппировала их в 15 «когорт риска». Параллельно Adobe выпустила 11 бюллетеней на 176 уязвимостей.",
  "summary": "Ежемесячный разбор обновлений безопасности Microsoft от исследователей Qualys. Объём исправлений беспрецедентный — более тысячи CVE за один цикл, поэтому Microsoft ввела новую группировку уязвимостей по когортам риска, чтобы помочь командам приоритизировать установку. Разбор полезен как чек-лист для команды управления уязвимостями на текущий месяц.",
  "key_findings": [
    "1 118 исправленных уязвимостей в продуктах Microsoft за один цикл обновлений.",
    "Новая классификация: уязвимости сгруппированы в 15 когорт риска для приоритизации.",
    "Adobe в тот же день: 11 бюллетеней, 176 уязвимостей в нескольких продуктах."
  ],
  "stats": [
    {
      "value": "1 118",
      "label": "уязвимостей Microsoft"
    },
    {
      "value": "15",
      "label": "когорт риска"
    },
    {
      "value": "176",
      "label": "уязвимостей Adobe"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Использовать когорты риска Microsoft для приоритизации, начиная с эксплуатируемых и публичных сервисов.",
    "Сверить список с каталогом CISA KEV.",
    "Не откладывать обновления Adobe на пользовательских рабочих станциях."
  ],
  "why_it_matters": "Объём патчей растёт кратно — без приоритизации по риску команды не успевают. Новая модель когорт может изменить процессы vulnerability management.",
  "source_note": "Выжимка по анонсу разбора Qualys и сообщению Cyber Security News. Детали по конкретным CVE — в оригинале.",
  "en": {
    "tldr": "October's Patch Tuesday fixed a record 1,118 vulnerabilities; Microsoft grouped them into 15 'risk cohorts' for the first time. Adobe released 11 bulletins covering 176 vulnerabilities in parallel.",
    "summary": "Qualys researchers' monthly review of Microsoft security updates. The volume of fixes is unprecedented — more than a thousand CVEs in a single cycle — so Microsoft introduced a new grouping of vulnerabilities into risk cohorts to help teams prioritise deployment. The review is useful as a checklist for the vulnerability management team this month.",
    "key_findings": [
      "1,118 vulnerabilities fixed in Microsoft products in a single update cycle.",
      "New classification: vulnerabilities grouped into 15 risk cohorts for prioritisation.",
      "Adobe on the same day: 11 bulletins, 176 vulnerabilities across several products."
    ],
    "stats": [
      {
        "value": "1,118",
        "label": "Microsoft vulnerabilities"
      },
      {
        "value": "15",
        "label": "risk cohorts"
      },
      {
        "value": "176",
        "label": "Adobe vulnerabilities"
      }
    ],
    "recommendations": [
      "Use Microsoft's risk cohorts to prioritise, starting with exploited and public-facing services.",
      "Cross-check the list against the CISA KEV catalogue.",
      "Do not delay Adobe updates on user workstations."
    ],
    "why_it_matters": "Patch volume is growing manifold — without risk-based prioritisation teams cannot keep up. The new cohort model may change vulnerability management processes.",
    "source_note": "Summary based on the Qualys review announcement and a Cyber Security News report. Details on specific CVEs are in the original."
  }
});
