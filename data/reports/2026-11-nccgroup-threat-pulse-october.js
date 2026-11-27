RDB.add({
  "id": "2026-11-nccgroup-threat-pulse-october",
  "vendor": "nccgroup",
  "title": "October 2026 Cyber Threat Intelligence Report",
  "title_ru": "NCC Group: обзор угроз за октябрь 2026 — 1 049 атак вымогателей, рост на 23%",
  "url": "https://insights.nccgroup.com/l/898251/2026-11-19/31p6lv6/898251/1795085578SO8oe8pJ/October_2026_Cyber_Threat_Intelligence_Report.pdf",
  "pdf_url": "https://insights.nccgroup.com/l/898251/2026-11-19/31p6lv6/898251/1795085578SO8oe8pJ/October_2026_Cyber_Threat_Intelligence_Report.pdf",
  "published": "2026-11-25",
  "date_precision": "day",
  "added": "2026-11-27",
  "type": "ransomware",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "tags": [
    "вымогатели",
    "ежемесячный",
    "статистика",
    "сайты утечек",
    "новые группы",
    "ИИ в атаках"
  ],
  "sectors": [
    "Промышленность",
    "Потребительский сектор",
    "Здравоохранение",
    "ИТ"
  ],
  "regions": [
    "Глобально",
    "Северная Америка",
    "Европа",
    "Азия",
    "Южная Америка"
  ],
  "tldr": "По данным NCC Group, в октябре 2026 года вымогатели заявили о 1 049 атаках — на 23% больше, чем в сентябре, сразу после рекордного III квартала. Лидируют The Gentlemen (139 жертв) и новая группа N0n (133), Qilin — третья (131).",
  "summary": "Ежемесячный отчёт NCC Group по заявленным атакам вымогателей (по публикациям на сайтах утечек). Рост в октябре авторы связывают с использованием ИИ для быстрого поиска уязвимостей и цепочек атак и считают его ранним признаком среды, где серьёзные уязвимости обнаруживаются и превращаются в оружие быстрее. Первое место заняла The Gentlemen (13% всех атак), второе — N0n, впервые замеченная в сентябре 2026 года; в первую десятку также вошли появившиеся в 2026 году Booba Project, Emperador и Wallstreet. Происхождение новых брендов не установлено: NCC Group называет их новыми брендами, а не новыми злоумышленниками, поскольку за ними могут стоять опытные аффилиаты, брокеры доступа и разработчики. Чаще всего атакам подвергалась промышленность (31%), по регионам — Северная Америка (46%).",
  "key_findings": [
    "1 049 заявленных атак вымогателей в октябре — на 23% больше, чем в сентябре; рост последовал за рекордным по объёму III кварталом 2026 года.",
    "The Gentlemen — самая активная группа месяца: 139 жертв, или 13% от общего числа.",
    "N0n, впервые замеченная в сентябре 2026 года, заявила о 133 жертвах; Qilin — третья со 131 атакой.",
    "В топ-10 вошли и другие новые группы 2026 года: Booba Project (29 атак), Emperador (27) и Wallstreet (22); ни одна не связана достоверно с конкретной страной или предшественником.",
    "Отрасли: промышленность — 31% атак, потребительский сектор — 19%, здравоохранение — 12%, ИТ — 10%.",
    "Регионы: Северная Америка — 46%, Европа — 23%, Азия — 15%, Южная Америка — 8%."
  ],
  "stats": [
    {
      "value": "1 049",
      "label": "заявленных атак вымогателей в октябре"
    },
    {
      "value": "+23%",
      "label": "рост к сентябрю 2026"
    },
    {
      "value": "139",
      "label": "жертв у The Gentlemen (13%)"
    },
    {
      "value": "31%",
      "label": "атак пришлось на промышленность"
    }
  ],
  "actors": [
    "The Gentlemen",
    "N0n",
    "Qilin",
    "Booba Project",
    "Emperador",
    "Wallstreet"
  ],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Сократить время от публикации уязвимости до исправления на периметре: авторы связывают рост атак с ускоренной эксплуатацией с помощью ИИ.",
    "Строить защиту на поведении и TTP аффилиатов, а не на списке известных брендов: новые группы быстро входят в первую десятку.",
    "Промышленным компаниям и организациям Северной Америки — проверить готовность к двойному вымогательству: резервные копии и план реагирования на утечку."
  ],
  "why_it_matters": "Рост после рекордного квартала и быстрый взлёт безымянных новых брендов показывают, что порог создания вымогательской группировки низок, а ИИ ускоряет эксплуатацию уязвимостей. Атрибуция по бренду всё меньше помогает в оценке риска.",
  "source_note": "Сайт NCC Group недоступен из среды сборщика; выжимка сделана по публикации Infosecurity Magazine от 25.11.2026, где приведены данные отчёта и ссылка на PDF. Название отчёта восстановлено по имени PDF-файла. Данные — заявленные атаки по сайтам утечек.",
  "en": {
    "tldr": "According to NCC Group, ransomware actors claimed 1,049 attacks in October 2026, up 23% from September, immediately after a record Q3. The Gentlemen (139 victims) and the new group N0n (133) led, with Qilin third (131).",
    "summary": "NCC Group's monthly report on claimed ransomware attacks, based on leak-site postings. The researchers link October's rise to the growing use of AI to rapidly identify vulnerabilities and chained attack paths, and see it as an early indicator of an environment where serious vulnerabilities are discovered and weaponised faster. The Gentlemen ranked first (13% of all attacks), followed by N0n, first observed in September 2026; other 2026 newcomers in the top ten included Booba Project, Emperador and Wallstreet. Their origins remain unknown: NCC Group describes them as newly observed brands rather than entirely new threat actors, since experienced affiliates, access brokers or developers may be behind them. Industrials was the most targeted sector (31%) and North America the most targeted region (46%).",
    "key_findings": [
      "1,049 claimed ransomware attacks in October, up 23% from September; the rise followed the highest-ever quarterly volume in Q3 2026.",
      "The Gentlemen was the most active group of the month with 139 victims, or 13% of the total.",
      "N0n, first observed in September 2026, claimed 133 victims; Qilin was third with 131 attacks.",
      "Other groups established in 2026 also made the top ten: Booba Project (29 attacks), Emperador (27) and Wallstreet (22); none has been conclusively linked to a specific country or predecessor.",
      "Sectors: industrials 31% of attacks, consumer discretionary 19%, healthcare 12%, IT 10%.",
      "Regions: North America 46%, Europe 23%, Asia 15%, South America 8%."
    ],
    "stats": [
      {
        "value": "1,049",
        "label": "claimed ransomware attacks in October"
      },
      {
        "value": "+23%",
        "label": "increase vs September 2026"
      },
      {
        "value": "139",
        "label": "victims claimed by The Gentlemen (13%)"
      },
      {
        "value": "31%",
        "label": "of attacks hit industrials"
      }
    ],
    "recommendations": [
      "Shorten the time from vulnerability disclosure to patching on the perimeter: the authors link the surge to AI-accelerated exploitation.",
      "Base defences on affiliate behaviour and TTPs rather than a list of known brands: new groups reach the top ten quickly.",
      "Industrial companies and North American organisations should check double-extortion readiness: backups and a data-leak response plan."
    ],
    "why_it_matters": "A further rise after a record quarter and the rapid emergence of unattributed new brands show how low the barrier to launching a ransomware operation is, while AI speeds up exploitation. Brand-based attribution is becoming less useful for risk assessment.",
    "source_note": "The NCC Group website was not reachable from the collector environment; the summary is based on Infosecurity Magazine's 25 Nov 2026 coverage, which cites the report and links its PDF. The report title is inferred from the PDF file name. Figures are claimed attacks from leak sites."
  }
});
