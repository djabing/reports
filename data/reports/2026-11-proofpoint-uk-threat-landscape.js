RDB.add({
  "id": "2026-11-proofpoint-uk-threat-landscape",
  "vendor": "proofpoint",
  "title": "The UK Threat Landscape: Phishing Surges as Targeted Attacks Intensify",
  "title_ru": "Ландшафт угроз Великобритании: фишинг вырос в 5,7 раза, целевые атаки усиливаются",
  "url": "https://www.proofpoint.com/uk/blog/threat-insight/uk-threat-landscape-phishing-surges-targeted-attacks-intensify",
  "pdf_url": "",
  "published": "2026-11-18",
  "date_precision": "day",
  "added": "2026-11-19",
  "type": "landscape",
  "lang": "en",
  "importance": 1,
  "tier": "analytics",
  "tags": [
    "фишинг",
    "облако",
    "шпионаж",
    "статистика"
  ],
  "sectors": [
    "Образование",
    "Промышленность",
    "Строительство",
    "Транспорт",
    "Финансы"
  ],
  "regions": [
    "Великобритания"
  ],
  "tldr": "Proofpoint зафиксировала рост фишинговых детектирований в Великобритании в 5,7 раза за год (октябрь 2025 – октябрь 2026), против 4,5 раза в Европе и 1,5 раза в мире. Чаще всего атакуют высшее образование, а вредоносное ПО против британской промышленности выросло на 198%.",
  "summary": "Общий объём почты в стране за тот же период вырос лишь в 1,5 раза. Высшее образование получает фишинг в 3,2 раза чаще среднего по стране, а кликают в нём 17 раз на 100 доставленных угроз — более чем вдвое выше среднего. Вредоносное ПО против промышленности выросло на 198% при общем снижении на 19%; производственные компании получают в 2,5 раза больше фишинга и в 2,2 раза больше BEC, строительные — в 2,2 раза больше callback-фишинга (TOAD). В облаке атакам подверглись 99% британских организаций, признаки успешной компрометации есть у 72%; целевые «точечные» атаки затронули 71% атакованных организаций против 34% у перебора паролей, активность после получения доступа замечена у 69%. Среди группировок — TA446 (Callisto) с iOS-эксплойт-китом DarkSword, TA2730 с фишингом под британские инвестиционные платформы и онлайн-оператором, TA4922 и брокер доступа TA586 с поддельными вакансиями.",
  "key_findings": [
    "Рост фишинга в Великобритании (5,7×) заметно опережает Европу (4,5×) и мир (1,5×).",
    "Высшее образование — самая атакуемая отрасль: фишинг в 3,2 раза выше среднего, 17 кликов на 100 доставленных угроз.",
    "Вредоносное ПО против промышленности выросло на 198%, хотя в целом по стране снизилось на 19%.",
    "Целевые атаки на облачные учётные записи эффективнее перебора: 71% против 34% затронутых организаций.",
    "TA2730 атакует клиентов британских инвестиционных платформ с помощью фишинг-кита с оператором в реальном времени."
  ],
  "stats": [
    {
      "value": "5,7×",
      "label": "рост фишинговых детектирований в Великобритании за год"
    },
    {
      "value": "+198%",
      "label": "вредоносного ПО против британской промышленности"
    },
    {
      "value": "72%",
      "label": "организаций с признаками успешной компрометации в облаке"
    },
    {
      "value": "17 на 100",
      "label": "кликов по доставленным угрозам в высшем образовании"
    }
  ],
  "actors": [
    "TA446",
    "TA2730",
    "TA4922",
    "TA586"
  ],
  "malware": [
    "DarkSword"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1566.002",
      "name": "Phishing: Spearphishing Link"
    },
    {
      "id": "T1110.003",
      "name": "Brute Force: Password Spraying"
    },
    {
      "id": "T1564.008",
      "name": "Hide Artifacts: Email Hiding Rules"
    },
    {
      "id": "T1539",
      "name": "Steal Web Session Cookie"
    }
  ],
  "recommendations": [
    "Использовать устойчивую к фишингу MFA и отслеживать перехват сессий в облачных учётных записях.",
    "Контролировать подозрительные правила почтовых ящиков и активность после входа в облако.",
    "Обучать сотрудников вузов и производственных компаний распознавать фишинг, BEC и callback-фишинг."
  ],
  "why_it_matters": "Данные по одной стране показывают, что фишинг растёт быстрее объёма почты, а целевые атаки на облачные учётные записи всё чаще заканчиваются компрометацией.",
  "source_note": "Выжимка по первоисточнику — блогу Proofpoint Threat Insight от 18.11.2026. Отдельного раздела рекомендаций в статье нет; рекомендации сформулированы по описанным в ней техникам.",
  "en": {
    "tldr": "Proofpoint recorded a 5.7x year-over-year rise in phishing detections in the UK (October 2025 – October 2026), versus 4.5x in Europe and 1.5x worldwide. Higher education is the most targeted sector, and malware against UK manufacturing rose 198%.",
    "summary": "Overall UK email volume grew only 1.5x over the same period. Higher education receives phishing at 3.2x the UK average, with 17 clicks per 100 delivered threats — more than double the average. Malware targeting manufacturing rose 198% while UK malware overall fell 19%; manufacturers see 2.5x more phishing and 2.2x more BEC, and construction firms 2.2x more callback phishing (TOAD). In the cloud, 99% of UK organisations were targeted and 72% showed evidence of successful compromise; precision attacks impacted 71% of targeted organisations versus 34% for brute force, and post-access activity was seen at 69%. Actors include TA446 (Callisto) with the DarkSword iOS exploit kit, TA2730 phishing customers of UK investment platforms with a live operator, TA4922 and the initial access broker TA586 using fake job offers.",
    "key_findings": [
      "Phishing growth in the UK (5.7x) clearly outpaces Europe (4.5x) and the world (1.5x).",
      "Higher education is the most targeted sector: phishing at 3.2x the average and 17 clicks per 100 delivered threats.",
      "Malware against manufacturing rose 198%, although it fell 19% across the UK overall.",
      "Precision attacks on cloud accounts are more effective than brute force: 71% versus 34% of organisations impacted.",
      "TA2730 targets customers of UK investment platforms with a real-time phishing kit operated live."
    ],
    "stats": [
      {
        "value": "5.7x",
        "label": "year-over-year rise in UK phishing detections"
      },
      {
        "value": "+198%",
        "label": "malware targeting UK manufacturing"
      },
      {
        "value": "72%",
        "label": "organisations with evidence of successful cloud compromise"
      },
      {
        "value": "17 per 100",
        "label": "clicks on delivered threats in higher education"
      }
    ],
    "recommendations": [
      "Use phishing-resistant MFA and monitor for session hijacking in cloud accounts.",
      "Monitor suspicious mailbox rules and post-login activity in the cloud.",
      "Train university and manufacturing staff to recognise phishing, BEC and callback phishing."
    ],
    "why_it_matters": "Single-country data show phishing growing faster than email volume, and targeted attacks on cloud accounts increasingly ending in compromise.",
    "source_note": "Summary based on the primary source — Proofpoint Threat Insight blog of 18 Nov 2026. The article has no recommendations section; the recommendations are derived from the techniques it describes."
  }
});
