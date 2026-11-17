RDB.add({
  "id": "2026-06-kaspersky-the-gentlemen-raas",
  "vendor": "kaspersky-great",
  "title": "Not too gentle: Kaspersky warns of The Gentlemen ransomware group expanding operations with new malware",
  "title_ru": "The Gentlemen: группа вымогателей расширяет арсенал собственным ВПО",
  "url": "https://securelist.com/the-gentlemen-raas/120447/",
  "pdf_url": "",
  "published": "2026-06-30",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "ransomware",
  "lang": "en",
  "importance": 2,
  "tier": "case",
  "tags": [
    "вымогатели",
    "RaaS",
    "Go",
    "EDR",
    "периметр"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "GReAT: The Gentlemen за день до шифрования разворачивает новый бэкдор на Go, использует новый вариант шифровальщика на C и инструменты Windows Kernel Explorer и OpenArk64 для отключения защиты. Группа — в топ-10 по числу жертв на DLS в I полугодии 2026.",
  "summary": "Аффилиаты получают доступ через открытые в интернет VPN и межсетевые экраны, а также по украденным или слабым учётным данным, вероятно, через брокеров первичного доступа. Группа строит собственный инструментарий вместо готовых решений.",
  "key_findings": [
    "Новый бэкдор на Go разворачивается за день до шифрования.",
    "Новый вариант шифровальщика на C, ориентирован на Windows.",
    "Отключение защиты через Windows Kernel Explorer и OpenArk64.",
    "Первичный доступ — VPN, межсетевые экраны, слабые учётные данные.",
    "Топ-10 групп по числу жертв на DLS в I полугодии 2026."
  ],
  "stats": [],
  "actors": [
    "The Gentlemen"
  ],
  "malware": [
    "The Gentlemen ransomware",
    "Windows Kernel Explorer",
    "OpenArk64"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1133",
      "name": "External Remote Services"
    },
    {
      "id": "T1562.001",
      "name": "Disable or Modify Tools"
    },
    {
      "id": "T1486",
      "name": "Data Encrypted for Impact"
    }
  ],
  "recommendations": [
    "Защитить VPN и межсетевые экраны MFA и своевременными обновлениями.",
    "Детектировать запуск инструментов работы с ядром (OpenArk, Kernel Explorer).",
    "Реагировать на появление незнакомого бэкдора как на предвестник шифрования."
  ],
  "why_it_matters": "Одна из самых активных групп вымогателей 2026 года — см. также отчёты ReliaQuest и GuidePoint.",
  "source_note": "Выжимка по Securelist, пресс-релизу Kaspersky и обзорам (Technadu, Dutch IT Channel).",
  "en": {
    "tldr": "GReAT: The Gentlemen deploy a new Go backdoor a day before encryption, use a new C ransomware variant and Windows Kernel Explorer and OpenArk64 to disable defences. The group is in the top 10 by leak-site victims in H1 2026.",
    "summary": "Affiliates gain access through internet-exposed VPNs and firewalls and with stolen or weak credentials, probably via initial access brokers. The group builds its own tooling rather than using off-the-shelf solutions.",
    "key_findings": [
      "New Go backdoor deployed a day before encryption.",
      "New Windows-focused ransomware variant written in C.",
      "Defences disabled with Windows Kernel Explorer and OpenArk64.",
      "Initial access via VPNs, firewalls and weak credentials.",
      "Top 10 groups by leak-site victims in H1 2026."
    ],
    "stats": [],
    "recommendations": [
      "Protect VPNs and firewalls with MFA and timely updates.",
      "Detect execution of kernel tools (OpenArk, Kernel Explorer).",
      "Treat an unfamiliar backdoor as a precursor to encryption."
    ],
    "why_it_matters": "One of the most active ransomware groups of 2026 — see also the ReliaQuest and GuidePoint reports.",
    "source_note": "Summary based on Securelist, the Kaspersky press release and coverage (Technadu, Dutch IT Channel)."
  }
});
