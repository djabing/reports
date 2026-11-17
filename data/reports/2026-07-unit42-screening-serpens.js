RDB.add({
  "id": "2026-07-unit42-screening-serpens",
  "vendor": "unit42",
  "title": "Tracking Iranian APT Screening Serpens' 2026 Espionage Campaigns",
  "title_ru": "Шпионские кампании иранской APT Screening Serpens в 2026 году",
  "url": "https://unit42.paloaltonetworks.com/tracking-iran-apt-screening-serpens/",
  "pdf_url": "",
  "published": "2026-07",
  "date_precision": "month",
  "added": "2026-10-15",
  "type": "apt",
  "lang": "en",
  "importance": 2,
  "tier": "case",
  "tags": [
    "APT",
    "Иран",
    "шпионаж",
    "социальная инженерия",
    "RAT",
    ".NET"
  ],
  "sectors": [
    "ИТ",
    "Оборона"
  ],
  "regions": [
    "США",
    "Израиль",
    "ОАЭ",
    "Ближний Восток"
  ],
  "tldr": "Иранская Screening Serpens (UNC1549, Smoke Sandstorm) атакует ИТ- и оборонные компании через фейковые вакансии; за февраль–апрель 2026 появилось шесть новых RAT, впервые применён AppDomainManager hijacking.",
  "summary": "Unit 42 отслеживает атаки группировки с середины февраля по апрель 2026 года против организаций в США, Израиле, ОАЭ и ещё как минимум двух странах Ближнего Востока. Всплеск активности совпал с региональным конфликтом, начавшимся 28 февраля 2026. Группа использует персонализированные «рекрутинговые» приманки от имени известных брендов и платформ найма, а для запуска — комбинацию DLL sideloading и перехвата AppDomainManager в .NET.",
  "key_findings": [
    "Шесть новых вариантов RAT, разработанных и применённых в феврале–апреле 2026.",
    "Впервые: связка DLL sideloading + AppDomainManager hijacking для запуска MiniJunk и MiniUpdate.",
    "Цели — специалисты технологического сектора и оборонной отрасли минимум в пяти странах.",
    "Приманки: персонализированные вакансии от имени известных брендов и платформ найма («Iranian Dream Job»).",
    "Высокий операционный темп сохранялся весь март и апрель."
  ],
  "stats": [
    {
      "value": "6",
      "label": "новых вариантов RAT"
    },
    {
      "value": "5+",
      "label": "стран-целей"
    },
    {
      "value": "3 мес",
      "label": "период наблюдения"
    }
  ],
  "actors": [
    "Screening Serpens",
    "UNC1549",
    "Smoke Sandstorm"
  ],
  "malware": [
    "MiniJunk",
    "MiniUpdate"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1566.002",
      "name": "Spearphishing Link"
    },
    {
      "id": "T1574",
      "name": "Hijack Execution Flow"
    },
    {
      "id": "T1574.014",
      "name": "AppDomainManager"
    },
    {
      "id": "T1204",
      "name": "User Execution"
    }
  ],
  "recommendations": [
    "Предупредить инженеров и HR о поддельных вакансиях и «тестовых заданиях».",
    "Детектировать загрузку DLL из нетипичных каталогов рядом с подписанными бинарями.",
    "Мониторить .config-файлы .NET-приложений с параметрами appDomainManagerAssembly."
  ],
  "why_it_matters": "Наглядный пример того, как геополитические события мгновенно отражаются на активности APT и как «job lure» остаётся эффективным вектором против инженеров.",
  "source_note": "Выжимка по аннотации Unit 42 и обзорам (Cyber Magazine, TechCentral, Cipherssecurity). Дата — приблизительно, по датам публикаций обзоров.",
  "en": {
    "tldr": "Iran's Screening Serpens (UNC1549, Smoke Sandstorm) targets IT and defence companies with fake job offers; six new RATs appeared in February–April 2026, and AppDomainManager hijacking was used for the first time.",
    "summary": "Unit 42 tracked the group's attacks from mid-February to April 2026 against organisations in the US, Israel, the UAE and at least two other Middle Eastern countries. The spike coincided with the regional conflict that began on 28 February 2026. The group uses personalised 'recruitment' lures in the name of well-known brands and hiring platforms, and combines DLL sideloading with .NET AppDomainManager hijacking for execution.",
    "key_findings": [
      "Six new RAT variants developed and deployed in February–April 2026.",
      "First use of DLL sideloading + AppDomainManager hijacking to launch MiniJunk and MiniUpdate.",
      "Targets: technology and defence professionals in at least five countries.",
      "Lures: personalised job offers in the name of well-known brands and hiring platforms ('Iranian Dream Job').",
      "High operational tempo sustained through March and April."
    ],
    "stats": [
      {
        "value": "6",
        "label": "new RAT variants"
      },
      {
        "value": "5+",
        "label": "target countries"
      },
      {
        "value": "3 months",
        "label": "observation period"
      }
    ],
    "recommendations": [
      "Warn engineers and HR about fake vacancies and 'test assignments'.",
      "Detect DLL loading from unusual directories next to signed binaries.",
      "Monitor .NET application .config files for appDomainManagerAssembly settings."
    ],
    "why_it_matters": "A clear example of how geopolitical events instantly show up in APT activity and how job lures remain effective against engineers.",
    "source_note": "Summary based on the Unit 42 abstract and coverage (Cyber Magazine, TechCentral, Cipherssecurity). Date is approximate, based on coverage dates."
  }
});
