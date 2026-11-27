RDB.add({
  "id": "2026-11-armadin-opportunity-intelligence",
  "vendor": "armadin",
  "title": "Opportunity Intelligence: Reducing Exposure to Adversaries",
  "title_ru": "Armadin: 88% критичных и высоких находок в живых ИИ-атаках не видны во внешних источниках",
  "url": "https://armadin.com/opportunity-intelligence-research",
  "pdf_url": "",
  "published": "2026-11-02",
  "date_precision": "day",
  "added": "2026-11-27",
  "type": "vulnerabilities",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "tags": [
    "поверхность атаки",
    "уязвимости",
    "учётные данные",
    "секреты",
    "уязвимости нулевого дня",
    "неперсональные учётные записи"
  ],
  "sectors": [
    "Кросс-отраслевой"
  ],
  "regions": [],
  "tldr": "Armadin провела агентные ИИ-атаки на рабочие системы клиентов почти из десятка отраслей и выяснила, что 88% критичных и высоких находок не выявились бы через бюллетени вендоров и другие внешние источники. У 96% клиентов нашлась хотя бы одна критичная проблема, и 93% серьёзных находок организации могут закрыть сами.",
  "summary": "Первый исследовательский отчёт Armadin (компания Кевина Мандиа) основан на агентных атаках против живых производственных сред в течение 2026 года; число организаций и находок не раскрыто. Большинство незаметных для внешних источников проблем — дефекты собственного ПО клиентов (67% критичных и 78% высоких) и продукты вендоров, развёрнутые так, как не описывает ни один бюллетень (24% и 22%); остальное — найденные Armadin уязвимости нулевого дня. Около 70% серьёзных находок доступны без учётной записи, и большинство цепочек атак начиналось с неаутентифицированной позиции; в 71% случаев использованные учётные данные принадлежали неперсональным идентичностям и часто хранились в читаемом виде. Для исправления в 51% случаев требовалась правка кода, в 43% — изменение настройки или политики, в 32% — ротация учётных данных.",
  "key_findings": [
    "96% клиентов имели как минимум одну критичную находку, требующую экстренного исправления.",
    "88% критичных и высоких находок не были бы выявлены через бюллетени вендоров и другие внешние источники.",
    "Дефекты собственного ПО составили 67% критичных и 78% высоких «невидимых» находок; нестандартно развёрнутые продукты вендоров — 24% и 22%; 9% критичных — уязвимости нулевого дня, найденные Armadin.",
    "Около 70% серьёзных находок доступны без учётной записи; 82% документированных цепочек начинались без учётных данных, и в более чем 70% сред критичный результат достигался за три шага или меньше.",
    "71% учётных данных в цепочках атак принадлежали приложениям и сервисным учётным записям; почти 90% из них были доступны в репозиториях, конфигурациях, бэкапах, журналах или облачных настройках.",
    "93% серьёзных находок можно устранить без участия третьих сторон; 43% закрываются изменением настройки или политики."
  ],
  "stats": [
    {
      "value": "88%",
      "label": "критичных и высоких находок вне внешних источников"
    },
    {
      "value": "96%",
      "label": "клиентов с хотя бы одной критичной находкой"
    },
    {
      "value": "71%",
      "label": "учётных данных в цепочках — неперсональные"
    },
    {
      "value": "93%",
      "label": "серьёзных находок устранимы без третьих сторон"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    },
    {
      "id": "T1552.001",
      "name": "Unsecured Credentials: Credentials In Files"
    },
    {
      "id": "T1078",
      "name": "Valid Accounts"
    }
  ],
  "recommendations": [
    "Принимать решения об исправлении на основе измеренной экспозиции собственной среды, а не только по опубликованным бюллетеням и CVE.",
    "Управлять учётными данными сервисных учётных записей так же строго, как пользовательскими: выдача, хранение, ротация; проверять конвейеры и репозитории на утечки секретов.",
    "Проводить изменения конфигурации по более быстрому согласованию, чем выпуск кода."
  ],
  "why_it_matters": "Программы управления уязвимостями, опирающиеся на CVE и бюллетени вендоров, не видят большей части реально эксплуатируемой поверхности атаки. Armadin с высокой уверенностью ожидает, что ИИ удешевит поиск путей атаки и доля использованной экспозиции вырастет в ближайшие 12 месяцев.",
  "source_note": "Сайт Armadin недоступен из среды сборщика; выжимка сделана по официальному пресс-релизу Armadin (PR Newswire, 02.11.2026) и публикации Infosecurity Magazine. Данные вендора; число клиентов и находок не раскрыто.",
  "en": {
    "tldr": "Armadin ran agentic AI attacks against clients' live production systems across nearly a dozen industries and found that 88% of critical and high findings would not have been identified through vendor advisories or other external sources. 96% of clients had at least one critical finding, and 93% of severe findings are within the organisation's own power to fix.",
    "summary": "Armadin's first research report (the company led by Kevin Mandia) is based on agentic attacks against live production environments throughout 2026; the number of organisations and findings was not disclosed. Most issues invisible to external sources were defects in clients' own software (67% of critical and 78% of high) and vendor products deployed in ways no advisory describes (24% and 22%); the rest were zero-days found by Armadin. Nearly 70% of severe findings were reachable without an account, and most attack chains started from an unauthenticated position; 71% of credentials used belonged to non-human identities and were often stored in readable form. Fixes required shipping application code in 51% of cases, changing a setting or policy in 43% and rotating a credential in 32%.",
    "key_findings": [
      "96% of clients had at least one critical finding requiring emergency remediation.",
      "88% of critical and high findings would not have been identified via vendor advisories or other external sources.",
      "Defects in in-house software made up 67% of critical and 78% of high 'invisible' findings; vendor products deployed in undocumented ways 24% and 22%; 9% of critical findings were zero-days Armadin discovered.",
      "Nearly 70% of severe findings were reachable without an account; 82% of documented chains began without credentials, and in more than 70% of environments a critical outcome was reached in three steps or fewer.",
      "71% of credentials used in kill chains belonged to applications and service accounts; nearly 90% were reachable in repositories, configuration files, backups, logs or cloud settings.",
      "93% of severe findings could be fixed without third-party action; 43% could be closed by changing a setting or policy."
    ],
    "stats": [
      {
        "value": "88%",
        "label": "of critical and high findings outside external sources"
      },
      {
        "value": "96%",
        "label": "of clients with at least one critical finding"
      },
      {
        "value": "71%",
        "label": "of kill-chain credentials were non-human"
      },
      {
        "value": "93%",
        "label": "of severe findings fixable without third parties"
      }
    ],
    "recommendations": [
      "Base remediation decisions on the measured exposure of your own environment, not only on published advisories and CVEs.",
      "Govern service account credentials with the same discipline as human ones (provisioning, storage, rotation), and scan pipelines and repositories for exposed secrets.",
      "Route configuration changes through a faster approval path than code releases."
    ],
    "why_it_matters": "Vulnerability management programmes built on CVEs and vendor advisories miss most of the attack surface that is actually exploitable. Armadin assesses with high confidence that AI will lower the cost of finding attack paths and that the share of exposure converted into intrusions will rise over the next 12 months.",
    "source_note": "The Armadin website was not reachable from the collector environment; the summary is based on Armadin's official press release (PR Newswire, 2 Nov 2026) and Infosecurity Magazine coverage. Vendor data; the number of clients and findings was not disclosed."
  }
});
