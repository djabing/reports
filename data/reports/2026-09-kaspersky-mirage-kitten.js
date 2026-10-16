RDB.add({
  "id": "2026-09-kaspersky-mirage-kitten",
  "vendor": "kaspersky",
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
  "tags": ["APT", "Иран", "LinkedIn", "кроссплатформенный RAT", "Node.js"],
  "sectors": ["Авиация", "Финтех"],
  "regions": ["Египет", "Эфиопия", "Афганистан", "Ближний Восток", "Африка"],
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
    { "value": "3", "label": "новых семейства ВПО" },
    { "value": "3", "label": "страны-цели" }
  ],
  "actors": ["Mirage Kitten"],
  "malware": ["NodeRabbit", "PollCat", "NightLedger"],
  "cves": [],
  "ttps": [
    { "id": "T1566.003", "name": "Spearphishing via Service" },
    { "id": "T1204.002", "name": "Malicious File" },
    { "id": "T1059.007", "name": "JavaScript" }
  ],
  "recommendations": [
    "Запретить запуск «тестовых заданий» от рекрутеров на рабочих машинах; использовать песочницы.",
    "Мониторить запуск node.exe и скриптов из пользовательских каталогов.",
    "Повысить осведомлённость разработчиков о job-lure атаках."
  ],
  "why_it_matters": "Третий за год отчёт (вместе с Unit 42 о Screening Serpens) о том, как иранские APT ловят инженеров на фейковые вакансии.",
  "source_note": "Выжимка по пресс-релизу Kaspersky и обзорам (Security Affairs, Ampcus Cyber)."
});
