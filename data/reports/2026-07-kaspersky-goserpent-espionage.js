RDB.add({
  "id": "2026-07-kaspersky-goserpent-espionage",
  "vendor": "kaspersky-great",
  "title": "Kaspersky uncovers a patient cyber-espionage campaign using new GoSerpent malware to harvest diplomatic secrets",
  "title_ru": "GoSerpent: долгосрочный кибершпионаж за дипломатами Юго-Восточной Азии",
  "url": "https://www.kaspersky.com/about/press-releases/kaspersky-uncovers-a-patient-cyber-espionage-campaign-using-new-goserpent-malware-to-harvest-diplomatic-secrets",
  "pdf_url": "",
  "published": "2026-07-16",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "apt",
  "lang": "en",
  "importance": 2,
  "tags": [
    "APT",
    "шпионаж",
    "дипломатия",
    "Go",
    "RAT"
  ],
  "sectors": [
    "Госсектор",
    "Дипломатия"
  ],
  "regions": [
    "Юго-Восточная Азия"
  ],
  "tldr": "GReAT описала кампанию с новым RAT на Go — GoSerpent — против госорганов и дипломатов Юго-Восточной Азии. Цель — долгосрочный доступ и сбор разведданных; возможна связь с TetrisPhantom.",
  "summary": "GoSerpent маскируется под системные файлы (lass.exe, updates.exe), в новой версии шифрует конфигурацию и связь с C2. Бэкдор разворачивает Mimikatz и QuarksDumpLocalHash для кражи учётных данных и поднимает SOCKS5-прокси. Активность обнаружена в феврале 2026, атаки шли с конца 2025 года.",
  "key_findings": [
    "Новый RAT GoSerpent на Go против госорганов и дипломатов.",
    "Маскировка под системные файлы, шифрование конфигурации и C2.",
    "Кража учётных данных: Mimikatz, QuarksDumpLocalHash.",
    "SOCKS5-прокси через заражённые хосты.",
    "Предполагаемая связь с TetrisPhantom."
  ],
  "stats": [],
  "actors": [
    "TetrisPhantom"
  ],
  "malware": [
    "GoSerpent",
    "Mimikatz",
    "QuarksDumpLocalHash"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1036.005",
      "name": "Match Legitimate Name or Location"
    },
    {
      "id": "T1003",
      "name": "OS Credential Dumping"
    },
    {
      "id": "T1090",
      "name": "Proxy"
    }
  ],
  "recommendations": [
    "Искать процессы с именами, похожими на системные (lass.exe), вне штатных путей.",
    "Детектировать дамп учётных данных и запуск SOCKS-прокси на рабочих станциях."
  ],
  "why_it_matters": "Пример терпеливого шпионажа против дипломатии с собственным инструментарием.",
  "source_note": "Выжимка по пресс-релизу Kaspersky и обзорам (The Hacker News, Cybernews)."
});
