RDB.add({
  "id": "2026-11-rubrik-ransomware-extortion-economy",
  "vendor": "rubrik",
  "title": "Global Threat Landscape Report 2026: Ransomware Extortion Economy",
  "title_ru": "Rubrik Zero Labs: экономика вымогательства 2026 — медианное восстановление занимает 20 дней",
  "url": "https://zerolabs.rubrik.com/reports/global-threat-landscape-report-2026-ransomware-extortion-economy",
  "pdf_url": "",
  "published": "2026-11-19",
  "date_precision": "day",
  "added": "2026-11-27",
  "type": "ransomware",
  "lang": "en",
  "importance": 2,
  "tier": "key",
  "tags": [
    "вымогатели",
    "годовой",
    "резервные копии",
    "киберустойчивость",
    "реагирование на инциденты",
    "утечки данных"
  ],
  "sectors": [
    "Все отрасли",
    "Здравоохранение",
    "Госсектор"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Rubrik Zero Labs оценила, что медианное восстановление после атаки вымогателей занимает 20 дней, а 28% жертв возвращаются к нормальной работе дольше шести недель. Атакующие всё чаще бьют по системам резервного копирования, а кража данных встречается чаще шифрования.",
  "summary": "Годовой отчёт Rubrik Zero Labs о ландшафте вымогательства в 2026 году построен на внутренней телеметрии, 16 953 публично известных инцидентах за январь–октябрь 2026 года и реальных случаях восстановления. Разрыв между диагностикой и восстановлением велик: 68% результатов криминалистики поступают в течение двух дней после обнаружения атаки, но полностью восстановиться за две недели успевают лишь 32% жертв. Активность 21% выявленных группировок Rubrik наблюдала в средах резервного копирования своих клиентов; на эти группы пришлось 62% публичных атак, а минимум в 7% случаев восстановления атакующие пытались войти в консоль управления резервными копиями. Из 2 931 инцидента с описанием способа вымогательства 67% включали кражу данных и только 45% — шифрование. Рынок остаётся концентрированным: из 100 активных групп восемь дают около половины атрибутированных инцидентов, а Qilin, INC Ransom и The Gentlemen вместе — 30%.",
  "key_findings": [
    "Медианное время восстановления — 20 дней от начала восстановления до закрытия случая и полного возврата систем.",
    "Только 32% жертв полностью восстановились в течение двух недель, хотя 68% результатов криминалистики поступают в первые два дня; 28% восстанавливались дольше шести недель.",
    "Активность 21% выявленных группировок замечена в средах резервного копирования клиентов Rubrik; на эти группы приходится 62% публично известных атак.",
    "Минимум в 7% случаев восстановления атакующие пытались войти в консоль управления резервным копированием.",
    "Из 2 931 инцидента с описанием способа вымогательства 67% включали кражу данных, 45% — шифрование, 13% — и то и другое.",
    "100 активных групп, но восемь из них дают около половины атрибутированных инцидентов; Qilin, INC Ransom и The Gentlemen — 30%, одна Qilin — 15%."
  ],
  "stats": [
    {
      "value": "20 дней",
      "label": "медианное время восстановления"
    },
    {
      "value": "28%",
      "label": "жертв восстанавливались дольше 6 недель"
    },
    {
      "value": "16 953",
      "label": "публичных инцидента за январь–октябрь 2026"
    },
    {
      "value": "67%",
      "label": "инцидентов с описанным вымогательством включали кражу данных"
    }
  ],
  "actors": [
    "Qilin",
    "INC Ransom",
    "The Gentlemen"
  ],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1490",
      "name": "Inhibit System Recovery"
    },
    {
      "id": "T1486",
      "name": "Data Encrypted for Impact"
    }
  ],
  "recommendations": [
    "Изолировать инфраструктуру резервного копирования: отдельная аутентификация и MFA для консоли управления, неизменяемые копии.",
    "Планировать и регулярно отрабатывать полное восстановление, а не только расследование: основное время теряется между диагностикой и возвратом систем.",
    "Готовиться к вымогательству без шифрования: контроль выгрузки данных и план реагирования на утечку."
  ],
  "why_it_matters": "Отчёт смещает фокус с предотвращения на восстановление: даже при быстрой криминалистике бизнес простаивает неделями, а резервные копии сами становятся целью. Кража данных без шифрования делает наличие бэкапов недостаточной защитой.",
  "source_note": "Сайт Rubrik Zero Labs недоступен из среды сборщика; выжимка сделана по публикации Infosecurity Magazine от 20.11.2026 и обзору IT Brief. Название отчёта восстановлено по адресу страницы и может отличаться от официального.",
  "en": {
    "tldr": "Rubrik Zero Labs found that the median ransomware recovery takes 20 days, and 28% of victims need more than six weeks to return to business as usual. Attackers increasingly target backup systems, and data theft is more common than encryption.",
    "summary": "Rubrik Zero Labs' annual report on the 2026 ransomware landscape draws on internal telemetry, 16,953 publicly reported incidents from January to October 2026 and real-world recovery cases. The gap between diagnosis and recovery is wide: 68% of forensic findings arrive within two days of detection, yet only 32% of victims complete full recovery within two weeks. Rubrik observed activity from 21% of the identified ransomware groups inside its customers' backup environments; those groups were responsible for 62% of publicly reported attacks, and at least 7% of recovery cases involved attempts to log into the backup management console. Of 2,931 incidents describing how victims were extorted, 67% involved data theft and only 45% encryption. The market remains concentrated: of 100 active groups, eight account for about half of attributed incidents, and Qilin, INC Ransom and The Gentlemen together for 30%.",
    "key_findings": [
      "Median recovery time is 20 days, from the start of recovery to case closure and full restoration.",
      "Only 32% of victims fully recovered within two weeks, even though 68% of forensic findings arrive within the first two days; 28% took longer than six weeks.",
      "Activity from 21% of the identified groups was detected in Rubrik customers' backup environments; these groups account for 62% of publicly reported attacks.",
      "At least 7% of recovery cases involved attackers attempting to log into the backup management console.",
      "Of 2,931 incidents describing the extortion method, 67% involved data theft, 45% encryption and 13% both.",
      "100 active groups, but eight account for about half of attributed incidents; Qilin, INC Ransom and The Gentlemen for 30%, Qilin alone for 15%."
    ],
    "stats": [
      {
        "value": "20 days",
        "label": "median recovery time"
      },
      {
        "value": "28%",
        "label": "of victims took longer than 6 weeks to recover"
      },
      {
        "value": "16,953",
        "label": "public incidents, January-October 2026"
      },
      {
        "value": "67%",
        "label": "of incidents with a described extortion method involved data theft"
      }
    ],
    "recommendations": [
      "Isolate backup infrastructure: separate authentication and MFA for the management console, immutable copies.",
      "Plan and regularly rehearse full recovery, not just investigation: most time is lost between diagnosis and restoring systems.",
      "Prepare for extortion without encryption: monitor data egress and maintain a data-leak response plan."
    ],
    "why_it_matters": "The report shifts the focus from prevention to recovery: even with fast forensics, businesses are down for weeks, and backups themselves have become a target. Data theft without encryption means backups alone are not sufficient protection.",
    "source_note": "The Rubrik Zero Labs website was not reachable from the collector environment; the summary is based on Infosecurity Magazine's 20 Nov 2026 coverage and an IT Brief article. The report title is inferred from the page URL and may differ from the official one."
  }
});
