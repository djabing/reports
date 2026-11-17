RDB.add({
  "id": "2026-11-kaspersky-q3-mobile",
  "vendor": "kaspersky-securelist",
  "title": "Mobile threat report for Q3 2026",
  "title_ru": "Мобильные угрозы в III квартале 2026",
  "url": "https://securelist.com/malware-report-q3-2026-mobile-statistics/121844/",
  "pdf_url": "",
  "published": "2026-11-10",
  "date_precision": "day",
  "added": "2026-11-15",
  "type": "mobile",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "tags": [
    "квартальный",
    "Android",
    "банковские трояны",
    "Creduz",
    "ИИ"
  ],
  "sectors": [
    "Финансы",
    "Частные пользователи"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Банковские трояны остаются главной мобильной угрозой: 31,63% обнаруженных вредоносных приложений. Число атак снизилось до 1,67 млн, но количество вредоносных установочных пакетов выросло.",
  "summary": "Квартальный отчёт Kaspersky о мобильных угрозах. Trojan-Banker — самая распространённая категория (31,63% вредоносных приложений), лидер среди банкеров — Creduz. Заблокировано около 1,67 млн мобильных атак против ~2 млн во II квартале, при этом число обнаруженных вредоносных установочных пакетов для Android выросло до ~378 тыс. В обзорах отчёта упоминаются вредоносы для Android с элементами ИИ, приложения с подписочным мошенничеством в Google Play и ботнет Vo1d.",
  "key_findings": [
    "Trojan-Banker — 31,63% всех обнаруженных вредоносных мобильных приложений.",
    "Creduz снова занимает наибольшую долю среди банковских троянов.",
    "~1,67 млн заблокированных мобильных атак (около 2 млн во II квартале).",
    "~378 тыс. вредоносных установочных пакетов для Android.",
    "В фокусе — Android-вредоносы с ИИ-функциями, подписочное мошенничество в Google Play, ботнет Vo1d."
  ],
  "stats": [
    {
      "value": "31,63%",
      "label": "доля банковских троянов"
    },
    {
      "value": "~1,67 млн",
      "label": "мобильных атак"
    },
    {
      "value": "~378 тыс.",
      "label": "вредоносных APK"
    }
  ],
  "actors": [],
  "malware": [
    "Creduz",
    "Mamont",
    "Vo1d"
  ],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Устанавливать приложения только из официальных магазинов и проверять запрашиваемые разрешения (особенно Accessibility).",
    "Использовать мобильную защиту на устройствах сотрудников с доступом к корпоративным данным.",
    "Обучать пользователей распознавать фишинговые ссылки на APK в мессенджерах."
  ],
  "why_it_matters": "Подтверждает, что мобильный банкинг остаётся главной целью, а ИИ начинает встраиваться и в мобильное ВПО.",
  "source_note": "Выжимка по Securelist и пересказам; часть цифр (число атак, APK) взята из вторичных обзоров.",
  "en": {
    "tldr": "Banking trojans remain the main mobile threat: 31.63% of detected malicious apps. The number of attacks fell to 1.67 million, but the number of malicious installation packages grew.",
    "summary": "Kaspersky's quarterly mobile threat report. Trojan-Banker is the most common category (31.63% of malicious apps), with Creduz leading among bankers. About 1.67 million mobile attacks were blocked versus ~2 million in Q2, while the number of detected malicious Android installation packages rose to ~378,000. The report's reviews mention Android malware with AI elements, subscription-fraud apps in Google Play and the Vo1d botnet.",
    "key_findings": [
      "Trojan-Banker — 31.63% of all detected malicious mobile apps.",
      "Creduz again holds the largest share among banking trojans.",
      "~1.67 million mobile attacks blocked (about 2 million in Q2).",
      "~378,000 malicious Android installation packages.",
      "In focus: Android malware with AI features, subscription fraud in Google Play, the Vo1d botnet."
    ],
    "stats": [
      {
        "value": "31.63%",
        "label": "share of banking trojans"
      },
      {
        "value": "~1.67M",
        "label": "mobile attacks"
      },
      {
        "value": "~378K",
        "label": "malicious APKs"
      }
    ],
    "recommendations": [
      "Install apps only from official stores and check requested permissions (especially Accessibility).",
      "Use mobile protection on employees' devices that access corporate data.",
      "Train users to recognise phishing links to APKs in messengers."
    ],
    "why_it_matters": "Confirms that mobile banking remains the main target and that AI is starting to appear in mobile malware too.",
    "source_note": "Summary based on Securelist and accounts of it; some figures (number of attacks, APKs) come from secondary reviews."
  }
});
