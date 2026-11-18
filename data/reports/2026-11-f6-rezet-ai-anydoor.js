RDB.add({
  "id": "2026-11-f6-rezet-ai-anydoor",
  "vendor": "f6",
  "title": "Шпионские связи: F6 изучила ИИ-инструменты группировки Rezet в атаках на Россию и мир",
  "title_ru": "Rezet и панель AnyDoor: кибершпионы автоматизируют фишинговые рассылки с помощью ИИ",
  "url": "https://www.f6.ru/media-center/press-releases/rezet-ai/",
  "pdf_url": "",
  "published": "2026-11-17",
  "date_precision": "day",
  "added": "2026-11-18",
  "type": "apt",
  "lang": "ru",
  "importance": 2,
  "tier": "case",
  "tags": [
    "APT",
    "кибершпионаж",
    "фишинг",
    "ИИ"
  ],
  "sectors": [
    "Промышленность",
    "Логистика",
    "Финансы",
    "Здравоохранение",
    "Ритейл",
    "Наука"
  ],
  "regions": [
    "Россия",
    "Беларусь",
    "Казахстан"
  ],
  "tldr": "F6 сообщила, что группировка Rezet (RareWerewolf, LibrarianGhouls) — самая активная в 2026 г. группа, атакующая компании России, Беларуси и Казахстана, — использует созданную с помощью ИИ панель AnyDoor для сборки ВПО и массовых фишинговых рассылок; одна октябрьская рассылка ушла более чем 4800 адресатам.",
  "summary": "Rezet действует с конца 2018 г., её мотив — кибершпионаж: кража данных и постоянный удалённый доступ к устройствам. Цели — промышленность, логистика, биотехнологии, финансы и страхование, здравоохранение, ритейл и НИИ энергетики. Волна атак зафиксирована в сентябре 2026 г., новые кампании создавались в октябре. Письма с вложениями под видом платёжных документов, актов, коммерческих предложений и договоров содержали EXE-файлы в ZIP-архивах (часть — под паролем) и отправлялись с чередующихся аккаунтов yandex.ru. Панель AnyDoor на C2-сервере собирает вредоносные файлы, ведёт рассылки и даёт доступ к заражённым устройствам; комментарии в коде, стилистика и ошибки в логике скриптов указывают на использование нейросетей, а сами ИИ-инструменты, по оценке F6, находятся в пилотном режиме. Через AnyDoor письма получили более 7000 адресатов, 85% — в зоне .ru; в октябре созданы 4 кампании (три — «беспилотники», одна — «Нефтегаз»). По данным F6, Rezet входит в число как минимум девяти прогосударственных групп, применявших созданные ИИ инструменты.",
  "key_findings": [
    "Через панель AnyDoor письма получили более 7000 адресатов из 25 национальных доменных зон, 85% — в зоне .ru.",
    "Признаки генерации кода ИИ: комментарии, стилистика элементов и логические ошибки в скриптах, ломающие цепочку заражения.",
    "Вложения маскируются под платёжные документы, акты и договоры; архивы частично запаролены.",
    "Rezet — одна из как минимум девяти прогосударственных групп, использовавших ИИ-инструменты, по данным F6."
  ],
  "stats": [
    {
      "value": "7000+",
      "label": "адресатов рассылок через AnyDoor"
    },
    {
      "value": "4800+",
      "label": "адресатов одной октябрьской рассылки"
    },
    {
      "value": "85%",
      "label": "адресатов — в зоне .ru"
    },
    {
      "value": "с 2018",
      "label": "активность группировки"
    }
  ],
  "actors": [
    "Rezet",
    "RareWerewolf",
    "LibrarianGhouls"
  ],
  "malware": [
    "AnyDoor"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1566.001",
      "name": "Phishing: Spearphishing Attachment"
    },
    {
      "id": "T1204.002",
      "name": "User Execution: Malicious File"
    },
    {
      "id": "T1027.013",
      "name": "Obfuscated Files or Information: Encrypted/Encoded File"
    },
    {
      "id": "T1588.007",
      "name": "Obtain Capabilities: Artificial Intelligence"
    }
  ],
  "recommendations": [
    "Проверять вложения с документами в архивах (особенно запароленных) в песочнице до доставки пользователю.",
    "Блокировать запуск исполняемых файлов из архивов и временных каталогов почтовых клиентов.",
    "Обучать сотрудников бухгалтерии, закупок и договорных отделов распознавать подобные приманки.",
    "Использовать индикаторы компрометации из блога F6 для поиска следов кампании."
  ],
  "why_it_matters": "ИИ снижает затраты кибершпионов на подготовку ВПО и рассылок; даже несовершенные инструменты уже позволяют охватывать тысячи адресатов в российских компаниях.",
  "source_note": "Выжимка по пресс-релизу F6 от 17.11.2026; техническая часть и индикаторы опубликованы в блоге F6 и в выжимку не вошли.",
  "en": {
    "title": "Spy links: F6 examined the Rezet group's AI tools in attacks on Russia and the world",
    "tldr": "F6 reported that the Rezet group (RareWerewolf, LibrarianGhouls) — the most active group attacking companies in Russia, Belarus and Kazakhstan in 2026 — uses the AI-assisted AnyDoor panel to build malware and send mass phishing; a single October mailing reached over 4,800 recipients.",
    "summary": "Rezet has been active since late 2018 and is motivated by espionage: data theft and persistent remote access to devices. Targets are manufacturing, logistics, biotech, finance and insurance, healthcare, retail and energy research institutes. An attack wave was recorded in September 2026, and new campaigns were created in October. Emails with attachments disguised as payment documents, acts, commercial offers and contracts carried EXE files in ZIP archives (some password-protected) and were sent from rotating yandex.ru accounts. The AnyDoor panel on the C2 server builds malicious files, runs mailings and gives access to infected devices; code comments, element styling and logic errors in scripts indicate use of neural networks, and F6 assesses the AI tools as still in a pilot stage. Over 7,000 recipients received emails via AnyDoor, 85% in the .ru zone; 4 campaigns were created in October (three on 'drones', one on 'oil and gas'). According to F6, Rezet is among at least nine state-backed groups that have used AI-created tools.",
    "key_findings": [
      "Over 7,000 recipients from 25 national domain zones received emails via the AnyDoor panel, 85% in the .ru zone.",
      "Signs of AI-generated code: comments, element styling and logic errors in scripts that break the infection chain.",
      "Attachments are disguised as payment documents, acts and contracts; some archives are password-protected.",
      "Rezet is one of at least nine state-backed groups that have used AI tools, according to F6."
    ],
    "stats": [
      {
        "value": "7,000+",
        "label": "recipients of AnyDoor mailings"
      },
      {
        "value": "4,800+",
        "label": "recipients of a single October mailing"
      },
      {
        "value": "85%",
        "label": "of recipients in the .ru zone"
      },
      {
        "value": "since 2018",
        "label": "group activity"
      }
    ],
    "recommendations": [
      "Detonate document attachments in archives (especially password-protected ones) in a sandbox before delivery.",
      "Block execution of files from archives and email client temporary folders.",
      "Train accounting, procurement and contracts staff to recognise such lures.",
      "Use the indicators of compromise from the F6 blog to hunt for the campaign."
    ],
    "why_it_matters": "AI lowers the cost of preparing malware and mailings for cyber spies; even imperfect tools already let them reach thousands of recipients in Russian companies.",
    "source_note": "Summary based on F6's press release of 17 Nov 2026; the technical details and indicators are published in the F6 blog and are not included here."
  }
});
