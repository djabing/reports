RDB.add({
  "id": "2026-11-reliaquest-q3-ransomware",
  "vendor": "reliaquest",
  "title": "Threat Spotlight: Ransomware and Cyber Extortion in Q3 2026",
  "title_ru": "Вымогательство и кибершантаж в III квартале 2026",
  "url": "https://reliaquest.com/blog/threat-spotlight-ransomware-and-cyber-extortion-in-q3-2026",
  "pdf_url": "",
  "published": "2026-11",
  "date_precision": "month",
  "added": "2026-11-15",
  "type": "ransomware",
  "lang": "en",
  "importance": 2,
  "tags": [
    "квартальный",
    "вымогатели",
    "DLS",
    "Qilin",
    "The Gentlemen"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Число организаций на сайтах утечек выросло на 30%, но 93% прироста дали 43 новые группы, часть которых публикует переработанные или ложные заявления. Реальный рост атак, по оценке ReliaQuest, существенно меньше.",
  "summary": "ReliaQuest предупреждает не путать рост публикаций на DLS с ростом атак. 43 группы, впервые появившиеся в III квартале, обеспечили 93% прироста, тогда как у групп, активных и во II, и в III квартале, число жертв выросло лишь на 1%. Часть новых имён — брокеры данных и группы чистого вымогательства, а не классические операторы шифровальщиков. Группа Storm за 20 дней опубликовала 71 жертву — больше, чем DragonForce и LockBit. Устоявшиеся игроки (Qilin, The Gentlemen) эксплуатируют периметровые системы и уязвимые драйверы для отключения EDR.",
  "key_findings": [
    "+30% организаций на сайтах утечек за квартал.",
    "43 новые группы дали 93% прироста; у «старых» групп рост лишь 1%.",
    "Storm: 71 жертва за 20 дней — больше, чем у DragonForce и LockBit.",
    "Часть новых публикаций — переработанные или ложные заявления.",
    "Qilin и The Gentlemen используют уязвимые драйверы (BYOVD) для отключения EDR."
  ],
  "stats": [
    {
      "value": "+30%",
      "label": "жертв на DLS"
    },
    {
      "value": "43",
      "label": "новые группы"
    },
    {
      "value": "93%",
      "label": "прироста — от новых групп"
    },
    {
      "value": "71",
      "label": "жертва Storm за 20 дней"
    }
  ],
  "actors": [
    "Qilin",
    "The Gentlemen",
    "Storm",
    "DragonForce",
    "LockBit"
  ],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    },
    {
      "id": "T1068",
      "name": "Exploitation for Privilege Escalation"
    },
    {
      "id": "T1562.001",
      "name": "Disable or Modify Tools"
    },
    {
      "id": "T1657",
      "name": "Financial Theft"
    }
  ],
  "recommendations": [
    "Проверять заявления о взломе на DLS перед публичной реакцией — часть из них ложные.",
    "Блокировать загрузку известных уязвимых драйверов (Microsoft Vulnerable Driver Blocklist).",
    "Приоритизировать патчинг периметровых устройств и VPN."
  ],
  "why_it_matters": "Важная поправка к «рекордным» цифрам вымогателей: показатели DLS всё хуже отражают реальное число атак.",
  "source_note": "Выжимка по обзорам отчёта ReliaQuest в СМИ (Cyber Security News, Cyber Daily)."
});
