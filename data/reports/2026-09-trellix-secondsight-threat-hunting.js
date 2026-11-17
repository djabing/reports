RDB.add({
  "id": "2026-09-trellix-secondsight-threat-hunting",
  "vendor": "trellix",
  "title": "SecondSight Threat Hunting Report — September 2026",
  "title_ru": "Отчёт о threat hunting SecondSight — сентябрь 2026",
  "url": "https://www.trellix.com/advanced-research-center/threat-reports/secondsight-threat-hunting-report-september-2026/",
  "pdf_url": "",
  "published": "2026-09",
  "date_precision": "month",
  "added": "2026-10-15",
  "type": "apt",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "tags": [
    "threat hunting",
    "APT28",
    "supply chain",
    "npm",
    "iOS"
  ],
  "sectors": [
    "Госсектор",
    "Оборона",
    "Дипломатия"
  ],
  "regions": [
    "Европа",
    "Юго-Восточная Азия",
    "Южная Азия"
  ],
  "tldr": "Trellix разбирает пять кампаний первого полугодия 2026, построенных на обходе детектирования: многоэтапный фишинг APT28 с эксплойтом CVE-2026-21509 через сутки после раскрытия, iOS-эксплойт-кит DarkSword, атаку на npm-пакет Axios и др.",
  "summary": "Отчёт команды проактивного поиска угроз Trellix показывает пять кампаний и то, как их находили: проверка релевантности TI, сопоставление поведения с известными техниками, оценка экспозиции среды и решение об уведомлении клиентов. Общий знаменатель — злоупотребление доверенной инфраструктурой (в т.ч. скомпрометированными госучётками) и техники обхода классических средств защиты.",
  "key_findings": [
    "APT28: целевой фишинг против госорганов, оборонных и дипломатических организаций Европы; CVE-2026-21509 (обход защиты OLE в Office) применена в течение 24 часов после раскрытия; заблокировано не менее 29 писем в девяти странах Восточной Европы.",
    "Bitter APT: спирфишинг с приманкой на тему чемпионата мира по футболу.",
    "DarkSword: российский эксплойт-кит для iOS, нацеленный на должностных лиц стран, ориентированных на НАТО.",
    "JSCeal: активность против организаций Юго-Восточной Азии.",
    "Массовая атака на цепочку поставок через npm-пакет Axios."
  ],
  "stats": [
    {
      "value": "5",
      "label": "разобранных кампаний"
    },
    {
      "value": "24 ч",
      "label": "от раскрытия CVE до эксплуатации"
    },
    {
      "value": "29+",
      "label": "заблокированных писем APT28"
    },
    {
      "value": "9",
      "label": "стран — цели APT28"
    }
  ],
  "actors": [
    "APT28",
    "Bitter APT"
  ],
  "malware": [
    "DarkSword",
    "JSCeal"
  ],
  "cves": [
    "CVE-2026-21509"
  ],
  "ttps": [
    {
      "id": "T1566.001",
      "name": "Spearphishing Attachment"
    },
    {
      "id": "T1203",
      "name": "Exploitation for Client Execution"
    },
    {
      "id": "T1195.002",
      "name": "Compromise Software Supply Chain"
    },
    {
      "id": "T1078",
      "name": "Valid Accounts"
    }
  ],
  "recommendations": [
    "Сократить окно патчинга Office для критичных CVE до часов, а не недель.",
    "Контролировать зависимости npm: lock-файлы, проверка целостности, мониторинг аномальных версий.",
    "Включить мобильные устройства руководства в программу защиты (MDM, быстрые обновления iOS).",
    "Строить гипотезы для threat hunting на основе свежих TI-отчётов, а не только алертов."
  ],
  "why_it_matters": "Хороший практический пример того, как превращать TI в гипотезы для охоты за угрозами.",
  "source_note": "Выжимка по анонсу отчёта и обзорам (Cyber Magazine, ThreatCluster, CXOToday).",
  "en": {
    "tldr": "Trellix analyses five H1 2026 campaigns built on detection evasion: multi-stage APT28 phishing exploiting CVE-2026-21509 within a day of disclosure, the DarkSword iOS exploit kit, an attack on the Axios npm package and more.",
    "summary": "The Trellix proactive threat hunting team's report presents five campaigns and how they were found: checking TI relevance, matching behaviour to known techniques, assessing environment exposure and deciding whether to notify customers. The common denominator is abuse of trusted infrastructure (including compromised government accounts) and techniques that evade classic defences.",
    "key_findings": [
      "APT28: spear-phishing against government, defence and diplomatic organisations in Europe; CVE-2026-21509 (Office OLE protection bypass) exploited within 24 hours of disclosure; at least 29 emails blocked in nine Eastern European countries.",
      "Bitter APT: spear-phishing with a football World Cup lure.",
      "DarkSword: a Russian iOS exploit kit targeting officials in NATO-aligned countries.",
      "JSCeal: activity against organisations in Southeast Asia.",
      "A mass supply-chain attack via the Axios npm package."
    ],
    "stats": [
      {
        "value": "5",
        "label": "campaigns analysed"
      },
      {
        "value": "24 h",
        "label": "from CVE disclosure to exploitation"
      },
      {
        "value": "29+",
        "label": "APT28 emails blocked"
      },
      {
        "value": "9",
        "label": "countries targeted by APT28"
      }
    ],
    "recommendations": [
      "Shorten the Office patching window for critical CVEs to hours, not weeks.",
      "Control npm dependencies: lock files, integrity checks, monitoring for anomalous versions.",
      "Include executives' mobile devices in the protection programme (MDM, fast iOS updates).",
      "Build threat hunting hypotheses from fresh TI reports, not just alerts."
    ],
    "why_it_matters": "A good practical example of turning TI into threat hunting hypotheses.",
    "source_note": "Summary based on the report announcement and coverage (Cyber Magazine, ThreatCluster, CXOToday)."
  }
});
