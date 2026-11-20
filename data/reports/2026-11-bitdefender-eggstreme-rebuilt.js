RDB.add({
  "id": "2026-11-bitdefender-eggstreme-rebuilt",
  "vendor": "bitdefender",
  "title": "EggStreme Malware: Rebuilt Under Scrutiny",
  "title_ru": "EggStreme: китайская APT-группа перестроила ВПО после разоблачения",
  "url": "https://www.bitdefender.com/en-us/blog/businessinsights/eggstreme-malware-revises-architecture-infrastructure",
  "pdf_url": "",
  "published": "2026-11-18",
  "date_precision": "day",
  "added": "2026-11-20",
  "type": "apt",
  "lang": "en",
  "importance": 2,
  "tier": "case",
  "tags": [
    "кибершпионаж",
    "бесфайловое ВПО",
    "DLL sideloading",
    "инфраструктура",
    "обход обнаружения"
  ],
  "sectors": [
    "Госсектор"
  ],
  "regions": [
    "Филиппины",
    "Тайвань"
  ],
  "tldr": "Bitdefender: после публикации отчёта об EggStreme (сентябрь 2025) предполагаемая китайская APT-группа за несколько недель перестроила бесфайловый фреймворк — сменила шифрование, протокол агента и инфраструктуру, но сохранила прежние методы. Атаки на госорганизации Филиппин продолжаются.",
  "summary": "Обновление исследования Bitdefender о бесфайловом фреймворке EggStreme (EggStremeFuel, Loader, ReflectiveLoader, Agent, Wizard, Keylogger). Через 12 дней после первого отчёта операторы изменили защиту конфигурации EggStremeFuel, ещё через 14 дней — шифрование и формат нагрузки загрузчика (RC4 → RC5 → собственный шифр к 28.10.2025). Агент перешёл на «сырые» TCP-соединения с взаимной TLS-аутентификацией, получил картирование домена Windows и выполнение PowerShell в памяти, появились пассивные сборки без исходящих соединений; кейлоггер из новых сборок исчез. Старые серверы связывал единый удостоверяющий центр 2019 года (32 домена) — после отчёта новых доменов под ним нет, операторы, по-видимому, перешли на отдельные УЦ под кампании. Неизменными остались DLL sideloading, перемещение через файловые ресурсы, исполнение в памяти и mTLS. С высокой уверенностью — продолжение атак на несколько госорганизаций Филиппин, с низкой/средней — на Тайвань. Атрибуция прежняя: предполагаемая китайская APT-группа.",
  "key_findings": [
    "Через 12 дней после отчёта изменена защита конфигурации EggStremeFuel, через 26 дней — шифрование и формат загрузчика.",
    "Шифр загрузчика: RC4 → RC5 (13.10.2025) → собственный шифр (к 28.10.2025).",
    "Агент перешёл на TCP с взаимной TLS, добавлены картирование домена и PowerShell в памяти, появились пассивные сборки; кейлоггер исключён.",
    "Единый УЦ 2019 года связывал 32 домена; после отчёта новых доменов под ним нет — переход к УЦ под каждую кампанию.",
    "Методы не изменились: DLL sideloading, перемещение через общие папки, исполнение в памяти, mTLS.",
    "Цели: госорганизации Филиппин (высокая уверенность), Тайвань (низкая/средняя)."
  ],
  "stats": [
    {
      "value": "12 дней",
      "label": "до первой переделки после отчёта"
    },
    {
      "value": "32",
      "label": "домена под старым УЦ"
    },
    {
      "value": "58",
      "label": "команд у исходного агента"
    }
  ],
  "actors": [],
  "malware": [
    "EggStreme",
    "EggStremeFuel",
    "EggStremeAgent",
    "EggStremeLoader"
  ],
  "cves": [],
  "ttps": [
    "T1574.002",
    "T1021.002",
    "T1620",
    "T1573.002",
    "T1059.001",
    "T1555"
  ],
  "recommendations": [
    "Ограничить встроенные инструменты Windows, не нужные в среде.",
    "Выявлять DLL sideloading по имени и расположению библиотек.",
    "Находить неуправляемые машины, имеющие доступ к рабочим станциям.",
    "Отслеживать появление новых входящих слушателей на рабочих станциях."
  ],
  "why_it_matters": "Показывает, что после публичного разоблачения APT-операторы меняют инструменты, но не тактику: детектирование по поведению переживает переделку ВПО, а сигнатуры — нет.",
  "source_note": "Выжимка по исследованию Bitdefender от 18.11.2026 и публикации Infosecurity Magazine.",
  "en": {
    "tldr": "Bitdefender: after its EggStreme report (September 2025), a suspected Chinese APT group rebuilt the fileless framework within weeks — changing encryption, the agent protocol and infrastructure while keeping the same methods. Attacks on Philippine government bodies continue.",
    "summary": "An update to Bitdefender's research on the EggStreme fileless framework (EggStremeFuel, Loader, ReflectiveLoader, Agent, Wizard, Keylogger). Twelve days after the first report the operators changed EggStremeFuel's configuration protection, and 14 days later the loader's encryption and payload format (RC4 to RC5 to a custom cipher by 28 Oct 2025). The agent moved to raw TCP connections with mutual TLS, gained Windows domain mapping and in-memory PowerShell, and passive builds that never beacon out appeared; the keylogger is missing from newer builds. Older servers were tied together by a single 2019 certificate authority (32 domains); no new domains appeared under it after the report, and operators appear to have moved to campaign-specific CAs. DLL sideloading, movement through file shares, in-memory execution and mTLS stayed constant. High confidence: continued targeting of multiple Philippine government organisations; low to medium confidence: Taiwan. Attribution is unchanged: a suspected Chinese APT group.",
    "key_findings": [
      "12 days after the report, EggStremeFuel configuration protection changed; 26 days after, the loader's encryption and format.",
      "Loader cipher: RC4 to RC5 (13 Oct 2025) to a custom cipher (by 28 Oct 2025).",
      "The agent switched to TCP with mutual TLS, added domain mapping and in-memory PowerShell, and gained passive builds; the keylogger was dropped.",
      "A single 2019 CA linked 32 domains; no new domains under it after the report, suggesting per-campaign CAs.",
      "Methods unchanged: DLL sideloading, movement via file shares, in-memory execution, mTLS.",
      "Targets: Philippine government bodies (high confidence), Taiwan (low to medium)."
    ],
    "stats": [
      {
        "value": "12 days",
        "label": "to the first rework after the report"
      },
      {
        "value": "32",
        "label": "domains under the old CA"
      },
      {
        "value": "58",
        "label": "commands in the original agent"
      }
    ],
    "recommendations": [
      "Restrict built-in Windows tools the environment does not need.",
      "Detect DLL sideloading by library name and location.",
      "Find unmanaged machines that can still reach workstations.",
      "Watch for new inbound listeners on workstations."
    ],
    "why_it_matters": "Shows that once exposed, APT operators change tools but not tactics: behaviour-based detection survives a malware rebuild, signatures do not.",
    "source_note": "Summary based on Bitdefender's research of 18 Nov 2026 and Infosecurity Magazine's coverage."
  }
});
