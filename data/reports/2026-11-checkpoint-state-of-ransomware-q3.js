RDB.add({
  "id": "2026-11-checkpoint-state-of-ransomware-q3",
  "vendor": "checkpoint",
  "title": "The State of Ransomware Q3 2026",
  "title_ru": "Состояние вымогательства: III квартал 2026",
  "url": "https://research.checkpoint.com/2026/the-state-of-ransomware-q3-2026/",
  "pdf_url": "https://engage.checkpoint.com/state-of-ransomware-q3-2026",
  "published": "2026-11-18",
  "date_precision": "day",
  "added": "2026-11-24",
  "type": "ransomware",
  "lang": "en",
  "importance": 3,
  "tier": "analytics",
  "tags": [
    "вымогатели",
    "RaaS",
    "квартальный",
    "статистика"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Q3 2026 стал рекордным кварталом по числу жертв вымогателей: 2 830 организаций опубликованы на сайтах утечек. Экосистема дробится: доля топ-10 группировок упала до 49%, и впервые больше половины жертв пришлось на игроков вне первой десятки.",
  "summary": "Квартальный отчёт Check Point Research по данным сайтов утечек (DLS) группировок-вымогателей. Объём атак достиг исторического максимума — 2 830 жертв за квартал (июль — 964, август — 1 042, сентябрь — 824), а рынок продолжил фрагментироваться: 117 активных брендов против 91 в Q2, из них 42 впервые заявили о жертвах именно в этом квартале. Qilin удержал лидерство с минимальным отрывом от The Gentlemen, LockBit впервые выбыл из топ-10. Платежи разошлись по динамике: средний платёж упал на 45% до чуть более $1 млн, медианный вырос на 167% до $400 тыс. Ряд крупных организаций — Stadler Rail, правительство земли Берлин, Manchester Airports Group — публично отказались платить выкуп.",
  "key_findings": [
    "2 830 жертв на сайтах утечек — самый высокий поквартальный объём за всю историю наблюдений Check Point.",
    "Доля топ-10 группировок падает третий квартал подряд: 71% в Q1 → 58% в Q2 → 49% в Q3; впервые большинство жертв — у групп вне первой десятки.",
    "117 активных вымогательских брендов (было 91 в Q2); 51 из них не заявлял жертв в Q2, а 42 дебютировали в Q3.",
    "Qilin вернул лидерство в июле–августе, уступил The Gentlemen в сентябре, но по итогам квартала остался первым с минимальным разрывом.",
    "LockBit продолжил падение и впервые вышел из топ-10.",
    "Средний платёж упал на 45% квартал к кварталу до чуть более $1 млн, медианный вырос на 167% до $400 тыс. — рутинные платежи и крупные вымогательства движутся в противоположных направлениях.",
    "Конфликт ShinyHunters и Clop: ShinyHunters взломали и испортили сайт утечек Clop, потребовав публичных извинений и платежа."
  ],
  "stats": [
    {
      "value": "2 830",
      "label": "жертв за квартал — рекорд"
    },
    {
      "value": "49%",
      "label": "доля топ-10 групп (было 71% в Q1)"
    },
    {
      "value": "117",
      "label": "активных вымогательских брендов"
    },
    {
      "value": "−45%",
      "label": "средний платёж к Q2 (~$1 млн)"
    }
  ],
  "actors": [
    "Qilin",
    "The Gentlemen",
    "LockBit",
    "ShinyHunters",
    "Clop"
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
    "Планировать защиту не под конкретные бренды, а под TTP аффилиатов: рынок дробится, и «мелкие» группы в совокупности собирают уже большинство жертв.",
    "Проверить готовность к двойному вымогательству: офлайн-резервные копии и отработанный план реагирования на утечку — кейсы Stadler Rail и правительства Берлина показывают, что отказ от платежа становится рабочей стратегией.",
    "Мониторить сайты утечек на упоминания своей организации и подрядчиков через TI-платформу.",
    "Учесть в бюджетном планировании расхождение среднего и медианного платежа: вероятность рядового платежа падает, но цена крупного инцидента растёт."
  ],
  "why_it_matters": "Фрагментация рынка означает, что списки «крупных группировок» больше не описывают основной риск: половина жертв — у десятков мелких брендов, часть из которых существует один квартал. Защита должна строиться на поведении и векторах доступа, а не на атрибуции к конкретной группировке.",
  "source_note": "Выжимка по публикации Check Point Research от 18.11.2026; полный отчёт доступен на сайте вендора.",
  "en": {
    "tldr": "Q3 2026 was a record quarter for ransomware: 2,830 victim organisations were published on data leak sites. The ecosystem keeps fragmenting: the top 10 groups' share fell to 49%, and for the first time groups outside the top ten accounted for the majority of victims.",
    "summary": "Quarterly report by Check Point Research based on ransomware data leak sites (DLS). Attack volume hit an all-time high — 2,830 victims in the quarter (July 964, August 1,042, September 824) — while the market fragmented further: 117 active brands versus 91 in Q2, 42 of which claimed their first-ever victims this quarter. Qilin held the lead by a narrow margin over The Gentlemen; LockBit fell out of the top ten for the first time. Payment dynamics diverged: the average payment fell 45% to just over $1M, while the median rose 167% to $400K. Several major organisations — Stadler Rail, the Berlin state government, Manchester Airports Group — publicly refused to pay.",
    "key_findings": [
      "2,830 victims on leak sites — the highest quarterly volume in Check Point's observation history.",
      "The top 10 groups' share fell for the third consecutive quarter: 71% in Q1 → 58% in Q2 → 49% in Q3; for the first time, the majority of victims belong to groups outside the top ten.",
      "117 active ransomware brands (up from 91 in Q2); 51 had not claimed victims in Q2, and 42 debuted in Q3.",
      "Qilin regained the lead in July–August, lost it to The Gentlemen in September, but finished the quarter first by a narrow gap.",
      "LockBit's decline continued; it dropped out of the top ten for the first time.",
      "Average payment fell 45% quarter over quarter to just over $1M, while the median rose 167% to $400K — routine payments and the largest extortion demands are moving in opposite directions.",
      "ShinyHunters–Clop dispute: ShinyHunters reportedly breached and defaced Clop's leak site, demanding a public apology and payment."
    ],
    "stats": [
      {
        "value": "2,830",
        "label": "victims in the quarter — a record"
      },
      {
        "value": "49%",
        "label": "top-10 groups' share (was 71% in Q1)"
      },
      {
        "value": "117",
        "label": "active ransomware brands"
      },
      {
        "value": "−45%",
        "label": "average payment vs Q2 (~$1M)"
      }
    ],
    "recommendations": [
      "Plan defences around affiliate TTPs rather than specific brands: the market is fragmenting, and 'small' groups collectively account for the majority of victims.",
      "Prepare for double extortion: offline backups and a rehearsed leak-response plan — the Stadler Rail and Berlin government cases show that refusing to pay is becoming a workable strategy.",
      "Monitor leak sites for mentions of your organisation and contractors via a TI platform.",
      "Factor the average/median payment divergence into budgeting: the likelihood of a routine payment is falling, but the cost of a major incident is rising."
    ],
    "why_it_matters": "Market fragmentation means lists of 'major groups' no longer describe the main risk: half of the victims belong to dozens of small brands, some existing for a single quarter. Defence must be built on behaviour and access vectors, not attribution to a specific group.",
    "source_note": "Summary based on the Check Point Research publication of 18 Nov 2026; the full report is available on the vendor's website."
  }
});
