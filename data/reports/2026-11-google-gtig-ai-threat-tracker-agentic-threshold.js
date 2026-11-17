RDB.add({
  "id": "2026-11-google-gtig-ai-threat-tracker-agentic-threshold",
  "vendor": "google",
  "title": "GTIG AI Threat Tracker: Agentic Threat Activity Crosses a Significant Threshold",
  "title_ru": "GTIG AI Threat Tracker: агентная активность злоумышленников перешла значимый порог",
  "url": "https://cloud.google.com/blog/topics/threat-intelligence/agentic-threat-activity-crosses-a-significant-threshold",
  "pdf_url": "",
  "published": "2026-11-16",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "ai",
  "lang": "en",
  "importance": 3,
  "tier": "key",
  "tags": [
    "ИИ",
    "агентные атаки",
    "эксплуатация уязвимостей",
    "LLMJacking",
    "информационные операции",
    "цепочка поставок"
  ],
  "sectors": [
    "Все отрасли",
    "СМИ",
    "Образование",
    "Криптовалюты"
  ],
  "regions": [
    "Глобально",
    "Европа",
    "Ближний Восток",
    "Азия",
    "Северная Америка"
  ],
  "tldr": "Квартальный трекер Google Threat Intelligence Group: впервые зафиксирован полностью автоматический конвейер поиска и эксплуатации уязвимостей без участия человека, а мультиагентные фреймворки (ARTEX, CAIRN, CyberStrikeAI, PentAGI) стали рабочим инструментом и киберпреступников, и шпионских групп.",
  "summary": "GTIG и Mandiant описывают переход от ручных промптов к автономным мультиагентным фреймворкам, которые автоматизируют отдельные фазы вторжения. На открытом промежуточном сервере найден фреймворк exploit_agent: он непрерывно сравнивает версии популярных веб-приложений, пишет эксплойты и сам их запускает (интерес к сайтам СМИ, развлечений и образования во Франции). Число 0-day растёт: с 8 в месяц в среднем за 2025 год до 11 в месяц в 2026-м и 22 в августе. Отдельные блоки — LLMJacking и перепродажа доступа к моделям через «LLM-миксеры», полная интеграция LLM в информационные операции, использование ИИ государственными группами (Иран, КНР, КНДР), в том числе атака через подмену настроек ИИ-ассистента для программирования. По оценке GTIG, такие инструменты пока «меняют скрытность на скорость» и оставляют заметные следы.",
  "key_findings": [
    "Впервые выявлен полностью автономный конвейер поиска и эксплуатации уязвимостей (exploit_agent): дифференциальный анализ патчей, генерация и запуск эксплойтов, установка веб-шеллов.",
    "Злоумышленники используют открытые агентные фреймворки ARTEX, CAIRN, CyberStrikeAI, HexStrike AI и PentAGI; CAIRN наблюдался в атаках, в том числе на аэрокосмическую отрасль США.",
    "Число эксплуатируемых 0-day выросло с 8 в месяц (среднее 2025 г.) до 11 в месяц в 2026 г., в августе — 22; раскрытия и эксплойты почти удвоились с января по август.",
    "LLMJacking: в отдельных инцидентах мошеннические списания превышали $100 тыс. в день, в худшем случае ущерб достиг $1 млн; доступ к моделям перепродаётся по $0,10–25 за 1 млн токенов.",
    "Группа MIDNIGHT NEPTUNE (КНДР) меняла файл настроек ИИ-ассистента для программирования в репозиториях, чтобы при его запуске загружался бэкдор SOMBERMEME.",
    "Платформа «влияния как услуги» управляла 100 000+ аккаунтов с помощью ИИ-агентов, подмены идентификаторов устройств и облачных ферм телефонов."
  ],
  "stats": [
    {
      "value": "22",
      "label": "0-day за август 2026 (против 8/мес. в 2025)"
    },
    {
      "value": "$1 млн",
      "label": "максимальный ущерб от одного случая LLMJacking"
    },
    {
      "value": "100 000+",
      "label": "аккаунтов в одной IaaS-платформе влияния"
    },
    {
      "value": "$0,10–25",
      "label": "цена 1 млн токенов в «LLM-миксерах»"
    }
  ],
  "actors": [
    "CALANQUE ION (APT42)",
    "LEAKY CASTLE",
    "MIDNIGHT NEPTUNE"
  ],
  "malware": [
    "SOMBERMEME",
    "exploit_agent",
    "ARTEX",
    "CAIRN",
    "PentAGI"
  ],
  "cves": [
    "CVE-2026-81578",
    "CVE-2026-82078",
    "CVE-2026-109618",
    "CVE-2026-109619",
    "CVE-2026-40217"
  ],
  "ttps": [
    {
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    },
    {
      "id": "T1588.006",
      "name": "Obtain Capabilities: Vulnerabilities"
    },
    {
      "id": "T1505.003",
      "name": "Server Software Component: Web Shell"
    },
    {
      "id": "T1552.001",
      "name": "Unsecured Credentials: Credentials In Files"
    },
    {
      "id": "T1195.001",
      "name": "Compromise Software Dependencies and Development Tools"
    },
    {
      "id": "T1496",
      "name": "Resource Hijacking"
    }
  ],
  "recommendations": [
    "Сокращать окно установки патчей для публичных веб-приложений: эксплойты по диффам патчей появляются за дни.",
    "Включить детектирование активности агентных фреймворков (ARTEX и аналогов) и применить руководство Mandiant по усилению защиты от них.",
    "Хранить ключи API облачных и ИИ-сервисов вне репозиториев, отслеживать создание сервисных аккаунтов и аномальные расходы на модели.",
    "Контролировать изменения конфигурационных файлов ИИ-ассистентов для разработки в репозиториях."
  ],
  "why_it_matters": "Первое публичное подтверждение крупного вендора, что цикл «нашёл уязвимость — написал эксплойт — атаковал» уже выполняется без человека; это сжимает окно реагирования на n-day до дней.",
  "source_note": "Выжимка по первоисточнику — публикации GTIG/Mandiant в блоге Google Cloud от 16.11.2026. Упомянутые CVE приведены как в оригинале.",
  "en": {
    "tldr": "Google Threat Intelligence Group's quarterly tracker: for the first time a fully automated vulnerability discovery and exploitation pipeline without human involvement was observed, and multi-agent frameworks (ARTEX, CAIRN, CyberStrikeAI, PentAGI) have become a working tool for both cybercriminals and espionage groups.",
    "summary": "GTIG and Mandiant describe the shift from manual prompts to autonomous multi-agent frameworks that automate individual intrusion phases. The exploit_agent framework was found on an exposed staging server: it continuously diffs versions of popular web applications, writes exploits and launches them itself (interest in media, entertainment and education sites in France). Zero-days are growing: from an average of 8 per month in 2025 to 11 per month in 2026 and 22 in August. Separate sections cover LLMJacking and resale of model access via 'LLM mixers', full integration of LLMs into information operations, and AI use by state groups (Iran, China, North Korea), including an attack via tampered coding-assistant settings. GTIG assesses that such tools currently 'trade stealth for speed' and leave noticeable traces.",
    "key_findings": [
      "The first fully autonomous vulnerability discovery and exploitation pipeline (exploit_agent) was identified: differential patch analysis, exploit generation and launch, web shell installation.",
      "Attackers use the open agentic frameworks ARTEX, CAIRN, CyberStrikeAI, HexStrike AI and PentAGI; CAIRN was seen in attacks including on the US aerospace industry.",
      "Exploited zero-days rose from 8 per month (2025 average) to 11 per month in 2026, and 22 in August; disclosures and exploits nearly doubled from January to August.",
      "LLMJacking: in some incidents fraudulent charges exceeded $100,000 a day, with losses reaching $1 million in the worst case; model access is resold at $0.10–25 per 1M tokens.",
      "MIDNIGHT NEPTUNE (North Korea) modified a coding assistant's settings file in repositories so that launching it loaded the SOMBERMEME backdoor.",
      "An 'influence-as-a-service' platform managed 100,000+ accounts using AI agents, device ID spoofing and cloud phone farms."
    ],
    "stats": [
      {
        "value": "22",
        "label": "zero-days in August 2026 (vs 8/month in 2025)"
      },
      {
        "value": "$1M",
        "label": "maximum loss from one LLMJacking case"
      },
      {
        "value": "100,000+",
        "label": "accounts in one influence platform"
      },
      {
        "value": "$0.10–25",
        "label": "price per 1M tokens in 'LLM mixers'"
      }
    ],
    "recommendations": [
      "Shorten the patching window for public web applications: exploits based on patch diffs appear within days.",
      "Enable detection of agentic framework activity (ARTEX and similar) and apply Mandiant's hardening guidance against them.",
      "Keep cloud and AI service API keys out of repositories; monitor service account creation and anomalous model spend.",
      "Control changes to coding assistants' configuration files in repositories."
    ],
    "why_it_matters": "The first public confirmation by a major vendor that the 'find a vulnerability — write an exploit — attack' cycle already runs without humans; this shrinks the n-day response window to days.",
    "source_note": "Summary based on the primary source — the GTIG/Mandiant post on the Google Cloud blog of 16 Nov 2026. CVEs are cited as in the original."
  }
});
