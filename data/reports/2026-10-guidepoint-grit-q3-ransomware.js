RDB.add({
  "id": "2026-10-guidepoint-grit-q3-ransomware",
  "vendor": "guidepoint",
  "title": "GRIT Q3 2026 Ransomware & Cyber Threat Insights Report",
  "title_ru": "Вымогатели и киберугрозы: III квартал 2026",
  "url": "https://www.guidepointsecurity.com/blog/ransomware-insights-q3-2026/",
  "pdf_url": "https://www.guidepointsecurity.com/wp-content/uploads/2026/10/GRIT-Q3-2026-Ransomware-Cyber-Threat-Insights-Report.pdf",
  "published": "2026-10",
  "date_precision": "month",
  "added": "2026-10-15",
  "type": "ransomware",
  "lang": "en",
  "importance": 3,
  "tier": "analytics",
  "tags": [
    "ransomware",
    "RaaS",
    "квартальный",
    "статистика"
  ],
  "sectors": [
    "Финансы",
    "ИТ",
    "Здравоохранение",
    "Образование",
    "Госсектор"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Q3 2026 стал рекордным кварталом по числу жертв вымогателей: 2 760 публично заявленных жертв от 112 группировок, +75% год к году. Лидеры — TheGentlemen и Qilin, на них приходится каждая четвёртая жертва.",
  "summary": "Ежеквартальный отчёт команды GuidePoint Research and Intelligence (GRIT) по данным сайтов утечек (DLS) группировок-вымогателей. Рынок продолжает расти и фрагментироваться: число активных группировок выросло почти на половину за год, география атак расширилась на 25 стран. Новый лидер квартала — группировка TheGentlemen, которая впервые обошла Qilin. Независимые подсчёты по тому же периоду (Infosecurity Magazine) дают сопоставимую картину — около 29 атак в день и рост финансового и ИТ-сектора на ~70%.",
  "key_findings": [
    "2 760 жертв в 29 отраслях и 115 странах — рекорд за всю историю наблюдений GRIT.",
    "Рост к Q3 2025: жертвы +75,3%, число активных группировок +47,4%, число атакуемых стран +27,8%.",
    "TheGentlemen — 12,9% жертв, Qilin — 12,6%: вдвоём около четверти всех случаев.",
    "Всего активны 112 различных группировок — экосистема RaaS продолжает дробиться после ликвидаций крупных игроков.",
    "Сторонние оценки: быстрее всего растут атаки на финансы (+72%) и ИТ (+70%); здравоохранение — ~3,3 атаки в день, вдвое больше, чем год назад."
  ],
  "stats": [
    {
      "value": "2 760",
      "label": "жертв за квартал"
    },
    {
      "value": "112",
      "label": "активных группировок"
    },
    {
      "value": "+75%",
      "label": "жертв год к году"
    },
    {
      "value": "115",
      "label": "стран затронуто"
    }
  ],
  "actors": [
    "TheGentlemen",
    "Qilin"
  ],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1486",
      "name": "Data Encrypted for Impact"
    },
    {
      "id": "T1567",
      "name": "Exfiltration Over Web Service"
    }
  ],
  "recommendations": [
    "Проверить готовность к сценарию двойного вымогательства: резервные копии офлайн, план реагирования на утечку данных.",
    "Отслеживать DLS-упоминания своей организации и подрядчиков через TI-платформу.",
    "Приоритизировать закрытие уязвимостей на периметре (VPN, шлюзы) — основной вектор RaaS-аффилиатов.",
    "Учесть рост атак на финансы и ИТ при пересмотре модели угроз на 2027 год."
  ],
  "why_it_matters": "Объём атак не снижается несмотря на операции правоохранителей — рынок просто перераспределяется между новыми брендами. Для планирования защиты важнее TTP аффилиатов, чем название группировки.",
  "source_note": "Выжимка по публичной сводке GRIT и сообщениям отраслевых СМИ (Infosecurity Magazine, Security Boulevard). Сайт вендора закрыт антибот-проверкой; полный PDF доступен по ссылке.",
  "en": {
    "tldr": "Q3 2026 was a record quarter for ransomware victims: 2,760 publicly claimed victims from 112 groups, +75% year on year. The leaders are TheGentlemen and Qilin, which account for one in four victims.",
    "summary": "Quarterly report by the GuidePoint Research and Intelligence Team (GRIT) based on ransomware data leak sites (DLS). The market keeps growing and fragmenting: the number of active groups rose by almost half in a year, and attack geography expanded by 25 countries. The quarter's new leader is TheGentlemen, which overtook Qilin for the first time. Independent counts for the same period (Infosecurity Magazine) give a comparable picture — about 29 attacks per day and ~70% growth in the financial and IT sectors.",
    "key_findings": [
      "2,760 victims in 29 industries and 115 countries — a record in GRIT's history of observations.",
      "Growth vs Q3 2025: victims +75.3%, active groups +47.4%, targeted countries +27.8%.",
      "TheGentlemen — 12.9% of victims, Qilin — 12.6%: together about a quarter of all cases.",
      "112 distinct groups active — the RaaS ecosystem keeps fragmenting after takedowns of major players.",
      "Third-party estimates: attacks on finance (+72%) and IT (+70%) are growing fastest; healthcare sees ~3.3 attacks a day, twice as many as a year ago."
    ],
    "stats": [
      {
        "value": "2,760",
        "label": "victims in the quarter"
      },
      {
        "value": "112",
        "label": "active groups"
      },
      {
        "value": "+75%",
        "label": "victims year on year"
      },
      {
        "value": "115",
        "label": "countries affected"
      }
    ],
    "recommendations": [
      "Check readiness for double extortion: offline backups and a data-leak response plan.",
      "Monitor DLS mentions of your organisation and contractors via a TI platform.",
      "Prioritise closing perimeter vulnerabilities (VPN, gateways) — the main vector of RaaS affiliates.",
      "Factor in the growth of attacks on finance and IT when revising the 2027 threat model."
    ],
    "why_it_matters": "Attack volume is not falling despite law-enforcement operations — the market simply redistributes among new brands. For defence planning, affiliate TTPs matter more than the group's name.",
    "source_note": "Summary based on GRIT's public summary and industry media reports (Infosecurity Magazine, Security Boulevard). The vendor's website is behind an anti-bot check; the full PDF is available via the link."
  }
});
