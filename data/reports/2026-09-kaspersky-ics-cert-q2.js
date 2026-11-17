RDB.add({
  "id": "2026-09-kaspersky-ics-cert-q2",
  "vendor": "kaspersky-ics",
  "title": "Threat landscape for industrial automation systems. Q2 2026",
  "title_ru": "Ландшафт угроз для систем промышленной автоматизации, II квартал 2026",
  "url": "https://www.kaspersky.com/about/press-releases/kaspersky-ics-cert-q2-2026-saw-a-rise-in-ransomware-targeting-industrial-control-systems",
  "pdf_url": "https://ics-cert.kaspersky.com/media/Kaspersky-ICS-CERT-Threat-landscape-for-industrial-automation-systems-Q2-2026-en.pdf?download=1",
  "published": "2026-09",
  "date_precision": "month",
  "added": "2026-10-16",
  "type": "ics",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "tags": [
    "АСУ ТП",
    "OT",
    "ransomware",
    "квартальный",
    "статистика"
  ],
  "sectors": [
    "Промышленность / OT"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Доля атакованных компьютеров АСУ ТП снизилась до 19,2% — минимум с 2022 года, но атаки вымогателей на АСУ ТП выросли почти во всех регионах: +50% в Юго-Восточной Азии, +67% в Австралии и Новой Зеландии.",
  "summary": "Квартальная статистика Kaspersky ICS CERT по компьютерам систем промышленной автоматизации. Общий уровень угроз продолжает медленно снижаться, однако вымогатели становятся всё заметнее в промышленных сетях. Основные категории заблокированных угроз — вредоносные скрипты и фишинговые страницы, ресурсы из чёрных списков, шпионское ПО.",
  "key_findings": [
    "19,2% компьютеров АСУ ТП подверглись атакам (−0,4 п.п. к Q1) — самый низкий уровень с 2022 года.",
    "Доля АСУ ТП, атакованных вымогателями, выросла почти во всех регионах: Африка +31%, Центральная Азия +31%, Ближний Восток +11%, Юго-Восточная Азия +50%, Южная Америка +38%, Австралия и НЗ +67%.",
    "Категории угроз: вредоносные скрипты и фишинговые страницы — 5,42%, ресурсы из denylist — 4,31%, шпионские трояны/бэкдоры/кейлоггеры — 3,30%, вредоносные документы — 1,77%."
  ],
  "stats": [
    {
      "value": "19,2%",
      "label": "атакованных компьютеров АСУ ТП"
    },
    {
      "value": "+67%",
      "label": "вымогатели в Австралии и НЗ"
    },
    {
      "value": "+50%",
      "label": "вымогатели в Юго-Восточной Азии"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1486",
      "name": "Data Encrypted for Impact"
    }
  ],
  "recommendations": [
    "Сегментировать ИТ и OT, ограничить доступ АСУ ТП в интернет.",
    "Иметь офлайн-копии конфигураций и проектов SCADA/ПЛК.",
    "Контролировать съёмные носители и почту на инженерных станциях."
  ],
  "why_it_matters": "Регулярный ориентир для промышленных SOC: общий фон снижается, но вымогатели в OT — растущий риск.",
  "source_note": "Выжимка по пресс-релизу Kaspersky и аннотации отчёта; полный PDF — по ссылке. Дата — приблизительно.",
  "en": {
    "tldr": "The share of attacked ICS computers fell to 19.2% — the lowest since 2022 — but ransomware attacks on ICS grew in almost all regions: +50% in Southeast Asia, +67% in Australia and New Zealand.",
    "summary": "Kaspersky ICS CERT's quarterly statistics for industrial automation computers. The overall threat level keeps slowly declining, but ransomware is becoming more visible in industrial networks. The main categories of blocked threats are malicious scripts and phishing pages, denylisted resources and spyware.",
    "key_findings": [
      "19.2% of ICS computers were attacked (−0.4 pp vs Q1) — the lowest level since 2022.",
      "The share of ICS computers hit by ransomware grew in almost all regions: Africa +31%, Central Asia +31%, Middle East +11%, Southeast Asia +50%, South America +38%, Australia and NZ +67%.",
      "Threat categories: malicious scripts and phishing pages 5.42%, denylisted resources 4.31%, spyware trojans/backdoors/keyloggers 3.30%, malicious documents 1.77%."
    ],
    "stats": [
      {
        "value": "19.2%",
        "label": "of ICS computers attacked"
      },
      {
        "value": "+67%",
        "label": "ransomware in Australia and NZ"
      },
      {
        "value": "+50%",
        "label": "ransomware in Southeast Asia"
      }
    ],
    "recommendations": [
      "Segment IT and OT and restrict ICS internet access.",
      "Keep offline copies of SCADA/PLC configurations and projects.",
      "Control removable media and email on engineering workstations."
    ],
    "why_it_matters": "A regular benchmark for industrial SOCs: the overall background is declining, but ransomware in OT is a growing risk.",
    "source_note": "Summary based on the Kaspersky press release and the report abstract; full PDF via the link. Date is approximate."
  }
});
