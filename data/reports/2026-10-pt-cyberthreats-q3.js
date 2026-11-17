RDB.add({
  "id": "2026-10-pt-cyberthreats-q3",
  "vendor": "pt",
  "title": "Анализ активности хакерских группировок в III квартале 2026 года",
  "title_ru": "Анализ активности хакерских группировок в III квартале 2026 года",
  "url": "https://ptsecurity.com/research/pt-esc-threat-intelligence/hacker-group-activity-q3-2026/",
  "pdf_url": "",
  "published": "2026-11-12",
  "date_precision": "day",
  "added": "2026-11-15",
  "type": "landscape",
  "lang": "ru",
  "importance": 2,
  "tier": "analytics",
  "tags": [
    "квартальный",
    "Россия",
    "APT",
    "ИИ",
    "Rare Werewolf"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Россия"
  ],
  "tldr": "PT ESC: 13 группировок атаковали российские организации в III квартале 2026, выявлен 1121 вредоносный файл (лидер — Rare Werewolf, 26,4%). События с явными ИИ-маркерами в веб-трафике выросли на 65% за квартал.",
  "summary": "Аналитики Positive Technologies зафиксировали активность 13 хакерских группировок против российских организаций и проанализировали более тысячи уникальных образцов ВПО. Rare Werewolf — лидер с 296 образцами. По данным PT AF Cloud, общее число событий безопасности в веб-трафике выросло на 12%, а событий с явными ИИ-маркерами — на 65% к II кварталу; злоумышленники поэтапно передают ИИ-агентам разведку, поиск слабых мест и попытки взлома.",
  "key_findings": [
    "13 группировок атаковали российские организации в III квартале.",
    "1121 вредоносный файл; Rare Werewolf — 296 образцов (26,4%).",
    "События безопасности в веб-трафике выросли на 12%.",
    "События с явными ИИ-маркерами — +65% к II кварталу.",
    "ИИ-агентам передают разведку, поиск слабых мест и попытки эксплуатации."
  ],
  "stats": [
    {
      "value": "13",
      "label": "группировок"
    },
    {
      "value": "1121",
      "label": "вредоносный файл"
    },
    {
      "value": "26,4%",
      "label": "доля Rare Werewolf"
    },
    {
      "value": "+65%",
      "label": "событий с ИИ-маркерами"
    }
  ],
  "actors": [
    "Rare Werewolf"
  ],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1566",
      "name": "Phishing"
    },
    {
      "id": "T1595",
      "name": "Active Scanning"
    },
    {
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    }
  ],
  "recommendations": [
    "Фильтровать вложения и ссылки в почте — фишинг остаётся главным вектором группировок.",
    "Использовать WAF с выявлением автоматизированного (ИИ) трафика.",
    "Отслеживать IoC Rare Werewolf и других активных в России групп."
  ],
  "why_it_matters": "Основной квартальный срез по российскому ландшафту: подтверждает перенос этапов атак на ИИ-агентов и в российском сегменте.",
  "source_note": "Выжимка по публикациям Телеспутника и SecurityLab на основе данных PT ESC; первоисточник — ptsecurity.com.",
  "en": {
    "title": "Analysis of hacker group activity in Q3 2026",
    "tldr": "PT ESC: 13 groups attacked Russian organisations in Q3 2026; 1,121 malicious files were identified (leader — Rare Werewolf, 26.4%). Events with explicit AI markers in web traffic rose 65% quarter on quarter.",
    "summary": "Positive Technologies analysts recorded the activity of 13 hacker groups against Russian organisations and analysed more than a thousand unique malware samples. Rare Werewolf leads with 296 samples. According to PT AF Cloud, the total number of security events in web traffic rose 12%, and events with explicit AI markers rose 65% vs Q2; attackers are gradually handing reconnaissance, weakness discovery and intrusion attempts to AI agents.",
    "key_findings": [
      "13 groups attacked Russian organisations in Q3.",
      "1,121 malicious files; Rare Werewolf — 296 samples (26.4%).",
      "Security events in web traffic rose 12%.",
      "Events with explicit AI markers — +65% vs Q2.",
      "Reconnaissance, weakness discovery and exploitation attempts are being handed to AI agents."
    ],
    "stats": [
      {
        "value": "13",
        "label": "groups"
      },
      {
        "value": "1,121",
        "label": "malicious files"
      },
      {
        "value": "26.4%",
        "label": "Rare Werewolf share"
      },
      {
        "value": "+65%",
        "label": "events with AI markers"
      }
    ],
    "recommendations": [
      "Filter email attachments and links — phishing remains the groups' main vector.",
      "Use a WAF that detects automated (AI) traffic.",
      "Track IoCs of Rare Werewolf and other groups active in Russia."
    ],
    "why_it_matters": "The main quarterly snapshot of the Russian landscape: confirms that attack stages are shifting to AI agents in the Russian segment too.",
    "source_note": "Summary based on Telesputnik and SecurityLab articles drawing on PT ESC data; primary source — ptsecurity.com."
  }
});
