RDB.add({
  "id": "2026-02-sophos-active-adversary",
  "vendor": "sophos",
  "title": "Sophos Active Adversary Report 2026",
  "title_ru": "Sophos Active Adversary 2026: атаки на идентичность доминируют",
  "url": "https://www.sophos.com/en-us/press/press-releases/sophos-active-adversary-report-2026-identity-attacks-dominate-as-threat-groups-proliferate",
  "pdf_url": "",
  "published": "2026-02-24",
  "date_precision": "day",
  "added": "2026-10-16",
  "type": "landscape",
  "lang": "en",
  "importance": 3,
  "tier": "key",
  "tags": [
    "годовой",
    "identity",
    "MFA",
    "IR",
    "MDR"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "67% инцидентов, расследованных Sophos IR и MDR, начинались с атак на идентичность; в 59% случаев не было MFA. Медианное время присутствия атакующего сократилось до 3 дней. Серьёзной ИИ-трансформации поведения атакующих не обнаружено.",
  "summary": "Ежегодный отчёт по 661 случаю реагирования и MDR (ноябрь 2024 — октябрь 2025) в 70 странах и 34 отраслях. Злоумышленники продолжают пользоваться украденными учётными данными, слабой или отсутствующей MFA и плохо защищёнными системами идентификации — зачастую без новых инструментов. ИИ ускорил и «отполировал» фишинг, но принципиально новых техник пока не породил.",
  "key_findings": [
    "67% инцидентов связаны с атаками на идентичность.",
    "MFA отсутствовала в 59% случаев.",
    "Брутфорс (15,6%) почти сравнялся с эксплуатацией уязвимостей (16%) как способ первичного доступа.",
    "Медианный dwell time снизился до 3 дней — и атакующие быстрее, и защитники реагируют оперативнее.",
    "Генеративный ИИ повысил скорость и качество фишинга, но не создал принципиально новых техник."
  ],
  "stats": [
    {
      "value": "67%",
      "label": "инцидентов — атаки на идентичность"
    },
    {
      "value": "59%",
      "label": "случаев без MFA"
    },
    {
      "value": "3 дня",
      "label": "медианный dwell time"
    },
    {
      "value": "661",
      "label": "расследованный случай"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1078",
      "name": "Valid Accounts"
    },
    {
      "id": "T1110",
      "name": "Brute Force"
    },
    {
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    }
  ],
  "recommendations": [
    "Внедрить фишингоустойчивую MFA и проверить корректность её настройки.",
    "Сократить экспозицию систем идентификации и публичных сервисов.",
    "Оперативно закрывать известные уязвимости.",
    "Обеспечить мониторинг 24/7 и хранение журналов для расследований."
  ],
  "why_it_matters": "Трезвый противовес ИИ-хайпу: большинство взломов по-прежнему — пароли без MFA.",
  "source_note": "Выжимка по пресс-релизу Sophos и обзорам (Intelligent CISO, VSDaily).",
  "en": {
    "tldr": "67% of incidents investigated by Sophos IR and MDR began with identity attacks; MFA was missing in 59% of cases. Median attacker dwell time fell to 3 days. No major AI-driven change in attacker behaviour was found.",
    "summary": "Annual report on 661 incident response and MDR cases (November 2024 — October 2025) across 70 countries and 34 industries. Attackers keep exploiting stolen credentials, weak or missing MFA and poorly protected identity systems — often without new tools. AI has made phishing faster and more polished but has not yet produced fundamentally new techniques.",
    "key_findings": [
      "67% of incidents involved identity attacks.",
      "MFA was missing in 59% of cases.",
      "Brute force (15.6%) nearly matched vulnerability exploitation (16%) as an initial access method.",
      "Median dwell time fell to 3 days — attackers are faster, and defenders respond sooner.",
      "Generative AI increased the speed and quality of phishing but did not create fundamentally new techniques."
    ],
    "stats": [
      {
        "value": "67%",
        "label": "of incidents were identity attacks"
      },
      {
        "value": "59%",
        "label": "of cases without MFA"
      },
      {
        "value": "3 days",
        "label": "median dwell time"
      },
      {
        "value": "661",
        "label": "cases investigated"
      }
    ],
    "recommendations": [
      "Deploy phishing-resistant MFA and verify it is configured correctly.",
      "Reduce exposure of identity systems and public-facing services.",
      "Patch known vulnerabilities promptly.",
      "Ensure 24/7 monitoring and log retention for investigations."
    ],
    "why_it_matters": "A sober counterweight to the AI hype: most breaches are still passwords without MFA.",
    "source_note": "Summary based on the Sophos press release and coverage (Intelligent CISO, VSDaily)."
  }
});
