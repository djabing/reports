RDB.add({
  "id": "2026-11-unit42-cairn-autonomous-ai-attacks",
  "vendor": "unit42",
  "title": "Attackers Use Autonomous AI to Target Semiconductor, Defense and Civil Society Sectors",
  "title_ru": "Злоумышленники применяют автономный ИИ против полупроводниковой отрасли, оборонного сектора и гражданского общества",
  "url": "https://unit42.paloaltonetworks.com/cairn-framework-ai-autonomous-attacks/",
  "pdf_url": "",
  "published": "2026-11-12",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "apt",
  "lang": "en",
  "importance": 3,
  "tier": "case",
  "tags": [
    "ИИ",
    "агентные атаки",
    "кибершпионаж",
    "полупроводники",
    "утечки данных"
  ],
  "sectors": [
    "Полупроводники и производство",
    "Оборона",
    "НКО и гражданское общество",
    "Образование"
  ],
  "regions": [
    "Северная Америка",
    "Глобально"
  ],
  "tldr": "Unit 42 описала кластер CL-STA-1238 (с умеренной уверенностью — китайская разведывательная активность), который в августе–сентябре 2026 г. провёл 25 операций против как минимум 19 организаций с помощью доработанного открытого агентного фреймворка Cairn и китайских LLM; доступ или данные получены в 10 организациях.",
  "summary": "Cairn — открытый фреймворк для пентеста, где ИИ-агенты координируются через общую «доску»: фиксируют подтверждённые факты и ставят в очередь следующие действия, а оператор может подсказывать по ходу. Атакующие использовали собственный форк и набор навыков «AIScan Runner Skills», модели Zhipu GLM 5.2 и DeepSeek V4. Ограничения моделей обходили преамбулой о «санкционированном тестировании» и файлом AUTHORIZATION.md — ни одна модель не отказала. Операции длились от 20 минут до 50+ часов. Использовались известные обходы аутентификации, слабые и стандартные пароли, открытые облачные API и старые публичные уязвимости — без сложного вредоносного ПО. По выводу Unit 42, ИИ увеличил масштаб и охват кампании, а не её техническую изощрённость.",
  "key_findings": [
    "25 операций против как минимум 19 организаций; несанкционированный доступ или извлечение данных — в 10 из них.",
    "Цели: 7 организаций из цепочки поставок полупроводников и передового производства, 3 — оборона и оборонная аналитика, 4 — правозащитные и гражданские организации.",
    "У профсоюза учителей США выгружено более 1 млн записей членов и около 31 000 контактов CRM; у производителя промышленной автоматизации — около 150 000 внутренних документов.",
    "В отраслевой организации по стандартизации атакующие перезаписали действующий документ голосования по стандарту.",
    "Модели: Zhipu GLM 5.2 (13 операций), DeepSeek V4 Flash (8), DeepSeek V4 Pro (4); отказов модели не зафиксировано."
  ],
  "stats": [
    {
      "value": "25",
      "label": "операций за август–сентябрь 2026"
    },
    {
      "value": "10 из 19+",
      "label": "организаций с подтверждённым доступом или утечкой"
    },
    {
      "value": "20 мин – 50+ ч",
      "label": "длительность одной операции"
    },
    {
      "value": ">1 млн",
      "label": "записей выгружено у одной жертвы"
    }
  ],
  "actors": [
    "CL-STA-1238"
  ],
  "malware": [
    "Cairn (модифицированный форк)",
    "AIScan Runner Skills"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1595",
      "name": "Active Scanning"
    },
    {
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    },
    {
      "id": "T1110.003",
      "name": "Brute Force: Password Spraying"
    },
    {
      "id": "T1136",
      "name": "Create Account"
    },
    {
      "id": "T1528",
      "name": "Steal Application Access Token"
    },
    {
      "id": "T1213",
      "name": "Data from Information Repositories"
    },
    {
      "id": "T1565",
      "name": "Data Manipulation"
    }
  ],
  "recommendations": [
    "Усилить идентификацию: MFA, отказ от стандартных и слабых паролей, ограничение привилегированного доступа.",
    "Сократить внешнюю поверхность атаки: закрыть лишние публичные приложения, облачные хранилища и формы регистрации.",
    "Оперативно закрывать известные уязвимости — агентные фреймворки массово перебирают старые CVE.",
    "Отслеживать создание новых учётных записей и выпуск API-токенов, блокировать опубликованные индикаторы."
  ],
  "why_it_matters": "Один из первых подробных разборов шпионской кампании, где ИИ-агенты вели вторжения почти автономно: небольшая команда с открытым фреймворком и доступными LLM атакует десятки организаций параллельно.",
  "source_note": "Выжимка по первоисточнику — публикации Unit 42 от 12.11.2026. Сопоставление с MITRE ATT&CK выполнено редакцией по описанию техник в отчёте.",
  "en": {
    "tldr": "Unit 42 described cluster CL-STA-1238 (with moderate confidence — Chinese intelligence activity), which in August–September 2026 carried out 25 operations against at least 19 organisations using a modified open agentic framework, Cairn, and Chinese LLMs; access or data was obtained at 10 organisations.",
    "summary": "Cairn is an open pentest framework where AI agents coordinate via a shared 'board': they record confirmed facts and queue next actions, and the operator can give hints along the way. The attackers used their own fork and an 'AIScan Runner Skills' skill set, with Zhipu GLM 5.2 and DeepSeek V4 models. Model restrictions were bypassed with an 'authorised testing' preamble and an AUTHORIZATION.md file — no model refused. Operations lasted from 20 minutes to 50+ hours. Known authentication bypasses, weak and default passwords, exposed cloud APIs and old public vulnerabilities were used — no sophisticated malware. Unit 42 concludes that AI increased the campaign's scale and reach, not its technical sophistication.",
    "key_findings": [
      "25 operations against at least 19 organisations; unauthorised access or data extraction at 10 of them.",
      "Targets: 7 organisations from the semiconductor and advanced manufacturing supply chain, 3 defence and defence analysis, 4 human rights and civil society organisations.",
      "More than 1 million member records and about 31,000 CRM contacts were exfiltrated from a US teachers' union; about 150,000 internal documents from an industrial automation manufacturer.",
      "At an industry standards body, the attackers overwrote an active ballot document for a standard.",
      "Models: Zhipu GLM 5.2 (13 operations), DeepSeek V4 Flash (8), DeepSeek V4 Pro (4); no model refusals recorded."
    ],
    "stats": [
      {
        "value": "25",
        "label": "operations in Aug–Sep 2026"
      },
      {
        "value": "10 of 19+",
        "label": "organisations with confirmed access or leaks"
      },
      {
        "value": "20 min – 50+ h",
        "label": "duration of one operation"
      },
      {
        "value": ">1M",
        "label": "records exfiltrated from one victim"
      }
    ],
    "recommendations": [
      "Strengthen identity: MFA, no default or weak passwords, limited privileged access.",
      "Reduce the external attack surface: close unnecessary public applications, cloud storage and registration forms.",
      "Close known vulnerabilities promptly — agentic frameworks mass-test old CVEs.",
      "Monitor creation of new accounts and issuance of API tokens; block published indicators."
    ],
    "why_it_matters": "One of the first detailed analyses of an espionage campaign in which AI agents ran intrusions almost autonomously: a small team with an open framework and available LLMs attacks dozens of organisations in parallel.",
    "source_note": "Summary based on the primary source — Unit 42 post of 12 Nov 2026. Mapping to MITRE ATT&CK was done by the editors from the technique descriptions in the report."
  }
});
