RDB.add({
  "id": "2026-09-kaspersky-mirage-kitten",
  "vendor": "kaspersky-great",
  "title": "Mirage Kitten targets aviation and FinTech in the Middle East and Africa with a new malware set",
  "title_ru": "Mirage Kitten атакует авиацию и финтех Ближнего Востока и Африки новым набором ВПО",
  "url": "https://www.kaspersky.com/about/press-releases/kaspersky-great-uncovers-linkedin-recruitment-phishing-and-new-cross-platform-spyware-targeting-mea-by-mirage-kitten",
  "pdf_url": "",
  "published": "2026-09-01",
  "date_precision": "day",
  "added": "2026-10-16",
  "type": "apt",
  "lang": "en",
  "importance": 2,
  "tier": "case",
  "tags": [
    "APT",
    "Иран",
    "LinkedIn",
    "кроссплатформенный RAT",
    "Node.js"
  ],
  "sectors": [
    "Авиация",
    "Финтех"
  ],
  "regions": [
    "Египет",
    "Эфиопия",
    "Афганистан",
    "Ближний Восток",
    "Африка"
  ],
  "tldr": "Kaspersky GReAT обнаружила кампанию иранской Mirage Kitten с фейковым рекрутингом в LinkedIn и тестовыми заданиями для разработчиков. Новые кроссплатформенные RAT NodeRabbit (Node.js) и PollCat (JavaScript) — первое применение таких языков группой; также бэкдор NightLedger.",
  "summary": "Целевая шпионская кампания против авиационных и финтех-компаний в Египте, Эфиопии и Афганистане. Операторы рассылают в LinkedIn и на других площадках поиска работы «тестовые задания» — троянизированные архивы с кодом. Внутри — ранее не описанные кроссплатформенные трояны удалённого доступа.",
  "key_findings": [
    "Вектор: спирфишинг в LinkedIn и на job-платформах с троянизированными «coding challenge».",
    "NodeRabbit — новый кроссплатформенный RAT на Node.js.",
    "PollCat — новый кроссплатформенный RAT на обфусцированном JavaScript.",
    "Впервые публично задокументировано использование группой ВПО на Node.js и JavaScript.",
    "Дополнительно обнаружен бэкдор NightLedger для шпионских операций в регионе."
  ],
  "stats": [
    {
      "value": "3",
      "label": "новых семейства ВПО"
    },
    {
      "value": "3",
      "label": "страны-цели"
    }
  ],
  "actors": [
    "Mirage Kitten"
  ],
  "malware": [
    "NodeRabbit",
    "PollCat",
    "NightLedger"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1566.003",
      "name": "Spearphishing via Service"
    },
    {
      "id": "T1204.002",
      "name": "Malicious File"
    },
    {
      "id": "T1059.007",
      "name": "JavaScript"
    }
  ],
  "recommendations": [
    "Запретить запуск «тестовых заданий» от рекрутеров на рабочих машинах; использовать песочницы.",
    "Мониторить запуск node.exe и скриптов из пользовательских каталогов.",
    "Повысить осведомлённость разработчиков о job-lure атаках."
  ],
  "why_it_matters": "Третий за год отчёт (вместе с Unit 42 о Screening Serpens) о том, как иранские APT ловят инженеров на фейковые вакансии.",
  "source_note": "Выжимка по пресс-релизу Kaspersky и обзорам (Security Affairs, Ampcus Cyber).",
  "en": {
    "tldr": "Kaspersky GReAT found an Iranian Mirage Kitten campaign using fake LinkedIn recruitment and developer test assignments. New cross-platform RATs NodeRabbit (Node.js) and PollCat (JavaScript) mark the group's first use of these languages; the NightLedger backdoor was also found.",
    "summary": "A targeted espionage campaign against aviation and fintech companies in Egypt, Ethiopia and Afghanistan. Operators send 'test assignments' — trojanised code archives — on LinkedIn and other job platforms. Inside are previously undocumented cross-platform remote access trojans.",
    "key_findings": [
      "Vector: spear phishing on LinkedIn and job platforms with trojanised 'coding challenges'.",
      "NodeRabbit — a new cross-platform RAT in Node.js.",
      "PollCat — a new cross-platform RAT in obfuscated JavaScript.",
      "First publicly documented use of Node.js and JavaScript malware by the group.",
      "The NightLedger backdoor for espionage operations in the region was also found."
    ],
    "stats": [
      {
        "value": "3",
        "label": "new malware families"
      },
      {
        "value": "3",
        "label": "target countries"
      }
    ],
    "recommendations": [
      "Prohibit running recruiters' 'test assignments' on work machines; use sandboxes.",
      "Monitor node.exe and scripts launched from user directories.",
      "Raise developer awareness of job-lure attacks."
    ],
    "why_it_matters": "The third report this year (alongside Unit 42 on Screening Serpens) on Iranian APTs luring engineers with fake jobs.",
    "source_note": "Summary based on the Kaspersky press release and coverage (Security Affairs, Ampcus Cyber)."
  }
});
