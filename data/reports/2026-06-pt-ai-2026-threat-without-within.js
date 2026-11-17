RDB.add({
  "id": "2026-06-pt-ai-2026-threat-without-within",
  "vendor": "pt",
  "title": "ИИ в 2026: угроза снаружи и внутри",
  "title_ru": "ИИ в 2026: угроза снаружи и внутри",
  "url": "https://ptsecurity.com/research/analytics/ai-2026-threat-from-without-and-within/",
  "pdf_url": "",
  "published": "2026-06-03",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "ai",
  "lang": "ru",
  "importance": 2,
  "tier": "key",
  "tags": [
    "ИИ",
    "дипфейки",
    "ИИ-агенты",
    "MITRE ATT&CK",
    "Россия"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Россия",
    "Глобально"
  ],
  "tldr": "PT: ИИ-фишинг, дипфейки и генерация фрагментов ВПО стали массовой практикой; ИИ потенциально применим в 100% тактик и 62% техник MITRE ATT&CK. Вторая угроза — незрелое внедрение ИИ внутри компаний.",
  "summary": "Исследование Positive Technologies о двух сторонах ИИ-риска. Снаружи — киберпреступники экспериментируют со встраиванием ИИ-модулей в ВПО, на теневых площадках появился deepfake-as-a-service. Внутри — повсеместное, недостаточно зрелое внедрение ИИ без защиты самой технологии и инфраструктуры; отдельный раздел посвящён угрозам ИИ-агентов.",
  "key_findings": [
    "Генерация фишинга, дипфейков и фрагментов ВПО с ИИ — массовая практика.",
    "Киберпреступники встраивают ИИ-модули в ВПО.",
    "ИИ потенциально применим в 100% тактик и 62% техник MITRE ATT&CK.",
    "На теневых площадках — deepfake-as-a-service.",
    "Незрелое внедрение ИИ в компаниях создаёт внутреннюю угрозу."
  ],
  "stats": [
    {
      "value": "100%",
      "label": "тактик ATT&CK"
    },
    {
      "value": "62%",
      "label": "техник ATT&CK"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Контролировать ИИ-сервисы, которыми пользуются сотрудники.",
    "Проверять безопасность сгенерированного ИИ кода.",
    "Строго ограничивать права ИИ-агентов и журналировать их действия."
  ],
  "why_it_matters": "Комплексный взгляд на риски ИИ для российского рынка.",
  "source_note": "Выжимка по материалам Positive Technologies и обзорам (CNews, Хабр).",
  "en": {
    "title": "AI in 2026: the threat from outside and within",
    "tldr": "PT: AI-generated phishing, deepfakes and malware fragments have become mainstream; AI is potentially applicable to 100% of MITRE ATT&CK tactics and 62% of techniques. The second threat is immature AI adoption inside companies.",
    "summary": "Positive Technologies research on the two sides of AI risk. From outside, cybercriminals are experimenting with embedding AI modules in malware, and deepfake-as-a-service has appeared on underground markets. From within, widespread and immature AI adoption leaves the technology and its infrastructure unprotected; a separate section covers AI agent threats.",
    "key_findings": [
      "Generating phishing, deepfakes and malware fragments with AI is mainstream.",
      "Cybercriminals embed AI modules in malware.",
      "AI is potentially applicable to 100% of ATT&CK tactics and 62% of techniques.",
      "Deepfake-as-a-service on underground markets.",
      "Immature AI adoption in companies creates an internal threat."
    ],
    "stats": [
      {
        "value": "100%",
        "label": "of ATT&CK tactics"
      },
      {
        "value": "62%",
        "label": "of ATT&CK techniques"
      }
    ],
    "recommendations": [
      "Control the AI services employees use.",
      "Check the security of AI-generated code.",
      "Strictly limit AI agent permissions and log their actions."
    ],
    "why_it_matters": "A comprehensive view of AI risks for the Russian market.",
    "source_note": "Summary based on Positive Technologies materials and coverage (CNews, Habr)."
  }
});
