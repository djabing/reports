RDB.add({
  "id": "2026-11-proofpoint-europe-threat-landscape",
  "vendor": "proofpoint",
  "title": "Europe's Threat Landscape in 2026: Espionage Expands as AI and Phishing Risks Grow",
  "title_ru": "Ландшафт угроз Европы 2026: шпионаж расширяется, риски ИИ и фишинга растут",
  "url": "https://www.proofpoint.com/uk/blog/threat-insight/europes-threat-landscape-2026-espionage-expands-ai-and-phishing-risks-grow",
  "pdf_url": "",
  "published": "2026-11-12",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "phishing",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "tags": [
    "фишинг",
    "Европа",
    "шпионаж",
    "ИИ",
    "облако"
  ],
  "sectors": [
    "Госсектор",
    "Образование",
    "Здравоохранение"
  ],
  "regions": [
    "Европа"
  ],
  "tldr": "Фишинг в Европе растёт втрое быстрее, чем в мире (×4,5 против ×1,5), а европейцы кликают в 4 раза чаще. Южноазиатские группировки расширяют шпионаж в Западную Европу, атаки на ИИ-компоненты выросли в 4,6 раза.",
  "summary": "Исследование Proofpoint, представленное на Web Summit в Лиссабоне. В Европе 8,3 клика на 100 доставленных вредоносных писем против 2,0 в мире; callback-фишинг вырос на 262%. Российские и китайские государственные группировки совершенствуют техники, а южноазиатские выходят на Западную Европу; отдельно отмечена UNK_AcademicFlare, атакующая госорганы, образование и аналитические центры. Proofpoint обнаружила более 188 000 ИИ-приложений, подключённых через OAuth; 64% европейских организаций — целей точечных облачных атак — были успешно скомпрометированы.",
  "key_findings": [
    "Фишинговые детекты в Европе выросли в 4,5 раза (в мире — в 1,5 раза).",
    "8,3 клика на 100 вредоносных писем в Европе против 2,0 в мире.",
    "Callback-фишинг +262% год к году.",
    "Южноазиатские группировки расширяют шпионаж в Западную Европу; активна UNK_AcademicFlare.",
    "188 000+ ИИ-приложений через OAuth; атаки на ИИ-компоненты выросли в 4,6 раза.",
    "64% целей точечных облачных атак показали признаки успешной компрометации."
  ],
  "stats": [
    {
      "value": "×4,5",
      "label": "рост фишинга в Европе"
    },
    {
      "value": "8,3",
      "label": "клика на 100 писем"
    },
    {
      "value": "+262%",
      "label": "callback-фишинг"
    },
    {
      "value": "64%",
      "label": "успешных облачных компрометаций"
    }
  ],
  "actors": [
    "UNK_AcademicFlare"
  ],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1566",
      "name": "Phishing"
    },
    {
      "id": "T1528",
      "name": "Steal Application Access Token"
    },
    {
      "id": "T1078.004",
      "name": "Cloud Accounts"
    }
  ],
  "recommendations": [
    "Проверять и ограничивать OAuth-согласия для ИИ-приложений.",
    "Обучать сотрудников распознаванию callback-фишинга (звонок по номеру из письма).",
    "Мониторить действия в облачных почтовых ящиках после входа: правила пересылки, доступ к файлам."
  ],
  "why_it_matters": "Редкий региональный срез: показывает, что Европа отстаёт по устойчивости к фишингу и становится целью шпионажа.",
  "source_note": "Выжимка по блогу Proofpoint и обзорам (Infosecurity Magazine, GlobeNewswire).",
  "en": {
    "tldr": "Phishing in Europe is growing three times faster than globally (×4.5 vs ×1.5), and Europeans click 4 times more often. South Asian groups are extending espionage into Western Europe, and attacks on AI components grew 4.6-fold.",
    "summary": "Proofpoint research presented at Web Summit in Lisbon. In Europe there are 8.3 clicks per 100 delivered malicious emails versus 2.0 globally; callback phishing rose 262%. Russian and Chinese state groups are refining their techniques, while South Asian groups are moving into Western Europe; UNK_AcademicFlare, targeting government, education and think tanks, is singled out. Proofpoint found more than 188,000 AI apps connected via OAuth; 64% of European organisations targeted by focused cloud attacks were successfully compromised.",
    "key_findings": [
      "Phishing detections in Europe grew 4.5-fold (1.5-fold globally).",
      "8.3 clicks per 100 malicious emails in Europe vs 2.0 globally.",
      "Callback phishing +262% year on year.",
      "South Asian groups are extending espionage into Western Europe; UNK_AcademicFlare is active.",
      "188,000+ AI apps via OAuth; attacks on AI components grew 4.6-fold.",
      "64% of targets of focused cloud attacks showed signs of successful compromise."
    ],
    "stats": [
      {
        "value": "×4.5",
        "label": "phishing growth in Europe"
      },
      {
        "value": "8.3",
        "label": "clicks per 100 emails"
      },
      {
        "value": "+262%",
        "label": "callback phishing"
      },
      {
        "value": "64%",
        "label": "successful cloud compromises"
      }
    ],
    "recommendations": [
      "Review and restrict OAuth consents for AI apps.",
      "Train employees to recognise callback phishing (calling a number from an email).",
      "Monitor post-login activity in cloud mailboxes: forwarding rules, file access."
    ],
    "why_it_matters": "A rare regional snapshot: shows Europe lagging in phishing resilience and becoming an espionage target.",
    "source_note": "Summary based on the Proofpoint blog and coverage (Infosecurity Magazine, GlobeNewswire)."
  }
});
