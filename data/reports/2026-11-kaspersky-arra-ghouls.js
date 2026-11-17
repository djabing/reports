RDB.add({
  "id": "2026-11-kaspersky-arra-ghouls",
  "vendor": "kaspersky-securelist",
  "title": "«Лаборатория Касперского» обнаружила новую группу Arra Ghouls, атакующую российские организации",
  "title_ru": "«Лаборатория Касперского» обнаружила новую группу Arra Ghouls, атакующую российские организации",
  "url": "https://www.kaspersky.ru/about/press-releases/laboratoriya-kasperskogo-obnaruzhila-novuyu-gruppu-arra-ghouls-atakuyushuyu-rossijskie-organizacii",
  "pdf_url": "",
  "published": "2026-11-10",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "apt",
  "lang": "ru",
  "importance": 2,
  "tier": "case",
  "tags": [
    "фишинг",
    "RAT",
    "Россия",
    "Беларусь",
    "новая группа"
  ],
  "sectors": [
    "Телеком",
    "Промышленность",
    "ИТ и разработка",
    "Финансы"
  ],
  "regions": [
    "Россия",
    "Беларусь"
  ],
  "tldr": "Ранее неизвестная группа Arra Ghouls с апреля 2026 года переключилась с частных пользователей на организации России и Беларуси: затронуто почти два десятка компаний из телекома, промышленности, ИТ и финансов.",
  "summary": "Сначала группа крала данные частных пользователей стилерами и банковскими троянцами. С апреля 2026 года атакует организации, используя собственные средства доставки, несколько RAT (включая Arra RAT) и открытые фреймворки Havoc, RootRat и Metasploit. Заражение — через фишинговые письма с похожих на реальные доменов (темы о судебных разбирательствах и проверках, вложения RAR) и через вредоносные сайты с файлами-приманками. Arra RAT быстро развивается: от простых команд к расширенным возможностям.",
  "key_findings": [
    "Переход от атак на частных лиц к организациям России и Беларуси с апреля 2026 года.",
    "Почти два десятка затронутых компаний: телеком, промышленность, ИТ, финансы.",
    "Инструменты: Arra RAT и другие RAT, Havoc, RootRat, Metasploit.",
    "Фишинг с доменов-двойников (суды, проверки) и RAR-вложения; вредоносные сайты с приманками.",
    "Arra RAT быстро наращивает функциональность."
  ],
  "stats": [
    {
      "value": "~20",
      "label": "затронутых организаций"
    },
    {
      "value": "4",
      "label": "отрасли-цели"
    }
  ],
  "actors": [
    "Arra Ghouls"
  ],
  "malware": [
    "Arra RAT",
    "Havoc",
    "RootRat",
    "Metasploit"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1566.001",
      "name": "Spearphishing Attachment"
    },
    {
      "id": "T1583.001",
      "name": "Domains"
    },
    {
      "id": "T1204.002",
      "name": "Malicious File"
    }
  ],
  "recommendations": [
    "Фильтровать RAR-вложения в письмах о «судах» и «проверках» с доменов-двойников.",
    "Загрузить IoC из технического отчёта на Securelist.ru.",
    "Обучать сотрудников распознавать письма с поддельных доменов организаций."
  ],
  "why_it_matters": "Новая и быстро развивающаяся группа, нацеленная на российские организации.",
  "source_note": "Выжимка по пресс-релизу «Лаборатории Касперского» от 10.11.2026; подробный технический отчёт — на Securelist.ru.",
  "en": {
    "title": "Kaspersky discovers new group Arra Ghouls attacking Russian organisations",
    "tldr": "The previously unknown Arra Ghouls group switched from individuals to organisations in Russia and Belarus in April 2026: almost twenty companies in telecom, manufacturing, IT and finance were affected.",
    "summary": "The group initially stole individuals' data with stealers and banking trojans. Since April 2026 it has attacked organisations using its own delivery tools, several RATs (including Arra RAT) and the open frameworks Havoc, RootRat and Metasploit. Infection is via phishing emails from lookalike domains (lawsuit and inspection themes, RAR attachments) and malicious sites with decoy files. Arra RAT is evolving quickly: from simple commands to advanced capabilities.",
    "key_findings": [
      "Shift from attacks on individuals to organisations in Russia and Belarus from April 2026.",
      "Almost twenty companies affected: telecom, manufacturing, IT, finance.",
      "Tools: Arra RAT and other RATs, Havoc, RootRat, Metasploit.",
      "Phishing from lookalike domains (courts, inspections) and RAR attachments; malicious sites with lures.",
      "Arra RAT is rapidly adding functionality."
    ],
    "stats": [
      {
        "value": "~20",
        "label": "affected organisations"
      },
      {
        "value": "4",
        "label": "target industries"
      }
    ],
    "recommendations": [
      "Filter RAR attachments in 'court' and 'inspection' emails from lookalike domains.",
      "Load IoCs from the technical report on Securelist.ru.",
      "Train employees to recognise emails from spoofed organisation domains."
    ],
    "why_it_matters": "A new, fast-evolving group targeting Russian organisations.",
    "source_note": "Summary based on Kaspersky's press release of 10 Nov 2026; the detailed technical report is on Securelist.ru."
  }
});
