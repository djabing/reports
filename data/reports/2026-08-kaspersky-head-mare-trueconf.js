RDB.add({
  "id": "2026-08-kaspersky-head-mare-trueconf",
  "vendor": "kaspersky",
  "title": "Organizations face new attacks via unpatched TrueConf videoconferencing servers",
  "title_ru": "Head Mare атакует организации через непропатченные серверы TrueConf",
  "url": "https://securelist.com/head-mare-targets-trueconf-server-with-phantomcore/120988/",
  "pdf_url": "",
  "published": "2026-08-12",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "apt",
  "lang": "en",
  "importance": 3,
  "tags": [
    "APT",
    "Россия",
    "TrueConf",
    "цепочка поставок",
    "видеосвязь"
  ],
  "sectors": [
    "Промышленность",
    "Энергетика",
    "Транспорт",
    "ИТ и разработка"
  ],
  "regions": [
    "Россия"
  ],
  "tldr": "Head Mare эксплуатирует уязвимости непропатченных серверов TrueConf: участникам конференций раздаются клиенты-установщики, которые вместе с обычной функциональностью ставят бэкдоры PhantomCore и PhantomGraph.",
  "summary": "Многоэтапная атака против российских компаний в приборостроении, электронике, транспорте, энергетике, ИТ и разработке ПО. Уязвимости исправлены в обновлении TrueConf Server от 18 июня 2026 (версии 5.3.9, 5.4.9, 5.5.5).",
  "key_findings": [
    "Эксплуатация уязвимостей непропатченных серверов TrueConf.",
    "Подменённые клиенты TrueConf устанавливают PhantomCore и PhantomGraph.",
    "Цели — российские компании приборостроения, электроники, транспорта, энергетики, ИТ.",
    "Исправлено в TrueConf Server 5.3.9, 5.4.9, 5.5.5 (18.06.2026)."
  ],
  "stats": [],
  "actors": [
    "Head Mare"
  ],
  "malware": [
    "PhantomCore",
    "PhantomGraph"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    },
    {
      "id": "T1195.002",
      "name": "Compromise Software Supply Chain"
    }
  ],
  "recommendations": [
    "Срочно обновить TrueConf Server до 5.3.9 / 5.4.9 / 5.5.5 или новее.",
    "Проверить целостность клиентов TrueConf, распространяемых через сервер.",
    "Найти IoC PhantomCore и PhantomGraph."
  ],
  "why_it_matters": "Прямой риск для российских организаций, использующих отечественную ВКС.",
  "source_note": "Выжимка по Securelist, пресс-релизу Kaspersky и обзору The Hacker News."
});
