RDB.add({
  "id": "2026-11-pt-phishing-domains-q3",
  "vendor": "pt",
  "title": "Positive Technologies выявила более 3400 новых фишинговых доменов в III квартале 2026 года",
  "title_ru": "Более 3400 фишинговых доменов за III квартал 2026: 89% — против пользователей мессенджеров",
  "url": "https://safe.cnews.ru/news/line/2026-11-13_positive_technologies_vyyavila_bolee",
  "pdf_url": "",
  "published": "2026-11-13",
  "date_precision": "day",
  "added": "2026-11-15",
  "type": "phishing",
  "lang": "ru",
  "importance": 2,
  "tier": "analytics",
  "tags": [
    "фишинг",
    "мессенджеры",
    "Россия",
    "Android",
    "мошенничество"
  ],
  "sectors": [
    "Частные пользователи",
    "Финансы"
  ],
  "regions": [
    "Россия"
  ],
  "tldr": "Киберразведка PT выявила 3425 фишинговых доменов за III квартал; около 89% нацелены на угон аккаунтов в популярных мессенджерах.",
  "summary": "По итогам квартала Positive Technologies обнаружила 3425 новых фишинговых доменов. Около 89% использовались для кражи учётных записей пользователей мессенджеров, около 5% — для кражи банковских данных, 3% — для распространения вредоносных Android-приложений и ещё 3% — для взлома других сервисов.",
  "key_findings": [
    "3425 новых фишинговых доменов за квартал.",
    "~89% — угон учётных записей мессенджеров.",
    "~5% — кража банковских данных.",
    "~3% — распространение вредоносных Android-приложений; ~3% — прочие сервисы."
  ],
  "stats": [
    {
      "value": "3425",
      "label": "фишинговых доменов"
    },
    {
      "value": "89%",
      "label": "против мессенджеров"
    },
    {
      "value": "5%",
      "label": "банковские данные"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1566.002",
      "name": "Spearphishing Link"
    },
    {
      "id": "T1583.001",
      "name": "Domains"
    }
  ],
  "recommendations": [
    "Включить двухфакторную защиту (облачный пароль) во всех мессенджерах сотрудников.",
    "Мониторить регистрацию доменов, похожих на бренд компании.",
    "Обучать сотрудников не вводить коды подтверждения на сторонних сайтах."
  ],
  "why_it_matters": "Мессенджеры остаются главной мишенью массового фишинга в России, а угнанные аккаунты затем используются для целевых атак на организации.",
  "source_note": "Выжимка по новостям CNews и Runet.News на основе данных Positive Technologies.",
  "en": {
    "title": "More than 3,400 phishing domains in Q3 2026: 89% target messenger users",
    "tldr": "PT threat intelligence identified 3,425 phishing domains in Q3; about 89% aim to hijack accounts in popular messengers.",
    "summary": "Over the quarter Positive Technologies found 3,425 new phishing domains. About 89% were used to steal messenger accounts, about 5% to steal banking data, 3% to distribute malicious Android apps and another 3% to break into other services.",
    "key_findings": [
      "3,425 new phishing domains in the quarter.",
      "~89% — messenger account takeover.",
      "~5% — banking data theft.",
      "~3% — distribution of malicious Android apps; ~3% — other services."
    ],
    "stats": [
      {
        "value": "3,425",
        "label": "phishing domains"
      },
      {
        "value": "89%",
        "label": "targeting messengers"
      },
      {
        "value": "5%",
        "label": "banking data"
      }
    ],
    "recommendations": [
      "Enable two-factor protection (cloud password) in all employees' messengers.",
      "Monitor registration of domains resembling the company brand.",
      "Train employees not to enter confirmation codes on third-party sites."
    ],
    "why_it_matters": "Messengers remain the main target of mass phishing in Russia, and hijacked accounts are then used for targeted attacks on organisations.",
    "source_note": "Summary based on CNews and Runet.News reports drawing on Positive Technologies data."
  }
});
