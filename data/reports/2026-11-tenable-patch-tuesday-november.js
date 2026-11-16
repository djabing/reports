RDB.add({
  "id": "2026-11-tenable-patch-tuesday-november",
  "vendor": "tenable",
  "title": "Microsoft's November 2026 Patch Tuesday Addresses 1,093 CVEs (CVE-2026-124194)",
  "title_ru": "Patch Tuesday ноябрь 2026: 1093 CVE и эксплуатируемая 0-day в Outlook",
  "url": "https://www.tenable.com/blog/microsoft-november-2026-patch-tuesday-addresses-1093-cves-cve-2026-124194",
  "pdf_url": "",
  "published": "2026-11-10",
  "date_precision": "day",
  "added": "2026-11-15",
  "type": "vulnerabilities",
  "lang": "en",
  "importance": 3,
  "tier": "case",
  "tags": [
    "Patch Tuesday",
    "0-day",
    "Outlook",
    "NTLM",
    "CISA KEV"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Второй подряд Patch Tuesday с 1000+ исправлений. Главное — эксплуатируемая 0-day в Outlook (CVE-2026-124194): открытие файла сообщения приводит к утечке NTLMv2-хеша. Исправление приходит через обновление Office, а не Windows Update.",
  "summary": "Microsoft закрыла около 1093 CVE (оценки СМИ расходятся: 1094–1259), из них 63 критические. Единственная эксплуатируемая уязвимость — CVE-2026-124194 в Outlook (CWE-356, CVSS 6.5): одно открытое сообщение заставляет Outlook обратиться к серверу атакующего без предупреждения и передать NTLMv2-хеш. CISA добавила её в KEV 10 ноября со сроком устранения до 24 ноября. По сообщениям СМИ, в обнаружении участвовал исследователь, работавший с Claude.",
  "key_findings": [
    "~1093 CVE, из них 63 критические и 1029 важные.",
    "CVE-2026-124194 (Outlook, спуфинг, CVSS 6.5) эксплуатируется в атаках — утечка NTLMv2-хеша.",
    "Исправление доставляется через механизм обновления Office (KB5132061), а не Windows Update.",
    "CISA KEV: добавлена 10.11.2026, срок устранения — 24.11.2026.",
    "Второй подряд выпуск с более чем 1000 исправлений — эффект массового поиска уязвимостей с ИИ."
  ],
  "stats": [
    {
      "value": "1093",
      "label": "исправленных CVE"
    },
    {
      "value": "63",
      "label": "критических"
    },
    {
      "value": "1",
      "label": "эксплуатируемая 0-day"
    },
    {
      "value": "24.11",
      "label": "дедлайн CISA"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [
    "CVE-2026-124194"
  ],
  "ttps": [
    {
      "id": "T1187",
      "name": "Forced Authentication"
    },
    {
      "id": "T1566.001",
      "name": "Spearphishing Attachment"
    }
  ],
  "recommendations": [
    "Срочно обновить Office/Outlook (KB5132061) — отдельно от Windows Update.",
    "Заблокировать исходящий SMB (TCP 445) и NTLM к внешним адресам.",
    "Добавить пользователей с высокими привилегиями в группу Protected Users и ограничить NTLM.",
    "Пересмотреть процессы патч-менеджмента под объёмы 1000+ CVE в месяц."
  ],
  "why_it_matters": "Объём ежемесячных исправлений вырос на порядок — это практическое следствие ИИ-поиска уязвимостей, к которому нужно адаптировать процессы.",
  "source_note": "Выжимка по блогу Tenable и обзорам Redmondmag, SOCRadar и др.; общее число CVE в источниках различается."
});
