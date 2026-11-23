RDB.add({
  "id": "2026-11-halcyon-q3-ransomware-evolution",
  "vendor": "halcyon",
  "title": "Q3 2026 Ransomware Evolution Report",
  "title_ru": "Эволюция вымогательства: III квартал 2026",
  "url": "https://www.halcyon.ai/ransomware-research/reports",
  "pdf_url": "",
  "published": "2026-11-03",
  "date_precision": "day",
  "added": "2026-11-24",
  "type": "ransomware",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "tags": [
    "вымогатели",
    "RaaS",
    "квартальный",
    "сайты утечек"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Q3 2026 по данным Halcyon: 2 766 жертв вымогателей заявлены на сайтах утечек в 122 странах, +39% к прошлому кварталу. Отчёт отслеживает активность RaaS-групп и рейтинг «влиятельности» игроков.",
  "summary": "Ежеквартальный Ransomware Evolution Report от Halcyon Ransomware Research Center: активность RaaS-групп, тренды атак и рейтинги игроков за Q3 2026. Зафиксировано 2 766 заявленных жертв в 122 странах — рост на 39% квартал к кварталу. Картина согласуется с независимыми подсчётами Check Point (2 830 жертв) и GuidePoint (2 760): квартал стал рекордным, а лидерство делят Qilin и быстрорастущая The Gentlemen — выделившаяся из экосистемы Qilin группа, масштабирующаяся быстрее всех современных вымогательских операций за счёт доли 90% аффилиатам и мультиплатформенного шифровальщика.",
  "key_findings": [
    "2 766 заявленных жертв в 122 странах за квартал — +39% к Q2 2026.",
    "Рынок удерживают Qilin и The Gentlemen; по оценке Halcyon, The Gentlemen — самая быстрорастущая вымогательская операция из наблюдавшихся.",
    "The Gentlemen выделились из аффилиата Qilin (ArmCorp) после спора о выплатах; привлекают партнёров долей 90% от выкупа против типичных 70–80%.",
    "Число активных брендов продолжает расти: экосистема дробится при одновременном росте суммарного объёма атак."
  ],
  "stats": [
    {
      "value": "2 766",
      "label": "заявленных жертв в Q3"
    },
    {
      "value": "+39%",
      "label": "рост к Q2 2026"
    },
    {
      "value": "122",
      "label": "страны с жертвами"
    },
    {
      "value": "90%",
      "label": "доля аффилиата у The Gentlemen"
    }
  ],
  "actors": [
    "Qilin",
    "The Gentlemen",
    "Akira",
    "Cl0p"
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
    "Отслеживать не только «крупные» бренды: новые RaaS-группы вроде The Gentlemen достигают высоких объёмов за считанные месяцы.",
    "Проверить устойчивость к сценариям двойного вымогательства: шифрование плюс публикация данных.",
    "Контролировать пограничные устройства и RMM-инструменты — основной вход аффилиатов RaaS.",
    "Малым и средним организациям: базовая гигиена (MFA, патчи, резервные копии) закрывает большинство массовых кампаний."
  ],
  "why_it_matters": "Третий независимый подсчёт (наряду с Check Point и GuidePoint) подтверждает рекордный квартал и фрагментацию рынка: операции правоохранителей не снижают объём, а экономика RaaS с щедрыми долями аффилиатам ускоряет появление новых игроков.",
  "source_note": "Выжимка по анонсу Halcyon Ransomware Research Center и отраслевым СМИ (Kamer Bilişim); полный текст отчёта распространяется через сайт вендора.",
  "en": {
    "tldr": "Q3 2026 per Halcyon: 2,766 ransomware victims claimed on leak sites across 122 countries, +39% quarter over quarter. The report tracks RaaS group activity, attack trends, and threat actor power rankings.",
    "summary": "The quarterly Ransomware Evolution Report from the Halcyon Ransomware Research Center: RaaS group activity, attack trends, and player rankings for Q3 2026. It recorded 2,766 claimed victims in 122 countries — up 39% quarter over quarter. The picture matches independent counts by Check Point (2,830 victims) and GuidePoint (2,760): a record quarter, led by Qilin and the fast-growing The Gentlemen — a group spun out of the Qilin ecosystem that is scaling faster than any modern ransomware operation thanks to a 90% affiliate share and a multi-OS encryptor.",
    "key_findings": [
      "2,766 claimed victims in 122 countries in the quarter — +39% vs Q2 2026.",
      "Qilin and The Gentlemen lead the market; per Halcyon, The Gentlemen is the fastest-scaling ransomware operation observed to date.",
      "The Gentlemen split from a Qilin affiliate (ArmCorp) after a payment dispute; they attract partners with a 90% ransom share versus the typical 70–80%.",
      "The number of active brands keeps growing: the ecosystem is fragmenting while total attack volume rises."
    ],
    "stats": [
      {
        "value": "2,766",
        "label": "claimed victims in Q3"
      },
      {
        "value": "+39%",
        "label": "growth vs Q2 2026"
      },
      {
        "value": "122",
        "label": "countries with victims"
      },
      {
        "value": "90%",
        "label": "affiliate share at The Gentlemen"
      }
    ],
    "recommendations": [
      "Track more than the 'big' brands: new RaaS groups like The Gentlemen reach high volumes within months.",
      "Test resilience against double-extortion scenarios: encryption plus data publication.",
      "Control edge devices and RMM tools — the main entry point for RaaS affiliates.",
      "For SMBs: basic hygiene (MFA, patching, backups) blocks most mass campaigns."
    ],
    "why_it_matters": "A third independent count (alongside Check Point and GuidePoint) confirms a record quarter and market fragmentation: law-enforcement operations are not reducing volume, and RaaS economics with generous affiliate shares accelerate the emergence of new players.",
    "source_note": "Summary based on the Halcyon Ransomware Research Center announcement and industry media (Kamer Bilişim); the full report is distributed via the vendor's website."
  }
});
