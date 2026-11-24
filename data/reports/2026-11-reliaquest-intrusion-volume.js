RDB.add({
  "pdf_url": "",
  "date_precision": "day",
  "added": "2026-11-24",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "tags": [
    "фишинг"
  ],
  "sectors": [],
  "regions": [],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "id": "2026-11-reliaquest-intrusion-volume",
  "vendor": "reliaquest",
  "title": "Intrusion Volume Has Surged 138% in the Last 90 Days, Signaling a New Normal for Defense",
  "title_ru": "ReliaQuest: число наблюдавшихся вторжений выросло на 138% за 90 дней",
  "url": "https://reliaquest.com/blog/intrusion-volume-has-surged-in-the-last-90-days-signaling-a-new-normal-for-defense/",
  "published": "2026-11-18",
  "type": "landscape",
  "tldr": "ReliaQuest зафиксировала 124 вторжения за 90 дней против 52 за предшествующий период. Заметную долю составили инциденты, связанные с захватом учётных записей и атаками на внешние сервисы.",
  "summary": "Аналитики сопоставили наблюдаемые вторжения с предыдущим периодом. В отчёте отдельно выделены кампании, связанные с ShinyHunters, и сочетание атак на идентификацию с атаками на внешние приложения.",
  "key_findings": [
    "В октябре зафиксировано 61 вторжение.",
    "С экосистемой ShinyHunters авторы связали 51 случай, или 41% за рассматриваемый период.",
    "Голосовой фишинг с захватом учётных записей и атаки на внешние сервисы вместе составили 61% наблюдавшихся вторжений."
  ],
  "stats": [
    {
      "value": "124",
      "label": "наблюдавшихся вторжения за 90 дней"
    },
    {
      "value": "52",
      "label": "вторжения в предыдущем периоде"
    },
    {
      "value": "41%",
      "label": "доля случаев, связанных с экосистемой ShinyHunters"
    }
  ],
  "recommendations": [
    "Подтверждать запросы на сброс MFA по независимому каналу.",
    "Оповещать SOC о регистрации новых факторов и подозрительном массовом скачивании данных."
  ],
  "why_it_matters": "Наблюдения помогают расставить приоритеты для защиты учётных записей и внешних приложений.",
  "source_note": "Данные относятся к выборке ReliaQuest. Рост в этой выборке нельзя экстраполировать на все организации.",
  "en": {
    "tldr": "ReliaQuest recorded 124 intrusions in 90 days, up from 52 in the previous period. Account compromise and attacks on exposed services made up a substantial part of the observed activity.",
    "summary": "The researchers compared observed intrusions with the preceding period, highlighting campaigns associated with ShinyHunters and a concentration in identity-related and internet-facing application incidents.",
    "key_findings": [
      "ReliaQuest recorded 61 intrusions in October.",
      "The ShinyHunters ecosystem accounted for 51 cases, or 41% of the reporting period.",
      "Voice phishing and account takeover, together with attacks on edge systems and applications, represented 61% of observed intrusions."
    ],
    "stats": [
      {
        "value": "124",
        "label": "intrusions observed in 90 days"
      },
      {
        "value": "52",
        "label": "intrusions in the preceding period"
      },
      {
        "value": "41%",
        "label": "share associated with the ShinyHunters ecosystem"
      }
    ],
    "recommendations": [
      "Verify MFA reset requests through an independent channel.",
      "Alert the SOC to new factor registrations and unusual bulk downloads."
    ],
    "why_it_matters": "The findings help prioritize account protection and security for exposed applications.",
    "source_note": "The counts come from ReliaQuest's own observations and should not be extrapolated to all organizations."
  }
});
