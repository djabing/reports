RDB.add({
  "id": "2026-11-acronis-tru-cyber-pulse-2026",
  "vendor": "acronis",
  "title": "Acronis TRU Cyber Pulse 2026",
  "title_ru": "Acronis TRU Cyber Pulse 2026",
  "url": "https://www.acronis.com/en/resource-center/resource/acronis-tru-cyber-pulse-2026/",
  "pdf_url": "https://staticfiles.acronis.com/downloads/83510d54e2ce6fbd40b1cce906b161ab",
  "published": "2026-11-09",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "landscape",
  "lang": "en",
  "importance": 2,
  "tier": "key",
  "tags": [
    "ИИ-агенты",
    "инфостилеры",
    "MSP",
    "RMM",
    "вымогатели"
  ],
  "sectors": [
    "MSP",
    "МСБ",
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Первый выпуск Acronis TRU: один оператор с 12 ИИ-агентами атаковал цели в 11 странах (BOSSAI). У 63,1% из 1,8 млн конечных точек установлено больше одного средства удалённого доступа, а медианное время установки сторонних патчей — 5,7 дня.",
  "summary": "Сводный отчёт исследовательского подразделения Acronis. ИИ позволяет одиночке действовать с масштабом APT. Идентичность — главный путь внутрь: инфостилеры крадут пароли, токены, cookie и облачные ключи, а также API-ключи ИИ-инструментов и GitHub-токены. Окно патчинга сжимается (кампания Red Heron: публичный эксплойт для Gitea через день после патча). Вымогатели всё чаще бьют по Linux и VMware ESXi и намеренно отключают защиту.",
  "key_findings": [
    "BOSSAI: один оператор координировал 12 ИИ-агентов против целей в 11 странах.",
    "Инфостилеры крадут API-ключи ИИ-инструментов, GitHub-токены и облачные секреты.",
    "Медианное время установки сторонних патчей — 5,7 дня, у худших 10% — более 24,9 дня.",
    "63,1% из 1,8 млн конечных точек имеют дополнительные инструменты удалённого доступа.",
    "Вымогатели нацелены на Linux и ESXi и отключают средства защиты."
  ],
  "stats": [
    {
      "value": "12",
      "label": "ИИ-агентов у одного оператора"
    },
    {
      "value": "11",
      "label": "стран-целей"
    },
    {
      "value": "63,1%",
      "label": "эндпоинтов с лишними RMM"
    },
    {
      "value": "5,7 дня",
      "label": "медиана патчинга"
    }
  ],
  "actors": [
    "BOSSAI",
    "Red Heron"
  ],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1219",
      "name": "Remote Access Software"
    },
    {
      "id": "T1555",
      "name": "Credentials from Password Stores"
    },
    {
      "id": "T1562.001",
      "name": "Disable or Modify Tools"
    }
  ],
  "recommendations": [
    "Инвентаризировать и удалить лишние RMM-инструменты и учётные записи прежних подрядчиков.",
    "Ограничить права ИИ-агентов и защищать их API-ключи как привилегированные секреты.",
    "Мониторить отключение средств защиты и регулярно тестировать восстановление."
  ],
  "why_it_matters": "Полезен MSP и МСБ: показывает, как ИИ и избыточные средства удалённого доступа расширяют поверхность атаки.",
  "source_note": "Выжимка по материалам Acronis и обзорам (ITEuropa, GlobeNewswire).",
  "en": {
    "tldr": "First edition of Acronis TRU: one operator with 12 AI agents attacked targets in 11 countries (BOSSAI). 63.1% of 1.8 million endpoints have more than one remote access tool installed, and the median time to install third-party patches is 5.7 days.",
    "summary": "A summary report by Acronis's research unit. AI lets a lone actor operate at APT scale. Identity is the main way in: infostealers steal passwords, tokens, cookies and cloud keys, as well as AI tool API keys and GitHub tokens. The patching window is shrinking (Red Heron campaign: a public Gitea exploit a day after the patch). Ransomware increasingly targets Linux and VMware ESXi and deliberately disables defences.",
    "key_findings": [
      "BOSSAI: one operator coordinated 12 AI agents against targets in 11 countries.",
      "Infostealers steal AI tool API keys, GitHub tokens and cloud secrets.",
      "Median third-party patch installation time is 5.7 days; the worst 10% take more than 24.9 days.",
      "63.1% of 1.8 million endpoints have additional remote access tools.",
      "Ransomware targets Linux and ESXi and disables security tools."
    ],
    "stats": [
      {
        "value": "12",
        "label": "AI agents run by one operator"
      },
      {
        "value": "11",
        "label": "target countries"
      },
      {
        "value": "63.1%",
        "label": "endpoints with extra RMM"
      },
      {
        "value": "5.7 days",
        "label": "median patching time"
      }
    ],
    "recommendations": [
      "Inventory and remove unnecessary RMM tools and former contractors' accounts.",
      "Restrict AI agent permissions and protect their API keys as privileged secrets.",
      "Monitor for security tools being disabled and test recovery regularly."
    ],
    "why_it_matters": "Useful for MSPs and SMBs: shows how AI and excess remote access tools expand the attack surface.",
    "source_note": "Summary based on Acronis materials and coverage (ITEuropa, GlobeNewswire)."
  }
});
