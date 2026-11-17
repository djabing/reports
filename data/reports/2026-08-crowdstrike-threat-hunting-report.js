RDB.add({
  "id": "2026-08-crowdstrike-threat-hunting-report",
  "vendor": "crowdstrike",
  "title": "CrowdStrike 2026 Threat Hunting Report",
  "title_ru": "Отчёт CrowdStrike о threat hunting 2026",
  "url": "https://www.crowdstrike.com/en-us/resources/reports/threat-hunting-report/",
  "pdf_url": "",
  "published": "2026-08",
  "date_precision": "month",
  "added": "2026-10-15",
  "type": "landscape",
  "lang": "en",
  "importance": 3,
  "tier": "key",
  "tags": [
    "годовой",
    "ИИ",
    "облако",
    "identity",
    "vishing",
    "supply chain"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "«Год уклоняющегося противника»: ИИ-атаки выросли на 89%, 88% эксплуатаций начинаются в течение 48 часов после публикации PoC, облачный eCrime вырос на 171%.",
  "summary": "Ежегодный отчёт команды Falcon OverWatch, представленный на Black Hat 2026. Злоумышленники ускоряют эксплуатацию уязвимостей, используют ИИ, атакуют цепочки поставок ПО (особенно инструменты разработчиков и ИИ-экосистемы) и смещаются к атакам на идентичность и облако. Вишинг, злоупотребление OAuth и доверенные учётные записи сокращают время до компрометации предприятия.",
  "key_findings": [
    "Киберугрозы с использованием ИИ выросли на 89%: ИИ ускоряет эксплуатацию и фишинг.",
    "88% наблюдаемых атак на уязвимости начались в течение 48 часов после публикации PoC.",
    "Облачная киберпреступность выросла на 171% — цели: учётные данные и финансовые активы.",
    "Вишинг, OAuth-злоупотребления и доверенные идентичности ускоряют компрометацию.",
    "Атаки на цепочку поставок всё чаще нацелены на инструменты разработчиков и ИИ-экосистемы."
  ],
  "stats": [
    {
      "value": "+89%",
      "label": "ИИ-атак"
    },
    {
      "value": "88%",
      "label": "эксплуатаций в первые 48 ч после PoC"
    },
    {
      "value": "+171%",
      "label": "облачного eCrime"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1566.004",
      "name": "Spearphishing Voice"
    },
    {
      "id": "T1528",
      "name": "Steal Application Access Token"
    },
    {
      "id": "T1078.004",
      "name": "Valid Accounts: Cloud Accounts"
    },
    {
      "id": "T1195",
      "name": "Supply Chain Compromise"
    }
  ],
  "recommendations": [
    "SLA на патчинг критичных публичных уязвимостей — 48 часов, иначе компенсирующие меры.",
    "Регламент верификации звонков в helpdesk (сброс MFA/пароля только с проверкой личности).",
    "Аудит OAuth-приложений и выданных согласий в облачных тенантах.",
    "Мониторинг идентичностей (ITDR) наравне с конечными точками."
  ],
  "why_it_matters": "Цифра «48 часов от PoC до атаки» — веский аргумент для пересмотра SLA по уязвимостям.",
  "source_note": "Выжимка по обзорам отчёта (eSecurity Planet, CRN Asia, Security MEA). Точная ссылка на страницу отчёта — уточните на сайте CrowdStrike.",
  "en": {
    "tldr": "'The year of the evasive adversary': AI-enabled attacks up 89%, 88% of exploitation begins within 48 hours of PoC publication, cloud eCrime up 171%.",
    "summary": "The Falcon OverWatch team's annual report presented at Black Hat 2026. Attackers are exploiting vulnerabilities faster, using AI, targeting software supply chains (especially developer tools and AI ecosystems) and shifting towards identity and cloud attacks. Vishing, OAuth abuse and trusted accounts shorten the time to enterprise compromise.",
    "key_findings": [
      "AI-enabled cyber threats up 89%: AI accelerates exploitation and phishing.",
      "88% of observed vulnerability attacks began within 48 hours of PoC publication.",
      "Cloud cybercrime up 171% — targeting credentials and financial assets.",
      "Vishing, OAuth abuse and trusted identities speed up compromise.",
      "Supply-chain attacks increasingly target developer tools and AI ecosystems."
    ],
    "stats": [
      {
        "value": "+89%",
        "label": "AI-enabled attacks"
      },
      {
        "value": "88%",
        "label": "exploited within 48 h of PoC"
      },
      {
        "value": "+171%",
        "label": "cloud eCrime"
      }
    ],
    "recommendations": [
      "A 48-hour SLA for patching critical public vulnerabilities, otherwise compensating controls.",
      "A helpdesk call verification procedure (MFA/password reset only after identity check).",
      "Audit OAuth apps and granted consents in cloud tenants.",
      "Monitor identities (ITDR) on a par with endpoints."
    ],
    "why_it_matters": "The '48 hours from PoC to attack' figure is a strong argument for revisiting vulnerability SLAs.",
    "source_note": "Summary based on coverage of the report (eSecurity Planet, CRN Asia, Security MEA). Check the CrowdStrike website for the exact report page."
  }
});
