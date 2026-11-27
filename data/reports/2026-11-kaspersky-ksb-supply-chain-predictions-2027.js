RDB.add({
  "id": "2026-11-kaspersky-ksb-supply-chain-predictions-2027",
  "vendor": "kaspersky",
  "title": "Kaspersky warns of seven supply chain risks for 2027",
  "title_ru": "Kaspersky Security Bulletin: семь рисков цепочки поставок в 2027 году",
  "url": "https://www.kaspersky.com/about/press-releases/kaspersky-warns-of-seven-supply-chain-risks-for-2027",
  "pdf_url": "",
  "published": "2026-11-19",
  "date_precision": "day",
  "added": "2026-11-27",
  "type": "forecast",
  "lang": "en",
  "importance": 3,
  "tier": "key",
  "tags": [
    "цепочка поставок",
    "прогноз",
    "ИИ-агенты",
    "open source",
    "MCP"
  ],
  "sectors": [
    "ИТ и телеком",
    "Кросс-отраслевой"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Прогноз Kaspersky Security Bulletin 2026: в 2027 году главными точками входа атак на цепочку поставок станут open-source-компоненты, конвейеры сборки, ИИ-модели и ИИ-агенты, а основной добычей — секреты и токены. Отдельным риском названа зависимость от одного поставщика ИИ.",
  "summary": "В 2026 году атаки на цепочку поставок стали рутиной: злоумышленники распространяли вредоносный код через официальные сайты и серверы обновлений Notepad++, Daemon Tools и CPU-Z; в марте цепочка компрометаций прошла от сканера Trivy к инструментам Checkmarx и ИИ-шлюзу LiteLLM; в маркетплейсе навыков ИИ-агентов нашли сотни вредоносных навыков, а инфостилеры стали искать конфигурации MCP-серверов и API-ключи агентов. По исследованию Kaspersky (март 2026), 31% компаний за год столкнулись с атакой через цепочку поставок, но лишь 9% считают её самой опасной. Семь прогнозов: open source останется главной точкой входа; атаки сместятся в CI/CD, реестры контейнеров и инструменты развёртывания; появятся открытые ИИ-модели с изменёнными весами; ИИ-агенты и MCP-серверы станут носителями бэкдоров; главная добыча — секреты и ИИ-токены; ИТ- и телеком-компании останутся приоритетной целью; доступность ИИ-моделей станет риском из-за регуляторных ограничений.",
  "key_findings": [
    "Open source останется главной точкой входа: отравленные пакеты и самораспространяющиеся черви, крадущие токены разработчиков.",
    "Атаки сместятся «вниз по стеку» — в CI/CD, реестры контейнеров и инструменты развёртывания.",
    "Ожидаются открытые ИИ-модели со злонамеренно изменёнными весами и бэкдоры в ИИ-агентах и MCP-серверах.",
    "Главная цель — облачные токены, API-ключи и сервисные учётные данные; основные мотивы — шпионаж и сбор доступов.",
    "Регуляторные ограничения в странах-разработчиках популярных ИИ-моделей могут остановить бизнес-процессы без всякой атаки."
  ],
  "stats": [
    {
      "value": "7",
      "label": "прогнозов по цепочке поставок на 2027 год"
    },
    {
      "value": "31%",
      "label": "компаний столкнулись с атакой через цепочку поставок за год"
    },
    {
      "value": "9%",
      "label": "считают такую атаку самой опасной"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Вести инвентаризацию зависимостей, включая open source, ИИ-модели, MCP-серверы и навыки агентов, и сверять её с данными об угрозах.",
    "Защищать CI/CD как продуктивную среду: минимальные права токенов, короткоживущие секреты, полная ротация после инцидента.",
    "Запускать ИИ-агентов в изолированной среде с минимальным доступом и регламентировать самостоятельную установку инструментов сотрудниками.",
    "Включить компрометацию поставщика в план реагирования, в том числе его быструю изоляцию."
  ],
  "why_it_matters": "Сводит инциденты 2026 года в цепочке поставок в практическую карту рисков на 2027 год, где ИИ-модели и агенты становятся новым звеном доверия.",
  "source_note": "Выжимка по англоязычному пресс-релизу Kaspersky от 19.11.2026 (часть Kaspersky Security Bulletin 2026). Полная версия на lp.kaspersky.com недоступна из среды сборщика. Прогнозы экспертные, без количественных оценок вероятности.",
  "en": {
    "tldr": "Kaspersky Security Bulletin 2026 forecast: in 2027 open-source components, build pipelines, AI models and AI agents will be the main entry points for supply chain attacks, with secrets and tokens as the main loot. Dependence on a single AI provider is named a risk in its own right.",
    "summary": "Supply chain attacks became routine in 2026: attackers distributed malicious code through the official websites and update servers of Notepad++, Daemon Tools and CPU-Z; in March a cascade of compromises spread from the Trivy scanner to Checkmarx tools and the LiteLLM AI gateway; hundreds of malicious skills were found in an AI agent marketplace, and infostealers began hunting for MCP server configurations and agent API keys. A Kaspersky study (March 2026) found 31% of companies faced a supply chain attack in the previous year, yet only 9% ranked it most dangerous. Seven predictions: open source remains the main entry point; attacks move to CI/CD, container registries and deployment tools; open AI models with altered weights appear; AI agents and MCP servers carry backdoors; secrets and AI tokens are the main loot; IT and telecom firms stay a priority target; AI model availability becomes a risk due to regulatory restrictions.",
    "key_findings": [
      "Open source will remain the main entry point: poisoned packages and self-propagating worms stealing developer tokens.",
      "Attacks will move down the stack to CI/CD pipelines, container registries and deployment tools.",
      "Open AI models with maliciously altered weights and backdoors in AI agents and MCP servers are expected.",
      "Cloud tokens, API keys and service credentials are the main prize; espionage and access harvesting the main motives.",
      "Regulatory restrictions in countries developing popular AI models could halt business processes without any attack."
    ],
    "stats": [
      {
        "value": "7",
        "label": "supply chain predictions for 2027"
      },
      {
        "value": "31%",
        "label": "of companies faced a supply chain attack in a year"
      },
      {
        "value": "9%",
        "label": "rank it as the most dangerous threat"
      }
    ],
    "recommendations": [
      "Inventory dependencies, including open source, AI models, MCP servers and agent skills, and check them against threat intelligence.",
      "Protect CI/CD like production: least-privilege tokens, short-lived secrets, full rotation after any incident.",
      "Run AI agents in isolated environments with minimal access and set a policy for tools employees install themselves.",
      "Include supplier compromise, including rapid supplier isolation, in the incident response plan."
    ],
    "why_it_matters": "Turns the 2026 supply chain incidents into a practical 2027 risk map in which AI models and agents become a new link of trust.",
    "source_note": "Summary based on Kaspersky's English-language press release of 19 Nov 2026 (part of Kaspersky Security Bulletin 2026). The full version on lp.kaspersky.com was not reachable from the collector environment. Predictions are expert judgement without probability estimates."
  }
});
