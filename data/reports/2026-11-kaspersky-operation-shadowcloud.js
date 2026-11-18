RDB.add({
  "id": "2026-11-kaspersky-operation-shadowcloud",
  "vendor": "kaspersky-great",
  "title": "Operation ShadowCloud: cloud service–based backdoors targeting government networks in Asia and Africa (Parts 1–2)",
  "title_ru": "Операция ShadowCloud: бэкдоры GitDoor и GraphDoor управляются через GitHub, SharePoint и Ably и атакуют госсети Азии и Африки",
  "url": "https://securelist.com/operation-shadowcloud-gitdoor/122004/",
  "pdf_url": "",
  "published": "2026-11-17",
  "date_precision": "day",
  "added": "2026-11-18",
  "type": "apt",
  "lang": "en",
  "importance": 3,
  "tier": "case",
  "tags": [
    "APT",
    "облачные сервисы как C2",
    "бэкдор",
    "DLL sideloading",
    "GitHub",
    "SharePoint"
  ],
  "sectors": [
    "Госсектор"
  ],
  "regions": [
    "Азия",
    "Африка"
  ],
  "tldr": "Kaspersky GReAT описала операцию ShadowCloud против преимущественно государственных организаций Азии и Африки: бэкдоры GitDoor и GraphDoor получают команды и плагины через GitHub, Microsoft SharePoint/Graph API и сервис сообщений Ably, маскируя трафик под легитимные облачные API. Деятельность пересекается с китайскоязычными группами FamousSparrow и CopperTurtle.",
  "summary": "Кампания выявлена в начале 2026 г.; инфраструктура (9 аккаунтов GitHub, созданных с 3 сентября 2024 по 5 декабря 2025 г.) готовилась как минимум с конца 2024 г. Первичный вектор неизвестен — вероятно, повторно использовано уже существовавшее заражение; в сети жертв найден агент удалённого доступа MeshCentral, через который атакующие доставляли легитимный исполняемый файл, вредоносную DLL для подгрузки (sideloading) и зашифрованную полезную нагрузку. GitDoor (часть 1) читает команды из публичного репозитория GitHub, выгружает результаты в приватный, отслеживает сессии через issues и использует Ably; модули выполняют внедрение в процессы, сбор учётных данных (Mimikatz, CookieKatz, извлечение ключа WhatsApp), PetitPotam, обратную оболочку, кейлоггинг и выгрузку на upload.gofile.io. GraphDoor (часть 2) получает токен Graph API по OAuth client credentials, выкладывает данные жертвы как файл main.<код>.js.map, берёт команды из списка SharePoint и подгружает плагины: кейлоггер, скриншоты, перечисление процессов, перенос бэкдора, обратный прокси на базе Erfrp и туннели через Ably. Однозначной атрибуции нет: импланты FamousSparrow и CopperTurtle (PLEAD) размещались в тех же каталогах в пределах суток.",
  "key_findings": [
    "Управление полностью через легитимные облачные платформы (GitHub, SharePoint/Graph API, Ably) — без жёстко заданного C2-домена; адрес прокси приходит через плагин или канал Ably.",
    "GitDoor несёт широкий набор модулей: 4 способа внедрения в процессы, Mimikatz, CookieKatz, извлечение ключа расшифровки WhatsApp, PetitPotam, обратную оболочку WinPTY.",
    "GraphDoor маскирует выгрузку под файлы source map (main.<код>.js.map) и вызывает API через векторный обработчик исключений.",
    "В сети одной из организаций на Тайване найдены 2 экземпляра агента MeshCentral, через которые шла доставка загрузчиков.",
    "Импланты FamousSparrow (6 марта 2026 г.) и CopperTurtle (3–4 мая 2026 г.) лежали в тех же каталогах, что и GitDoor, — это указывает, но не доказывает связь с китайскоязычными группами.",
    "Опубликованы индикаторы: 22 IP-адреса прокси-серверов C2, 2 сайта SharePoint, аккаунты GitHub и хеши."
  ],
  "stats": [
    {
      "value": "9",
      "label": "аккаунтов GitHub в инфраструктуре"
    },
    {
      "value": "22",
      "label": "IP-адреса прокси-серверов C2"
    },
    {
      "value": "7",
      "label": "плагинов GraphDoor"
    },
    {
      "value": "с конца 2024",
      "label": "подготовка инфраструктуры"
    }
  ],
  "actors": [
    "FamousSparrow",
    "CopperTurtle"
  ],
  "malware": [
    "GitDoor",
    "GraphDoor",
    "PLEAD",
    "Mimikatz",
    "CookieKatz",
    "MeshCentral Agent"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1102",
      "name": "Web Service"
    },
    {
      "id": "T1574.002",
      "name": "Hijack Execution Flow: DLL Side-Loading"
    },
    {
      "id": "T1219",
      "name": "Remote Access Software"
    },
    {
      "id": "T1003.001",
      "name": "OS Credential Dumping: LSASS Memory"
    },
    {
      "id": "T1539",
      "name": "Steal Web Session Cookie"
    },
    {
      "id": "T1056.001",
      "name": "Input Capture: Keylogging"
    },
    {
      "id": "T1090",
      "name": "Proxy"
    },
    {
      "id": "T1567",
      "name": "Exfiltration Over Web Service"
    }
  ],
  "recommendations": [
    "Считать подозрительным любое неучтённое ПО удалённого доступа (в том числе MeshCentral) и выяснять, как оно попало в сеть.",
    "Отслеживать обращения хостов к API GitHub, Graph API/SharePoint и Ably из процессов, которым это не нужно, и регистрации неизвестных OAuth-приложений в тенанте.",
    "Искать подгрузку DLL легитимными исполняемыми файлами из нетипичных каталогов (Sandboxie, javaw.exe, zoomit.exe и др.).",
    "Проверить инфраструктуру по опубликованным индикаторам компрометации."
  ],
  "why_it_matters": "Использование доверенных облачных сервисов как каналов управления делает трафик шпионских бэкдоров почти неотличимым от обычной работы организации; сетевые блокировки по доменам здесь не помогают.",
  "source_note": "Выжимка по первоисточнику — двум частям исследования Kaspersky GReAT на Securelist от 17.11.2026 (часть 1 — GitDoor, часть 2 — GraphDoor и атрибуция: https://securelist.com/operation-shadowcloud-graphdoor/122005/). Число пострадавших организаций не раскрывается.",
  "en": {
    "tldr": "Kaspersky GReAT described Operation ShadowCloud against mostly government organisations in Asia and Africa: the GitDoor and GraphDoor backdoors receive commands and plug-ins via GitHub, Microsoft SharePoint/Graph API and the Ably messaging service, disguising traffic as legitimate cloud API use. The activity overlaps with the Chinese-speaking groups FamousSparrow and CopperTurtle.",
    "summary": "The campaign was identified in early 2026; the infrastructure (9 GitHub accounts created between 3 September 2024 and 5 December 2025) was prepared since at least late 2024. The initial vector is unknown — likely reuse of a prior infection; a MeshCentral remote access agent found in victim networks was used to deliver a legitimate executable, a malicious sideloaded DLL and an encrypted payload. GitDoor (Part 1) reads commands from a public GitHub repository, uploads results to a private one, tracks sessions via issues and uses Ably; its modules perform process injection, credential theft (Mimikatz, CookieKatz, WhatsApp key extraction), PetitPotam, a reverse shell, keylogging and uploads to upload.gofile.io. GraphDoor (Part 2) obtains a Graph API token via OAuth client credentials, uploads victim data as a main.<code>.js.map file, pulls commands from a SharePoint list and loads plug-ins: keylogger, screenshots, process listing, backdoor relocation, an Erfrp-based reverse proxy and Ably tunnels. There is no definitive attribution: FamousSparrow and CopperTurtle (PLEAD) implants were staged in the same directories within a day.",
    "key_findings": [
      "Command and control runs entirely through legitimate cloud platforms (GitHub, SharePoint/Graph API, Ably) with no hard-coded C2 domain; the proxy address arrives via a plug-in or an Ably channel.",
      "GitDoor carries a broad module set: 4 process injection methods, Mimikatz, CookieKatz, a WhatsApp decryption key extractor, PetitPotam and a WinPTY reverse shell.",
      "GraphDoor disguises staged data as source map files (main.<code>.js.map) and calls APIs through a vectored exception handler.",
      "Two MeshCentral agent instances used to deliver the loaders were found in an organisation in Taiwan.",
      "FamousSparrow (6 March 2026) and CopperTurtle (3-4 May 2026) implants sat in the same directories as GitDoor, suggesting but not proving a link to Chinese-speaking groups.",
      "Indicators published: 22 C2 proxy IP addresses, 2 SharePoint sites, GitHub accounts and hashes."
    ],
    "stats": [
      {
        "value": "9",
        "label": "GitHub accounts in the infrastructure"
      },
      {
        "value": "22",
        "label": "C2 proxy IP addresses"
      },
      {
        "value": "7",
        "label": "GraphDoor plug-ins"
      },
      {
        "value": "since late 2024",
        "label": "infrastructure preparation"
      }
    ],
    "recommendations": [
      "Treat any unaccounted-for remote access software (including MeshCentral) as suspicious and establish how it got into the network.",
      "Monitor host access to the GitHub, Graph API/SharePoint and Ably APIs from processes that do not need it, and registrations of unknown OAuth apps in the tenant.",
      "Hunt for DLL sideloading by legitimate executables from unusual directories (Sandboxie, javaw.exe, zoomit.exe, etc.).",
      "Check infrastructure against the published indicators of compromise."
    ],
    "why_it_matters": "Using trusted cloud services as C2 channels makes espionage backdoor traffic almost indistinguishable from normal business activity; domain-based network blocking does not help here.",
    "source_note": "Summary based on the primary source — the two-part Kaspersky GReAT research on Securelist of 17 Nov 2026 (Part 1 — GitDoor, Part 2 — GraphDoor and attribution: https://securelist.com/operation-shadowcloud-graphdoor/122005/). The number of victim organisations is not disclosed."
  }
});
