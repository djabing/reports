RDB.add({
  "id": "2026-11-kaspersky-auditteam-opsagent",
  "vendor": "kaspersky-great",
  "title": "The forced audit: how AuditTeam's OpsAgent framework masks ransomware as consulting",
  "title_ru": "«Принудительный аудит»: группа AuditTeam с фреймворком OpsAgent выдаёт вымогательство за консалтинг",
  "url": "https://securelist.com/auditteam-opsagent-forced-audit/122031/",
  "pdf_url": "",
  "published": "2026-11-18",
  "date_precision": "day",
  "added": "2026-11-19",
  "type": "ransomware",
  "lang": "en",
  "importance": 2,
  "tier": "case",
  "tags": [
    "вымогатели",
    "шифровальщики",
    "бэкдор",
    "новая группа",
    "ИИ"
  ],
  "sectors": [
    "Кросс-отраслевой",
    "Промышленность"
  ],
  "regions": [
    "Россия",
    "Китай",
    "Азия",
    "Африка",
    "Европа"
  ],
  "tldr": "Kaspersky GReAT описала группу AuditTeam, которая с января по октябрь 2026 г. заразила десятки организаций минимум в семи странах и территориях, включая Россию, и требует выкуп как «плату за аудит и консалтинг» в обмен на отчёт об уязвимостях. Инструмент — ранее неизвестный модульный фреймворк OpsAgent, вероятно написанный с помощью LLM.",
  "summary": "Кампания началась в январе 2026 г. (по истории коммитов GitHub) и продолжалась как минимум до октября; Kaspersky впервые зафиксировала активность в марте 2026 г. на организации в Гонконге. Заражения подтверждены в Китае, на Филиппинах, в Сенегале, Италии, Финляндии, Гонконге и России; на сайте утечек группа заявляет жертв ещё в семи странах. OpsAgent (C++, версия 5.2.8, позже переписан на Rust как OpsAgent-rs) по архитектуре похож на инструменты для пентеста: инъекции в процессы, кража токенов, Mimikatz и pass-the-hash через именованные каналы, кейлоггер, скриншоты, SOCKS-прокси и связки по SMB/HTTP/TCP. Модуль-«убийца» AV/EDR использует драйвер под видом антивируса Jiangmin и список из примерно 220 процессов, модуль шифрования — AES-CBC или ChaCha20 с обменом ключами X25519. Адрес C2 загружался в зашифрованном виде из репозитория GitHub, а серверы скрывались за поддоменами AWS CloudFront. Выкуп называется Audit & Consulting fee; при неоплате группа грозит опубликовать украденный архив.",
  "key_findings": [
    "AuditTeam подаёт вымогательство как платный аудит безопасности: выкуп — «плата за аудит и консалтинг», взамен обещан отчёт об уязвимостях.",
    "Подтверждённые жертвы — в 7 странах и территориях (в т. ч. Россия, Китай, Италия, Финляндия, Сенегал); все из разных отраслей.",
    "Загрузчики сменились с C (апрель) на .NET (июнь) и Rust (сентябрь 2026 г.), а сам имплант переписан на Rust — группа развивает инструментарий.",
    "Для отключения защиты используется уязвимый подписанный драйвер, замаскированный под антивирус Jiangmin, со списком около 220 процессов.",
    "Фронтинг через CloudFront затрудняет блокировку по IP; удаление репозитория GitHub нарушило цепочку, но кампания продолжается.",
    "По оценке экспертов, ИИ-помощь в разработке снизила порог создания многомодульных имплантов и затрудняет атрибуцию."
  ],
  "stats": [
    {
      "value": "7",
      "label": "стран и территорий с подтверждёнными заражениями"
    },
    {
      "value": "~220",
      "label": "процессов защитных решений в списке на завершение"
    },
    {
      "value": "янв.–окт. 2026",
      "label": "период активности кампании"
    }
  ],
  "actors": [
    "AuditTeam"
  ],
  "malware": [
    "OpsAgent",
    "OpsAgent-rs",
    "Mimikatz"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1486",
      "name": "Data Encrypted for Impact"
    },
    {
      "id": "T1562.001",
      "name": "Impair Defenses: Disable or Modify Tools"
    },
    {
      "id": "T1055",
      "name": "Process Injection"
    },
    {
      "id": "T1550.002",
      "name": "Use Alternate Authentication Material: Pass the Hash"
    },
    {
      "id": "T1102.001",
      "name": "Web Service: Dead Drop Resolver"
    },
    {
      "id": "T1490",
      "name": "Inhibit System Recovery"
    }
  ],
  "recommendations": [
    "Проверить инфраструктуру по индикаторам из отчёта (домены CloudFront, IP, хеши, репозиторий GitHub).",
    "Контролировать загрузку уязвимых подписанных драйверов и попытки завершения процессов защитных решений.",
    "Использовать EDR и средства обнаружения целевых атак, следить за инъекциями в msiexec.exe и notepad.exe.",
    "Своевременно обновлять ОС и ПО и обучать сотрудников основам кибербезопасности."
  ],
  "why_it_matters": "Новая модель вымогательства под видом «аудита» и быстрое обновление инструментов с помощью ИИ показывают, как растёт число новых семейств ВПО; Россия входит в число пострадавших стран.",
  "source_note": "Выжимка по первоисточнику — исследованию Kaspersky GReAT на Securelist от 18.11.2026 — и пресс-релизу «Лаборатории Касперского» от того же дня. Суммы выкупа не раскрываются.",
  "en": {
    "tldr": "Kaspersky GReAT has described the AuditTeam group, which between January and October 2026 infected dozens of organisations in at least seven countries and territories, including Russia, and demands ransom as an 'audit and consulting fee' in exchange for a vulnerability report. Its tool is a previously unknown modular framework, OpsAgent, likely written with LLM help.",
    "summary": "The campaign began in January 2026 (per GitHub commit history) and ran at least until October; Kaspersky first saw the activity in March 2026 at an organisation in Hong Kong. Infections were confirmed in China, the Philippines, Senegal, Italy, Finland, Hong Kong and Russia; on its leak site the group claims victims in seven more countries. OpsAgent (C++, version 5.2.8, later rewritten in Rust as OpsAgent-rs) resembles penetration testing tools: process injection, token theft, Mimikatz and pass-the-hash via named pipes, keylogging, screenshots, a SOCKS proxy and SMB/HTTP/TCP links. An AV/EDR killer module uses a driver disguised as Jiangmin antivirus and a list of about 220 processes, and the cryptor module uses AES-CBC or ChaCha20 with X25519 key exchange. The C2 address was fetched in encrypted form from a GitHub repository, and servers were hidden behind AWS CloudFront subdomains. The ransom is called an Audit & Consulting fee; if unpaid, the group threatens to publish the stolen archive.",
    "key_findings": [
      "AuditTeam frames extortion as a paid security audit: the ransom is an 'audit and consulting fee' and a vulnerability report is promised in return.",
      "Confirmed victims are in 7 countries and territories (incl. Russia, China, Italy, Finland, Senegal), all from different industries.",
      "Loaders moved from C (April) to .NET (June) and Rust (September 2026), and the implant itself was rewritten in Rust — the group keeps investing in tooling.",
      "Defences are disabled with a vulnerable signed driver disguised as Jiangmin antivirus and a kill list of about 220 processes.",
      "CloudFront fronting makes IP blocking impractical; removal of the GitHub repository broke the chain, but the campaign continues.",
      "Experts believe AI-assisted development lowered the bar for building multi-module implants and complicates attribution."
    ],
    "stats": [
      {
        "value": "7",
        "label": "countries and territories with confirmed infections"
      },
      {
        "value": "~220",
        "label": "security product processes on the kill list"
      },
      {
        "value": "Jan–Oct 2026",
        "label": "campaign activity period"
      }
    ],
    "recommendations": [
      "Check infrastructure against the report's indicators (CloudFront domains, IP, hashes, GitHub repository).",
      "Monitor loading of vulnerable signed drivers and attempts to terminate security product processes.",
      "Use EDR and targeted attack detection, and watch for injection into msiexec.exe and notepad.exe.",
      "Keep OS and software up to date and train staff in cybersecurity basics."
    ],
    "why_it_matters": "A new extortion model disguised as an 'audit' and rapid AI-assisted tool updates show how the number of new malware families is growing; Russia is among the affected countries.",
    "source_note": "Summary based on the primary source — Kaspersky GReAT research on Securelist of 18 Nov 2026 — and Kaspersky's press release of the same day. Ransom amounts are not disclosed."
  }
});
