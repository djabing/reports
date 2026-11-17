RDB.add({
  "id": "2026-11-unit42-falcon-c2-browser",
  "vendor": "unit42",
  "title": "The XG Files: Falcon C2 Flying Under The (Browser) Radar",
  "title_ru": "Falcon C2: шпионский фреймворк, работающий внутри браузера жертвы",
  "url": "https://unit42.paloaltonetworks.com/falcon-c2-browser-compromise/",
  "pdf_url": "",
  "published": "2026-11-11",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "apt",
  "lang": "en",
  "importance": 2,
  "tier": "case",
  "tags": [
    "кибершпионаж",
    "браузер",
    "вредоносные расширения",
    "веб-почта",
    "госсектор"
  ],
  "sectors": [
    "Госсектор",
    "Правоохранительные органы",
    "Оборона",
    "Телеком"
  ],
  "regions": [
    "Ближний Восток",
    "Юго-Восточная Азия"
  ],
  "tldr": "Unit 42 разобрала Falcon (XG) — C2-фреймворк на Node.js, который заражает жертв через JavaScript в браузере. В марте–мае 2026 г. им были скомпрометированы госструктуры одной ближневосточной и четырёх стран Юго-Восточной Азии: МИД, оборона, полиция, юстиция, телеком.",
  "summary": "Falcon выдаёт каждой сессии уникальный обфусцированный имплант, общается с C2 по WebSocket с шифрованием RSA-2048/AES-256 и прячет панель управления. Unit 42 с высокой уверенностью считает его вариантом фреймворка PeckBirdy, описанного Trend Micro в январе 2026 г. Три сценария: внедрение скрипта в шаблон Roundcube МИД ближневосточной страны для кражи паролей (39 заражённых экземпляров); поддельное обновление Adobe Flash на сайте полиции с доставкой Rust-импланта Antino, использующего OneDrive как канал управления; вредоносное расширение Chrome «PDF Viewer» с 40 разрешениями, установленное в режиме разработчика и державшее связь более трёх недель. Код, вероятно, написан с помощью ИИ.",
  "key_findings": [
    "Скомпрометированы госорганы одной страны Ближнего Востока и четырёх стран Юго-Восточной Азии в марте–мае 2026 г.",
    "В шаблон веб-почты Roundcube внедрялся скрипт для кражи учётных данных при входе — 39 заражённых экземпляров в одной стране.",
    "Расширение «PDF Viewer» запрашивало 40 разрешений: сбор паролей, cookie и истории, проксирование через сессию жертвы, подмена загружаемых файлов и адресов криптокошельков в буфере обмена.",
    "Имплант Antino (Rust) использует OneDrive как C2 и поддерживает 10 команд, включая выполнение PowerShell и передачу файлов.",
    "Falcon и PeckBirdy — варианты одного фреймворка (оценка Unit 42 с высокой уверенностью)."
  ],
  "stats": [
    {
      "value": "5",
      "label": "стран с атакованными госорганами"
    },
    {
      "value": "39",
      "label": "заражённых экземпляров Roundcube"
    },
    {
      "value": "40",
      "label": "разрешений у вредоносного расширения"
    },
    {
      "value": "3+ нед.",
      "label": "непрерывной связи расширения с C2"
    }
  ],
  "actors": [],
  "malware": [
    "Falcon (XG)",
    "PeckBirdy",
    "Antino"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1189",
      "name": "Drive-by Compromise"
    },
    {
      "id": "T1176",
      "name": "Browser Extensions"
    },
    {
      "id": "T1056.003",
      "name": "Input Capture: Web Portal Capture"
    },
    {
      "id": "T1102",
      "name": "Web Service"
    },
    {
      "id": "T1115",
      "name": "Clipboard Data"
    },
    {
      "id": "T1539",
      "name": "Steal Web Session Cookie"
    }
  ],
  "recommendations": [
    "Запретить установку расширений в режиме разработчика и проверять расширения с широкими правами (<all_urls>, debugger, webRequest).",
    "Контролировать целостность шаблонов веб-почты и других веб-приложений: искать скрипты с незнакомых доменов.",
    "Искать cookie и ключи хранилища вида Hm_lvt_ на сайтах, где нет Baidu Analytics.",
    "Отслеживать OAuth-обращения к чужим тенантам OneDrive и частые мелкие записи JSON-файлов."
  ],
  "why_it_matters": "Браузер становится самостоятельной платформой для шпионажа: вредоносный код живёт в веб-почте и расширениях, а не на диске, и обходит классическую защиту рабочих станций.",
  "source_note": "Выжимка по первоисточнику — публикации Unit 42 от 11.11.2026. Группировка в отчёте не названа.",
  "en": {
    "tldr": "Unit 42 analysed Falcon (XG) — a Node.js C2 framework that infects victims via JavaScript in the browser. In March–May 2026 it was used to compromise government bodies in one Middle Eastern and four Southeast Asian countries: foreign affairs, defence, police, justice, telecom.",
    "summary": "Falcon issues each session a unique obfuscated implant, talks to C2 over WebSocket with RSA-2048/AES-256 encryption and hides its control panel. Unit 42 assesses with high confidence that it is a variant of the PeckBirdy framework described by Trend Micro in January 2026. Three scenarios: script injection into the Roundcube template of a Middle Eastern foreign ministry to steal passwords (39 infected instances); a fake Adobe Flash update on a police website delivering the Rust implant Antino, which uses OneDrive as a C2 channel; and a malicious Chrome extension 'PDF Viewer' with 40 permissions, installed in developer mode, which kept communicating for more than three weeks. The code was probably written with AI help.",
    "key_findings": [
      "Government bodies in one Middle Eastern and four Southeast Asian countries were compromised in March–May 2026.",
      "A script was injected into the Roundcube webmail template to steal credentials at login — 39 infected instances in one country.",
      "The 'PDF Viewer' extension requested 40 permissions: harvesting passwords, cookies and history, proxying through the victim's session, swapping downloaded files and crypto wallet addresses in the clipboard.",
      "The Antino implant (Rust) uses OneDrive as C2 and supports 10 commands, including PowerShell execution and file transfer.",
      "Falcon and PeckBirdy are variants of the same framework (Unit 42 assessment, high confidence)."
    ],
    "stats": [
      {
        "value": "5",
        "label": "countries with attacked government bodies"
      },
      {
        "value": "39",
        "label": "infected Roundcube instances"
      },
      {
        "value": "40",
        "label": "permissions of the malicious extension"
      },
      {
        "value": "3+ weeks",
        "label": "of continuous extension-to-C2 communication"
      }
    ],
    "recommendations": [
      "Prohibit installing extensions in developer mode and review extensions with broad rights (<all_urls>, debugger, webRequest).",
      "Monitor the integrity of webmail and other web application templates: look for scripts from unfamiliar domains.",
      "Look for Hm_lvt_ cookies and storage keys on sites that do not use Baidu Analytics.",
      "Monitor OAuth calls to foreign OneDrive tenants and frequent small JSON file writes."
    ],
    "why_it_matters": "The browser is becoming a standalone espionage platform: malicious code lives in webmail and extensions rather than on disk, and bypasses classic workstation protection.",
    "source_note": "Summary based on the primary source — Unit 42 post of 11 Nov 2026. The report does not name the group."
  }
});
