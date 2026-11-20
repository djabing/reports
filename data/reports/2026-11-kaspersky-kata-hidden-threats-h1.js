RDB.add({
  "id": "2026-11-kaspersky-kata-hidden-threats-h1",
  "vendor": "kaspersky",
  "title": "Два миллиона скрытых киберугроз за полгода: «Лаборатория Касперского» рассказала, как злоумышленники маскируются в корпоративных сетях",
  "title_ru": "KATA: 2 млн попыток использования хакерских инструментов и утилит для пентеста за апрель–сентябрь 2026",
  "url": "https://www.kaspersky.ru/about/press-releases/dva-milliona-skrytyh-kiberugroz-za-polgoda-laboratoriya-kasperskogo-rasskazala-kak-zloumyshlenniki-maskiruyutsya-v-korporativnyh-setyah",
  "pdf_url": "",
  "published": "2026-11-03",
  "date_precision": "day",
  "added": "2026-11-20",
  "type": "landscape",
  "lang": "ru",
  "importance": 1,
  "tier": "analytics",
  "tags": [
    "статистика",
    "пост-эксплуатация",
    "легитимные инструменты",
    "сетевая телеметрия"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "С апреля по сентябрь 2026 года Kaspersky Anti Targeted Attack зафиксировал более 2 млн попыток использования хакерских инструментов и утилит для пентеста в корпоративных сетях. Чаще всего встречались Cobalt Strike, NetExec и SQLMap.",
  "summary": "Статистика решения KATA за полгода (апрель–сентябрь 2026, весь мир): злоумышленники применяют инструменты пентеста, чтобы незаметно перемещаться по сети, собирать учётные данные и получать доступ к ценным ресурсам; часть инструментов маскирует трафик под легитимный. Лидеры: Cobalt Strike (около 136 тыс. срабатываний) — от закрепления до горизонтального перемещения; NetExec (около 130 тыс.) — разведка и доступ к системам; SQLMap (около 108 тыс.) — эксплуатация SQL-инъекций в веб-приложениях. База правил сетевого обнаружения KATA выросла почти до 12 500 сигнатур, ежедневно решение фиксирует в среднем более 300 тыс. потенциальных атак.",
  "key_findings": [
    "Более 2 млн попыток использования хакерских инструментов и утилит для пентеста за апрель–сентябрь 2026.",
    "Cobalt Strike — около 136 тыс. срабатываний: закрепление и горизонтальное перемещение.",
    "NetExec — около 130 тыс.: разведка в сети и получение доступа к системам.",
    "SQLMap — около 108 тыс.: поиск и эксплуатация SQL-инъекций.",
    "Часть инструментов маскирует трафик под легитимный, что затрудняет обнаружение средствами защиты конечных точек."
  ],
  "stats": [
    {
      "value": ">2 млн",
      "label": "попыток за 6 месяцев"
    },
    {
      "value": "~136 тыс.",
      "label": "срабатываний на Cobalt Strike"
    },
    {
      "value": "~12 500",
      "label": "сигнатур сетевого обнаружения"
    },
    {
      "value": ">300 тыс.",
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
    "T1190",
    "T1071"
  ],
  "recommendations": [
    "Мониторить сетевой трафик, чтобы выявлять активность, невидимую для защиты конечных точек.",
    "Давать SOC актуальные данные об угрозах, тактиках и инструментах атакующих.",
    "Регулярно обучать специалистов ИБ анализу и обнаружению угроз."
  ],
  "why_it_matters": "Показывает масштаб использования легитимных инструментов пентеста в реальных атаках и важность сетевого мониторинга в дополнение к защите конечных точек.",
  "source_note": "Выжимка по пресс-релизу «Лаборатории Касперского» от 03.11.2026 (данные Kaspersky Anti Targeted Attack); пресс-релиз частично рекламный, в выжимку вошли только данные об угрозах.",
  "en": {
    "title": "Two million hidden cyberthreats in six months: Kaspersky explains how attackers hide in corporate networks",
    "tldr": "From April to September 2026 Kaspersky Anti Targeted Attack recorded more than 2 million attempts to use hacking tools and penetration-testing utilities in corporate networks. Cobalt Strike, NetExec and SQLMap were the most frequent.",
    "summary": "Six months of KATA statistics (April to September 2026, worldwide): attackers use pentest tools to move through networks unnoticed, collect credentials and reach valuable resources; some tools disguise traffic as legitimate. Top tools: Cobalt Strike (about 136,000 detections), used from persistence to lateral movement; NetExec (about 130,000), for network reconnaissance and system access; SQLMap (about 108,000), for exploiting SQL injection in web applications. KATA's network detection rule base has grown to almost 12,500 signatures, and the solution records more than 300,000 potential attacks a day on average.",
    "key_findings": [
      "More than 2 million attempts to use hacking tools and pentest utilities in April to September 2026.",
      "Cobalt Strike: about 136,000 detections, for persistence and lateral movement.",
      "NetExec: about 130,000, for network reconnaissance and system access.",
      "SQLMap: about 108,000, for finding and exploiting SQL injection.",
      "Some tools disguise traffic as legitimate, making detection by endpoint protection harder."
    ],
    "stats": [
      {
        "value": ">2M",
        "label": "attempts in 6 months"
      },
      {
        "value": "~136K",
        "label": "Cobalt Strike detections"
      },
      {
        "value": "~12,500",
        "label": "network detection signatures"
      },
      {
        "value": ">300K",
        "label": "potential attacks per day"
      }
    ],
    "recommendations": [
      "Monitor network traffic to spot activity invisible to endpoint protection.",
      "Give the SOC up-to-date intelligence on attacker tactics and tools.",
      "Train security staff regularly in threat analysis and detection."
    ],
    "why_it_matters": "Shows how widely legitimate pentest tools are used in real attacks and why network monitoring matters alongside endpoint protection.",
    "source_note": "Summary based on Kaspersky's press release of 3 Nov 2026 (Kaspersky Anti Targeted Attack data); the release is partly promotional, only threat data was used."
  }
});
