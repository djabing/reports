RDB.add({
  "id": "2026-11-kaspersky-kata-lateral-movement-tools",
  "vendor": "kaspersky",
  "title": "2 million hacking tool detections in six months: Kaspersky reveals the most used lateral movement utilities",
  "title_ru": "2 млн срабатываний на хакерские инструменты за полгода: какие утилиты чаще всего используют для перемещения по сети",
  "url": "https://www.kaspersky.com/about/press-releases/2-million-hacking-tool-detections-in-six-months-kaspersky-reveals-the-most-used-lateral-movement-utilities",
  "pdf_url": "",
  "published": "2026-11-02",
  "date_precision": "day",
  "added": "2026-11-27",
  "type": "apt",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "tags": [
    "NDR",
    "боковое перемещение",
    "хакерские инструменты"
  ],
  "sectors": [
    "Крупный бизнес"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "По данным Kaspersky Anti Targeted Attack (KATA) за апрель–сентябрь 2026 года зафиксировано 2 171 513 попыток использования хакерских инструментов. Чаще всего встречались Cobalt Strike, NetExec и SQLMap.",
  "summary": "Статистика срабатываний NDR-решения KATA (около 12 500 сетевых правил, в среднем 312 705 потенциальных атак в день) за апрель–сентябрь 2026 года: 2 171 513 попыток использования хакерских инструментов. Лидеры — HackTool.Cobalt (136 084 срабатывания, пост-эксплуатация и боковое перемещение), HackTool.NetExec (129 560, разведка и получение доступа к плохо защищённым сетевым сервисам) и HackTool.SQLMap (107 697, эксплуатация SQL-инъекций). Kaspersky отмечает, что шпионские группировки всё чаще избегают заметного ВПО и используют легитимные административные утилиты двойного назначения, маскируясь под обычный трафик.",
  "key_findings": [
    "За апрель–сентябрь 2026 года KATA зафиксировала 2 171 513 попыток использования хакерских инструментов.",
    "Cobalt Strike — 136 084 срабатывания, NetExec — 129 560, SQLMap — 107 697.",
    "В среднем KATA выявляет 312 705 потенциальных атак в день.",
    "Атакующие всё чаще используют утилиты двойного назначения вместо обнаруживаемого ВПО, чтобы перемещаться по домену незаметно."
  ],
  "stats": [
    {
      "value": "2 171 513",
      "label": "попыток использования хакерских инструментов за полгода"
    },
    {
      "value": "136 084",
      "label": "срабатываний на Cobalt Strike"
    },
    {
      "value": "312 705",
      "label": "потенциальных атак в день"
    }
  ],
  "actors": [],
  "malware": [
    "Cobalt Strike",
    "NetExec",
    "SQLMap"
  ],
  "cves": [],
  "ttps": [
    "T1021",
    "T1046",
    "T1190"
  ],
  "recommendations": [
    "Дополнять защиту конечных точек анализом сетевого трафика (NDR) для выявления скрытого бокового перемещения.",
    "Контролировать использование административных и пентест-утилит в инфраструктуре и разграничивать санкционированные проверки."
  ],
  "why_it_matters": "Показывает, какие инструменты двойного назначения реально встречаются в корпоративных сетях, и помогает приоритизировать сетевые детекты.",
  "source_note": "Выжимка по англоязычному пресс-релизу Kaspersky от 02.11.2026. Статистика по пользователям KSN; часть срабатываний может относиться к санкционированным проверкам защищённости. Материал носит отчасти продуктовый характер.",
  "en": {
    "tldr": "Kaspersky Anti Targeted Attack (KATA) recorded 2,171,513 hacking tool usage attempts between April and September 2026. Cobalt Strike, NetExec and SQLMap were the most frequent.",
    "summary": "Detection statistics from the KATA NDR solution (about 12,500 network rules, an average of 312,705 potential attacks detected daily) for April–September 2026: 2,171,513 hacking tool usage attempts. Top tools were HackTool.Cobalt (136,084 detections, post-exploitation and lateral movement), HackTool.NetExec (129,560, reconnaissance and access to poorly secured network services) and HackTool.SQLMap (107,697, SQL injection exploitation). Kaspersky notes that espionage groups increasingly avoid detectable malware and use legitimate dual-use administrative utilities, blending into normal traffic.",
    "key_findings": [
      "KATA recorded 2,171,513 hacking tool usage attempts in April–September 2026.",
      "Cobalt Strike had 136,084 detections, NetExec 129,560 and SQLMap 107,697.",
      "KATA detects an average of 312,705 potential attacks per day.",
      "Attackers increasingly use dual-use utilities instead of detectable malware to move through the domain unnoticed."
    ],
    "stats": [
      {
        "value": "2,171,513",
        "label": "hacking tool usage attempts in six months"
      },
      {
        "value": "136,084",
        "label": "Cobalt Strike detections"
      },
      {
        "value": "312,705",
        "label": "potential attacks per day"
      }
    ],
    "recommendations": [
      "Complement endpoint protection with network traffic analysis (NDR) to expose stealthy lateral movement.",
      "Monitor the use of administrative and pentest utilities and separate authorised assessments."
    ],
    "why_it_matters": "Shows which dual-use tools actually appear in corporate networks and helps prioritise network detections.",
    "source_note": "Summary based on Kaspersky's English-language press release of 2 Nov 2026. KSN-based statistics; some detections may relate to authorised security assessments. The material is partly product-oriented."
  }
});
