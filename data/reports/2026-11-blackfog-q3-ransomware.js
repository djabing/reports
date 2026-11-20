RDB.add({
  "id": "2026-11-blackfog-q3-ransomware",
  "vendor": "blackfog",
  "title": "2026 Q3 Ransomware Report: Ransomware's Hidden Crisis Comes to Light",
  "title_ru": "Вымогатели в III квартале 2026: скрытый кризис выходит на свет",
  "url": "https://www.blackfog.com/2026-q3-ransomware-report/",
  "pdf_url": "",
  "published": "2026-11-19",
  "date_precision": "day",
  "added": "2026-11-20",
  "type": "ransomware",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "tags": [
    "вымогатели",
    "утечки данных",
    "квартальный",
    "статистика"
  ],
  "sectors": [
    "Здравоохранение",
    "МСБ",
    "Все отрасли"
  ],
  "regions": [
    "Глобально",
    "США"
  ],
  "tldr": "BlackFog: 353 публично раскрытые атаки вымогателей в III квартале 2026 — максимум для третьего квартала с 2020 года (+20% год к году). Кража данных подтверждена в 98% из них; на сайтах утечек — ещё 2668 заявлений (+77%).",
  "summary": "Квартальный отчёт BlackFog о вымогателях. Компания разделяет подтверждённые публично раскрытые атаки (353) и заявления группировок на сайтах утечек (2668), которые независимо не подтверждены, — складывать их как равнозначные события некорректно. Почти все раскрытые атаки сопровождались выгрузкой данных. Больше всего раскрытых атак — в здравоохранении, более половины — в США. Среди жертв на сайтах утечек преобладают небольшие организации.",
  "key_findings": [
    "353 публично раскрытые атаки — рекорд для III квартала с начала наблюдений в 2020 году: +20% год к году и +15% к II кварталу.",
    "2668 заявлений об атаках на сайтах утечек (+77% год к году) — без независимого подтверждения.",
    "Кража данных подтверждена в 345 из 353 раскрытых атак (98%).",
    "Здравоохранение — 100 раскрытых атак (28%); США — 53% раскрытых инцидентов.",
    "Более 70% жертв на сайтах утечек с известной численностью — организации до 500 сотрудников; медиана — 150 человек."
  ],
  "stats": [
    {
      "value": "353",
      "label": "раскрытые атаки (+20%)"
    },
    {
      "value": "2668",
      "label": "заявлений на сайтах утечек (+77%)"
    },
    {
      "value": "98%",
      "label": "атак с кражей данных"
    },
    {
      "value": "28%",
      "label": "раскрытых атак — здравоохранение"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Строить защиту вокруг предотвращения выгрузки данных, а не только шифрования: мониторинг аномальной исходящей передачи.",
    "Средним и небольшим организациям — обеспечить раннее обнаружение и реагирование (EDR/MDR).",
    "Проверять заявления на сайтах утечек перед публичной реакцией."
  ],
  "why_it_matters": "Показывает разрыв между раскрытыми атаками и заявлениями на сайтах утечек и подтверждает, что вымогательство почти всегда начинается с кражи данных.",
  "source_note": "Сайт BlackFog недоступен из среды сбора, полный отчёт — по форме; выжимка по пресс-релизу BlackFog (Business Wire, 19.11.2026) и публикациям SecurityBrief, BetaNews.",
  "en": {
    "title": "2026 Q3 Ransomware Report: Ransomware's Hidden Crisis Comes to Light",
    "tldr": "BlackFog: 353 publicly disclosed ransomware attacks in Q3 2026 — the highest third quarter since 2020 (+20% year on year). Data theft was confirmed in 98% of them; leak sites carried another 2,668 claims (+77%).",
    "summary": "BlackFog's quarterly ransomware report. The company separates confirmed publicly disclosed attacks (353) from group claims on leak sites (2,668), which are not independently verified — adding them up as equivalent events would be misleading. Almost all disclosed attacks involved data exfiltration. Healthcare saw the most disclosed attacks, and more than half were in the US. Small organisations dominate among leak-site victims.",
    "key_findings": [
      "353 publicly disclosed attacks — a Q3 record since tracking began in 2020: +20% year on year and +15% vs Q2.",
      "2,668 attack claims on leak sites (+77% year on year) — not independently verified.",
      "Data theft confirmed in 345 of 353 disclosed attacks (98%).",
      "Healthcare — 100 disclosed attacks (28%); the US — 53% of disclosed incidents.",
      "More than 70% of leak-site victims with known headcount have fewer than 500 employees; the median is 150."
    ],
    "stats": [
      {
        "value": "353",
        "label": "disclosed attacks (+20%)"
      },
      {
        "value": "2,668",
        "label": "leak-site claims (+77%)"
      },
      {
        "value": "98%",
        "label": "attacks with data theft"
      },
      {
        "value": "28%",
        "label": "of disclosed attacks — healthcare"
      }
    ],
    "recommendations": [
      "Build defences around preventing data exfiltration, not just encryption: monitor anomalous outbound transfers.",
      "Mid-sized and small organisations should ensure early detection and response (EDR/MDR).",
      "Verify leak-site claims before reacting publicly."
    ],
    "why_it_matters": "Shows the gap between disclosed attacks and leak-site claims and confirms that ransomware almost always starts with data theft.",
    "source_note": "The BlackFog website was not reachable from the collection environment and the full report is behind a form; summary based on BlackFog's press release (Business Wire, 19 Nov 2026) and SecurityBrief and BetaNews coverage."
  }
});
