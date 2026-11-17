RDB.add({
  "id": "2026-11-unit42-quic-rats-sea-governments",
  "vendor": "unit42",
  "title": "QUIC and Covert: Novel HTTP/3-Powered RATs Target Southeast Asian Governments",
  "title_ru": "PerfectPioneer и KUKURAT: новые RAT с управлением по HTTP/3 (QUIC) атакуют правительства Юго-Восточной Азии",
  "url": "https://unit42.paloaltonetworks.com/custom-rats-target-southeast-asia-governments/",
  "pdf_url": "",
  "published": "2026-11-16",
  "date_precision": "day",
  "added": "2026-11-17",
  "type": "apt",
  "lang": "en",
  "importance": 2,
  "tier": "case",
  "tags": [
    "кибершпионаж",
    "QUIC",
    "HTTP/3",
    "RAT",
    "Exchange",
    "госсектор"
  ],
  "sectors": [
    "Госсектор"
  ],
  "regions": [
    "Юго-Восточная Азия"
  ],
  "tldr": "Unit 42 описала два новых трояна удалённого доступа — PerfectPioneer (Go) и KUKURAT (C++) — группировки TGR-STA-0049 (она же REF7707, Earth Alux, Ink Dragon). Оба умеют управляться по HTTP/3 поверх QUIC (UDP/443), что позволяет обходить TLS-инспекцию и средства, анализирующие только TCP.",
  "summary": "Кампания против госорганов Юго-Восточной Азии длится с июля 2025 г.: сначала использовался PerfectPioneer (шесть вариантов), с марта 2026 г. в уже скомпрометированных сетях появился модульный KUKURAT (не менее 12 модулей: перебор учётных данных SMB, SOCKS-туннели, перемещение через PsExec, повышение привилегий, запуск BOF). Первичный доступ — эксплуатация непропатченных Microsoft Exchange и веб-серверов с установкой веб-шеллов, а также фишинг с исполняемыми файлами под видом PDF (например, приманка от имени избирательной комиссии Мьянмы). Для маскировки KUKURAT делает фоновые запросы к популярным сайтам, имитирует активность Chrome и ставит сторожевой процесс в каталог, похожий на путь защитного продукта. Учётные данные добываются дампом LSASS через comsvcs.dll, DCSync и DPAPI; в Exchange злоумышленники выдают себе полный доступ ко всем почтовым ящикам. Похищались документы о международных отношениях и внутренней политике.",
  "key_findings": [
    "Группировка TGR-STA-0049 (REF7707 / Earth Alux / Ink Dragon) активна как минимум с марта 2023 г.; ранее известна по бэкдору Squidoor (FINALDRAFT).",
    "PerfectPioneer использует HTTP/3 поверх QUIC (UDP/443) с откатом на HTTP/2; в нём встроен блок-лист из 41 ключевого слова, 16 шаблонов и 12 защищённых путей, чтобы оператор случайно не «сломал» систему.",
    "KUKURAT с марта 2026 г. приходит на смену PerfectPioneer; сторожевой процесс перезапускает агент, если тот 15 секунд не подаёт признаков жизни, а повторное развёртывание идёт через сценарии входа в домен.",
    "В Exchange атакующие проверяют роль ApplicationImpersonation и массово добавляют себе FullAccess ко всем почтовым ящикам.",
    "Эксфильтрация нацелена на файлы .pdf, .docx, .xlsx и .png с политически чувствительными названиями."
  ],
  "stats": [
    {
      "value": "6",
      "label": "вариантов PerfectPioneer"
    },
    {
      "value": "12+",
      "label": "модулей у KUKURAT"
    },
    {
      "value": "~9 мес.",
      "label": "наблюдаемой эволюции кампании"
    },
    {
      "value": "UDP/443",
      "label": "канал управления по QUIC"
    }
  ],
  "actors": [
    "TGR-STA-0049",
    "REF7707",
    "Earth Alux",
    "Ink Dragon"
  ],
  "malware": [
    "PerfectPioneer",
    "KUKURAT",
    "Squidoor",
    "Godzilla",
    "ASPXSpy",
    "Mimikatz"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    },
    {
      "id": "T1505.003",
      "name": "Server Software Component: Web Shell"
    },
    {
      "id": "T1574.002",
      "name": "Hijack Execution Flow: DLL Side-Loading"
    },
    {
      "id": "T1003.001",
      "name": "OS Credential Dumping: LSASS Memory"
    },
    {
      "id": "T1003.006",
      "name": "OS Credential Dumping: DCSync"
    },
    {
      "id": "T1037.003",
      "name": "Boot or Logon Initialization Scripts: Network Logon Script"
    },
    {
      "id": "T1095",
      "name": "Non-Application Layer Protocol"
    }
  ],
  "recommendations": [
    "Журналировать и инспектировать QUIC либо блокировать исходящий UDP/443, чтобы клиенты откатывались на инспектируемый TCP/HTTP2.",
    "Своевременно обновлять Exchange, регулярно проверять назначения роли ApplicationImpersonation и отслеживать массовые Add-MailboxPermission.",
    "Аудировать SYSVOL и групповые политики на предмет несанкционированных сценариев входа.",
    "Детектировать загрузку comsvcs.dll через rundll32.exe, в том числе по ординалу."
  ],
  "why_it_matters": "Переход вредоносного ПО на QUIC/HTTP3 делает канал управления «невидимым» для многих средств сетевой защиты, рассчитанных на TCP и TLS-инспекцию, — это тренд, который стоит учитывать при настройке периметра.",
  "source_note": "Выжимка по первоисточнику — публикации Unit 42 от 16.11.2026.",
  "en": {
    "tldr": "Unit 42 described two new remote access trojans — PerfectPioneer (Go) and KUKURAT (C++) — from the TGR-STA-0049 group (aka REF7707, Earth Alux, Ink Dragon). Both can be controlled over HTTP/3 via QUIC (UDP/443), which lets them bypass TLS inspection and tools that analyse only TCP.",
    "summary": "The campaign against Southeast Asian government bodies has run since July 2025: first PerfectPioneer was used (six variants), and from March 2026 the modular KUKURAT appeared in already compromised networks (at least 12 modules: SMB credential brute force, SOCKS tunnels, PsExec lateral movement, privilege escalation, BOF execution). Initial access is via exploitation of unpatched Microsoft Exchange and web servers with web shells, as well as phishing with executables disguised as PDFs (e.g. a lure impersonating Myanmar's election commission). For cover, KUKURAT makes background requests to popular sites, imitates Chrome activity and places its watchdog in a directory resembling a security product's path. Credentials are obtained by dumping LSASS via comsvcs.dll, DCSync and DPAPI; in Exchange the attackers grant themselves full access to all mailboxes. Documents on international relations and domestic policy were stolen.",
    "key_findings": [
      "TGR-STA-0049 (REF7707 / Earth Alux / Ink Dragon) has been active since at least March 2023; previously known for the Squidoor (FINALDRAFT) backdoor.",
      "PerfectPioneer uses HTTP/3 over QUIC (UDP/443) with fallback to HTTP/2; it has a built-in blocklist of 41 keywords, 16 patterns and 12 protected paths so the operator does not accidentally 'break' the system.",
      "KUKURAT has replaced PerfectPioneer since March 2026; the watchdog restarts the agent if it shows no signs of life for 15 seconds, and redeployment uses domain logon scripts.",
      "In Exchange the attackers check the ApplicationImpersonation role and mass-add FullAccess to all mailboxes for themselves.",
      "Exfiltration targets .pdf, .docx, .xlsx and .png files with politically sensitive names."
    ],
    "stats": [
      {
        "value": "6",
        "label": "PerfectPioneer variants"
      },
      {
        "value": "12+",
        "label": "KUKURAT modules"
      },
      {
        "value": "~9 mo.",
        "label": "of observed campaign evolution"
      },
      {
        "value": "UDP/443",
        "label": "QUIC command channel"
      }
    ],
    "recommendations": [
      "Log and inspect QUIC or block outbound UDP/443 so clients fall back to inspectable TCP/HTTP2.",
      "Update Exchange promptly, regularly review ApplicationImpersonation role assignments and watch for mass Add-MailboxPermission.",
      "Audit SYSVOL and group policies for unauthorised logon scripts.",
      "Detect loading of comsvcs.dll via rundll32.exe, including by ordinal."
    ],
    "why_it_matters": "Malware moving to QUIC/HTTP3 makes the command channel 'invisible' to many network security tools built for TCP and TLS inspection — a trend to factor into perimeter configuration.",
    "source_note": "Summary based on the primary source — Unit 42 post of 16 Nov 2026."
  }
});
