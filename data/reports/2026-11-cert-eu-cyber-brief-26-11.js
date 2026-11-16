RDB.add({
  "id": "2026-11-cert-eu-cyber-brief-26-11",
  "vendor": "certeu",
  "title": "Cyber Brief 26-11 — October 2026",
  "title_ru": "CERT-EU: ежемесячный киберобзор, октябрь 2026",
  "url": "https://www.cert.europa.eu/publications/threat-intelligence/cb26-11/",
  "pdf_url": "https://www.cert.europa.eu/publications/threat-intelligence/cb26-11/pdf",
  "published": "2026-11-06",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "vulnerabilities",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "tags": [
    "ежемесячный",
    "уязвимости",
    "вымогатели",
    "ЕС",
    "открытые источники"
  ],
  "sectors": [
    "Госсектор",
    "Все отрасли"
  ],
  "regions": [
    "Европа"
  ],
  "tldr": "Ежемесячный обзор CERT-EU по 415 открытым отчётам за октябрь 2026: попытки эксплуатации PAN-OS (CVE-2026-0257) операторами Qilin и Inc., критическая уязвимость в Cisco Secure Email Gateway, PoC для Node.js и Atlassian, цепочка PHP2Shell с уязвимостью ядра Linux.",
  "summary": "Исполнительное резюме CERT-EU для институтов ЕС по открытым источникам. Ключевые темы октября — эксплуатация периметровых устройств вымогателями, публикация PoC для популярных платформ и цепочки повышения привилегий в Linux. В обзоре также упомянуты 0-day в FortiMail и уязвимость GitLab, добавленная в CISA KEV 29 октября (детали подтверждены частично).",
  "key_findings": [
    "Проанализировано 415 открытых отчётов за октябрь 2026.",
    "Qilin и Inc. пытались эксплуатировать PAN-OS CVE-2026-0257.",
    "Критическая уязвимость записи файлов в Cisco Secure Email Gateway (CVE-2026-76519).",
    "PoC для Node.js (Brotli, CVE-2026-111497) и Atlassian (CVE-2026-21589).",
    "Цепочка PHP2Shell с уязвимостью ядра Linux Fragnesia (CVE-2026-46300)."
  ],
  "stats": [
    {
      "value": "415",
      "label": "открытых отчётов"
    },
    {
      "value": "5+",
      "label": "ключевых уязвимостей месяца"
    }
  ],
  "actors": [
    "Qilin",
    "Inc."
  ],
  "malware": [],
  "cves": [
    "CVE-2026-0257",
    "CVE-2026-76519",
    "CVE-2026-111497",
    "CVE-2026-21589",
    "CVE-2026-46300"
  ],
  "ttps": [],
  "recommendations": [
    "Проверить наличие обновлений для PAN-OS, Cisco Secure Email Gateway, Atlassian и Node.js.",
    "Отслеживать попытки эксплуатации периметровых устройств вымогателями."
  ],
  "why_it_matters": "Компактный ежемесячный обзор от CERT институтов ЕС — удобен для еженедельной приоритизации патчей.",
  "source_note": "Выжимка по публикации CERT-EU; часть пунктов подтверждена только фрагментами PDF.",
  "en": {
    "tldr": "CERT-EU's monthly brief based on 415 open-source reports for October 2026: exploitation attempts against PAN-OS (CVE-2026-0257) by Qilin and Inc. operators, a critical flaw in Cisco Secure Email Gateway, PoCs for Node.js and Atlassian, and a PHP2Shell chain with a Linux kernel flaw.",
    "summary": "CERT-EU's executive summary for EU institutions based on open sources. October's key themes: ransomware exploitation of perimeter devices, PoC releases for popular platforms and Linux privilege-escalation chains. The brief also mentions a FortiMail zero-day and a GitLab flaw added to CISA KEV on 29 October (details only partly confirmed).",
    "key_findings": [
      "415 open-source reports analysed for October 2026.",
      "Qilin and Inc. attempted to exploit PAN-OS CVE-2026-0257.",
      "Critical arbitrary file write in Cisco Secure Email Gateway (CVE-2026-76519).",
      "PoCs for Node.js (Brotli, CVE-2026-111497) and Atlassian (CVE-2026-21589).",
      "PHP2Shell chain with the Fragnesia Linux kernel flaw (CVE-2026-46300)."
    ],
    "stats": [
      {
        "value": "415",
        "label": "open-source reports"
      },
      {
        "value": "5+",
        "label": "key vulnerabilities of the month"
      }
    ],
    "recommendations": [
      "Check updates for PAN-OS, Cisco Secure Email Gateway, Atlassian and Node.js.",
      "Monitor ransomware attempts against perimeter devices."
    ],
    "why_it_matters": "A compact monthly brief from the EU institutions' CERT — handy for weekly patch prioritization."
  }
});
